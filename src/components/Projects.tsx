"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

const LAB_META: Record<string, { theme: string; icon: string; label: string; accent: string; border: string; bg: string }> = {
  "multi-agent-system": {
    theme: "command-block",
    icon: "⬛",
    label: "COMMAND BLOCK LABORATORY",
    accent: "#FFAA00",
    border: "rgba(255,170,0,0.4)",
    bg: "rgba(255,170,0,0.08)",
  },
  "rate-limiter-microservices": {
    theme: "redstone",
    icon: "🔴",
    label: "REDSTONE CIRCUIT LAB",
    accent: "#D4321C",
    border: "rgba(212,50,28,0.4)",
    bg: "rgba(212,50,28,0.08)",
  },
  "conciso-ai-summarizer": {
    theme: "enchantment",
    icon: "💎",
    label: "ENCHANTMENT TABLE LAB",
    accent: "#57E0E0",
    border: "rgba(87,224,224,0.4)",
    bg: "rgba(87,224,224,0.08)",
  },
};

export default function Projects() {
  const scrollToLab = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ borderTop: "1px solid rgba(93,138,60,0.2)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Coordinate label */}
        <div className="mb-3 font-mono text-[11px] text-[#5D8A3C] tracking-wider">
          ◈ SECTOR: ENGINEERING_LABS // X:-128 Y:64 Z:0 // INTERACTIVE BUILDS
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 text-left">
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
              <span>🔬</span>
              <span>ENGINEERING LABS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F1F0EB] tracking-tight">
              Engineered Systems &amp; Projects
            </h2>
            <p className="text-sm sm:text-base text-[#8A9080] mt-2 leading-relaxed font-mono">
              Production systems architected for type safety, low latency, and real-world resilience. Each project features an interactive Minecraft engineering laboratory simulator.
            </p>
          </div>

          {/* Quick Lab Jump Pills */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto font-mono text-xs">
            {PROJECTS.map((proj, idx) => {
              const meta = LAB_META[proj.id];
              return (
                <button
                  key={proj.id}
                  onClick={() => scrollToLab(proj.id)}
                  className="px-3 py-1.5 flex items-center gap-1.5 transition-all text-[#C8D4B8] hover:text-[#FFFFFF]"
                  style={{
                    background: "rgba(20,22,20,0.9)",
                    border: `1px solid ${meta?.border || "rgba(255,255,255,0.1)"}`,
                    borderTop: `2px solid ${meta?.accent || "#A0D060"}`,
                    borderBottom: "2px solid rgba(0,0,0,0.6)",
                    borderRight: "2px solid rgba(0,0,0,0.6)",
                  }}
                >
                  <span>{meta?.icon}</span>
                  <span>LAB 0{idx + 1}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Lab Cards */}
        <div className="space-y-16">
          {PROJECTS.map((project, index) => {
            const meta = LAB_META[project.id] || {
              theme: "default",
              icon: "🔧",
              label: "ENGINEERING LAB",
              accent: "#A0D060",
              border: "rgba(160,208,96,0.4)",
              bg: "rgba(93,138,60,0.08)",
            };
            return (
              <ProjectCard key={project.id} project={project} index={index} meta={meta} />
            );
          })}
        </div>

        {/* Bottom GitHub Prompt */}
        <div
          className="mt-16 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-left"
          style={{
            background: "rgba(20,22,20,0.95)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderTop: "3px solid #A0D060",
            borderLeft: "1px solid rgba(160,208,96,0.2)",
            borderBottom: "3px solid rgba(0,0,0,0.7)",
            borderRight: "3px solid rgba(0,0,0,0.7)",
          }}
        >
          <div>
            <h4 className="text-base sm:text-lg font-bold text-[#F1F0EB]">
              Looking for more repositories and source code?
            </h4>
            <p className="text-xs sm:text-sm text-[#8A9080] mt-1 font-mono">
              Explore active repositories, full commit logs, and experimental architectures on GitHub.
            </p>
          </div>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono font-bold shrink-0 transition-all"
            style={{
              background: "#A0D060",
              color: "#0D0F0D",
              border: "1px solid rgba(160,208,96,0.6)",
              borderTop: "1px solid rgba(255,255,255,0.3)",
              borderLeft: "1px solid rgba(255,255,255,0.2)",
              borderBottom: "3px solid rgba(0,0,0,0.5)",
              borderRight: "3px solid rgba(0,0,0,0.5)",
            }}
          >
            <span>Visit @siddhant1232</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
