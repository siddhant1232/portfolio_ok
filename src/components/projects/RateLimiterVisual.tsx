"use client";

import React, { useState } from "react";
import { ShieldCheck, Database, Server, Cpu, Bell, Activity, Play, Zap, CheckCircle2, AlertOctagon } from "lucide-react";

export default function RateLimiterVisual() {
  const [algorithm, setAlgorithm] = useState<"sliding-window" | "token-bucket">("sliding-window");
  const [tokensRemaining, setTokensRemaining] = useState(10);
  const [logs, setLogs] = useState<Array<{ id: number; status: number; text: string }>>([
    { id: 1, status: 200, text: "GET /api/v1/user/profile — 200 OK (0.8ms)" },
    { id: 2, status: 200, text: "POST /api/v1/auth/verify — 200 OK (1.1ms)" },
  ]);

  const simulateBurst = () => {
    const newLogs: Array<{ id: number; status: number; text: string }> = [];
    let currentTokens = tokensRemaining;

    for (let i = 0; i < 4; i++) {
      if (currentTokens > 0) {
        currentTokens--;
        newLogs.push({
          id: Date.now() + i,
          status: 200,
          text: `REQ #0${i + 1} ➔ API Gateway ➔ 200 OK (Tokens left: ${currentTokens})`,
        });
      } else {
        newLogs.push({
          id: Date.now() + i,
          status: 429,
          text: `REQ #0${i + 1} ➔ Rate Limit Exceeded ➔ 429 Too Many Requests (Retry-After: 4s)`,
        });
      }
    }

    setTokensRemaining(currentTokens);
    setLogs((prev) => [...newLogs, ...prev].slice(0, 5));
  };

  const resetTokens = () => {
    setTokensRemaining(10);
    setLogs([
      { id: Date.now(), status: 200, text: "Redis window reset: 10/10 tokens restored." },
    ]);
  };

  return (
    <div className="w-full rounded-2xl bg-[#090B0F] border border-white/10 p-5 sm:p-6 text-left flex flex-col justify-between shadow-2xl">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B8F36B] animate-pulse"></span>
            <span className="text-xs font-mono text-[#F1F0EB] font-bold">
              Distributed Gateway & Microservices Mesh
            </span>
          </div>
          <p className="text-[11px] font-mono text-[#9496A1] mt-0.5">
            Redis Sorted Set Sliding Window Rate Limiting
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-[#11141C] p-1 rounded-lg border border-white/10 text-[10px] font-mono flex">
            <button
              onClick={() => setAlgorithm("sliding-window")}
              className={`px-2 py-0.5 rounded ${
                algorithm === "sliding-window"
                  ? "bg-[#B8F36B] text-[#0B0D12] font-semibold"
                  : "text-[#9496A1] hover:text-[#F1F0EB]"
              }`}
            >
              Sliding Window
            </button>
            <button
              onClick={() => setAlgorithm("token-bucket")}
              className={`px-2 py-0.5 rounded ${
                algorithm === "token-bucket"
                  ? "bg-[#B8F36B] text-[#0B0D12] font-semibold"
                  : "text-[#9496A1] hover:text-[#F1F0EB]"
              }`}
            >
              Token Bucket
            </button>
          </div>

          <button
            onClick={simulateBurst}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-lg bg-[#B8F36B] hover:bg-[#a8ea59] text-[#0B0D12] transition-colors"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Burst (4 Req)</span>
          </button>
        </div>
      </div>

      {/* Architecture Node Diagram */}
      <div className="py-5">
        {/* Central Gateway */}
        <div className="p-3 rounded-xl bg-[#141926] border border-[#B8F36B]/40 shadow-[0_0_15px_-3px_rgba(184,243,107,0.2)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#B8F36B]/10 text-[#B8F36B]">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#F1F0EB] flex items-center gap-2">
                <span>API Gateway & Distributed Rate Limiter</span>
                <span className="px-1.5 py-0.2 rounded text-[10px] bg-[#B8F36B]/20 text-[#B8F36B]">
                  Active
                </span>
              </div>
              <p className="text-[10px] font-mono text-[#9496A1]">
                Node.js • Express • Redis Atomic Lua Scripting
              </p>
            </div>
          </div>

          <div className="text-right font-mono text-[11px]">
            <span className="text-[#9496A1]">Quota: </span>
            <span className={`font-bold ${tokensRemaining === 0 ? "text-red-400" : "text-[#B8F36B]"}`}>
              {tokensRemaining}/10 Tokens
            </span>
            {tokensRemaining === 0 && (
              <button
                onClick={resetTokens}
                className="block text-[10px] text-blue-400 underline mt-0.5"
              >
                Reset Quota
              </button>
            )}
          </div>
        </div>

        {/* Animated Connector Tree */}
        <div className="flex justify-around my-2 text-[10px] font-mono text-[#616573]">
          <span>│</span>
          <span>│</span>
          <span>│</span>
        </div>

        {/* 6 Connected Subsystems Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {/* Node 1: Auth Service */}
          <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10 hover:border-[#B8F36B]/30 transition-colors">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#F1F0EB]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Auth Service</span>
            </div>
            <p className="text-[10px] font-mono text-[#9496A1] mt-0.5">JWT & RBAC Validation</p>
          </div>

          {/* Node 2: User Service */}
          <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10 hover:border-[#B8F36B]/30 transition-colors">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#F1F0EB]">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span>User Service</span>
            </div>
            <p className="text-[10px] font-mono text-[#9496A1] mt-0.5">Profile & Permission logic</p>
          </div>

          {/* Node 3: Notification Service */}
          <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10 hover:border-[#B8F36B]/30 transition-colors">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#F1F0EB]">
              <Bell className="w-3.5 h-3.5 text-purple-400" />
              <span>Notification</span>
            </div>
            <p className="text-[10px] font-mono text-[#9496A1] mt-0.5">BullMQ Async Workers</p>
          </div>

          {/* Node 4: Redis Store */}
          <div className="p-2.5 rounded-lg bg-white/[0.02] border border-[#B8F36B]/20 transition-colors">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#F1F0EB]">
              <Database className="w-3.5 h-3.5 text-[#B8F36B]" />
              <span>Redis Cluster</span>
            </div>
            <p className="text-[10px] font-mono text-[#9496A1] mt-0.5">Sorted Sets & Caching</p>
          </div>

          {/* Node 5: PostgreSQL */}
          <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10 hover:border-[#B8F36B]/30 transition-colors">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#F1F0EB]">
              <Database className="w-3.5 h-3.5 text-sky-400" />
              <span>PostgreSQL</span>
            </div>
            <p className="text-[10px] font-mono text-[#9496A1] mt-0.5">ACID User Data Store</p>
          </div>

          {/* Node 6: MongoDB */}
          <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10 hover:border-[#B8F36B]/30 transition-colors">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#F1F0EB]">
              <Database className="w-3.5 h-3.5 text-emerald-500" />
              <span>MongoDB</span>
            </div>
            <p className="text-[10px] font-mono text-[#9496A1] mt-0.5">Audit & Telemetry Logs</p>
          </div>
        </div>
      </div>

      {/* Live Request Stream Log */}
      <div className="p-3 rounded-xl bg-[#0F131D] border border-white/10 font-mono text-[11px] space-y-1.5">
        <div className="flex items-center justify-between text-[#616573] border-b border-white/5 pb-1">
          <span>Live Ingress Stream</span>
          <span className="text-[#B8F36B]">Docker Containerized</span>
        </div>
        {logs.map((log) => (
          <div key={log.id} className="flex items-center gap-2 truncate">
            {log.status === 200 ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            ) : (
              <AlertOctagon className="w-3.5 h-3.5 text-red-400 shrink-0" />
            )}
            <span className={log.status === 200 ? "text-[#CBD5E1]" : "text-red-400"}>
              {log.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
