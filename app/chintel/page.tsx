import { ChintelCategory, getChintelPosts } from "@/lib/content";
import SectionHeader from "@/components/ui/section-header";
import { GenericPostGrid } from "@/components/ui/generic-post-grid";

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
        <SectionHeader
          title="intel"
          subheader="A mix of intel, tales and bad ideas"
        />
        <GenericPostGrid
          posts={posts}
          categories={BLOG_CATEGORIES}
          basePath="/chintel"
        />
      </div>
    </div>
  );
}
