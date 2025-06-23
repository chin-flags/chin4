"use client";

import About from "./about";
//import Testimonials from "./testimonials";
import GitCareer from "./git-career";
import SectionHeader from "@/components/ui/section-header";

export default function Chintro() {
  return (
    <section
      id="chintro"
      className="w-full sm:rounded-3xl opacity-70 max-w-4xl mx-auto px-4 py-5 sm:px-6 lg:px-8 relative z-0 bg-background min-h-screen snap-start"
    >
      <main className="max-w-4xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <SectionHeader title="intro" />
        <About />
        <GitCareer />
        {/* <Testimonials /> */}
      </main>
    </section>
  );
}
