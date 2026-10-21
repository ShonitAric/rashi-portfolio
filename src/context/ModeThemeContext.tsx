"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Mode = "work" | "beyond";
type Theme = "light" | "dark";

interface ModeThemeContextType {
  mode: Mode;
  theme: Theme;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ModeThemeContext = createContext<ModeThemeContextType | undefined>(undefined);

export function ModeThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("work");
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Initial theme detection
    const savedTheme = localStorage.getItem("rashi-theme") as Theme | null;
    if (savedTheme === "light" || savedTheme === "dark") {
      setThemeState(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeState("dark");
    }

    // 2. Initial mode detection from URL hash, query, or saved mode
    const params = new URLSearchParams(window.location.search);
    const modeParam = params.get("mode");
    const savedMode = localStorage.getItem("rashi-mode") as Mode | null;
    if (modeParam === "beyond" || modeParam === "work") {
      setModeState(modeParam);
    } else if (savedMode === "beyond" || savedMode === "work") {
      setModeState(savedMode);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Apply classes and data attributes to html and body
    const root = document.documentElement;
    root.setAttribute("data-mode", mode);
    root.setAttribute("data-theme", theme);

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("rashi-theme", theme);
    localStorage.setItem("rashi-mode", mode);
  }, [mode, theme, mounted]);

  const setMode = (newMode: Mode) => {
    setModeState(newMode);
    try {
      localStorage.setItem("rashi-mode", newMode);
    } catch {
      // localStorage may not be accessible in private browsing
    }
    // Smooth scroll to top when switching major portfolio modes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMode = () => {
    setMode(mode === "work" ? "beyond" : "work");
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ModeThemeContext.Provider
      value={{
        mode,
        theme,
        setMode,
        toggleMode,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ModeThemeContext.Provider>
  );
}

export function useModeTheme() {
  const context = useContext(ModeThemeContext);
  if (!context) {
    throw new Error("useModeTheme must be used within a ModeThemeProvider");
  }
  return context;
}
