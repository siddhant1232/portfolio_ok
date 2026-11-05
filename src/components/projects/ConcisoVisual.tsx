"use client";

import React, { useState } from "react";
import { FileText, Cpu, CheckCircle2, Sparkles, ArrowRight, Layers, FileCode, Check } from "lucide-react";

export default function ConcisoVisual() {
  const [activeStage, setActiveStage] = useState<"document" | "processing" | "summary">("summary");

  return (
    <div className="w-full rounded-2xl bg-[#090B0F] border border-white/10 p-5 sm:p-6 text-left flex flex-col justify-between shadow-2xl">
      {/* Top Header & Stage Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B8F36B] animate-pulse"></span>
            <span className="text-xs font-mono text-[#F1F0EB] font-bold">
              Document Intelligence Pipeline
            </span>
          </div>
          <p className="text-[11px] font-mono text-[#9496A1] mt-0.5">
            Next.js • TypeScript • Large Document Handling (&gt;50 Pages)
          </p>
        </div>

        {/* Stage Toggle */}
        <div className="flex items-center gap-1 bg-[#11141C] p-1 rounded-lg border border-white/10 text-[10px] font-mono">
          <button
            onClick={() => setActiveStage("document")}
            className={`px-2 py-1 rounded transition-all ${
              activeStage === "document"
                ? "bg-[#B8F36B] text-[#0B0D12] font-semibold"
                : "text-[#9496A1] hover:text-[#F1F0EB]"
            }`}
          >
            1. PDF Source
          </button>
          <button
            onClick={() => setActiveStage("processing")}
            className={`px-2 py-1 rounded transition-all ${
              activeStage === "processing"
                ? "bg-[#B8F36B] text-[#0B0D12] font-semibold"
                : "text-[#9496A1] hover:text-[#F1F0EB]"
            }`}
          >
            2. AI Chunking
          </button>
          <button
            onClick={() => setActiveStage("summary")}
            className={`px-2 py-1 rounded transition-all ${
              activeStage === "summary"
                ? "bg-[#B8F36B] text-[#0B0D12] font-semibold"
                : "text-[#9496A1] hover:text-[#F1F0EB]"
            }`}
          >
            3. Summary Output
          </button>
        </div>
      </div>

      {/* Main Visual Display */}
      <div className="py-5">
        {/* Stage 1: Document View */}
        {activeStage === "document" && (
          <div className="p-4 rounded-xl bg-[#11141C] border border-white/10 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-rose-400" />
                <span className="text-[#F1F0EB] font-semibold">Distributed_Consensus_Whitepaper.pdf</span>
              </div>
              <span className="text-[10px] text-[#B8F36B] bg-[#B8F36B]/10 px-2 py-0.5 rounded">
                58 Pages • 6.4 MB
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] text-[#9496A1]">
              <div className="p-2.5 rounded bg-black/40 border border-white/5">
                <span className="text-[#616573] block text-[10px]">PARSER ENGINE</span>
                <span className="text-[#CBD5E1]">PDF Stream Byte Reader</span>
              </div>
              <div className="p-2.5 rounded bg-black/40 border border-white/5">
                <span className="text-[#616573] block text-[10px]">DATABASE STATUS</span>
                <span className="text-emerald-400">Indexed in PostgreSQL</span>
              </div>
            </div>

            <p className="text-[11px] text-[#CBD5E1] bg-black/30 p-2.5 rounded border border-white/5 leading-relaxed font-sans">
              &ldquo;This technical report examines Raft vs Paxos consensus mechanisms in geographically distributed cluster deployments, addressing split-brain resilience and write latencies...&rdquo;
            </p>
          </div>
        )}

        {/* Stage 2: AI Processing & Chunking View */}
        {activeStage === "processing" && (
          <div className="p-4 rounded-xl bg-[#11141C] border border-white/10 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[#F1F0EB] font-semibold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#B8F36B]" />
                Two-Stage Hierarchical Chunking Pipeline
              </span>
              <span className="text-[10px] text-[#B8F36B]">142 Chunks Extracted</span>
            </div>

            <div className="space-y-2 text-[11px]">
              <div className="p-2 rounded bg-black/40 border border-[#B8F36B]/20 flex items-center justify-between">
                <span className="text-[#CBD5E1]">Chunk 01: Abstract & System Topologies</span>
                <span className="text-[#B8F36B]">Tokens: 512</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-[#CBD5E1]">Chunk 02: Failure Modes & Quorum Calculation</span>
                <span className="text-[#9496A1]">Tokens: 488</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-[#CBD5E1]">Chunk 03: Quantitative Benchmarks & Latency</span>
                <span className="text-[#9496A1]">Tokens: 520</span>
              </div>
            </div>

            <div className="text-[10px] text-[#616573] pt-1">
              Context preservation enabled • Sliding window overlap: 64 tokens
            </div>
          </div>
        )}

        {/* Stage 3: Executive Summary Output View */}
        {activeStage === "summary" && (
          <div className="p-4 rounded-xl bg-[#11141C] border border-[#B8F36B]/30 space-y-3 text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 font-mono">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B8F36B]" />
                <span className="text-[#F1F0EB] font-semibold">Structured AI Executive Summary</span>
              </div>
              <span className="text-[10px] text-[#B8F36B] bg-[#B8F36B]/15 px-2 py-0.5 rounded font-mono">
                Synthesis Complete
              </span>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <div className="text-[10px] font-mono text-[#B8F36B] uppercase mb-1">
                  Core Thesis & Key Finding
                </div>
                <p className="text-[#CBD5E1] text-[11px] leading-relaxed">
                  The document details how multi-region Raft state machines reduce leader election split-brain events by 38% through pipelined quorum heartbeat leases.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 rounded bg-black/40 border border-white/5">
                  <span className="text-[10px] font-mono text-[#9496A1] block">Document Length</span>
                  <span className="text-[#F1F0EB] font-bold">58 Pages Processed</span>
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5">
                  <span className="text-[10px] font-mono text-[#9496A1] block">Reading Time Saved</span>
                  <span className="text-[#B8F36B] font-bold font-mono">~2.5 Hours</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="p-2.5 rounded-xl bg-[#0F131D] border border-white/10 font-mono text-[11px] flex items-center justify-between text-[#9496A1]">
        <span className="flex items-center gap-1.5 text-[#F1F0EB]">
          <Layers className="w-3.5 h-3.5 text-[#B8F36B]" />
          PostgreSQL Storage Layer + Full-Stack Next.js Actions
        </span>
        <span className="text-[#B8F36B]">100% Type-Safe</span>
      </div>
    </div>
  );
}

