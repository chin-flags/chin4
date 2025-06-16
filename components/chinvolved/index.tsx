"use client";

// import { getChinfieldPosts, ChinfieldPost } from "@/lib/content";
// import { useEffect, useState } from "react";
import SectionHeader from "../ui/section-header";
import Experience from "./experience";

export default function Chinfield() {

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const data = await getChinfieldPosts();
  //     setPosts(data);
  //   };
    
  //   fetchPosts();
  // }, []);

  //const CHINVOLVED_CATEGORIES = ["coding()", "coding :)", "coding :("];

  return (
    <section
      id="chinvolved"
      className="w-full max-w-4xl mx-auto px-4 py-5 sm:px-6 lg:px-8 relative z-10 bg-background min-h-screen snap-start"
    >
      <main className="max-w-4xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <SectionHeader title="involved" />
        <Experience/>
      </main>
    </section>
  );
}
