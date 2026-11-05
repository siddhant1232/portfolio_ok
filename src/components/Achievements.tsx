"use client";

import React from "react";
import { Award, Trophy, Medal, MapPin, Users, CheckCircle, ExternalLink, Sparkles } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/portfolio";

export default function Achievements() {
  const sih = ACHIEVEMENTS.find((a) => a.title.includes("Smart India Hackathon"));
  const otherAchievements = ACHIEVEMENTS.filter((a) => !a.title.includes("Smart India Hackathon"));

  return (
    <section id="achievements" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-[#B8F36B] mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F0EB] tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="text-sm sm:text-base text-[#9496A1] mt-2">
            Competitive national hackathons, hardware-software presentations, and verified technical credentials.
          </p>
        </div>

        {/* SIH 2025 Featured Card (Strong Visual Prominence) */}
        {sih && (
          <div className="mb-8 rounded-3xl bg-gradient-to-br from-[#121722] via-[#0E1118] to-[#141C12] border-2 border-[#B8F36B]/40 p-6 sm:p-10 text-left shadow-[0_0_35px_-5px_rgba(184,243,107,0.15)] relative overflow-hidden group">
            {/* Background decorative glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#B8F36B]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-4 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-[#B8F36B] text-[#0B0D12]">
                    FEATURED ACHIEVEMENT
                  </span>
                  <span className="px-3 py-1 text-xs font-mono rounded-full bg-[#B8F36B]/10 border border-[#B8F36B]/30 text-[#B8F36B]">
                    {sih.badge}
                  </span>
                  <span className="text-xs font-mono text-[#9496A1]">
                    Year: {sih.date}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F1F0EB] tracking-tight">
                  {sih.title}
                </h3>

                <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                  &ldquo;{sih.description}&rdquo;
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#9496A1] pt-2">
                  <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                    <MapPin className="w-4 h-4 text-[#B8F36B]" />
                    IIT Roorkee Venue
                  </span>
                  <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                    <Users className="w-4 h-4 text-[#B8F36B]" />
                    6-Member Engineering Team
                  </span>
                  <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                    <Award className="w-4 h-4 text-[#B8F36B]" />
                    Ministry of Education & AICTE
                  </span>
                </div>
              </div>

              {/* Prominent Emblem / Medal graphic */}
              <div className="shrink-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/40 border border-[#B8F36B]/30 lg:w-48 text-center">
                <div className="w-16 h-16 rounded-full bg-[#B8F36B]/15 border border-[#B8F36B] flex items-center justify-center text-[#B8F36B] mb-3 shadow-[0_0_20px_rgba(184,243,107,0.3)]">
                  <Trophy className="w-8 h-8" />
                </div>
                <span className="text-xs font-mono font-bold text-[#F1F0EB]">
                  SIH 2025
                </span>
                <span className="text-[11px] font-mono text-[#B8F36B]">
                  National Round
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {otherAchievements.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#0E1118]/80 border border-white/10 hover:border-[#B8F36B]/30 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#B8F36B] bg-[#B8F36B]/10 border border-[#B8F36B]/20 px-2.5 py-0.5 rounded">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-[#9496A1]">{item.date}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#F1F0EB] group-hover:text-[#B8F36B] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-[#9496A1] mt-1">{item.organization}</p>

                <p className="text-xs sm:text-sm text-[#CBD5E1] mt-3 leading-relaxed">
                  &ldquo;{item.description}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-[11px] font-mono rounded bg-white/5 border border-white/5 text-[#9496A1]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

