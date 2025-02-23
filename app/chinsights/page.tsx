"use client";
import ChinTitle from "@/components/chin-title";

export default function Chinsights() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <ChinTitle 
          suffix="insights" 
          tagline="Thoughts and observations"
          showHackyComment={false}
        />
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Insights
          </h2>
          {/* Add your insights content here */}
        </section>
      </main>
    </div>
  );
}