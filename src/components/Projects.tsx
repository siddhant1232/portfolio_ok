"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

const LAB_META: Record<string, { theme: string; icon: string; label: string; accent: string; border: string; bg: string }> = {
  "multi-agent-system": {
    theme: "command-block",
    icon: "🔮",
    label: "OUTER ISLAND LAB 01",
    accent: "#9B4DCA",
    border: "rgba(155,77,202,0.4)",
    bg: "rgba(155,77,202,0.08)",
  },
  "rate-limiter-microservices": {
    theme: "redstone",
    icon: "⬥",
    label: "OUTER ISLAND LAB 02",
    accent: "#7C3AED",
    border: "rgba(124,58,237,0.4)",
    bg: "rgba(124,58,237,0.08)",
  },
  "conciso-ai-summarizer": {
    theme: "enchantment",
    icon: "✦",
    label: "OUTER ISLAND LAB 03",
    accent: "#E0AAFF",
    border: "rgba(224,170,255,0.4)",
    bg: "rgba(224,170,255,0.06)",
  },
};

// ── Enderman Pixel Figure (decorative CSS sprite) ─────────────────────────────
function EndermanFigure({ scale = 1, style = {} }: { scale?: number; style?: React.CSSProperties }) {
  const s = (n: number) => n * scale;
  return (
    <div style={{ position: "relative", width: s(16), height: s(52), flexShrink: 0, ...style }}>
      {/* Head */}
      <div style={{
        position: "absolute", top: 0, left: s(2), width: s(12), height: s(12),
        background: "#0A0A12", border: `${s(1)}px solid #3A1F5C`,
        boxShadow: `0 0 ${s(4)}px #9B4DCA`,
      }}>
        <div style={{ position: "absolute", top: s(4), left: s(1), width: s(3), height: s(2), background: "#C084FC", boxShadow: `0 0 ${s(3)}px #A855F7` }} />
        <div style={{ position: "absolute", top: s(4), right: s(1), width: s(3), height: s(2), background: "#C084FC", boxShadow: `0 0 ${s(3)}px #A855F7` }} />
      </div>
      {/* Body */}
      <div style={{ position: "absolute", top: s(13), left: s(5), width: s(6), height: s(14), background: "#080810", border: `${s(1)}px solid #2D1A42` }} />
      {/* Arms */}
      <div style={{ position: "absolute", top: s(13), left: s(1), width: s(3), height: s(20), background: "#060608", border: `${s(1)}px solid #2D1A42` }} />
      <div style={{ position: "absolute", top: s(13), right: s(1), width: s(3), height: s(20), background: "#060608", border: `${s(1)}px solid #2D1A42` }} />
      {/* Legs */}
      <div style={{ position: "absolute", top: s(28), left: s(4), width: s(3), height: s(24), background: "#060608", border: `${s(1)}px solid #2D1A42` }} />
      <div style={{ position: "absolute", top: s(28), right: s(4), width: s(3), height: s(24), background: "#060608", border: `${s(1)}px solid #2D1A42` }} />
    </div>
  );
}

// ── End Crystal SVG ───────────────────────────────────────────────────────────
function EndCrystal({ style = {} }: { style?: React.CSSProperties }) {
  return (
    <div style={{ position: "relative", width: 28, height: 28, flexShrink: 0, ...style }}>
      <svg viewBox="0 0 28 28" width="28" height="28" style={{ animation: "endCrystalSpin 6s linear infinite" }}>
        <polygon points="14,2 24,14 14,26 4,14" fill="none" stroke="#9B4DCA" strokeWidth="1.5" opacity="0.9" />
        <polygon points="14,6 21,14 14,22 7,14" fill="rgba(155,77,202,0.15)" stroke="#C084FC" strokeWidth="1" />
        <circle cx="14" cy="14" r="2.5" fill="#E0AAFF" style={{ filter: "blur(1px)" }} />
        {/* Beam */}
        <line x1="14" y1="0" x2="14" y2="2" stroke="#C084FC" strokeWidth="1" opacity="0.7" />
      </svg>
    </div>
  );
}

// ── Starfield dots ────────────────────────────────────────────────────────────
const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: (i * 137.508) % 100,
  y: (i * 97.3) % 100,
  size: i % 5 === 0 ? 2 : 1,
  opacity: 0.15 + (i % 7) * 0.07,
  delay: (i % 8) * 0.5,
}));

