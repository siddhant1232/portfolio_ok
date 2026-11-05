"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Download, Mail, Phone, Check, Copy, Terminal, ShieldCheck, Sparkles } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { PERSONAL_INFO } from "@/data/portfolio";
import HeroInteractiveWorkbench from "./HeroInteractiveWorkbench";

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#B8F36B]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[400px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status indicator row */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#11141C] border border-[#B8F36B]/30 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8F36B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8F36B]"></span>
              </span>
              <span className="text-[11px] font-mono tracking-wider text-[#B8F36B] font-medium uppercase">
                {PERSONAL_INFO.availability}
              </span>
            </div>

            {/* Main Heading with expressive typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F1F0EB] leading-[1.1]">
              Building digital products with{" "}
              <span className="text-[#B8F36B] underline decoration-[#B8F36B]/40 decoration-wavy decoration-2">
                purpose
              </span>
              .
            </h1>

            {/* Introduction with sleek developer avatar pill */}
            <div className="flex items-start gap-3.5">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-[#B8F36B]/50 shadow-[0_0_15px_-3px_rgba(184,243,107,0.3)] shrink-0 mt-0.5 group">
                <Image
                  src="/siddhant.jpg"
                  alt="Siddhant Gupta"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-base sm:text-lg text-[#CBD5E1] font-normal leading-relaxed max-w-2xl">
                {PERSONAL_INFO.bio.hero}
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-[#9496A1] leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio.supporting}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#0B0D12] bg-[#B8F36B] hover:bg-[#a8ea59] transition-all shadow-[0_0_20px_-3px_rgba(184,243,107,0.35)] hover:shadow-[0_0_25px_-2px_rgba(184,243,107,0.5)] font-mono group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="inline-flex items-center rounded-xl bg-[#11141C] border border-white/10 p-1">
                <a
                  href="/Siddhant_Gupta_Resume.pdf"
                  download="Siddhant_Gupta_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#F1F0EB] hover:text-[#B8F36B] hover:bg-white/5 transition-all font-mono"
                >
                  <Download className="w-3.5 h-3.5 text-[#B8F36B]" />
                  <span>Download Resume</span>
                </a>
                <button
                  onClick={onOpenResumeModal}
                  className="px-2.5 py-2.5 text-xs text-[#9496A1] hover:text-[#F1F0EB] hover:bg-white/5 rounded-lg border-l border-white/10 transition-colors"
                  title="View Resume details"
                >
                  View
                </button>
              </div>
            </div>

            {/* Social Links & Quick Contact Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-white/10 text-xs font-mono">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/10 border border-white/10 text-[#CBD5E1] hover:text-[#B8F36B] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/10 border border-white/10 text-[#CBD5E1] hover:text-[#B8F36B] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/10 border border-white/10 text-[#CBD5E1] hover:text-[#B8F36B] transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#B8F36B]" /> : <Mail className="w-4 h-4" />}
                <span>{copiedEmail ? "Copied!" : "Email"}</span>
              </button>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/10 border border-white/10 text-[#CBD5E1] hover:text-[#B8F36B] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 62632 11405</span>
              </a>
            </div>

            {/* Quick credentials strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#9496A1]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B8F36B]" />
                B.Tech CSE &apos;27
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#B8F36B]" />
                SIH &apos;25 National Round
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <span className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-[#B8F36B]" />
                Codec Technologies Intern
              </span>
            </div>
          </div>

          {/* Right Column: Developer-Themed Interactive Visual */}
          <div className="lg:col-span-5 w-full">
            <HeroInteractiveWorkbench />
          </div>
        </div>
      </div>
    </section>
  );
}
