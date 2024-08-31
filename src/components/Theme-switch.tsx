"use client";

import { cn, stylesIcon } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

type Theme = "light" | "dark";
type themeProps = {
  className?: string;
};

export default function ThemeSwitch({ className }: themeProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
        setTheme("light");
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if(localTheme === "dark"){
          document.documentElement.classList.add("dark");
        }
    } else if (window.matchMedia("prefers-color-scheme: dark").matches) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "bg-primary p-2 rounded-lg hover:scale-[1.15] active:scale-105 transition-all duration-300",
        className
      )}
    >
      {theme === "light" ? (
        <Sun fill={`${stylesIcon.black}`} />
      ) : (
        <Moon fill={`${stylesIcon.black}`} strokeWidth={0} />
      )}
    </button>
  );
}
