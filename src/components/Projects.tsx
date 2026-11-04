"use client";

import React, { useState } from "react";
import { FolderGit2, Sparkles, Filter, Code2, ArrowUpRight } from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.type === filter;
  });

  return (
    <section id="projects" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-[#B8F36B] mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F0EB] tracking-tight">
            Engineered Systems & Projects
          </h2>
          <p className="text-sm sm:text-base text-[#9496A1] mt-2 leading-relaxed">
            Architected for reliability, strict type safety, and real-world scalability. Each system addresses a concrete architectural bottleneck with deliberate engineering trade-offs.
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {[
              { id: "all", label: "All Engineering Projects" },
              { id: "ai-agents", label: "AI & Multi-Agent Pipelines" },
              { id: "distributed-systems", label: "Distributed Systems & Redis" },
              { id: "full-stack", label: "Full Stack Next.js" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  filter === tab.id
                    ? "bg-[#B8F36B] text-[#0B0D12] font-semibold shadow-sm"
                    : "bg-[#11141C] text-[#9496A1] hover:text-[#F1F0EB] border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom GitHub Prompt */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-[#11141C] via-[#141824] to-[#11141C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div>
            <h4 className="text-base font-bold text-[#F1F0EB]">
              Looking for more repositories and source code?
            </h4>
            <p className="text-xs text-[#9496A1] mt-0.5">
              Explore active repositories, commit history, and ongoing experimental builds on GitHub.
            </p>
          </div>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-[#B8F36B] text-[#0B0D12] hover:bg-[#a8ea59] transition-all shadow-md shrink-0"
          >
            <span>Visit @siddhant1232</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
