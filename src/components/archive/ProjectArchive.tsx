"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ARCHIVE_PROJECTS, Project } from "@/data/projects";
import { ArrowUpRight, Filter, ExternalLink, Sparkles, Palette } from "lucide-react";

export function ProjectArchive() {
  const [filter, setFilter] = useState<"all" | "product" | "enterprise" | "visual">("all");

  const filteredProjects = ARCHIVE_PROJECTS.filter((p) => {
    if (filter === "all") return true;
    if (filter === "product") return p.category === "product";
    if (filter === "enterprise") return p.category === "enterprise";
    if (filter === "visual") return p.category === "visual";
    return true;
  });

  const productEnterpriseProjects = filteredProjects.filter((p) => !p.isExternal);
  const visualBehanceProjects = filteredProjects.filter((p) => p.isExternal);

  return (
    <main id="main-content" tabIndex={-1} className="pt-24 pb-28 md:pt-36 md:pb-36 transition-colors duration-500 focus:outline-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        {/* Archive Header */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
            <span>Professional Archive · Case Studies &amp; Visual Works</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 uppercase leading-none">
            Work &amp; Explorations
          </h1>

          <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-3xl">
            In-depth enterprise case studies, e-commerce discovery systems, and a rich collection of brand campaigns, marketplace design, and visual craft from Behance.
          </p>
        </div>

        {/* Category Filter Capsules */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200/80 dark:border-neutral-800/80 pb-6">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Project category filters">
            <span className="text-xs font-mono text-neutral-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </span>

            {[
              { id: "all", label: "All Work" },
              { id: "product", label: "Product & UX" },
              { id: "enterprise", label: "Enterprise Systems" },
              { id: "visual", label: "Visual Craft & Branding" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id as any)}
                aria-pressed={filter === cat.id}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 focus-visible:ring-2 ${
                  filter === cat.id
                    ? "bg-[#0B513D] text-white dark:bg-[#10B981] dark:text-neutral-950 shadow-sm"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div
            className="text-xs font-mono text-neutral-500"
            role="status"
            aria-live="polite"
          >
            Showing {filteredProjects.length} projects
          </div>
        </div>

        {/* Section 1: In-depth UX & Enterprise Case Studies */}
        {productEnterpriseProjects.length > 0 && (
          <div className="space-y-8">
            {filter === "all" && (
              <div className="flex items-center justify-between border-b border-neutral-200/60 dark:border-neutral-800/60 pb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#0B513D] dark:text-[#10B981]" />
                  <span>Flagship UX &amp; Enterprise Case Studies</span>
                </span>
                <span className="font-mono text-xs text-neutral-400">
                  {productEnterpriseProjects.length} case studies
                </span>
              </div>
            )}

            <div className="space-y-12">
              {productEnterpriseProjects.map((project) => (
                <article
                  key={project.id}
                  aria-labelledby={`archive-item-${project.id}`}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-900/50 hover:border-emerald-600/40 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {/* Project Preview Image */}
                  <div className="lg:col-span-5">
                    <Link
                      href={project.route}
                      className="block relative aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-100 dark:bg-neutral-800 group"
                    >
                      {project.heroImage && (
                        <Image
                          src={project.heroImage}
                          alt={project.heroAlt || project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          style={{ objectPosition: project.heroObjectPosition || "center" }}
                        />
                      )}
                    </Link>
                  </div>

                  {/* Project Story & Metadata */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold uppercase text-[#0B513D] dark:text-[#10B981]">
                          {project.number}
                        </span>
                        <span className="text-neutral-400">·</span>
                        <span className="font-mono text-xs text-neutral-500 uppercase">
                          {project.clientOrContext}
                        </span>
                      </div>
                      {project.year && (
                        <span className="font-mono text-xs text-neutral-400">{project.year}</span>
                      )}
                    </div>

                    <h2
                      id={`archive-item-${project.id}`}
                      className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 uppercase"
                    >
                      <Link
                        href={project.route}
                        className="hover:text-[#0B513D] dark:hover:text-[#10B981] transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h2>

                    <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-serif italic leading-relaxed">
                      &ldquo;{project.narrative}&rdquo;
                    </p>

                    {project.highlights && (
                      <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 border-l-2 border-neutral-200 dark:border-neutral-800 pl-3">
                        {project.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.themes.map((th) => (
                        <span
                          key={th}
                          className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/80"
                        >
                          {th}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={project.route}
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0B513D] dark:text-[#10B981] hover:underline underline-offset-4 focus-visible:ring-2"
                      >
                        <span>View Case Study Architecture</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Visual Craft & Branding (Behance Collection) */}
        {visualBehanceProjects.length > 0 && (
          <div className="space-y-8 pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200/60 dark:border-neutral-800/60 pb-4">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981] flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  <span>Visual Craft &amp; Branding · Behance Collection</span>
                </span>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                  Brand identities, digital marketplaces, editorial campaigns, infographics, and motion graphics.
                </p>
              </div>

              <a
                href="https://www.behance.net/divyarashi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Full Behance Profile (opens in a new tab)"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0B513D] dark:text-[#10B981] hover:underline focus-visible:ring-2 focus-visible:outline-none"
              >
                <span>View Full Behance Profile</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            {/* Visual Craft Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {visualBehanceProjects.map((project) => (
                <article
                  key={project.id}
                  className="flex flex-col justify-between rounded-3xl border border-neutral-200/90 dark:border-neutral-800/90 bg-white dark:bg-neutral-900/70 overflow-hidden hover:border-[#0B513D]/60 dark:hover:border-emerald-500/60 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div>
                    {/* Project Cover Image */}
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative aspect-[16/10] w-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden"
                    >
                      {project.heroImage && (
                        <Image
                          src={project.heroImage}
                          alt={project.heroAlt || project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                        {project.clientOrContext?.replace("· Behance", "").trim()}
                      </span>
                      <span className="absolute top-3.5 right-3.5 px-2 py-0.5 rounded bg-blue-600 text-white text-[10px] font-bold font-sans">
                        Bē
                      </span>
                    </a>

                    {/* Content */}
                    <div className="p-5 sm:p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                        <span className="text-[#0B513D] dark:text-[#10B981] font-bold">
                          {project.number}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 group-hover:text-[#0B513D] dark:group-hover:text-[#10B981] transition-colors leading-snug">
                        <a
                          href={project.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.title}
                        </a>
                      </h3>

                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal line-clamp-3">
                        {project.narrative}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.themes.slice(0, 3).map((th) => (
                          <span
                            key={th}
                            className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                          >
                            {th}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Link */}
                  <div className="p-5 sm:p-6 pt-0 border-t border-neutral-100 dark:border-neutral-800 mt-4 flex items-center justify-between">
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0B513D] dark:text-[#10B981] group-hover:underline underline-offset-4"
                    >
                      <span>View on Behance</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <span className="text-[10px] font-mono text-neutral-400">
                      {project.platform}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Behance Profile Banner */}
        <div className="p-7 sm:p-9 rounded-3xl border border-neutral-200/90 dark:border-neutral-800/90 bg-gradient-to-r from-neutral-50 via-neutral-100/60 to-neutral-50 dark:from-neutral-900/80 dark:via-neutral-900/50 dark:to-neutral-900/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
              <Palette className="w-3.5 h-3.5" />
              <span>Full Behance Archive · @divyarashi</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-neutral-50">
              Explore More Visual Experiments on Behance
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Discover motion studies, packaging design, infographics, and promotional campaigns spanning earlier agency and studio work.
            </p>
          </div>

          <a
            href="https://www.behance.net/divyarashi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit @divyarashi on Behance (opens in a new tab)"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0B513D] text-white hover:bg-[#083B2C] dark:bg-[#10B981] dark:text-neutral-950 dark:hover:bg-[#34D399] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-sm hover:shadow-md flex-shrink-0 focus-visible:ring-2 focus-visible:outline-none"
          >
            <span>Visit @divyarashi on Behance</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </main>
  );
}
