import Link from "next/link";
import { useState, useEffect } from "react";

interface GenericPost {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  date?: string;
  author?: string;
}

interface GenericPostCardProps {
  post: GenericPost;
  basePath: string;
}

export function GenericPostCard({ post, basePath }: GenericPostCardProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatDate = (dateString: string) => {
    if (!mounted || !dateString) {
      return dateString || ""; // Return empty string if no date
    }
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString; // Return original string if parsing fails
    }
  };

  return (
    <article className="group relative bg-surface-secondary rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-200">
      <Link href={`${basePath}/${post.slug}`} className="space-y-4 block">
        <div className="space-y-2">
          <div className="flex justify-between items-start gap-4">
            <div className="space-y-1">
              <h2 className="text-lg sm:text-xl font-bold text-foreground hover:text-orange-500 dark:hover:text-yellow-400 transition-colors duration-200">
                {post.title}
              </h2>
              {post.subtitle && (
                <h3 className="text-md sm:text-lg font-medium text-text-secondary">
                  {post.subtitle}
                </h3>
              )}
            </div>
            {post.date && (
              <time className="flex items-center gap-2 shrink-0 whitespace-nowrap text-sm font-medium px-3 py-1.5 rounded-full bg-muted text-muted-foreground">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {formatDate(post.date)}
              </time>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
            <span className="shrink-0 whitespace-nowrap text-sm font-medium px-3 py-1.5 rounded-full bg-muted text-muted-foreground">
              {post.category}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
