import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogHeader from "@/components/blog/BlogHeader";
import { mdxComponents } from "@/components/blog/MDXComponents";
import { getMDXContent } from "@/lib/mdx-utils";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const metadata: Metadata = {
  title: "Sketchin - a blog",
};

export default async function Page({ params }: PageProps) {
  try {
    const slug = (await params).slug;
    const { frontmatter, content } = getMDXContent("sketchin", slug);

    return (
      <BlogLayout backHref={`/sketchin`} backText={`Back to sketchin`}>
        <BlogHeader frontmatter={frontmatter} />
        <div className="prose lg:prose-2xl dark:prose-invert max-w-none font-jost">
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{
              parseFrontmatter: true,
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: "wrap" }],
                ],
                format: 'mdx',
              },
            }}
          />
        </div>
      </BlogLayout>
    );
  } catch (error) {
    console.error("Error rendering content:", error);
    notFound();
  }
}
