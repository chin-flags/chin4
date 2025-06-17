import { ChintelCategory, getChintelPosts } from "@/lib/content";
import { GenericPostGrid } from "@/components/ui/generic-post-grid";
import SectionHeaderPostChin from "@/components/ui/section-header-post-chin";

export default async function BlogPage() {
  const posts = await getChintelPosts();

  const BLOG_CATEGORIES: ChintelCategory[] = [
    "Intel",
    "Tales",
    "Bad Ideas",
  ];

  return (
    <div className="min-h-screen bg-surface-primary py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeaderPostChin
          title="tea"
          subheader="also sketchin, pitchin and searchin"
        />
        <GenericPostGrid
          posts={posts}
          categories={BLOG_CATEGORIES}
          basePath="/teachin"
        />
      </div>
    </div>
  );
}
