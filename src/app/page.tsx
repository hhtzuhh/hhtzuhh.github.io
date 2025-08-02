"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MapPin, Clock, ExternalLink, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Python, Java, JavaScript, CSharp, Go, TypeScript, React, Docker, MongoDB, MySQL, PostgreSQL, Redis, AWS, C, Django, FastAPI, Git, Kubernetes, Spring, NextJs, Kafka, GitHubDark, LinkedIn } from "developer-icons"
import { getVisibleProjects, ProjectConfig } from "@/lib/project-config"
import { getImagePath } from "@/lib/utils"

export default function Resume() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const [configuredProjects, setConfiguredProjects] = useState<ProjectConfig[]>([])
  const [showMarker, setShowMarker] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  // Show marker
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMarker(true)
    }, 700)

    return () => clearTimeout(timer)
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1, rootMargin: '-50px' }
    )

    // Observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Update time every minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      })
      const timezone = now.toLocaleTimeString('en-US', { timeZoneName: 'short' }).split(' ')[2]
      setCurrentTime(`${timeString} ${timezone}`)
    }

    updateTime() // Set initial time
    const interval = setInterval(updateTime, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  // Load configured projects
  useEffect(() => {
    const projects = getVisibleProjects()
    setConfiguredProjects(projects)
  }, [])

  // Skills and Tech data
  const skillsData = {
    skills: [
      "frontend", "backend", "AI", "Cloud", "Database"
    ],
    programmingLanguages: [
      { icon: C, name: "C", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: CSharp, name: "C#", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: Python, name: "Python", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: Java, name: "Java", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: JavaScript, name: "JavaScript", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: TypeScript, name: "TypeScript", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: Go, name: "Go", bgColor: "bg-gray-50 dark:bg-gray-800" },
    ],
    databases: [
      { icon: MongoDB, name: "MongoDB", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: MySQL, name: "MySQL", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: PostgreSQL, name: "PostgreSQL", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: Redis, name: "Redis", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: AWS, name: "DynamoDB", bgColor: "bg-gray-50 dark:bg-gray-800" }
    ],
    webFrameworks: [
      { icon: Django, name: "Django", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: FastAPI, name: "FastAPI", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: Spring, name: "Spring Boot", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: CSharp, name: ".NET Core", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: React, name: "React", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: NextJs, name: "Next.js", bgColor: "bg-gray-50 dark:bg-gray-800" }
    ],
    developmentTools: [
      { icon: Git, name: "Git", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: Kafka, name: "Kafka", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: Docker, name: "Docker", bgColor: "bg-gray-50 dark:bg-gray-800" },
      { icon: Kubernetes, name: "Kubernetes", bgColor: "bg-gray-50 dark:bg-gray-800" },
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
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900 py-8 px-4 transition-colors duration-300">
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
              {currentTime}
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
              src={getImagePath("/tzu.JPG")}
              alt="Tzu-Han Lin"
              width={200}
              height={200}
              className="w-full h-full object-cover object-[center_115%] scale-120"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Tzu-Han Lin</h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300">Software Engineer</p>
        </div>

        <div className="px-6 pb-8 space-y-8">
          {/* Social Icons Section */}
          <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
            <div className="flex justify-center gap-6">
              <a
                href="https://linkedin.com/in/tzuhanlin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <LinkedIn className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/hhtzuhh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <GitHubDark className="w-6 h-6" />
              </a>
              {/* <a
                href="https://youtube.com/@your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                <YouTube className="w-6 h-6" />
              </a> */}
            </div>
          </section>

          {/* About Section */}
          <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
            <h2 className="font-mono text-xl font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">ABOUT</h2>
            <div className="relative">
              <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
                I create things.
              </p>
              {/* Curved marker effect */}
              {showMarker && (
                <div className="absolute inset-0 opacity-0 animate-fade-in pointer-events-none">
                  <div className="absolute top-0 -left-2 w-45 h-8 bg-orange-400 transform rounded-sm rotate-1 skew-x-20 animate-draw-left-to-right opacity-90"></div>
                </div>
              )}
            </div>
          </section>

          {/* Experience Section */}
          <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
            <h2 className="font-mono text-xl font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-6">
              EXPERIENCE
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Image
                    src={getImagePath("/kean.png")}
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
                      Developed full-stack applications with ASP.NET and ReactJS, using MongoDB for dynamic schema management to streamline data migration and reduce inter-departmental communication costs for reporting.                    
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
                    src={getImagePath("/kean.png")}
                    alt="Company icon"
                    width={30}
                    height={30}
                    className="w-8 h-8"
                  />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Research Assistant</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Kean University • 2023.5 - 2023.9</p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                      Developed a novel weakly supervised learning framework for breast ultrasound image segmentation.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                      Research accepted by the 46th Annual IEEE Engineering in Medicine and Biology Society Conference.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                      <a href="https://ieeexplore.ieee.org/document/10781719" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        IEEE Paper Link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>


          {/* Projects Section */}
          <section 
            id="projects" 
            className={`border-b border-gray-200 dark:border-gray-700 pb-8 ${visibleSections.has('projects') ? 'section-visible' : 'section-hidden'}`}
          >
            <h2 className="font-mono text-xl font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-6">
              PROJECTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {configuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  href={project.href}
                  description={project.description}
                  technologies={project.technologies}
                />
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section 
            id="education" 
            className={`border-b border-gray-200 dark:border-gray-700 pb-8 ${visibleSections.has('education') ? 'section-visible' : 'section-hidden'}`}
          >
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
          {/* <section>
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
          </section> */}

          {/* Tech Icons */}
          <section 
            id="tech-stack" 
            className={`border-b border-gray-200 dark:border-gray-700 pb-8 ${visibleSections.has('tech-stack') ? 'section-visible' : 'section-hidden'}`}
          >
            <h2 className="font-mono text-xl font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
              TECH STACK
            </h2>
            
            {/* Programming Languages */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-4">
                {skillsData.programmingLanguages.map((iconData, index) => {
                  const IconComponent = iconData.icon
                  return (
                    <div
                      key={index}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${iconData.bgColor}`}
                      title={iconData.name}
                    >
                      <IconComponent className={`w-9 h-9`} />
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Databases */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Databases & Caching</h3>
              <div className="flex flex-wrap gap-4">
                {skillsData.databases.map((iconData, index) => {
                  const IconComponent = iconData.icon
                  return (
                    <div
                      key={index}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${iconData.bgColor}`}
                      title={iconData.name}
                    >
                      <IconComponent className={`w-9 h-9`} />
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Web Frameworks */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Web Frameworks</h3>
              <div className="flex flex-wrap gap-4">
                {skillsData.webFrameworks.map((iconData, index) => {
                  const IconComponent = iconData.icon
                  return (
                    <div
                      key={index}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${iconData.bgColor}`}
                      title={iconData.name}
                    >
                      <IconComponent className={`w-9 h-9`} />
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Development Tools */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Development Tools</h3>
              <div className="flex flex-wrap gap-4">
                {skillsData.developmentTools.map((iconData, index) => {
                  const IconComponent = iconData.icon
                  return (
                    <div
                      key={index}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${iconData.bgColor}`}
                      title={iconData.name}
                    >
                      <IconComponent className={`w-9 h-9`} />
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section 
            id="contact" 
            className={`${visibleSections.has('contact') ? 'section-visible' : 'section-hidden'}`}
          >
            <h2 className="font-mono text-xl font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
              CONTACT
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center group">
                <span className="text-gray-900 dark:text-white">Email</span>
                <a
                  href="mailto:hhtzuhh@gmail.com"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 flex items-center gap-1 transition-colors"
                >
                  hhtzuhh@gmail.com
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex justify-between items-center group">
                <span className="text-gray-900 dark:text-white">LinkedIn</span>
                <a
                  href="https://linkedin.com/in/tzuhanlin"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 flex items-center gap-1 transition-colors"
                >
                  /in/tzuhanlin
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 dark:border-gray-700 px-6 py-4">
          <div className="text-center mt-2 text-xs text-gray-400 dark:text-gray-500">
            © 2025 Resume by Tzu-Han Lin
          </div>
        </div>
      </div>
    </div>
  )
}
