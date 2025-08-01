"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MapPin, Clock, ExternalLink, Sun, Moon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { FaReact } from "react-icons/fa"
import { SiTypescript, SiMongodb, SiAmazon, SiTensorflow } from "react-icons/si"

export default function Resume() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Skills and Tech data
  const skillsData = {
    skills: [
      "frontend", "backend", "AI", "Cloud", "Database"
    ],
    techIcons: [
      { icon: FaReact, bgColor: "bg-blue-500", textColor: "text-white" },
      { icon: SiTypescript, bgColor: "bg-blue-600", textColor: "text-white" },
      { icon: SiMongodb, bgColor: "bg-green-500", textColor: "text-white" },
      { icon: SiAmazon, bgColor: "bg-orange-500", textColor: "text-white" },
      { icon: SiTensorflow, bgColor: "bg-orange-600", textColor: "text-white" }
    ]
  }

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDarkMode(true)
    } else if (savedTheme === "light") {
      setIsDarkMode(false)
    } else {
      // Default to system preference
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches)
    }
  }, [])

  // Apply theme to document and save preference
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 transition-colors duration-300">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-colors duration-300">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <MapPin className="w-4 h-4" />
            Brooklyn, New York
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              13:22 EDT
            </div>
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4 text-gray-600" />}
            </Button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="text-center py-8 px-6">
          <div className="w-55 h-55 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-600">
            <Image
              src="/tzu.jpg"
              alt="Tzu-Han Lin"
              width={200}
              height={200}
              className="w-full h-full object-cover object-[center_115%] scale-210"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Tzu-Han Lin</h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300">Software Engineer</p>
        </div>

        <div className="px-6 pb-8 space-y-8">
          {/* About Section */}
          <section>
            <h2 className="font-mono text-xl font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">ABOUT</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I build stuff.
            </p>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="font-mono text-xl font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-6">
              EXPERIENCE
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Image
                    src="/kean.png"
                    alt="Company icon"
                    width={30}
                    height={30}
                    className="w-8 h-8"
                  />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Full Stack Engineer</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Kean University • 2024.9 - NOW</p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                      Designed and implemented a dynamic MongoDB schema and a database mapper using .NET Core to handle evolving survey structures and data migration.                    
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                      Built an event-driven reporting system using Kafka for asynchronous report processing, notifications, and PDF generation.                    
                    </li>

                  </ul>
                </div>
              </div>


              <div className="flex gap-4">
                <Image
                    src="/kean.png"
                    alt="Company icon"
                    width={30}
                    height={30}
                    className="w-8 h-8"
                  />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Research Assistant</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Kean University • 2023.5 - 2023.9</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Developed a novel weakly supervised learning framework for breast ultrasound image segmentation, accepted by the 46th Annual IEEE Engineering in Medicine and Biology Society Conference.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="font-mono text-xl font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
              EDUCATION
            </h2>
            <div className="gap-8">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">MS in Computer Information Systems</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Kean University</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2022.1 - 2024.5</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">BS in Medical Science</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">National Tsing Hua University</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2013.9 - 2017.6</p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="font-mono text-xl font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-6">
              PROJECTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProjectCard
                title="Typeform Design System"
                image="/placeholder.svg?height=200&width=300"
                href="/projects/sample-project"
                description="Complete redesign of Typeform's component library"
              />
              
            </div>
          </section>

          {/* Certifications Section */}
          {/* <section>
            <h2 className="font-mono text-xl font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-6">
              CERTIFICATIONS
            </h2>
            <div className="space-y-6">
              <div className="flex justify-between items-start group hover:bg-gray-50 dark:hover:bg-gray-700/50 p-3 -m-3 rounded-lg transition-colors">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Advanced Front-End Web Development with React
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">COURSERA • 2025</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    An in-depth certification covering React 18+, Next.js, TypeScript, GraphQL, performance
                    optimization, accessibility standards (WCAG 2.2), and Core Web Vitals for production-ready
                    interfaces.
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400 dark:text-gray-500 ml-4 flex-shrink-0 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
              </div>

              <div className="flex justify-between items-start group hover:bg-gray-50 dark:hover:bg-gray-700/50 p-3 -m-3 rounded-lg transition-colors">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">UX Design for Accessibility</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">INTERACTION DESIGN FOUNDATION • 2024</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Specialized course on designing inclusive digital experiences, focusing on WCAG compliance, semantic
                    structure, keyboard navigation, screen reader testing, and inclusive UX research methodologies.
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400 dark:text-gray-500 ml-4 flex-shrink-0 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
              </div>
            </div>
          </section> */}

          {/* Skills Section */}
          <section>
            <h2 className="font-mono text-xl font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
              SKILLS / STACK
            </h2>
            <div className="flex flex-wrap gap-2">
              {skillsData.skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          {/* Tech Icons */}
          <section>
            <div className="flex flex-wrap gap-4 justify-center py-4">
              {skillsData.techIcons.map((iconData, index) => {
                const IconComponent = iconData.icon
                return (
                  <div
                    key={index}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${iconData.bgColor}`}
                  >
                    <IconComponent className={`w-5 h-5 ${iconData.textColor}`} />
                  </div>
                )
              })}
            </div>
          </section>

          {/* Languages Section */}
          <section>
            <h2 className="font-mono text-xl font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
              LANGUAGES
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-900 dark:text-white">Spanish</span>
                <span className="text-gray-500 dark:text-gray-400">Native</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-900 dark:text-white">English</span>
                <span className="text-gray-500 dark:text-gray-400">Fluent</span>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="font-mono text-xl font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
              CONTACT
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center group">
                <span className="text-gray-900 dark:text-white">Email</span>
                <a
                  href="mailto:mateorivas@email.com"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 flex items-center gap-1 transition-colors"
                >
                  mateorivas@email.com
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex justify-between items-center group">
                <span className="text-gray-900 dark:text-white">LinkedIn</span>
                <a
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 flex items-center gap-1 transition-colors"
                >
                  /in/mateorivas
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex justify-between items-center group">
                <span className="text-gray-900 dark:text-white">X/Twitter</span>
                <a
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 flex items-center gap-1 transition-colors"
                >
                  @mateorivas
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 dark:border-gray-700 px-6 py-4">
          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <span>Built in Framer ♥</span>
            <Button
              variant="link"
              className="text-sm p-0 h-auto text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              Get this template for FREE
            </Button>
          </div>
          <div className="text-center mt-2 text-xs text-gray-400 dark:text-gray-500">
            © 2025 Resume by @antperez_design
          </div>
        </div>
      </div>
    </div>
  )
}
