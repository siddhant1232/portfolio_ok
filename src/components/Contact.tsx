"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, Copy, Check, ArrowRight, MessageSquare, Clock, MapPin, Sparkles } from "lucide-react";
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

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#B8F36B]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-[#B8F36B] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F1F0EB] tracking-tight">
            Have a good problem? Let&apos;s build something.
          </h2>
          <p className="text-base sm:text-lg text-[#9496A1] mt-3 max-w-2xl leading-relaxed">
            I&apos;m always interested in meaningful engineering challenges, software development opportunities, and collaborations.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#0E1118]/90 border border-white/10 hover:border-[#B8F36B]/40 transition-all shadow-xl group">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#B8F36B]/10 border border-[#B8F36B]/20 text-[#B8F36B]">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#9496A1] hover:text-[#F1F0EB] transition-colors flex items-center gap-1.5"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#B8F36B]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <div className="mt-4">
                <span className="text-xs font-mono text-[#9496A1] uppercase tracking-wider">
                  Direct Email
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="block text-base sm:text-lg font-bold text-[#F1F0EB] hover:text-[#B8F36B] transition-colors mt-0.5 break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#0E1118]/90 border border-white/10 hover:border-[#B8F36B]/40 transition-all shadow-xl group">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#B8F36B]/10 border border-[#B8F36B]/20 text-[#B8F36B]">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={copyPhone}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#9496A1] hover:text-[#F1F0EB] transition-colors flex items-center gap-1.5"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#B8F36B]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <div className="mt-4">
                <span className="text-xs font-mono text-[#9496A1] uppercase tracking-wider">
                  Phone Number
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="block text-base sm:text-lg font-bold text-[#F1F0EB] hover:text-[#B8F36B] transition-colors mt-0.5"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0E1118]/90 border border-white/10 hover:border-[#B8F36B]/40 transition-all group flex flex-col justify-between"
              >
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 w-fit text-[#CBD5E1] group-hover:text-[#B8F36B]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="mt-4">
                  <span className="text-[10px] font-mono text-[#9496A1] uppercase">Professional</span>
                  <p className="text-sm font-bold text-[#F1F0EB] group-hover:text-[#B8F36B] transition-colors">
                    LinkedIn ↗
                  </p>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0E1118]/90 border border-white/10 hover:border-[#B8F36B]/40 transition-all group flex flex-col justify-between"
              >
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 w-fit text-[#CBD5E1] group-hover:text-[#B8F36B]">
                  <Github className="w-5 h-5" />
                </div>
                <div className="mt-4">
                  <span className="text-[10px] font-mono text-[#9496A1] uppercase">Code & Repos</span>
                  <p className="text-sm font-bold text-[#F1F0EB] group-hover:text-[#B8F36B] transition-colors">
                    GitHub ↗
                  </p>
                </div>
              </a>
            </div>

            {/* Location & Timezone info */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono text-[#9496A1]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B8F36B]" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1.5 text-[#CBD5E1]">
                <Clock className="w-3.5 h-3.5 text-[#B8F36B]" />
                {PERSONAL_INFO.timezone}
              </span>
            </div>
          </div>

          {/* Right Column: Pre-configured Message Builder */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0E1118]/90 border border-white/10 shadow-2xl flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#B8F36B]" />
                  <span className="text-sm font-semibold text-[#F1F0EB]">
                    Direct Email Dispatcher
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#9496A1]">
                  Opens your default mail app
                </span>
              </div>

              {/* Purpose Selector */}
              <div>
                <label className="block text-xs font-mono text-[#9496A1] uppercase tracking-wider mb-2">
                  What is this regarding?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Software Development Opportunity",
                    "Full Stack Internship Role",
                    "Engineering Collaboration",
                    "Freelance Architecture Project",
                  ].map((intent) => (
                    <button
                      key={intent}
                      type="button"
                      onClick={() => setRoleIntent(intent)}
                      className={`p-2.5 rounded-xl text-xs font-medium text-left border transition-all ${
                        roleIntent === intent
                          ? "bg-[#171B26] border-[#B8F36B] text-[#B8F36B]"
                          : "bg-white/[0.02] border-white/10 text-[#CBD5E1] hover:bg-white/5"
                      }`}
                    >
                      {intent}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name field */}
              <div>
                <label className="block text-xs font-mono text-[#9496A1] uppercase tracking-wider mb-1.5">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  placeholder="e.g. Acme Tech Hiring Team, Jane Doe"
                  className="w-full bg-[#11141C] text-[#F1F0EB] text-sm px-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#B8F36B]/50 placeholder:text-[#616573]"
                />
              </div>

              {/* Message field */}
              <div>
                <label className="block text-xs font-mono text-[#9496A1] uppercase tracking-wider mb-1.5">
                  Optional Message / Project Scope
                </label>
                <textarea
                  rows={3}
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="Tell me a bit about the role, tech stack, or problem you're solving..."
                  className="w-full bg-[#11141C] text-[#F1F0EB] text-sm px-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#B8F36B]/50 placeholder:text-[#616573] resize-none"
                />
              </div>
            </div>

            {/* Direct Mailto CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#9496A1] font-mono text-center sm:text-left">
                Will open mailto link to <span className="text-[#B8F36B]">{PERSONAL_INFO.email}</span>
              </span>

              <a
                href={mailtoLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#0B0D12] bg-[#B8F36B] hover:bg-[#a8ea59] transition-all shadow-[0_0_20px_-3px_rgba(184,243,107,0.35)] font-mono shrink-0"
              >
                <span>Let&apos;s Connect</span>
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
