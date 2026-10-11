"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useModeTheme } from "@/context/ModeThemeContext";

export function Footer() {
  const { mode } = useModeTheme();
  const isWork = mode === "work";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t transition-colors duration-500 py-12 ${
        isWork
          ? "border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50 dark:bg-[#121212]"
          : "border-[#E5DCD3] dark:border-[#26262A] bg-[#F4EFEA] dark:bg-[#050505]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-baseline font-black tracking-tighter text-xl">
            <span className="text-neutral-900 dark:text-neutral-50">
              RASHI
            </span>
            <span className={isWork ? "text-[#0B513D] dark:text-[#10B981]" : "text-[#7C3AED] dark:text-[#C084FC]"}>
              .
            </span>
          </div>
          <p className={`text-xs font-mono mt-1 ${isWork ? "text-neutral-500 dark:text-neutral-400" : "text-[#6B6560] dark:text-[#A1A1AA]"}`}>
            Product & UX Designer · Systems, Accessibility & High-Craft Interaction
          </p>
        </div>

        <div className={`flex flex-wrap items-center gap-6 text-xs font-mono ${isWork ? "text-neutral-500 dark:text-neutral-400" : "text-[#6B6560] dark:text-[#A1A1AA]"}`}>
          <span>Bengaluru, India · Available Globally</span>
          <span>© {new Date().getFullYear()} Rashi Chaurasia</span>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className={`inline-flex items-center gap-1.5 p-2 rounded-full border transition-colors focus-visible:ring-2 ${
              isWork
                ? "border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
                : "border-[#E5DCD3] dark:border-[#26262A] hover:bg-[#EBE3D8] dark:hover:bg-[#1A1A1E] text-[#1C1917] dark:text-[#F8F5F2]"
            }`}
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px] uppercase tracking-wider font-semibold">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
