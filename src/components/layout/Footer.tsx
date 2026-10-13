"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useModeTheme } from "@/context/ModeThemeContext";

export function Footer() {
  const { mode } = useModeTheme();
  const isWork = mode === "work";
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appears after the first or second scroll (~300px)
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        className={`border-t transition-colors duration-500 py-10 md:py-12 ${
          isWork
            ? "border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50 dark:bg-[#121212]"
            : "border-[#E5DCD3] dark:border-[#26262A] bg-[#F4EFEA] dark:bg-[#050505]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
            {/* Left Column: Brand & Title */}
            <div className="space-y-1.5">
              <div className="flex items-baseline font-black tracking-tighter text-xl sm:text-2xl">
                <span className="text-neutral-900 dark:text-neutral-50">
                  RASHI
                </span>
                <span className={isWork ? "text-[#0B513D] dark:text-[#10B981]" : "text-[#7C3AED] dark:text-[#C084FC]"}>
                  .
                </span>
              </div>
              <p className={`text-xs font-mono max-w-md leading-relaxed ${isWork ? "text-neutral-500 dark:text-neutral-400" : "text-[#6B6560] dark:text-[#A1A1AA]"}`}>
                Product &amp; UX Designer · Systems, Accessibility &amp; High-Craft Interaction
              </p>
            </div>

            {/* Right Column: Properly Aligned Location & Copyright */}
            <div className={`flex flex-col sm:flex-row sm:items-center md:justify-end gap-2.5 sm:gap-6 text-xs font-mono ${isWork ? "text-neutral-500 dark:text-neutral-400" : "text-[#6B6560] dark:text-[#A1A1AA]"}`}>
              <span>Bengaluru, India · Available Globally</span>
              <span className="hidden sm:inline opacity-30">|</span>
              <span>© {new Date().getFullYear()} Rashi Chaurasia</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back-to-Top Button (Appears after 1st/2nd scroll on all screens) */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          showTopButton
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top of page"
          className={`group inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:outline-none ${
            isWork
              ? "bg-white/95 dark:bg-neutral-900/95 border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:border-[#0B513D] dark:hover:border-emerald-500 shadow-neutral-950/10"
              : "bg-[#FAF8F5]/95 dark:bg-[#141416]/95 border-[#E5DCD3] dark:border-[#26262A] text-[#1C1917] dark:text-[#F8F5F2] hover:border-[#7C3AED] dark:hover:border-[#C084FC] shadow-purple-950/10"
          }`}
        >
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Top</span>
        </button>
      </div>
    </>
  );
}
