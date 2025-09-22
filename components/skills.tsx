"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 78 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 75 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 72 },
      { name: "Figma", level: 85 },
      { name: "Jest", level: 80 },
    ],
  },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set())
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skills with staggered delay
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(
                () => {
                  setAnimatedSkills((prev) => new Set([...prev, skill.name]))
                },
                categoryIndex * 200 + skillIndex * 100,
              )
            })
          })
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
    <section id="skills" ref={ref} className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Skills & Technologies</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="space-y-6">
                <h3 className="text-xl font-semibold text-primary text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: animatedSkills.has(skill.name) ? `${skill.level}%` : "0%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
