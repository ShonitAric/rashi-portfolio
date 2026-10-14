"use client";

import React from "react";
import { useModeTheme } from "@/context/ModeThemeContext";
import { Hero } from "@/components/work/Hero";
import { SelectedWork } from "@/components/work/SelectedWork";
import { TheWayIWork } from "@/components/work/TheWayIWork";
import { Articles } from "@/components/work/Articles";
import { Testimonials } from "@/components/work/Testimonials";
import { BeyondWorkInvite } from "@/components/work/BeyondWorkInvite";
import { Contact } from "@/components/work/Contact";
import { BeyondWorkView } from "@/components/beyond/BeyondWorkView";

export default function HomePage() {
  const { mode } = useModeTheme();

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen focus:outline-none">
      {mode === "work" ? (
        <>
          {/* 01 HERO */}
          <Hero />

          {/* 02 SELECTED WORK */}
          <SelectedWork />

          {/* 03 THE WAY I WORK (Who I Am & What Drives My Craft + Core Skills Ticker + CTA to /about) */}
          <TheWayIWork />

          {/* 04 PUBLISHED ARTICLES (Medium: Crisp cards with cover visuals, short summaries, dates) */}
          <Articles />

          {/* 05 TESTIMONIALS (Interactive showcase: verified partners, no stars, real roles) */}
          <Testimonials />

          {/* 06 BEYOND WORK INVITATION */}
          <BeyondWorkInvite />

          {/* 07 CONTACT */}
          <Contact />
        </>
      ) : (
        /* BEYOND WORK STUDIO EXPERIENCE (Includes Section 05: The Return & Contact) */
        <BeyondWorkView />
      )}
    </main>
  );
}
