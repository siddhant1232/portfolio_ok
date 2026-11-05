"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, Download, ExternalLink, Terminal, ChevronRight, Play } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { PERSONAL_INFO } from "@/data/portfolio";

// SVG-based voxel landscape scene
function VoxelLandscape() {
  return (
    <div className="relative w-full h-48 sm:h-56 overflow-hidden select-none">
      <svg
        viewBox="0 0 800 200"
        className="w-full h-full"
        style={{ imageRendering: "pixelated" }}
        aria-hidden="true"
      >
        {/* Sky gradient */}
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0A0E0A" />
            <stop offset="100%" stopColor="#0F140F" />
          </linearGradient>
          <linearGradient id="grassTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5D8A3C" />
            <stop offset="100%" stopColor="#4A6E2E" />
          </linearGradient>
          <linearGradient id="grassSide" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2D4A1C" />
            <stop offset="100%" stopColor="#1E3010" />
          </linearGradient>
          <linearGradient id="stone1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2A2C2A" />
            <stop offset="100%" stopColor="#1A1C1A" />
          </linearGradient>
          <linearGradient id="stone2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#222422" />
            <stop offset="100%" stopColor="#161816" />
          </linearGradient>
        </defs>

        <rect width="800" height="200" fill="url(#sky)" />

        {/* Stars */}
        {[
          [50,15],[120,8],[200,22],[310,5],[420,18],[530,10],[650,7],[720,25],[780,13],
          [80,40],[180,30],[280,38],[380,28],[480,42],[580,32],[680,20],[760,38],
        ].map(([x,y], i) => (
          <rect key={i} x={x} y={y} width="2" height="2" fill="rgba(255,255,255,0.4)" />
        ))}

        {/* Moon */}
        <rect x="720" y="12" width="20" height="20" fill="#D4C8A0" opacity="0.7" />
        <rect x="722" y="14" width="16" height="16" fill="#C8BC94" opacity="0.5" />

        {/* Background mountains (distant) */}
        {[0,80,160,240,320,400,480,560,640,720].map((x, i) => (
          <g key={i}>
            <rect x={x} y={120 - (i%3)*12 - 20} width="80" height={60 + (i%3)*12 + 20} fill="#141614" />
            <rect x={x} y={119 - (i%3)*12 - 20} width="80" height="1" fill="#1A1C1A" />
          </g>
        ))}

        {/* Terrain Blocks — back row */}
        {Array.from({length: 26}, (_, i) => i*32).map((x, i) => {
          const h = [152,148,152,148,160,148,152,148,152,148,160,148,152,148,152,148,152,148,160,148,152,148,152,148,152,148][i] || 148;
          return (
            <g key={i}>
              <rect x={x} y={h} width="32" height="200" fill="url(#stone1)" />
              <rect x={x} y={h} width="32" height="6" fill="url(#grassTop)" />
              <rect x={x} y={h+1} width="2" height="4" fill="rgba(255,255,255,0.08)" />
            </g>
          );
        })}

        {/* Terrain Blocks — raised sections */}
        {[
          { x: 64, y: 136, w: 64 },
          { x: 192, y: 128, w: 32 },
          { x: 288, y: 136, w: 96 },
          { x: 480, y: 120, w: 64 },
          { x: 608, y: 136, w: 64 },
          { x: 704, y: 128, w: 96 },
        ].map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={b.y} width={b.w} height="200" fill="url(#stone2)" />
            <rect x={b.x} y={b.y} width={b.w} height="7" fill="url(#grassTop)" />
            <rect x={b.x} y={b.y+1} width="3" height="5" fill="rgba(255,255,255,0.1)" />
          </g>
        ))}

        {/* Trees */}
        {[
          { x: 150, trunk: 155, leaves: 125 },
          { x: 400, trunk: 143, leaves: 113 },
          { x: 530, trunk: 148, leaves: 118 },
          { x: 660, trunk: 150, leaves: 120 },
        ].map((t, i) => (
          <g key={i}>
            {/* trunk */}
            <rect x={t.x} y={t.trunk} width="8" height="20" fill="#3D2612" />
            <rect x={t.x+1} y={t.trunk} width="2" height="20" fill="rgba(255,255,255,0.1)" />
            {/* leaves */}
            <rect x={t.x-12} y={t.leaves} width="32" height="12" fill="#2D5A1C" />
            <rect x={t.x-8} y={t.leaves-10} width="24" height="12" fill="#3A6E22" />
            <rect x={t.x-4} y={t.leaves-18} width="16" height="10" fill="#2D5A1C" />
            {/* leaf top highlight */}
            <rect x={t.x-4} y={t.leaves-18} width="16" height="2" fill="rgba(93,138,60,0.5)" />
          </g>
        ))}

        {/* Redstone lamp glowing */}
        <rect x="468" y="130" width="10" height="10" fill="#D4321C" opacity="0.8" />
        <rect x="466" y="128" width="14" height="14" fill="none" stroke="rgba(212,50,28,0.3)" strokeWidth="2" />

        {/* Diamond ore hint */}
        <rect x="120" y="175" width="8" height="8" fill="#57E0E0" opacity="0.6" />
        <rect x="122" y="177" width="4" height="4" fill="#8AECEC" opacity="0.8" />

        {/* Grass details - pixel tufts */}
        {[32,96,224,320,384,544,672].map((x, i) => (
          <g key={i}>
            <rect x={x} y={144} width="2" height="6" fill="#6B9A44" opacity="0.7" />
            <rect x={x+4} y={142} width="2" height="8" fill="#5D8A3C" opacity="0.7" />
            <rect x={x+8} y={145} width="2" height="5" fill="#6B9A44" opacity="0.5" />
          </g>
        ))}

        {/* Coordinate overlay at bottom */}
        <text x="8" y="195" fontFamily="Courier New" fontSize="9" fill="rgba(93,138,60,0.5)">
          XYZ: 0 / 64 / 0 | Dimension: Overworld | Biome: Software Engineering
        </text>
      </svg>
    </div>
  );
}

