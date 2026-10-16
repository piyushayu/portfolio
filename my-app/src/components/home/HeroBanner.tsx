export default function HeroBanner() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      controls
      className="w-full rounded-md mb-4 object-cover"
      style={{ maxHeight: "200px" }}
      preload="metadata"
      controlsList="nodownload"
      disablePictureInPicture
    >
      <source src="/introbanner.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
