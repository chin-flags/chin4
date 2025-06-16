"use client";

import About from "./about";
import GoodAt from "./good-at";
//import Testimonials from "./testimonials";
import GitCareer from "./git-career";
import NotGoodAt from "./not-good-at";
import SectionHeader from "@/components/ui/section-header";

export default function Chintro() {
  return (
    <section
      id="chintro"
      className="w-full max-w-4xl mx-auto px-4 py-5 sm:px-6 lg:px-8 relative z-0 bg-background min-h-screen snap-start"
    >
      <main className="max-w-4xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
      <SectionHeader title="intro" />
        <About />
        <GitCareer />
        <GoodAt />
        <NotGoodAt />
        {/* <Testimonials /> */}
      </main>
    </section>
  );
}
