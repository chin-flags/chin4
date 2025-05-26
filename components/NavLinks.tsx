"use client";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";

interface NavLinksProps {
  shouldAnimate?: boolean;
  setHoveredNav: Dispatch<SetStateAction<string | null>>;
}

const navItems = [
  { href: "#chintro", text: "tro" },
  { href: "#chinfield", text: "field", showChevron: false },
  { href: "/chintel", text: "tel", showChevron: false }
];

export default function NavLinks({ shouldAnimate = true, setHoveredNav }: NavLinksProps) {
  return (
    <motion.div 
      className="flex flex-col sm:gap-1 items-start text-xl sm:text-3xl md:text-4xl ml-2"
      initial={shouldAnimate ? "hidden" : "visible"}
      animate="visible"
    >
      {navItems.map((item, index) => (
        <NavLink
          key={item.href}
          href={item.href}
          text={item.text}
          index={index}
          setHoveredNav={setHoveredNav}
        />
      ))}
    </motion.div>
  );
}
