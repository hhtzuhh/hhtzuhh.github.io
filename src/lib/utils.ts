import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to handle image paths
// For GitHub Pages with /portfolio subdirectory:
// export function getImagePath(path: string): string {
//   const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''
//   return `${basePath}${path}`
// }

// For custom domain (no base path needed):
export function getImagePath(path: string): string {
  return path
}
