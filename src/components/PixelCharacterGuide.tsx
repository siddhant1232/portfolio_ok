"use client";

import React, { useState } from "react";

interface CharacterGuideProps {
  name?: string;
  role?: string;
  dialogue: string;
  tip?: string;
  mood?: "excited" | "focused" | "wizard" | "engineer";
  variant?: "siddhant" | "alex" | "enderman";
}

// ─── Pixel Art Character Avatar SVG ───────────────────────────────────────────
function CharacterAvatar({ mood = "engineer" }: { mood?: string }) {
  return (
    <div className="relative w-14 h-14 shrink-0 select-none">
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full pixel-art filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
        style={{ shapeRendering: "crispEdges" }}
      >
        {/* Hair / Head base */}
        <rect x="5" y="2" width="14" height="4" fill="#241B15" />
        <rect x="4" y="3" width="2" height="6" fill="#241B15" />
        <rect x="18" y="3" width="2" height="6" fill="#241B15" />
        <rect x="6" y="2" width="5" height="2" fill="#3D2E24" />

        {/* Face skin tone */}
        <rect x="6" y="6" width="12" height="10" fill="#E8B896" />
        <rect x="5" y="9" width="1" height="5" fill="#D69E7B" />
        <rect x="18" y="9" width="1" height="5" fill="#D69E7B" />

        {/* Eyes */}
        <rect x="7" y="9" width="2" height="2" fill="#FFFFFF" />
        <rect x="8" y="9" width="2" height="2" fill={mood === "wizard" ? "#9B4DCA" : "#2E64A5"} />
        <rect x="14" y="9" width="2" height="2" fill="#FFFFFF" />
        <rect x="15" y="9" width="2" height="2" fill={mood === "wizard" ? "#9B4DCA" : "#2E64A5"} />

        {/* Eyebrows */}
        <rect x="7" y="7" width="3" height="1" fill="#241B15" />
        <rect x="14" y="7" width="3" height="1" fill="#241B15" />

        {/* Nose & Smile */}
        <rect x="11" y="11" width="2" height="1" fill="#D69E7B" />
        <rect x="9" y="13" width="6" height="1" fill="#91523D" />
        <rect x="10" y="14" width="4" height="1" fill="#FFFFFF" />

        {/* Hoodie / Torso Collar */}
        <rect x="5" y="16" width="14" height="3" fill="#1C2E16" />
        <rect x="6" y="16" width="12" height="1" fill="#3A5C2D" />
        <rect x="10" y="17" width="4" height="4" fill="#5D8A3C" />
        <rect x="4" y="19" width="16" height="5" fill="#182414" />
      </svg>
      {/* Level badge */}
      <span
        className="absolute -bottom-1 -right-1 font-mono text-[9px] font-bold px-1 text-[#0D0F0D] bg-[#A0D060] border border-black shadow"
        style={{ lineHeight: "11px" }}
      >
        LV.27
      </span>
    </div>
  );
}

export default function PixelCharacterGuide({
  name = "Architect Siddhant",
  role = "Creator & Guide",
  dialogue,
  tip,
  mood = "engineer",
}: CharacterGuideProps) {
  const [isWaving, setIsWaving] = useState(false);

  return (
    <div
      onClick={() => setIsWaving(true)}
      onAnimationEnd={() => setIsWaving(false)}
      className="flex items-start gap-3.5 p-3.5 sm:p-4 transition-all"
      style={{
        background: "rgba(18,20,18,0.92)",
        border: "2px solid #2D332D",
        borderTopColor: "rgba(255,255,255,0.15)",
        borderLeftColor: "rgba(255,255,255,0.12)",
        borderBottomColor: "#0A0C0A",
        borderRightColor: "#0A0C0A",
        boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
      }}
    >
      {/* Character Portrait with idle bob animation */}
      <div className={`transition-transform cursor-pointer ${isWaving ? "scale-110" : "hover:scale-105"}`}>
        <CharacterAvatar mood={mood} />
      </div>

      {/* Speech / Dialogue Bubble */}
      <div className="flex-1 min-w-0 space-y-1.5 text-left">
        {/* Nameplate */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono font-bold tracking-wider text-[#A0D060] uppercase">
              {name}
            </span>
            <span className="text-[9px] font-mono text-[#6A7065]">
              // {role}
            </span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-[#A0D060] animate-pulse" />
        </div>

        {/* Dialogue Text */}
        <p className="text-xs sm:text-[13px] text-[#E8E4D8] leading-relaxed font-sans">
          &ldquo;{dialogue}&rdquo;
        </p>

        {/* Interactive Tip */}
        {tip && (
          <div className="flex items-center gap-1.5 pt-1 text-[11px] font-mono text-[#FFAA00]">
            <span className="animate-bounce">👉</span>
            <span>{tip}</span>
          </div>
        )}
      </div>
    </div>
  );
}
