
export const metadata = {
  title: 'Blog | Your Name',
  description: 'Read my thoughts on technology, programming, and more.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {children}
    </div>
  )
}
