import { ContentCategory, getSketchinPosts } from "@/lib/content";
import { GenericPostGrid } from "@/components/ui/generic-post-grid";
import SectionHeaderPostChin from "@/components/ui/section-header-post-chin";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Sketchin - a blog",
};

export default async function BlogPage() {
  const posts = await getSketchinPosts();

  const BLOG_CATEGORIES: ContentCategory[] = ["Teachin", "Searchin", "Pitchin"];

  return (
    <div className="min-h-screen bg-[url(/images/nnnoise.svg)] bg-surface-primary py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto px-4 py-5 sm:px-6 lg:px-8 relative z-0 bg-background opacity-70 rounded-3xl min-h-screen snap-start">
        <div className="mb-4 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft/>
            <Image src="/images/chin-logo.png" alt="Chin Logo" width={32} height={32} priority />
          </Link>
        </div>
        <SectionHeaderPostChin
          title="sket"
          subheader="some teachin, soul searchin and bad pitchin"
        />
        <GenericPostGrid
          posts={posts}
          categories={BLOG_CATEGORIES}
          basePath="/sketchin"
        />
      </div>
    </div>
  );
}
