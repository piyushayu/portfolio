import LocationClock    from "@/components/home/LocationClock"
import SocialLinks      from "@/components/home/SocialLinks"
import HeroBanner       from "@/components/home/HeroBanner"
import HeroIntro        from "@/components/home/HeroIntro"
import CTAButtons       from "@/components/home/CTAButtons"
import Navbar           from "@/components/home/Navbar"
import GithubHeatmap    from "@/components/home/GithubHeatmap"

export default function HeroMain() {
  return (
    <div className="max-w-200 mx-auto px-5 pt-10 pb-20">

      {/* ── Top Bar ── */}
      <div className="flex justify-between mb-4">
      <Navbar />
      <SocialLinks />
      </div>

      {/* ── Banner + Avatar ── */}
      <HeroBanner />

      {/* ── Name, Title, Bio ── */}
      <HeroIntro />

      {/* ── CTA Buttons ── */}
      <CTAButtons />

      {/* ── GitHub Contributions ── */}
      <GithubHeatmap />

    </div>
  )
}
