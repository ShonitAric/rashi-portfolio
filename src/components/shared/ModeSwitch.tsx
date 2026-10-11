"use client";

import React from "react";
import { motion } from "framer-motion";
import { useModeTheme } from "@/context/ModeThemeContext";
import { Sparkles, Layers } from "lucide-react";

export function ModeSwitch() {
  const { mode, setMode } = useModeTheme();

  return (
    <div
      role="group"
      aria-label="Portfolio Identity Mode Switch"
      className={`relative inline-flex items-center p-1 rounded-full border transition-all duration-300 ${
        mode === "work"
          ? "bg-neutral-100/90 dark:bg-neutral-900/90 border-neutral-300 dark:border-neutral-700 shadow-sm"
          : "bg-[#F4EFEA] dark:bg-[#141416] border-[#E5DCD3] dark:border-[#26262A] shadow-sm"
      }`}
    >
      {/* WORK Option */}
      <button
        type="button"
        onClick={() => setMode("work")}
        aria-pressed={mode === "work"}
        className={`relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors duration-200 rounded-full focus-visible:ring-2 focus-visible:ring-offset-1 ${
          mode === "work"
            ? "text-neutral-900 dark:text-neutral-50"
            : "text-[#6B6560] hover:text-[#1C1917] dark:text-[#A1A1AA] dark:hover:text-[#F8F5F2]"
        }`}
      >
        <Layers className="w-3.5 h-3.5" aria-hidden="true" />
        <span>Work</span>
        {mode === "work" && (
          <motion.div
            layoutId="mode-pill"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-full shadow-sm -z-10 border border-neutral-200/80 dark:border-neutral-700"
          />
        )}
      </button>

      {/* BEYOND WORK Option */}
      <button
        type="button"
        onClick={() => setMode("beyond")}
        aria-pressed={mode === "beyond"}
        className={`relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors duration-200 rounded-full focus-visible:ring-2 focus-visible:ring-offset-1 ${
          mode === "beyond"
            ? "text-[#6D28D9] dark:text-[#C084FC]"
            : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
        }`}
      >
        <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
        <span>Beyond Work</span>
        {mode === "beyond" && (
          <motion.div
            layoutId="mode-pill"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-0 bg-[#7C3AED]/15 dark:bg-[#A855F7]/20 rounded-full shadow-sm -z-10 border border-[#7C3AED]/30 dark:border-[#A855F7]/40"
          />
        )}
      </button>
    </div>
  );
}
