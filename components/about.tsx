"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const imageRef = useRef<HTMLDivElement>(null)

  // 3D tilt effect on image
  useEffect(() => {
    const imageElement = imageRef.current
    if (!imageElement) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = imageElement.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      imageElement.style.transform = `
        perspective(1000px)
        rotateY(${x * 20}deg)
        rotateX(${y * -20}deg)
        scale3d(1.05, 1.05, 1.05)
      `
    }

    const handleMouseLeave = () => {
      imageElement.style.transform = `
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
        scale3d(1, 1, 1)
      `
    }

    imageElement.addEventListener("mousemove", handleMouseMove)
    imageElement.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      imageElement.removeEventListener("mousemove", handleMouseMove)
      imageElement.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-muted/30">
      <div
        ref={sectionRef}
        className={`container mx-auto transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-end">
            <div
              ref={imageRef}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary transition-all duration-300 shadow-xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
              <Image src="/enochimage.jpeg" alt="Profile" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Front-End Developer</h3>
            <p className="text-muted-foreground">
              I'm a passionate front-end developer with 3+ years of experience creating beautiful, responsive, and
              user-friendly websites. I specialize in Angular, React, Next.js, and modern CSS frameworks.
            </p>
            <p className="text-muted-foreground">
              My goal is to build applications that are not only visually appealing but also provide exceptional user
              experiences across all devices.
            </p>

            <div className="flex gap-4">
              <a href="https://github.com/Oluwaniphise/">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-transform hover:bg-primary/10"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/oduyale-enoch/">


                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-transform hover:bg-primary/10"
                >

                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>

              <a href="https://x.com/oluwanifiseodu">

                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-transform hover:bg-primary/10"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>

            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-4 text-center">
                  <div className="text-4xl font-bold text-primary relative">
                    <span className="relative z-10">3+</span>
                    <span className="absolute inset-0 flex items-center justify-center text-primary/10 animate-pulse text-6xl">
                      3+
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-4 text-center">
                  <div className="text-4xl font-bold text-primary relative">
                    <span className="relative z-10">10+</span>
                    <span className="absolute inset-0 flex items-center justify-center text-primary/10 animate-pulse text-6xl">
                      10+
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

