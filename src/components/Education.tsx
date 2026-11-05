"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Education() {
  const { education } = PERSONAL_INFO;

  const coursework = education.coursework;

  return (
    <section id="education" className="py-24 relative" style={{ borderTop: "1px solid rgba(93,138,60,0.2)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Coordinate label */}
        <div className="mb-3 font-mono text-[11px] text-[#5D8A3C] tracking-wider">
          ◈ SECTOR: PLAYER_ORIGIN // X:0 Y:0 Z:64
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-[#A0D060] mb-4"
            style={{
              background: "rgba(93,138,60,0.12)",
              border: "1px solid rgba(93,138,60,0.35)",
              borderTop: "1px solid rgba(160,208,96,0.2)",
              borderLeft: "1px solid rgba(160,208,96,0.2)",
              borderBottom: "1px solid rgba(0,0,0,0.5)",
              borderRight: "1px solid rgba(0,0,0,0.5)",
            }}
          >
            <span>🎓</span>
            <span>PLAYER ORIGIN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F0EB] tracking-tight">Education</h2>
          <p className="text-sm text-[#8A9080] mt-2 font-mono">
            Academic foundation in Computer Science engineering theory, algorithms, and systems.
          </p>
        </div>

        {/* Education Card */}
        <div
          className="text-left"
          style={{
            background: "rgba(20,22,20,0.95)",
            border: "1px solid rgba(93,138,60,0.3)",
            borderTop: "3px solid rgba(160,208,96,0.5)",
            borderLeft: "1px solid rgba(160,208,96,0.15)",
            borderBottom: "3px solid rgba(0,0,0,0.7)",
            borderRight: "3px solid rgba(0,0,0,0.7)",
          }}
        >
          {/* Card Header */}
          <div
            className="px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            style={{
              background: "linear-gradient(90deg, rgba(93,138,60,0.2) 0%, rgba(93,138,60,0.04) 100%)",
              borderBottom: "1px solid rgba(93,138,60,0.2)",
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 shrink-0 flex items-center justify-center text-2xl"
                style={{
                  background: "rgba(93,138,60,0.2)",
                  border: "1px solid rgba(160,208,96,0.4)",
                  borderTop: "1px solid rgba(160,208,96,0.2)",
                  borderBottom: "2px solid rgba(0,0,0,0.5)",
                  borderRight: "2px solid rgba(0,0,0,0.5)",
                }}
              >
                🏛
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F1F0EB]">{education.degree}</h3>
                <p className="text-sm font-mono mt-0.5" style={{ color: "#A0D060" }}>
                  {education.institution}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#8A9080]">
              <span
                className="px-3 py-1.5 flex items-center gap-1.5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                🗓 {education.period}
              </span>
              <span
                className="px-3 py-1.5 flex items-center gap-1.5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                📍 {education.location}
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="px-6 sm:px-8 py-6">
            {/* Coursework */}
            <h4
              className="text-[11px] font-mono uppercase tracking-widest mb-4 flex items-center gap-2"
              style={{ color: "#A0D060" }}
            >
              📚 CORE ACADEMIC COURSEWORK
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2.5 flex items-center gap-2.5 transition-all"
                  style={{
                    background: "rgba(13,15,13,0.8)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    borderLeft: "1px solid rgba(255,255,255,0.06)",
                    borderBottom: "2px solid rgba(0,0,0,0.5)",
                    borderRight: "2px solid rgba(0,0,0,0.5)",
                  }}
                >
                  <span className="text-[#A0D060] text-xs shrink-0">▪</span>
                  <span className="text-xs text-[#C8D4B8] font-medium">{course}</span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              className="mt-6 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span className="text-sm font-mono text-[#C8D4B8]">
                Expected Graduation: <strong style={{ color: "#A0D060" }}>May 2027</strong>
              </span>
              <span className="text-[11px] font-mono text-[#5A6A5A]">
                Bhopal, MP · Open to Onsite &amp; Remote Relocation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
