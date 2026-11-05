"use client";

import React, { useState } from "react";
import { Terminal, Cpu, Database, BrainCircuit, Check, Shield, Layers, Flame, BookOpen, Compass } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function About() {
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [redstonePowered, setRedstonePowered] = useState<boolean>(true);
  const [commandOutput, setCommandOutput] = useState<string>("SYSTEM_CHECK: All modules verified. Redstone signal strength: 15/15.");

  const chapters = [
    {
      id: "origin",
      num: "I",
      title: "The Origin Block",
      subtitle: "B.Tech CSE '27 // Technocrats Institute of Technology",
      tag: "SPAWN LORE",
      content: (
        <div className="space-y-4 text-sm text-[#C8D4B8] leading-relaxed">
          <p>
            I am a Computer Science undergraduate at <strong className="text-[#A0D060]">Technocrats Institute of Technology, Bhopal</strong>, graduating in <strong className="text-[#A0D060]">May 2027</strong>. My journey started with raw curiosity about how digital systems operate under the hood—not just writing code, but understanding why systems behave the way they do when traffic surges.
          </p>
          <p>
            Rather than staying within theoretical confines, I prioritize building end-to-end products: from low-level memory &amp; data structure design to reactive web interfaces, asynchronous message queues, and cloud deployments.
          </p>
          <div
            className="p-4 mt-3"
            style={{
              background: "rgba(93,138,60,0.08)",
              borderLeft: "3px solid #A0D060",
              borderTop: "1px solid rgba(160,208,96,0.2)",
              borderBottom: "2px solid rgba(0,0,0,0.5)",
            }}
          >
            <div className="text-[11px] font-mono text-[#A0D060] uppercase tracking-wider font-bold mb-1">
              📍 Current Location &amp; Mobility
            </div>
            <p className="text-xs text-[#8A9080]">
              Based in Bhopal, Madhya Pradesh, India (IST UTC+5:30). Fully open to remote roles and on-site relocation for high-impact software engineering opportunities.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "production",
      num: "II",
      title: "The Production Quest",
      subtitle: "Codec Technologies India // Full Stack Intern",
      tag: "REAL-WORLD BUILD",
      content: (
        <div className="space-y-4 text-sm text-[#C8D4B8] leading-relaxed">
          <p>
            During my internship at <strong className="text-[#A0D060]">Codec Technologies India</strong> (October – December 2025), I moved beyond toy projects into production software engineering. I worked on a live e-commerce platform with real customers and strict quality standards.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {[
              "Engineered 8 reusable React components across 6 client-facing modules.",
              "Integrated Stripe payment workflows and Clerk user authentication securely.",
              "Constructed Node.js/Express APIs handling user gamification & digital wallet states.",
              "Collaborated in a 3-member team to deploy services on AWS EC2 & S3.",
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-2.5 flex items-start gap-2"
                style={{
                  background: "rgba(13,15,13,0.8)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderLeft: "2px solid #A0D060",
                }}
              >
                <span className="text-[#A0D060] text-xs mt-0.5">✔</span>
                <span className="text-xs text-[#C8D4B8]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "arena",
      num: "III",
      title: "The National Arena",
      subtitle: "Smart India Hackathon 2025 // IIT Roorkee",
      tag: "NATIONAL FINALS",
      content: (
        <div className="space-y-4 text-sm text-[#C8D4B8] leading-relaxed">
          <p>
            Selected as a <strong className="text-[#FFAA00]">National Finalist at Smart India Hackathon 2025</strong> out of thousands of applicants nationwide. Our 6-member engineering team traveled to <strong className="text-[#F1F0EB]">IIT Roorkee</strong> to present a hardware-software integration for the Ministry of Education &amp; AICTE.
          </p>
          <p>
            The 36-hour sprint tested everything: fast architectural prototyping, resolving unexpected hardware communication bottlenecks on the fly, and articulating complex technical decisions to national jury panels.
          </p>
          <div
            className="p-3 flex items-center justify-between flex-wrap gap-2 text-xs font-mono"
            style={{
              background: "rgba(255,170,0,0.08)",
              border: "1px solid rgba(255,170,0,0.3)",
              borderLeft: "3px solid #FFAA00",
            }}
          >
            <span className="text-[#FFAA00] font-bold">★ JURY VALIDATION</span>
            <span className="text-[#8A9080]">IIT Roorkee · AICTE · MoE</span>
            <span className="text-[#F1F0EB]">6-Member Team Lead Contributor</span>
          </div>
        </div>
      ),
    },
    {
      id: "principles",
      num: "IV",
      title: "Architectural Redstone Laws",
      subtitle: "Core Engineering Principles & Trade-offs",
      tag: "CORE PRINCIPLES",
      content: (
        <div className="space-y-3 text-sm text-[#C8D4B8]">
          {[
            {
              title: "1. Type Safety Is Non-Negotiable",
              desc: "Undefined is not a valid runtime state. I rely on strict TypeScript schemas (Zod, generics) across every boundary to catch bugs before execution.",
              color: "#57E0E0",
            },
            {
              title: "2. Cache First, Query Last",
              desc: "Protecting the primary database is paramount. Redis token buckets, cache-aside layers, and atomic operations prevent cascading failures.",
              color: "#FFAA00",
            },
            {
              title: "3. Grounded AI over Hype",
              desc: "LLMs should not guess. I engineer deterministic AI agent pipelines with LangGraph and RAG vector retrieval that produce cited, verifiable output.",
              color: "#D47CFF",
            },
            {
              title: "4. Asynchronous & Non-Blocking by Default",
              desc: "Offload heavy background compute to worker queues. Keep client latency budgets strictly under 100ms for high user delight.",
              color: "#A0D060",
            },
          ].map((law, idx) => (
            <div
              key={idx}
              className="p-3"
              style={{
                background: "rgba(13,15,13,0.8)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderLeft: `3px solid ${law.color}`,
              }}
            >
              <div className="text-xs font-mono font-bold" style={{ color: law.color }}>
                {law.title}
              </div>
              <p className="text-xs text-[#8A9080] mt-1 leading-relaxed">{law.desc}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const handleCommand = (cmd: string) => {
    switch (cmd) {
      case "inspect":
        setCommandOutput("QUERY: Siddhant Gupta | B.Tech CSE (2027) | Skills: Next.js, Node.js, Redis, LangGraph, Gemini API");
        break;
      case "stats":
        setCommandOutput("STATS: 3 Production APIs | 8 React Modules | SIH 2025 National Finalist | Codec Technologies Intern");
        break;
      case "redstone":
        setRedstonePowered(!redstonePowered);
        setCommandOutput(`REDSTONE: Circuit ${!redstonePowered ? "ACTIVATED (Signal 15)" : "DEACTIVATED (Signal 0)"}`);
        break;
      default:
        setCommandOutput("READY: Select a chapter or run a diagnostic command.");
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ borderTop: "1px solid rgba(93,138,60,0.2)" }}>
      {/* Background Subtle Redstone Dust Circuit */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: redstonePowered
            ? "radial-gradient(circle at 80% 20%, rgba(212,50,28,0.15) 0%, transparent 60%)"
            : "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sector Coordinate Header */}
        <div className="mb-3 font-mono text-[11px] text-[#5D8A3C] tracking-wider">
          ◈ SECTOR: ARCHITECT_CODEX // X:0 Y:64 Z:0 // LECTERN OF THE BUILDER
        </div>

        {/* Section Title & Description */}
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
              <span>📖</span>
              <span>THE ARCHITECT&apos;S CODEX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F1F0EB] tracking-tight">
              Curiosity drives the build.
            </h2>
            <p className="text-sm sm:text-base text-[#8A9080] mt-2 font-mono">
              The lore, engineering principles, and production quests behind the developer.
            </p>
          </div>

          {/* Interactive Redstone Lever Widget */}
          <div
            className="flex items-center gap-3 px-4 py-2.5 self-start lg:self-auto cursor-pointer select-none transition-all"
            style={{
              background: redstonePowered ? "rgba(212,50,28,0.12)" : "rgba(26,28,26,0.8)",
              border: redstonePowered ? "1px solid rgba(212,50,28,0.5)" : "1px solid rgba(255,255,255,0.1)",
              borderTop: redstonePowered ? "1px solid rgba(255,100,80,0.4)" : "1px solid rgba(255,255,255,0.15)",
              borderBottom: "2px solid rgba(0,0,0,0.7)",
              borderRight: "2px solid rgba(0,0,0,0.7)",
            }}
            onClick={() => handleCommand("redstone")}
            title="Click to toggle Redstone Circuit"
          >
            <div
              className="w-3.5 h-3.5 rounded-full transition-all"
              style={{
                background: redstonePowered ? "#FF2200" : "#3C3C3C",
                boxShadow: redstonePowered ? "0 0 10px #FF2200, 0 0 20px rgba(255,34,0,0.6)" : "none",
              }}
            />
            <div className="font-mono text-xs">
              <span className="text-[#8A9080]">REDSTONE LEVER: </span>
              <span style={{ color: redstonePowered ? "#FF4422" : "#6E6E6E" }} className="font-bold">
                [{redstonePowered ? "POWERED ON" : "UNPOWERED"}]
              </span>
            </div>
          </div>
        </div>

        {/* Main Codex Display Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          {/* Left Column: Chapter Selection Navigation */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-[11px] font-mono text-[#5D8A3C] uppercase tracking-wider mb-2">
              ▸ CODEX CHAPTERS // SELECT TO READ
            </div>

            {chapters.map((ch, idx) => {
              const isActive = activeChapter === idx;
              return (
                <div
                  key={ch.id}
                  onClick={() => setActiveChapter(idx)}
                  className="p-4 cursor-pointer transition-all text-left relative"
                  style={{
                    background: isActive ? "rgba(30,36,26,0.95)" : "rgba(20,22,20,0.8)",
                    border: isActive ? "1px solid rgba(160,208,96,0.5)" : "1px solid rgba(255,255,255,0.06)",
                    borderTop: isActive ? "2px solid #A0D060" : "1px solid rgba(255,255,255,0.1)",
                    borderLeft: isActive ? "3px solid #A0D060" : "1px solid rgba(255,255,255,0.08)",
                    borderBottom: "2px solid rgba(0,0,0,0.6)",
                    borderRight: "2px solid rgba(0,0,0,0.6)",
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className="text-[10px] font-mono px-2 py-0.5"
                      style={{
                        background: isActive ? "rgba(160,208,96,0.2)" : "rgba(255,255,255,0.04)",
                        color: isActive ? "#A0D060" : "#6E6E6E",
                      }}
                    >
                      CHAPTER {ch.num}
                    </span>
                    <span
                      className="text-[10px] font-mono tracking-wider"
                      style={{ color: isActive ? "#A0D060" : "#5A5450" }}
                    >
                      {ch.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#F1F0EB] tracking-tight">{ch.title}</h4>
                  <p className="text-[11px] font-mono text-[#8A9080] mt-0.5">{ch.subtitle}</p>
                </div>
              );
            })}

            {/* Quick Diagnostic Command Console */}
            <div
              className="p-4 mt-6"
              style={{
                background: "rgba(14,16,14,0.95)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: "2px solid #5D8A3C",
                borderBottom: "2px solid rgba(0,0,0,0.7)",
                borderRight: "2px solid rgba(0,0,0,0.7)",
              }}
            >
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/5">
                <span className="text-[10px] font-mono text-[#A0D060]">COMMAND_BLOCK // DIAGNOSTICS</span>
                <span className="text-[9px] font-mono text-[#5A5450]">RUN_DEV</span>
              </div>
              <div className="text-[11px] font-mono text-[#8A9080] bg-[#0A0D0A] p-2.5 mb-3 border border-white/5 min-h-[52px]">
                <span className="text-[#A0D060]">&gt; </span>
                {commandOutput}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleCommand("inspect")}
                  className="flex-1 py-1 text-[10px] font-mono bg-white/5 hover:bg-white/10 text-[#C8D4B8] border border-white/10 transition-colors"
                >
                  /inspect
                </button>
                <button
                  onClick={() => handleCommand("stats")}
                  className="flex-1 py-1 text-[10px] font-mono bg-white/5 hover:bg-white/10 text-[#C8D4B8] border border-white/10 transition-colors"
                >
                  /stats
                </button>
                <button
                  onClick={() => handleCommand("redstone")}
                  className="flex-1 py-1 text-[10px] font-mono bg-white/5 hover:bg-white/10 text-[#A0D060] border border-white/10 transition-colors"
                >
                  /lever
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Active Codex Page (The Book & Quill Content) */}
          <div className="lg:col-span-8">
            <div
              className="p-6 sm:p-10 relative overflow-hidden"
              style={{
                background: "rgba(22,25,22,0.98)",
                border: "1px solid rgba(93,138,60,0.3)",
                borderTop: "3px solid #A0D060",
                borderLeft: "1px solid rgba(160,208,96,0.2)",
                borderBottom: "3px solid rgba(0,0,0,0.8)",
                borderRight: "3px solid rgba(0,0,0,0.8)",
              }}
            >
              {/* Header Bar */}
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">📜</span>
                    <span className="text-xs font-mono font-bold text-[#A0D060] tracking-widest uppercase">
                      CHAPTER {chapters[activeChapter].num}: {chapters[activeChapter].title}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[#8A9080] mt-1">{chapters[activeChapter].subtitle}</p>
                </div>

                <div className="flex items-center gap-2 font-mono text-[11px] text-[#6E6E6E]">
                  <span>PAGE {activeChapter + 1} OF 4</span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setActiveChapter(Math.max(0, activeChapter - 1))}
                      disabled={activeChapter === 0}
                      className="px-2 py-0.5 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed border border-white/10 text-[#C8D4B8]"
                    >
                      ◄
                    </button>
                    <button
                      onClick={() => setActiveChapter(Math.min(chapters.length - 1, activeChapter + 1))}
                      disabled={activeChapter === chapters.length - 1}
                      className="px-2 py-0.5 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed border border-white/10 text-[#C8D4B8]"
                    >
                      ►
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Chapter Content Body */}
              <div className="min-h-[260px]">{chapters[activeChapter].content}</div>

              {/* Bottom Specializations Hotbar Footer */}
              <div
                className="mt-8 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="text-[11px] font-mono text-[#5D8A3C] uppercase tracking-wider mb-3">
                  ◈ EQUIPPED SPECIALIZATION SLOTS
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { label: "FULL-STACK", val: "Next.js · TS · React", color: "#A0D060" },
                    { label: "BACKEND", val: "Node · Express · Microservices", color: "#57E0E0" },
                    { label: "DATA & CLOUD", val: "PostgreSQL · Redis · Docker", color: "#FFAA00" },
                    { label: "APPLIED AI", val: "Gemini API · LangGraph · RAG", color: "#D47CFF" },
                  ].map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3"
                      style={{
                        background: "rgba(13,15,13,0.9)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderTop: `2px solid ${spec.color}`,
                        borderBottom: "2px solid rgba(0,0,0,0.6)",
                      }}
                    >
                      <div className="text-[10px] font-mono font-bold tracking-wider" style={{ color: spec.color }}>
                        {spec.label}
                      </div>
                      <div className="text-[11px] font-mono text-[#8A9080] mt-1 line-clamp-1">{spec.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
