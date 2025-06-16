"use server";

import path from "path";
import fs from "fs";
import matter from "gray-matter";

export type ChintelCategory = "Intel" | "Tales" | "Bad Ideas";
export type ChinfieldCategory = "coding()" | "coding :)" | "coding :(";
export type ContentCategory = ChintelCategory | ChinfieldCategory;

interface BaseContent {
  slug: string;
  title: string;
  description: string;
  date?: string;
}

export interface ChintelPost extends BaseContent {
  category: ChintelCategory;
  author?: string;
}

export interface ChinfieldPost extends BaseContent {
  category: ChinfieldCategory;
}

// Content directories
const CONTENT_DIRS = {
  chintel: path.join(process.cwd(), "content", "chintel"),
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

export async function getChintelPosts(): Promise<ChintelPost[]> {
  const files = await getMDXFilesFromDirectory(CONTENT_DIRS.chintel);

  return files
    .map((file) =>
      processContentFile<ChintelPost>(file, CONTENT_DIRS.chintel, "Intel", true)
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