// Minecraft-inspired Terminal
function HeroTerminal() {
  const [history, setHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: "help",
      output: (
        <div className="text-[11px] space-y-0.5">
          <p className="text-[#A0D060] font-semibold">// AVAILABLE COMMANDS</p>
          {["whoami","about","experience","projects","skills","achievements","education","contact","ender","portal","clear"].map(c => (
            <p key={c}><span className="text-[#A0D060]">{c}</span> <span className="text-[#5A5450]">— navigate to section / summon entity</span></p>
          ))}
        </div>
      ),
    }
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const navigate = (section: string) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    let out: React.ReactNode;

    const sections = ["about","experience","projects","skills","achievements","education","contact"];
    if (sections.includes(cmd)) {
      navigate(cmd);
      out = <span className="text-[#A0D060] text-[11px]">↓ Navigating to <strong>{cmd}</strong>...</span>;
    } else {
      switch (cmd) {
        case "whoami":
          out = (
            <div className="text-[11px] space-y-0.5">
              <p className="text-[#E8E0D0]"><span className="text-[#A0D060]">player:</span> {PERSONAL_INFO.name}</p>
              <p className="text-[#E8E0D0]"><span className="text-[#A0D060]">role:</span> Full Stack Developer</p>
              <p className="text-[#E8E0D0]"><span className="text-[#A0D060]">location:</span> {PERSONAL_INFO.location}</p>
              <p className="text-[#E8E0D0]"><span className="text-[#A0D060]">status:</span> <span className="text-[#A0D060]">◉</span> Open to SDE Opportunities</p>
            </div>
          );
          break;
        case "ender":
        case "assistant":
        case "rag":
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("summon-ender-assistant"));
          }
          out = (
            <div className="text-[11px] space-y-0.5 text-[#C084FC]">
              <p>☽ Summong Ender Assistant from The Void...</p>
              <p className="text-[10px] text-[#9D8EB5]">Ender entity active. Knock twice or query via chat interface.</p>
            </div>
          );
          break;
        case "portal":
        case "nether":
          navigate("contact");
          out = <span className="text-[#C084FC] text-[11px]">⚡ Igniting Nether Portal... Transmitting to dimensional contact hub.</span>;
          break;
        case "end":
          navigate("projects");
          out = <span className="text-[#E0AAFF] text-[11px]">☽ Teleporting to The End Dimension (Outer Islands Labs)...</span>;
          break;
        case "craft":
          navigate("skills");
          out = <span className="text-[#FFAA00] text-[11px]">⚒ Opening 3×3 Engineering Crafting Table...</span>;
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "help":
          out = (
            <div className="text-[11px] space-y-0.5">
              <p className="text-[#A0D060] font-semibold">// AVAILABLE COMMANDS</p>
              {["whoami","about","experience","projects","skills","achievements","education","contact","ender","portal","clear"].map(c => (
                <p key={c}><span className="text-[#A0D060]">{c}</span></p>
              ))}
            </div>
          );
          break;
        default:
          out = <span className="text-[#D4321C] text-[11px]">Unknown command: &quot;{cmd}&quot;. Type <span className="text-[#A0D060]">help</span> for commands.</span>;
      }
    }
    setHistory(prev => [...prev, { cmd: raw, output: out }]);
    setInput("");
  };

  return (
    <div className="command-terminal rounded-none p-3 w-full h-52 flex flex-col" style={{ border: "2px solid #2A2A2A", borderBottomColor: "#111", borderRightColor: "#111" }}>
      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#2A2A2A]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#D4321C]/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFAA00]/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#5D8A3C]/80"></div>
        </div>
        <span className="text-[10px] text-[#3A3C3A] font-mono tracking-wider">COMMAND_CONSOLE_v2.4 // /execute run dev</span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 font-mono text-[11px] pr-1">
        {history.map((h, i) => (
          <div key={i} className="space-y-0.5">
            <div className="flex items-center gap-1 text-[#5D8A3C]">
              <span>►</span>
              <span className="text-[#9A9490]">siddhant@world</span>
              <span className="text-[#3A3C3A]">~$</span>
              <span className="text-[#E8E0D0]">{h.cmd}</span>
            </div>
            <div className="pl-4 text-[#9A9490]">{h.output}</div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="flex items-center gap-1 pt-2 border-t border-[#1A1A1A] font-mono text-[11px]">
        <span className="text-[#5D8A3C]">►</span>
        <span className="text-[#9A9490]">$</span>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") run(input); }}
          placeholder="type a command..."
          className="flex-1 bg-transparent text-[#E8E0D0] focus:outline-none placeholder:text-[#3A3C3A]"
          aria-label="Terminal command input"
        />
        <span className="text-[#5D8A3C] coord-cursor">█</span>
        <button onClick={() => run(input)} className="ml-1 text-[#5D8A3C] hover:text-[#A0D060]">
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default function Hero({ onOpenResumeModal }: { onOpenResumeModal?: () => void }) {
  return (
    <section id="hero" className="relative min-h-screen bg-void-grid overflow-hidden">
      {/* Atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#5D8A3C]/5 blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-[#57E0E0]/3 blur-[100px]" />
      </div>

      {/* Top voxel landscape */}
      <div className="absolute bottom-0 left-0 right-0">
        <VoxelLandscape />
      </div>

      {/* Spawn label */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="coord-label tracking-widest uppercase">
          ◈ SPAWN POINT // X:0 Y:64 Z:0 ◈
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-56">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 font-mono text-[11px] text-[#A0D060] bg-[#1E2A14]/80"
              style={{ border: "1px solid rgba(93,138,60,0.4)", borderBottomColor: "rgba(0,0,0,0.4)", borderRightColor: "rgba(0,0,0,0.4)" }}>
              <span className="w-2 h-2 bg-[#A0D060] animate-pulse"></span>
              OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#E8E0D0] tracking-tight leading-[1.0] text-shadow-block">
                Hey, I'm{" "}
                <span className="text-[#A0D060]">Siddhant.</span>
              </h1>
              <p className="mt-3 text-base sm:text-lg font-mono text-[#9A9490] tracking-wide">
                Full Stack Developer | Backend Engineering | AI Applications
              </p>
            </div>

            {/* Intro */}
            <p className="text-sm sm:text-base text-[#9A9490] leading-relaxed max-w-xl">
              I build scalable software systems, thoughtful interfaces, and practical AI-powered applications.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 font-mono font-bold text-sm text-[#0D0F0D] bg-[#A0D060] hover:bg-[#B4E070] transition-all"
                style={{ border: "2px solid rgba(255,255,255,0.15)", borderBottomColor: "rgba(0,0,0,0.5)", borderRightColor: "rgba(0,0,0,0.5)" }}
              >
                <Play className="w-4 h-4 fill-current" />
                Explore World
              </a>

              <a
                href="/Siddhant_Gupta_Resume.pdf"
                download="Siddhant_Gupta_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 font-mono font-bold text-sm text-[#E8E0D0] hover:text-[#A0D060] transition-colors bg-[#141614]"
                style={{ border: "2px solid rgba(255,255,255,0.1)", borderBottomColor: "rgba(0,0,0,0.5)", borderRightColor: "rgba(0,0,0,0.5)" }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <a
                href={PERSONAL_INFO.github}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-[#9A9490] hover:text-[#A0D060] transition-colors bg-[#0F110F] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(93,138,60,0.4)]"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-[#9A9490] hover:text-[#57E0E0] transition-colors bg-[#0F110F] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(87,224,224,0.4)]"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 text-[#9A9490] hover:text-[#FFAA00] transition-colors bg-[#0F110F] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,170,0,0.4)]"
              >
                <span>✉</span> Email
              </a>
            </div>
          </div>

          {/* Right: Portrait + Terminal */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Character Profile Frame */}
            <div className="relative mx-auto w-full max-w-sm">
              {/* Block frame decoration */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#A0D060]"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#A0D060]"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#A0D060]"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#A0D060]"></div>

              <div
                className="relative overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, #1A2A14 0%, #0F140F 100%)",
                  border: "2px solid rgba(93,138,60,0.5)",
                  borderBottomColor: "rgba(0,0,0,0.6)",
                  borderRightColor: "rgba(0,0,0,0.6)",
                }}
              >
                {/* Header bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#1A2A14] border-b border-[rgba(93,138,60,0.2)]">
                  <span className="text-[10px] font-mono text-[#5D8A3C] tracking-wider uppercase">◈ Character Profile</span>
                  <span className="text-[10px] font-mono text-[#3A5A28]">SDE_v2.0</span>
                </div>

                {/* Photo */}
                <div className="relative aspect-[4/4.5] overflow-hidden">
                  <Image
                    src="/siddhant.jpg"
                    alt="Siddhant Gupta — Full Stack Developer"
                    fill
                    priority
                    className="object-cover object-top"
                    style={{ filter: "contrast(1.08) brightness(0.9) saturate(0.85)" }}
                  />
                  {/* Scan line effect overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
                    }}
                  />
                  {/* Bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0F140F] to-transparent" />
                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="font-black text-[#E8E0D0] text-base tracking-tight">{PERSONAL_INFO.name}</p>
                    <p className="text-[11px] font-mono text-[#A0D060] mt-0.5">Full Stack Developer • Bhopal, India</p>
                  </div>
                </div>

                {/* Quick stats bar */}
                <div className="grid grid-cols-3 divide-x divide-[rgba(255,255,255,0.05)] bg-[#0F140F]">
                  {[
                    { label: "Class", value: "Full Stack" },
                    { label: "Level", value: "CSE '27" },
                    { label: "Status", value: "Open" },
                  ].map((s) => (
                    <div key={s.label} className="px-2 py-2 text-center">
                      <div className="text-[9px] font-mono text-[#3A5A28] uppercase tracking-wider">{s.label}</div>
                      <div className="text-[11px] font-mono font-bold text-[#A0D060] mt-0.5">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Terminal */}
            <HeroTerminal />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-56 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[9px] font-mono text-[#5D8A3C] tracking-widest uppercase">scroll to explore</span>
        <ArrowDown className="w-4 h-4 text-[#5D8A3C] animate-bounce" />
      </div>
    </section>
  );
}
