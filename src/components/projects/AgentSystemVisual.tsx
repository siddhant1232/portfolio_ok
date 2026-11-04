"use client";

import React, { useState, useEffect } from "react";
import { BrainCircuit, Search, FileSpreadsheet, ArrowRight, Play, CheckCircle, RefreshCw, Cpu, Layers } from "lucide-react";

export default function AgentSystemVisual() {
  const [activeStep, setActiveStep] = useState<0 | 1 | 2>(0);
  const [isRunning, setIsRunning] = useState(false);

  const nodes = [
    {
      id: "planner",
      title: "Planner Agent",
      role: "Task Decomposition & Query Generation",
      schema: "PlanSchema { subqueries: List[str], max_depth: int }",
      output: "3 search queries formulated with target domain heuristics.",
      icon: <BrainCircuit className="w-5 h-5 text-[#B8F36B]" />,
      status: "Idle",
    },
    {
      id: "researcher",
      title: "Researcher Agent",
      role: "Gemini Grounded Search & Extraction",
      schema: "ResearchState { citations: List[Source], confidence: float }",
      output: "Retrieved 14 verified technical sources with citation metadata.",
      icon: <Search className="w-5 h-5 text-[#0284C7]" />,
      status: "Active",
    },
    {
      id: "synthesizer",
      title: "Synthesizer Agent",
      role: "Structured Cross-Source Synthesis",
      schema: "ReportOutput { executive_summary: str, takeaways: List[str] }",
      output: "Generated 1,200-word structured markdown report with typed schema.",
      icon: <FileSpreadsheet className="w-5 h-5 text-purple-400" />,
      status: "Pending",
    },
  ];

  // Auto-step simulation or manual click
  const simulatePipeline = () => {
    setIsRunning(true);
    setActiveStep(0);
    setTimeout(() => {
      setActiveStep(1);
      setTimeout(() => {
        setActiveStep(2);
        setTimeout(() => {
          setIsRunning(false);
        }, 1200);
      }, 1500);
    }, 1500);
  };

  const selectedNode = nodes[activeStep];

  return (
    <div className="w-full rounded-2xl bg-[#090B0F] border border-white/10 p-5 sm:p-6 text-left flex flex-col justify-between shadow-2xl">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B8F36B] animate-pulse"></span>
            <span className="text-xs font-mono text-[#F1F0EB] font-bold">
              LangGraph Multi-Agent Architecture
            </span>
          </div>
          <p className="text-[11px] font-mono text-[#9496A1] mt-0.5">
            Strict Pydantic Typed State Handoff Pipeline
          </p>
        </div>

        <button
          onClick={simulatePipeline}
          disabled={isRunning}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-[#B8F36B] hover:bg-[#a8ea59] text-[#0B0D12] transition-colors disabled:opacity-50"
        >
          {isRunning ? (
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current" />
          )}
          <span>{isRunning ? "Simulating..." : "Run Pipeline"}</span>
        </button>
      </div>

      {/* Nodes Pipeline Diagram */}
      <div className="py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative">
          {nodes.map((node, index) => {
            const isCurrent = activeStep === index;
            const isCompleted = activeStep > index;

            return (
              <button
                key={node.id}
                onClick={() => setActiveStep(index as 0 | 1 | 2)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 relative group ${
                  isCurrent
                    ? "bg-[#131824] border-[#B8F36B] shadow-[0_0_20px_-3px_rgba(184,243,107,0.25)]"
                    : isCompleted
                    ? "bg-white/[0.03] border-white/20 text-[#CBD5E1]"
                    : "bg-white/[0.01] border-white/10 text-[#9496A1]"
                }`}
              >
                {/* Step indicator tag */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#9496A1]">
                    Stage 0{index + 1}
                  </span>
                  {isCurrent && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#B8F36B]/20 text-[#B8F36B]">
                      Active
                    </span>
                  )}
                  {isCompleted && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                      ✓ Done
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-black/40 border border-white/10">
                    {node.icon}
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-[#F1F0EB]">
                      {node.title}
                    </h5>
                    <p className="text-[10px] font-mono text-[#9496A1] mt-0.5 line-clamp-1">
                      {node.role}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Node State Inspector */}
      <div className="p-4 rounded-xl bg-[#0F131D] border border-white/10 font-mono text-xs space-y-2">
        <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[11px]">
          <span className="text-[#9496A1] uppercase">Node State Telemetry</span>
          <span className="text-[#B8F36B]">Inspect Mode: {selectedNode.title}</span>
        </div>

        <div className="space-y-1.5 pt-1">
          <div>
            <span className="text-[#616573]">Pydantic Schema: </span>
            <span className="text-[#F1F0EB] text-[11px]">{selectedNode.schema}</span>
          </div>
          <div>
            <span className="text-[#616573]">Agent Responsibility: </span>
            <span className="text-[#CBD5E1] text-[11px]">{selectedNode.role}</span>
          </div>
          <div className="p-2 rounded bg-black/40 border border-white/5 text-[11px] text-[#B8F36B]">
            <span className="text-[#9496A1]">Output State Payload ➜ </span>
            {selectedNode.output}
          </div>
        </div>
      </div>
    </div>
  );
}
