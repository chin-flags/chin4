import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type InnovationCategory = 'Cooked()' | 'Cooking :)' | 'Burnt :(';

interface InnovationPost {
  slug: string;
  title: string;
  description: string;
  category: InnovationCategory;
  date?: string;
}

interface InnovationPostCardProps {
  post: InnovationPost;
}

function InnovationPostCard({ post }: InnovationPostCardProps) {
  return (
    <article 
      className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700"
    >
      <Link href={`/chinnovations/${post.slug}`} className="space-y-4 block">
        <div className="space-y-2">
          <div className="flex justify-between items-start gap-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
              {post.title}
            </h2>
            <span className={`shrink-0 whitespace-nowrap text-sm font-medium px-3 py-1.5 rounded-full ${
              post.category === 'Cooked()' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                : post.category === 'Cooking :)'
                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
            }`}>
              {post.category}
            </span>
          </div>
          {post.date && (
            <time className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
          {post.description}
        </p>
        <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:gap-1.5 gap-1 transition-all">
          Read more
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </Link>
    </article>
  );
}

export default function InnovationPosts({ posts }: { posts: InnovationPost[] }) {
  const categories: (InnovationCategory | 'All')[] = ['All', 'Cooked()', 'Cooking :)', 'Burnt :('];

  return (
    <Tabs defaultValue="All" className="w-full">
      <TabsList className="mb-8 p-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-xl">
        {categories.map(category => (
          <TabsTrigger 
            key={category} 
            value={category}
            className={`min-w-[100px] px-4 py-2 text-lg font-bold transition-all ${
              category === 'Cooked()' 
                ? 'data-[state=active]:bg-green-500 data-[state=active]:text-white hover:text-green-600'
                : category === 'Cooking :)'
                ? 'data-[state=active]:bg-yellow-500 data-[state=active]:text-white hover:text-yellow-600'
                : category === 'Burnt :('
                ? 'data-[state=active]:bg-red-500 data-[state=active]:text-white hover:text-red-600'
                : 'data-[state=active]:bg-blue-500 data-[state=active]:text-white hover:text-blue-600'
            }`}
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map(category => (
        <TabsContent 
          key={category} 
          value={category}
          className="mt-0"
        >
          <div className="grid gap-8 md:grid-cols-2">
            {(category === 'All' ? posts : posts.filter(post => post.category === category))
              .map((post) => (
                <InnovationPostCard key={post.slug} post={post} />
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
