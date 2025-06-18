"use server";

import path from "path";
import fs from "fs";
import matter from "gray-matter";

export type ContentCategory = "Teachin" | "Searchin" | "Pitchin" | "coding()" | "Cooking :)" | "Burnt :(";

export interface BaseContent {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  date?: string;
  category: ContentCategory;
}

export interface SketchinPost extends BaseContent {
  author?: string;
}

export type ChinfieldPost = BaseContent;

// Content directories
const CONTENT_DIRS = {
  sketchin: path.join(process.cwd(), "content", "sketchin"),
  chinfield: path.join(process.cwd(), "content", "chinfield"),
} as const;

async function getMDXFilesFromDirectory(directory: string): Promise<string[]> {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  return fs
    .readdirSync(directory)
    .filter((file) => path.extname(file) === ".mdx");
}

function processContentFile<T extends BaseContent>(
  file: string,
  directory: string,
  defaultCategory: ContentCategory,
  includeAuthor = false
): T {
  const rawContent = fs.readFileSync(path.join(directory, file), "utf-8");
  const { data: frontmatter } = matter(rawContent);
  const slug = file.replace(/\.mdx$/, "");

  // Ensure date is always a string
  let dateString: string | undefined;
  if (frontmatter.date) {
    if (frontmatter.date instanceof Date) {
      dateString = frontmatter.date.toISOString().split('T')[0]; // Convert to YYYY-MM-DD format
    } else {
      dateString = String(frontmatter.date);
    }
  }

  const baseContent = {
    slug,
    title: frontmatter.title || "Untitled",
    subtitle: frontmatter.subtitle || "",
    description: frontmatter.description || "",
    category: frontmatter.category || defaultCategory,
    date: dateString,
  };

  if (includeAuthor) {
    return {
      ...baseContent,
      author: frontmatter.author,
    } as unknown as T;
  }

  return baseContent as unknown as T;
}

export async function getSketchinPosts(): Promise<SketchinPost[]> {
  const files = await getMDXFilesFromDirectory(CONTENT_DIRS.sketchin);

  return files
    .map((file) =>
      processContentFile<SketchinPost>(file, CONTENT_DIRS.sketchin, "Teachin", true)
    )
    .sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export async function getChinfieldPosts(): Promise<ChinfieldPost[]> {
  const files = await getMDXFilesFromDirectory(CONTENT_DIRS.chinfield);

  return files
    .map((file) =>
      processContentFile<ChinfieldPost>(file, CONTENT_DIRS.chinfield, "coding()")
    )
    .sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}
