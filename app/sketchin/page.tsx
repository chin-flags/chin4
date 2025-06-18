import { ContentCategory, getSketchinPosts } from "@/lib/content";
import { GenericPostGrid } from "@/components/ui/generic-post-grid";
import SectionHeaderPostChin from "@/components/ui/section-header-post-chin";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPage() {
  const posts = await getSketchinPosts();

  const BLOG_CATEGORIES: ContentCategory[] = [
    "Teachin",
    "Searchin",
    "Pitchin",
  ];

  return (
    <div className="min-h-screen bg-surface-primary py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeaderPostChin
          title="sket"
          subheader="some teachin, soul searchin and bad pitchin"
        />
        
        <div className="mb-8">
          <Link href="/sinhala" className="block">
            <div className="bg-secondary rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-foreground mb-2">
                  Can read this text? Then you&apos;ll love my other blog
                </h3>
              <div className="flex justify-center p-4">
                <Image
                  src="/aniwarathe.png"
                  alt="Sinhala Blog"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Can read this text? Then you&apos;ll love my other blog
                </h3>
              </div>
            </div>
          </Link>
        </div>

        <GenericPostGrid
          posts={posts}
          categories={BLOG_CATEGORIES}
          basePath="/sketchin"
        />
      </div>
    </div>
  );
}
