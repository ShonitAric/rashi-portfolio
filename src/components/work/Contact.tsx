"use client";

import React, { useState } from "react";
import { ArrowUpRight, Mail, BookOpen, Palette, FileText, Check, Copy } from "lucide-react";
import { useModeTheme } from "@/context/ModeThemeContext";

export function Contact() {
  const { mode } = useModeTheme();
  const isWork = mode === "work";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("divyarashi45@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const channels = [
    {
      label: "Email",
      value: "divyarashi45@gmail.com",
      href: "mailto:divyarashi45@gmail.com",
      icon: Mail,
    },
    {
      label: "Medium",
      value: "medium.com/@divyarashi45",
      href: "https://medium.com/@divyarashi45",
      icon: BookOpen,
    },
    {
      label: "Behance",
      value: "behance.net/divyarashi",
      href: "https://www.behance.net/divyarashi",
      icon: Palette,
    },
    {
      label: "Résumé",
      value: "Request PDF",
      href: "mailto:divyarashi45@gmail.com?subject=Resume%20Request%20%E2%80%94%20Rashi%20Chaurasia",
      icon: FileText,
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 md:py-16 transition-colors duration-500 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-7 sm:p-9 md:p-11 rounded-3xl border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-50/70 dark:bg-neutral-900/60 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left Column: Heading, Subtitle & Interactive Email Copy Pill */}
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
              <span>Connect &amp; Collaborate</span>
            </div>

            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 uppercase leading-tight"
            >
              Got a problem worth <br />
              <span
                className={`font-serif italic font-normal ${
                  isWork
                    ? "text-[#0B513D] dark:text-emerald-400"
                    : "text-[#6D28D9] dark:text-[#C084FC]"
                }`}
              >
                getting obsessed with?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed">
              Open for product design leadership, complex enterprise architectures, and meaningful collaborations.
            </p>

            {/* Interactive Email Copy Pill */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-mono text-neutral-800 dark:text-neutral-200 hover:border-[#0B513D] dark:hover:border-emerald-500 transition-colors shadow-sm"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-300 font-semibold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    <span>divyarashi45@gmail.com</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2">
                {channels.slice(1).map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-all text-xs font-mono"
                    title={ch.label}
                  >
                    <ch.icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Prominent "Say Hi" Action Button */}
          <div className="flex flex-col items-start lg:items-end justify-center gap-2 flex-shrink-0">
            <a
              href="mailto:divyarashi45@gmail.com?subject=Product%20Design%20Opportunity%20%E2%80%94%20Rashi%20Chaurasia"
              className={`group inline-flex items-center gap-3.5 px-8 py-4 rounded-full font-bold text-sm sm:text-base tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-offset-2 ${
                isWork
                  ? "bg-[#0B513D] text-white hover:bg-[#083B2C] dark:bg-[#10B981] dark:text-neutral-950 dark:hover:bg-[#34D399]"
                  : "bg-[#7C3AED] text-white hover:bg-[#6D28D9] dark:bg-[#A855F7] dark:text-[#0A0A0A] dark:hover:bg-[#C084FC]"
              }`}
            >
              <span>Say Hi</span>
              <ArrowUpRight
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </a>
            <span className="font-mono text-[11px] text-neutral-400">
              Response within 24–48 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
