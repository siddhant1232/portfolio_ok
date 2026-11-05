"use client";

import React from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/icons";
import { Project } from "@/data/portfolio";
import CommandBlockLab from "./projects/CommandBlockLab";
import RedstoneCircuitLab from "./projects/RedstoneCircuitLab";
import EnchantmentTableLab from "./projects/EnchantmentTableLab";

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

export default function ProjectCard({ project, index, meta }: ProjectCardProps) {
  const renderInteractiveLab = () => {
    switch (project.id) {
      case "multi-agent-system":
        return <CommandBlockLab />;
      case "rate-limiter-microservices":
        return <RedstoneCircuitLab />;
      case "conciso-ai-summarizer":
        return <EnchantmentTableLab />;
      default:
        return null;
    }
  };

  return (
    <article
      id={project.id}
      className="text-left"
      style={{
        background: "rgba(10,8,18,0.98)",
        border: "1px solid rgba(155,77,202,0.2)",
        borderTop: `3px solid ${meta.accent}`,
        borderLeft: "1px solid rgba(155,77,202,0.25)",
        borderBottom: "3px solid rgba(0,0,0,0.85)",
        borderRight: "3px solid rgba(0,0,0,0.85)",
        boxShadow: `0 8px 32px rgba(0,0,0,0.6), 0 0 16px ${meta.bg}`,
      }}
    >
      {/* Lab Header Bar */}
      <div
        className="px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
        style={{
          background: meta.bg,
          borderBottom: `1px solid ${meta.border}`,
        }}
      >
        <div className="flex items-center gap-2.5">
          <span className="text-xl">{meta.icon}</span>
          <span className="text-xs font-mono font-bold tracking-widest uppercase" style={{ color: meta.accent }}>
            {meta.label} // SECTOR BUILD 0{index + 1}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {/* Enderman Eyes decorative beacon */}
          <div className="flex items-center gap-1 px-2 py-0.5 bg-[#060608] border border-[#3A1F5C]">
            <div className="w-1.5 h-1 bg-[#C084FC] shadow-[0_0_4px_#A855F7]" />
            <div className="w-1.5 h-1 bg-[#C084FC] shadow-[0_0_4px_#A855F7]" />
          </div>
          <span
            className="text-[10px] font-mono font-bold px-2.5 py-0.5"
            style={{
              background: "rgba(0,0,0,0.6)",
              border: `1px solid ${meta.border}`,
              color: meta.accent,
            }}
          >
            LAB 0{index + 1} ACTIVE
          </span>
        </div>
      </div>

      {/* Main Grid: Left Narrative + Right Interactive Lab Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

        {/* Left Column: Engineering Narrative & Architectural Decisions */}
        <div
          className="lg:col-span-5 xl:col-span-5 p-6 sm:p-8 space-y-6 flex flex-col justify-between"
          style={{ borderRight: "1px solid rgba(155,77,202,0.12)" }}
        >
          <div className="space-y-5">
            {/* Project Index & Title */}
            <div>
              <div className="text-[11px] font-mono mb-1 tracking-widest uppercase" style={{ color: meta.accent }}>
                ISLAND LAB 0{index + 1} // {project.subtitle}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F1F0EB] tracking-tight leading-tight">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-[#9D8EB5] mt-1.5 leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-[#D8CFE5] leading-relaxed">
              {project.description}
            </p>

            {/* Problem Statement Box */}
            <div
              className="p-4 space-y-1.5"
              style={{
                background: "rgba(155,77,202,0.06)",
                borderLeft: `3px solid ${meta.accent}`,
                borderTop: "1px solid rgba(155,77,202,0.15)",
                borderBottom: "1px solid rgba(0,0,0,0.4)",
              }}
            >
              <div className="text-[10px] font-mono text-[#E0AAFF] uppercase tracking-widest font-bold">
                ⚠ Void Challenge Addressed
              </div>
              <p className="text-xs text-[#9D8EB5] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Technical Implementation */}
            <div>
              <h4 className="text-[11px] font-mono uppercase tracking-widest mb-2.5" style={{ color: meta.accent }}>
                ▸ VERIFIED IMPLEMENTATION
              </h4>
              <div className="space-y-2">
                {project.implementation.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 px-3 py-2"
                    style={{
                      background: "rgba(6,6,10,0.85)",
                      borderLeft: `2px solid ${meta.border}`,
                    }}
                  >
                    <span className="text-xs mt-0.5 shrink-0" style={{ color: meta.accent }}>✔</span>
                    <span className="text-xs text-[#D8CFE5] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Engineering Decisions */}
            <div>
              <h4 className="text-[11px] font-mono uppercase tracking-widest mb-2.5 text-[#9D8EB5]">
                ◈ KEY ARCHITECTURAL DECISIONS
              </h4>
              <ul className="space-y-1.5">
                {project.keyDecisions.map((decision, dIdx) => {
                  const parts = decision.split(":");
                  return (
                    <li key={dIdx} className="text-xs text-[#9D8EB5] leading-relaxed">
                      <strong className="text-[#E0AAFF] font-mono">{parts[0]}:</strong>
                      <span>{parts.slice(1).join(":")}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <div className="text-[11px] font-mono text-[#7C6A95] uppercase tracking-widest mb-2">
                EQUIPPED TECH STACK
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-[11px] font-mono text-[#F1F0EB]"
                    style={{
                      background: meta.bg,
                      border: `1px solid ${meta.border}`,
                      borderTop: "1px solid rgba(224,170,255,0.2)",
                      borderLeft: "1px solid rgba(224,170,255,0.15)",
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

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#3A1F5C]/40">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold transition-all"
              style={{
                background: "rgba(18,14,28,0.9)",
                border: "1px solid rgba(155,77,202,0.3)",
                borderTop: "1px solid rgba(224,170,255,0.2)",
                borderBottom: "2px solid rgba(0,0,0,0.6)",
                borderRight: "2px solid rgba(0,0,0,0.6)",
                color: "#F1F0EB",
              }}
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#9D8EB5]" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold transition-all"
                style={{
                  background: meta.accent,
                  color: "#060608",
                  border: `1px solid ${meta.border}`,
                  borderTop: "1px solid rgba(255,255,255,0.4)",
                  borderLeft: "1px solid rgba(255,255,255,0.3)",
                  borderBottom: "2px solid rgba(0,0,0,0.7)",
                  borderRight: "2px solid rgba(0,0,0,0.7)",
                }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Interactive Minecraft Laboratory Visual Simulator */}
        <div
          className="lg:col-span-7 xl:col-span-7 p-4 sm:p-6 lg:p-8 flex items-center justify-center"
          style={{ background: "rgba(6,5,10,0.92)" }}
        >
          {renderInteractiveLab()}
        </div>
      </div>
    </article>
  );
}
