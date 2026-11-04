"use client";

import React from "react";
import { GraduationCap, Trophy, Layers, CheckCircle2, Terminal, Cpu, Database, Cloud } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-[#B8F36B]" />,
      title: "B.Tech CSE — 2027",
      institution: "Technocrats Institute of Technology, Bhopal",
      desc: "Focusing on core data structures, algorithms, system design, and operating systems.",
      tag: "Academic Foundation",
    },
    {
      icon: <Trophy className="w-5 h-5 text-[#B8F36B]" />,
      title: "SIH 2025 National Round",
      institution: "IIT Roorkee National Finals",
      desc: "Presented hardware-software solution as part of a 6-member team advancing from college to national stage.",
      tag: "Competitive Engineering",
    },
    {
      icon: <Layers className="w-5 h-5 text-[#B8F36B]" />,
      title: "Full Stack Development",
      institution: "End-to-End Product Lifecycle",
      desc: "Architecting across client interfaces, typed REST APIs, caching, asynchronous queues, and cloud deployments.",
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
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-[#B8F36B] mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F0EB] tracking-tight">
            {PERSONAL_INFO.bio.aboutHeading}
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
            {PERSONAL_INFO.bio.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx} className="font-normal">
                {paragraph}
              </p>
            ))}

            {/* Core Competency Chips */}
            <div className="pt-4 border-t border-white/10">
              <h3 className="text-xs font-mono text-[#9496A1] uppercase tracking-wider mb-3">
                Key Engineering Focus Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coreFocusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/10 text-xs font-medium text-[#F1F0EB]"
                  >
                    {area.icon}
                    <span>{area.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3 Compact Highlight Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono text-[#9496A1] uppercase tracking-wider text-left mb-2">
              Key Credentials
            </h3>
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#11141C]/80 border border-white/10 hover:border-[#B8F36B]/40 transition-all text-left group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="p-2 rounded-lg bg-[#B8F36B]/10 border border-[#B8F36B]/20 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono text-[#B8F36B] bg-[#B8F36B]/10 border border-[#B8F36B]/20 rounded">
                    {item.tag}
                  </span>
                </div>

                <div className="mt-3">
                  <h4 className="text-base font-bold text-[#F1F0EB] group-hover:text-[#B8F36B] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#9496A1] font-mono mt-0.5">{item.institution}</p>
                  <p className="text-xs text-[#CBD5E1] mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
