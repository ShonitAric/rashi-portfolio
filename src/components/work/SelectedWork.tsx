"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ShowcaseProject {
  id: string;
  number: string;
  title: string;
  description: string;
  route: string;
  image: string;
  alt: string;
  featured?: boolean;
}

const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "worksite",
    number: "01",
    title: "Worksite",
    description:
      "Simplifying complex appointment information and workflows for field-service agents.",
    route: "/work/worksite",
    image: "/projects/worksite/worksite-cover.png",
    alt: "Worksite field service appointment and workflow platform",
    featured: true,
  },
  {
    id: "search-discovery",
    number: "02",
    title: "Search & Discovery",
    description:
      "Uncovering inconsistencies across product listing experiences to improve clarity and predictability.",
    route: "/work/search-discovery",
    image: "/projects/search-discovery/search-discovery-cover.png",
    alt: "Search & Discovery PLP Experience Web and App comparison",
  },
  {
    id: "stcp",
    number: "03",
    title: "STCP",
    description:
      "Modernizing a legacy compliance platform through clearer workflows and accessible design.",
    route: "/work/stcp",
    image: "/projects/stcp/stcp-cover.jpg",
    alt: "Secure Trade Compliance Platform desktop monitor display",
  },
  {
    id: "ticketmitra",
    number: "04",
    title: "TicketMitra",
    description:
      "Bringing event planning, ticketing, and coordination into one connected experience.",
    route: "/work/ticketmitra",
    image: "/projects/ticketmitra/hero-thumbnail.png",
    alt: "TicketMitra all-in-one event management platform mobile experience",
  },
  {
    id: "bu-super-league",
    number: "05",
    title: "BU Super League 2026",
    description:
      "Exploring AI-assisted design to create an immersive digital sports experience.",
    route: "/work/bu-super-league",
    image: "/projects/bu-super-league/hero-thumbnail.png",
    alt: "BU Super League 2026 AI-assisted sports championship portal",
  },
];

export function SelectedWork() {
  return (
    <section
      id="selected-work"
      className="py-16 md:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-500"
      aria-labelledby="selected-work-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
            <span>Selected Work · 01 — 05</span>
          </div>
          <h2
            id="selected-work-title"
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 uppercase leading-[1.05]"
          >
            Problems worth <br />
            <span className="font-serif italic font-normal text-[#0B513D] dark:text-emerald-400">
              getting obsessed with.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl font-normal leading-relaxed">
            A selection of product challenges across field operations, e-commerce, enterprise systems and AI.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SHOWCASE_PROJECTS.map((project, idx) => (
            <ShowcaseCard
              key={project.id}
              project={project}
              delay={idx * 60}
            />
          ))}
        </div>

        {/* Centered Explore All Case Studies CTA */}
        <div className="mt-14 md:mt-20 flex justify-center">
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B513D] dark:focus-visible:ring-[#10B981]"
          >
            <span>Explore All Case Studies</span>
            <ArrowUpRight
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ShowcaseCard({
  project,
  delay,
}: {
  project: ShowcaseProject;
  delay: number;
}) {
  const [hasRevealed, setHasRevealed] = React.useState(false);
  const cardRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setHasRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isFeatured = project.featured;

  return (
    <article
      ref={cardRef}
      aria-labelledby={`project-${project.id}-title`}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-900/50 hover:border-neutral-400/90 dark:hover:border-neutral-600 hover:shadow-xl dark:hover:shadow-2xl hover:shadow-neutral-950/5 dark:hover:shadow-black/40 transition-all duration-500 overflow-hidden cursor-pointer ${
        isFeatured
          ? "md:col-span-2 p-6 sm:p-8 lg:p-10"
          : "p-6 sm:p-7 md:p-8 flex flex-col justify-between"
      } ${
        hasRevealed
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5"
      }`}
    >
      <Link
        href={project.route}
        className="block h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B513D] dark:focus-visible:ring-[#10B981] rounded-2xl"
        aria-label={`View ${project.title} case study`}
      >
        {isFeatured ? (
          /* 01 Worksite — Featured Wide Card spanning both columns */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-sm relative">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                  priority
                />

                {/* Hover Gradient Overlay + Centered VIEW CASE STUDY Pill */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-[#0B513D]/40 to-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#10B981] text-[#0B513D] dark:text-neutral-950 font-mono text-xs font-bold tracking-widest uppercase shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
              <div className="font-mono text-xs font-bold tracking-widest uppercase text-[#0B513D] dark:text-[#10B981]">
                Project {project.number}
              </div>

              <h3
                id={`project-${project.id}-title`}
                className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 uppercase group-hover:text-[#0B513D] dark:group-hover:text-[#10B981] transition-colors leading-tight"
              >
                {project.title}
              </h3>

              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ) : (
          /* 02 — 05 Balanced 2-Column Grid Cards */
          <div className="flex flex-col h-full justify-between space-y-5">
            {/* Visual Container */}
            <div className="overflow-hidden rounded-2xl border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-900 shadow-sm relative">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                />

                {/* Hover Gradient Overlay + Centered VIEW CASE STUDY Pill */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-[#0B513D]/40 to-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#10B981] text-[#0B513D] dark:text-neutral-950 font-mono text-xs font-bold tracking-widest uppercase shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="space-y-2.5">
              <div className="font-mono text-xs font-bold tracking-widest uppercase text-[#0B513D] dark:text-[#10B981]">
                Project {project.number}
              </div>

              <h3
                id={`project-${project.id}-title`}
                className="text-xl sm:text-2xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 uppercase group-hover:text-[#0B513D] dark:group-hover:text-[#10B981] transition-colors leading-snug"
              >
                {project.title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        )}
      </Link>
    </article>
  );
}
