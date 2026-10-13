"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  BookOpen,
  Palette,
  Check,
  Copy,
  Download,
  Send,
  MessageSquare,
  Sparkles,
  RotateCcw,
  Linkedin,
} from "lucide-react";
import { useModeTheme } from "@/context/ModeThemeContext";

export function Contact() {
  const { mode } = useModeTheme();
  const isWork = mode === "work";
  const [copied, setCopied] = useState(false);

  // Leave Me a Note form state
  const [senderEmail, setSenderEmail] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [noteCopied, setNoteCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("divyarashi45@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyNote = () => {
    const textToCopy = `To: divyarashi45@gmail.com\nFrom: ${senderEmail}\n\nNote:\n${noteContent}`;
    navigator.clipboard.writeText(textToCopy);
    setNoteCopied(true);
    setTimeout(() => setNoteCopied(false), 2500);
  };

  const buildMailtoUrl = (email: string, note: string) => {
    const subject = encodeURIComponent(
      `Note from Portfolio: ${email ? email : "Visitor"}`
    );
    const body = encodeURIComponent(
      `${note}\n\n—\nSent via Portfolio Note from: ${email || "Not specified"}`
    );
    return `mailto:divyarashi45@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmitNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteContent.trim()) {
      setValidationError("Please write a quick note before sending.");
      return;
    }
    if (!senderEmail.trim() || !senderEmail.includes("@")) {
      setValidationError("Please provide a valid email so I can reply back.");
      return;
    }

    setValidationError("");
    const mailtoUrl = buildMailtoUrl(senderEmail.trim(), noteContent.trim());
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  const handleResetNote = () => {
    setSenderEmail("");
    setNoteContent("");
    setIsSubmitted(false);
    setValidationError("");
    setNoteCopied(false);
  };

  const channels = [
    {
      label: "Email",
      value: "divyarashi45@gmail.com",
      href: "mailto:divyarashi45@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/rashi-chaurasia",
      href: "https://www.linkedin.com/in/rashi-chaurasia-21959317b/",
      icon: Linkedin,
    },
    {
      label: "Medium",
      value: "medium.com/@divyarashi45",
      href: "https://medium.com/@divyarashi45",
      icon: BookOpen,
    },
    {
      label: "Behance",
      value: "behance.net/divyarashi",
      href: "https://www.behance.net/divyarashi",
      icon: Palette,
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 md:py-16 transition-colors duration-500 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-7 sm:p-9 md:p-11 rounded-3xl border border-neutral-200/90 dark:border-neutral-800/90 bg-neutral-50/70 dark:bg-neutral-900/60 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column (Cols 1-6): Heading, Direct Email, Download Resume, Social Links */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <div
                  className={`inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest ${
                    isWork
                      ? "text-[#0B513D] dark:text-[#10B981]"
                      : "text-[#6D28D9] dark:text-[#C084FC]"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>04 / Contact &amp; Collaborate</span>
                </div>

                <h2
                  id="contact-heading"
                  className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 uppercase leading-tight"
                >
                  Got a problem worth <br />
                  <span
                    className={`font-serif italic font-normal ${
                      isWork
                        ? "text-[#0B513D] dark:text-emerald-400"
                        : "text-[#6D28D9] dark:text-[#C084FC]"
                    }`}
                  >
                    getting obsessed with?
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-xl">
                  Open for product design leadership, complex enterprise architectures, and meaningful collaborations.
                </p>
              </div>

              {/* Action Buttons: Direct Email Copy & Download Resume */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                {/* Screen reader live notification for copy actions */}
                <span className="sr-only" aria-live="polite" role="status">
                  {copied ? "Email address copied to clipboard" : ""}
                  {noteCopied ? "Note copied to clipboard" : ""}
                </span>

                {/* Email Address with Copy Trigger */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-mono text-neutral-800 dark:text-neutral-200 hover:border-[#0B513D] dark:hover:border-emerald-500 transition-colors shadow-xs focus-visible:ring-2 focus-visible:outline-none"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-300 font-semibold">
                        Copied to Clipboard!
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span>divyarashi45@gmail.com</span>
                    </>
                  )}
                </button>

                {/* Prominent Download Resume Button */}
                <a
                  href="/resume/Rashi_Chaurasia_Resume.pdf"
                  download="Rashi_Chaurasia_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Resume PDF (opens in new tab)"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-xs hover:scale-105 focus-visible:ring-2 ${
                    isWork
                      ? "border-[#0B513D]/30 bg-[#0B513D]/10 hover:bg-[#0B513D]/20 text-[#0B513D] dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 dark:text-emerald-300"
                      : "border-[#7C3AED]/30 bg-[#7C3AED]/10 hover:bg-[#7C3AED]/20 text-[#6D28D9] dark:border-[#C084FC]/30 dark:bg-[#A855F7]/10 dark:hover:bg-[#A855F7]/20 dark:text-[#C084FC]"
                  }`}
                >
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>

              {/* Social Channels & Turnaround Notice */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 font-medium">
                  Find me on:
                </span>
                <div className="flex items-center gap-2">
                  {channels.slice(1).map((ch) => (
                    <a
                      key={ch.label}
                      href={ch.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${ch.label} profile (opens in a new tab)`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-all text-xs font-mono focus-visible:ring-2 focus-visible:outline-none"
                    >
                      <ch.icon className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{ch.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Cols 7-12): "Leave Me a Note" Section */}
            <div className="lg:col-span-6 w-full">
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141416] p-6 sm:p-7 shadow-xs">
                {/* Note Header */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800/80">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isWork
                          ? "bg-[#0B513D]/10 text-[#0B513D] dark:bg-emerald-500/15 dark:text-emerald-400"
                          : "bg-[#7C3AED]/10 text-[#6D28D9] dark:bg-[#A855F7]/15 dark:text-[#C084FC]"
                      }`}
                    >
                      <MessageSquare className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                        Leave Me a Note
                      </h3>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                        Sends directly to divyarashi45@gmail.com
                      </p>
                    </div>
                  </div>

                  {isSubmitted && (
                    <button
                      type="button"
                      onClick={handleResetNote}
                      className="text-[11px] font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>New note</span>
                    </button>
                  )}
                </div>

                {!isSubmitted ? (
                  /* Note Form */
                  <form onSubmit={handleSubmitNote} className="space-y-4 pt-4">
                    {/* User's Email Input */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="sender-email"
                        className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300"
                      >
                        Your Email
                      </label>
                      <input
                        id="sender-email"
                        type="email"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(validationError && (!senderEmail.trim() || !senderEmail.includes("@")))}
                        aria-describedby={validationError ? "contact-form-error" : undefined}
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="your.email@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#0B513D] dark:focus:ring-emerald-500 transition-all"
                      />
                    </div>

                    {/* What's on your mind? Textarea */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="note-content"
                        className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300"
                      >
                        What&apos;s on your mind?
                      </label>
                      <textarea
                        id="note-content"
                        rows={3}
                        required
                        aria-required="true"
                        aria-invalid={Boolean(validationError && !noteContent.trim())}
                        aria-describedby={validationError ? "contact-form-error" : undefined}
                        value={noteContent}
                        onChange={(e) => setNoteContent(e.target.value)}
                        placeholder="Share an opportunity, design project, or just say hello..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 text-xs font-mono resize-none focus:outline-none focus:ring-2 focus:ring-[#0B513D] dark:focus:ring-emerald-500 transition-all leading-relaxed"
                      />
                    </div>

                    {/* Inline Validation Error */}
                    {validationError && (
                      <p
                        id="contact-form-error"
                        role="alert"
                        aria-live="polite"
                        className="text-[11px] font-mono text-red-600 dark:text-red-400"
                      >
                        {validationError}
                      </p>
                    )}

                    {/* Submit Button */}
                    <div className="pt-1 flex items-center justify-between gap-3">
                      <button
                        type="submit"
                        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white transition-all shadow-sm hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-offset-2 ${
                          isWork
                            ? "bg-[#0B513D] hover:bg-[#083B2C] dark:bg-[#10B981] dark:text-neutral-950 dark:hover:bg-[#34D399]"
                            : "bg-[#7C3AED] hover:bg-[#6D28D9] dark:bg-[#A855F7] dark:text-[#0A0A0A] dark:hover:bg-[#C084FC]"
                        }`}
                      >
                        <Send className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Send Note</span>
                      </button>

                      <a
                        href="mailto:divyarashi45@gmail.com"
                        className="text-[11px] font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors underline underline-offset-2"
                      >
                        or email directly ↗
                      </a>
                    </div>
                  </form>
                ) : (
                  /* Submitted / Confirmation Panel */
                  <div className="pt-4 space-y-4">
                    <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300">
                        <Check className="w-4 h-4" />
                        <span>Note ready for Rashi!</span>
                      </div>
                      <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-mono leading-relaxed">
                        Your default email client has been opened to send this note to divyarashi45@gmail.com.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                      <button
                        type="button"
                        onClick={handleCopyNote}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-xs font-mono text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-2xs"
                      >
                        {noteCopied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                            <span>Copied Note!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-neutral-400" />
                            <span>Copy Note</span>
                          </>
                        )}
                      </button>

                      <a
                        href={buildMailtoUrl(senderEmail, noteContent)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold text-white transition-colors ${
                          isWork
                            ? "bg-[#0B513D] hover:bg-[#083B2C] dark:bg-[#10B981] dark:text-neutral-950"
                            : "bg-[#7C3AED] hover:bg-[#6D28D9] dark:bg-[#A855F7] dark:text-[#0A0A0A]"
                        }`}
                      >
                        <Mail className="w-3 h-3" />
                        <span>Open Email App</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
