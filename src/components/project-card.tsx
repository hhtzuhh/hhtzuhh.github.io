"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  image: string
  href: string
  description: string
  technologies?: string[]
}

export function ProjectCard({ title, image, href, description, technologies }: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <Card className="overflow-hidden hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
        <div className="relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={300}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2">
              <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </div>
          </div>
        </div>
        <CardContent className="p-4 pt-2">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-3"></div>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-4 mb-3">{description}</p>
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
