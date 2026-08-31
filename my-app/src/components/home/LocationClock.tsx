"use client"
import { useEffect, useState } from "react"

export default function LocationClock() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      )
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-1.5 text-[13px] text-neutral-500 font-mono">
      <span>📍</span>
      <span>India</span>
      <span className="text-neutral-600">·</span>
      <span className="tabular-nums">{time}</span>
    </div>
  )
}
