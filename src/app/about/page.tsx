"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Award, CheckCircle2, Layers, Compass, ShieldCheck, Download } from "lucide-react";

interface FrameworkPillar {
  num: string;
  title: string;
  phase: string;
  quote: string;
  description: string;
  bullets: string[];
  sticker: string;
}

const FRAMEWORK_PILLARS: FrameworkPillar[] = [
  {
    num: "01",
    title: "RIGHT PROBLEM",
    phase: "Research & Untangle",
    quote: "Before designing a single screen, find the real problem behind the visible symptom.",
    description:
      "Replacing assumptions with evidence. Immersion in user workflows, field operations, and systems constraints to define what actually needs to be solved.",
    bullets: [
      "User research, contextual inquiry & stakeholder alignment",
      "Information architecture, systems mapping & root-cause analysis",
      "Synthesizing qualitative & quantitative insights into actionable problem frames",
    ],
    sticker: "/images/stickers/user-research.png",
  },
  {
    num: "02",
    title: "RIGHT SOLUTION",
    phase: "Design, Validate & Refine",
    quote: "Turn structured insights into scalable interaction models, validated through real user testing.",
    description:
      "Balancing high visual craft with enterprise logic. Iterating through low-to-high fidelity prototypes and rigorously validating with real users and product partners.",
    bullets: [
      "Interaction design, navigation models & clear decision flows",
      "Design systems craft, tokens & reusable interface componentry",
      "Usability testing, feedback loops & rapid design validation",
    ],
    sticker: "/images/stickers/interaction-design.png",
  },
  {
    num: "03",
    title: "DONE RIGHT",
    phase: "QA, Polish & Delivery",
    quote: "Design doesn't end in Figma. Rigorous QA, accessibility standards, and post-launch measurement.",
    description:
      "Partnering hand-in-hand with engineering. Ensuring WCAG 2.2 AA accessibility, pixel-precise execution, and continuous learning after the product ships.",
    bullets: [
      "Engineering pairing, design QA & design system governance",
      "Upstream accessibility auditing, keyboard flows & screen reader compliance",
      "Post-delivery telemetry, metric tracking & iterative refinement",
    ],
    sticker: "/images/stickers/visual-craft.png",
  },
];

const TIMELINE_STOPS = [
  {
    year: "2019",
    company: "LANGOOR DIGITAL",
    roles: "Graphic Designer → Art Director",
    quote: "from making → directing",
    detail:
      "Learning visual craft. Started my career designing websites, landing pages, campaigns and digital experiences. Moved from executing designs to shaping visual direction, guiding designers and connecting creative decisions to business needs.",
  },
  {
    year: "2021",
    company: "FIDELITY INVESTMENTS",
    roles: "Associate Graphic Designer → UX Designer",
    quote: "hello, enterprise 👋 · 'but why?' became part of the job",
    detail:
      "Moved into an enterprise product environment, working on digital experiences and building a deeper understanding of consistency, systems and scale. Curiosity about how people actually use products pulled me deeper into research, workflows and interaction design.",
    logo: "/images/brands/fidelity.png",
    logoAlt: "Fidelity Investments logo",
  },
  {
    year: "2023",
    company: "FIDELITY INVESTMENTS",
    roles: "UX Designer · Lead Responsibilities",
    quote: "product ownership & systems leadership",
    detail:
      "Took on greater product ownership—leading UX strategy, mentoring designers, facilitating critiques and workshops, and contributing to complex enterprise experiences (STCP).",
    awards: ["✦ FMRI Excellence Award", "✦ Inclusion Catalyst"],
    logo: "/images/brands/fidelity.png",
    logoAlt: "Fidelity Investments logo",
  },
  {
    year: "PRESENT",
    company: "BEST BUY",
    roles: "Experience Designer",
    quote: "field operations × e-commerce",
    detail:
      "Today, I design across field operations and e-commerce—working on complex workflows (Worksite), information architecture, interaction design, search and responsive experiences.",
    awards: ["Field Operations (Worksite)", "Search & Discovery"],
    logo: "/images/brands/bestbuy.jpeg",
    logoAlt: "Best Buy logo",
  },
];

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

