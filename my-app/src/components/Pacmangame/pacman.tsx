import Image from "next/image";

export default function PacmanGame() {
  return (
    <div className="relative w-full mb-8 flex items-center justify-center bg-black rounded-lg overflow-hidden border border-neutral-800 shadow-md">
      <Image
        src="/pacman-banner.png"
        alt="Pac-Man Banner"
        width={826}
        height={345}
        className="w-full h-auto max-h-[350px] object-contain"
        priority
      />
    </div>
  );
}