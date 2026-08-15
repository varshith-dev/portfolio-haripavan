"use client";

import { useEffect, useState } from "react";
import { Briefcase, FolderKanban, ArrowUp, Sun, Moon } from "lucide-react";
import { LinkedInWebIcon } from "@/components/icons";
import { profile } from "@/lib/data";

export function MobileBottomNav() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const isLight = document.documentElement.classList.contains("light");
    setDark(!isLight);
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;
    setDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 lg:hidden w-[92%] max-w-[380px] pointer-events-auto">
      <div className="flex items-center justify-between rounded-[4px] border border-border/80 bg-card/90 px-3 py-2 shadow-2xl backdrop-blur-xl">
        <a
          href="#initiatives"
          className="flex flex-col items-center gap-1 px-3 py-1 font-mono text-[10px] font-semibold text-muted-foreground transition-colors hover:text-foreground active:scale-95"
        >
          <FolderKanban className="h-4 w-4" />
          <span>Cases</span>
        </a>

        <a
          href="#experience"
          className="flex flex-col items-center gap-1 px-3 py-1 font-mono text-[10px] font-semibold text-muted-foreground transition-colors hover:text-foreground active:scale-95"
        >
          <Briefcase className="h-4 w-4" />
          <span>Work</span>
        </a>

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex flex-col items-center gap-1 px-3 py-1 font-mono text-[10px] font-semibold text-muted-foreground transition-colors hover:text-foreground active:scale-95 cursor-pointer"
        >
          {dark ? <Sun className="h-4 w-4 text-amber-300" /> : <Moon className="h-4 w-4 text-slate-700" />}
          <span>{dark ? "Light" : "Dark"}</span>
        </button>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-[4px] bg-primary px-3.5 py-2 font-mono text-[11px] font-semibold text-primary-foreground shadow-sm active:scale-95"
        >
          <LinkedInWebIcon className="h-3.5 w-3.5" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
