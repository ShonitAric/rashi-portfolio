"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowDown, CheckCircle2 } from "lucide-react";

export function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);

  // Photo 3D tilt state on hover
  const [photoTilt, setPhotoTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handlePhotoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPhotoTilt({
      rotateX: -(y / (rect.height / 2)) * 6,
      rotateY: (x / (rect.width / 2)) * 6,
    });
  };

  const handlePhotoMouseLeave = () => {
    setPhotoTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-500"
      aria-label="Introduction and positioning"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Positioning & Core Story (Cols 1-8) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 z-10">
            {/* Intro greeting & role label */}
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-50 text-[#0B513D] border border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B513D] dark:bg-emerald-400 animate-pulse" />
                <span className="font-mono">Hi, I&apos;m Rashi.</span>
              </div>
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-neutral-500 dark:text-neutral-400 font-mono">
                Product & UX Designer
              </p>
            </div>

            {/* Main Positioning Statement: Clean, Authoritative Editorial Typography */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-neutral-950 dark:text-neutral-50">
                <span>I make </span>
                <span className="italic font-serif font-normal text-neutral-950 dark:text-neutral-50">
                  complex
                </span>
                <span> things </span>
                <br className="hidden sm:inline" />
                <span>feel </span>
                <span className="font-black underline decoration-[#0B513D]/40 dark:decoration-emerald-400/40 decoration-4 underline-offset-4">
                  simple.
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl font-normal">
              7+ years across visual design, art direction and UX.
            </p>

            {/* Primary Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#selected-work"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#0B513D] text-white hover:bg-[#083B2C] dark:bg-[#10B981] dark:text-neutral-950 dark:hover:bg-[#34D399] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                <span>Explore Selected Work</span>
                <ArrowDown
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </a>

              <a
                href="#the-way-i-work"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 focus-visible:ring-2"
              >
                <span>The Way I Work</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Portrait with Split Lighting (Cols 9-12) */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-end">
            <div
              ref={photoRef}
              onMouseMove={handlePhotoMouseMove}
              onMouseLeave={handlePhotoMouseLeave}
              style={{
                transform: `perspective(900px) rotateX(${photoTilt.rotateX}deg) rotateY(${photoTilt.rotateY}deg)`,
                transition:
                  photoTilt.rotateX === 0
                    ? "transform 0.5s ease-out"
                    : "transform 0.1s ease-out",
              }}
              className="relative w-full max-w-[250px] sm:max-w-[270px] will-change-transform"
            >
              {/* Editorial Frame & Layering */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-neutral-900/10 dark:border-white/10 shadow-lg bg-neutral-100 dark:bg-neutral-800 group">
                <Image
                  src="/rashi-portfolio/images/rashi-hero.jpeg"
                  alt="Rashi Chaurasia, Product and UX Designer"
                  fill
                  priority
                  sizes="(max-width: 768px) 250px, 270px"
                  className="object-cover object-center transition-all duration-700 ease-editorial scale-100 group-hover:scale-105 brightness-95 group-hover:brightness-105 contrast-105 group-hover:contrast-110"
                />

                {/* Subtle Editorial Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-3.5 bg-gradient-to-t from-neutral-950/85 via-neutral-950/40 to-transparent text-white text-xs">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">
                    Rashi Chaurasia
                  </div>
                  <div className="font-sans font-medium text-neutral-200 text-[11px] leading-tight">
                    Bengaluru / Global · Product Designer
                  </div>
                </div>
              </div>

              {/* Craft annotation badge pinned to corner with subtle float */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -left-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1.5 text-[10px] font-mono font-semibold transition-transform duration-300 hover:scale-105"
              >
                <CheckCircle2 className="w-3 h-3 text-[#0B513D] dark:text-[#10B981]" />
                <span className="text-neutral-800 dark:text-neutral-200">
                  Craft × Systems
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
