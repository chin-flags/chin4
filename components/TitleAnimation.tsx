"use client";
import { motion } from "framer-motion";

interface TitleAnimationProps {
  shouldAnimate?: boolean;
  hoveredNav: string | null;
}

export default function TitleAnimation({ shouldAnimate = true, hoveredNav }: TitleAnimationProps) {
  // Left nav items that should color both "Ch" and "in"
  const leftNavItems = ["rea", "sket"];
  const isLeftNavHovered = hoveredNav && leftNavItems.includes(hoveredNav);

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
        <motion.span 
          className={`inline-block transition-colors duration-300 ${isLeftNavHovered ? 'text-wabi-earth' : ''}`}
        >
          <motion.span
            className="inline-block"
            initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ 
              delay: shouldAnimate ? 1.2 : 0,
              duration: 0.6,
              ease: [0.48, 0.15, 0.25, 0.96]
            }}
          >
            C
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            h
          </motion.span>
        </motion.span>
        <motion.span 
          className={`inline-block transition-colors duration-300 ${hoveredNav ? 'text-wabi-earth' : ''}`}
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            i
          </motion.span>
          <motion.span
            className="inline-block"
            initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ 
              delay: shouldAnimate ? 1.8 : 0,
              duration: 0.6,
              ease: [0.48, 0.15, 0.25, 0.96]
            }}
          >
            n
          </motion.span>
        </motion.span>
      </motion.h1>
    </div>
  );
}
