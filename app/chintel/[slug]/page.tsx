import { notFound } from 'next/navigation'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: PageProps) {
  try {
    const slug = (await params).slug
    
    const { default: Post } = await import(`@/content/${slug}.mdx`).catch(() => {
      notFound()
    })
    
    return (
      <div className="py-16">
        <article className="prose lg:prose-xl dark:prose-invert max-w-3xl mx-auto px-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 md:p-12 border border-gray-100 dark:border-gray-700">
          <Link 
            href="/chintel" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 mb-8 no-underline"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
          <Post />
        </article>
      </div>
    )
  } catch {
    notFound()
  }
}
