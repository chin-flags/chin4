"use client";

import SectionHeader from "../ui/section-header";
import Interests from "./interests";
export default function Chinterests() {
  return (
    <section
      id="chinterests"
      className="w-full max-w-4xl mx-auto px-4 py-5 sm:px-6 lg:px-8 relative z-0 bg-background min-h-screen snap-start"
    >
      <main className="max-w-4xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <SectionHeader title="interests" />
        <Interests />
        {/* <NotInterests /> */}
      </main>
    </section>
  );
}
