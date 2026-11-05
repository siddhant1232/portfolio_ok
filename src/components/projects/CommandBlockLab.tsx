"use client";

import React, { useState } from "react";
import { Play, RotateCcw, Check, Sparkles, Terminal, Code2 } from "lucide-react";

export default function CommandBlockLab() {
  const [activeBlock, setActiveBlock] = useState<0 | 1 | 2>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [executionStep, setExecutionStep] = useState<number>(-1);

  const commandBlocks = [
    {
      id: "planner",
      type: "IMPULSE",
      color: "#FF8822",
      borderColor: "#FF8822",
      bgColor: "rgba(255,136,34,0.12)",
      agent: "Planner Agent",
      role: "Task Decomposition & Heuristic Query Formulation",
      command: '/agent execute plan --topic "RAG Architecture" --depth 3',
      schema: "PlanState { subqueries: List[str], max_depth: int }",
      output: [
        "TASK: Decomposing target domain into 3 sub-problems",
        "GENERATED: query_1='Vector embedding similarity benchmarks'",
        "GENERATED: query_2='Sliding window chunking tradeoffs'",
        "GENERATED: query_3='Grounding hallucination rate thresholds'",
        "VALIDATION: Pydantic::PlanState schema verified (100%)",
      ],
      ticks: "1 TICK",
    },
    {
      id: "researcher",
      type: "CHAIN",
      color: "#22CC88",
      borderColor: "#22CC88",
      bgColor: "rgba(34,204,136,0.12)",
      agent: "Researcher Agent",
      role: "Google Gemini API Grounded Retrieval & Citation Extraction",
      command: "/agent execute research --grounded --sources 14 --timeout 5000",
      schema: "ResearchState { citations: List[Source], confidence: float }",
      output: [
        "RETRIEVAL: Calling Google Gemini API with grounded tools",
        "SOURCES: 14 academic & engineering sources parsed",
        "EXTRACTED: Latency budgets (p99 < 85ms across chunks)",
        "EXTRACTED: Vector distance cosine similarity threshold > 0.82",
        "VALIDATION: Citation metadata strictly validated against schema",
      ],
      ticks: "2 TICKS",
    },
    {
      id: "synthesizer",
      type: "REPEAT",
      color: "#AA44FF",
      borderColor: "#AA44FF",
      bgColor: "rgba(170,68,255,0.12)",
      agent: "Synthesizer Agent",
      role: "Structured Cross-Source Synthesis & Report Generation",
      command: "/agent execute synthesize --format markdown --strict-schema",
      schema: "ReportOutput { executive_summary: str, takeaways: List[str] }",
      output: [
        "SYNTHESIS: Merging Planner intent with Researcher evidence",
        "GENERATED: 1,200-word structured engineering report",
        "FORMAT: Executive Summary + Key Architecture Decisions",
        "OUTPUT: 0 hallucinated keys | 100% typed compliance",
        "STATE: Workflow complete with zero unhandled exceptions",
      ],
      ticks: "1 TICK",
    },
  ];

  const runPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setExecutionStep(0);
    setActiveBlock(0);

    setTimeout(() => {
      setExecutionStep(1);
      setActiveBlock(1);
      setTimeout(() => {
        setExecutionStep(2);
        setActiveBlock(2);
        setTimeout(() => {
          setIsRunning(false);
          setExecutionStep(3); // Completed all
        }, 1200);
      }, 1400);
    }, 1400);
  };

  const resetPipeline = () => {
    setIsRunning(false);
    setExecutionStep(-1);
    setActiveBlock(0);
  };

  const current = commandBlocks[activeBlock];

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
      {/* Top Console Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-white/10 gap-2">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 flex items-center justify-center font-mono font-bold text-xs"
            style={{
              background: "rgba(255,136,34,0.2)",
              border: "1px solid #FF8822",
              color: "#FFAA00",
            }}
          >
            &gt;_
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#F1F0EB] font-mono tracking-tight">
              COMMAND BLOCK LABORATORY // ORCHESTRATION PIPELINE
            </h4>
            <p className="text-[11px] font-mono text-[#8A9080]">
              LangGraph State Machine with Pydantic Schema Guarantees
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={runPipeline}
            disabled={isRunning}
            className="px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 transition-all disabled:opacity-50"
            style={{
              background: isRunning ? "#333333" : "#FF8822",
              color: "#0D0F0D",
              border: "1px solid #FFAA00",
              borderTopColor: "#FFCC44",
              borderLeftColor: "#FFCC44",
              borderBottomColor: "#663300",
              borderRightColor: "#663300",
            }}
            title="Execute Command Block Chain"
          >
            <Play className={`w-3.5 h-3.5 fill-current ${isRunning ? "animate-spin" : ""}`} />
            <span>{isRunning ? "EXECUTING..." : "RUN PIPELINE"}</span>
          </button>
          <button
            onClick={resetPipeline}
            className="p-1.5 text-[#8A9080] hover:text-[#F1F0EB] bg-white/5 border border-white/10"
            title="Reset Pipeline State"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* The 3 Command Blocks Chain (Voxel style) */}
      <div className="mb-6">
        <div className="text-[10px] font-mono text-[#5D8A3C] uppercase tracking-wider mb-2">
          ▸ COMMAND BLOCK CHAIN SEQUENCE // SELECT BLOCK TO INSPECT
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {commandBlocks.map((block, idx) => {
            const isSelected = activeBlock === idx;
            const isStepActive = executionStep === idx;
            const isStepFinished = executionStep > idx;

            return (
              <div
                key={block.id}
                onClick={() => setActiveBlock(idx as 0 | 1 | 2)}
                className="p-3.5 cursor-pointer transition-all relative"
                style={{
                  background: isSelected ? block.bgColor : "rgba(13,15,13,0.9)",
                  border: isSelected ? `2px solid ${block.borderColor}` : "2px solid #2B2D2B",
                  borderTopColor: isSelected ? "#FFFFFF" : "#1A1C1A",
                  borderLeftColor: isSelected ? "#FFFFFF" : "#1A1C1A",
                  borderBottomColor: isSelected ? block.borderColor : "#3F423F",
                  borderRightColor: isSelected ? block.borderColor : "#3F423F",
                  boxShadow: isStepActive
                    ? `0 0 15px ${block.color}, inset 0 0 10px rgba(0,0,0,0.5)`
                    : "none",
                }}
              >
                {/* Block Type Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[9px] font-mono font-bold px-1.5 py-0.5"
                    style={{
                      background: block.bgColor,
                      border: `1px solid ${block.borderColor}`,
                      color: block.color,
                    }}
                  >
                    [{block.type}] BLOCK 0{idx + 1}
                  </span>
                  <span className="text-[9px] font-mono text-[#8A9080]">
                    {isStepActive ? (
                      <span className="text-yellow-400 animate-pulse">● RUNNING</span>
                    ) : isStepFinished ? (
                      <span className="text-emerald-400">✔ DONE</span>
                    ) : (
                      block.ticks
                    )}
                  </span>
                </div>

                {/* Command Block Icon Graphic */}
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-7 h-7 flex items-center justify-center font-mono font-bold text-xs"
                    style={{
                      background: block.bgColor,
                      border: `1.5px solid ${block.borderColor}`,
                      color: block.color,
                    }}
                  >
                    &gt;
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#F1F0EB] font-mono leading-tight">
                      {block.agent}
                    </h5>
                    <p className="text-[10px] text-[#8A9080] font-mono mt-0.5 line-clamp-1">
                      {block.role}
                    </p>
                  </div>
                </div>

                {/* Pulsing indicator if currently executing */}
                {isStepActive && (
                  <div
                    className="h-1 w-full mt-2"
                    style={{ background: block.color, boxShadow: `0 0 8px ${block.color}` }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Block Inspector & Live Execution Terminal */}
      <div
        className="p-4"
        style={{
          background: "rgba(10,12,10,0.95)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderLeft: `3px solid ${current.color}`,
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 mb-3 border-b border-white/5 gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase" style={{ color: current.color }}>
              ACTIVE COMMAND: {current.command}
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#A0D060]">
            SCHEMA: {current.schema}
          </span>
        </div>

        {/* Terminal Line Output */}
        <div className="font-mono text-xs space-y-1.5 text-[#C8D4B8] bg-[#080A08] p-3 border border-white/5 min-h-[110px]">
          {current.output.map((line, lIdx) => (
            <div key={lIdx} className="flex items-start gap-2">
              <span className="text-[#5D8A3C] select-none">&gt;</span>
              <span className={lIdx === current.output.length - 1 ? "text-[#A0D060] font-bold" : "text-[#9A9490]"}>
                {line}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Metrics Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 mt-3 border-t border-white/5 text-[10px] font-mono text-[#6E6E6E]">
          <span>State Guarantee: Typed Pydantic Schemas</span>
          <span>Offline Unit Tested: 100% Pass</span>
          <span className="text-[#FFAA00]">Provider Backoff: Jitter Enabled</span>
        </div>
      </div>
    </div>
  );
}

