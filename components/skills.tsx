"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "react-intersection-observer"

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  // Technology categories with their logos
  const techCategories = [
    {
      category: "Technologies",
      technologies: [
        { name: "HTML5", logo: "logos/html-logo.png", alt: "HTML5 Logo" },
        { name: "CSS3", logo: "logos/css-logo.png", alt: "CSS3 Logo" },
        { name: "Tailwind CSS", logo: "logos/tailwind-logo.webp", alt: "Tailwind CSS Logo" },
        { name: "JavaScript", logo: "logos/javascript-logo.webp", alt: "JavaScript Logo" },
        { name: "React", logo: "/logos/react-logo.png", alt: "React Logo" },
        { name: "Next.js", logo: "logos/nextjs-logo.png", alt: "Next.js Logo" },
        { name: "TypeScript", logo: "logos/typescript-logo.svg", alt: "TypeScript Logo" },
        { name: "Angular", logo: "/logos/angular-logo.png", alt: "Angular Logo" },
        { name: "Angular Material", logo: "/logos/angular-material-logo.webp", alt: "Angular Material Logo" },
        { name: "RxJS", logo: "/logos/rxjs-logo.png", alt: "RxJs Logo" },
        { name: "Redux", logo: "/logos/redux-logo.svg", alt: "Redux Logo" },
        { name: "Zustand", logo: "/logos/zustand-logo.svg", alt: "Zustand Logo" },
        { name: "React Query", logo: "/logos/react-query-logo.svg", alt: "React Query Logo" },
        { name: "Wordpress", logo: "/logos/wordpress-logo.png", alt: "WordPress Logo" },
        { name: "Webflow", logo: "/logos/webflow-logo.webp", alt: "Webflow" },

      ],
    },
    // {
    //   category: "Tools & Design",
    //   technologies: [
    //     { name: "Git", logo: "/images/logos/git-logo.png", alt: "Git Logo" },
    //     { name: "Figma", logo: "/images/logos/figma-logo.png", alt: "Figma Logo" },
    //     { name: "VS Code", logo: "/images/logos/vscode-logo.png", alt: "VS Code Logo" },
    //   ],
    // },
  ]

  // Cursor spotlight effect
  const containerRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !spotlightRef.current) return

    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top

    spotlightRef.current.style.background = `radial-gradient(
      circle at ${x}px ${y}px,
      rgba(var(--primary), 0.15) 0%,
      rgba(var(--primary), 0.05) 20%,
      transparent 40%
    )`
  }

  return (
    <section id="skills" className="py-20 px-4 md:px-8 relative" onMouseMove={handleMouseMove} ref={containerRef}>
      {/* Spotlight effect */}
      <div ref={spotlightRef} className="absolute inset-0 pointer-events-none transition-all duration-300 ease-out" />

      <div
        ref={ref}
        className={`container mx-auto transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          I specialize in frontend development with expertise in these technologies:
        </p>

        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-semibold text-center">
                <span className="border-b-2 border-primary pb-1">{category.category}</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <Card
                    key={techIndex}
                    className="group overflow-hidden border border-muted transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1"
                  >
                    <CardContent className="p-4 flex flex-col items-center justify-center">
                      <div className="relative w-16 h-16 mb-3 transition-transform duration-300 group-hover:scale-110">
                        <Image src={tech.logo || "/placeholder.svg"} alt={tech.alt} fill className="object-contain" />
                      </div>
                      <p className="font-medium text-center">{tech.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

