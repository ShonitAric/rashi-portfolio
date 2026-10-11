"use client";

import React, { useEffect, useState } from "react";
import { useModeTheme } from "@/context/ModeThemeContext";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const { mode } = useModeTheme();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent overflow-hidden"
    >
      <div
        className={`h-full transition-all duration-150 ease-out ${
          mode === "work"
            ? "bg-[#0B513D] dark:bg-[#10B981]"
            : "bg-[#7C3AED] dark:bg-[#C084FC]"
        }`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
