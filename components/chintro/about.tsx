"use client";

import Link from "next/link";

export default function About() {
  return (
    <section className="mb-16">
      <div className="text-xl sm:text-xl text-foreground text-justify space-y-4">
        {/* <p>
          The most challenging question in an technical interview isn&apos;t about
          algorithms 
        </p>
        <p>it&apos;s &quot;Tell me about yourself.&quot;</p>
        <p>I don&apos;t know how to answer both.</p>
        <p>
          I&apos;m constantly trying to figure it out, and most of the time,
          there&apos;s no definitive answer. So I&apos;ll fall back to the most
          standard version
        </p> */}
        <p>
          My name is <span className="font-bold">Chinthaka</span>, it means
          “philosopher” or “thinker” in my language,{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Sinhala_language"
            target="_blank"
            rel="noopener noreferrer"
            className="text-wabi-earth font-bold hover:underline"
          >
            Sinhala
          </Link>
          .
        </p>
        <p>
          I like to think I live up to that… especially when I lose something or
          mess things up.
        </p>
        <p>
          These days, I ask computers to do things for me using code and I get
          paid for it. That still gives me some bragging rights... at least
          until the robots take over.
        </p>
        <p>I write, too </p>{" "}
        <p>
          sometimes about code, sometimes about hallucinations, reasonably fun
          comedies, dreams, political drama, or the strange overlap between all
          of them.
        </p>
        <p>
          But if you think about it, even coding is writing, writing that only
          machines can understand.
        </p>
        <p>Machines are easier to please</p>
        <p>
          I have also worked with machines that don&apos;t run on zeros and ones
        </p>
        <p>
          Curous to know ?
          <Link
            href="/sketchin/from-nuts-and-bolts-to-ones-zeros"
            target="_new"
            className="text-wabi-earth font-bold ml-1 hover:underline"
          >
            Read the full story
          </Link>
        </p>
      </div>
    </section>
  );
}
