"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className={`space-y-8 ${mounted ? "animate-fade-in" : "opacity-0"}`}>
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-balance">James Mitchell</h1>
            <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">Full Stack Developer</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I build accessible, pixel-perfect digital experiences that blend thoughtful design with robust
              engineering. My favorite work lies at the intersection of design and development, creating experiences
              that not only look great but are meticulously built for performance and usability.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <div className="flex flex-col space-y-3 text-sm">
              <a
                href="#about"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-px bg-muted-foreground group-hover:bg-primary group-hover:w-16 transition-all duration-300" />
                <span className="font-medium">ABOUT</span>
              </a>
              <a
                href="#experience"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-px bg-muted-foreground group-hover:bg-primary group-hover:w-16 transition-all duration-300" />
                <span className="font-medium">EXPERIENCE</span>
              </a>
              <a
                href="#projects"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-px bg-muted-foreground group-hover:bg-primary group-hover:w-16 transition-all duration-300" />
                <span className="font-medium">PROJECTS</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - Avatar */}
        <div className={`flex justify-center lg:justify-end ${mounted ? "animate-slide-up" : "opacity-0"}`}>
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 animate-float">
              <img
                src="/professional-british-man-in-his-30s-wearing-a-dark.jpg"
                alt="James Mitchell - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-lg" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
