"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import TitleAnimation from "@/components/TitleAnimation";
import NavLinks from "@/components/NavLinks";
import TitleMessage from "@/components/TitleMessage";
import MotionText from "@/components/MotionText";
import Chintro from "@/components/chintro";
import Chinfield from "@/components/chinfield";

const messages = [
  "chin.com is expensive",
  "chin1.com is taken",
  "chin2.com is taken",
  "just missed chin3.com",
  "here's chin four you 🥳",
];

export default function Home() {
  const [shouldAnimate] = useState(true);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-8 pt-0 pb-12 sm:pb-20 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)] text-gray-900 dark:text-white transition-colors duration-300">
      <TitleMessage messages={messages} />

      <main className="flex flex-col -mt-20 items-center justify-center w-full h-screen max-w-6xl mx-auto">
        <div className="flex flex-col items-center ">
          <motion.div
            initial={
              shouldAnimate
                ? { opacity: 0, scale: 0.8 }
                : { opacity: 1, scale: 1 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.48, 0.15, 0.25, 0.96],
            }}
            className="relative w-56 h-56 mb-4"
          >
            <Image
              src="/chin1.png"
              alt="Profile image"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 224px) 100vw, 224px"
            />
          </motion.div>

          <div className="flex items-start justify-center">
            <TitleAnimation
              shouldAnimate={shouldAnimate}
              hoveredNav={hoveredNav}
            />
            <NavLinks
              shouldAnimate={shouldAnimate}
              setHoveredNav={setHoveredNav}
            />
          </div>

          <MotionText
            delay={1.2}
            initialY={10}
            shouldAnimate={shouldAnimate}
            className="text-base sm:text-xl italic font-bold mt-4 px-2 sm:px-4 max-w-[500px] leading-tight text-center text-gray-600 dark:text-gray-400"
            initialOpacity={0}
          >
            codes, writes and says
            <span className="font-mono text-base sm:text-xl ml-2 text-green-500 dark:text-green-400 not-italic opacity-70 block sm:inline">{`//hacky but works`}</span>
          </MotionText>
        </div>
      </main>

      <div className="w-full">
        <Chintro />
      </div>
      <div className="w-full">
        <Chinfield />
      </div>
    </div>
  );
}
