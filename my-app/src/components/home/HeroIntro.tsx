"use client"
import { useEffect, useState } from "react"
import { Data } from "@/app/Data"
import Image from "next/image"
import Avatar from "../../../public/avatar.png"

export default function HeroIntro() {
  const roles = Data.home.Role
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    if (!roles || roles.length <= 1) return

    const interval = setInterval(() => {
      setIsFading(true)
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        setIsFading(false)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [roles])

  return (
    <section className="mb-7">
      <div className="flex flex-row justify-between relative">
      <div className="flex flex-col gap-2 mt-13">
      <p className="text-[16px] text-neutral-500 mb-1 font-mono">
        Hello. I&apos;m
      </p>
      <div className="flex items-baseline flex-wrap gap-x-2.5">
      <h1 className="text-[28px] font-medium text-neutral-100 tracking-tight leading-tight font-mono">
          {Data.home.name}
      </h1>
        <div className="flex items-center text-[22px] text-neutral-500 font-light font-mono">
          <span className="mr-2 text-neutral-600">—</span>
          <span
            className={`inline-block transition-all duration-300 ease-out transform ${
              isFading
                ? "opacity-0 -translate-y-1 blur-[1px]"
                : "opacity-100 translate-y-0 blur-0"
            }`}
          >
            {roles[currentRoleIndex]}
          </span>
        </div>
      </div>
      </div>
          <Image
        src={Avatar}
        alt="Avatar"
        width={90}
        height={90}
        className="rounded-md border-2 border-[#111] object-cover w-35 h-35 shrink-0 mb-3"
      />
      </div>
      {Data.home.description.map((desc, index) => (
        <p
          key={index}
          className="text-xl text-neutral-400 leading-relaxed mb-3 font-mono"
        >
          {desc}
        </p>
      ))}
    </section>
  )
}