"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "2024 — PRESENT",
    title: "Senior Frontend Engineer, Accessibility",
    company: "TechCorp",
    description:
      "Build and maintain critical components used to construct TechCorp's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "TypeScript", "React", "Storybook"],
    link: "#",
  },
  {
    period: "2022 — 2024",
    title: "Full Stack Developer",
    company: "InnovateLab",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Led the frontend architecture for a major e-commerce platform serving 100k+ users. Implemented comprehensive testing strategies and CI/CD pipelines.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    link: "#",
  },
  {
    period: "2020 — 2022",
    title: "Frontend Developer",
    company: "DesignStudio",
    description:
      "Collaborated with designers and backend developers to create responsive, accessible web applications. Specialized in converting complex designs into pixel-perfect, interactive user interfaces with smooth animations and optimal performance.",
    technologies: ["Vue.js", "SCSS", "Webpack", "Figma", "Jest"],
    link: "#",
  },
  {
    period: "2019 — 2020",
    title: "Junior Web Developer",
    company: "StartupCo",
    description:
      "Started my professional journey building features for a fast-growing SaaS platform. Gained experience in full-stack development, database design, and agile development practices while working in a dynamic startup environment.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "#",
  },
]

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref} className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Experience</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="text-sm font-medium text-primary mb-2">{exp.period}</div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <div className="text-lg text-muted-foreground font-medium">{exp.company}</div>
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
