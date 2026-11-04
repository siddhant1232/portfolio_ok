"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight, Server, Shield, CreditCard, Layers } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-[#B8F36B] mb-3">
            <span>CAREER PATH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F0EB] tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-[#9496A1] mt-2">
            Production engineering experience delivering modular frontend components, secure payment workflows, and cloud-ready APIs.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#B8F36B]/60 via-white/10 to-transparent" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="relative md:pl-20 text-left group"
              >
                {/* Timeline Node Indicator on Desktop */}
                <div className="hidden md:flex absolute left-6 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-[#0B0D12] border-2 border-[#B8F36B] items-center justify-center shadow-[0_0_12px_rgba(184,243,107,0.5)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B8F36B]" />
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl bg-[#0E1118]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-sm group-hover:border-[#B8F36B]/40 transition-all duration-300 shadow-xl">
                  {/* Top Bar: Company, Role, Dates */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-xl sm:text-2xl font-bold text-[#F1F0EB]">
                          {exp.company}
                        </span>
                        <span className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-full bg-[#B8F36B]/10 text-[#B8F36B] border border-[#B8F36B]/30">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-[#B8F36B] mt-1 font-mono">
                        {exp.role}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#9496A1]">
                      <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                        <Calendar className="w-3.5 h-3.5 text-[#B8F36B]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                        <MapPin className="w-3.5 h-3.5 text-[#B8F36B]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#9496A1] mt-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Verified Responsibilities Grid / List */}
                  <div className="mt-6">
                    <h4 className="text-xs font-mono text-[#F1F0EB] uppercase tracking-wider mb-3">
                      Verified Technical Contributions & Responsibilities
                    </h4>
                    <div className="space-y-3">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
                        >
                          <div className="mt-0.5 p-1 rounded-md bg-[#B8F36B]/10 text-[#B8F36B] shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                            {resp}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-[#9496A1] uppercase tracking-wider">
                        Production Technologies Used
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 text-xs font-mono rounded-lg bg-[#11141C] border border-white/10 text-[#F1F0EB] hover:border-[#B8F36B]/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
