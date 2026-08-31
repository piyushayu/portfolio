import Link from "next/link"
import { Data } from "@/app/Data"

export default function SocialLinks() {
  return (
    <nav className="flex items-center gap-4">
      {Data.home.Sociallink.map((link) => (
        <Link
          key={link.platform}
          href={link.url}
          target="_blank"
          aria-label={link.platform}
          className="text-neutral-500 text-sm hover:text-neutral-200 transition-colors duration-200"
        >
          {link.platform}
        </Link>
      ))}
    </nav>
  )
}
