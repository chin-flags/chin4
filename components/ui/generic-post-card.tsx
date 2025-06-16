import Link from 'next/link';
import { useState, useEffect } from 'react';

interface GenericPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date?: string;
  author?: string;
}

interface GenericPostCardProps {
  post: GenericPost;
  basePath: string;
}

export function GenericPostCard({ 
  post, 
  basePath
}: GenericPostCardProps) {
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
    <article 
      className="group relative bg-surface-secondary rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-border"
    >
      <Link href={`${basePath}/${post.slug}`} className="space-y-4 block">
        <div className="space-y-2">
          <div className="flex justify-between items-start gap-4">
            <h2 className="text-2xl font-bold text-foreground hover:text-orange-500 dark:hover:text-yellow-400 transition-colors duration-200">
              {post.title}
            </h2>
            <span className="shrink-0 whitespace-nowrap text-sm font-medium px-3 py-1.5 rounded-full bg-muted text-muted-foreground">
              {post.category}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
            {post.date && (
              <time className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(post.date)}
              </time>
            )}
            {post.author && (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {post.author}
              </span>
            )}
          </div>
        </div>
        <p className="text-text-secondary line-clamp-3">
          {post.description}
        </p>
        <span className="inline-flex items-center text-info group-hover:text-info-hover font-medium group-hover:gap-1.5 gap-1 transition-all">
          Read more
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </Link>
    </article>
  );
} 