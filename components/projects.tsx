"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/task-management-dashboard-with-kanban-board-interf.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/weather-dashboard-with-charts-and-maps-interface.jpg",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "SCSS"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website with smooth animations, responsive design, and optimized performance.",
    image: "/dark-portfolio-website.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    github: "#",
    live: "#",
    featured: false,
  },
]

export function Projects() {
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
    <section id="projects" ref={ref} className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Featured Projects</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${
                  project.featured ? "lg:grid lg:grid-cols-2 lg:gap-8" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${project.featured ? "lg:order-2" : ""}`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div
                  className={`p-6 space-y-4 ${project.featured ? "lg:order-1 lg:flex lg:flex-col lg:justify-center" : ""}`}
                >
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mt-2">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4 pt-2">
                    <Button variant="outline" size="sm" className="group/btn bg-transparent">
                      <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </Button>
                    <Button size="sm" className="group/btn">
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      Live Demo
                    </Button>
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
