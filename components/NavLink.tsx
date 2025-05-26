"use client";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface NavLinkProps {
  href: string;
  text: string;
  index: number;
  setHoveredNav: Dispatch<SetStateAction<string | null>>;
}

const navVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.2 + 1.0,
      duration: 0.5,
      ease: [0.48, 0.15, 0.25, 0.96]
    }
  })
};

export default function NavLink({ href, text, index, setHoveredNav }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's a hash link (internal page navigation)
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 64;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    // For regular page navigation, let the default behavior handle it
  };

  return (
    <motion.div variants={navVariants} custom={index} className="mx-0">
      <a
        href={href}
        onClick={handleClick}
        className="group flex items-center gap-2 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors font-jost duration-300"
        onMouseEnter={() => setHoveredNav(text)}
        onMouseLeave={() => setHoveredNav(null)}
      >
        <span>{text}</span>
      </a>
    </motion.div>
  );
}
