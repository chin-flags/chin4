"use client";

import { useState, useEffect } from 'react';

interface FrontMatter {
  title: string
  description: string
  date?: string
  category?: string
  author?: string
}

interface BlogHeaderProps {
  frontmatter: FrontMatter
}

export default function BlogHeader({ frontmatter }: BlogHeaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatDate = (dateString: string) => {
    if (!mounted || !dateString) {
      return dateString || ''; // Return empty string if no date
    }
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString; // Return original string if parsing fails
    }
  };

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        {frontmatter.date && (
          <time className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(frontmatter.date)}
          </time>
        )}
        {frontmatter.category && (
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            {frontmatter.category}
          </span>
        )}
        {frontmatter.author && (
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {frontmatter.author}
          </span>
        )}
      </div>
      {frontmatter.description && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {frontmatter.description}
        </p>
      )}
    </div>
  )
} 