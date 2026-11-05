"use client";

import React, { useState } from "react";
import { FileText, Sparkles, BookOpen, Layers, Check, Database } from "lucide-react";

export default function EnchantmentTableLab() {
  const [selectedTier, setSelectedTier] = useState<1 | 2 | 3>(2);
  const [selectedDoc, setSelectedDoc] = useState<string>("raft");
  const [isEnchanting, setIsEnchanting] = useState<boolean>(false);

  const docs: Record<
    string,
    { title: string; pages: number; tokens: string; author: string }
  > = {
    raft: {
      title: "Raft Consensus Protocol Whitepaper.pdf",
      pages: 54,
      tokens: "42,800 TOKENS",
      author: "Ongaro & Ousterhout (Stanford)",
    },
    nextjs: {
      title: "Next.js Architecture & Edge Streaming Spec.pdf",
      pages: 38,
      tokens: "31,200 TOKENS",
      author: "Vercel Systems Engineering",
    },
    redis: {
      title: "High-Throughput Redis In-Memory Mesh.pdf",
      pages: 62,
      tokens: "48,500 TOKENS",
      author: "Sanfilippo et al.",
    },
  };

  const currentDoc = docs[selectedDoc];

  const enchantmentTiers = [
    {
      tier: 1,
      name: "Efficiency I",
      badge: "EXECUTIVE TL;DR",
      lapisCost: "1 Lapis",
      compression: "96% Reduction",
      summary: (
        <div className="space-y-2">
          <p className="font-bold text-[#55FFFF]">
            Executive Takeaway: Raft decomposes consensus into 3 independent sub-problems: Leader Election, Log Replication, and Safety Invariants.
          </p>
          <p className="text-[#C8D4B8]">
            Key finding: Significantly easier to formally verify and implement than Multi-Paxos without sacrificing any safety or throughput guarantees.
          </p>
        </div>
      ),
    },
    {
      tier: 2,
      name: "Sharpness III",
      badge: "STRUCTURED ARCHITECTURAL BREAKDOWN",
      lapisCost: "2 Lapis",
      compression: "88% Reduction",
      summary: (
        <div className="space-y-2">
          <p className="font-bold text-[#55FFFF]">
            Sectional Synthesis across 54 Pages:
          </p>
          <ul className="space-y-1.5 list-disc list-inside text-[#C8D4B8]">
            <li>
              <strong className="text-[#FFFFFF]">Heartbeat &amp; Election Timers:</strong> Randomized between 150ms–300ms to eliminate split-vote deadlock in split networks.
            </li>
            <li>
              <strong className="text-[#FFFFFF]">Log Matching Property:</strong> If two logs contain an entry with the same index and term, they are identical up to that point.
            </li>
            <li>
              <strong className="text-[#FFFFFF]">Safety Invariant:</strong> Leaders never overwrite or truncate their own log; only append-only entries are distributed to follower nodes.
            </li>
          </ul>
        </div>
      ),
    },
    {
      tier: 3,
      name: "Infinity I",
      badge: "COMPREHENSIVE DEEP-DIVE DOSSIER",
      lapisCost: "3 Lapis",
      compression: "75% Reduction",
      summary: (
        <div className="space-y-2">
          <p className="font-bold text-[#55FFFF]">
            Exhaustive Technical Analysis &amp; Production Trade-Offs:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
            <div className="p-2 bg-white/5 border border-white/5">
              <span className="text-[#A0D060] font-bold">Membership Changes:</span> Joint consensus transitional configuration ensures zero downtime during cluster node addition.
            </div>
            <div className="p-2 bg-white/5 border border-white/5">
              <span className="text-[#55FFFF] font-bold">Log Compaction:</span> Snapshotting writes state machine memory directly to disk, truncating applied log prefixes.
            </div>
          </div>
          <p className="text-[11px] text-[#8A9080] pt-1">
            Persisted to PostgreSQL with indexed chunk hashes for sub-10ms cached retrieval on subsequent requests.
          </p>
        </div>
      ),
    },
  ];

  const handleSelectTier = (tier: 1 | 2 | 3) => {
    setIsEnchanting(true);
    setSelectedTier(tier);
    setTimeout(() => {
      setIsEnchanting(false);
    }, 400);
  };

  const activeEnchantment = enchantmentTiers.find((t) => t.tier === selectedTier)!;

  return (
    <div
      className="w-full text-left p-5 sm:p-6 select-none"
      style={{
        background: "rgba(18,20,18,0.98)",
        border: "2px solid #373737",
        borderTopColor: "#555",
        borderLeftColor: "#555",
        borderBottomColor: "#111",
        borderRightColor: "#111",
        boxShadow: "0 0 25px rgba(0,0,0,0.8)",
      }}
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-white/10 gap-2">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 flex items-center justify-center font-mono font-bold text-xs"
            style={{
              background: "rgba(87,224,224,0.15)",
              border: "1px solid #57E0E0",
              color: "#57E0E0",
            }}
          >
            💎
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#F1F0EB] font-mono tracking-tight">
              ENCHANTMENT TABLE LAB // DOCUMENT INTELLIGENCE
            </h4>
            <p className="text-[11px] font-mono text-[#8A9080]">
              Hierarchical PDF Chunking &amp; Multi-Tier LLM Synthesis
            </p>
          </div>
        </div>

        {/* Document Selector Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] font-mono text-[#57E0E0] uppercase mr-1">
            SOURCE PDF:
          </span>
          {[
            { id: "raft", label: "Raft (54p)" },
            { id: "nextjs", label: "Next.js (38p)" },
            { id: "redis", label: "Redis (62p)" },
          ].map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDoc(d.id)}
              className="px-2 py-0.5 text-[10px] font-mono transition-all"
              style={{
                background: selectedDoc === d.id ? "rgba(87,224,224,0.25)" : "rgba(13,15,13,0.8)",
                border: selectedDoc === d.id ? "1px solid #57E0E0" : "1px solid rgba(255,255,255,0.08)",
                color: selectedDoc === d.id ? "#57E0E0" : "#8A9080",
              }}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Enchantment Table Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5 items-stretch">
        {/* Left: Selected Document on Lectern */}
        <div
          className="lg:col-span-4 p-4 flex flex-col justify-between"
          style={{
            background: "rgba(13,15,13,0.9)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderLeft: "3px solid #57E0E0",
          }}
        >
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5 font-mono text-[10px] text-[#8A9080]">
              <span>LECTERN ITEM // PDF</span>
              <span className="text-[#57E0E0]">PROCESSED</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-[#57E0E0] shrink-0" />
              <div className="min-w-0">
                <h5 className="text-xs font-bold font-mono text-[#F1F0EB] truncate">
                  {currentDoc.title}
                </h5>
                <p className="text-[10px] text-[#8A9080] font-mono mt-0.5">
                  {currentDoc.author}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 space-y-1.5 font-mono text-[10px] text-[#C8D4B8]">
            <div className="flex justify-between">
              <span className="text-[#6E6E6E]">Document Length:</span>
              <span className="text-[#A0D060]">{currentDoc.pages} Pages</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6E6E6E]">Token Load:</span>
              <span className="text-[#57E0E0]">{currentDoc.tokens}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6E6E6E]">PostgreSQL Cache:</span>
              <span className="text-[#FFAA00]">HIT (Instant)</span>
            </div>
          </div>
        </div>

        {/* Right: The 3 Enchantment Tiers Selection */}
        <div className="lg:col-span-8 space-y-2">
          <div className="text-[10px] font-mono text-[#57E0E0] uppercase tracking-wider mb-1">
            ▸ SELECT ENCHANTMENT DEPTH (CLICK TO TRANSLATE)
          </div>

          {enchantmentTiers.map((tier) => {
            const isSelected = selectedTier === tier.tier;
            return (
              <div
                key={tier.tier}
                onClick={() => handleSelectTier(tier.tier as 1 | 2 | 3)}
                className="p-3 cursor-pointer transition-all flex items-center justify-between gap-3"
                style={{
                  background: isSelected ? "rgba(87,224,224,0.15)" : "rgba(13,15,13,0.85)",
                  border: isSelected ? "1.5px solid #57E0E0" : "1px solid rgba(255,255,255,0.06)",
                  borderTopColor: isSelected ? "#FFFFFF" : "#1A1C1A",
                  boxShadow: isSelected ? "0 0 12px rgba(87,224,224,0.2)" : "none",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 flex items-center justify-center font-mono font-bold text-xs shrink-0"
                    style={{
                      background: isSelected ? "rgba(87,224,224,0.3)" : "rgba(255,255,255,0.05)",
                      border: `1px solid ${isSelected ? "#57E0E0" : "rgba(255,255,255,0.1)"}`,
                      color: isSelected ? "#57E0E0" : "#8A9080",
                    }}
                  >
                    {tier.tier}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#F1F0EB]">
                        {tier.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#57E0E0]">
                        [{tier.badge}]
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-[#55FFFF] italic">
                      ᔑ ʖ ᓵ ↸ · {tier.lapisCost}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-[#A0D060] font-bold shrink-0">
                  {tier.compression}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Synthesized Output Display */}
      <div
        className="p-4"
        style={{
          background: "rgba(10,12,10,0.95)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderLeft: "3px solid #57E0E0",
        }}
      >
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5 font-mono text-[10px]">
          <span className="text-[#57E0E0] font-bold">
            TRANSLATED ENCHANTMENT: {activeEnchantment.badge}
          </span>
          <span className="text-[#8A9080]">
            {isEnchanting ? "✨ ENCHANTING RUNES..." : "AI SYNTHESIS READY"}
          </span>
        </div>

        <div className="font-mono text-xs text-[#C8D4B8] bg-[#080A08] p-3.5 border border-white/5 min-h-[110px] leading-relaxed">
          {isEnchanting ? (
            <div className="flex items-center justify-center py-6 text-sm text-[#57E0E0] font-mono animate-pulse">
              ✨ Translating galactic runes into structured summary...
            </div>
          ) : (
            activeEnchantment.summary
          )}
        </div>

        {/* Footer info */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 mt-3 border-t border-white/5 text-[10px] font-mono text-[#6E6E6E]">
          <span>Chunking: Two-Stage Section Sliding Window</span>
          <span>Backend: Next.js Server Actions + PostgreSQL</span>
          <span className="text-[#A0D060]">Production Ready: Verified</span>
        </div>
      </div>
    </div>
  );
}

