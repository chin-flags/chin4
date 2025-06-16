"use client";
import { motion } from "framer-motion";

interface SubSectionHeaderProps {
  title: string;
}

export default function SubSectionHeader({
  title,
}: SubSectionHeaderProps) {
  return (
    <div className="my-8">
      <motion.h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-none tracking-tight font-jost">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: [0.48, 0.15, 0.25, 0.96],
          }}
          className="inline-block text-primary"
        >
          {title}
        </motion.span>
      </motion.h3>
    </div>
  );
} 