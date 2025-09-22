"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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
    <section id="about" ref={ref} className="py-24 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">About Me</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."
                }
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently, {"I'm"} a Senior Full-Stack Engineer at{" "}
                <span className="text-primary font-medium">TechCorp</span>, specializing in accessibility. I contribute
                to the creation and maintenance of UI components that power {"TechCorp's"} frontend, ensuring our
                platform meets web accessibility standards and best practices to deliver an inclusive user experience.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                In the past, {"I've"} had the opportunity to develop software across a variety of settings — from{" "}
                <span className="text-primary font-medium">advertising agencies</span> and{" "}
                <span className="text-primary font-medium">large corporations</span> to{" "}
                <span className="text-primary font-medium">start-ups</span> and{" "}
                <span className="text-primary font-medium">small digital product studios</span>. Additionally, I also
                released a <span className="text-primary font-medium">comprehensive video course</span> a few years ago,
                guiding learners through building a web app with modern technologies.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Current Focus</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>React & Next.js Applications</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>TypeScript & Node.js</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Web Accessibility (WCAG)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Performance Optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Personal Interests</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In my spare time, {"I'm"} usually climbing, reading, hanging out with my wife and two cats, or running
                  around London searching for the perfect coffee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
