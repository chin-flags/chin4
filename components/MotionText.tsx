"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  initialY?: number;
  initialOpacity?: number;
  shouldAnimate?: boolean;
}

export default function MotionText({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  initialY = 20,
  initialOpacity = 0,
  shouldAnimate = true,
}: MotionTextProps) {
  return (
    <motion.div
      initial={shouldAnimate ? { opacity: initialOpacity, y: initialY } : { opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: shouldAnimate ? delay : 0,
        duration: duration,
        ease: [0.48, 0.15, 0.25, 0.96],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 