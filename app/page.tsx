import { Suspense } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
    </main>
  )
}

