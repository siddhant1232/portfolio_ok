"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, Copy, Check } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
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
    `[Inquiry] ${roleIntent} — ${visitorName ? visitorName : "Team / Recruiter"}`
  );
  const mailtoBody = encodeURIComponent(
    `Hi Siddhant,\n\nI reviewed your portfolio and would like to connect regarding a ${roleIntent}.\n\n${
      customNote ? `Notes: ${customNote}\n\n` : ""
    }Best regards,\n${visitorName || "Hiring Team"}`
  );
  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  /* Portal SVG visual — original design, NOT copying Minecraft IP */
  const PortalVisual = () => (
    <div className="relative w-full flex items-center justify-center py-6">
      <div className="relative">
        {/* Outer ring */}
        <svg width="220" height="220" viewBox="0 0 220 220" className="absolute inset-0" style={{ animation: "spin 20s linear infinite" }}>
          <defs>
            <linearGradient id="portalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A0D060" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#57E0E0" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#A0D060" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <circle cx="110" cy="110" r="100" fill="none" stroke="url(#portalGrad)" strokeWidth="2" strokeDasharray="8 6" />
        </svg>
        {/* Middle ring */}
        <svg width="220" height="220" viewBox="0 0 220 220" className="absolute inset-0" style={{ animation: "spin 12s linear infinite reverse" }}>
          <circle cx="110" cy="110" r="78" fill="none" stroke="rgba(87,224,224,0.4)" strokeWidth="1.5" strokeDasharray="4 8" />
        </svg>
        {/* Inner content */}
        <div
          className="relative z-10 w-[220px] h-[220px] flex flex-col items-center justify-center text-center"
          style={{
            background: "radial-gradient(ellipse, rgba(87,224,224,0.08) 0%, rgba(13,15,13,0.95) 70%)",
          }}
        >
          <div className="text-5xl mb-2" style={{ filter: "drop-shadow(0 0 12px rgba(87,224,224,0.6))" }}>🌀</div>
          <span className="text-xs font-mono" style={{ color: "#57E0E0" }}>PORTAL ACTIVE</span>
          <span className="text-[10px] font-mono text-[#5A6A5A] mt-1">DIMENSION: CONTACT</span>
        </div>
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );

  const blockStyle = {
    background: "rgba(20,22,20,0.95)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderTop: "1px solid rgba(255,255,255,0.12)",
    borderLeft: "1px solid rgba(255,255,255,0.1)",
    borderBottom: "2px solid rgba(0,0,0,0.6)",
    borderRight: "2px solid rgba(0,0,0,0.6)",
  };

  const inputStyle = {
    background: "rgba(13,15,13,0.9)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderTop: "1px solid rgba(0,0,0,0.5)",
    borderLeft: "1px solid rgba(0,0,0,0.4)",
    color: "#F1F0EB",
    outline: "none",
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ borderTop: "1px solid rgba(93,138,60,0.2)" }}>
      {/* Ambient portal glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(87,224,224,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Coordinate label */}
        <div className="mb-3 font-mono text-[11px] text-[#5D8A3C] tracking-wider">
          ◈ SECTOR: PORTAL_GATEWAY // X:256 Y:0 Z:256
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-[#57E0E0] mb-4"
            style={{
              background: "rgba(87,224,224,0.1)",
              border: "1px solid rgba(87,224,224,0.4)",
              borderTop: "1px solid rgba(87,224,224,0.2)",
              borderLeft: "1px solid rgba(87,224,224,0.2)",
              borderBottom: "1px solid rgba(0,0,0,0.5)",
              borderRight: "1px solid rgba(0,0,0,0.5)",
            }}
          >
            <span>🌀</span>
            <span>PORTAL GATEWAY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F1F0EB] tracking-tight">
            Have a good problem?<br />
            <span style={{ color: "#A0D060" }}>Let&apos;s build something.</span>
          </h2>
          <p className="text-base text-[#8A9080] mt-3 max-w-2xl leading-relaxed font-mono">
            Open for software development opportunities, collaborations, and meaningful engineering challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">

          {/* Left — Direct Contacts */}
          <div className="lg:col-span-5 space-y-4">

            {/* Email */}
            <div className="p-5" style={blockStyle}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 flex items-center justify-center"
                    style={{ background: "rgba(93,138,60,0.15)", border: "1px solid rgba(160,208,96,0.3)" }}
                  >
                    <Mail className="w-4 h-4" style={{ color: "#A0D060" }} />
                  </div>
                  <span className="text-[11px] font-mono text-[#8A9080] uppercase tracking-wider">Direct Email</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-2 py-1 text-[11px] font-mono flex items-center gap-1.5 transition-all"
                  style={blockStyle}
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-[#A0D060]" /> : <Copy className="w-3 h-3 text-[#8A9080]" />}
                  <span style={{ color: copiedEmail ? "#A0D060" : "#8A9080" }}>{copiedEmail ? "Copied!" : "Copy"}</span>
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm font-bold text-[#F1F0EB] hover:text-[#A0D060] transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Phone */}
            <div className="p-5" style={blockStyle}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 flex items-center justify-center"
                    style={{ background: "rgba(93,138,60,0.15)", border: "1px solid rgba(160,208,96,0.3)" }}
                  >
                    <Phone className="w-4 h-4" style={{ color: "#A0D060" }} />
                  </div>
                  <span className="text-[11px] font-mono text-[#8A9080] uppercase tracking-wider">Phone</span>
                </div>
                <button
                  onClick={copyPhone}
                  className="px-2 py-1 text-[11px] font-mono flex items-center gap-1.5 transition-all"
                  style={blockStyle}
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-[#A0D060]" /> : <Copy className="w-3 h-3 text-[#8A9080]" />}
                  <span style={{ color: copiedPhone ? "#A0D060" : "#8A9080" }}>{copiedPhone ? "Copied!" : "Copy"}</span>
                </button>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-sm font-bold text-[#F1F0EB] hover:text-[#A0D060] transition-colors"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>

            {/* LinkedIn + GitHub */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 flex flex-col items-start gap-2 transition-all group"
                style={{ ...blockStyle, borderTop: "2px solid rgba(87,224,224,0.3)" }}
              >
                <Linkedin className="w-5 h-5 text-[#57E0E0]" />
                <span className="text-xs font-mono text-[#F1F0EB] group-hover:text-[#57E0E0] transition-colors">LinkedIn</span>
                <span className="text-[10px] font-mono text-[#5A6A5A]">siddhant62632</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 flex flex-col items-start gap-2 transition-all group"
                style={{ ...blockStyle, borderTop: "2px solid rgba(160,208,96,0.3)" }}
              >
                <Github className="w-5 h-5 text-[#A0D060]" />
                <span className="text-xs font-mono text-[#F1F0EB] group-hover:text-[#A0D060] transition-colors">GitHub</span>
                <span className="text-[10px] font-mono text-[#5A6A5A]">siddhant1232</span>
              </a>
            </div>

            {/* Portal visual on mobile */}
            <div className="block lg:hidden">
              <PortalVisual />
            </div>
          </div>

          {/* Right — Email Dispatcher */}
          <div className="lg:col-span-7">
            <div
              style={{
                background: "rgba(20,22,20,0.95)",
                border: "1px solid rgba(93,138,60,0.25)",
                borderTop: "2px solid rgba(160,208,96,0.3)",
                borderLeft: "1px solid rgba(160,208,96,0.1)",
                borderBottom: "3px solid rgba(0,0,0,0.7)",
                borderRight: "3px solid rgba(0,0,0,0.7)",
              }}
            >
              {/* Panel header */}
              <div
                className="px-6 py-3 flex items-center gap-2"
                style={{
                  background: "rgba(93,138,60,0.12)",
                  borderBottom: "1px solid rgba(93,138,60,0.2)",
                }}
              >
                <span className="text-sm">📨</span>
                <span className="text-xs font-mono text-[#A0D060] uppercase tracking-wider">Message Dispatcher</span>
              </div>

              <div className="p-6 space-y-4">
                {/* Your name */}
                <div>
                  <label className="block text-[11px] font-mono text-[#8A9080] uppercase tracking-wider mb-1.5">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="e.g. Alex Chen, TechCorp HR"
                    className="w-full px-4 py-2.5 text-sm font-mono placeholder:text-[#4A5A4A]"
                    style={inputStyle}
                  />
                </div>

                {/* Role Intent */}
                <div>
                  <label className="block text-[11px] font-mono text-[#8A9080] uppercase tracking-wider mb-1.5">
                    Inquiry Type
                  </label>
                  <select
                    value={roleIntent}
                    onChange={(e) => setRoleIntent(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm font-mono"
                    style={inputStyle}
                  >
                    <option>Software Development Opportunity</option>
                    <option>Full-Time Engineering Role</option>
                    <option>Internship Opportunity</option>
                    <option>Freelance Project</option>
                    <option>Technical Collaboration</option>
                    <option>Open Source Contribution</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                {/* Custom Note */}
                <div>
                  <label className="block text-[11px] font-mono text-[#8A9080] uppercase tracking-wider mb-1.5">
                    Brief Note (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="Tell me about the role, tech stack, or problem you're solving..."
                    className="w-full px-4 py-2.5 text-sm font-mono placeholder:text-[#4A5A4A] resize-none"
                    style={inputStyle}
                  />
                </div>

                {/* CTA */}
                <div
                  className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-[11px] font-mono text-[#5A6A5A] text-center sm:text-left">
                    Opens mailto to <span style={{ color: "#A0D060" }}>{PERSONAL_INFO.email}</span>
                  </span>
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm font-mono transition-all shrink-0"
                    style={{
                      background: "#A0D060",
                      color: "#0D0F0D",
                      border: "1px solid rgba(160,208,96,0.6)",
                      borderTop: "1px solid rgba(255,255,255,0.3)",
                      borderLeft: "1px solid rgba(255,255,255,0.2)",
                      borderBottom: "3px solid rgba(0,0,0,0.5)",
                      borderRight: "3px solid rgba(0,0,0,0.5)",
                    }}
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Portal visual on desktop */}
            <div className="hidden lg:block mt-6">
              <PortalVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
