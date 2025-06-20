"use client";
import { Dispatch, SetStateAction, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowDownIcon, ExternalLinkIcon } from "lucide-react";
import NavLink from "./NavLink";
import { LucideIcon } from "lucide-react";

interface NavItem {
  href: string;
  text: string;
  showChevron?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  tooltip?: string;
}

interface NavLinksProps {
  shouldAnimate?: boolean;
  setHoveredNav: Dispatch<SetStateAction<string | null>>;
  position?: "left" | "right";
}

const isProduction = process.env.NODE_ENV === "production";

const getSketchinHref = () => {
  if (typeof window !== "undefined") {
    if (window.location.hostname.startsWith("sket.")) {
      return "/";
    }
  }
  return isProduction ? "https://sket.chin4.com" : "/sketchin";
};

export default function NavLinks({
  shouldAnimate = true,
  setHoveredNav,
  position = "right",
}: NavLinksProps) {
  const sketchinHref = useMemo(getSketchinHref, []);

  const leftNavItems: NavItem[] = [
    { href: "#reach", text: "rea" },
    {
      href: sketchinHref,
      text: "sket",
      icon: ExternalLinkIcon,
      iconPosition: "left",
      tooltip: "Bolg"
    },
  ];

  const rightNavItems: NavItem[] = [
    { href: "#chintro", text: "tro", icon: ArrowDownIcon },
    { href: "#chinterests", text: "terests", showChevron: false },
    { href: "#chinvolved", text: "volved", showChevron: false},
  ];

  const navItems = position === "left" ? leftNavItems : rightNavItems;

  return (
    <motion.div
      className={`flex flex-col sm:gap-1 items-${position === "left" ? "end" : "start"} text-2xl sm:text-3xl md:text-4xl ${
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
          icon={
            item.icon ? (
              <item.icon
                size={16}
                className="transition-transform group-hover:translate-x-1 animate-pulse opacity-70 hover:opacity-100"
              />
            ) : undefined
          }
          iconPosition={item.iconPosition}
          tooltip={item.tooltip}
        />
      ))}
    </motion.div>
  );
}
