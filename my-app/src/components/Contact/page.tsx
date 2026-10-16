"use client";

import { Data } from "@/app/Data";
import { Mail, Paperclip, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const iconMap: Record<string, React.ReactNode> = {
  github: <FaGithub className="w-4 h-4" />,
  linkedin: <FaLinkedin className="w-4 h-4" />,
  twitter: <FaXTwitter className="w-4 h-4" />,
  mail: <Mail className="w-4 h-4" />,
  resume: <Paperclip className="w-4 h-4" />,
};

export default function Contact() {
  return (
    <section id="contact" className="max-w-200 mx-auto px-5 pb-20">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-white tracking-tight">Contact</h2>
      </div>

      <div className="flex flex-wrap items-center gap-2.5 sm:gap-8">
        {Data.Contact.links.map((link) => {
          const key = (link.platform || link.name).toLowerCase();

          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-neutral-800 bg-neutral-900/40 text-sm text-neutral-300 hover:text-white hover:border-neutral-600 hover:bg-neutral-800/80 transition-all duration-200 cursor-pointer"
            >
              {iconMap[key] && (
                <span className="text-neutral-400 group-hover:text-white transition-colors duration-200">
                  {iconMap[key]}
                </span>
              )}
              <span className="font-medium">{link.name}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
