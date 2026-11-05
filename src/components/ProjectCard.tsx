"use client";

import React from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/icons";
import { Project } from "@/data/portfolio";
import CommandBlockLab from "./projects/CommandBlockLab";
import RedstoneCircuitLab from "./projects/RedstoneCircuitLab";
import EnchantmentTableLab from "./projects/EnchantmentTableLab";
import PixelCharacterGuide from "./PixelCharacterGuide";

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

// Character commentary mapping per project
const PROJECT_GUIDE_DATA: Record<string, {
  dialogue: string;
  tip: string;
  mood: "engineer" | "wizard" | "focused";
  pills: string[];
}> = {
  "multi-agent-system": {
    dialogue: "I built a 3-agent research team using LangGraph! Instead of one model guessing, Planner maps the search, Researcher gathers verified sources, and Synthesizer writes the report.",
    tip: "Hit 'Run Pipeline' in the Command Block to watch all 3 agents execute live!",
    mood: "wizard",
    pills: ["3 Autonomous Agents", "LangGraph State Machine", "Google Gemini API"],
  },
  "rate-limiter-microservices": {
    dialogue: "When high traffic bursts hit an API, servers crash. I built this Redis sliding-window limiter with BullMQ queues to absorb massive bursts with sub-millisecond latency.",
    tip: "Click 'Fire Burst' in the redstone circuit to test the token bucket!",
    mood: "engineer",
    pills: ["Redis Lua Scripts", "BullMQ Async Workers", "Microservices Gateway"],
  },
  "conciso-ai-summarizer": {
    dialogue: "Reading dense 50+ page PDFs takes hours. Conciso slices documents with hierarchical chunking and generates executive summaries in seconds using Next.js and PostgreSQL.",
    tip: "Swap the scrolls on the Enchantment Altar to test the summary generator!",
    mood: "focused",
    pills: ["50+ Page Documents", "PostgreSQL Data Layer", "Next.js 15 Full-Stack"],
  },
};

export default function ProjectCard({ project, index, meta }: ProjectCardProps) {
  const guide = PROJECT_GUIDE_DATA[project.id] || {
    dialogue: project.description,
    tip: "Explore the interactive lab on the right!",
    mood: "engineer",
    pills: project.techStack.slice(0, 3),
  };

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
      {/* Top Header Bar */}
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

      {/* Grid: Left Minimal Character Guide + Right Visual Interactive Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

        {/* Left Column: Character Guide & Visual Rough Idea */}
        <div
          className="lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between space-y-5"
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

            {/* Minecraft Character Guide Speech Bubble */}
            <PixelCharacterGuide
              name="Siddhant"
              role="Developer"
              dialogue={guide.dialogue}
              tip={guide.tip}
              mood={guide.mood}
            />

            {/* Visual Highlights Pills (No walls of text) */}
            <div className="space-y-2 pt-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#7C6A95]">
                CORE ARCHITECTURE AT A GLANCE
              </div>
              <div className="flex flex-wrap gap-1.5">
                {guide.pills.map((pill, pIdx) => (
                  <span
                    key={pIdx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-[#E0AAFF]"
                    style={{
                      background: "rgba(124,58,237,0.1)",
                      border: "1px solid rgba(155,77,202,0.3)",
                    }}
                  >
                    <span className="text-[10px]" style={{ color: meta.accent }}>◈</span>
                    <span>{pill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 text-[10px] font-mono text-[#8A7E9B] bg-white/[0.03] border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#3A1F5C]/40">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium transition-all text-[#F1F0EB] bg-[#161220] hover:bg-[#201830] border border-white/10"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
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

        {/* Right Column: Visual Interactive Simulator (Main attraction) */}
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
