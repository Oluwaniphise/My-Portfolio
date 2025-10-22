"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const projects = [
    {
      title: "Talent Sphere Africa",
      description:
        "A social networking platform with real-time messaging, post creation, and user profiles.",
      image: "/ts.png",
      tags: ["Next.js", "TypeScript", "React Query", "Zustand", "Tailwind CSS"],
      demoLink: "https://talentsphereafrica.com/",
      githubLink: "#",
    },
    {
      title: "Vendease Website",
      description:
        "Spearheaded the development of Vendease’s website, building a modern, responsive, and visually engaging platform that showcases the company’s mission and services.",
      image: "/v-website.png",
      tags: ["Angular", "Angular Material", "Tailwind CSS", "TypeScript"],
      demoLink: "https://official.vendease.com",
      githubLink: "#",
    },
    {
      title: "Vendease Restaurant Management System",
      description:
        "Contributed to the development of Vendease’s enterprise restaurant management system, collaborating with designers and back-end engineers to build responsive, user-friendly interfaces in Angular.",
      image: "/vrms.png",
      tags: [
        "Angular",
        "Angular Material",
        "RxJs",
        "TailwindCSS",
        "TypeScript",
      ],
      demoLink: "https://vend-rms.vendease.com/",
      githubLink: "#",
    },
  ];

  // Magnetic button effect
  const [magneticProps, setMagneticProps] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const { left, top, width, height } = button.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const distance = Math.sqrt(x * x + y * y);
    const maxDistance = Math.sqrt(
      (width / 2) * (width / 2) + (height / 2) * (height / 2)
    );

    if (distance < maxDistance) {
      // Scale the effect based on distance from center
      const strength = 15 * (1 - distance / maxDistance);
      setMagneticProps({
        x: (x * strength) / maxDistance,
        y: (y * strength) / maxDistance,
      });
    } else {
      setMagneticProps({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setMagneticProps({ x: 0, y: 0 });
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-muted/30">
      <div
        ref={ref}
        className={`container mx-auto transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each one was built to solve a
          specific problem or explore new technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-muted transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 overflow-hidden group/btn relative"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      transform: `translate(${magneticProps.x}px, ${magneticProps.y}px)`,
                      transition:
                        magneticProps.x === 0 ? "transform 0.5s ease" : "none",
                    }}
                  >
                    <span className="relative z-10">
                      <a target="_blank" href={project.demoLink}>
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                      {/* <ExternalLink className="h-4 w-4 mr-1" />
                      Demo */}
                    </span>
                    <span className="absolute inset-0 bg-primary/10 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 overflow-hidden group/btn relative"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      transform: `translate(${magneticProps.x}px, ${magneticProps.y}px)`,
                      transition:
                        magneticProps.x === 0 ? "transform 0.5s ease" : "none",
                    }}
                  >
                    <span className="relative z-10">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </span>
                    <span className="absolute inset-0 bg-primary/10 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="relative overflow-hidden group">
            <span className="relative z-10">View All Projects</span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Button>
        </div>
      </div>
    </section>
  );
}
