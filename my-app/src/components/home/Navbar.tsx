import Link from "next/link";
import { Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-4" aria-label="Main Navigation">
      <Link
        href="/"
        className="text-neutral-400 text-sm hover:text-white transition-colors duration-200"
      >
        Home
      </Link>
      <Link
        href="/projects"
        className="text-neutral-400 text-sm hover:text-white transition-colors duration-200"
      >
        Projects
      </Link>
      <Link
        href="/blog"
        className="text-neutral-400 text-sm hover:text-white transition-colors duration-200"
      >
        Blog
      </Link>
      <a
        href="/#contact"
        aria-label="Contact"
        title="Contact"
        className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center justify-center p-0.5"
      >
        Contact
      </a>
    </nav>
  );
}