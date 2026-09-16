import HeroMain from "@/components/home/heromain"
import Projects from "@/components/Projects/Projects"
import Skillcomp from "@/components/skills/Skills"
import Blogs from "@/components/Blog/Blog"

export default function Home() {
  return (
    <main>
      <HeroMain />
      <Projects />
      <Skillcomp />
      <Blogs />
    </main>
  )
}
