"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Layers, Compass, ShieldCheck } from "lucide-react";

const CORE_PRINCIPLES = [
  {
    title: "SYSTEMS THINKING",
    quote: "Understand the whole ecosystem, not just the isolated screen.",
    description:
      "Enterprise software is rarely a single screen. I map operational interdependencies, backend constraints, and downstream impacts before architecting user flows.",
    icon: Layers,
    sticker: "/images/stickers/ideas.png",
  },
  {
    title: "EVIDENCE OVER ASSUMPTION",
    quote: "Replace internal opinions with observable user behavior.",
    description:
      "Design decisions must be anchored in context. Whether interviewing field technicians or analyzing trade clearance telemetry, real evidence always beats hypothesis.",
    icon: Compass,
    sticker: "/images/stickers/user-research.png",
  },
  {
    title: "UPSTREAM ACCESSIBILITY",
    quote: "Design inclusion into the product from day zero, not as a checklist.",
    description:
      "Accessibility is an architectural priority. I design for WCAG 2.2 AA compliance, cognitive clarity, keyboard navigation, and plain language from the very first wireframe.",
    icon: ShieldCheck,
    sticker: "/images/stickers/interaction-design.png",
  },
];

export function AboutMe() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-500"
      aria-labelledby="about-me-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 md:space-y-18">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
            <span>About Me</span>
          </div>
          <h2
            id="about-me-title"
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 uppercase leading-none"
          >
            Who I Am &amp; <br />
            <span className="font-serif italic font-normal text-[#0B513D] dark:text-emerald-400">
              what drives my craft.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            7+ years of untangling complex workflows, championing accessibility, and delivering enterprise software that feels effortless.
          </p>
        </div>

        {/* Narrative Grid: What I Do & What I've Done So Far */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: What I Do (Cols 1-6) */}
          <div className="lg:col-span-6 space-y-5 p-7 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm">
            <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
                Focus &amp; Expertise
              </span>
              <span className="font-mono text-xs text-neutral-400">What I Do</span>
            </div>

            <h3 className="text-2xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
              Transforming dense enterprise complexity into clear, usable product systems.
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              I specialize in complex product domains where user error has real operational, financial, or physical consequences. Rather than skinning surfaces, I collaborate deeply with cross-functional partners to simplify mental models and reduce cognitive load.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                "Enterprise UX & Field Operations workflows (Worksite, STCP)",
                "Information architecture, systems mapping & complex state management",
                "End-to-end qualitative & quantitative UX research",
                "Upstream WCAG 2.2 AA accessibility architecture & audits",
                "Design systems craft, component governance & engineering handoff",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#0B513D] dark:text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: What I've Done So Far (Cols 7-12) */}
          <div className="lg:col-span-6 space-y-5 p-7 sm:p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80">
            <div className="flex items-center justify-between border-b border-neutral-200/60 dark:border-neutral-800/60 pb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                Track Record
              </span>
              <span className="font-mono text-xs text-neutral-400">What I&apos;ve Done So Far</span>
            </div>

            <h3 className="text-2xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
              7+ years across leading brands, enterprise platforms &amp; digital agencies.
            </h3>

            <div className="space-y-4 pt-1">
              <div className="border-l-2 border-[#0B513D] dark:border-[#10B981] pl-4 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm sm:text-base text-neutral-950 dark:text-neutral-50">Best Buy</span>
                  <span className="font-mono text-xs text-neutral-400 font-semibold">PRESENT</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                  Leading experience design for field operations workflows (Worksite) and customer-facing e-commerce discovery.
                </p>
              </div>

              <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm sm:text-base text-neutral-950 dark:text-neutral-50">Fidelity Investments</span>
                  <span className="font-mono text-xs text-neutral-400 font-semibold">2021 — 2024</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                  Architected multi-billion dollar enterprise trade clearance platform (STCP). Awarded the FMRI Excellence Award &amp; named Inclusion Catalyst.
                </p>
              </div>

              <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm sm:text-base text-neutral-950 dark:text-neutral-50">Langoor Digital</span>
                  <span className="font-mono text-xs text-neutral-400 font-semibold">2019 — 2021</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                  Grew from Graphic Designer to Art Director. Designed digital campaigns, responsive web products, and brand design systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles (Clubbed into About Me as Requested) */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-neutral-200/80 dark:border-neutral-800/80 pb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
              Core Principles
            </span>
            <span className="font-mono text-xs text-neutral-400">
              The Foundations That Guide My Work
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {CORE_PRINCIPLES.map((principle) => {
              const IconComponent = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 space-y-4 hover:border-emerald-600/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-[#0B513D] dark:text-[#10B981] group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <h4 className="text-lg sm:text-xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 font-sans uppercase">
                      {principle.title}
                    </h4>

                    <p className="font-serif italic text-sm text-[#0B513D] dark:text-emerald-400">
                      &ldquo;{principle.quote}&rdquo;
                    </p>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <div className="relative w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity">
                      <Image
                        src={principle.sticker}
                        alt={principle.title}
                        fill
                        sizes="40px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
