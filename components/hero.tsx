"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hello, I'm <span className="text-primary">Oduyale Enoch</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-medium text-muted-foreground">
          <span className="inline-block min-h-[2.5rem]">{typedText}</span>
          <span className="animate-blink">|</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mt-6">
          I build responsive, accessible, and performant web applications with
          modern technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="px-8 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Button>
          <a  target="_blank" href="https://drive.google.com/file/d/1pmWA7RHntP9sy-AD6sb5wOe4OoaU9b_N/view?usp=sharing">
            <Button
              size="lg"
              variant="outline"
              className="px-8 transition-all duration-300 hover:scale-105"
            >
              Download CV
            </Button>
          </a>
        </div>
      </div>
      <div
        className="absolute bottom-10 animate-bounce cursor-pointer transition-transform hover:scale-110"
        onClick={() => scrollToSection("about")}
      >
        <ArrowDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
}
