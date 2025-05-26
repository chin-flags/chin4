"use client";

import { getChinfieldPosts, ChinfieldPost } from "@/lib/content";
import { useEffect, useState } from "react";
import SectionHeader from "../ui/section-header";
import { GenericPostGrid } from "../ui/generic-post-grid";

export default function Chinfield() {
  const [posts, setPosts] = useState<ChinfieldPost[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchPosts = async () => {
      const data = await getChinfieldPosts();
      setPosts(data);
    };
    
    fetchPosts();
  }, []);

  const CHINFIELD_CATEGORIES = ["coding()", "coding :)", "coding :("];

  return (
    <section
      id="chinfield"
      className="w-full max-w-4xl mx-auto px-4 py-5 sm:px-6 lg:px-8 relative z-10 bg-white dark:bg-gray-900 min-h-screen snap-start"
    >
      <main className="max-w-4xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <SectionHeader title="infield" />

        {mounted ? (
          <GenericPostGrid
            posts={posts}
            categories={CHINFIELD_CATEGORIES}
            basePath="/chinfield"
          />
        ) : (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <div className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500 text-white">
                All
              </div>
              {CHINFIELD_CATEGORIES.map((category) => (
                <div
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {category}
                </div>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border rounded-lg p-4 animate-pulse">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        )}
      </main>
    </section>
  );
}
