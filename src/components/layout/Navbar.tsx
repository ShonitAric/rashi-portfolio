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
  const { mode, setMode } = useModeTheme();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isWork = mode === "work";

  // Automatically close mobile menu on page or mode change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname, mode]);

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

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (mode !== "work") {
      setMode("work");
    }
    if (pathname === "/") {
      if (window.location.hash !== "#contact") {
        window.history.pushState(null, "", "/#contact");
      }
      const scrollToContact = () => {
        const el = document.getElementById("contact");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };
      scrollToContact();
      setTimeout(scrollToContact, 100);
      setTimeout(scrollToContact, 300);
    } else {
      window.location.href = "/#contact";
    }
  };

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
            : "bg-[#FAF7F2]/90 dark:bg-[#121110]/90 border-b border-[#E8DFC8]/80 dark:border-[#2D2620]/80"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between relative">
          {/* Brand Signature (Left) */}
          <div className="flex items-center shrink-0">
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
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
                    : "text-[#D4801C] dark:text-[#F0AC52]"
                }`}
              >
                .
              </span>
            </Link>
          </div>

          {/* Universal Mode Switch — Always Anchored at Exact Viewport Center Across All Screen Sizes */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-10 flex items-center justify-center">
            <div className="scale-[0.88] sm:scale-95 md:scale-100 origin-center transition-transform">
              <ModeSwitch layoutIdPrefix="navbar" />
            </div>
          </div>

          {/* Right Navigation & Controls: Nav Links, Theme Toggle */}
          <div className="flex items-center shrink-0">
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs font-semibold tracking-wider uppercase mr-3 sm:mr-4 lg:mr-6"
            >
              {isWork && (
                <>
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

                  <Link
                    href="/about"
                    className={`transition-colors relative py-1 focus-visible:ring-2 focus-visible:rounded ${
                      pathname === "/about"
                        ? "text-[#0B513D] dark:text-[#10B981] font-bold"
                        : "text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
                    }`}
                  >
                    About
                  </Link>
                </>
              )}

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

              <Link
                href="/#contact"
                onClick={handleContactClick}
                className={`inline-flex items-center gap-1 font-bold transition-all py-1 focus-visible:ring-2 focus-visible:rounded ${
                  isWork
                    ? "text-[#0B513D] hover:text-[#083B2C] dark:text-[#10B981] dark:hover:text-[#34D399]"
                    : "text-[#5A6F4E] hover:text-[#435239] dark:text-[#B4C49F] dark:hover:text-[#D1DEC0]"
                }`}
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <ThemeToggle />

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-md text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:ring-2"
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
                : "bg-[#FAF7F2] dark:bg-[#121110] border-[#E8DFC8] dark:border-[#2D2620] text-[#3E2F24] dark:text-[#F2EAE1]"
            }`}
          >
            <div className="flex flex-col gap-2 text-sm font-semibold tracking-wider uppercase">
              {isWork && (
                <>
                  <Link
                    href="/work"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[44px] py-2.5 px-2 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between rounded-lg focus-visible:ring-2 focus-visible:outline-none"
                  >
                    <span>Case Studies</span>
                    <span className="text-xs opacity-60">Full Archive →</span>
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[44px] py-2.5 px-2 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between rounded-lg focus-visible:ring-2 focus-visible:outline-none"
                  >
                    <span>About Me</span>
                    <span className="text-xs opacity-60">Story &amp; Process →</span>
                  </Link>
                </>
              )}
              <a
                href="/resume/Rashi_Chaurasia_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume (opens in a new tab)"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] py-2.5 px-2 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between rounded-lg focus-visible:ring-2 focus-visible:outline-none"
              >
                <span>Resume</span>
                <span className="text-xs opacity-60">PDF ↗</span>
              </a>
              <Link
                href="/#contact"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleContactClick(e);
                }}
                className={`min-h-[44px] py-2.5 px-2 flex items-center justify-between font-bold rounded-lg focus-visible:ring-2 focus-visible:outline-none ${
                  isWork ? "text-[#0B513D] dark:text-[#10B981]" : "text-[#5A6F4E] dark:text-[#B4C49F]"
                }`}
              >
                <span>Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
