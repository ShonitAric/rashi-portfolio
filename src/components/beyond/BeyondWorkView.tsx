"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useModeTheme } from "@/context/ModeThemeContext";
import {
  CHESS_CONFIG,
  INSTAGRAM_CONFIG,
  STRAVA_CONFIG,
  KATHAK_GALLERY,
  RESIN_GALLERY,
  PAINTING_GALLERY,
  KathakPhoto,
  ResinPhoto,
  PaintingPhoto,
} from "@/data/beyondWork";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Mail,
  Instagram,
} from "lucide-react";

export function BeyondWorkView() {
  const { setMode } = useModeTheme();

  return (
    <div className="pt-14 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 transition-colors duration-500 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 md:space-y-24">
        {/* ========================================================= */}
        {/* 1. HERO — HELLO FROM THE OTHER SIDE */}
        {/* Balanced two-column hero with expressive typography & draggable motifs */}
        {/* ========================================================= */}
        <section aria-label="Hero Introduction" className="pt-2 sm:pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Expressive Typography & Clear Navigation */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#7C3AED]/10 text-[#6D28D9] border border-[#7C3AED]/25 dark:bg-[#A855F7]/15 dark:text-[#C084FC] dark:border-[#A855F7]/30">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>THE OTHER SIDE OF ME · BEYOND WORK</span>
              </div>

              {/* Expressive Editorial Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-serif italic text-[#1C1917] dark:text-[#F8F5F2] tracking-tight leading-[1.06]">
                  Hello from the <br />
                  <span className="font-sans font-black not-italic uppercase tracking-tight text-[#7C3AED] dark:text-[#C084FC]">
                    other side.
                  </span>
                </h1>
                <p className="text-lg sm:text-2xl md:text-3xl font-serif italic text-[#6D28D9] dark:text-[#E9D5FF]">
                  &ldquo;A little less structure. A lot more me.&rdquo;
                </p>
              </div>

              {/* Concise Introduction */}
              <p className="text-sm sm:text-base text-[#57534E] dark:text-[#A1A1AA] max-w-xl font-normal leading-relaxed">
                A dancer, a maker, and a collector of hobbies. Welcome to everything that happens when I&apos;m not designing digital experiences.
              </p>

              {/* Primary Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#things-that-make-me-me"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white dark:bg-[#A855F7] dark:hover:bg-[#C084FC] dark:text-[#0A0A0A] text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:scale-105 focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  <span>EXPLORE BEYOND WORK</span>
                  <ChevronDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={() => setMode("work")}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#E5DCD3] dark:border-[#26262A] text-xs font-mono font-semibold uppercase tracking-wider text-[#1C1917] dark:text-[#F8F5F2] hover:bg-black/5 dark:hover:bg-white/5 transition-all focus-visible:ring-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Work Mode</span>
                </button>
              </div>
            </div>

            {/* Right Column: Animated Saying Hi Illustration */}
            <div className="lg:col-span-5">
              <AnimatedSayingHiIllustration />
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. THINGS THAT MAKE ME, ME. */}
        {/* ROW 1: 3 Inline Photo Galleries (Kathak, Resin, Painting) */}
        {/* + Shared Creative Instagram CTA below Resin & Painting    */}
        {/* ROW 2: 3 Compact Interactive Interest Cards (Running, Chess, Plants) */}
        {/* ========================================================= */}
        <section
          id="things-that-make-me-me"
          aria-label="Things that make me, ME."
          className="space-y-10 sm:space-y-12 scroll-mt-20"
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E5DCD3] dark:border-[#26262A] pb-5">
            <div className="max-w-xl space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#6D28D9] dark:text-[#C084FC] font-bold">
                02 / PERSONAL PURSUITS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-[#1C1917] dark:text-[#F8F5F2]">
                Things that make me,{" "}
                <span className="font-sans font-black not-italic uppercase tracking-tight text-[#7C3AED] dark:text-[#C084FC]">
                  ME.
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A1A1AA]">
                A visual chronicle of classical dance, tactile art, and quiet rituals.
              </p>
            </div>

            {/* Quick Profile Links */}
            <div className="flex flex-wrap items-center gap-2 pt-1 md:pt-0">
              <a
                href={CHESS_CONFIG.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chess.com profile @${CHESS_CONFIG.username} (opens in a new tab)`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 hover:bg-black/10 dark:bg-[#141416] dark:hover:bg-[#1C1C20] text-[#1C1917] dark:text-[#F8F5F2] text-[11px] font-mono font-bold tracking-wider uppercase transition-all border border-[#E5DCD3] dark:border-[#26262A] hover:scale-105 focus-visible:ring-2 focus-visible:outline-none"
              >
                <span className="text-[#81B64C]" aria-hidden="true">♟</span>
                <span>Chess.com: @{CHESS_CONFIG.username} ↗</span>
              </a>
              <a
                href={INSTAGRAM_CONFIG.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram profile ${INSTAGRAM_CONFIG.handle} (opens in a new tab)`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#7C3AED]/10 hover:bg-[#7C3AED]/20 text-[#6D28D9] dark:bg-[#A855F7]/15 dark:hover:bg-[#A855F7]/25 dark:text-[#C084FC] text-[11px] font-mono font-bold tracking-wider uppercase transition-all border border-[#7C3AED]/25 dark:border-[#A855F7]/30 hover:scale-105 focus-visible:ring-2 focus-visible:outline-none"
              >
                <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Instagram: {INSTAGRAM_CONFIG.handle} ↗</span>
              </a>
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* ROW 1: THREE INLINE INTERACTIVE PHOTO GALLERIES         */}
          {/* Kathak · Resin Art & Jewelry · Painting                 */}
          {/* ------------------------------------------------------- */}
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
              {/* Gallery 1: Kathak */}
              <div className="h-full">
                <InlineGalleryCard
                  id="kathak"
                  title="Kathak"
                  tag="CLASSICAL DANCE · RHYTHM"
                  copy="Stories told through rhythm and movement."
                  photos={KATHAK_GALLERY}
                />
              </div>

              {/* Gallery 2: Resin Art & Jewelry */}
              <div className="h-full">
                <InlineGalleryCard
                  id="resin"
                  title="Resin Art & Jewelry"
                  tag="TACTILE CRAFT · BOTANICALS"
                  copy="Little things, made with a lot of love."
                  photos={RESIN_GALLERY}
                />
              </div>

              {/* Gallery 3: Painting */}
              <div className="h-full">
                <InlineGalleryCard
                  id="painting"
                  title="Painting"
                  tag="VISUAL ARTS · CANVASES"
                  copy="Where ideas turn into colors."
                  photos={PAINTING_GALLERY}
                />
              </div>
            </div>

            {/* Shared Instagram CTA directly associated with Resin Art and Painting */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              <div className="md:col-span-2 lg:col-span-2 lg:col-start-2">
                <SharedCreativeInstagramCTA />
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* ROW 2: THREE COMPACT INTERACTIVE INTEREST CARDS         */}
          {/* Running & Fitness · Chess · Plants & Gardening          */}
          {/* (Noticeably less vertical space than Row 1)              */}
          {/* ------------------------------------------------------- */}
          <div className="pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
              {/* Card 1: Running & Fitness */}
              <RunningFitnessCard />

              {/* Card 2: Chess */}
              <ChessInterestCard />

              {/* Card 3: Plants & Gardening (Ambient Animation) */}
              <PlantsGardeningCard />
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. CLOSING — BACK TO WORK / SAY HELLO */}
        {/* Compact, responsive bridge back to the professional side */}
        {/* ========================================================= */}
        <section
          aria-label="Closing Bridge to Work Portfolio"
          className="pt-4 border-t border-[#E5DCD3] dark:border-[#26262A]"
        >
          <div className="rounded-3xl border border-[#E5DCD3] dark:border-[#26262A] bg-[#FFFFFF] dark:bg-[#141416]/95 p-7 sm:p-10 lg:p-12 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
              <div className="max-w-xl space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#6D28D9] dark:text-[#C084FC] font-bold">
                  03 / CLOSING
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-[#1C1917] dark:text-[#F8F5F2]">
                  Enough about my other side?
                </h2>
                <p className="text-sm sm:text-base text-[#57534E] dark:text-[#A1A1AA]">
                  There&apos;s a whole other world where I craft digital systems and product strategy.
                </p>
              </div>

              {/* Two Clear Responsive Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                <button
                  type="button"
                  onClick={() => setMode("work")}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1C1917] hover:bg-black text-white dark:bg-[#F8F5F2] dark:text-[#0A0A0A] dark:hover:bg-[#C084FC] font-bold text-xs font-mono uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-md focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  <span>BACK TO WORK</span>
                </button>

                <a
                  href="mailto:divyarashi45@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#E5DCD3] dark:border-[#26262A] hover:bg-black/5 dark:hover:bg-white/5 text-[#1C1917] dark:text-[#F8F5F2] font-bold text-xs font-mono uppercase tracking-wider transition-colors focus-visible:ring-2"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>SAY HELLO</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// ===================================================================
// INLINE PHOTO GALLERY CARD (ROW 1)
// Displays a prominent main image directly on page, with prev/next arrows,
// horizontal thumbnail strip below, hobby title, and short descriptive line.
// NO MODAL OR POPUP REQUIRED.
// ===================================================================

function InlineGalleryCard({
  id,
  title,
  tag,
  copy,
  photos,
}: {
  id: string;
  title: string;
  tag: string;
  copy: string;
  photos: (KathakPhoto | ResinPhoto | PaintingPhoto)[];
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentPhoto = photos[activeIdx];
  const total = photos.length;

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <article
      aria-label={`${title} Gallery`}
      className="group h-full rounded-2xl bg-[#FFFFFF] dark:bg-[#141416] border border-[#E5DCD3] dark:border-[#26262A] p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3.5"
    >
      {/* Top Tag & Counter */}
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="font-bold text-[#7C3AED] dark:text-[#C084FC] uppercase tracking-wider text-[11px]">
          {tag}
        </span>
        <span className="text-[#6B6560] dark:text-[#A1A1AA] text-[10px] uppercase font-mono">
          {activeIdx + 1} / {total}
        </span>
      </div>

      {/* Main Image Stage (Aspect 4:3, Compact & Balanced) */}
      <div className="space-y-2.5">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/10 dark:bg-black/60 border border-[#E5DCD3] dark:border-[#26262A] shadow-xs select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                priority={activeIdx === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Bottom Subtle Gradient for Caption Readability */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

              {/* Caption Overlay */}
              <div className="absolute bottom-2 left-2.5 right-2.5 text-white text-[11px] font-mono drop-shadow-sm truncate">
                <span className="font-semibold">{currentPhoto.caption}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Previous Arrow Control */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label={`Previous ${title} photo`}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-xs transition-all opacity-85 hover:opacity-100 hover:scale-110 shadow-md focus-visible:ring-2 focus-visible:ring-white z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Next Arrow Control */}
          <button
            type="button"
            onClick={handleNext}
            aria-label={`Next ${title} photo`}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-xs transition-all opacity-85 hover:opacity-100 hover:scale-110 shadow-md focus-visible:ring-2 focus-visible:ring-white z-10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Horizontal Strip of Thumbnails */}
        <div
          role="tablist"
          aria-label={`${title} photo thumbnails`}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              handlePrev();
            } else if (e.key === "ArrowRight") {
              e.preventDefault();
              handleNext();
            }
          }}
          className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-0.5 scrollbar-none"
        >
          {photos.map((photo, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={photo.id}
                role="tab"
                aria-selected={isSelected}
                aria-label={`Show ${title} photo ${idx + 1}: ${photo.caption}`}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`relative flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden transition-all duration-200 border focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-[#7C3AED] dark:focus-visible:ring-[#C084FC] ${
                  isSelected
                    ? "border-2 border-[#7C3AED] ring-2 ring-[#7C3AED]/40 dark:border-[#C084FC] dark:ring-[#C084FC]/40 scale-105 shadow-xs z-10"
                    : "border-transparent opacity-60 hover:opacity-100 hover:scale-[1.02]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="60px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Hobby Name & Short Description */}
      <div className="pt-2 border-t border-[#E5DCD3] dark:border-[#26262A] space-y-1">
        <h3 className="text-xl sm:text-2xl font-serif italic text-[#1C1917] dark:text-[#F8F5F2] tracking-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A1A1AA] leading-relaxed">
          &ldquo;{copy}&rdquo;
        </p>
      </div>
    </article>
  );
}

// ===================================================================
// SHARED CREATIVE INSTAGRAM CTA
// Compact, prominent CTA directly below Resin Art & Painting galleries
// ===================================================================

function SharedCreativeInstagramCTA() {
  return (
    <aside
      aria-label="Creative Studio Instagram Links"
      className="rounded-2xl border border-[#E5DCD3] dark:border-[#26262A] bg-gradient-to-r from-[#FFFBF2] via-[#FDF7E7] to-[#FBF2DC] dark:from-[#141416] dark:via-[#19191C] dark:to-[#141416] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"
    >
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6D28D9] via-[#7C3AED] to-[#A855F7] dark:from-[#581C87] dark:via-[#7C3AED] dark:to-[#C084FC] text-white flex items-center justify-center shadow-xs flex-shrink-0">
          <Instagram className="w-5 h-5" aria-hidden="true" />
        </div>
        <div>
          <span className="font-serif italic font-bold text-base sm:text-lg text-[#1C1917] dark:text-[#F8F5F2] block leading-tight">
            {INSTAGRAM_CONFIG.promptText}
          </span>
          <p className="text-xs font-mono text-[#6B6560] dark:text-[#A1A1AA]">
            Resin jewelry, botanical drops &amp; paintings on {INSTAGRAM_CONFIG.handle}
          </p>
        </div>
      </div>

      <a
        href={INSTAGRAM_CONFIG.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Explore my art on Instagram (opens in new tab)"
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white dark:bg-[#A855F7] dark:hover:bg-[#C084FC] dark:text-[#0A0A0A] text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:scale-105 focus-visible:ring-2 flex-shrink-0"
      >
        <span>{INSTAGRAM_CONFIG.cta}</span>
      </a>
    </aside>
  );
}

// ===================================================================
// ROW 2 — CARD 1: RUNNING & FITNESS
// Minimal track line illustration, concise copy, and Strava CTA
// ===================================================================

function RunningFitnessCard() {
  return (
    <article
      aria-label="Running & Fitness Pursuit"
      className="group h-full rounded-2xl bg-[#FFFFFF] dark:bg-[#141416] border border-[#E5DCD3] dark:border-[#26262A] p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
    >
      <div className="space-y-3.5">
        {/* Top Tag & Decorative Header */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="font-bold text-[#6D28D9] dark:text-[#C084FC] uppercase tracking-wider text-[11px]">
            MOVEMENT · ENDURANCE
          </span>
          <span className="text-[10px] text-[#6B6560]/70 dark:text-[#A1A1AA]/70 font-mono">Outdoor Trails</span>
        </div>

        {/* Minimal Running Track & Route Illustration */}
        <div className="h-24 w-full rounded-xl bg-[#FAF8F5] dark:bg-[#0E0E10] border border-[#E5DCD3] dark:border-[#26262A] overflow-hidden relative flex items-center justify-center p-3 select-none">
          <svg
            viewBox="0 0 280 80"
            fill="none"
            className="w-full h-full overflow-visible"
            aria-hidden="true"
          >
            {/* Outer track loop */}
            <path
              d="M30 40 C30 20 60 16 110 20 C160 24 200 16 230 24 C255 30 255 52 230 58 C195 66 140 56 100 60 C55 64 30 55 30 40 Z"
              stroke="#E5DCD3"
              strokeWidth="4"
              strokeLinecap="round"
              className="dark:stroke-[#26262A]"
            />
            {/* Inner dynamic route path */}
            <path
              d="M30 40 C30 20 60 16 110 20 C160 24 200 16 230 24 C255 30 255 52 230 58 C195 66 140 56 100 60 C55 64 30 55 30 40 Z"
              stroke="#7C3AED"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 6"
              className="dark:stroke-[#C084FC] group-hover:stroke-[#FC4C02] transition-colors"
            />
            {/* Start Waypoint Marker */}
            <circle cx="30" cy="40" r="5" fill="#7C3AED" className="dark:fill-[#C084FC]" />
            <circle cx="30" cy="40" r="8" stroke="#7C3AED" strokeWidth="1.2" opacity="0.4" className="dark:stroke-[#C084FC]" />

            {/* Runner Dynamic Waypoint on Route */}
            <circle
              cx="170"
              cy="23"
              r="4.5"
              fill="#FC4C02"
              className="group-hover:scale-125 transition-transform origin-center"
            />
            <path
              d="M170 23 L185 30"
              stroke="#FC4C02"
              strokeWidth="1.5"
              strokeDasharray="2 2"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Title & Concise Copy */}
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-serif italic text-[#1C1917] dark:text-[#F8F5F2] tracking-tight">
            Running &amp; Fitness
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A1A1AA] leading-relaxed">
            &ldquo;Chasing challenges, one run at a time.&rdquo;
          </p>
        </div>
      </div>

      {/* Strava External CTA */}
      <div className="pt-2 border-t border-[#E5DCD3] dark:border-[#26262A]">
        <a
          href={STRAVA_CONFIG.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow my runs on Strava (opens in new tab)"
          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#FC4C02]/10 hover:bg-[#FC4C02]/20 text-[#FC4C02] text-xs font-mono font-bold tracking-wider uppercase transition-colors border border-[#FC4C02]/20 group-hover:border-[#FC4C02]/40 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-[#FC4C02]"
        >
          <span>{STRAVA_CONFIG.cta}</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

// ===================================================================
// ROW 2 — CARD 2: CHESS
// Custom knight illustration with subtle hover movement, concise copy,
// and direct Chess.com CTA (No ratings or stats fabricated).
// ===================================================================

function ChessInterestCard() {
  return (
    <article
      aria-label="Chess Pursuit"
      className="group h-full rounded-2xl bg-[#FFFFFF] dark:bg-[#141416] border border-[#E5DCD3] dark:border-[#26262A] p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
    >
      <div className="space-y-3.5">
        {/* Top Tag & Header */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="font-bold text-[#1C1917] dark:text-[#F8F5F2] uppercase tracking-wider text-[11px]">
            STRATEGY · 64 SQUARES
          </span>
          <span className="text-[10px] text-[#81B64C] dark:text-[#A3E06C] font-mono flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#81B64C] animate-pulse" />
            @{CHESS_CONFIG.username}
          </span>
        </div>

        {/* Decorative Chessboard & Knight Graphic */}
        <div className="h-24 w-full rounded-xl bg-[#FAF8F5] dark:bg-[#0E0E10] border border-[#E5DCD3] dark:border-[#26262A] overflow-hidden relative flex items-center justify-center p-3 select-none">
          {/* Subtle 4x4 Chessboard Grid */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-2 opacity-15">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={(Math.floor(i / 6) + (i % 6)) % 2 === 0 ? "bg-black/10 dark:bg-white" : "bg-transparent"}
              />
            ))}
          </div>

          {/* Knight Centerpiece with subtle hover micro-movement */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#81B64C] to-[#4F752C] flex items-center justify-center text-2xl text-white shadow-md group-hover:-translate-y-1 group-hover:rotate-[-4deg] transition-transform duration-300 motion-reduce:transform-none">
              <span className="select-none filter drop-shadow">♞</span>
            </div>
            <div className="text-left">
              <span className="text-xs font-mono font-bold text-[#1C1917] dark:text-[#C084FC] block">The Knight</span>
              <span className="text-[10px] font-mono text-[#6B6560]/70 dark:text-[#A1A1AA]/70 block">Tactical Lines</span>
            </div>
          </div>
        </div>

        {/* Title & Concise Copy */}
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-serif italic text-[#1C1917] dark:text-[#F8F5F2] tracking-tight">
            Chess
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A1A1AA] leading-relaxed">
            &ldquo;One more game. Famous last words.&rdquo;
          </p>
        </div>
      </div>

      {/* Chess.com External CTA */}
      <div className="pt-2 border-t border-[#E5DCD3] dark:border-[#26262A]">
        <a
          href={CHESS_CONFIG.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Challenge me on Chess.com (opens in new tab)"
          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#81B64C]/15 hover:bg-[#81B64C]/25 text-[#4F752C] dark:text-[#A3E06C] text-xs font-mono font-bold tracking-wider uppercase transition-colors border border-[#81B64C]/30 group-hover:border-[#81B64C]/50 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-[#81B64C]"
        >
          <span>{CHESS_CONFIG.cta}</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

// ===================================================================
// ROW 2 — CARD 3: PLANTS & GARDENING
// Ambient, decorative animated illustration (gentle natural leaf sway).
// NO BUTTONS, NO TOUCH/CLICK INTERACTIONS, NO GROWTH-STAGE SELECTION.
// Respects prefers-reduced-motion with static fallback.
// ===================================================================

function PlantsGardeningCard() {
  return (
    <article
      aria-label="Plants & Gardening Pursuit"
      className="group h-full rounded-2xl bg-[#FFFFFF] dark:bg-[#141416] border border-[#E5DCD3] dark:border-[#26262A] p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
    >
      <div className="space-y-3.5">
        {/* Top Tag & Header */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="font-bold text-[#047857] dark:text-[#86EFAC] uppercase tracking-wider text-[11px]">
            LIVING BOTANY · FOLIAGE
          </span>
          <span className="text-[10px] text-[#6B6560]/70 dark:text-[#A1A1AA]/70 font-mono">Propagation</span>
        </div>

        {/* Ambient Animated Potted Plant SVG Illustration */}
        <div className="h-24 w-full rounded-xl bg-gradient-to-b from-[#F0FDF4] to-[#ECFDF5] dark:from-[#0E1A14] dark:to-[#0A0A0A] border border-[#A7F3D0]/60 dark:border-[#26262A] overflow-hidden relative flex items-center justify-center p-2 select-none">
          <svg
            viewBox="0 0 200 80"
            fill="none"
            className="w-full h-full overflow-visible"
            aria-hidden="true"
          >
            {/* Ground Shadow */}
            <ellipse cx="100" cy="74" rx="30" ry="3" fill="#000000" opacity="0.2" />

            {/* Terracotta Pot */}
            <path
              d="M84 56 L89 74 Q90 75 93 75 L107 75 Q110 75 111 74 L116 56 Z"
              fill="#C8592E"
              stroke="#843213"
              strokeWidth="1.2"
            />
            {/* Pot Rim */}
            <rect x="81" y="50" width="38" height="6.5" rx="2" fill="#D96637" stroke="#843213" strokeWidth="1" />
            <ellipse cx="100" cy="52" rx="16" ry="2.5" fill="#3D2115" />

            {/* Main Central Stem */}
            <path d="M100 52 Q99 36 100 18" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />

            {/* Left Monstera Leaf with Gentle Sway Animation */}
            <g className="origin-bottom-right animate-[gentleSwayLeft_4.5s_ease-in-out_infinite] motion-reduce:animate-none">
              <path
                d="M100 36 C86 28 68 36 72 50 C74 55 82 56 86 52 C88 50 87 47 84 48 C81 48 80 45 80 42 C82 38 86 37 90 41 C92 43 95 43 96 40 C96 37 94 36 100 36 Z"
                fill="#10B981"
                stroke="#047857"
                strokeWidth="1"
              />
              <circle cx="78" cy="45" r="1.2" fill="#D1FAE5" />
            </g>

            {/* Right Monstera Leaf with Gentle Sway Animation */}
            <g className="origin-bottom-left animate-[gentleSwayRight_4s_ease-in-out_infinite] motion-reduce:animate-none">
              <path
                d="M100 30 C114 20 132 28 128 42 C126 47 118 48 114 44 C112 42 113 39 116 40 C119 40 120 37 120 34 C118 30 114 29 110 33 C108 35 105 35 104 32 C104 29 106 28 100 30 Z"
                fill="#059669"
                stroke="#064E3B"
                strokeWidth="1"
              />
              <circle cx="122" cy="38" r="1.2" fill="#D1FAE5" />
            </g>

            {/* Towering Crown Sprout */}
            <g className="origin-bottom animate-[gentleSwayCenter_5s_ease-in-out_infinite] motion-reduce:animate-none">
              <path
                d="M100 18 C92 8 90 2 100 0 C110 2 108 8 100 18 Z"
                fill="#34D399"
                stroke="#059669"
                strokeWidth="1"
              />
            </g>
          </svg>
        </div>

        {/* Title & Concise Copy */}
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-serif italic text-[#1C1917] dark:text-[#F8F5F2] tracking-tight">
            Plants &amp; Gardening
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A1A1AA] leading-relaxed">
            &ldquo;Growing a little green corner of my world.&rdquo;
          </p>
        </div>
      </div>

      {/* Decorative Botanical Status (Ambient / No click action needed) */}
      <div className="pt-2 border-t border-[#E5DCD3] dark:border-[#26262A]">
        <div className="inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-xl bg-[#059669]/15 dark:bg-[#10B981]/15 text-[#065F46] dark:text-[#86EFAC] text-xs font-mono font-bold tracking-wider uppercase select-none">
          <span>Always room for one more plant 🌱</span>
        </div>
      </div>
    </article>
  );
}

// ===================================================================
// ANIMATED SAYING HI ILLUSTRATION (RIGHT COLUMN OF HERO)
// Charming, editorial animated portrait of a girl waving "Hi! 👋"
// with gentle tilt, waving hand, floating speech bubble, and sparkles.
// Adapts cleanly to both Light and Dark modes.
// ===================================================================

function AnimatedSayingHiIllustration() {
  return (
    <div
      aria-label="Illustration of a girl warmly saying hi"
      className="relative w-full aspect-[4/3] sm:aspect-[5/4] max-w-md mx-auto rounded-3xl overflow-hidden border border-[#E5DCD3] dark:border-[#26262A] bg-gradient-to-br from-[#FAF8F5] via-[#F6ECE2]/70 to-[#F3E8FF]/40 dark:from-[#121118] dark:via-[#141416] dark:to-[#0A0A0A] p-4 sm:p-5 shadow-sm flex items-center justify-center select-none group transition-all duration-300"
    >
      {/* Ambient Radial Aura Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(124,58,237,0.12),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_55%,rgba(192,132,252,0.14),transparent_70%)] pointer-events-none"
      />

      {/* Decorative Celestial Orbital Rings */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25 dark:opacity-20"
      >
        <div className="w-56 h-56 rounded-full border border-dashed border-[#7C3AED]/40 dark:border-[#C084FC]/40" />
        <div className="absolute w-40 h-40 rounded-full border border-dotted border-[#6D28D9]/40 dark:border-[#A855F7]/40" />
      </div>

      {/* Floating Speech Bubble Badge */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
        className="absolute top-3.5 left-4 sm:left-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#18181B]/95 border border-[#7C3AED]/25 dark:border-[#C084FC]/30 shadow-xs backdrop-blur-xs"
      >
        <span className="text-base select-none leading-none">👋</span>
        <div className="text-left">
          <span className="text-xs font-mono font-bold text-[#6D28D9] dark:text-[#C084FC] block leading-tight">
            Hi there!
          </span>
          <span className="text-[10px] font-mono text-[#6B6560] dark:text-[#A1A1AA] block leading-tight">
            A little less structure. A lot more me.
          </span>
        </div>
      </motion.div>

      {/* Creative Side Pill Badge */}
      <div className="absolute top-3.5 right-4 sm:right-5 z-20 hidden xs:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 dark:bg-[#141416]/85 border border-[#E5DCD3] dark:border-[#26262A] text-[10px] font-mono font-semibold text-[#7C3AED] dark:text-[#C084FC] shadow-2xs">
        <Sparkles className="w-3 h-3 animate-pulse" aria-hidden="true" />
        <span>Creative side</span>
      </div>

      {/* Character Vector Stage */}
      <div className="relative w-full h-full max-w-[300px] flex items-end justify-center pt-8">
        <svg
          viewBox="0 0 280 230"
          fill="none"
          className="w-full h-full overflow-visible"
          aria-hidden="true"
        >
          {/* Soft halo glow behind character */}
          <circle
            cx="140"
            cy="135"
            r="80"
            fill="#7C3AED"
            fillOpacity="0.08"
            className="dark:fill-[#C084FC] dark:fill-opacity-10"
          />

          {/* Floating Stars / Sparkles */}
          <g className="animate-pulse">
            <path
              d="M72 118 L74 122 L78 124 L74 126 L72 130 L70 126 L66 124 L70 122 Z"
              fill="#7C3AED"
              opacity="0.65"
              className="dark:fill-[#C084FC]"
            />
            <path
              d="M246 95 L248 99 L252 101 L248 103 L246 107 L244 103 L240 101 L244 99 Z"
              fill="#7C3AED"
              opacity="0.75"
              className="dark:fill-[#C084FC]"
            />
          </g>

          {/* Shoulders & Torso */}
          <path
            d="M85 230 C85 190 110 178 140 178 C170 178 195 190 195 230 Z"
            fill="#7C3AED"
            className="dark:fill-[#A855F7]"
          />

          {/* Chic Collar / Neckline Accent */}
          <path
            d="M125 178 Q140 188 155 178"
            stroke="#FAF8F5"
            strokeWidth="2.5"
            fill="none"
            className="dark:stroke-[#0A0A0A]"
          />

          {/* Pendant Necklace */}
          <path
            d="M130 182 Q140 195 150 182"
            stroke="#DDD6FE"
            strokeWidth="1.2"
            fill="none"
            className="dark:stroke-[#E9D5FF]"
          />
          <circle cx="140" cy="195" r="2.2" fill="#C084FC" />

          {/* Neck */}
          <rect x="132" y="152" width="16" height="28" rx="5" fill="#F6CFB5" />
          <ellipse cx="140" cy="158" rx="10" ry="3.5" fill="#E4AA86" opacity="0.45" />

          {/* Head & Face Group with Subtle Gentle Tilt Animation */}
          <motion.g
            animate={{ rotate: [-1.2, 1.8, -1.2], y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{ transformOrigin: "140px 160px" }}
          >
            {/* Top Bun */}
            <circle cx="140" cy="68" r="22" fill="#241B18" />

            {/* Floral Hairpin Accessory in Bun */}
            <circle
              cx="155"
              cy="70"
              r="5.5"
              fill="#7C3AED"
              className="dark:fill-[#C084FC]"
            />
            <circle cx="155" cy="70" r="2" fill="#FAF8F5" />

            {/* Back Hair Volume */}
            <path
              d="M112 115 C108 90 122 74 140 74 C158 74 172 90 168 115 C164 98 153 91 140 93 C127 91 116 98 112 115 Z"
              fill="#241B18"
            />

            {/* Face Oval Base */}
            <path
              d="M115 115 C115 85 165 85 165 115 C165 148 148 162 140 162 C132 162 115 148 115 115 Z"
              fill="#FADBC8"
              stroke="#E8BBA0"
              strokeWidth="0.8"
            />

            {/* Soft Cheeks Blush */}
            <ellipse cx="125" cy="132" rx="6.5" ry="3.5" fill="#F87171" opacity="0.35" />
            <ellipse cx="155" cy="132" rx="6.5" ry="3.5" fill="#F87171" opacity="0.35" />

            {/* Smiling Eyes */}
            <path
              d="M123 123 Q129 116 135 123"
              stroke="#231A16"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M145 123 Q151 116 157 123"
              stroke="#231A16"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Playful Eyelash */}
            <path
              d="M157 122 L160 119"
              stroke="#231A16"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            {/* Eyebrows */}
            <path
              d="M122 115 Q129 111 135 114"
              stroke="#382C26"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M145 114 Q151 111 158 115"
              stroke="#382C26"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />

            {/* Cute Nose */}
            <path
              d="M140 125 Q142 130 139 131"
              stroke="#D99B7E"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />

            {/* Warm Happy Smile */}
            <path
              d="M132 139 Q140 148 148 139"
              stroke="#BE123C"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M133 139 Q140 146 147 139 Z"
              fill="#F43F5E"
              opacity="0.85"
            />

            {/* Subtle Smile Dimples */}
            <path
              d="M130 138 Q131 140 130 141"
              stroke="#BE123C"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M150 138 Q149 140 150 141"
              stroke="#BE123C"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            {/* Ears & Purple Drop Earrings */}
            <ellipse cx="114" cy="123" rx="4" ry="6.5" fill="#FADBC8" />
            <ellipse cx="166" cy="123" rx="4" ry="6.5" fill="#FADBC8" />
            <circle
              cx="114"
              cy="132"
              r="2.5"
              fill="#7C3AED"
              className="dark:fill-[#C084FC]"
            />
            <circle
              cx="166"
              cy="132"
              r="2.5"
              fill="#7C3AED"
              className="dark:fill-[#C084FC]"
            />

            {/* Hair Tendrils Framing Face */}
            <path
              d="M113 108 C111 128 114 140 117 147 C116 138 116 124 116 110 Z"
              fill="#241B18"
            />
            <path
              d="M167 108 C169 128 166 140 163 147 C164 138 164 124 164 110 Z"
              fill="#241B18"
            />

            {/* Side-swept Front Bangs */}
            <path
              d="M118 98 Q133 106 144 100 Q156 104 162 98 C156 90 126 88 118 98 Z"
              fill="#302420"
            />

            {/* Hair Gloss Highlight */}
            <path
              d="M129 80 Q140 77 151 80"
              stroke="#4A3B35"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
          </motion.g>

          {/* Arm Leading to Waving Hand */}
          <path
            d="M185 200 Q205 175 212 142"
            stroke="#FADBC8"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
          />
          {/* Sleeve Cuff */}
          <path
            d="M182 198 Q194 204 200 190"
            stroke="#7C3AED"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            className="dark:stroke-[#A855F7]"
          />

          {/* Animated Waving Hand */}
          <motion.g
            animate={{
              rotate: [0, 18, -6, 18, -4, 12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: "easeInOut",
              repeatDelay: 0.8,
            }}
            style={{ transformOrigin: "212px 142px" }}
          >
            {/* Palm */}
            <ellipse cx="220" cy="128" rx="9.5" ry="11.5" fill="#FADBC8" />

            {/* 4 Extended Fingers */}
            <rect x="212" y="108" width="4.2" height="15" rx="2.1" fill="#FADBC8" />
            <rect x="218" y="104" width="4.2" height="17" rx="2.1" fill="#FADBC8" />
            <rect x="224" y="106" width="4.2" height="16" rx="2.1" fill="#FADBC8" />
            <rect x="230" y="111" width="4.2" height="13" rx="2.1" fill="#FADBC8" />

            {/* Thumb */}
            <path
              d="M212 128 Q204 124 206 118 Q209 116 214 122 Z"
              fill="#FADBC8"
            />

            {/* Motion Wave Accents */}
            <path
              d="M238 106 Q244 112 240 120"
              stroke="#7C3AED"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
              className="dark:stroke-[#C084FC]"
            />
            <path
              d="M243 110 Q248 115 245 122"
              stroke="#7C3AED"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
              opacity="0.4"
              className="dark:stroke-[#C084FC]"
            />
          </motion.g>
        </svg>
      </div>
    </div>
  );
}
