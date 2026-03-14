import { Header } from "@/components/sections/Header"
import { Hero } from "@/components/sections/Hero"
import { FeaturedCourses } from "@/components/sections/FeaturedCourses"
import { Engines } from "@/components/sections/Engines"
import { News } from "@/components/sections/News"
import { Events } from "@/components/sections/Events"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <main>
        <Hero />
        <FeaturedCourses />
        <Engines />
        <News />
        <Events />
      </main>
      <Footer />
    </div>
  )
}
