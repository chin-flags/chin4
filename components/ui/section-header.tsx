"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subheader?: string;
}

export default function SectionHeader({
  title,
  subheader,
}: SectionHeaderProps) {
  return (
    <div className="my-12">
      <motion.h2 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-none tracking-tight font-jost">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.48, 0.15, 0.25, 0.96],
          }}
          className="inline-block text-orange-500 dark:text-yellow-300"
        >
          Ch
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: [0.48, 0.15, 0.25, 0.96],
          }}
          className="inline-block text-yellow-300 dark:text-yellow-800"
        >
          {title}
        </motion.span>
      </motion.h2>
      {subheader && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.5,
            ease: [0.48, 0.15, 0.25, 0.96],
          }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-400"
        >
          {subheader}
        </motion.p>
      )}
    </div>
  );
}
