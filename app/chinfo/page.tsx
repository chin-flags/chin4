"use client";

import { useState } from "react";
import ChinTitle from "@/components/chin-title";

const TabButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
      active
        ? "bg-emerald-500 text-white"
        : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    }`}
  >
    {children}
  </button>
);

function TestimonialSection() {
  return (
    <section className="py-12 w-full bg-gray-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          What Our Users Say
        </h2>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2  gap-8">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-300 mb-4">
                Chin has a sharp eye for ideas and a knack for turning concepts
                into something truly engaging. While I provided brainstorming
                support for building his chin4.com website, he was the curator—refining, shaping, and injecting
                personality into every piece. His ability to balance structure
                with creativity makes his work stand out. If you&apos;re looking for
                someone who thinks differently and executes brilliantly, Chin is
                the one to watch.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-white">ChatGPT</p>
                  <p className="text-sm text-gray-400">OpenAI, Inc</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GitLog() {
  const commits = [
    { hash: "f3a12b1", message: "Started as a mechanical engineer. Thought gears were cool." },
    { hash: "c7d9e45", message: "Discovered coding. Wrote my first 'Hello, World!'" },
    { hash: "a8f29d2", message: "Left engineering. Entered full-stack development. No regrets." },
    { hash: "91c5e77", message: "First web app deployed. It worked… mostly." },
    { hash: "b4e83f6", message: "Realized debugging is 90% of development." },
    { hash: "d2a7f98", message: "Started writing blogs. Explained things I learned 5 min ago." },
    { hash: "34f1a21", message: "Learned about TypeScript. Still using //@ts-ignore." },
    { hash: "72c6a19", message: "Built projects, broke things, fixed them, repeated cycle." },
    { hash: "f17c91b", message: "Exploring AI & Web3. What could go wrong?" },
    { hash: "e39d7b0", message: "Writing, building, and still debugging life." },
    { hash: "0a1c2b3", message: "Ongoing: Always learning, always coding, always curious." },
  ];

  return (
    <div className="bg-gray-900 text-white font-mono p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Career Progression (Git Log)</h2>
      <div className="border-l-4 border-gray-700 pl-4">
        {commits.map((commit, index) => (
          <p key={index} className="mb-2">
            <span className="text-green-400">{commit.hash}</span> - {commit.message}
          </p>
        ))}
      </div>
    </div>
  );
}



export default function Chinfo() {
  const [activeTab, setActiveTab] = useState<"recruiter" | "everyone">(
    "recruiter"
  );

  const aboutContent = {
    recruiter: {
      content: `I am a passionate and creative full-stack developer with experience in building scalable and user-friendly web applications. With a strong foundation in problem-solving and software development, I enjoy working on both frontend and backend technologies to create efficient and maintainable solutions. I thrive in collaborative environments, continuously learn new technologies, and focus on delivering high-quality, impactful work.`,
    },
    everyone: {
      content: `"Tell me about yourself" is probably the hardest question to answer. We’re all figuring things out, and often, there’s no single, definitive response. That’s why people usually just say what they do for a living.

I write code—mainly JavaScript—for building full-stack web apps. But before diving into development, I was a mechanical engineer. So before wondering why my for-loop runs infinitely, I spent my time looking at gear wheels that ran endlessly—on purpose (which, thankfully, wasn’t a bug).

It’s been a fun journey moving into dev. Read the full story `,
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <ChinTitle suffix="intro" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>

          <p className="text-lg italic text-gray-600 dark:text-gray-300 mb-3">
            I am a...
          </p>
          <div className="flex gap-2 mb-6">
            <TabButton
              active={activeTab === "recruiter"}
              onClick={() => setActiveTab("recruiter")}
            >
              Recruiter
            </TabButton>
            <TabButton
              active={activeTab === "everyone"}
              onClick={() => setActiveTab("everyone")}
            >
              Everyone Else
            </TabButton>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <div className="text-lg text-gray-600 dark:text-gray-300 space-y-4">
              {aboutContent[activeTab].content
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>
          </div>
        </section>

        <GitLog/>

        {/* Expertise Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Add your areas of expertise here */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
              React
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
              Next.js
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
              Node.js
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
              web3
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <TestimonialSection />

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            [Add your preferred way of contact or social links]
          </p>
        </section>
      </main>
    </div>
  );
}
