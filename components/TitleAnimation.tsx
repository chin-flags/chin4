"use client";
import { motion } from "framer-motion";

interface TitleAnimationProps {
  shouldAnimate?: boolean;
  hoveredNav: string | null;
}

export default function TitleAnimation({ shouldAnimate = true, hoveredNav }: TitleAnimationProps) {
  return (
    <div className="flex flex-row items-end">
      <motion.h1 
        initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          ease: [0.48, 0.15, 0.25, 0.96]
        }}
        className="text-[84px] sm:text-[120px] md:text-[150px] font-extrabold leading-none tracking-tight font-jost"
      >
        Ch
        <motion.span 
          className={`inline-block transition-colors duration-300 ${hoveredNav ? 'text-orange-500 dark:text-yellow-300' : ''}`}
          initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: shouldAnimate ? 0.3 : 0,
            duration: 0.6,
            ease: [0.48, 0.15, 0.25, 0.96]
          }}
        >
          in
        </motion.span>
      </motion.h1>
    </div>
  );
}
