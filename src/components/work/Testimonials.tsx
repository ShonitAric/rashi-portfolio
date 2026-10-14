"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MessageSquareQuote, ChevronLeft, ChevronRight, X, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  headline: string;
  relationship: string;
  date: string;
  avatar: string;
  snippet: string;
  paragraphs: string[];
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "laura-millar",
    name: "Laura Millar",
    headline: "User Experience | Customer Experience | Product Strategy | Enterprise Transformation Executive",
    relationship: "Chapter Area Leader",
    date: "August 13, 2026",
    avatar: "/images/testimonials/laura-millar.png",
    snippet:
      "I had the pleasure of working with Rashi and would highly recommend her. She is a talented designer with a strong eye for creating thoughtful, user-centered experiences, but what really sets her apart is how she works with others. She is a true team player who is always willing to collaborate and support her colleagues.",
    paragraphs: [
      "I had the pleasure of working with Rashi and would highly recommend her. She is a talented designer with a strong eye for creating thoughtful, user-centered experiences, but what really sets her apart is how she works with others. She is a true team player who is always willing to collaborate, support her colleagues, and contribute wherever needed.",
      "She genuinely cares about the quality of her work and takes pride in delivering well crafted solutions, while also creating a positive and supportive environment for those around her. Any team would be fortunate to have her, and I wouldn't hesitate to recommend her.",
    ],
  },
  {
    id: "jenn-joyal",
    name: "Jenn Joyal",
    headline: "Sr. UX Designer",
    relationship: "Collaborated for 3 years across design teams",
    date: "July 31, 2026",
    avatar: "/images/testimonials/jenn-joyal.png",
    snippet:
      "I had the pleasure of working with Rashi for the past three years, and she consistently impressed me with her creativity, passion, and positive attitude. Rashi brings innovation and fresh thinking to every project, arrives prepared, and consistently delivers thoughtful, high-quality work.",
    paragraphs: [
      "I had the pleasure of working with Rashi for the past three years, and she consistently impressed me with her creativity, passion, and positive attitude.",
      "Rashi brings innovation and fresh thinking to every project. She goes above and beyond expectations, arrives prepared, and consistently delivers thoughtful, high-quality work. Her attention to detail is exceptional, ensuring every aspect of the user experience is carefully considered and refined.",
      "Beyond her design expertise, Rashi is a highly collaborative teammate who fosters strong partnerships and helps elevate those around her. She is also committed to continuous growth, constantly expanding her knowledge and bringing new ideas and perspectives to the team.",
      "Any team would be lucky to have Rashi. Her dedication, creativity, and positive energy make her not only an exceptional designer but also a wonderful colleague to work alongside.",
    ],
  },
  {
    id: "vaidyanathan-krishnamoorthy",
    name: "Vaidyanathan Krishnamoorthy",
    headline: "Technology Product Manager | AI/ML Practitioner | AML | KYC/CDD | Fraud Surveillance | CIAM | Digital Transformation",
    relationship: "Client during the GEM Modernization program",
    date: "May 10, 2026",
    avatar: "/images/testimonials/vaidyanathan-krishnamoorthy.png",
    snippet:
      "I had the pleasure of working with Rashi during the GEM Modernization program, where she made a stellar contribution as a UX Designer. Rashi went above and beyond her role by taking ownership of the UXD track and leading it with clarity, confidence, and a strong user-first mindset.",
    paragraphs: [
      "I had the pleasure of working with Rashi during the GEM Modernization program, where she made a stellar contribution as a UX Designer.",
      "Rashi went above and beyond her role by taking ownership of the UXD track and leading it with clarity, confidence, and a strong user-first mindset. She worked closely with stakeholders to understand the business process in depth, ensuring the design approach was aligned with both user needs and business objectives.",
      "One of her key strengths was her ability to analyze user flows through heuristic analysis, identifying usability gaps, friction points, and areas of improvement. This structured approach helped shape a more intuitive and effective user experience.",
      "Rashi designed an end-to-end UXD for the program with clear focus on accessibility, usability, and creating a frictionless experience. Her attention to detail, collaborative approach, and commitment to quality made a significant impact on the overall modernization journey. I would highly recommend her to any team looking for a passionate UX professional.",
    ],
  },
  {
    id: "segille-jones",
    name: "Segille Jones",
    headline: "Process Engineering Lead at Fidelity Investments",
    relationship: "Partnered on high-profile enterprise initiative at Fidelity",
    date: "September 23, 2024",
    avatar: "/images/testimonials/segille-jones.png",
    snippet:
      "I had the privilege of partnering with Rashi on a high-profile project and can confidently say that I'd choose to work with Rashi again ANY time - she was the utmost professional, creative, supportive and worked tirelessly to bring the ideas of the end users to life through outstanding graphics and designs!",
    paragraphs: [
      "I had the privilege of partnering with Rashi Chaurasia on a high-profile project and can confidently say that I'd choose to work with Rashi again ANY time - she was the utmost professional, creative, supportive and worked tirelessly to bring the ideas of the end users to life through outstanding graphics and designs!",
      "Rashi's skill in interpreting what her end user described and turning it into EXACTLY what they wanted through UXD was beyond impressive! I'd recommend Rashi to anyone looking for an incredible teammate who works hard, listens intently, and brings joy into any room she's in!",
    ],
  },
  {
    id: "alaka",
    name: "Alaka",
    headline: "System Engineer @ Fidelity Investments | AWS Certified Solutions Architect | DevOps",
    relationship: "Worked across squads at Fidelity Investments",
    date: "February 8, 2025",
    avatar: "/images/testimonials/alaka.png",
    snippet:
      "Working with Rashi has been an absolute pleasure. Her ability to blend creativity with user-centric design is truly impressive. She has a keen eye for detail, a deep understanding of user behaviour, and a knack for turning complex ideas into intuitive experiences.",
    paragraphs: [
      "Working with Rashi has been an absolute pleasure. Her ability to blend creativity with user-centric design is truly impressive.",
      "She has a keen eye for detail, a deep understanding of user behaviour, and a knack for turning complex ideas into intuitive experiences. Any team would be lucky to have Rashi on board!",
    ],
  },
];

