import ChinTitle from "@/components/chin-title";
import InnovationPosts from '@/components/innovation-posts';
import { getProjects } from '@/lib/projects';

export default async function Chinovations() {
  const posts = await getProjects();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <ChinTitle 
          suffix="innovations" 
          tagline="Coding adventures: Cooked, Cooking, and Burnt." 
          showHackyComment={false} 
        />
        
        <InnovationPosts posts={posts} />
      </main>
    </div>
  );
}
