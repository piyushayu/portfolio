import Image from "next/image"

export default function HeroBanner() {
  return (
    <div className="relative w-full mb-10">
      <Image
        src="/banner.png"
        alt="Hero Banner"
        width={800}
        height={180}
        className="w-full h-45 object-cover rounded-lg"
        priority
      />

      {/* Avatar overlaid at bottom-right */}
      <Image
        src="/avatar.png"
        alt="Avatar"
        width={90}
        height={90}
        className="absolute -bottom-6 right-0 w-22.5 h-22.5 rounded-md border-2 border-[#111] object-cover"
      />
    </div>
  )
}
