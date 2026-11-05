"use client";

import React from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/icons";
import { Project } from "@/data/portfolio";

interface LabMeta {
  theme: string;
  icon: string;
  label: string;
  accent: string;
  border: string;
  bg: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  meta: LabMeta;
}

/* Inline mini visual for each lab theme */
function LabVisual({ theme, accent }: { theme: string; accent: string }) {
  if (theme === "command-block") {
    return (
      <div className="w-full h-full flex items-center justify-center min-h-[220px]">
        <div className="relative">
          {/* Command block SVG art */}
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            {/* Main block */}
            <rect x="30" y="30" width="120" height="120" fill="rgba(50,35,0,0.9)" stroke={accent} strokeWidth="1.5" />
            {/* Top face highlight */}
            <polygon points="30,30 150,30 130,10 10,10" fill="rgba(80,55,0,0.7)" stroke={accent} strokeWidth="1" />
            {/* Right face */}
            <polygon points="150,30 150,150 170,130 170,10" fill="rgba(35,24,0,0.8)" stroke={accent} strokeWidth="1" />
            {/* Command symbol */}
            <text x="90" y="100" textAnchor="middle" dominantBaseline="middle" fontFamily="monospace" fontSize="40" fill={accent} opacity="0.9">&gt;_</text>
            {/* Corner ornaments */}
            <rect x="28" y="28" width="8" height="8" fill={accent} opacity="0.6" />
            <rect x="144" y="28" width="8" height="8" fill={accent} opacity="0.6" />
            <rect x="28" y="144" width="8" height="8" fill={accent} opacity="0.6" />
            <rect x="144" y="144" width="8" height="8" fill={accent} opacity="0.6" />
          </svg>
          {/* Floating agent nodes */}
          {[{ x: -40, y: -20, label: "Agent A" }, { x: 40, y: -30, label: "Agent B" }, { x: -50, y: 60, label: "LLM" }].map((node, i) => (
            <div
              key={i}
              className="absolute text-[9px] font-mono px-2 py-0.5 whitespace-nowrap"
              style={{
                top: `${90 + node.y}px`,
                left: `${90 + node.x}px`,
                background: "rgba(50,35,0,0.9)",
                border: `1px solid ${accent}`,
                color: accent,
                transform: "translate(-50%,-50%)",
              }}
            >
              {node.label}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (theme === "redstone") {
    return (
      <div className="w-full h-full flex items-center justify-center min-h-[220px]">
        <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
          {/* Redstone circuit path */}
          <path d="M20 90 H80 V40 H140 V90 H200" stroke={accent} strokeWidth="3" strokeLinecap="square" />
          <path d="M80 90 V140 H140 V90" stroke={accent} strokeWidth="3" strokeLinecap="square" opacity="0.5" />
          {/* Nodes */}
          {[20, 80, 140, 200].map((x, i) => (
            <rect key={i} x={x - 6} y={84} width="12" height="12" fill={accent} opacity={i % 2 === 0 ? 0.9 : 0.5} />
          ))}
          <rect x="74" y="34" width="12" height="12" fill={accent} opacity="0.7" />
          <rect x="134" y="34" width="12" height="12" fill={accent} opacity="0.7" />
          {/* Dust particles */}
          {[40, 60, 100, 120, 160, 180].map((x, i) => (
            <circle key={i} cx={x} cy="90" r="3" fill={accent} opacity="0.4" />
          ))}
          {/* Labels */}
          <text x="20" y="78" fontFamily="monospace" fontSize="8" fill={accent} opacity="0.8">INPUT</text>
          <text x="170" y="78" fontFamily="monospace" fontSize="8" fill={accent} opacity="0.8">OUTPUT</text>
          <text x="95" y="30" fontFamily="monospace" fontSize="8" fill={accent} opacity="0.8">REDIS</text>
          {/* Pulse indicator */}
          <circle cx="200" cy="90" r="8" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.6">
            <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    );
  }

  if (theme === "enchantment") {
    return (
      <div className="w-full h-full flex items-center justify-center min-h-[220px]">
        <div className="relative">
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            {/* Enchantment table block */}
            <rect x="45" y="80" width="90" height="60" fill="rgba(0,20,30,0.9)" stroke={accent} strokeWidth="1.5" />
            {/* Open book on top */}
            <ellipse cx="90" cy="75" rx="40" ry="15" fill="rgba(220,220,210,0.1)" stroke={accent} strokeWidth="1" />
            <line x1="90" y1="62" x2="90" y2="88" stroke={accent} strokeWidth="0.5" />
            {/* Runes */}
            {[{ x: 60, y: 100, r: "✦" }, { x: 90, y: 100, r: "◈" }, { x: 120, y: 100, r: "✦" },
              { x: 60, y: 120, r: "◇" }, { x: 90, y: 120, r: "✧" }, { x: 120, y: 120, r: "◇" }].map((rune, i) => (
              <text key={i} x={rune.x} y={rune.y} textAnchor="middle" fontFamily="monospace" fontSize="12" fill={accent} opacity="0.6">{rune.r}</text>
            ))}
            {/* Floating particles */}
            {[{ x: 30, y: 40 }, { x: 150, y: 50 }, { x: 20, y: 90 }, { x: 160, y: 100 }, { x: 90, y: 20 }].map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="2.5" fill={accent} opacity="0.5">
                <animate attributeName="cy" values={`${p.y};${p.y - 8};${p.y}`} dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0.9;0.5" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </svg>
          <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[9px] font-mono whitespace-nowrap" style={{ color: accent }}>
            AI SUMMARIZATION ENGINE
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default function ProjectCard({ project, index, meta }: ProjectCardProps) {
  return (
    <article
      id={project.id}
      className="text-left"
      style={{
        background: "rgba(16,18,16,0.98)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderTop: `3px solid ${meta.border}`,
        borderLeft: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "3px solid rgba(0,0,0,0.7)",
        borderRight: "3px solid rgba(0,0,0,0.7)",
      }}
    >
      {/* Lab header bar */}
      <div
        className="px-6 py-3 flex items-center justify-between"
        style={{
          background: meta.bg,
          borderBottom: `1px solid ${meta.border}`,
        }}
      >
        <div className="flex items-center gap-2.5">
          <span className="text-lg">{meta.icon}</span>
          <span className="text-xs font-mono font-bold tracking-widest" style={{ color: meta.accent }}>
            {meta.label}
          </span>
        </div>
        <span
          className="text-[11px] font-mono px-2 py-0.5"
          style={{ background: "rgba(0,0,0,0.4)", border: `1px solid ${meta.border}`, color: meta.accent }}
        >
          LAB 0{index + 1}
        </span>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left — Details */}
        <div
          className="p-6 sm:p-8 space-y-5"
          style={{ borderRight: "1px solid rgba(255,255,255,0.05)" }}
        >
          {/* Title */}
          <div>
            <div className="text-[11px] font-mono mb-1 tracking-widest" style={{ color: meta.accent }}>
              PROJECT 0{index + 1} · {project.subtitle}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F1F0EB] tracking-tight leading-tight">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-[#8A9080] mt-1.5 leading-relaxed">{project.tagline}</p>
          </div>

          {/* Description */}
          <p className="text-sm text-[#C8D4B8] leading-relaxed">{project.description}</p>

          {/* Problem */}
          <div
            className="p-4 space-y-1.5"
            style={{
              background: "rgba(255,170,0,0.04)",
              borderLeft: "3px solid rgba(255,170,0,0.5)",
            }}
          >
            <div className="text-[10px] font-mono text-[#FFAA00] uppercase tracking-widest font-bold">
              ⚠ Problem Being Addressed
            </div>
            <p className="text-xs text-[#8A9080] leading-relaxed">{project.problem}</p>
          </div>

          {/* Implementation */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest mb-2.5" style={{ color: meta.accent }}>
              ▸ TECHNICAL IMPLEMENTATION
            </h4>
            <div className="space-y-2">
              {project.implementation.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 px-3 py-2"
                  style={{
                    background: "rgba(13,15,13,0.7)",
                    borderLeft: `2px solid ${meta.border}`,
                  }}
                >
                  <span className="text-xs mt-0.5 shrink-0" style={{ color: meta.accent }}>✔</span>
                  <span className="text-xs text-[#C8D4B8] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Decisions */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest mb-2.5 text-[#8A9080]">
              ◈ KEY ENGINEERING DECISIONS
            </h4>
            <ul className="space-y-1.5">
              {project.keyDecisions.map((decision, dIdx) => {
                const parts = decision.split(":");
                return (
                  <li key={dIdx} className="text-xs text-[#8A9080] leading-relaxed">
                    <span className="text-[#C8D4B8] font-medium">{parts[0]}:</span>
                    <span>{parts.slice(1).join(":")}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="text-[11px] font-mono text-[#5A6A5A] uppercase tracking-widest mb-2">Technology Stack</div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 text-[11px] font-mono text-[#F1F0EB]"
                  style={{
                    background: meta.bg,
                    border: `1px solid ${meta.border}`,
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    borderLeft: "1px solid rgba(255,255,255,0.08)",
                    borderBottom: "2px solid rgba(0,0,0,0.5)",
                    borderRight: "2px solid rgba(0,0,0,0.5)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold transition-all"
              style={{
                background: "rgba(26,28,26,0.9)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderTop: "1px solid rgba(255,255,255,0.12)",
                borderBottom: "2px solid rgba(0,0,0,0.5)",
                borderRight: "2px solid rgba(0,0,0,0.5)",
                color: "#F1F0EB",
              }}
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8A9080]" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold transition-all"
                style={{
                  background: meta.accent,
                  color: "#0D0F0D",
                  border: `1px solid ${meta.border}`,
                  borderTop: "1px solid rgba(255,255,255,0.3)",
                  borderLeft: "1px solid rgba(255,255,255,0.2)",
                  borderBottom: "2px solid rgba(0,0,0,0.5)",
                  borderRight: "2px solid rgba(0,0,0,0.5)",
                }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Right — Visual */}
        <div
          className="p-6 sm:p-8 flex items-center justify-center"
          style={{ background: "rgba(10,12,10,0.6)" }}
        >
          <LabVisual theme={meta.theme} accent={meta.accent} />
        </div>
      </div>
    </article>
  );
}
