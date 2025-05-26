import Link from 'next/link'
import { ReactNode } from 'react'

interface BlogLayoutProps {
  children: ReactNode
  backHref?: string
  backText?: string
}

export default function BlogLayout({ 
  children, 
  backHref = "/chintel", 
  backText = "Back to Blog" 
}: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href={backHref} 
          className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 mb-8 no-underline transition-colors"
        >
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {backText}
        </Link>
        
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-12">
            {children}
          </div>
        </article>
      </div>
    </div>
  )
} 