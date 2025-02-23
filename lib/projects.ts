"use server";

import path from "path";
import fs from "fs";
import matter from "front-matter";

export type BlogCategory = "Intel" | "Tales" | "Bad Ideas" | "coding()" | "coding :)" | "coding :(";

interface InnovationPost {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  date?: string;
}

const projectDir = path.join(process.cwd(), "projects");

export async function getMDXFiles() {
  return fs
    .readdirSync(projectDir)
    .filter((file) => path.extname(file) === ".mdx");
}

export async function getInnovationPosts(): Promise<InnovationPost[]> {
  const files = await getMDXFiles(); 
  
  return files.map((file) => {
    const rawContent = fs.readFileSync(path.join(projectDir, file), "utf-8");
    const { attributes } = matter(rawContent) as unknown as { attributes: InnovationPost };
    const slug = file.replace(/\.mdx$/, "");

    return {
      slug,
      title: attributes.title,
      description: attributes.description,
      category: (attributes.category) || "Intel", // Default to Intel if not specified
    };
  });
}

export type ProjectCategory = 'Cooked()' | 'Cooking :)' | 'Burnt :(';

interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  date?: string;
}

const projectsDir = path.join(process.cwd(), "content/projects");

export async function getProjects(): Promise<Project[]> {
  // Create directory if it doesn't exist
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
  }

  const files = fs.readdirSync(projectsDir).filter((file) => file.endsWith(".mdx"));

  return files.map((file) => {
    const rawContent = fs.readFileSync(path.join(projectsDir, file), "utf-8");
    const { attributes } = matter(rawContent) as unknown as { attributes: Project };
    const slug = file.replace(/\.mdx$/, "");

    return {
      slug,
      title: attributes.title,  
      description: attributes.description,
      category: attributes.category,
      date: attributes.date,
    };
  });
}
