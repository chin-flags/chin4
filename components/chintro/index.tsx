"use client";

import About from "./about";
import Expertise from "./expertise";
//import Testimonials from "./testimonials";
import GitCareer from "./git-career";

export default function Chintro() {
  return (
    <section
      id="chintro"
      className="w-full max-w-4xl mx-auto px-4 py-5 sm:px-6 lg:px-8 relative z-0 bg-white dark:bg-gray-900 min-h-screen snap-start"
    >
      <main className="max-w-4xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <About />
        <GitCareer />
        <Expertise />
        {/* <Testimonials /> */}
      </main>
    </section>
  );
}
