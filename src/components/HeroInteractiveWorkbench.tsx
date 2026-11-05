"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Terminal, Cpu, Code2, User, Play, Check, Copy, RefreshCw, Sparkles, MapPin, ExternalLink, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function HeroInteractiveWorkbench() {
  const [activeTab, setActiveTab] = useState<"terminal" | "architecture" | "code" | "identity">("terminal");
  const [commandInput, setCommandInput] = useState("");
  const [copiedCode, setCopiedCode] = useState(false);
  
  // Terminal history
  const [history, setHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: "whoami",
      output: (
        <div className="space-y-1 text-[#CBD5E1]">
          <p><span className="text-[#B8F36B] font-semibold">{PERSONAL_INFO.name}</span> — Full Stack Developer</p>
          <p className="text-xs text-[#9496A1]">Location: {PERSONAL_INFO.location}</p>
          <p className="text-xs text-[#9496A1]">Focus: Scalable Backends, Distributed Systems & AI Multi-Agent Systems</p>
        </div>
      ),
    },
    {
      cmd: "status",
      output: (
        <div className="inline-flex items-center gap-2 text-xs text-[#B8F36B]">
          <span className="w-2 h-2 rounded-full bg-[#B8F36B] animate-pulse"></span>
          <span>Open to Software Development Opportunities (Internships & Full-Time)</span>
        </div>
      ),
    },
  ]);

  const runCommand = (cmdText: string) => {
    const clean = cmdText.trim().toLowerCase();
    let res: React.ReactNode = null;

    switch (clean) {
      case "help":
        res = (
          <div className="text-xs text-[#9496A1] space-y-1">
            <p>Available commands:</p>
            <p className="text-[#CBD5E1]"><span className="text-[#B8F36B]">whoami</span> - Developer profile summary</p>
            <p className="text-[#CBD5E1]"><span className="text-[#B8F36B]">skills</span> - Core technical competencies</p>
            <p className="text-[#CBD5E1]"><span className="text-[#B8F36B]">projects</span> - Key engineered systems</p>
            <p className="text-[#CBD5E1]"><span className="text-[#B8F36B]">contact</span> - Direct communication links</p>
            <p className="text-[#CBD5E1]"><span className="text-[#B8F36B]">clear</span> - Reset terminal window</p>
          </div>
        );
        break;
      case "whoami":
        res = (
          <div className="text-xs text-[#CBD5E1]">
            <span className="text-[#B8F36B] font-semibold">{PERSONAL_INFO.name}</span> — B.Tech CSE (2027) at Technocrats Institute of Technology, Bhopal.
          </div>
        );
        break;
      case "skills":
        res = (
          <div className="text-xs text-[#9496A1] space-y-1">
            <p className="text-[#CBD5E1]"><span className="text-[#B8F36B]">Frontend:</span> React.js, Next.js, TypeScript, Tailwind CSS</p>
            <p className="text-[#CBD5E1]"><span className="text-[#B8F36B]">Backend:</span> Node.js, Express.js, REST APIs, Microservices, JWT</p>
            <p className="text-[#CBD5E1]"><span className="text-[#B8F36B]">Data & Infra:</span> Redis, PostgreSQL, MongoDB, Docker, AWS EC2/S3</p>
            <p className="text-[#CBD5E1]"><span className="text-[#B8F36B]">AI:</span> LangGraph, Google Gemini API, Pydantic, RAG</p>
          </div>
        );
        break;
      case "projects":
        res = (
          <div className="text-xs text-[#9496A1] space-y-1">
            <p className="text-[#CBD5E1]">1. <span className="text-[#B8F36B]">Multi-Agent System</span> (LangGraph, Gemini API, Pydantic)</p>
            <p className="text-[#CBD5E1]">2. <span className="text-[#B8F36B]">Distributed Rate Limiter</span> (Node, Redis, BullMQ, Docker)</p>
            <p className="text-[#CBD5E1]">3. <span className="text-[#B8F36B]">Conciso</span> (Full Stack Next.js & PostgreSQL PDF Summarizer)</p>
          </div>
        );
        break;
      case "contact":
        res = (
          <div className="text-xs text-[#CBD5E1] space-y-0.5">
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#B8F36B] underline">{PERSONAL_INFO.email}</a></p>
            <p>Phone: <span className="text-[#F1F0EB]">{PERSONAL_INFO.phone}</span></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#B8F36B] underline">github.com/siddhant1232</a></p>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setCommandInput("");
        return;
      case "":
        return;
      default:
        res = <span className="text-red-400 text-xs">Command not found: &ldquo;{clean}&rdquo;. Type &lsquo;help&rsquo; for available options.</span>;
    }

    setHistory((prev) => [...prev, { cmd: cmdText, output: res }]);
    setCommandInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(commandInput);
    }
  };

  const codeSnippet = `// Distributed Sliding-Window Rate Limiter
import Redis from "ioredis";

export async function checkRateLimit(
  redis: Redis, 
  clientId: string, 
  limit: number = 60, 
  windowSec: number = 60
): Promise<{ allowed: boolean; remaining: number }> {
  const now = Date.now();
  const windowStart = now - (windowSec * 1000);
  const key = \`ratelimit:\${clientId}\`;

  const pipeline = redis.pipeline();
  pipeline.zremrangebyscore(key, 0, windowStart);
  pipeline.zadd(key, now, \`\${now}-\${Math.random()}\`);
  pipeline.zcard(key);
  pipeline.expire(key, windowSec);

  const results = await pipeline.exec();
  const count = (results?.[2]?.[1] as number) || 0;

  return {
    allowed: count <= limit,
    remaining: Math.max(0, limit - count)
  };
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative w-full rounded-2xl bg-[#0E1118]/90 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden group hover:border-[#B8F36B]/30 transition-all duration-300">
      {/* Decorative ambient glow */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#B8F36B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Workbench Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#131722] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EF4444]/80"></div>
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80"></div>
          <div className="w-3 h-3 rounded-full bg-[#10B981]/80"></div>
          <span className="text-xs font-mono text-[#9496A1] ml-2 hidden sm:inline">
            siddhant@core-engine:~
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-[#0B0D12] p-1 rounded-lg border border-white/5 text-xs font-mono">
          <button
            onClick={() => setActiveTab("terminal")}
            className={`flex items-center gap-1.5 px-2 py-1 rounded-md transition-all ${
              activeTab === "terminal"
                ? "bg-[#171B26] text-[#B8F36B] shadow-sm border border-white/10"
                : "text-[#9496A1] hover:text-[#F1F0EB]"
            }`}
          >
            <Terminal className="w-3 h-3" />
            <span>Terminal</span>
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`flex items-center gap-1.5 px-2 py-1 rounded-md transition-all ${
              activeTab === "architecture"
                ? "bg-[#171B26] text-[#B8F36B] shadow-sm border border-white/10"
                : "text-[#9496A1] hover:text-[#F1F0EB]"
            }`}
          >
            <Cpu className="w-3 h-3" />
            <span>Topology</span>
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`flex items-center gap-1.5 px-2 py-1 rounded-md transition-all ${
              activeTab === "code"
                ? "bg-[#171B26] text-[#B8F36B] shadow-sm border border-white/10"
                : "text-[#9496A1] hover:text-[#F1F0EB]"
            }`}
          >
            <Code2 className="w-3 h-3" />
            <span>Source</span>
          </button>
          <button
            onClick={() => setActiveTab("identity")}
            className={`flex items-center gap-1.5 px-2 py-1 rounded-md transition-all ${
              activeTab === "identity"
                ? "bg-[#171B26] text-[#B8F36B] shadow-sm border border-white/10"
                : "text-[#9496A1] hover:text-[#F1F0EB]"
            }`}
          >
            <User className="w-3 h-3" />
            <span>Identity</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Interactive Terminal */}
      {activeTab === "terminal" && (
        <div className="p-4 sm:p-5 font-mono text-xs text-left min-h-[380px] max-h-[440px] flex flex-col justify-between">
          <div className="space-y-3 overflow-y-auto pr-1">
            <div className="text-[#616573] text-[11px] leading-relaxed pb-2 border-b border-white/5">
              <span>Antigravity Engine v2.4 • Shell active • Type </span>
              <span className="text-[#B8F36B]">help</span>
              <span> to inspect developer capabilities.</span>
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#9496A1]">
                  <span className="text-[#B8F36B]">➜</span>
                  <span className="text-[#616573]">~/portfolio</span>
                  <span className="text-[#F1F0EB] font-semibold">$ {item.cmd}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 space-y-2">
            {/* Quick command buttons */}
            <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
              <span className="text-[#616573] mr-1">Quick:</span>
              {["whoami", "skills", "projects", "contact", "help"].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => runCommand(cmd)}
                  className="px-2 py-0.5 rounded bg-white/5 hover:bg-[#B8F36B]/15 hover:text-[#B8F36B] border border-white/10 text-[#9496A1] transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Input Line */}
            <div className="flex items-center gap-2 bg-[#0B0D12] px-3 py-2 rounded-lg border border-white/10 focus-within:border-[#B8F36B]/50 transition-colors">
              <span className="text-[#B8F36B]">➜</span>
              <input
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'skills', 'projects', 'contact'..."
                className="w-full bg-transparent text-[#F1F0EB] focus:outline-none placeholder:text-[#616573]"
              />
              <button
                onClick={() => runCommand(commandInput)}
                className="p-1 hover:text-[#B8F36B] text-[#9496A1] transition-colors"
                aria-label="Run command"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Architecture Visualizer */}
      {activeTab === "architecture" && (
        <div className="p-5 font-mono text-xs min-h-[380px] max-h-[440px] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-[11px] text-[#9496A1] border-b border-white/10 pb-2">
              <span className="flex items-center gap-1.5 text-[#B8F36B]">
                <span className="w-2 h-2 rounded-full bg-[#B8F36B] animate-pulse"></span>
                DISTRIBUTED TOPOLOGY OVERVIEW
              </span>
              <span className="text-[#616573]">p99: ~12ms</span>
            </div>

            {/* Node flow visual */}
            <div className="space-y-3 text-left">
              {/* Client Layer */}
              <div className="p-2.5 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-[#616573] uppercase">Ingress Layer</div>
                  <div className="text-xs font-semibold text-[#F1F0EB]">Next.js Client / Edge Gateway</div>
                </div>
                <span className="px-2 py-0.5 text-[10px] rounded bg-[#B8F36B]/10 text-[#B8F36B] border border-[#B8F36B]/20">
                  HTTP/3 & TLS
                </span>
              </div>

              {/* Connecting line */}
              <div className="flex justify-center -my-1">
                <div className="w-0.5 h-4 bg-gradient-to-b from-[#B8F36B] to-[#0284C7]/80"></div>
              </div>

              {/* Middleware & Rate Limiting */}
              <div className="p-2.5 rounded-lg border border-[#B8F36B]/30 bg-[#B8F36B]/5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-[#B8F36B] uppercase font-semibold">Traffic Management</div>
                  <div className="text-xs font-semibold text-[#F1F0EB]">Redis Sliding Window Limiter & JWT Auth</div>
                </div>
                <span className="text-[10px] text-[#B8F36B] font-mono">&lt; 1.2ms latency</span>
              </div>

              {/* Connecting line */}
              <div className="flex justify-center -my-1">
                <div className="w-0.5 h-4 bg-gradient-to-b from-[#B8F36B] to-purple-400"></div>
              </div>

              {/* Backend & AI Services */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg border border-white/10 bg-white/[0.02]">
                  <div className="text-[10px] text-purple-400 uppercase">Microservices</div>
                  <div className="text-xs font-semibold text-[#F1F0EB]">Node.js + BullMQ</div>
                  <p className="text-[10px] text-[#9496A1] mt-0.5">Async Task Queue</p>
                </div>
                <div className="p-2.5 rounded-lg border border-white/10 bg-white/[0.02]">
                  <div className="text-[10px] text-emerald-400 uppercase">AI Orchestration</div>
                  <div className="text-xs font-semibold text-[#F1F0EB]">LangGraph + Gemini</div>
                  <p className="text-[10px] text-[#9496A1] mt-0.5">Typed State Handoff</p>
                </div>
              </div>

              {/* Storage Layer */}
              <div className="p-2.5 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-[#616573] uppercase">Data Persistence</div>
                  <div className="text-xs font-semibold text-[#F1F0EB]">PostgreSQL • MongoDB • Redis • S3</div>
                </div>
                <span className="text-[10px] text-[#9496A1]">ACID & Object Store</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#616573]">
            <span>Architecture Design Pattern: Modular, Resilient, Event-Driven</span>
            <span className="text-[#B8F36B]">100% Type-Safe</span>
          </div>
        </div>
      )}

      {/* Tab 3: Production Code Snippet */}
      {activeTab === "code" && (
        <div className="p-4 sm:p-5 font-mono text-xs text-left min-h-[380px] max-h-[440px] flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[#9496A1] text-xs">rateLimiter.ts</span>
              <button
                onClick={copyCode}
                className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-[#CBD5E1] transition-colors"
              >
                {copiedCode ? <Check className="w-3 h-3 text-[#B8F36B]" /> : <Copy className="w-3 h-3" />}
                <span>{copiedCode ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <pre className="overflow-x-auto text-[11px] leading-relaxed text-[#CBD5E1] max-h-[290px] p-2 bg-[#08090D] rounded-lg border border-white/5">
              <code>{codeSnippet}</code>
            </pre>
          </div>

          <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#616573]">
            <span>Redis Sorted Set Sliding Window Implementation</span>
            <span className="text-[#B8F36B]">Production Pattern</span>
          </div>
        </div>
      )}

      {/* Tab 4: Developer Identity / Profile */}
      {activeTab === "identity" && (
        <div className="p-5 font-mono text-xs text-left min-h-[380px] max-h-[440px] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="flex items-center gap-1.5 text-[#B8F36B]">
                <span className="w-2 h-2 rounded-full bg-[#B8F36B] animate-pulse"></span>
                ENGINEER IDENTITY SPEC
              </span>
              <span className="text-[#616573]">Bhopal, MP (IST)</span>
            </div>

            {/* Profile Row with photo */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/10">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-[#B8F36B]/50 shrink-0">
                <Image
                  src="/siddhant.jpg"
                  alt="Siddhant Gupta"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-[#F1F0EB]">{PERSONAL_INFO.name}</h4>
                  <span className="px-1.5 py-0.2 rounded text-[10px] bg-[#B8F36B]/20 text-[#B8F36B]">
                    Active
                  </span>
                </div>
                <p className="text-[11px] text-[#B8F36B] font-mono leading-tight">
                  Full Stack Developer
                </p>
                <p className="text-[10px] text-[#9496A1]">
                  Technocrats Institute of Technology (2023–2027)
                </p>
              </div>
            </div>

            {/* Key Engineering Attributes */}
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 space-y-0.5">
                <span className="text-[#616573] text-[10px] block uppercase">Backend Arch</span>
                <span className="text-[#CBD5E1]">Node, Express, REST</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 space-y-0.5">
                <span className="text-[#616573] text-[10px] block uppercase">Distributed Data</span>
                <span className="text-[#CBD5E1]">Redis, Postgres, Mongo</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 space-y-0.5">
                <span className="text-[#616573] text-[10px] block uppercase">Frontend Systems</span>
                <span className="text-[#CBD5E1]">React, Next.js, TS</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 space-y-0.5">
                <span className="text-[#616573] text-[10px] block uppercase">AI Tooling</span>
                <span className="text-[#B8F36B]">LangGraph, Gemini API</span>
              </div>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
            <a
              href="#about"
              className="text-[#B8F36B] hover:underline flex items-center gap-1"
            >
              <span>Read Full Background</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[#616573]">SIH &apos;25 National Round</span>
          </div>
        </div>
      )}
    </div>
  );
}
