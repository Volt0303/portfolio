"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
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
    <section id="contact" ref={ref} className="py-24 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">{"Let's"} Work Together</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {"I'm"} always interested in discussing new opportunities and exciting projects. Feel free to reach out if{" "}
              {"you'd"} like to collaborate!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-primary">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">james.mitchell@email.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">+44 20 1234 5678</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground">London, United Kingdom</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-primary">Follow Me</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="group bg-transparent">
                    <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" className="group bg-transparent">
                    <Linkedin className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="group bg-transparent">
                    <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Email
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-6">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Project Collaboration" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell me about your project..." rows={5} />
                </div>

                <Button type="submit" className="w-full group">
                  Send Message
                  <Mail className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground">© 2024 James Mitchell. Built with Next.js and Tailwind CSS.</p>
      </div>
    </section>
  )
}
