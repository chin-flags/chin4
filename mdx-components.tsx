import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

const CustomH1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-5xl font-extrabold mb-8 text-gray-900 dark:text-gray-100 tracking-tight">
    {children}
  </h1>
)

const CustomH2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-semibold mb-4 mt-8 text-gray-800 dark:text-gray-200">
    {children}
  </h2>
)

const CustomP = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
    {children}
  </p>
)

const CustomLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline">
    {children}
  </Link>
)

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: CustomH1,
    h2: CustomH2,
    p: CustomP,
    a: CustomLink,
    ...components,
  }
}