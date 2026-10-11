"use client";

import React from "react";
import { useModeTheme } from "@/context/ModeThemeContext";
import { Sparkles, ArrowRight } from "lucide-react";

export function BeyondWorkInvite() {
  const { setMode } = useModeTheme();

  return (
    <section
      className="py-8 md:py-10 transition-colors duration-500 overflow-hidden relative"
      aria-label="Beyond Work invitation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl p-5 sm:p-7 md:p-8 overflow-hidden border border-[#E5DCD3] dark:border-[#26262A] bg-gradient-to-r from-[#FFFBF5] via-[#FAF5EC] to-[#F5ECE0] dark:from-[#0E0E10] dark:via-[#141416] dark:to-[#1A1A1E] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5">
          {/* Left Text */}
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-[#6D28D9] dark:text-[#C084FC]">
              <Sparkles className="w-3 h-3" />
              <span>Second Mode · Creative Studio</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-neutral-900 dark:text-[#F8F5F2] leading-snug">
              &ldquo;There&apos;s more to me than pixels.&rdquo;
            </h2>
            <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A1A1AA] leading-relaxed">
              Step into the visual journal to explore Kathak classical dance, physical resin craft, paintings, and creative exploration outside enterprise systems.
            </p>
          </div>

          {/* Right Button */}
          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => setMode("beyond")}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#7C3AED] text-white hover:bg-[#6D28D9] dark:bg-[#A855F7] dark:text-[#0A0A0A] dark:hover:bg-[#C084FC] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 hover:shadow-md hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              <span>Switch to Beyond Work Mode</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
