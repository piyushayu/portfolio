import { NextResponse } from "next/server";

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
const GITHUB_USERNAME = "piyushayu";

const query = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              color
            }
          }
        }
      }
    }
  }
`;

export const dynamic = "force-dynamic";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.error(
      "Missing GITHUB_TOKEN environment variable. Please set GITHUB_TOKEN in your Vercel project environment variables."
    );
    return NextResponse.json(
      {
        error:
          "GITHUB_TOKEN is missing. Please configure it in your Vercel environment variables.",
      },
      { status: 500 }
    );
  }

  /* Calculate date range: Jan 1 of current year → now */
  const now = new Date();
  const yearStart = new Date(now.getFullYear(), 0, 1).toISOString();
  const today = now.toISOString();

  try {
    const response = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "piyushayu-portfolio",
      },
      body: JSON.stringify({
        query,
        variables: {
          username: GITHUB_USERNAME,
          from: yearStart,
          to: today,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `GitHub API error (${response.status}):`,
        errorText
      );
      return NextResponse.json(
        { error: "GitHub API request failed", details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (data.errors) {
      console.error("GitHub GraphQL errors:", data.errors);
      return NextResponse.json(
        { error: data.errors[0]?.message || "GraphQL query error" },
        { status: 400 }
      );
    }

    const calendar =
      data.data.user.contributionsCollection.contributionCalendar;

    return NextResponse.json(calendar, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800",
      },
    });
  } catch (err: any) {
    console.error("Failed to fetch contribution data:", err);
    return NextResponse.json(
      { error: "Failed to fetch contribution data", details: err?.message },
      { status: 500 }
    );
  }
}
