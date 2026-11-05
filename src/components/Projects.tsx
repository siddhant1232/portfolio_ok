"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

const LAB_META: Record<string, { theme: string; icon: string; label: string; accent: string; border: string; bg: string }> = {
  "multi-agent-system": {
    theme: "command-block",
    icon: "🔮",
    label: "LAB 01",
    accent: "#9B4DCA",
    border: "rgba(155,77,202,0.35)",
    bg: "rgba(155,77,202,0.08)",
  },
  "rate-limiter-microservices": {
    theme: "redstone",
    icon: "⬥",
    label: "LAB 02",
    accent: "#7C3AED",
    border: "rgba(124,58,237,0.35)",
    bg: "rgba(124,58,237,0.08)",
  },
  "conciso-ai-summarizer": {
    theme: "enchantment",
    icon: "✦",
    label: "LAB 03",
    accent: "#E0AAFF",
    border: "rgba(224,170,255,0.35)",
    bg: "rgba(224,170,255,0.06)",
  },
};

// Subtle Starfield
const STARS = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  x: (i * 137.5) % 100,
  y: (i * 97.3) % 100,
  size: i % 4 === 0 ? 2 : 1,
  opacity: 0.15 + (i % 5) * 0.08,
  delay: (i % 6) * 0.4,
}));

export default function Projects() {
  const scrollToLab = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden"
      style={{ background: "#060608", borderTop: "1px solid rgba(155,77,202,0.2)" }}
    >
      {/* Subtle Void Ambient Starfield */}
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
              background: star.id % 3 === 0 ? "#C084FC" : "#F1F0EB",
              opacity: star.opacity,
              borderRadius: "50%",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl">
            {/* Dimension Badge */}
            <div
              className="inline-flex items-center gap-2 px-2.5 py-1 text-[11px] font-mono mb-3"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(155,77,202,0.3)",
                color: "#C084FC",
              }}
            >
              <span>☽</span>
              <span>THE END // OUTER ISLANDS LABS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F0EB] tracking-tight">
              Featured Systems &amp; Projects
            </h2>
            <p className="text-xs sm:text-sm text-[#8A7E9B] mt-2 font-mono leading-relaxed">
              Real-world systems architected for type safety, concurrency, and fault tolerance. Each project includes an interactive engineering lab.
            </p>
          </div>

          {/* Quick Jump Hotbar */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {PROJECTS.map((proj, idx) => {
              const meta = LAB_META[proj.id];
              return (
                <button
                  key={proj.id}
                  onClick={() => scrollToLab(proj.id)}
                  className="px-3 py-1.5 flex items-center gap-1.5 transition-all hover:bg-white/5"
                  style={{
                    background: "rgba(12,10,18,0.9)",
                    border: `1px solid ${meta?.border || "rgba(155,77,202,0.2)"}`,
                    color: meta?.accent || "#C084FC",
                  }}
                >
                  <span>{meta?.icon}</span>
                  <span>0{idx + 1} / {proj.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {PROJECTS.map((project, index) => {
            const meta = LAB_META[project.id] || {
              theme: "default",
              icon: "🔮",
              label: `LAB 0${index + 1}`,
              accent: "#9B4DCA",
              border: "rgba(155,77,202,0.35)",
              bg: "rgba(155,77,202,0.08)",
            };
            return (
              <ProjectCard key={project.id} project={project} index={index} meta={meta} />
            );
          })}
        </div>

        {/* Clean GitHub Prompt */}
        <div
          className="mt-12 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-left"
          style={{
            background: "rgba(12,10,20,0.95)",
            border: "1px solid rgba(155,77,202,0.25)",
            borderTop: "2px solid #7C3AED",
          }}
        >
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#F1F0EB]">
              Looking for more repositories and source code?
            </h4>
            <p className="text-xs text-[#8A7E9B] mt-0.5 font-mono">
              Explore active repositories, full commit histories, and system blueprints on GitHub.
            </p>
          </div>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold shrink-0 transition-all text-[#0D0F0D] bg-[#A0D060] hover:bg-[#B4E070]"
          >
            <span>Visit @siddhant1232</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
