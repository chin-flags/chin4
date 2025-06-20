import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <div className="mt-12 text-center text-muted-foreground text-sm px-2 py-8">
      <p>No LLMs were harmed in the making of this app.</p>
      <p>
        Chin&apos;s logo, I mean{" "}
        <span className="inline-flex items-center gap-2">
          this 
          <Image src="/chin1.png" width={24} height={24} alt="Chin's logo" />
        </span>{" "}
        , was crafted by a real human. Check out his work
        <a
          href="https://www.instagram.com/gamikapremarathne"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600 ml-1"
        >
          here
        </a>
      </p>
    </div>
  );
}
