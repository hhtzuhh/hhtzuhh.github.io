import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { DarkModeToggle } from '@/components/dark-mode-toggle';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const markdownPath = path.join(process.cwd(), 'src/content/projects', `${slug}.md`);

  // Check if the markdown file exists
  if (!fs.existsSync(markdownPath)) {
    notFound();
  }

  let markdownContent: string;

  try {
    markdownContent = fs.readFileSync(markdownPath, 'utf-8');

    // Check if markdown content is empty or just whitespace
    if (!markdownContent || markdownContent.trim().length === 0) {
      console.warn(`Markdown file is empty: ${markdownPath}`);
      markdownContent = `# ${slug}\n\nThis project page is under construction.`;
    }
  } catch (error) {
    console.error(`Error reading markdown file: ${markdownPath}`, error);
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Fixed buttons - top right */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <Link
          href="/"
          className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          aria-label="Back to home"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </Link>
        <DarkModeToggle />
      </div>

      {/* Content container with white/dark background */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 min-h-screen">
        <div className="px-6 py-16">
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({...props}) => <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white" {...props} />,
              h2: ({...props}) => <h2 className="text-3xl font-semibold mt-12 mb-4 text-gray-900 dark:text-white" {...props} />,
              h3: ({...props}) => <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-800 dark:text-gray-200" {...props} />,
              p: ({children, ...props}) => {
                // Check if paragraph contains a YouTube link (for video embed)
                const childrenArray = Array.isArray(children) ? children : [children];

                // Check for YouTube link
                const youtubeChild = childrenArray.find((child) => {
                  const href = (child as {props?: {href?: string}})?.props?.href;
                  return href?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
                });

                if (youtubeChild) {
                  const href = (youtubeChild as {props: {href: string}}).props.href;
                  const youtubeMatch = href.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
                  if (youtubeMatch) {
                    return (
                      <div className="my-6 aspect-video max-w-3xl mx-auto">
                        <iframe
                          className="w-full h-full rounded-lg"
                          src={`https://www.youtube.com/embed/${youtubeMatch[1]}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    );
                  }
                }

                // Check for PDF link
                const pdfChild = childrenArray.find((child) => {
                  const href = (child as {props?: {href?: string}})?.props?.href;
                  return href?.endsWith('.pdf');
                });

                if (pdfChild) {
                  const href = (pdfChild as {props: {href: string}}).props.href;
                  return (
                    <div className="my-6 w-full max-w-3xl mx-auto">
                      <iframe
                        src={href}
                        className="w-full h-[800px] rounded-lg border border-gray-300 dark:border-gray-600"
                        title="PDF Viewer"
                      />
                    </div>
                  );
                }

                // Check if paragraph only contains images (for gallery layout)
                const hasOnlyImages = childrenArray.every((child) => {
                  // Check if it's an img element or empty text
                  if (!child) return true;
                  if (typeof child === 'string' && child.trim() === '') return true;
                  const childObj = child as {type?: string; props?: {src?: string}};
                  if (childObj?.type === 'img') return true;
                  if (childObj?.props?.src) return true; // Image component
                  return false;
                });

                if (hasOnlyImages && childrenArray.some((c) => {
                  const cObj = c as {type?: string; props?: {src?: string}};
                  return cObj?.type === 'img' || cObj?.props?.src;
                })) {
                  return (
                    <div className="flex flex-wrap gap-4 justify-center my-6">
                      {children}
                    </div>
                  );
                }

                return <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4" {...props}>{children}</p>;
              },
              ul: ({...props}) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
              li: ({...props}) => <li className="text-gray-700 dark:text-gray-300" {...props} />,
              strong: ({...props}) => <strong className="font-semibold text-gray-900 dark:text-white" {...props} />,
              img: ({alt, src, title, ...props}) => {
                // Parse sizing from title attribute
                // Supports: "width:500", "height:600", "width:50%", "width:500 height:600"
                let width: string | undefined;
                let height: string | undefined;

                if (title) {
                  const widthMatch = title.match(/width:(\d+%?|\d+px|\d+)/);
                  const heightMatch = title.match(/height:(\d+%?|\d+px|\d+)/);

                  if (widthMatch) {
                    const value = widthMatch[1];
                    width = value.includes('%') || value.includes('px') ? value : `${value}px`;
                  }
                  if (heightMatch) {
                    const value = heightMatch[1];
                    height = value.includes('%') || value.includes('px') ? value : `${value}px`;
                  }
                }

                const style: React.CSSProperties = {};
                if (width) style.width = width;
                if (height) style.height = height;
                if (!width && !height) {
                  style.width = '100%';
                  style.maxWidth = '800px';
                }

                return (
                  <img
                    src={src}
                    alt={alt}
                    style={style}
                    className="rounded-lg object-contain"
                    {...props}
                  />
                );
              },
              a: ({href, children, ...props}) => {
                // Regular link - check if external
                const isExternal = href?.startsWith('http');
                return (
                  <a
                    href={href}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    {...props}
                  >
                    {children}
                  </a>
                );
              },
            }}
          >
            {markdownContent}
          </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all markdown files in the projects folder
export async function generateStaticParams() {
  const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

  try {
    if (!fs.existsSync(projectsDirectory)) {
      return [];
    }

    const filenames = fs.readdirSync(projectsDirectory);

    return filenames
      .filter((filename) => filename.endsWith('.md'))
      .map((filename) => ({
        slug: filename.replace('.md', ''),
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Tell Next.js to return 404 for any slug not in generateStaticParams
export const dynamicParams = false;
