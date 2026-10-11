import { Data } from "@/app/Data";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
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
            {Data.projects.length} {Data.projects.length === 1 ? "Project" : "Projects"}
          </span>
        </div>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-white tracking-tight font-mono mb-2">
            Projects
          </h1>
          <p className="text-sm text-neutral-400 font-mono">
            A showcase of applications, tools, and systems I have built.
          </p>
        </header>

        {/* Projects Grid / List */}
        <div className="flex flex-col gap-8">
          {Data.projects.map((project) => (
            <div
              key={project.title}
              className="border border-neutral-800 rounded-xl bg-neutral-950/60 p-6 sm:p-7 hover:border-neutral-700 transition-all group"
            >
              {/* Project Preview Image */}
              {project.image && (
                <div className="relative w-full aspect-16/10 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              )}

              {/* Title & Links */}
              <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight font-mono">
                    {project.title}
                  </h2>
                  <p className="text-xs text-neutral-400 mt-1 font-mono">
                    {project.shortdescription}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors font-mono"
                    >
                      Live Demo ↗
                    </Link>
                  )}
                  {project.githublink && (
                    <Link
                      href={project.githublink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors font-mono"
                    >
                      GitHub ↗
                    </Link>
                  )}
                </div>
              </div>

              {/* Detailed Description */}
              {project.description && (
                <p className="text-sm text-neutral-400 leading-relaxed mb-5 font-mono">
                  {project.description}
                </p>
              )}

              {/* Tech Stack Tags */}
              {project.tech && project.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-800/60">
                  {project.tech.map((t) => (
                    <span
                      key={t.name}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono"
                    >
                      {t.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
