"use client";

import { useEffect, useState, useRef } from "react";

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface CalendarData {
  totalContributions: number;
  weeks: Week[];
}

/* ── constants ── */
const CELL = 10;
const GAP  = 2;
const STEP = CELL + GAP; // 12px per column/row

const MONTH_LABELS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
];

const LEVEL_COLORS = [
  "#1a1a1a", // 0 — empty
  "#555555", // 1 — low
  "#808080", // 2 — mid
  "#aaaaaa", // 3 — high
  "#d9d9d9", // 4 — max
];

function getLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 2)  return 1;
  if (count <= 4)  return 2;
  if (count <= 7)  return 3;
  return 4;
}

/* collect the first week-index where a new month starts */
function getMonthMarkers(weeks: Week[]) {
  const markers: { label: string; x: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const day = week.contributionDays[0];
    if (!day) return;
    const m = new Date(day.date).getMonth();
    if (m !== lastMonth) {
      markers.push({ label: MONTH_LABELS[m], x: wi * STEP });
      lastMonth = m;
    }
  });
  return markers;
}

export default function GithubHeatmap() {
  const [data,    setData]    = useState<CalendarData | null>(null);
  const [error,   setError]   = useState(false);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    fetch("/api/github")
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then(setData)
      .catch(() => setError(true));
  }, []);

  /* ── error ── */
  if (error) return (
    <p className="mt-10 text-xs font-mono text-neutral-600">
      Failed to load contributions
    </p>
  );

  /* ── loading skeleton ── */
  if (!data) {
    const skeletonWeeks = 26;
    const svgW = skeletonWeeks * STEP;
    const svgH = 7 * STEP;
    return (
      <div className="mt-10 w-full overflow-x-auto">
        <svg
          width="100%"
          viewBox={`0 0 ${svgW} ${svgH}`}
          style={{ display: "block" }}
        >
          {Array.from({ length: skeletonWeeks }).map((_, wi) =>
            Array.from({ length: 7 }).map((_, di) => (
              <rect
                key={`${wi}-${di}`}
                x={wi * STEP}
                y={di * STEP}
                width={CELL}
                height={CELL}
                rx={2}
                fill="#1a1a1a"
                opacity={0.6 + Math.random() * 0.4}
              />
            ))
          )}
        </svg>
      </div>
    );
  }

  /* ── pad to always 52 weeks — future months render as empty black ── */
  const TOTAL_WEEKS = 52;
  const emptyDay = { contributionCount: 0, date: "" };
  const emptyWeek = { contributionDays: Array(7).fill(emptyDay) };
  const paddedWeeks = [
    ...data.weeks,
    ...Array(Math.max(0, TOTAL_WEEKS - data.weeks.length)).fill(emptyWeek),
  ];

  /* ── computed layout ── */
  const weeks        = paddedWeeks;
  const svgW         = TOTAL_WEEKS * STEP;   // always fixed 52-week width
  const svgH         = 7 * STEP;
  const LABEL_HEIGHT = 18;
  const totalH       = LABEL_HEIGHT + svgH;
  const monthMarkers = getMonthMarkers(weeks);

  return (
    <div className="mt-10 w-full" style={{ position: "relative" }}>

      {/* ── total count label ── */}
      <p className="text-xs font-mono text-neutral-500 mb-2">
        {data.totalContributions} contributions in {new Date().getFullYear()}
      </p>

      {/* ── SVG ── */}
      <div className="w-full overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${svgW} ${totalH}`}
          style={{ display: "block", width: "100%" }}
          onMouseLeave={() => setTooltip(null)}
        >
          {/* month labels */}
          {monthMarkers.map((m, i) => (
            <text
              key={i}
              x={m.x}
              y={LABEL_HEIGHT - 4}
              fill="#737373"
              fontSize={8}
              fontFamily="monospace"
            >
              {m.label}
            </text>
          ))}

          {/* grid — offset down by LABEL_HEIGHT */}
          <g transform={`translate(0, ${LABEL_HEIGHT})`}>
            {weeks.map((week, wi) =>
              week.contributionDays.map((day, di) => {
                const level = getLevel(day.contributionCount);
                const x = wi * STEP;
                const y = di * STEP;
                return (
                  <rect
                    key={`${wi}-${di}`}
                    x={x}
                    y={y}
                    width={CELL}
                    height={CELL}
                    rx={2}
                    fill={LEVEL_COLORS[level]}
                    style={{ cursor: "crosshair", transition: "fill 120ms" }}
                    onMouseEnter={(e) => {
                      const svg = svgRef.current;
                      if (!svg) return;
                      const box = svg.getBoundingClientRect();
                      const scaleX = box.width / svgW;
                      const scaleY = box.height / totalH;
                      const formatted = new Date(day.date).toLocaleDateString("en-US", {
                        month: "short", day: "numeric", year: "numeric",
                      });
                      setTooltip({
                        text: `${day.contributionCount} contribution${day.contributionCount !== 1 ? "s" : ""} · ${formatted}`,
                        x: box.left + (x + CELL / 2) * scaleX,
                        y: box.top  + (LABEL_HEIGHT + y) * scaleY,
                      });
                      e.currentTarget.setAttribute("fill", level === 0 ? "#333" : LEVEL_COLORS[Math.min(level + 1, 4)]);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.setAttribute("fill", LEVEL_COLORS[level]);
                    }}
                  />
                );
              })
            )}
          </g>

          {/* legend */}
          <g transform={`translate(${svgW - 5 * (CELL + 2) - 40}, ${totalH - CELL})`}>
            <text x={0} y={CELL - 1} fill="#555" fontSize={9} fontFamily="monospace">Less</text>
            {LEVEL_COLORS.map((color, i) => (
              <rect
                key={i}
                x={30 + i * (CELL + 2)}
                y={0}
                width={CELL}
                height={CELL}
                rx={2}
                fill={color}
              />
            ))}
            <text x={30 + 5 * (CELL + 2) + 2} y={CELL - 1} fill="#555" fontSize={9} fontFamily="monospace">More</text>
          </g>
        </svg>
      </div>

      {/* ── tooltip ── */}
      {tooltip && (
        <div
          style={{
            position: "fixed",
            left: tooltip.x,
            top:  tooltip.y - 8,
            transform: "translate(-50%, -100%)",
            background: "#1a1a1a",
            border: "1px solid #333",
            color: "#ccc",
            fontSize: 11,
            fontFamily: "monospace",
            padding: "4px 10px",
            borderRadius: 6,
            pointerEvents: "none",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 14px rgba(0,0,0,0.5)",
            zIndex: 50,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}
