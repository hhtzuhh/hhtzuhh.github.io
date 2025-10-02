"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Trophy } from "lucide-react"

interface ProjectCardProps {
  title: string
  image: string
  href: string
  description: string
  technologies?: string[]
  hackathon?: {
    name: string
    url: string
  }
  prize?: {
    rank: 1 | 2 | 3 | -1;
    text: string;
  }
}

export function ProjectCard({ title, image, href, description, technologies, hackathon, prize }: ProjectCardProps) {
  const prizeStyles = {
    1: "bg-gradient-to-br from-yellow-400 to-amber-500", // Gold
    2: "bg-gradient-to-br from-slate-400 to-slate-600", // Silver
    3: "bg-gradient-to-br from-yellow-600 to-amber-800", // Bronze
  }

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
          {prize && (
            <div className="absolute top-2 left-2">
              {prize.rank === -1 ? (
                <div className="bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full drop-shadow-lg">
                  <span className="text-white text-sm font-semibold">{prize.text}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm p-1 pr-3 rounded-full drop-shadow-lg">
                  <div className={`rounded-full p-1.5 ${prizeStyles[prize.rank]}`}>
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white text-sm font-semibold">{prize.text}</span>
                </div>
              )}
            </div>
          )}
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
          <div className="flex flex-wrap gap-y-2">
            {hackathon && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  window.open(hackathon.url, '_blank', 'noopener,noreferrer');
                }}
                className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors"
              >
                {hackathon.name}
              </button>
            )}
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
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
