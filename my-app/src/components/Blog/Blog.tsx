import { Data } from "@/app/Data";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
    return (
        <section id="blog" className="max-w-200 mx-auto px-5 pb-20">
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold text-white tracking-tight">Blogs</h2>
                <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                    View all
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-800/40 border border-neutral-800/40">

                {Data.blogs.map((blog) => (
                    <div
                        key={blog.title}
                        className="flex flex-col p-6 sm:p-7 border border-neutral-800 hover:bg-neutral-900/10 transition-colors group"
                    >
                        <div className="relative w-full aspect-16/10 overflow-hidden rounded-xl border border-neutral-800/80 bg-neutral-900/60 mb-5">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                        </div>

                        <div className="flex items-start justify-between gap-3 mb-1">
                            <div className="min-w-0">
                                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                                    {blog.title}
                                </h3>
                                <p className="text-xs text-neutral-400 mt-0.5">
                                    {blog.shortdescription}
                                </p>
                            </div>

                            <div className="flex items-center gap-3 shrink-0 pt-0.5">
                                <Link
                                    href={blog.link || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-neutral-400 hover:text-white transition-colors"
                                >
                                    median
                                </Link>
                            </div>
                        </div>

                        <p className="text-xs text-neutral-400/90 leading-relaxed mt-3 mb-5">
                            {blog.description}
                        </p>

                    </div>
                ))}
            </div>
        </section>
    );
}