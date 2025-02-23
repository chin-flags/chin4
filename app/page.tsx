"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.2 + 2.0,
      duration: 0.5,
      ease: [0.48, 0.15, 0.25, 0.96]
    }
  })
};

const styles = `
.nav-group .nav-item:hover {
  color: rgb(59 130 246);
}

.nav-group .nav-item:hover + .title-wrapper .name-in {
  color: rgb(59 130 246);
}
`;

const messages = [
  "chin.com is expensive",
  "chin1.com is taken",
  "chin2.com is taken",
  "just missed chin3.com",
  "here's chin four you 🥳" 
];


export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const [title, setTitle] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle((prev) => {
        const nextIndex = (messages.indexOf(prev) + 1) % messages.length;
        return messages[nextIndex];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);



  useEffect(() => {
    setIsMounted(true);
    const hasVisited = window.localStorage.getItem('hasVisitedHome');
    if (hasVisited) {
      setShouldAnimate(false);
    } else {
      window.localStorage.setItem('hasVisitedHome', 'true');
    }

    // Add styles
    if (typeof document !== 'undefined') {
      const styleSheet = document.createElement('style');
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);
    }
  }, []);

  // Don't render animations until after mount to avoid hydration issues
  if (!isMounted) {
    return (
      <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen p-8 pt-0 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-1 items-center sm:items-start">
          <div className="flex items-center">
            <div className="flex flex-col items-start">
              <h1 className="text-[150px] font-bold leading-none">
                Ch<span className="transition-colors cursor-pointer hover:text-blue-500">in</span>
              </h1>
            </div>
            <div className="flex flex-col gap-1 items-start text-4xl">
              <Link href="/chinfo" className="hover:text-blue-500 transition-colors font-bold">tro</Link>
              <Link href="/chinnovations" className="hover:text-blue-500 transition-colors font-bold">novations</Link>
              <Link href="/chintel" className="hover:text-blue-500 transition-colors font-bold">tel</Link>
            </div>
          </div>
          <p className="text-xl italic font-bold ml-4 opacity-50">codes, writes and doesn&apos;t test.</p>
        </main>
        <footer className="row-start-2" />
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen p-8 pt-0 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-1 items-center sm:items-start">
        <div className="flex items-center">
          <div className="flex flex-col items-start">
            <motion.h1 
              initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.48, 0.15, 0.25, 0.96]
              }}
              className="text-[150px] font-bold leading-none"
            >
              Ch
              <motion.span 
                className={`inline-block transition-colors ${hoveredNav ? 'text-violet-500 dark:text-violet-400' : ''}`}
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
          <motion.div 
            className="flex flex-col gap-1 items-start text-4xl"
            initial={shouldAnimate ? "hidden" : "visible"}
            animate="visible"
          >
            <motion.div variants={navVariants} custom={0}>
              <Link
                href="/chinfo"
                className="group flex items-center gap-2 hover:text-violet-500 dark:hover:text-violet-400 transition-colors font-bold"
                onMouseEnter={() => setHoveredNav('tro')}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <span>tro</span>
                <svg 
                  className="w-4 h-4 opacity-0 transition-all duration-200 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
            <motion.div variants={navVariants} custom={1}>
              <Link
                href="/chinnovations"
                className="group flex items-center gap-2 hover:text-violet-500 dark:hover:text-violet-400 transition-colors font-bold"
                onMouseEnter={() => setHoveredNav('novations')}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <span>novations</span>
                <svg 
                  className="w-4 h-4 opacity-0 transition-all duration-200 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
            <motion.div variants={navVariants} custom={2}>
              <Link
                href="/chintel"
                className="group flex items-center gap-2 hover:text-violet-500 dark:hover:text-violet-400 transition-colors font-bold"
                onMouseEnter={() => setHoveredNav('tel')}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <span>tel</span>
                <svg 
                  className="w-4 h-4 opacity-0 transition-all duration-200 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.p 
          initial={shouldAnimate ? { opacity: 0, y: 10 } : { opacity: 0.5, y: 0 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ 
            delay: shouldAnimate ? 1.2 : 0,
            duration: 0.6,
            ease: [0.48, 0.15, 0.25, 0.96]
          }}
          className="text-xl italic font-bold ml-4 max-w-[500px] leading-tight"
        >
          codes, writes and says
          <span className="font-mono text-xl ml-2 text-green-500 dark:text-green-400 not-italic opacity-70">{`//hacky but works`}</span>
        </motion.p>
      </main>

      <footer className="row-start-2">
        {/* Empty footer preserved for grid layout */}
      </footer>
    </div>
  );
}
