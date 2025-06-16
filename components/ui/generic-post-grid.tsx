"use client";
import { useState, useEffect } from 'react';
import { GenericCategoryFilter } from './generic-category-filter';
import { GenericPostCard } from './generic-post-card';

interface GenericPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date?: string;
  author?: string;
}

interface GenericPostGridProps<T extends string> {
  posts: GenericPost[];
  categories: T[];
  basePath: string;
  className?: string;
}

export function GenericPostGrid<T extends string>({
  posts,
  categories,
  basePath,
  className = "",
}: GenericPostGridProps<T>) {
  const [selectedCategory, setSelectedCategory] = useState<T | 'All'>('All');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  if (!mounted) {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex flex-wrap gap-2 mb-8">
          <div className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground">
            All
          </div>
          {categories.map((category) => (
            <div
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground"
            >
              {category}
            </div>
          ))}
        </div>
        <div className="grid gap-8">
          {posts.map((post) => (
            <GenericPostCard 
              key={post.slug} 
              post={post} 
              basePath={basePath}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <GenericCategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />
      <div className="grid gap-8">
        {filteredPosts.map((post) => (
          <GenericPostCard 
            key={post.slug} 
            post={post} 
            basePath={basePath}
          />
        ))}
      </div>
    </div>
  );
} 