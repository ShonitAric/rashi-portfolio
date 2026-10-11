import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ARCHIVE_PROJECTS } from "@/data/projects";
import { CASE_STUDIES_DATA } from "@/data/caseStudies";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return ARCHIVE_PROJECTS.map((p) => ({
    slug: p.id,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = ARCHIVE_PROJECTS.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  const study = CASE_STUDIES_DATA[params.slug];

  // Continuous loop strictly through the primary UX / Product case studies
  const CASE_STUDY_SEQUENCE = [
    { slug: "worksite", shortTitle: "Making Fieldwork Easier" },
    { slug: "search-discovery", shortTitle: "Search & Discovery" },
    { slug: "stcp", shortTitle: "STCP" },
    { slug: "ticketmitra", shortTitle: "TicketMitra" },
    { slug: "bu-super-league", shortTitle: "BU Super League" },
  ];

  const currentIdx = CASE_STUDY_SEQUENCE.findIndex((item) => item.slug === params.slug);
  const nextItem =
    currentIdx >= 0
      ? CASE_STUDY_SEQUENCE[(currentIdx + 1) % CASE_STUDY_SEQUENCE.length]
      : CASE_STUDY_SEQUENCE[0];

  const nextProject = ARCHIVE_PROJECTS.find((p) => p.id === nextItem.slug);
  const nextTitle = nextProject?.shortTitle || nextItem.shortTitle;

  return (
    <div className="pt-24 pb-28 md:pt-36 md:pb-36 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* Navigation back */}
        <div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors focus-visible:ring-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Case Studies</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
              Project {project.number}
            </span>
            <span className="text-neutral-400">·</span>
            <span className="font-mono text-xs text-neutral-500 uppercase">
              {project.clientOrContext} · {project.year}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 uppercase leading-none">
            {study ? study.headline : project.title}
          </h1>

          <p className="text-xl sm:text-2xl font-serif italic text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
            &ldquo;{study ? study.subtitle : project.narrative}&rdquo;
          </p>

          {/* Metadata Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.themes.map((t) => (
              <span
                key={t}
                className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Project Details Grid (Client, Industry, Role, Platform, Team, Timeline) */}
          {study && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-mono text-xs mt-6">
              {study.client ? (
                <>
                  <div>
                    <div className="text-neutral-400 uppercase text-[10px] tracking-wider mb-1">Client</div>
                    <div className="font-bold text-neutral-900 dark:text-neutral-100">{study.client}</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 uppercase text-[10px] tracking-wider mb-1">Industry</div>
                    <div className="font-bold text-neutral-900 dark:text-neutral-100">{study.industry || "Product Design"}</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 uppercase text-[10px] tracking-wider mb-1">Role</div>
                    <div className="font-bold text-neutral-900 dark:text-neutral-100">{study.role}</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 uppercase text-[10px] tracking-wider mb-1">Platform</div>
                    <div className="font-bold text-neutral-900 dark:text-neutral-100">{study.platform}</div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="text-neutral-400 uppercase text-[10px] tracking-wider mb-1">Role</div>
                    <div className="font-bold text-neutral-900 dark:text-neutral-100">{study.role}</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 uppercase text-[10px] tracking-wider mb-1">Timeline</div>
                    <div className="font-bold text-neutral-900 dark:text-neutral-100">{study.timeline}</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 uppercase text-[10px] tracking-wider mb-1">Platform</div>
                    <div className="font-bold text-neutral-900 dark:text-neutral-100">{study.platform}</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 uppercase text-[10px] tracking-wider mb-1">Team</div>
                    <div className="font-bold text-neutral-900 dark:text-neutral-100">{study.team}</div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Hero Visual */}
        {(study?.heroImage || project.heroImage) && (
          <div className="max-w-4xl mx-auto w-full">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-lg">
              <Image
                src={study?.heroImage || project.heroImage!}
                alt={study?.heroAlt || project.heroAlt || project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
                style={{ objectPosition: project.heroObjectPosition || "center" }}
                priority
              />
            </div>
          </div>
        )}

        {/* Key Metrics Ribbon (if present) */}
        {study?.metrics && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {study.metrics.map((m) => (
              <div
                key={m.label}
                className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-1"
              >
                <div className="font-mono text-3xl font-black text-[#0B513D] dark:text-[#10B981]">
                  {m.value}
                </div>
                <div className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                  {m.label}
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Storytelling Narrative */}
        {study?.richSections ? (
          <div className="space-y-20 border-t border-neutral-200 dark:border-neutral-800 pt-16">
            {study.richSections.map((sec, secIdx) => (
              <section key={secIdx} className="space-y-6">
                <div className="space-y-2">
                  {sec.number && (
                    <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
                      {sec.number} · {sec.title}
                    </div>
                  )}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 uppercase">
                    {sec.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {sec.blocks.map((block, bIdx) => {
                    if (block.type === "text") {
                      const paragraphs = block.content.split("\n\n");
                      return (
                        <div key={bIdx} className="space-y-4">
                          {paragraphs.map((p, pIdx) => {
                            const hasHtml = p.includes("<") && p.includes(">");
                            return hasHtml ? (
                              <p
                                key={pIdx}
                                className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal"
                                dangerouslySetInnerHTML={{ __html: p }}
                              />
                            ) : (
                              <p
                                key={pIdx}
                                className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal"
                              >
                                {p}
                              </p>
                            );
                          })}
                        </div>
                      );
                    }

                    if (block.type === "quote") {
                      return (
                        <blockquote
                          key={bIdx}
                          className="my-6 pl-5 border-l-2 border-[#0B513D] dark:border-[#10B981] italic font-serif text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200"
                        >
                          &ldquo;{block.text}&rdquo;
                        </blockquote>
                      );
                    }

                    if (block.type === "link") {
                      return (
                        <div key={bIdx} className="pt-2 pb-1">
                          <a
                            href={block.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B513D] dark:bg-[#10B981] text-white dark:text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm"
                          >
                            <span>{block.text}</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </div>
                      );
                    }

                    if (block.type === "subheading") {
                      return (
                        <h3
                          key={bIdx}
                          className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 pt-3"
                        >
                          {block.text}
                        </h3>
                      );
                    }

                    if (block.type === "list") {
                      if (block.ordered) {
                        return (
                          <ol key={bIdx} className="space-y-3.5 my-3 pl-1">
                            {block.items.map((item, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="flex items-start gap-3 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed"
                              >
                                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-[#0B513D] dark:text-[#10B981] flex-shrink-0 mt-1 border border-neutral-200 dark:border-neutral-700">
                                  0{itemIdx + 1}
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ol>
                        );
                      }

                      return (
                        <ul key={bIdx} className="space-y-3 pl-1">
                          {block.items.map((item, itemIdx) => {
                            const isCheck = item.startsWith("✅ ");
                            const displayText = isCheck ? item.replace(/^✅\s*/, "") : item;
                            return (
                              <li
                                key={itemIdx}
                                className="flex items-start gap-3.5 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed"
                              >
                                {isCheck ? (
                                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                                ) : (
                                  <span className="w-2 h-2 rounded-full bg-[#0B513D] dark:bg-[#10B981] flex-shrink-0 mt-2.5" />
                                )}
                                <span>{displayText}</span>
                              </li>
                            );
                          })}
                        </ul>
                      );
                    }

                    if (block.type === "image") {
                      if (block.layout === "centered-graphic") {
                        return (
                          <figure key={bIdx} className="my-8 flex flex-col items-center">
                            <a
                              href={block.src}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group relative max-w-sm sm:max-w-md w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 sm:p-8 shadow-sm flex justify-center items-center cursor-zoom-in"
                              title="Click to view full resolution"
                            >
                              <Image
                                src={block.src}
                                alt={block.alt}
                                width={block.width || 800}
                                height={block.height || 600}
                                unoptimized={block.unoptimized}
                                className="w-auto h-auto max-h-[380px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                              />
                              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-3 py-1 rounded-full bg-neutral-950/80 text-white text-[11px] font-mono tracking-wider backdrop-blur-sm pointer-events-none flex items-center gap-1 shadow-lg">
                                <span>Full Res</span>
                                <ArrowUpRight className="w-3 h-3" />
                              </div>
                            </a>
                            {block.caption && (
                              <figcaption className="mt-3 font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 text-center">
                                {block.caption}
                              </figcaption>
                            )}
                          </figure>
                        );
                      }

                      return (
                        <figure key={bIdx} className="my-6 sm:my-8 max-w-4xl mx-auto">
                          <a
                            href={block.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block w-full rounded-2xl md:rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm cursor-zoom-in p-2 sm:p-3.5 md:p-5"
                            title="Click to view full resolution"
                          >
                            <div className="relative w-full flex justify-center items-center max-h-[340px] sm:max-h-[460px] md:max-h-[540px] overflow-hidden">
                              <Image
                                src={block.src}
                                alt={block.alt}
                                width={block.width || 1920}
                                height={block.height || 1080}
                                unoptimized={block.unoptimized}
                                className="w-auto h-auto max-h-[320px] sm:max-h-[440px] md:max-h-[520px] max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                                sizes="(max-width: 768px) 88vw, 850px"
                              />
                            </div>
                            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-2.5 py-1 rounded-full bg-neutral-950/85 text-white text-[11px] font-mono tracking-wider backdrop-blur-sm pointer-events-none flex items-center gap-1 shadow-lg">
                              <span>Full Res</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </div>
                          </a>
                          {block.caption && (
                            <figcaption className="mt-2.5 font-mono text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 text-center">
                              {block.caption}
                            </figcaption>
                          )}
                        </figure>
                      );
                    }

                    if (block.type === "placeholder") {
                      return (
                        <div
                          key={bIdx}
                          className="my-6 sm:my-8 p-6 sm:p-8 rounded-2xl md:rounded-3xl border-2 border-dashed border-amber-300 dark:border-amber-700/60 bg-amber-50/60 dark:bg-amber-950/20 text-center space-y-2 transition-colors"
                        >
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-900 dark:text-amber-200 font-mono text-[11px] font-bold uppercase tracking-wider">
                            <span>Asset Placeholder</span>
                          </div>
                          <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
                            {block.title}
                          </h4>
                          {block.subtitle && (
                            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
                              {block.subtitle}
                            </p>
                          )}
                          {block.note && (
                            <p className="font-mono text-[11px] text-amber-700 dark:text-amber-400 pt-1">
                              {block.note}
                            </p>
                          )}
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              </section>
            ))}
          </div>
        ) : study ? (
          <div className="space-y-16 border-t border-neutral-200 dark:border-neutral-800 pt-12">
            {/* 01 Overview */}
            <section className="space-y-4">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
                01 · Overview
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
                The Context &amp; Mandate
              </h2>
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                {study.overview}
              </p>
            </section>

            {/* 02 The Challenge */}
            <section className="space-y-4">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
                02 · The Challenge
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
                Untangling the Real Problem
              </h2>
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                {study.challenge}
              </p>
            </section>

            {/* 03 Research and Insight */}
            <section className="space-y-4">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
                03 · Research &amp; Insight
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
                What People Actually Needed
              </h2>
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                {study.research}
              </p>
            </section>

            {/* 04 Product Strategy */}
            <section className="space-y-4">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
                04 · Product Strategy
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
                The Core Promise
              </h2>
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                {study.strategy}
              </p>
            </section>

            {/* 05 Experience Architecture */}
            <section className="space-y-4">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
                05 · Experience Architecture
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
                Structuring the Workspace
              </h2>
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                {study.architecture}
              </p>
            </section>

            {/* 06 Interface System */}
            <section className="space-y-4">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
                06 · Interface System
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
                Density, Predictability &amp; Accessibility
              </h2>
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                {study.interfaceSystem}
              </p>
            </section>

            {/* 07 Outcome */}
            <section className="p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-4">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
                07 · Outcome &amp; Impact
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
                What Changed
              </h2>
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                {study.outcome}
              </p>
            </section>
          </div>
        ) : (
          /* Archive Project Summary */
          <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-4">
            <h2 className="text-2xl font-bold text-neutral-950 dark:text-neutral-50">
              Project Highlights
            </h2>
            {project.highlights && (
              <ul className="space-y-3 text-neutral-700 dark:text-neutral-300 font-sans text-sm sm:text-base">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#0B513D] dark:text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Back Link & Next Case Study Action Footer */}
        <div className="pt-10 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center gap-4 w-full">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors py-2 whitespace-nowrap"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Case Studies</span>
          </Link>

          {nextProject && (
            <Link
              href={nextProject.route}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors py-2 whitespace-nowrap group text-right"
            >
              <span>Next Case Study: {nextTitle}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
