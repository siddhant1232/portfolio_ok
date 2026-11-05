"use client";

import React from "react";
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle, Award } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Education() {
  const { education } = PERSONAL_INFO;

  return (
    <section id="education" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-[#B8F36B] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F0EB] tracking-tight">
            Education
          </h2>
          <p className="text-sm sm:text-base text-[#9496A1] mt-2">
            Rigorous undergraduate training in computer science theory, systems programming, and algorithms.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="rounded-3xl bg-[#0E1118]/80 border border-white/10 p-6 sm:p-10 text-left backdrop-blur-sm hover:border-[#B8F36B]/30 transition-all duration-300 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#B8F36B]/10 border border-[#B8F36B]/20 text-[#B8F36B]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F1F0EB]">
                    {education.degree}
                  </h3>
                  <p className="text-sm font-semibold text-[#B8F36B] font-mono mt-0.5">
                    {education.institution}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#9496A1]">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-[#B8F36B]" />
                {education.period}
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-[#B8F36B]" />
                {education.location}
              </span>
            </div>
          </div>

          {/* Coursework & Competencies */}
          <div className="mt-8">
            <h4 className="text-xs font-mono text-[#F1F0EB] uppercase tracking-wider mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#B8F36B]" />
              <span>Core Academic Coursework</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {education.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5 hover:border-white/15 transition-colors"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-[#B8F36B] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#CBD5E1] font-medium">
                    {course}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Highlights Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#9496A1]">
            <span className="text-[#CBD5E1]">
              Expected Graduation: <strong className="text-[#B8F36B]">May 2027</strong>
            </span>
            <span className="text-[#616573]">
              Location: Central India (Bhopal, MP) • Open to Onsite & Remote Relocation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

