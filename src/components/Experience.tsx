"use client";

import React from "react";
import { EXPERIENCES } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden" style={{ borderTop: "1px solid rgba(93,138,60,0.2)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section coordinate label */}
        <div className="mb-3 font-mono text-[11px] text-[#5D8A3C] tracking-wider">
          ◈ SECTOR: QUEST_LOG // X:-64 Y:0 Z:0 // EXPEDITION ARCHIVE
        </div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
          <div className="max-w-3xl">
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
              <span>📋</span>
              <span>QUEST LOG</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F1F0EB] tracking-tight">
              Work Experience
            </h2>
            <p className="text-sm sm:text-base text-[#8A9080] mt-2 font-mono">
              Professional quests completed. Production objectives verified. Equipment mastered.
            </p>
          </div>

          {/* Quest Status Pill */}
          <div
            className="px-3.5 py-2 font-mono text-xs flex items-center gap-2 self-start sm:self-auto"
            style={{
              background: "rgba(93,138,60,0.15)",
              border: "1px solid rgba(160,208,96,0.4)",
              color: "#A0D060",
            }}
          >
            <span>⚔</span>
            <span>ALL OBJECTIVES COMPLETED</span>
          </div>
        </div>

        {/* Quest Cards */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="relative text-left"
              style={{
                background: "rgba(22,25,22,0.98)",
                border: "1px solid rgba(93,138,60,0.35)",
                borderTop: "3px solid #A0D060",
                borderLeft: "1px solid rgba(160,208,96,0.2)",
                borderBottom: "3px solid rgba(0,0,0,0.8)",
                borderRight: "3px solid rgba(0,0,0,0.8)",
              }}
            >
              {/* Quest Header Bar */}
              <div
                className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                style={{
                  background: "linear-gradient(90deg, rgba(93,138,60,0.25) 0%, rgba(93,138,60,0.05) 100%)",
                  borderBottom: "1px solid rgba(93,138,60,0.2)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚔️</span>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-lg sm:text-xl font-bold text-[#F1F0EB]">{exp.company}</span>
                      <span
                        className="px-2 py-0.5 text-[10px] font-mono font-bold"
                        style={{
                          background: "rgba(93,138,60,0.3)",
                          border: "1px solid rgba(160,208,96,0.5)",
                          color: "#A0D060",
                        }}
                      >
                        ✔ QUEST COMPLETE
                      </span>
                      <span
                        className="px-2 py-0.5 text-[10px] font-mono font-bold"
                        style={{
                          background: "rgba(255,170,0,0.15)",
                          border: "1px solid rgba(255,170,0,0.4)",
                          color: "#FFAA00",
                        }}
                      >
                        +5,000 EXP
                      </span>
                    </div>
                    <p className="text-sm font-semibold font-mono mt-0.5" style={{ color: "#A0D060" }}>
                      {exp.role} <span className="text-[#6E6E6E]">({exp.type})</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#8A9080]">
                  <span
                    className="px-2.5 py-1 flex items-center gap-1.5"
                    style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    🗓 {exp.period}
                  </span>
                  <span
                    className="px-2.5 py-1 flex items-center gap-1.5"
                    style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    📍 {exp.location}
                  </span>
                </div>
              </div>

              {/* Quest Body */}
              <div className="px-6 pt-5 pb-6">
                <p className="text-sm text-[#C8D4B8] mb-6 leading-relaxed">{exp.description}</p>

                {/* Objectives */}
                <div className="mb-6">
                  <h4 className="text-[11px] font-mono uppercase tracking-widest mb-3" style={{ color: "#A0D060" }}>
                    ▸ VERIFIED PRODUCTION OBJECTIVES
                  </h4>
                  <div className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-start gap-3 px-4 py-2.5"
                        style={{
                          background: "rgba(13,15,13,0.8)",
                          borderLeft: "3px solid #A0D060",
                          borderBottom: "1px solid rgba(0,0,0,0.4)",
                        }}
                      >
                        <span className="text-[#A0D060] text-xs mt-0.5 shrink-0">✔</span>
                        <p className="text-xs sm:text-sm text-[#C8D4B8] leading-relaxed">{resp}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quest Rewards */}
                <div className="pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <h4 className="text-[11px] font-mono uppercase tracking-widest mb-3" style={{ color: "#FFAA00" }}>
                    ★ QUEST REWARDS — TECHNOLOGIES MASTERED
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-[11px] font-mono text-[#F1F0EB]"
                        style={{
                          background: "rgba(255,170,0,0.08)",
                          border: "1px solid rgba(255,170,0,0.3)",
                          borderTop: "1px solid rgba(255,210,80,0.2)",
                          borderBottom: "2px solid rgba(0,0,0,0.6)",
                          borderRight: "2px solid rgba(0,0,0,0.6)",
                        }}
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
    </section>
  );
}
