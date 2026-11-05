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
      className="text-left overflow-hidden"
      style={{
        background: "rgba(10,8,18,0.98)",
        border: "1px solid rgba(155,77,202,0.22)",
        borderTop: `3px solid ${meta.accent}`,
      }}
    >
      {/* Header Bar */}
      <div
        className="px-5 py-2.5 flex items-center justify-between"
        style={{
          background: meta.bg,
          borderBottom: `1px solid ${meta.border}`,
        }}
      >
        <div className="flex items-center gap-2">
          <span className="text-base">{meta.icon}</span>
          <span className="text-xs font-mono font-bold tracking-wider" style={{ color: meta.accent }}>
            {meta.label} // {project.subtitle}
          </span>
        </div>

        {/* Minimal Ender Eye Beacon */}
        <div className="flex items-center gap-1 px-1.5 py-0.5 bg-[#060608] border border-[#3A1F5C]/60">
          <span className="w-1.5 h-1 bg-[#C084FC] inline-block shadow-[0_0_4px_#A855F7]" />
          <span className="w-1.5 h-1 bg-[#C084FC] inline-block shadow-[0_0_4px_#A855F7]" />
        </div>
      </div>

      {/* Grid: Left Technical Spec + Right Interactive Lab Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

        {/* Left Column: Streamlined Technical Spec */}
        <div
          className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between space-y-5"
          style={{ borderRight: "1px solid rgba(155,77,202,0.12)" }}
        >
          <div className="space-y-4">
            {/* Title & Tagline */}
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#F1F0EB] tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-[#A898BE] mt-1 leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Concise Description */}
            <p className="text-xs sm:text-sm text-[#C8BFD6] leading-relaxed">
              {project.description}
            </p>

            {/* Core Architectural Highlights (3 Punchy Decisions) */}
            <div className="space-y-2 pt-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#7C6A95]">
                ENGINEERING HIGHLIGHTS
              </div>
              <div className="space-y-2">
                {project.keyDecisions.map((decision, dIdx) => {
                  const [title, ...rest] = decision.split(":");
                  return (
                    <div
                      key={dIdx}
                      className="px-3 py-2 text-xs leading-relaxed"
                      style={{
                        background: "rgba(16,12,24,0.7)",
                        borderLeft: `2px solid ${meta.accent}`,
                      }}
                    >
                      <strong className="text-[#E0AAFF] font-mono block text-[11px] mb-0.5">
                        {title}
                      </strong>
                      <span className="text-[#9D91B0] text-[11px]">
                        {rest.join(":")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 text-[10px] font-mono text-[#D8CFE5]"
                    style={{
                      background: "rgba(155,77,202,0.08)",
                      border: "1px solid rgba(155,77,202,0.25)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-3 border-t border-[#3A1F5C]/40">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium transition-all text-[#F1F0EB] bg-[#161220] hover:bg-[#201830] border border-white/10"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source</span>
              <ArrowUpRight className="w-3 h-3 text-[#7C6A95]" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold transition-all text-[#0D0F0D] bg-[#A0D060] hover:bg-[#B4E070]"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Interactive Minecraft Laboratory Visual Simulator */}
        <div
          className="lg:col-span-7 p-4 sm:p-6 flex items-center justify-center"
          style={{ background: "rgba(6,5,10,0.92)" }}
        >
          {renderInteractiveLab()}
        </div>
      </div>
    </article>
  );
}
