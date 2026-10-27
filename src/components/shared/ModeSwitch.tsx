"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useModeTheme } from "@/context/ModeThemeContext";
import { Sparkles, Layers } from "lucide-react";

export function ModeSwitch({ layoutIdPrefix = "mode" }: { layoutIdPrefix?: string } = {}) {
  const { mode, setMode } = useModeTheme();
  const router = useRouter();
  const pathname = usePathname();

  const handleWorkClick = () => {
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    setMode("work");
    if (pathname !== "/") {
      window.location.href = "/?mode=work";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBeyondClick = () => {
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    setMode("beyond");
    if (pathname !== "/") {
      window.location.href = "/?mode=beyond";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      role="group"
      aria-label="Portfolio Identity Mode Switch"
      className={`relative inline-flex items-center p-0.5 sm:p-1 rounded-full border transition-all duration-300 ${
        mode === "work"
          ? "bg-neutral-100/90 dark:bg-neutral-900/90 border-neutral-300 dark:border-neutral-700 shadow-sm"
          : "bg-[#F5EFE6] dark:bg-[#161310] border-[#E8DFC8] dark:border-[#2D2620] shadow-sm"
      }`}
    >
      {/* WORK Option */}
      <button
        type="button"
        onClick={handleWorkClick}
        aria-pressed={mode === "work"}
        className={`relative z-10 flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 min-h-[34px] sm:min-h-[38px] text-[11px] sm:text-xs font-semibold tracking-wide sm:tracking-wider uppercase transition-colors duration-200 rounded-full focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-offset-1 ${
          mode === "work"
            ? "text-neutral-900 dark:text-neutral-50"
            : "text-[#6E5D52] hover:text-[#3E2F24] dark:text-[#A89F96] dark:hover:text-[#F2EAE1]"
        }`}
      >
        <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap">Work</span>
        {mode === "work" && (
          <motion.div
            layoutId={`${layoutIdPrefix}-pill`}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-full shadow-sm -z-10 border border-neutral-200/80 dark:border-neutral-700"
          />
        )}
      </button>

      {/* BEYOND WORK Option */}
      <button
        type="button"
        onClick={handleBeyondClick}
        aria-pressed={mode === "beyond"}
        className={`relative z-10 flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 min-h-[34px] sm:min-h-[38px] text-[11px] sm:text-xs font-semibold tracking-wide sm:tracking-wider uppercase transition-colors duration-200 rounded-full focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-offset-1 ${
          mode === "beyond"
            ? "text-[#435239] dark:text-[#B4C49F]"
            : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
        }`}
      >
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4801C] dark:text-[#F0AC52] flex-shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap">Beyond Work</span>
        {mode === "beyond" && (
          <motion.div
            layoutId={`${layoutIdPrefix}-pill`}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-0 bg-[#5A6F4E]/15 dark:bg-[#B4C49F]/20 rounded-full shadow-sm -z-10 border border-[#5A6F4E]/30 dark:border-[#B4C49F]/30"
          />
        )}
      </button>
    </div>
  );
}
