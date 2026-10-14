"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeSwitch } from "@/components/shared/ModeSwitch";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { useModeTheme } from "@/context/ModeThemeContext";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";

export function Navbar() {
  const { mode } = useModeTheme();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isWork = mode === "work";

  // Close mobile navigation drawer with Escape key for keyboard accessibility
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Skip to Main Content Link for WCAG 2.2 AA */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold uppercase tracking-wider rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 backdrop-blur-md ${
          isWork
            ? "bg-white/85 dark:bg-[#151515]/85 border-b border-neutral-200/80 dark:border-neutral-800/80"
            : "bg-[#FAF8F5]/90 dark:bg-[#0A0A0A]/90 border-b border-[#E5DCD3]/80 dark:border-[#26262A]/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Signature (Left) */}
          <div className="flex items-center">
            <Link
              href="/"
              className="group flex items-baseline font-black tracking-tighter text-xl sm:text-2xl transition-transform duration-200 active:scale-95 focus-visible:ring-2 focus-visible:rounded"
              aria-label="Rashi Chaurasia — Home"
            >
              <span className="text-neutral-950 dark:text-white transition-colors duration-300">
                RASHI
              </span>
              <span
                className={`text-xl sm:text-2xl ml-0.5 font-sans font-black transition-colors duration-300 ${
                  isWork
                    ? "text-[#0B513D] dark:text-[#10B981]"
                    : "text-[#7C3AED] dark:text-[#C084FC]"
                }`}
              >
                .
              </span>
            </Link>
          </div>

          {/* Right Navigation & Controls: Mode Switch, Distinct Breathing Room, Nav Links, Theme Toggle */}
          <div className="flex items-center">
            {/* Desktop Mode Switch with Generous Distance & Hairline Divider before Case Studies */}
            <div className="hidden md:flex items-center pr-6 lg:pr-8 mr-6 lg:mr-8 border-r border-neutral-200 dark:border-neutral-800">
              <ModeSwitch />
            </div>

            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-semibold tracking-wider uppercase mr-5 lg:mr-6"
            >
              {isWork && (
                <Link
                  href="/work"
                  className={`transition-colors relative py-1 focus-visible:ring-2 focus-visible:rounded ${
                    pathname === "/work"
                      ? "text-[#0B513D] dark:text-[#10B981] font-bold"
                      : "text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
                  }`}
                >
                  Case Studies
                  {pathname === "/work" && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#0B513D] dark:bg-[#10B981]" />
                  )}
                </Link>
              )}

              <Link
                href="/about"
                className={`transition-colors relative py-1 focus-visible:ring-2 focus-visible:rounded ${
                  pathname === "/about"
                    ? isWork
                      ? "text-[#0B513D] dark:text-[#10B981] font-bold"
                      : "text-[#7C3AED] dark:text-[#C084FC] font-bold"
                    : isWork
                    ? "text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
                    : "text-[#6B6560] hover:text-[#1C1917] dark:text-[#A1A1AA] dark:hover:text-[#F8F5F2]"
                }`}
              >
                About
              </Link>

              <a
                href="/resume/Rashi_Chaurasia_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume (opens in a new tab)"
                className={`inline-flex items-center gap-1 transition-colors py-1 focus-visible:ring-2 focus-visible:rounded ${
                  isWork
                    ? "text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
                    : "text-[#6B6560] hover:text-[#1C1917] dark:text-[#A1A1AA] dark:hover:text-[#F8F5F2]"
                }`}
              >
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center gap-1 font-bold transition-all py-1 focus-visible:ring-2 focus-visible:rounded ${
                  isWork
                    ? "text-[#0B513D] hover:text-[#083B2C] dark:text-[#10B981] dark:hover:text-[#34D399]"
                    : "text-[#7C3AED] hover:text-[#5B21B6] dark:text-[#C084FC] dark:hover:text-[#E9D5FF]"
                }`}
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </nav>

            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Mobile Mode Switch */}
              <div className="block md:hidden scale-90 -mr-1">
                <ModeSwitch />
              </div>

              <ThemeToggle />

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="lg:hidden p-2 rounded-md text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:ring-2"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress line */}
        <ScrollProgress />

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile Navigation"
            className={`lg:hidden border-b px-6 py-6 transition-colors duration-300 ${
              isWork
                ? "bg-white dark:bg-[#151515] border-neutral-200 dark:border-neutral-800"
                : "bg-[#FAF8F5] dark:bg-[#0A0A0A] border-[#E5DCD3] dark:border-[#26262A] text-[#1C1917] dark:text-[#F8F5F2]"
            }`}
          >
            <div className="flex flex-col gap-4 text-sm font-semibold tracking-wider uppercase">
              {isWork && (
                <Link
                  href="/work"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between"
                >
                  <span>Case Studies</span>
                  <span className="text-xs opacity-60">Full Archive →</span>
                </Link>
              )}
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-100 dark:border-neutral-800"
              >
                About Me
              </Link>
              <a
                href="/resume/Rashi_Chaurasia_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume (opens in a new tab)"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between"
              >
                <span>Resume</span>
                <span className="text-xs opacity-60">PDF ↗</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 flex items-center justify-between font-bold ${
                  isWork ? "text-[#0B513D] dark:text-[#10B981]" : "text-[#7C3AED] dark:text-[#C084FC]"
                }`}
              >
                <span>Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
