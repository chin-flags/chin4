import Link from 'next/link'
import { ReactNode } from 'react'

interface BlogLayoutProps {
  children: ReactNode
  backHref?: string
  backText?: string
}

export default function BlogLayout({ 
  children, 
  backHref = "/sketchin", 
  backText = "Back to Blog" 
}: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-surface-primary py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href={backHref} 
          className="inline-flex items-center text-sm text-text-secondary hover:text-info-hover mb-8 no-underline transition-colors"
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
        
        <article className="bg-surface-secondary rounded-xl shadow-sm border border-border overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-12">
            {children}
          </div>
        </article>
      </div>
    </div>
  )
} 