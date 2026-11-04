"use client";

import React from "react";
import { ExternalLink, ArrowUpRight, CheckCircle2, AlertCircle, Cpu, Wrench } from "lucide-react";
import { Github } from "@/components/icons";
import { Project } from "@/data/portfolio";
import AgentSystemVisual from "./projects/AgentSystemVisual";
import RateLimiterVisual from "./projects/RateLimiterVisual";
import ConcisoVisual from "./projects/ConcisoVisual";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const renderVisual = () => {
    switch (project.id) {
      case "multi-agent-system":
        return <AgentSystemVisual />;
      case "rate-limiter-microservices":
        return <RateLimiterVisual />;
      case "conciso-ai-summarizer":
        return <ConcisoVisual />;
      default:
        return null;
    }
  };

  return (
    <article
      id={project.id}
      className="rounded-3xl bg-[#0E1118]/80 border border-white/10 p-6 sm:p-8 lg:p-10 backdrop-blur-sm hover:border-[#B8F36B]/40 transition-all duration-300 shadow-2xl group text-left"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Project Details & Engineering Narrative */}
        <div className="lg:col-span-6 space-y-6">
          {/* Project Index & Category Pill */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#B8F36B] tracking-widest uppercase">
              PROJECT 0{index + 1}
            </span>
            <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-[#9496A1]">
              {project.subtitle}
            </span>
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F1F0EB] tracking-tight group-hover:text-[#B8F36B] transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[#9496A1] mt-1.5 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Overview */}
          <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
            {project.description}
          </p>

          {/* Problem Statement Box */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold uppercase">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Problem Being Addressed</span>
            </div>
            <p className="text-xs sm:text-sm text-[#9496A1] leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Technical Implementation List */}
          <div>
            <h4 className="text-xs font-mono text-[#F1F0EB] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#B8F36B]" />
              <span>Technical Implementation</span>
            </h4>
            <div className="space-y-2">
              {project.implementation.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#B8F36B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Decisions */}
          <div>
            <h4 className="text-xs font-mono text-[#F1F0EB] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Key Engineering Decisions</span>
            </h4>
            <ul className="space-y-2 list-disc list-inside text-xs sm:text-sm text-[#9496A1]">
              {project.keyDecisions.map((decision, dIdx) => (
                <li key={dIdx} className="leading-relaxed">
                  <span className="text-[#CBD5E1] font-medium">{decision.split(":")[0]}:</span>
                  <span>{decision.split(":")[1]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Tags */}
          <div className="pt-2">
            <div className="text-xs font-mono text-[#9496A1] uppercase tracking-wider mb-2">
              Technology Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#11141C] border border-white/10 text-[#F1F0EB] hover:border-[#B8F36B]/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#F1F0EB] hover:text-[#B8F36B] transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#9496A1]" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-[#B8F36B] text-[#0B0D12] hover:bg-[#a8ea59] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Interactive Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Custom Visual System Architecture Component */}
        <div className="lg:col-span-6 w-full h-full flex items-center justify-center">
          {renderVisual()}
        </div>
      </div>
    </article>
  );
}
