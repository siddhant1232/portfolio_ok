"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, Trophy, Layers, Terminal, Cpu, Database, Cloud, MapPin, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-[#B8F36B]" />,
      title: "B.Tech CSE — 2027",
      institution: "Technocrats Institute of Technology, Bhopal",
      desc: "Core data structures, algorithms, system design, and operating systems.",
      tag: "Academic Foundation",
    },
    {
      icon: <Trophy className="w-5 h-5 text-[#B8F36B]" />,
      title: "SIH 2025 National Round",
      institution: "IIT Roorkee National Finals",
      desc: "Hardware-software solution presented as part of a 6-member team advancing from college to national stage.",
      tag: "National Finalist",
    },
    {
      icon: <Layers className="w-5 h-5 text-[#B8F36B]" />,
      title: "Full Stack Development",
      institution: "End-to-End Product Lifecycle",
      desc: "UI components, typed REST APIs, Redis caching, async queues, and cloud deployments.",
      tag: "Engineering Depth",
    },
  ];

  const coreFocusAreas = [
    { name: "Full-Stack Development", icon: <Terminal className="w-4 h-4 text-[#B8F36B]" /> },
    { name: "Backend Engineering", icon: <Cpu className="w-4 h-4 text-[#B8F36B]" /> },
    { name: "Distributed Systems & Caching", icon: <Database className="w-4 h-4 text-[#B8F36B]" /> },
    { name: "Applied AI & Agent Pipelines", icon: <Cloud className="w-4 h-4 text-[#B8F36B]" /> },
  ];

  return (
    <section id="about" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-[#B8F36B] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F1F0EB] tracking-tight">
            {PERSONAL_INFO.bio.aboutHeading}
          </h2>
          <p className="text-sm sm:text-base text-[#9496A1] mt-2">
            Engineering scalable backend architectures, responsive interfaces, and practical AI applications.
          </p>
        </div>

        {/* Main Grid: Portrait Card + Narrative + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Editorial Developer Portrait Card */}
          <div className="lg:col-span-5 text-left">
            <div className="relative rounded-3xl bg-[#0E1118] border border-white/10 hover:border-[#B8F36B]/40 transition-all duration-300 shadow-2xl overflow-hidden group">
              {/* Subtle top ambient glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#B8F36B]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Photo Frame */}
              <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/4.8] overflow-hidden bg-[#131722]">
                <Image
                  src="/siddhant.jpg"
                  alt="Siddhant Gupta — Full Stack Developer"
                  fill
                  priority
                  className="object-cover object-top filter grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-[1.02] transition-all duration-500 ease-out"
                />

                {/* Cyber / Technical Overlay Brackets */}
                <div className="absolute top-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[#B8F36B] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8F36B] animate-pulse"></span>
                  <span>DEV_ID // SG-2027</span>
                </div>

                <div className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[#9496A1] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#B8F36B]" />
                  <span>Bhopal, India</span>
                </div>

                {/* Bottom Gradient Fade */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0E1118] via-[#0E1118]/80 to-transparent pointer-events-none" />

                {/* In-Photo Identity Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-xl font-bold text-[#F1F0EB] tracking-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-mono text-[#B8F36B] mt-0.5">
                    Full Stack Developer • Backend & AI
                  </p>
                </div>
              </div>

              {/* Card Meta & Quick Stats */}
              <div className="p-5 space-y-4 border-t border-white/5 bg-[#0E1118]">
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[#616573] text-[10px] uppercase block">Education</span>
                    <span className="text-[#F1F0EB] font-medium">B.Tech CSE &apos;27</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[#616573] text-[10px] uppercase block">Status</span>
                    <span className="text-[#B8F36B] font-medium">Open for Roles</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] font-mono text-[#9496A1]">
                  <span>Technocrats Institute of Technology</span>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B8F36B] hover:underline inline-flex items-center gap-1"
                  >
                    <span>@siddhant1232</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Bio Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              {PERSONAL_INFO.bio.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx} className="font-normal">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Competency Chips */}
            <div className="pt-2">
              <h3 className="text-xs font-mono text-[#9496A1] uppercase tracking-wider mb-3">
                Key Engineering Focus Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coreFocusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#B8F36B]/30 hover:bg-white/[0.04] transition-all text-xs font-medium text-[#F1F0EB]"
                  >
                    <div className="p-1 rounded-md bg-[#B8F36B]/10 border border-[#B8F36B]/20">
                      {area.icon}
                    </div>
                    <span>{area.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Compact Highlight Cards */}
            <div className="pt-2 space-y-3">
              <h3 className="text-xs font-mono text-[#9496A1] uppercase tracking-wider mb-2">
                Core Highlights & Credentials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#11141C] border border-white/10 hover:border-[#B8F36B]/40 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-1.5 rounded-lg bg-[#B8F36B]/10 border border-[#B8F36B]/20 text-[#B8F36B]">
                          {item.icon}
                        </div>
                        <span className="text-[10px] font-mono text-[#B8F36B] bg-[#B8F36B]/10 border border-[#B8F36B]/20 px-1.5 py-0.5 rounded">
                          {item.tag}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#F1F0EB] group-hover:text-[#B8F36B] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#9496A1] mt-1 line-clamp-3 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
