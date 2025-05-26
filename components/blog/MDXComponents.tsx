import Image from 'next/image'
import { ReactNode, Children, isValidElement } from 'react'
import { highlight } from 'sugar-high'

interface PreProps {
  children: ReactNode
  [key: string]: unknown
}

interface CodeProps {
  children: string
  [key: string]: unknown
}

interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  [key: string]: unknown
}

export const mdxComponents = {
  pre: ({ children, ...props }: PreProps) => {
    return (
      <pre {...props} className="overflow-x-auto p-4 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 my-6">
        {children}
      </pre>
    )
  },
  code: ({ children, ...props }: CodeProps) => {
    const codeHTML = highlight(children)
    return (
      <code 
        dangerouslySetInnerHTML={{ __html: codeHTML }} 
        {...props} 
        className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono"
      />
    )
  },
  img: ({ src, alt, width = 800, height = 600, ...props }: ImageProps) => {
    return (
      <Image 
        src={src} 
        alt={alt} 
        width={width}
        height={height}
        {...props} 
        className="rounded-lg shadow-lg max-w-full h-auto border border-gray-200 dark:border-gray-700 mx-auto my-8 block"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    )
  },
  h1: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
    <h1 {...props} className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100">
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
    <h2 {...props} className="text-3xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
    <h3 {...props} className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  ),
  p: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => {
    // Check if paragraph contains only an image
    const childArray = Children.toArray(children);
    const hasOnlyImage = childArray.length === 1 && 
      isValidElement(childArray[0]) && 
      childArray[0].type === 'img';
    
    if (hasOnlyImage) {
      // Return the image directly without wrapping in p tag
      return <>{children}</>;
    }
    
    return (
      <p {...props} className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </p>
    );
  },
  ul: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
    <ul {...props} className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300">
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
    <ol {...props} className="list-decimal list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300">
      {children}
    </ol>
  ),
  li: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
    <li {...props} className="mb-1">
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
    <blockquote {...props} className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 py-2 rounded-r">
      {children}
    </blockquote>
  ),
  a: ({ children, href, ...props }: { children: ReactNode; href?: string; [key: string]: unknown }) => (
    <a 
      href={href} 
      {...props} 
      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
} 