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
    <article className="group relative ounded-xl p-3">
      <Link href={`${basePath}/${post.slug}`} className="space-y-4 block">
        <div className="space-y-2">
          <div className="flex justify-between items-start gap-4">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-xl text-foreground hover:text-yello-800 dark:hover:text-yellow-400 transition-colors duration-200">
                {post.title}
              </h2>
              {post.subtitle && (
                <h3 className="text-md sm:text-lg font-medium text-text-secondary">
                  {post.subtitle}
                </h3>
              )}
            </div>
          </div>
          {/* <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
            <span className="shrink-0 whitespace-nowrap text-sm font-medium px-3 py-1.5 rounded-full bg-muted text-muted-foreground">
              {post.category}
            </span>
          </div> */}
        </div>
      </Link>
    </article>
  );
}
