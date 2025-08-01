import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

async function getProjectData(slug: string) {
  try {
    const projectsDirectory = path.join(process.cwd(), "content/projects")
    const filePath = path.join(projectsDirectory, `${slug}.md`)
    const fileContents = await fs.readFile(filePath, "utf8")
    const { data, content } = matter(fileContents)
    
    return {
      frontmatter: data,
      content,
    }
  } catch (error) {
    return null
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const projectData = await getProjectData(slug)

  if (!projectData) {
    notFound()
  }

  const { frontmatter, content } = projectData

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Resume
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{frontmatter.title}</h1>
            {frontmatter.year && (
              <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                {frontmatter.year}
              </Badge>
            )}
          </div>
          
          {frontmatter.description && (
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{frontmatter.description}</p>
          )}

          <div className="flex flex-wrap gap-3 mb-6">
            {frontmatter.liveUrl && (
              <Button asChild>
                <a href={frontmatter.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              </Button>
            )}
            {frontmatter.githubUrl && (
              <Button variant="outline" asChild>
                <a
                  href={frontmatter.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>

          {frontmatter.technologies && (
            <div className="flex flex-wrap gap-2">
              {frontmatter.technologies.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Markdown Content */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-4 mb-2">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-700 dark:text-gray-300">{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 my-4">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-200">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
                  {children}
                </pre>
              ),
              img: ({ src, alt }) => (
                <img
                  src={src || "/placeholder.svg"}
                  alt={alt}
                  className="rounded-lg shadow-lg my-6 w-full"
                />
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
