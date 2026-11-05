"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, Copy, Check, Flame, Sparkles } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [portalIgnited, setPortalIgnited] = useState(true);
  const [roleIntent, setRoleIntent] = useState("Software Development Opportunity");
  const [visitorName, setVisitorName] = useState("");
  const [customNote, setCustomNote] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const mailtoSubject = encodeURIComponent(
    `[Inquiry] ${roleIntent} — ${visitorName ? visitorName : "Engineering Team / Recruiter"}`
  );
  const mailtoBody = encodeURIComponent(
    `Hi Siddhant,\n\nI stepped through your portfolio portal and would like to connect regarding a ${roleIntent}.\n\n${
      customNote ? `Notes: ${customNote}\n\n` : ""
    }Best regards,\n${visitorName || "Hiring Team"}`
  );
  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  // Pixel-art Obsidian Block component
  const ObsidianBlock = ({ crying = false }: { crying?: boolean }) => (
    <div
      className="w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center select-none"
      style={{
        background: crying
          ? "linear-gradient(135deg, #1C0F2B 0%, #0F0817 50%, #2A0E44 100%)"
          : "linear-gradient(135deg, #181124 0%, #0D0814 50%, #130B1C 100%)",
        border: "2px solid #2D1A3F",
        borderTopColor: crying ? "#C042FF" : "#3D2455",
        borderLeftColor: crying ? "#8A2BE2" : "#3D2455",
        borderBottomColor: "#050308",
        borderRightColor: "#050308",
        boxShadow: crying ? "inset 0 0 8px #C042FF, 0 0 6px rgba(192,66,255,0.4)" : "none",
      }}
    >
      {/* Texture flecks */}
      <div className="absolute top-1.5 left-2 w-1.5 h-1.5 bg-[#4A2B68] opacity-60" />
      <div className="absolute bottom-2 right-2 w-2 h-1 bg-[#2C1840] opacity-80" />
      {crying && (
        <>
          <div className="absolute inset-1 border border-[#C042FF]/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#E085FF] animate-pulse shadow-[0_0_8px_#C042FF]" />
        </>
      )}
    </div>
  );

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ borderTop: "1px solid rgba(168,69,255,0.25)" }}>
      {/* Nether Dimension Background Ambience */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: portalIgnited
            ? "radial-gradient(ellipse at 50% 60%, rgba(138,43,226,0.12) 0%, rgba(60,10,80,0.05) 50%, transparent 80%)"
            : "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Sector Coordinate Label — 1 Nether Block = 8 Overworld Blocks */}
        <div className="mb-3 font-mono text-[11px] text-[#A855F7] tracking-wider flex items-center gap-3 flex-wrap">
          <span>◈ SECTOR: NETHER_PORTAL_GATEWAY</span>
          <span className="text-[#6E6E6E]">//</span>
          <span className="text-[#A0D060]">OVERWORLD: [X: 256, Y: 64, Z: 256]</span>
          <span className="text-[#6E6E6E]">➔</span>
          <span className="text-[#C084FC]">NETHER: [X: 32, Y: 80, Z: 32]</span>
          <span className="text-[10px] text-[#8A9080]">(1:8 Ratio)</span>
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-[#D8B4FE] mb-4"
              style={{
                background: "rgba(168,85,247,0.15)",
                border: "1px solid rgba(168,85,247,0.4)",
                borderTop: "1px solid rgba(216,180,254,0.4)",
                borderLeft: "1px solid rgba(216,180,254,0.3)",
                borderBottom: "1px solid rgba(0,0,0,0.6)",
                borderRight: "1px solid rgba(0,0,0,0.6)",
              }}
            >
              <span>🟣</span>
              <span>DIMENSIONAL GATEWAY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F1F0EB] tracking-tight">
              Step through the Nether Portal.<br />
              <span className="text-[#C084FC]">Let&apos;s build something powerful.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#8A9080] mt-3 max-w-2xl leading-relaxed font-mono">
              Have an engineering challenge, full-time role, or distributed systems problem? Transmit a dispatch across dimensions.
            </p>
          </div>

          {/* Flint & Steel Ignition Toggle */}
          <div
            onClick={() => setPortalIgnited(!portalIgnited)}
            className="flex items-center gap-2.5 px-4 py-2.5 cursor-pointer select-none transition-all self-start lg:self-auto"
            style={{
              background: portalIgnited ? "rgba(168,85,247,0.2)" : "rgba(26,28,26,0.8)",
              border: portalIgnited ? "1px solid #A855F7" : "1px solid rgba(255,255,255,0.1)",
              borderTopColor: portalIgnited ? "#D8B4FE" : "#333",
              borderBottomColor: "#111",
              borderRightColor: "#111",
              boxShadow: portalIgnited ? "0 0 15px rgba(168,85,247,0.4)" : "none",
            }}
            title="Click to toggle Flint & Steel ignition"
          >
            <Flame className={`w-4 h-4 ${portalIgnited ? "text-[#C084FC] fill-current animate-pulse" : "text-[#6E6E6E]"}`} />
            <div className="font-mono text-xs">
              <span className="text-[#8A9080]">FLINT &amp; STEEL: </span>
              <span className={portalIgnited ? "text-[#C084FC] font-bold" : "text-[#6E6E6E]"}>
                [{portalIgnited ? "PORTAL IGNITED" : "EXTINGUISHED"}]
              </span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MAIN GRID: THE NETHER PORTAL FRAME + MESSAGE DISPATCHER     */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">

          {/* Left Column: Authentic Minecraft Nether Portal Frame Visual */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="text-[10px] font-mono text-[#A855F7] uppercase tracking-wider mb-3">
              ▸ OBSIDIAN FRAME // 4×5 PORTAL STRUCTURE
            </div>

            {/* The 4x5 Obsidian Nether Portal */}
            <div
              className="relative p-2 select-none"
              style={{
                background: "rgba(10,5,15,0.9)",
                border: "2px solid #2D1A3F",
                boxShadow: portalIgnited ? "0 0 40px rgba(147,51,234,0.3)" : "none",
              }}
            >
              {/* Top Row: 4 Obsidian Blocks */}
              <div className="flex">
                <ObsidianBlock crying />
                <ObsidianBlock />
                <ObsidianBlock />
                <ObsidianBlock crying />
              </div>

              {/* Middle 3 Rows: Left Block + Portal Interior + Right Block */}
              <div className="flex">
                {/* Left Column Obsidian */}
                <div className="flex flex-col">
                  <ObsidianBlock />
                  <ObsidianBlock />
                  <ObsidianBlock />
                </div>

                {/* The Swirling Purple Portal Interior (2 blocks wide, 3 blocks tall) */}
                <div
                  className="relative w-20 sm:w-24 h-[120px] sm:h-[144px] overflow-hidden flex flex-col items-center justify-center transition-all duration-700"
                  style={{
                    background: portalIgnited
                      ? "linear-gradient(180deg, #3B0764 0%, #6B21A8 30%, #A855F7 50%, #581C87 80%, #2E1065 100%)"
                      : "#0A0A0E",
                    boxShadow: portalIgnited
                      ? "inset 0 0 20px rgba(216,180,254,0.8), 0 0 25px rgba(168,85,247,0.6)"
                      : "inset 0 0 10px rgba(0,0,0,0.9)",
                  }}
                >
                  {portalIgnited ? (
                    <>
                      {/* Swirling Wavy Plasma Overlay */}
                      <div
                        className="absolute inset-0 opacity-80"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(216,180,254,0.3) 8px, rgba(216,180,254,0.3) 16px)",
                          animation: "plasma-drift 6s linear infinite",
                        }}
                      />

                      {/* Rising Nether Particles */}
                      {[
                        { left: "20%", delay: "0s", size: "3px" },
                        { left: "45%", delay: "1.2s", size: "4px" },
                        { left: "70%", delay: "0.5s", size: "2px" },
                        { left: "30%", delay: "2.1s", size: "3px" },
                        { left: "60%", delay: "1.8s", size: "4px" },
                        { left: "80%", delay: "0.9s", size: "2px" },
                      ].map((p, i) => (
                        <div
                          key={i}
                          className="absolute bg-[#F3E8FF] rounded-none opacity-80"
                          style={{
                            left: p.left,
                            bottom: "0px",
                            width: p.size,
                            height: p.size,
                            boxShadow: "0 0 6px #E9D5FF",
                            animation: `nether-float 2.5s ease-out infinite ${p.delay}`,
                          }}
                        />
                      ))}

                      {/* Portal Core Pulse */}
                      <div className="relative z-10 text-center font-mono">
                        <span className="text-[10px] font-bold text-[#FFFFFF] tracking-widest block drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                          ACTIVE
                        </span>
                        <span className="text-[8px] text-[#E9D5FF] block mt-0.5">
                          DIM: NETHER
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="text-center font-mono text-[9px] text-[#555]">
                      <span>UNLIT</span>
                      <span className="block text-[8px] mt-1 text-[#444]">CLICK IGNITE</span>
                    </div>
                  )}
                </div>

                {/* Right Column Obsidian */}
                <div className="flex flex-col">
                  <ObsidianBlock />
                  <ObsidianBlock />
                  <ObsidianBlock />
                </div>
              </div>

              {/* Bottom Row: 4 Obsidian Blocks */}
              <div className="flex">
                <ObsidianBlock crying />
                <ObsidianBlock />
                <ObsidianBlock />
                <ObsidianBlock crying />
              </div>
            </div>

            {/* Portal Transmission Status */}
            <div
              className="w-full mt-4 p-3 font-mono text-xs text-center border"
              style={{
                background: "rgba(20,10,30,0.8)",
                borderColor: portalIgnited ? "rgba(168,85,247,0.3)" : "rgba(255,255,255,0.06)",
                color: portalIgnited ? "#D8B4FE" : "#6E6E6E",
              }}
            >
              {portalIgnited ? (
                <span>⚡ TRANS-DIMENSIONAL DISPATCH READY</span>
              ) : (
                <span>○ PORTAL INACTIVE — USE FLINT &amp; STEEL</span>
              )}
            </div>

            {/* Direct Dimensional Tablets (Contact Cards) */}
            <div className="w-full mt-4 space-y-2.5">
              {/* Email Tablet */}
              <div
                className="p-3.5 flex items-center justify-between"
                style={{
                  background: "rgba(18,12,25,0.95)",
                  border: "1px solid rgba(168,85,247,0.3)",
                  borderTop: "2px solid #A855F7",
                  borderBottom: "2px solid rgba(0,0,0,0.6)",
                }}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className="w-8 h-8 flex items-center justify-center shrink-0"
                    style={{ background: "rgba(168,85,247,0.2)", border: "1px solid #A855F7" }}
                  >
                    <Mail className="w-4 h-4 text-[#C084FC]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-[#8A9080] uppercase block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-bold text-[#F1F0EB] hover:text-[#C084FC] transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1 text-[11px] font-mono flex items-center gap-1.5 transition-all shrink-0 ml-2"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: copiedEmail ? "#A0D060" : "#C8D4B8",
                  }}
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-[#A0D060]" /> : <Copy className="w-3 h-3 text-[#8A9080]" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Phone Tablet */}
              <div
                className="p-3.5 flex items-center justify-between"
                style={{
                  background: "rgba(18,12,25,0.95)",
                  border: "1px solid rgba(168,85,247,0.3)",
                  borderTop: "2px solid #A855F7",
                  borderBottom: "2px solid rgba(0,0,0,0.6)",
                }}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className="w-8 h-8 flex items-center justify-center shrink-0"
                    style={{ background: "rgba(168,85,247,0.2)", border: "1px solid #A855F7" }}
                  >
                    <Phone className="w-4 h-4 text-[#C084FC]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-[#8A9080] uppercase block">
                      Phone Comm Link
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-bold text-[#F1F0EB] hover:text-[#C084FC] transition-colors truncate block"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyPhone}
                  className="px-2.5 py-1 text-[11px] font-mono flex items-center gap-1.5 transition-all shrink-0 ml-2"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: copiedPhone ? "#A0D060" : "#C8D4B8",
                  }}
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-[#A0D060]" /> : <Copy className="w-3 h-3 text-[#8A9080]" />}
                  <span>{copiedPhone ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Social Tablets: LinkedIn & GitHub */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 flex items-center gap-2.5 transition-all group"
                  style={{
                    background: "rgba(18,12,25,0.95)",
                    border: "1px solid rgba(87,224,224,0.3)",
                    borderTop: "2px solid #57E0E0",
                  }}
                >
                  <Linkedin className="w-4 h-4 text-[#57E0E0]" />
                  <div className="min-w-0 text-left">
                    <span className="text-[10px] font-mono text-[#8A9080] block">PROFESSIONAL</span>
                    <span className="text-xs font-mono font-bold text-[#F1F0EB] group-hover:text-[#57E0E0] truncate block">
                      LinkedIn
                    </span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 flex items-center gap-2.5 transition-all group"
                  style={{
                    background: "rgba(18,12,25,0.95)",
                    border: "1px solid rgba(160,208,96,0.3)",
                    borderTop: "2px solid #A0D060",
                  }}
                >
                  <Github className="w-4 h-4 text-[#A0D060]" />
                  <div className="min-w-0 text-left">
                    <span className="text-[10px] font-mono text-[#8A9080] block">CODE REALM</span>
                    <span className="text-xs font-mono font-bold text-[#F1F0EB] group-hover:text-[#A0D060] truncate block">
                      GitHub
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Nether Portal Message Dispatcher */}
          <div className="lg:col-span-7">
            <div
              className="p-6 sm:p-8"
              style={{
                background: "rgba(18,12,25,0.98)",
                border: "2px solid #2D1A3F",
                borderTop: "3px solid #C084FC",
                borderLeft: "2px solid rgba(192,132,252,0.3)",
                borderBottom: "3px solid #050308",
                borderRight: "3px solid #050308",
                boxShadow: portalIgnited ? "0 0 30px rgba(147,51,234,0.15)" : "none",
              }}
            >
              {/* Dispatcher Header */}
              <div
                className="pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">📨</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#F1F0EB] font-mono tracking-tight">
                      NETHER DISPATCH CONSOLE // TRANSMIT MESSAGE
                    </h3>
                    <p className="text-[11px] font-mono text-[#8A9080]">
                      Transmits a pre-formatted cryptographic dispatch directly to Siddhant&apos;s primary inbox.
                    </p>
                  </div>
                </div>

                <span
                  className="px-2.5 py-1 text-[10px] font-mono font-bold self-start sm:self-auto"
                  style={{
                    background: "rgba(168,85,247,0.2)",
                    border: "1px solid #A855F7",
                    color: "#D8B4FE",
                  }}
                >
                  CHANNEL: SECURE
                </span>
              </div>

              {/* Form Inputs */}
              <div className="space-y-4">
                {/* Your Name */}
                <div>
                  <label className="block text-[11px] font-mono text-[#C084FC] uppercase tracking-wider mb-1.5 font-bold">
                    ▸ SENDER IDENTITY / ORGANIZATION
                  </label>
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins (Head of Engineering) / TechCorp"
                    className="w-full px-4 py-2.5 text-xs sm:text-sm font-mono placeholder:text-[#554466] focus:outline-none"
                    style={{
                      background: "rgba(10,5,15,0.9)",
                      border: "1px solid rgba(168,85,247,0.3)",
                      borderTopColor: "#050308",
                      borderLeftColor: "#050308",
                      color: "#F1F0EB",
                    }}
                  />
                </div>

                {/* Role / Inquiry Intent */}
                <div>
                  <label className="block text-[11px] font-mono text-[#C084FC] uppercase tracking-wider mb-1.5 font-bold">
                    ▸ INQUIRY TYPE / DIMENSIONAL INTENT
                  </label>
                  <select
                    value={roleIntent}
                    onChange={(e) => setRoleIntent(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm font-mono focus:outline-none cursor-pointer"
                    style={{
                      background: "rgba(10,5,15,0.9)",
                      border: "1px solid rgba(168,85,247,0.3)",
                      borderTopColor: "#050308",
                      borderLeftColor: "#050308",
                      color: "#F1F0EB",
                    }}
                  >
                    <option>Software Development Opportunity</option>
                    <option>Full-Time Engineering Role (Backend / Full Stack)</option>
                    <option>Engineering Internship (2026 / 2027)</option>
                    <option>AI Agent / Distributed Systems Architecture Collaboration</option>
                    <option>Freelance / Production Build Engagement</option>
                    <option>Open Source Contribution &amp; General Inquiry</option>
                  </select>
                </div>

                {/* Custom Note */}
                <div>
                  <label className="block text-[11px] font-mono text-[#C084FC] uppercase tracking-wider mb-1.5 font-bold">
                    ▸ DISPATCH NOTES // BRIEF BRIEFING
                  </label>
                  <textarea
                    rows={4}
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="Tell me a bit about the role, tech stack requirements, or engineering problem you're tackling..."
                    className="w-full px-4 py-2.5 text-xs sm:text-sm font-mono placeholder:text-[#554466] focus:outline-none resize-none leading-relaxed"
                    style={{
                      background: "rgba(10,5,15,0.9)",
                      border: "1px solid rgba(168,85,247,0.3)",
                      borderTopColor: "#050308",
                      borderLeftColor: "#050308",
                      color: "#F1F0EB",
                    }}
                  />
                </div>

                {/* Transmission Action Bar */}
                <div
                  className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="font-mono text-[11px] text-[#8A9080] text-center sm:text-left">
                    <div>Receiver: <strong className="text-[#C084FC]">{PERSONAL_INFO.email}</strong></div>
                    <div className="text-[10px] text-[#554466]">Opens native mail client with formatted subject &amp; body</div>
                  </div>

                  <a
                    href={mailtoLink}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 font-mono font-bold text-xs sm:text-sm text-[#0D0814] transition-all shrink-0"
                    style={{
                      background: "#C084FC",
                      border: "2px solid #E9D5FF",
                      borderBottomColor: "#581C87",
                      borderRightColor: "#581C87",
                      boxShadow: "0 0 15px rgba(192,132,252,0.4)",
                    }}
                  >
                    <span>STEP INTO PORTAL &amp; SEND</span>
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nether Portal Animation Keyframes */}
      <style>{`
        @keyframes plasma-drift {
          0% { background-position: 0 0; }
          100% { background-position: 32px 64px; }
        }
        @keyframes nether-float {
          0% { opacity: 0; transform: translateY(0) scale(0.6); }
          30% { opacity: 1; }
          80% { opacity: 0.8; }
          100% { opacity: 0; transform: translateY(-110px) scale(1.2); }
        }
      `}</style>
    </section>
  );
}
