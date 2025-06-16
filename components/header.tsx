"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const pathname = usePathname();
  const showNav = pathname !== "/";

  return (
    <header className={cn("sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm")}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="w-36" />
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-4">
          {showNav && (
            <Link
              href="/"
              className="px-4 py-2 text-base font-medium rounded-lg transition-colors text-text-secondary hover:text-text-hover inline-flex items-center gap-2"
            >
              <Image
                src="/chin1.png"
                alt="Profile image"
                width={48}
                height={48}
                className="rounded-full object-cover"
                priority
              />
            </Link>
          )}
        </nav>
        <div className="w-36 flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
