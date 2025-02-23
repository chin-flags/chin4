import ChinTitle from '@/components/chin-title';
import { getBlogPosts } from '@/lib/blog';
import BlogPosts from '@/components/blog-posts';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <ChinTitle 
        suffix="intel" 
        tagline="A mix of intel, tales and bad ideas" 
        showHackyComment={false} 
      />
      
      <BlogPosts posts={posts} />
    </main>
  );
}