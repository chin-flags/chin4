import { ContentCategory, getSketchinPosts } from "@/lib/content";
import { GenericPostGrid } from "@/components/ui/generic-post-grid";
import SectionHeaderPostChin from "@/components/ui/section-header-post-chin";

export default async function BlogPage() {
  const posts = await getSketchinPosts();

  const BLOG_CATEGORIES: ContentCategory[] = ["Teachin", "Searchin", "Pitchin"];

  return (
    <div className="min-h-screen bg-surface-primary py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
