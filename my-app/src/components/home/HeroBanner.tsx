import Image from "next/image"
import Avatar from "../../../public/avatar.png"
import Banner from "../../../public/banner.png"
export default function HeroBanner() {
  return (
    <div className="relative w-full mb-10">
      <Image
        src={Banner}
        alt="Hero Banner"
        width={800}
        height={180}
        className="w-full h-45 object-cover rounded-lg"
        priority
      />
    </div>
  )
}
