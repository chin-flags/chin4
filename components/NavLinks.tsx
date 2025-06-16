"use client";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NavLink from "./NavLink";

interface NavLinksProps {
  shouldAnimate?: boolean;
  setHoveredNav: Dispatch<SetStateAction<string | null>>;
  position?: "left" | "right";
}

const leftNavItems = [{ href: "#reach", text: "rea" }];

const rightNavItems = [
  { href: "#chintro", text: "tro" },
  { href: "#chinvolved", text: "volved", showChevron: false },
  { href: "/chintel", text: "tel", showChevron: false },
];

export default function NavLinks({
  shouldAnimate = true,
  setHoveredNav,
  position = "right",
}: NavLinksProps) {
  const navItems = position === "left" ? leftNavItems : rightNavItems;

  return (
    <motion.div
      className={`flex flex-col sm:gap-1 items-start text-2xl sm:text-3xl md:text-4xl ${
        position === "left" ? "mr-2" : "ml-2"
      }`}
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
          icon={index === 0 && position === "right" ? <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 animate-pulse opacity-70 hover:opacity-100" /> : undefined}
        />
      ))}
    </motion.div>
  );
}