export default function Projects() {
  const scrollToLab = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
      style={{ background: "#060608", borderTop: "1px solid rgba(155,77,202,0.2)" }}
    >
      {/* ── Void Starfield ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {STARS.map((star) => (
          <div
            key={star.id}
            style={{
              position: "absolute",
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              background: star.id % 4 === 0 ? "#C084FC" : "#F1F0EB",
              opacity: star.opacity,
              borderRadius: "50%",
              animation: `starTwinkle ${2 + star.delay}s ease-in-out infinite ${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── End Stone ground band at top ── */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ height: 6 }}
        aria-hidden="true"
      >
        {Array.from({ length: 32 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${(i / 32) * 100}%`,
              top: 0,
              width: `${100 / 32}%`,
              height: "100%",
              background: i % 3 === 0 ? "#D4D0BC" : i % 3 === 1 ? "#E8E4D4" : "#C8C4B0",
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      {/* ── Obsidian Pillar Silhouettes ── */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none flex justify-around" aria-hidden="true" style={{ height: 80 }}>
        {[8, 12, 7, 11, 9].map((h, i) => (
          <div
            key={i}
            style={{
              width: 10,
              height: h * 6,
              background: "linear-gradient(to bottom, #1A0A2E, #0D0510)",
              border: "1px solid rgba(155,77,202,0.2)",
              borderBottom: "none",
              alignSelf: "flex-start",
              opacity: 0.6,
              marginTop: i % 2 === 0 ? 0 : 10,
            }}
          />
        ))}
      </div>

      {/* ── Endermen Scatter (decorative) ── */}
      <div className="absolute top-8 left-0 right-0 pointer-events-none flex justify-around px-8" aria-hidden="true">
        {[1.4, 0.9, 1.6, 1.1, 1.0].map((scale, i) => (
          <EndermanFigure
            key={i}
            scale={scale}
            style={{
              opacity: 0.18 + i * 0.04,
              marginTop: i % 2 === 0 ? 20 : 50,
              animation: `enderSway ${3 + i * 0.7}s ease-in-out infinite ${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* ── End Crystals ── */}
      <div className="absolute top-6 left-0 right-0 pointer-events-none flex justify-evenly" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <EndCrystal
            key={i}
            style={{
              opacity: 0.5,
              marginTop: i % 2 === 0 ? 8 : 28,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Coordinate label */}
        <div className="mb-3 font-mono text-[11px] tracking-wider" style={{ color: "#7C3AED" }}>
          ◈ DIMENSION: THE_END // THE VOID // ☽ Y: 0 — OUTER ISLANDS
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 text-left">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono mb-5"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(155,77,202,0.4)",
                borderTop: "1px solid rgba(224,170,255,0.2)",
                borderLeft: "1px solid rgba(224,170,255,0.15)",
                borderBottom: "1px solid rgba(0,0,0,0.6)",
                borderRight: "1px solid rgba(0,0,0,0.6)",
                color: "#C084FC",
              }}
            >
              <span style={{ fontSize: 14 }}>✦</span>
              <span>☽ THE END DIMENSION — ENGINEERING OUTER ISLANDS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "#F1F0EB" }}>
              Engineered Systems{" "}
              <span style={{ color: "#9B4DCA" }}>&amp;</span>{" "}
              Projects
            </h2>
            <p className="text-sm sm:text-base mt-3 leading-relaxed font-mono" style={{ color: "#6B5A80" }}>
              Production systems built for type safety, low latency, and real-world resilience — scattered across the outer islands of The End.
            </p>
          </div>

          {/* Quick Jump Pills */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto font-mono text-xs">
            {PROJECTS.map((proj, idx) => {
              const meta = LAB_META[proj.id];
              return (
                <button
                  key={proj.id}
                  onClick={() => scrollToLab(proj.id)}
                  className="px-3 py-1.5 flex items-center gap-1.5 transition-all"
                  style={{
                    background: "rgba(10,8,16,0.9)",
                    border: `1px solid ${meta?.border || "rgba(155,77,202,0.2)"}`,
                    borderTop: `2px solid ${meta?.accent || "#9B4DCA"}`,
                    borderBottom: "2px solid rgba(0,0,0,0.7)",
                    borderRight: "2px solid rgba(0,0,0,0.7)",
                    color: meta?.accent || "#C084FC",
                  }}
                >
                  <span>{meta?.icon}</span>
                  <span>ISLAND 0{idx + 1}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards */}
        <div className="space-y-16">
          {PROJECTS.map((project, index) => {
            const meta = LAB_META[project.id] || {
              theme: "default",
              icon: "🔮",
              label: "OUTER ISLAND LAB",
              accent: "#9B4DCA",
              border: "rgba(155,77,202,0.4)",
              bg: "rgba(155,77,202,0.08)",
            };
            return (
              <ProjectCard key={project.id} project={project} index={index} meta={meta} />
            );
          })}
        </div>

        {/* Bottom GitHub Panel */}
        <div
          className="mt-16 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-left"
          style={{
            background: "rgba(10,8,18,0.98)",
            border: "1px solid rgba(155,77,202,0.2)",
            borderTop: "3px solid #7C3AED",
            borderLeft: "1px solid rgba(155,77,202,0.15)",
            borderBottom: "3px solid rgba(0,0,0,0.9)",
            borderRight: "3px solid rgba(0,0,0,0.9)",
          }}
        >
          <div>
            <h4 className="text-base sm:text-lg font-bold" style={{ color: "#F1F0EB" }}>
              Explore the full repository archive
            </h4>
            <p className="text-xs sm:text-sm mt-1 font-mono" style={{ color: "#6B5A80" }}>
              Active repositories, full commit logs, and experimental architectures on GitHub — the outer dimension of the build.
            </p>
          </div>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono font-bold shrink-0 transition-all"
            style={{
              background: "#7C3AED",
              color: "#F1F0EB",
              border: "1px solid rgba(155,77,202,0.6)",
              borderTop: "1px solid rgba(224,170,255,0.3)",
              borderLeft: "1px solid rgba(224,170,255,0.2)",
              borderBottom: "3px solid rgba(0,0,0,0.6)",
              borderRight: "3px solid rgba(0,0,0,0.6)",
            }}
          >
            <span>☽ Visit @siddhant1232</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: var(--op, 0.3); transform: scale(1); }
          50% { opacity: calc(var(--op, 0.3) * 2); transform: scale(1.5); }
        }
        @keyframes endCrystalSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes enderSway {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
}
