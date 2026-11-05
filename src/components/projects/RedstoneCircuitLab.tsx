"use client";

import React, { useState } from "react";
import { Zap, RotateCcw, AlertTriangle, CheckCircle2, Shield, Server, Database } from "lucide-react";

export default function RedstoneCircuitLab() {
  const [tokens, setTokens] = useState<number>(10);
  const [algorithm, setAlgorithm] = useState<"sliding-window" | "token-bucket">("sliding-window");
  const [logs, setLogs] = useState<Array<{ id: number; status: number; text: string; time: string }>>([
    {
      id: 1,
      status: 200,
      text: "GET /api/v1/user/profile ➔ 200 OK (0.8ms)",
      time: "10:14:02.102",
    },
    {
      id: 2,
      status: 200,
      text: "POST /api/v1/auth/verify ➔ 200 OK (1.1ms)",
      time: "10:14:02.115",
    },
  ]);

  const fireRequests = (count = 1) => {
    let currentTokens = tokens;
    const newEntries: Array<{ id: number; status: number; text: string; time: string }> = [];

    for (let i = 0; i < count; i++) {
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0] + "." + String(now.getMilliseconds()).padStart(3, "0");

      if (currentTokens > 0) {
        currentTokens--;
        newEntries.unshift({
          id: Date.now() + i,
          status: 200,
          text: `REQ #0${i + 1} ➔ Redis Atomic ZADD ➔ 200 OK (${currentTokens} tokens remaining)`,
          time: timeStr,
        });
      } else {
        newEntries.unshift({
          id: Date.now() + i,
          status: 429,
          text: `REQ #0${i + 1} ➔ Rate Limit Exceeded ➔ 429 TOO MANY REQUESTS (Retry-After: 4s)`,
          time: timeStr,
        });
      }
    }

    setTokens(currentTokens);
    setLogs((prev) => [...newEntries, ...prev].slice(0, 6));
  };

  const resetTokens = () => {
    setTokens(10);
    const now = new Date();
    const timeStr = now.toTimeString().split(" ")[0] + "." + String(now.getMilliseconds()).padStart(3, "0");
    setLogs((prev) => [
      {
        id: Date.now(),
        status: 200,
        text: "REDIS FLUSH: Window refreshed. 10/10 tokens restored to Redis bucket.",
        time: timeStr,
      },
      ...prev,
    ].slice(0, 6));
  };

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
              background: "rgba(212,50,28,0.2)",
              border: "1px solid #D4321C",
              color: "#FF4422",
            }}
          >
            🔴
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#F1F0EB] font-mono tracking-tight">
              REDSTONE CIRCUIT LAB // TRAFFIC SHAPING ENGINE
            </h4>
            <p className="text-[11px] font-mono text-[#8A9080]">
              Redis Sorted Sets + Lua Atomic Sliding Window Rate Limiting
            </p>
          </div>
        </div>

        {/* Algorithm Tabs */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setAlgorithm("sliding-window")}
            className="px-2.5 py-1 text-[11px] font-mono transition-all"
            style={{
              background: algorithm === "sliding-window" ? "rgba(212,50,28,0.3)" : "rgba(13,15,13,0.8)",
              border: algorithm === "sliding-window" ? "1px solid #FF4422" : "1px solid rgba(255,255,255,0.08)",
              color: algorithm === "sliding-window" ? "#FF5533" : "#8A9080",
            }}
          >
            SLIDING WINDOW
          </button>
          <button
            onClick={() => setAlgorithm("token-bucket")}
            className="px-2.5 py-1 text-[11px] font-mono transition-all"
            style={{
              background: algorithm === "token-bucket" ? "rgba(212,50,28,0.3)" : "rgba(13,15,13,0.8)",
              border: algorithm === "token-bucket" ? "1px solid #FF4422" : "1px solid rgba(255,255,255,0.08)",
              color: algorithm === "token-bucket" ? "#FF5533" : "#8A9080",
            }}
          >
            TOKEN BUCKET
          </button>
        </div>
      </div>

      {/* Redstone Hopper / Token Bucket Visual Meter */}
      <div
        className="p-4 mb-5"
        style={{
          background: "rgba(13,15,13,0.9)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderLeft: "3px solid #D4321C",
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-white/5 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#F1F0EB]">
              REDSTONE TOKEN HOPPER:
            </span>
            <span
              className="px-2 py-0.5 text-xs font-mono font-bold"
              style={{
                background: tokens > 0 ? "rgba(93,138,60,0.2)" : "rgba(212,50,28,0.2)",
                color: tokens > 0 ? "#A0D060" : "#FF4422",
                border: `1px solid ${tokens > 0 ? "#5D8A3C" : "#D4321C"}`,
              }}
            >
              {tokens} / 10 TOKENS AVAILABLE
            </span>
          </div>

          <div className="text-[11px] font-mono text-[#8A9080]">
            Replenish: 1 token / 500ms · Redis TTL: 60s
          </div>
        </div>

        {/* 10 Visual Redstone Lamp Slots */}
        <div className="grid grid-cols-10 gap-1.5 sm:gap-2 py-2">
          {Array.from({ length: 10 }).map((_, i) => {
            const isFilled = i < tokens;
            return (
              <div
                key={i}
                className="aspect-square flex items-center justify-center relative transition-all"
                style={{
                  background: isFilled ? "rgba(255,34,0,0.2)" : "rgba(20,22,20,0.8)",
                  border: isFilled ? "1.5px solid #FF3300" : "1.5px solid #2B2D2B",
                  boxShadow: isFilled ? "0 0 10px rgba(255,51,0,0.5), inset 0 0 4px #FF3300" : "none",
                }}
              >
                {isFilled ? (
                  <span className="text-xs text-red-500">🔴</span>
                ) : (
                  <span className="text-[10px] text-[#333333]">○</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Pressure Plate Trigger Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 mt-2 border-t border-white/5">
          <button
            onClick={() => fireRequests(4)}
            className="px-4 py-2 font-mono font-bold text-xs flex items-center gap-2 transition-all"
            style={{
              background: "#D4321C",
              color: "#FFFFFF",
              border: "1px solid #FF5533",
              borderTopColor: "#FF7755",
              borderLeftColor: "#FF7755",
              borderBottomColor: "#660000",
              borderRightColor: "#660000",
            }}
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>FIRE BURST (4 REQS)</span>
          </button>

          <button
            onClick={() => fireRequests(1)}
            className="px-3 py-2 font-mono text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-[#C8D4B8] transition-colors"
          >
            1× Single Request
          </button>

          <button
            onClick={resetTokens}
            className="px-3 py-2 font-mono text-xs flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-[#8A9080] hover:text-[#F1F0EB] transition-colors ml-auto"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Flush Redis Window</span>
          </button>
        </div>
      </div>

      {/* Live Redis Transaction Log */}
      <div
        className="p-4"
        style={{
          background: "rgba(10,12,10,0.95)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[10px] font-mono text-[#8A9080]">
          <span>REDIS LUA EXECUTION STREAM // LIVE TRANSACTIONS</span>
          <span className="text-[#A0D060]">PORT: 6379 (CLUSTER READY)</span>
        </div>

        <div className="font-mono text-xs space-y-1.5 bg-[#080A08] p-3 border border-white/5 min-h-[110px]">
          {logs.map((log) => (
            <div key={log.id} className="flex items-center gap-2 text-[11px]">
              <span className="text-[#5A5450] shrink-0">{log.time}</span>
              <span
                className={`px-1.5 py-0.2 text-[9px] font-bold ${
                  log.status === 200 ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : "bg-red-950 text-red-400 border border-red-800"
                }`}
              >
                {log.status}
              </span>
              <span className={log.status === 200 ? "text-[#C8D4B8]" : "text-[#FF5533] font-bold"}>
                {log.text}
              </span>
            </div>
          ))}
        </div>

        {/* Distributed Mesh Highlights */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 mt-3 border-t border-white/5 text-[10px] font-mono text-[#6E6E6E]">
          <span className="flex items-center gap-1">
            <Server className="w-3 h-3 text-[#A0D060]" />
            Gateway: Express.js (Sub-2ms p99)
          </span>
          <span className="flex items-center gap-1">
            <Database className="w-3 h-3 text-[#FF4422]" />
            Storage: Redis Atomic Sorted Sets
          </span>
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-[#FFAA00]" />
            Async Queue: BullMQ Workers
          </span>
        </div>
      </div>
    </div>
  );
}
