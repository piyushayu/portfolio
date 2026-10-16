"use client";
import Link from "next/link";
import LocationClock from "./LocationClock";

async function getresume() {
  window.open("/resume.pdf", "_blank", "noopener,noreferrer");
}

export default function CTAButtons() {
  return (
    <div className="flex flex-row justify-between relative">
    <div className="flex gap-2.5 flex-wrap">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-neutral-700 text-[13px] text-neutral-300 font-mono hover:border-neutral-500 hover:text-white hover:bg-neutral-800 transition-all duration-200"
      >
        <span>👤</span> My work
      </Link>

      <button
        onClick={getresume}
        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-neutral-700 text-[13px] text-neutral-300 font-mono hover:border-neutral-500 hover:text-white hover:bg-neutral-800 transition-all duration-200"
      >
      <span>📄</span> Resume
      </button>
    </div>
    <LocationClock/>
    </div>
  )
}
