"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, CheckCircle2, Wrench, Cpu } from "lucide-react";

const SKILLS_ROW_1 = [
  "Enterprise UX",
  "Systems Thinking",
  "Information Architecture",
  "WCAG 2.2 AA Accessibility",
  "Contextual Inquiry",
  "Usability Testing & Validation",
  "Field Operations Workflows",
  "Interaction Design",
  "Design Systems Governance",
  "User Journey Mapping",
  "E-Commerce Discovery",
  "Cognitive Load Reduction",
  "Visual Craft & Art Direction",
  "Trade Operations & FinTech UX",
];

const TOOLS_ROW_2 = [
  "Figma",
  "FigJam",
  "Miro",
  "Principle",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "UserTesting",
  "Optimal Workshop",
  "Jira & Confluence",
  "Design Tokens & Storybook",
  "Screen Reader Auditing",
  "Front-End Foundations (HTML/CSS)",
  "Responsive Prototyping",
];

export function TheWayIWork() {
  return (
    <section
      id="the-way-i-work"
      className="py-14 md:py-18 border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-500 overflow-hidden"
      aria-labelledby="the-way-i-work-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12">
        {/* Streamlined Hero: Headline + Problem Solving Framework + Explore CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Eyebrow + Main Headline */}
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Who I Am &amp; What Drives My Craft</span>
            </div>

            <h2
              id="the-way-i-work-title"
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 uppercase leading-[1.08]"
            >
              I bridge messy enterprise complexity with{" "}
              <span className="font-serif italic font-normal text-[#0B513D] dark:text-emerald-400">
                high visual craft.
              </span>
            </h2>
          </div>

          {/* Right Column: Problem Solving Framework & Explore More CTA */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-200/90 dark:border-neutral-800/90 space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold block">
                  Methodology &amp; Craft
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-neutral-50 leading-tight">
                  The Problem Solving Framework
                </h3>
                <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  <span className="px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80">
                    Right Problem
                  </span>
                  <span className="text-neutral-400">→</span>
                  <span className="px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80">
                    Right Solution
                  </span>
                  <span className="text-neutral-400">→</span>
                  <span className="px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80 text-[#0B513D] dark:text-emerald-400 font-semibold">
                    Done Right
                  </span>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0B513D] text-white hover:bg-[#083B2C] dark:bg-[#10B981] dark:text-neutral-950 dark:hover:bg-[#34D399] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 hover:shadow-md hover:scale-[1.02] focus-visible:ring-2"
                >
                  <span>Explore More About Me</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Core Skills & Tools Running Marquee Ticker */}
        <div
          role="region"
          aria-label="Core Skills and Tools"
          className="space-y-3.5 pt-3 border-t border-neutral-200/60 dark:border-neutral-800/60"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#0B513D] dark:text-[#10B981]" aria-hidden="true" />
              <span>Core Skills &amp; Tools</span>
            </span>
            <span className="font-mono text-[11px] text-neutral-400 hidden sm:inline">
              Continuous Expertise Ticker · Hover to Pause
            </span>
          </div>

          {/* Screen Reader Semantic Text List (WCAG 1.3.1) */}
          <div className="sr-only">
            <h3>Core Skills</h3>
            <ul>
              {SKILLS_ROW_1.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <h3>Tools &amp; Technologies</h3>
            <ul>
              {TOOLS_ROW_2.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>

          {/* Marquee Track 1: Core Skills */}
          <div aria-hidden="true" className="relative overflow-hidden py-1 mask-linear-fade select-none">
            <div className="flex gap-3 w-max animate-marquee pause-hover">
              {[...SKILLS_ROW_1, ...SKILLS_ROW_1].map((skill, idx) => (
                <div
                  key={`${skill}-${idx}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200 shadow-sm hover:border-[#0B513D] dark:hover:border-emerald-500 transition-colors whitespace-nowrap"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0B513D] dark:text-[#10B981] flex-shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Track 2: Tools & Technologies (Reverse Direction) */}
          <div aria-hidden="true" className="relative overflow-hidden py-1 mask-linear-fade select-none">
            <div className="flex gap-3 w-max animate-marquee-reverse pause-hover">
              {[...TOOLS_ROW_2, ...TOOLS_ROW_2].map((tool, idx) => (
                <div
                  key={`${tool}-${idx}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 shadow-sm hover:border-[#0B513D] dark:hover:border-emerald-500 transition-colors whitespace-nowrap"
                >
                  <Wrench className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 flex-shrink-0" />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