export function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);
  const lastActiveTriggerRef = useRef<HTMLElement | null>(null);

  // Accessible focus restoration when lightbox modal opens/closes
  useEffect(() => {
    if (selectedTestimonial) {
      setTimeout(() => {
        modalCloseRef.current?.focus();
      }, 50);
    } else if (lastActiveTriggerRef.current) {
      lastActiveTriggerRef.current.focus();
    }
  }, [selectedTestimonial]);

  // Responsive: 3 on desktop, 2 on tablet, 1 on mobile
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - cardsPerView);

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedTestimonial) {
        if (e.key === "Escape") {
          setSelectedTestimonial(null);
        }
        return;
      }
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [maxIndex, selectedTestimonial]);

  // Card Width & Translation Calculations for Static 3-in-View Carousel
  const getCardStyle = () => {
    if (cardsPerView === 1) return { width: "100%" };
    if (cardsPerView === 2) return { width: "calc((100% - 20px) / 2)" };
    return { width: "calc((100% - 40px) / 3)" };
  };

  const getTranslateStyle = () => {
    if (cardsPerView === 1) {
      return `translateX(calc(-${startIndex} * (100% + 20px)))`;
    }
    if (cardsPerView === 2) {
      return `translateX(calc(-${startIndex} * ((100% - 20px) / 2 + 20px)))`;
    }
    return `translateX(calc(-${startIndex} * ((100% - 40px) / 3 + 20px)))`;
  };

  return (
    <section
      id="testimonials"
      className="py-12 md:py-16 border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-500 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
        {/* Compact Header: Title + Toggle Motion & Left/Right Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#0B513D] dark:text-[#10B981]">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>Recommendations · LinkedIn</span>
            </div>
            <h2
              id="testimonials-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 uppercase leading-none"
            >
              Collaborative Impact
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-normal">
              Direct recommendations from design leaders, product managers, and engineering peers.
            </p>
          </div>

          {/* Controls: Left/Right Buttons */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous recommendations"
              className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-100 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:outline-none"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next recommendations"
              className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-100 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:outline-none"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Recommendations from colleagues and leaders"
          className="relative overflow-hidden"
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-5"
            style={{
              transform: getTranslateStyle(),
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-label={`Read full recommendation letter from ${t.name}, ${t.relationship}`}
                onClick={(e) => {
                  lastActiveTriggerRef.current = e.currentTarget;
                  setSelectedTestimonial(t);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    lastActiveTriggerRef.current = e.currentTarget;
                    setSelectedTestimonial(t);
                  }
                }}
                style={getCardStyle()}
                className="flex-shrink-0 flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-200/90 dark:border-neutral-800/90 hover:border-[#0B513D] dark:hover:border-emerald-500 shadow-sm hover:shadow-md transition-all cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B513D] dark:focus-visible:ring-[#10B981]"
              >
                <div className="space-y-3.5">
                  {/* Header */}
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-neutral-200 dark:ring-neutral-700 shadow-sm">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-sm sm:text-base text-neutral-950 dark:text-neutral-50 truncate group-hover:text-[#0B513D] dark:group-hover:text-[#10B981] transition-colors">
                          {t.name}
                        </h3>
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-[#0A66C2] text-white text-[9px] font-bold flex-shrink-0">
                          in
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate">
                        {t.headline}
                      </p>
                    </div>
                  </div>

                  {/* Relationship Pill */}
                  <div>
                    <span className="inline-block max-w-full text-[10px] font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800/60 truncate font-medium">
                      {t.relationship}
                    </span>
                  </div>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal line-clamp-4">
                    &ldquo;{t.snippet}&rdquo;
                  </p>
                </div>

                {/* Read More Footer */}
                <div className="pt-4 mt-4 border-t border-neutral-200/70 dark:border-neutral-800/70 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#0B513D] dark:text-[#10B981] font-bold group-hover:underline underline-offset-4 flex items-center gap-1">
                    <span>Read full</span>
                    <span>→</span>
                  </span>
                  <span className="text-neutral-400 text-[11px]">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step Indicator & Hint */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setStartIndex(idx)}
                aria-label={`Jump to slide ${idx + 1}`}
                aria-current={startIndex === idx ? "true" : undefined}
                className={`transition-all duration-300 rounded-full focus-visible:ring-2 focus-visible:outline-none ${
                  startIndex === idx
                    ? "w-6 h-2 bg-[#0B513D] dark:bg-[#10B981]"
                    : "w-2 h-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600"
                }`}
              />
            ))}
          </div>

          <span className="font-mono text-[11px] text-neutral-400 hidden sm:inline">
            Click any card to read complete letter of recommendation
          </span>
        </div>
      </div>

      {/* Expandable Lightbox Modal */}
      {selectedTestimonial && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-author-name"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              ref={modalCloseRef}
              type="button"
              onClick={() => setSelectedTestimonial(null)}
              aria-label="Close recommendation"
              className="absolute top-5 right-5 p-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 sm:gap-5 pr-8">
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-neutral-200 dark:ring-neutral-700 shadow-sm">
                <Image
                  src={selectedTestimonial.avatar}
                  alt={selectedTestimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3
                    id="modal-author-name"
                    className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-neutral-50"
                  >
                    {selectedTestimonial.name}
                  </h3>
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-[#0A66C2] text-white text-[10px] font-bold">
                    in
                  </span>
                  <span className="text-xs font-mono text-neutral-400">· 1st</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-snug">
                  {selectedTestimonial.headline}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px] text-neutral-500">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-[#0B513D] dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 font-medium">
                    {selectedTestimonial.relationship}
                  </span>
                  <span>·</span>
                  <span>{selectedTestimonial.date}</span>
                </div>
              </div>
            </div>

            {/* Quote Body */}
            <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 space-y-4">
              <Quote className="w-7 h-7 text-[#0B513D]/30 dark:text-emerald-400/30" />
              <div className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-normal leading-relaxed">
                {selectedTestimonial.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="inline-flex items-center gap-1.5 text-[#0B513D] dark:text-[#10B981] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B513D] dark:bg-[#10B981]" />
                Verified LinkedIn Recommendation
              </span>
              <button
                type="button"
                onClick={() => setSelectedTestimonial(null)}
                className="px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
