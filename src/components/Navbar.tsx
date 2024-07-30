"use client";

import * as React from "react";
import {
  AppWindowMac,
  BriefcaseBusiness,
  CirclePlus,
  CircleUserRound,
  House,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  const linkClasses = (path: string) =>
    cn(
      "hover:bg-secondary  hover:dark:bg-secondary rounded-full p-1.5 duration-150 hover:dark:text-secondary-foreground text-muted-foreground hover:text-foreground",
      {
        "bg-secondary dark:bg-secondary text-foreground dark:text-secondary-foreground":
          pathname === path,
      }
    );

  return (
    <MaxWidthWrapper className=" sticky  top-3 sm:top-5  z-20">
      <div
        className={cn(
          " w-full   max-w-lg sm:max-w-xl mx-auto  shadow-sm rounded-full",
          className
        )}
      >
        <div className="flex  items-center justify-between bg-card border-border dark:bg-muted dark:border-border border-[1.5px] backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-full dark:shadow-md">
          <div className="flex gap-1.5 sm:gap-3  items-center">
            <Link href="/" className={linkClasses("/")}>
              <House />
            </Link>
            <Link href="/about" className={linkClasses("/about")}>
              <CircleUserRound />
            </Link>
            <Link href="/projects" className={linkClasses("/projects")}>
              <BriefcaseBusiness />
            </Link>
            <Link href="/blogs" className={linkClasses("/blogs")}>
              <AppWindowMac />
            </Link>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-3">
            <Button
              variant="secondary"
              size="icon"
              onClick={toggleTheme}
              className="relative bg-transparent rounded-full "
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100  " />
            </Button>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex gap-2 items-center font-semibold "
              )}
            >
              <CirclePlus className="size-5 dark:text-primary-foreground " />
              <p className="hidden sm:block">Hire Me</p>
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Navbar;
