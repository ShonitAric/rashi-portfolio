"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Calendar, Clock } from "lucide-react";

interface Article {
  title: string;
  publication: string;
  date: string;
  readTime: string;
  summary: string;
  coverImage: string;
  url: string;
}

const ARTICLES: Article[] = [
  {
    title: "Using UX to Use AI Better: A UX Perspective",
    publication: "Bootcamp · UX Collective",
    date: "February 24, 2026",
    readTime: "5 min read",
    summary:
      "A shift from 'AI for UX' to 'UX as the way we guide AI'—anchoring generative systems in human-centered simplicity, reduced cognitive load, and deliberate intent.",
    coverImage: "/images/articles/ai-ux-perspective.png",
    url: "https://medium.com/design-bootcamp/using-ux-to-use-ai-better-a-ux-perspective-bf85cc0881ae",
  },
  {
    title: "Accessibility Is the Missing Layer in AI‑Driven UX",
    publication: "Bootcamp · UX Collective",
    date: "May 13, 2026",
    readTime: "6 min read",
    summary:
      "Why treating accessibility as an afterthought amplifies exclusion at machine speed, and how to build cognitive predictability and error recovery into AI products.",
    coverImage: "/images/articles/accessibility-ai-ux.png",
    url: "https://medium.com/design-bootcamp/accessibility-is-the-missing-layer-in-ai-driven-ux-d113e34098ff",
  },
];

export function Articles() {
  return (
    <section
      id="articles"
      className="py-16 md:py-20 border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-500"
      aria-labelledby="articles-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Thinking in Public · Published Essays</span>
            </div>
            <h2
              id="articles-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 uppercase leading-none"
            >
              Published Articles
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
              Essays on AI-driven UX, accessibility architectures, and the craft of human-centered systems.
            </p>
          </div>

          <a
            href="https://medium.com/@divyarashi45"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all articles on Medium (opens in a new tab)"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase font-mono text-[#0B513D] hover:text-[#083B2C] dark:text-[#10B981] dark:hover:text-[#34D399] transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            <span>View All on Medium</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Crisp Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {ARTICLES.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${article.title} on Medium (opens in a new tab)`}
              className="group flex flex-col rounded-3xl bg-neutral-50 dark:bg-neutral-900/70 border border-neutral-200/90 dark:border-neutral-800/90 overflow-hidden hover:border-[#0B513D]/60 dark:hover:border-emerald-500/60 shadow-sm hover:shadow-xl transition-all duration-300 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-[#0B513D] dark:focus-visible:ring-[#10B981]"
            >
              {/* Article Cover Image */}
              <div className="relative aspect-[16/9] w-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                <Image
                  src={article.coverImage}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 shadow-sm">
                  {article.publication}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Meta Bar: Date & Read Time */}
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0B513D] dark:text-[#10B981]" />
                      {article.date}
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 group-hover:text-[#0B513D] dark:group-hover:text-[#10B981] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Short Summary */}
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                    {article.summary}
                  </p>
                </div>

                {/* Read CTA */}
                <div className="pt-4 border-t border-neutral-200/70 dark:border-neutral-800/70 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B513D] dark:text-[#10B981] group-hover:underline underline-offset-4 flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                    Medium
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
