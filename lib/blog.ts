"use server";

import path from "path";
import fs from "fs";
import matter from "front-matter";

export type BlogCategory = "Intel" | "Tales" | "Bad Ideas" | "coding()" | "coding :)" | "coding :(";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  date?: string;
}

const blogDir = path.join(process.cwd(), "content");

export async function getMDXFiles() {
  return fs
    .readdirSync(blogDir)
    .filter((file) => path.extname(file) === ".mdx");
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const files = await getMDXFiles();
  
  return files.map((file) => {
    const rawContent = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const { attributes } = matter(rawContent) as unknown as { attributes: BlogPost };
    const slug = file.replace(/\.mdx$/, "");

    return {
      slug,
      title: attributes.title,
      description: attributes.description,
      category: (attributes.category) || "Intel", // Default to Intel if not specified
    };
  });
}
