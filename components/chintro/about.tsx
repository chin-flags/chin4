"use client";

import Link from "next/link";

export default function About() {
  return (
    <section className="mb-16">
      <div className="text-sm sm:text-xl text-foreground text-justify space-y-4">
        <p>
          The most challenging question in an interview isn&apos;t about
          algorithms it&apos;s &quot;Tell me about yourself.&quot;
        </p>
        <p>I don&apos;t know how to answer either.</p>
        <p>
          I&apos;m constantly trying to figure it out, and most of the time,
          there&apos;s no definitive answer. So I&apos;ll fall back to the most
          standard version
        </p>
        <p>
          My name is{" "}
          <span className="font-bold text-orange-500 dark:text-yellow-400">
            Chinthaka
          </span>
          , it means “philosopher” or “thinker” in my language, Sinhala. I like
          to think I live up to that… especially when I lose something or mess
          things up.
        </p>
        <p>
          These days, I ask computers to do things for me using code and I get
          paid for it. That still gives me some bragging rights... at least
          until the robots take over.
        </p>
        <p>
          I write code mainly JavaScript for building full-stack web apps.
          I&apos;ve Started with <span className="italic">localhost</span>, then
          servers, then serverless. and now, no central server.
          <br />
          But before diving into development, I was a mechanical engineer.
          It&apos;s been a fun journey moving into dev.
          <Link
            href="/chintel/from-nuts-and-bolts-to-ones-zeros"
            className="text-orange-500 dark:text-yellow-400 ml-1 hover:underline"
          >
            Read the full story
          </Link>
        </p>
      </div>
    </section>
  );
}
