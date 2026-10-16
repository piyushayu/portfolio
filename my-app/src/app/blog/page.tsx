import { Data } from "@/app/Data";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-200 mx-auto px-5 pt-12 pb-20 w-full">
        {/* Navigation / Back */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors font-mono"
          >
            ← Back to Home
          </Link>
          <span className="text-xs text-neutral-500 font-mono">
            {Data.blogs.length} {Data.blogs.length === 1 ? "Article" : "Articles"}
          </span>
        </div>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-white tracking-tight font-mono mb-2">
            Blogs
          </h1>
          <p className="text-sm text-neutral-400 font-mono">
            Thoughts, engineering deep-dives, and technical writings.
          </p>
        </header>

        {/* Blog Cards List */}
        <div className="flex flex-col gap-8">
          {Data.blogs.map((blog) => (
            <article
              key={blog.title}
              className="border border-neutral-800 rounded-xl bg-neutral-950/60 p-6 sm:p-7 hover:border-neutral-700 transition-all group"
            >
              {/* Blog Preview Image */}
              {blog.image && (
                <div className="relative w-full aspect-16/10 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 mb-6">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              )}

              {/* Title, Date & Preview */}
              <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                <div className="min-w-0 max-w-xl">
                  <div className="flex items-center gap-3 mb-1">
                    {blog.date && (
                      <span className="text-xs text-neutral-500 font-mono">
                        {blog.date}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-white tracking-tight font-mono">
                    {blog.title}
                  </h2>
                  {blog.shortdescription && (
                    <p className="text-xs text-neutral-400 mt-1 font-mono">
                      {blog.shortdescription}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 shrink-0 pt-1">
                  {blog.link && (
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Preview article"
                      title="Read Article"
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors font-mono"
                    >
                      <span>Read</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Detailed Description */}
              {blog.description && (
                <p className="text-sm text-neutral-400 leading-relaxed font-mono">
                  {blog.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
