import Link from "next/link";
import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react"

interface BlogLayoutProps {
  children: ReactNode;
  backHref?: string;
  backText?: string;
}

export default function BlogLayout({
  children,
  backHref = "/sketchin",
  backText = "Back to Blog",
}: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-[url(/images/nnnoise.svg)] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href={backHref}
          className="inline-flex items-center text-md mb-8 no-underline transition-colors"
        >
          <ArrowLeft/>
          {backText}
        </Link>

        <article className="bg-surface-secondary opacity-60 rounded-xl shadow-sm border border-border overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-12">{children}</div>
        </article>
      </div>
    </div>
  );
}
