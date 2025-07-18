"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import TitleAnimation from "@/components/TitleAnimation";
import NavLinks from "@/components/NavLinks";
import TitleMessage from "@/components/TitleMessage";
import MotionText from "@/components/MotionText";
import Chintro from "@/components/chintro";
import Chinvolved from "@/components/chinvolved";
import Chinreach from "@/components/chinreach";
import Chinterests from "@/components/chinterests";

const messages = [
  "chin.com is premium",
  "chin1.com is taken",
  "chin2.com is taken",
  "just missed chin3.com",
  "here's chin 4 you 🥳",
];

export default function Home() {
  const [shouldAnimate] = useState(true);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center min-h-screen p-0 sm:p-8 pt-0 pb-12 sm:pb-20 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)]  text-foreground transition-colors duration-300">
      <TitleMessage messages={messages} />

      <main className="flex flex-col -mt-20 items-center justify-center w-full h-screen max-w-6xl mx-auto relative">
        <div className="flex flex-col items-center">
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
            {/* <div className="absolute -top-32 -left-80 w-72 h-72 sm:w-84 sm:h-84 z-10">
              <Image
                src="/images/stains.png"
                alt="Stains decoration"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 200px, 200px"
              />
            </div>
             */}
            <Image
              src="/images/chin-logo.png"
              alt="Profile image"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 224px) 100vw, 224px"
            />
          </motion.div>

          <div className="flex items-start justify-center">
            <NavLinks
              shouldAnimate={shouldAnimate}
              setHoveredNav={setHoveredNav}
              position="left"
            />
            <TitleAnimation
              shouldAnimate={shouldAnimate}
              hoveredNav={hoveredNav}
            />
            <NavLinks
              shouldAnimate={shouldAnimate}
              setHoveredNav={setHoveredNav}
              position="right"
            />
          </div>

          <MotionText
            delay={1.2}
            initialY={10}
            shouldAnimate={shouldAnimate}
            className="text-xl sm:text-2xl italic font-bold mt-4 px-2 sm:px-4 max-w-[600px] leading-tight text-center text-wabi-earth"
            initialOpacity={0}
          >
            codes, writes and says
            <span className="font-mono text-sm sm:text-xl ml-2 font-bold text-green-300 not-italic block sm:inline">{`//hacky but works`}</span>
          </MotionText>
        </div>
      </main>

      <Chintro />
      <Chinterests />
      <Chinvolved />
      <Chinreach />
    </div>
  );
}
