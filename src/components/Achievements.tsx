"use client";

import React, { useEffect, useRef, useState } from "react";
import { ACHIEVEMENTS } from "@/data/portfolio";

export default function Achievements() {
  const sih = ACHIEVEMENTS.find((a) => a.title.includes("Smart India Hackathon"));
  const otherAchievements = ACHIEVEMENTS.filter((a) => !a.title.includes("Smart India Hackathon"));

  const [activeToast, setActiveToast] = useState<string | null>("Smart India Hackathon 2025 — National Round");
  const [toastType, setToastType] = useState<"Challenge" | "Goal" | "Advancement">("Challenge");
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, i]));
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const triggerAdvancementToast = (title: string, type: "Challenge" | "Goal" | "Advancement") => {
    setActiveToast(title);
    setToastType(type);
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden" style={{ borderTop: "1px solid rgba(93,138,60,0.2)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Coordinate label */}
        <div className="mb-3 font-mono text-[11px] text-[#5D8A3C] tracking-wider">
          ◈ SECTOR: ADVANCEMENT_SYSTEM // X:128 Y:64 Z:-32 // TROPHY TREE
        </div>

        {/* Section Header + Toast Preview Widget */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-[#FFAA00] mb-4"
              style={{
                background: "rgba(255,170,0,0.1)",
                border: "1px solid rgba(255,170,0,0.4)",
                borderTop: "1px solid rgba(255,170,0,0.2)",
                borderLeft: "1px solid rgba(255,170,0,0.2)",
                borderBottom: "1px solid rgba(0,0,0,0.5)",
                borderRight: "1px solid rgba(0,0,0,0.5)",
              }}
            >
              <span>🏆</span>
              <span>ADVANCEMENT SYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F1F0EB] tracking-tight">
              Advancements Unlocked
            </h2>
            <p className="text-sm sm:text-base text-[#8A9080] mt-2 font-mono">
              Earned through competitive hackathons, national engineering stages, and verified coursework.
            </p>
          </div>

          {/* Minecraft Advancement Toast Notification Widget */}
          {activeToast && (
            <div
              className="p-3 select-none self-start lg:self-auto flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300"
              style={{
                background: "#212121",
                border: "2px solid #555555",
                borderTopColor: "#AAAAAA",
                borderLeftColor: "#AAAAAA",
                borderBottomColor: "#111111",
                borderRightColor: "#111111",
                boxShadow: "0 0 15px rgba(0,0,0,0.8)",
              }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center text-xl shrink-0"
                style={{
                  background: "#161816",
                  border: "2px solid #FFAA00",
                }}
              >
                🏆
              </div>
              <div className="font-mono text-left">
                <div
                  className="text-[10px] font-bold tracking-wider uppercase"
                  style={{ color: toastType === "Challenge" ? "#FF55FF" : "#FFFF55" }}
                >
                  {toastType === "Challenge" ? "★ Challenge Complete!" : "Advancement Made!"}
                </div>
                <div className="text-xs font-bold text-[#FFFFFF] mt-0.5 line-clamp-1">
                  [{activeToast}]
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SIH Featured Achievement — Spiky Gold Challenge Frame */}
        {sih && (
          <div
            ref={(el) => { cardRefs.current[0] = el; }}
            onClick={() => triggerAdvancementToast(sih.title, "Challenge")}
            className="mb-8 relative overflow-hidden text-left transition-all duration-700 cursor-pointer group"
            style={{
              background: "rgba(26,24,13,0.98)",
              border: "2px solid rgba(255,170,0,0.5)",
              borderTop: "3px solid #FFD700",
              borderLeft: "2px solid rgba(255,210,80,0.3)",
              borderBottom: "3px solid rgba(0,0,0,0.8)",
              borderRight: "3px solid rgba(0,0,0,0.8)",
              opacity: visibleCards.has(0) ? 1 : 0,
              transform: visibleCards.has(0) ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {/* Top gold bar */}
            <div
              style={{
                height: "4px",
                background: "linear-gradient(90deg, #FFAA00 0%, #FFD700 50%, #FFAA00 100%)",
              }}
            />

            <div className="relative z-10 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="px-3 py-1 text-[11px] font-mono font-bold"
                    style={{
                      background: "rgba(255,170,0,0.2)",
                      border: "1px solid rgba(255,170,0,0.6)",
                      color: "#FFAA00",
                    }}
                  >
                    ★ CHALLENGE COMPLETED
                  </span>
                  <span
                    className="px-2.5 py-1 text-[11px] font-mono"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#8A9080" }}
                  >
                    {sih.badge}
                  </span>
                  <span className="text-[11px] font-mono text-[#8A9080]">Date: {sih.date}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F1F0EB] tracking-tight group-hover:text-[#FFAA00] transition-colors">
                  {sih.title}
                </h3>

                <p className="text-sm text-[#C8D4B8] leading-relaxed max-w-2xl">&ldquo;{sih.description}&rdquo;</p>

                <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-[#8A9080]">
                  <span
                    className="px-3 py-1.5 flex items-center gap-1.5"
                    style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    📍 IIT Roorkee Venue
                  </span>
                  <span
                    className="px-3 py-1.5 flex items-center gap-1.5"
                    style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    👥 6-Member Team
                  </span>
                  <span
                    className="px-3 py-1.5 flex items-center gap-1.5"
                    style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    🏛 Ministry of Education &amp; AICTE
                  </span>
                </div>
              </div>

              {/* Trophy Emblem */}
              <div
                className="shrink-0 flex flex-col items-center justify-center p-6 lg:w-44 text-center select-none"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  border: "1px solid rgba(255,170,0,0.3)",
                  borderTop: "1px solid rgba(255,210,80,0.2)",
                  borderBottom: "2px solid rgba(0,0,0,0.7)",
                  borderRight: "2px solid rgba(0,0,0,0.7)",
                }}
              >
                <div
                  className="w-16 h-16 flex items-center justify-center text-4xl mb-3 shadow-[0_0_20px_rgba(255,170,0,0.3)]"
                  style={{
                    background: "rgba(255,170,0,0.15)",
                    border: "2px solid rgba(255,170,0,0.6)",
                  }}
                >
                  🏆
                </div>
                <span className="text-xs font-mono font-bold text-[#F1F0EB]">SIH 2025</span>
                <span className="text-[11px] font-mono" style={{ color: "#FFAA00" }}>National Round</span>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {otherAchievements.map((item, idx) => {
            const cardIdx = idx + 1;
            const icon = item.title.toLowerCase().includes("nptel") ? "📜" : item.title.toLowerCase().includes("hack") ? "⚡" : "🎖";
            return (
              <div
                key={idx}
                ref={(el) => { cardRefs.current[cardIdx] = el; }}
                onClick={() => triggerAdvancementToast(item.title, "Advancement")}
                className="relative overflow-hidden transition-all duration-700 cursor-pointer group"
                style={{
                  background: "rgba(20,22,20,0.95)",
                  border: "1px solid rgba(87,224,224,0.2)",
                  borderTop: "2px solid rgba(87,224,224,0.4)",
                  borderLeft: "1px solid rgba(87,224,224,0.15)",
                  borderBottom: "2px solid rgba(0,0,0,0.7)",
                  borderRight: "2px solid rgba(0,0,0,0.7)",
                  opacity: visibleCards.has(cardIdx) ? 1 : 0,
                  transform: visibleCards.has(cardIdx) ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${cardIdx * 100}ms`,
                }}
              >
                <div style={{ height: "3px", background: "linear-gradient(90deg, #57E0E0 0%, transparent 100%)" }} />

                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 shrink-0 flex items-center justify-center text-xl"
                      style={{
                        background: "rgba(87,224,224,0.1)",
                        border: "1px solid rgba(87,224,224,0.3)",
                      }}
                    >
                      {icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className="px-2 py-0.5 text-[10px] font-mono"
                          style={{ background: "rgba(87,224,224,0.1)", border: "1px solid rgba(87,224,224,0.3)", color: "#57E0E0" }}
                        >
                          {item.badge}
                        </span>
                        <span className="text-[10px] font-mono text-[#8A9080]">{item.date}</span>
                      </div>
                      <h3 className="text-base font-bold text-[#F1F0EB] leading-snug group-hover:text-[#57E0E0] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono mt-0.5" style={{ color: "#57E0E0" }}>
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#8A9080] mt-4 leading-relaxed">{item.description}</p>

                  <div className="mt-4 pt-3 flex flex-wrap gap-1.5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] font-mono text-[#8A9080]"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
