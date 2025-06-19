import { ContentCategory, getSketchinPosts } from "@/lib/content";
import { GenericPostGrid } from "@/components/ui/generic-post-grid";
import SectionHeaderPostChin from "@/components/ui/section-header-post-chin";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPage() {
  const posts = await getSketchinPosts();

  const BLOG_CATEGORIES: ContentCategory[] = ["Teachin", "Searchin", "Pitchin"];

  return (
    <div className="min-h-screen bg-surface-primary py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeaderPostChin
          title="sket"
          subheader="some teachin, soul searchin and bad pitchin"
        />
        {/* <div className="mb-8">
          <Link href="https://aniwarathe.lk/"  className="block group" target="_blank" rel="noopener noreferrer">
            <div className="bg-surface-secondary border-2  rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-warning">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-primary mb-2 flex items-center justify-center md:justify-start gap-2">
                    Can you read <span className="text-warning font-extrabold">this?</span>
                    <Image
                      src="/aniwarathe.png"
                      alt="Sinhala Blog - Can you read this?"
                      width={100}
                      height={50}
                      className="object-contain rounded-md ml-1"
                    />
                  </h3>
                  <p className="text-lg text-text-secondary mb-4">
                    If you can, you might love my Sinhala blog!
                  </p>
                </div>

              </div>
            </div>
          </Link>
        </div> */}

        <GenericPostGrid
          posts={posts}
          categories={BLOG_CATEGORIES}
          basePath="/sketchin"
        />
      </div>
    </div>
  );
}
