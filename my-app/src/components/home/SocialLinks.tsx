import Link from "next/link"

const links = [
  { href: "https://github.com/yourhandle",      label: "GitHub",   icon: "GH" },
  { href: "https://linkedin.com/in/yourid",      label: "LinkedIn", icon: "in" },
  { href: "https://twitter.com/yourhandle",      label: "Twitter",  icon: "𝕏"  },
]

export default function SocialLinks() {
  return (
    <nav className="flex items-center gap-4">
      {links.map((l) => (
        <Link
          key={l.label}
          href={l.href}
          target="_blank"
          aria-label={l.label}
          className="text-neutral-500 text-sm hover:text-neutral-200 transition-colors duration-200"
        >
          {l.icon}
        </Link>
      ))}
    </nav>
  )
}
