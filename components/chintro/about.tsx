"use client";

import Contact from "./contact";
import SectionHeader from "@/components/ui/section-header";

export default function About() {
  return (
    <section className="mb-16">
      <SectionHeader title="intro" />
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="text-lg text-gray-600 dark:text-gray-300 space-y-4">
          <pre className="font-mono text-sm text-gray-400 dark:text-gray-500 whitespace-pre-wrap">
            {`// "Tell me about yourself" is probably the hardest question to answer. We're all figuring things out, and often, there's no single, definitive response. That's why people usually just say what they do for a living.

// I write code—mainly JavaScript—for building full-stack web apps. But before diving into development, I was a mechanical engineer. So before wondering why my for-loop runs infinitely, I spent my time looking at gear wheels that ran endlessly—on purpose (which, thankfully, wasn't a bug).

// It's been a fun journey moving into dev. Read the full story`}
          </pre>

          <p>
            I am a passionate and creative full-stack developer with experience
            in building scalable and user-friendly web applications. With a
            strong foundation in problem-solving and software development, I
            enjoy working on both frontend and backend technologies to create
            efficient and maintainable solutions. I thrive in collaborative
            environments, continuously learn new technologies, and focus on
            delivering high-quality, impactful work.
          </p>

          <hr className="my-6 border-gray-300 dark:border-gray-600" />
          <Contact />
        </div>
      </div>
    </section>
  );
}
