import { Data } from "@/app/Data";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    return (
        <section id="projects" className="max-w-200 mx-auto px-5 pb-20">
            {/* Section heading */}
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold text-white tracking-tight">Projects</h2>
                <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                    View all
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-800/40 border border-neutral-800/40">

                {Data.projects.map((project) => (
                    <div
                        key={project.title}
                        className="flex flex-col p-6 sm:p-7 border border-neutral-800 hover:bg-neutral-900/10 transition-colors group"
                    >
                        {/* Project Preview Image */}
                        <div className="relative w-full aspect-16/10 overflow-hidden rounded-xl border border-neutral-800/80 bg-neutral-900/60 mb-5">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                        </div>

                        <div className="flex items-start justify-between gap-3 mb-1">
                            <div className="min-w-0">
                                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-xs text-neutral-400 mt-0.5">
                                    {project.shortdescription}
                                </p>
                            </div>

                            <div className="flex items-center gap-3 shrink-0 pt-0.5">
                                <Link
                                    href={project.link || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-neutral-400 hover:text-white transition-colors"
                                >
                                    preview
                                </Link>
                                <Link
                                    href={project.githublink || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-neutral-400 hover:text-white transition-colors"
                                >
                                    github
                                </Link>
                            </div>
                        </div>

                        <p className="text-xs text-neutral-400/90 leading-relaxed mt-3 mb-5">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-1.5 mt-auto">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech.name}
                                    className="px-2 py-0.5 text-xs text-neutral-300 bg-neutral-900/90 border border-neutral-800 rounded font-mono"
                                >
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