export default function AboutPage() {
  const [activePillar, setActivePillar] = useState(0);
  const [activeTimeline, setActiveTimeline] = useState(3);

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen pt-28 pb-24 transition-colors duration-500 focus:outline-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-neutral-200/80 dark:border-neutral-800/80 pb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-50 text-[#0B513D] border border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B513D] dark:bg-emerald-400 animate-pulse" />
              <span>About Rashi Chaurasia</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 uppercase leading-[1.05]">
              Designing for people <br />
              <span className="font-serif italic font-normal text-[#0B513D] dark:text-emerald-400">
                inside complex systems.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl font-normal leading-relaxed">
              I am an experienced Product &amp; UX Designer with 7+ years of solving messy, mission-critical product problems across field operations, e-commerce, and enterprise software.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[260px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-neutral-900/10 dark:border-white/10 shadow-xl bg-neutral-100 dark:bg-neutral-800">
              <Image
                src="/images/rashi-hero.jpeg"
                alt="Rashi Chaurasia, Product and UX Designer"
                fill
                priority
                sizes="260px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* 1. What I Do & What I've Done So Far */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* What I Do */}
          <div className="lg:col-span-6 space-y-5 p-7 sm:p-9 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm">
            <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
                Specialization
              </span>
              <span className="font-mono text-xs text-neutral-400">What I Do</span>
            </div>

            <h2 className="text-2xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
              Taking complex operational workflows and making them feel clear and effortless.
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              My work focuses on environments where users are under high cognitive load—field technicians troubleshooting on-site, operations coordinators orchestrating delivery routes, or financial brokers clearing billion-dollar transactions.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                "Enterprise UX & Field Operations workflows (Worksite, STCP)",
                "Information architecture, hierarchical navigation & systems mapping",
                "Upstream WCAG 2.2 AA accessibility architecture & auditing",
                "Design systems governance, tokens & front-end handoff",
                "Qualitative user research, contextual inquiry & usability testing",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#0B513D] dark:text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I've Done So Far */}
          <div className="lg:col-span-6 space-y-5 p-7 sm:p-9 rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80">
            <div className="flex items-center justify-between border-b border-neutral-200/60 dark:border-neutral-800/60 pb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                Career History
              </span>
              <span className="font-mono text-xs text-neutral-400">What I&apos;ve Done So Far</span>
            </div>

            <h2 className="text-2xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
              7+ years across enterprise systems, retail giants, and creative agencies.
            </h2>

            <div className="space-y-5 pt-1">
              <div className="border-l-2 border-[#0B513D] dark:border-[#10B981] pl-4 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base text-neutral-950 dark:text-neutral-50">Best Buy</span>
                  <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 font-semibold">PRESENT</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Leading experience design for field operations workflows (Worksite) and customer-facing e-commerce discovery systems.
                </p>
              </div>

              <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base text-neutral-950 dark:text-neutral-50">Fidelity Investments</span>
                  <span className="font-mono text-xs text-neutral-400 font-semibold">2021 — 2024</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Architected multi-billion dollar enterprise trade clearance platform (STCP). Awarded FMRI Excellence Award &amp; named Inclusion Catalyst.
                </p>
              </div>

              <div className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base text-neutral-950 dark:text-neutral-50">Langoor Digital</span>
                  <span className="font-mono text-xs text-neutral-400 font-semibold">2019 — 2021</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Progressed from Graphic Designer to Art Director. Designed digital campaigns, responsive web products, and brand design systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. The 3-Pillar Framework */}
        <div className="space-y-8 border-t border-neutral-200/80 dark:border-neutral-800/80 pt-16">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 uppercase">
              The Problem Solving Framework.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              Right Problem → Right Solution → Done Right
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FRAMEWORK_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 space-y-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#0B513D] dark:text-[#10B981]">
                    {pillar.num}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                    {pillar.phase}
                  </span>
                </div>

                <h3 className="text-xl font-black tracking-tight uppercase font-sans text-neutral-950 dark:text-neutral-50">
                  {pillar.title}
                </h3>

                <p className="font-serif italic text-sm text-[#0B513D] dark:text-emerald-400">
                  &ldquo;{pillar.quote}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>

                <ul className="space-y-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  {pillar.bullets.map((b, i) => (
                    <li key={i} className="text-xs text-neutral-600 dark:text-neutral-400 flex items-start gap-2">
                      <span className="text-[#0B513D] dark:text-[#10B981] font-bold">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Professional Progression Timeline */}
        <div className="space-y-6 border-t border-neutral-200/80 dark:border-neutral-800/80 pt-16">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
              Career Progression Timeline (7+ Years)
            </span>
            <span className="font-mono text-xs text-neutral-400">
              Hover to view each chapter
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TIMELINE_STOPS.map((stop, index) => {
              const isActive = activeTimeline === index;
              return (
                <button
                  key={`${stop.year}-${stop.company}`}
                  type="button"
                  onClick={() => setActiveTimeline(index)}
                  onMouseEnter={() => setActiveTimeline(index)}
                  aria-pressed={isActive}
                  aria-label={`${stop.year}: ${stop.company} — ${stop.roles}`}
                  className={`text-left p-4 rounded-xl border transition-all duration-300 focus-visible:ring-2 focus-visible:outline-none ${
                    isActive
                      ? "bg-[#0B513D] text-white border-[#0B513D] dark:bg-emerald-950/80 dark:border-emerald-700 shadow-md"
                      : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400"
                  }`}
                >
                  <div className="font-mono text-xs font-bold">{stop.year}</div>
                  <div className="font-bold text-sm tracking-tight">{stop.company}</div>
                </button>
              );
            })}
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold">
              {TIMELINE_STOPS[activeTimeline].year} · {TIMELINE_STOPS[activeTimeline].company}
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-neutral-50">
              {TIMELINE_STOPS[activeTimeline].roles}
            </h4>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {TIMELINE_STOPS[activeTimeline].detail}
            </p>
            {TIMELINE_STOPS[activeTimeline].awards && (
              <div className="pt-2 flex flex-wrap gap-2">
                {TIMELINE_STOPS[activeTimeline].awards!.map((award) => (
                  <span
                    key={award}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>{award}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 4. Core Principles */}
        <div className="space-y-6 border-t border-neutral-200/80 dark:border-neutral-800/80 pt-16">
          <div className="flex items-center justify-between pb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
              Core Principles
            </span>
            <span className="font-mono text-xs text-neutral-400">
              Foundational Standards
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {CORE_PRINCIPLES.map((principle) => {
              const IconComponent = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 space-y-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-[#0B513D] dark:text-[#10B981]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-black tracking-tight text-neutral-950 dark:text-neutral-50 font-sans uppercase">
                    {principle.title}
                  </h4>
                  <p className="font-serif italic text-sm text-[#0B513D] dark:text-emerald-400">
                    &ldquo;{principle.quote}&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTAs */}
        <div className="border-t border-neutral-200/80 dark:border-neutral-800/80 pt-12 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:divyarashi45@gmail.com?subject=Product%20Design%20Opportunity"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0B513D] text-white hover:bg-[#083B2C] dark:bg-[#10B981] dark:text-neutral-950 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-md hover:scale-105"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="/resume/Rashi_Chaurasia_Resume.pdf"
              download="Rashi_Chaurasia_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume PDF (opens in new tab)"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-sm hover:scale-105 focus-visible:ring-2"
            >
              <span>Download Resume</span>
              <Download className="w-4 h-4" />
            </a>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
          >
            <span>Explore Case Studies →</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
