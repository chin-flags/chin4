import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface FrontMatter {
  title: string
  description: string
  date?: string
  category?: string
  author?: string
}

export function getMDXContent(contentDir: string, slug: string) {
  const filePath = path.join(process.cwd(), 'content', contentDir, `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`)
  }

  const source = fs.readFileSync(filePath, 'utf8')
  const { data: frontmatter, content } = matter(source)
  
  if (!content) {
    throw new Error('No content found in MDX file')
  }

  return {
    frontmatter: frontmatter as FrontMatter,
    content
  }
} 