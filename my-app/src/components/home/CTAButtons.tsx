import Link from "next/link"

export default function CTAButtons() {
  return (
    <div className="flex gap-2.5 flex-wrap mb-10">
      <Link
        href="/Projects"
        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-neutral-700 text-[13px] text-neutral-300 font-mono hover:border-neutral-500 hover:text-white hover:bg-neutral-800 transition-all duration-200"
      >
        <span>👤</span> See My Work
      </Link>

      <Link
        href="/Contact"
        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-neutral-700 text-[13px] text-neutral-300 font-mono hover:border-neutral-500 hover:text-white hover:bg-neutral-800 transition-all duration-200"
      >
        <span>📞</span> Book A Call
      </Link>
    </div>
  )
}
