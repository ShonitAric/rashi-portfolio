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
        {/* Balanced two-column hero with expressive typography & tactile craft mosaic */}
        {/* ========================================================= */}
        <section aria-label="Hero Introduction" className="pt-2 sm:pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Expressive Typography & Clear Navigation */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#5A6F4E]/10 text-[#47573E] border border-[#5A6F4E]/25 dark:bg-[#B4C49F]/15 dark:text-[#C8D6B6] dark:border-[#B4C49F]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#D4801C] dark:text-[#F0AC52]" aria-hidden="true" />
                <span>THE OTHER SIDE OF ME · BEYOND WORK</span>
              </div>

              {/* Expressive Editorial Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-serif italic text-[#3E2F24] dark:text-[#F2EAE1] tracking-tight leading-[1.06]">
                  Hello from the <br />
                  <span className="font-sans font-black not-italic uppercase tracking-tight text-[#5A6F4E] dark:text-[#B4C49F]">
                    other side.
                  </span>
                </h1>
                <p className="text-lg sm:text-2xl md:text-3xl font-serif italic text-[#594235] dark:text-[#D9CEBF]">
                  &ldquo;A little less structure. A lot more me.&rdquo;
                </p>
              </div>

              {/* Concise Introduction */}
              <p className="text-sm sm:text-base text-[#6A5E54] dark:text-[#A89F95] max-w-xl font-normal leading-relaxed">
                A dancer, a maker, and a collector of hobbies. Welcome to everything that happens when I&apos;m not designing digital experiences.
              </p>

              {/* Primary Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#things-that-make-me-me"
                  className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full bg-[#B66B14] hover:bg-[#97560B] text-white dark:bg-[#F0AC52] dark:hover:bg-[#E59E40] dark:text-[#1F1710] text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:scale-105 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B66B14] motion-reduce:transform-none"
                >
                  <span>EXPLORE BEYOND WORK</span>
                  <ChevronDown className="w-4 h-4 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={() => setMode("work")}
                  className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-full border border-[#E8DFC8] dark:border-[#2D2620] text-xs font-mono font-semibold uppercase tracking-wider text-[#3E2F24] dark:text-[#F2EAE1] hover:bg-black/5 dark:hover:bg-white/5 transition-all focus-visible:ring-2 focus-visible:outline-none"
                >
                  <span>Work Mode</span>
                  <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Right Column: High-Resolution Beyond Hero Visual */}
            <div className="lg:col-span-5">
              <BeyondHeroVisual />
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8DFC8] dark:border-[#2D2620] pb-5">
            <div className="max-w-xl space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#5A6F4E] dark:text-[#B4C49F] font-bold">
                02 / PERSONAL PURSUITS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-[#3E2F24] dark:text-[#F2EAE1]">
                Things that make me,{" "}
                <span className="font-sans font-black not-italic uppercase tracking-tight text-[#5A6F4E] dark:text-[#B4C49F]">
                  ME.
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-[#6A5E54] dark:text-[#A89F95]">
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 hover:bg-black/10 dark:bg-[#141416] dark:hover:bg-[#1C1C20] text-[#3E2F24] dark:text-[#F2EAE1] text-[11px] font-mono font-bold tracking-wider uppercase transition-all border border-[#E8DFC8] dark:border-[#2D2620] hover:scale-105 focus-visible:ring-2 focus-visible:outline-none"
              >
                <span className="text-[#81B64C]" aria-hidden="true">♟</span>
                <span>Chess.com: @{CHESS_CONFIG.username} ↗</span>
              </a>
              <a
                href={INSTAGRAM_CONFIG.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram profile ${INSTAGRAM_CONFIG.handle} (opens in a new tab)`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D4801C]/10 hover:bg-[#D4801C]/20 text-[#B66B14] dark:bg-[#F0AC52]/15 dark:hover:bg-[#F0AC52]/25 dark:text-[#F0AC52] text-[11px] font-mono font-bold tracking-wider uppercase transition-all border border-[#D4801C]/30 dark:border-[#F0AC52]/35 hover:scale-105 focus-visible:ring-2 focus-visible:outline-none"
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
          className="pt-4 border-t border-[#E8DFC8] dark:border-[#2D2620]"
        >
          <div className="rounded-3xl border border-[#E8DFC8] dark:border-[#2D2620] bg-white dark:bg-[#1A1613] p-7 sm:p-10 lg:p-12 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
              <div className="max-w-xl space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#5A6F4E] dark:text-[#B4C49F] font-bold">
                  03 / CLOSING
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-[#3E2F24] dark:text-[#F2EAE1]">
                  Enough about my other side?
                </h2>
                <p className="text-sm sm:text-base text-[#6A5E54] dark:text-[#A89F95]">
                  There&apos;s a whole other world where I craft digital systems and product strategy.
                </p>
              </div>

              {/* Two Clear Responsive Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                <button
                  type="button"
                  onClick={() => setMode("work")}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#3E2F24] hover:bg-[#2A1F17] text-[#FAF7F2] dark:bg-[#F2EAE1] dark:text-[#2A1F17] dark:hover:bg-[#E5A54B] font-bold text-xs font-mono uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-md focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  <span>BACK TO WORK</span>
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                </button>

                <a
                  href="mailto:divyarashi45@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#E8DFC8] dark:border-[#2D2620] hover:bg-[#D4801C]/10 hover:border-[#D4801C]/40 text-[#3E2F24] dark:text-[#F2EAE1] font-bold text-xs font-mono uppercase tracking-wider transition-colors focus-visible:ring-2"
                >
                  <span>SAY HELLO</span>
                  <Mail className="w-4 h-4" aria-hidden="true" />
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
      className="group h-full rounded-2xl bg-[#FFFFFF] dark:bg-[#141416] border border-[#E8DFC8] dark:border-[#2D2620] p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3.5"
    >
      {/* Top Tag & Counter */}
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="font-bold text-[#5A6F4E] dark:text-[#B4C49F] uppercase tracking-wider text-[11px]">
          {tag}
        </span>
        <span className="text-[#6A5E54] dark:text-[#A89F95] text-[10px] uppercase font-mono">
          {activeIdx + 1} / {total}
        </span>
      </div>

      {/* Main Image Stage (Aspect 4:3, Compact & Balanced) */}
      <div className="space-y-2.5">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/10 dark:bg-black/60 border border-[#E8DFC8] dark:border-[#2D2620] shadow-xs select-none">
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
            className="absolute left-2 top-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-full bg-black/65 hover:bg-black/90 text-white backdrop-blur-xs transition-all opacity-85 hover:opacity-100 hover:scale-110 shadow-md focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Next Arrow Control */}
          <button
            type="button"
            onClick={handleNext}
            aria-label={`Next ${title} photo`}
            className="absolute right-2 top-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-full bg-black/65 hover:bg-black/90 text-white backdrop-blur-xs transition-all opacity-85 hover:opacity-100 hover:scale-110 shadow-md focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none z-10"
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
                className={`relative flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden transition-all duration-200 border focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-[#D4801C] dark:focus-visible:ring-[#F0AC52] ${
                  isSelected
                    ? "border-2 border-[#D4801C] ring-2 ring-[#D4801C]/40 dark:border-[#F0AC52] dark:ring-[#F0AC52]/40 scale-105 shadow-xs z-10"
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
      <div className="pt-2 border-t border-[#E8DFC8] dark:border-[#2D2620] space-y-1">
        <h3 className="text-xl sm:text-2xl font-serif italic text-[#3E2F24] dark:text-[#F2EAE1] tracking-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-[#6A5E54] dark:text-[#A89F95] leading-relaxed">
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
      className="rounded-2xl border border-[#E8DFC8] dark:border-[#2D2620] bg-gradient-to-r from-[#FAF6EE] via-[#F5EEDF] to-[#ECE2CF] dark:from-[#1C1815] dark:via-[#231E19] dark:to-[#1C1815] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"
    >
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#594235] via-[#A86424] to-[#D4801C] dark:from-[#3E2F24] dark:via-[#B66B14] dark:to-[#F0AC52] text-white flex items-center justify-center shadow-xs flex-shrink-0">
          <Instagram className="w-5 h-5" aria-hidden="true" />
        </div>
        <div>
          <span className="font-serif italic font-bold text-base sm:text-lg text-[#3E2F24] dark:text-[#F2EAE1] block leading-tight">
            {INSTAGRAM_CONFIG.promptText}
          </span>
          <p className="text-xs font-mono text-[#6A5E54] dark:text-[#A89F95]">
            Resin jewelry, botanical drops &amp; paintings on {INSTAGRAM_CONFIG.handle}
          </p>
        </div>
      </div>

      <a
        href={INSTAGRAM_CONFIG.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Explore my art on Instagram (opens in new tab)"
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#594235] hover:bg-[#3E2F24] text-[#FAF7F2] dark:bg-[#F2EAE1] dark:hover:bg-[#E5A54B] dark:text-[#2A1F17] text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:scale-105 focus-visible:ring-2 flex-shrink-0"
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
      className="group h-full rounded-2xl bg-[#FFFFFF] dark:bg-[#141416] border border-[#E8DFC8] dark:border-[#2D2620] p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
    >
      <div className="space-y-3.5">
        {/* Top Tag & Decorative Header */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="font-bold text-[#5A6F4E] dark:text-[#B4C49F] uppercase tracking-wider text-[11px]">
            MOVEMENT · ENDURANCE
          </span>
          <span className="text-[10px] text-[#6A5E54]/70 dark:text-[#A89F95]/70 font-mono">Outdoor Trails</span>
        </div>

        {/* Minimal Running Track & Route Illustration */}
        <div className="h-24 w-full rounded-xl bg-[#FAF8F5] dark:bg-[#0E0E10] border border-[#E8DFC8] dark:border-[#2D2620] overflow-hidden relative flex items-center justify-center p-3 select-none">
          <svg
            viewBox="0 0 280 80"
            fill="none"
            className="w-full h-full overflow-visible"
            aria-hidden="true"
          >
            {/* Outer track loop */}
            <path
              d="M30 40 C30 20 60 16 110 20 C160 24 200 16 230 24 C255 30 255 52 230 58 C195 66 140 56 100 60 C55 64 30 55 30 40 Z"
              stroke="#E8DFC8"
              strokeWidth="4"
              strokeLinecap="round"
              className="dark:stroke-[#2D2620]"
            />
            {/* Inner dynamic route path */}
            <path
              d="M30 40 C30 20 60 16 110 20 C160 24 200 16 230 24 C255 30 255 52 230 58 C195 66 140 56 100 60 C55 64 30 55 30 40 Z"
              stroke="#D4801C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 6"
              className="dark:stroke-[#F0AC52] group-hover:stroke-[#FC4C02] transition-colors"
            />
            {/* Start Waypoint Marker */}
            <circle cx="30" cy="40" r="5" fill="#D4801C" className="dark:fill-[#F0AC52]" />
            <circle cx="30" cy="40" r="8" stroke="#D4801C" strokeWidth="1.2" opacity="0.4" className="dark:stroke-[#F0AC52]" />

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
          <h3 className="text-xl sm:text-2xl font-serif italic text-[#3E2F24] dark:text-[#F2EAE1] tracking-tight">
            Running &amp; Fitness
          </h3>
          <p className="text-xs sm:text-sm text-[#6A5E54] dark:text-[#A89F95] leading-relaxed">
            &ldquo;Chasing challenges, one run at a time.&rdquo;
          </p>
        </div>
      </div>

      {/* Strava External CTA */}
      <div className="pt-2 border-t border-[#E8DFC8] dark:border-[#2D2620]">
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
      className="group h-full rounded-2xl bg-[#FFFFFF] dark:bg-[#141416] border border-[#E8DFC8] dark:border-[#2D2620] p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
    >
      <div className="space-y-3.5">
        {/* Top Tag & Header */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="font-bold text-[#3E2F24] dark:text-[#F2EAE1] uppercase tracking-wider text-[11px]">
            STRATEGY · 64 SQUARES
          </span>
          <span className="text-[10px] text-[#81B64C] dark:text-[#A3E06C] font-mono flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#81B64C] animate-pulse" />
            @{CHESS_CONFIG.username}
          </span>
        </div>

        {/* Decorative Chessboard & Knight Graphic */}
        <div className="h-24 w-full rounded-xl bg-[#FAF8F5] dark:bg-[#0E0E10] border border-[#E8DFC8] dark:border-[#2D2620] overflow-hidden relative flex items-center justify-center p-3 select-none">
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
              <span className="text-xs font-mono font-bold text-[#3E2F24] dark:text-[#E8DFC8] block">The Knight</span>
              <span className="text-[10px] font-mono text-[#6A5E54]/70 dark:text-[#A89F95]/70 block">Tactical Lines</span>
            </div>
          </div>
        </div>

        {/* Title & Concise Copy */}
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-serif italic text-[#3E2F24] dark:text-[#F2EAE1] tracking-tight">
            Chess
          </h3>
          <p className="text-xs sm:text-sm text-[#6A5E54] dark:text-[#A89F95] leading-relaxed">
            &ldquo;One more game. Famous last words.&rdquo;
          </p>
        </div>
      </div>

      {/* Chess.com External CTA */}
      <div className="pt-2 border-t border-[#E8DFC8] dark:border-[#2D2620]">
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
      className="group h-full rounded-2xl bg-[#FFFFFF] dark:bg-[#141416] border border-[#E8DFC8] dark:border-[#2D2620] p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
    >
      <div className="space-y-3.5">
        {/* Top Tag & Header */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="font-bold text-[#5A6F4E] dark:text-[#B4C49F] uppercase tracking-wider text-[11px]">
            LIVING BOTANY · FOLIAGE
          </span>
          <span className="text-[10px] text-[#6A5E54]/70 dark:text-[#A89F95]/70 font-mono">Propagation</span>
        </div>

        {/* Ambient Animated Potted Plant SVG Illustration */}
        <div className="h-24 w-full rounded-xl bg-gradient-to-b from-[#F3F6F0] to-[#E9EFE4] dark:from-[#151A13] dark:to-[#0F140D] border border-[#5A6F4E]/25 dark:border-[#2D2620] overflow-hidden relative flex items-center justify-center p-2 select-none">
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
            <path d="M100 52 Q99 36 100 18" stroke="#5A6F4E" strokeWidth="2.5" strokeLinecap="round" />

            {/* Left Monstera Leaf with Gentle Sway Animation */}
            <g className="origin-bottom-right animate-[gentleSwayLeft_4.5s_ease-in-out_infinite] motion-reduce:animate-none">
              <path
                d="M100 36 C86 28 68 36 72 50 C74 55 82 56 86 52 C88 50 87 47 84 48 C81 48 80 45 80 42 C82 38 86 37 90 41 C92 43 95 43 96 40 C96 37 94 36 100 36 Z"
                fill="#748C65"
                stroke="#47573E"
                strokeWidth="1"
              />
              <circle cx="78" cy="45" r="1.2" fill="#E8EFE3" />
            </g>

            {/* Right Monstera Leaf with Gentle Sway Animation */}
            <g className="origin-bottom-left animate-[gentleSwayRight_4s_ease-in-out_infinite] motion-reduce:animate-none">
              <path
                d="M100 30 C114 20 132 28 128 42 C126 47 118 48 114 44 C112 42 113 39 116 40 C119 40 120 37 120 34 C118 30 114 29 110 33 C108 35 105 35 104 32 C104 29 106 28 100 30 Z"
                fill="#5A6F4E"
                stroke="#3E4C36"
                strokeWidth="1"
              />
              <circle cx="122" cy="38" r="1.2" fill="#E8EFE3" />
            </g>

            {/* Towering Crown Sprout */}
            <g className="origin-bottom animate-[gentleSwayCenter_5s_ease-in-out_infinite] motion-reduce:animate-none">
              <path
                d="M100 18 C92 8 90 2 100 0 C110 2 108 8 100 18 Z"
                fill="#8FA87E"
                stroke="#5A6F4E"
                strokeWidth="1"
              />
            </g>
          </svg>
        </div>

        {/* Title & Concise Copy */}
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-serif italic text-[#3E2F24] dark:text-[#F2EAE1] tracking-tight">
            Plants &amp; Gardening
          </h3>
          <p className="text-xs sm:text-sm text-[#6A5E54] dark:text-[#A89F95] leading-relaxed">
            &ldquo;Growing a little green corner of my world.&rdquo;
          </p>
        </div>
      </div>

      {/* Decorative Botanical Status (Ambient / No click action needed) */}
      <div className="pt-2 border-t border-[#E8DFC8] dark:border-[#2D2620]">
        <div className="inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-xl bg-[#5A6F4E]/12 dark:bg-[#B4C49F]/15 text-[#47573E] dark:text-[#C8D6B6] text-xs font-mono font-bold tracking-wider uppercase select-none">
          <span>Always room for one more plant 🌱</span>
        </div>
      </div>
    </article>
  );
}

// ===================================================================
// BEYOND HERO VISUAL (RIGHT COLUMN OF HERO)
// Single high-resolution, editorial portrait capturing energy, dance,
// and joy in an elegant warm-framed presentation with 3D hover tilt.
// ===================================================================

function BeyondHeroVisual() {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      rotateX: -(y / (rect.height / 2)) * 4,
      rotateY: (x / (rect.width / 2)) * 4,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Rashi Chaurasia jumping in joy and dance outdoors"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: tilt.rotateX === 0 ? "transform 0.6s ease-out" : "transform 0.1s ease-out",
      }}
      className="relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-[#E8DFC8] dark:border-[#2D2620] bg-gradient-to-br from-[#F5EFE6] via-[#FAF7F2] to-[#EFE7DB] dark:from-[#1C1714] dark:via-[#14110F] dark:to-[#0D0B0A] p-3 sm:p-4 shadow-sm select-none group transition-all duration-300 will-change-transform"
    >
      {/* Warm Amber Radial Lighting Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(229,165,75,0.18),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_45%,rgba(240,172,82,0.15),transparent_70%)] pointer-events-none"
      />

      {/* High-Resolution Editorial Photo Plate */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white dark:border-[#221C18] shadow-xl bg-white dark:bg-[#1A1512]">
        <Image
          src="/images/beyond-hero.jpg"
          alt="Rashi Chaurasia jumping in joy, dance, and motion outdoors"
          fill
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 440px"
          className="object-cover object-center filter brightness-[1.01] contrast-[1.03] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}
