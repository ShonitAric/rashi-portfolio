"use client";

import React from "react";
import { useModeTheme } from "@/context/ModeThemeContext";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useModeTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4" aria-hidden="true" />
      ) : (
        <Sun className="w-4 h-4 text-amber-300" aria-hidden="true" />
      )}
    </button>
  );
}
