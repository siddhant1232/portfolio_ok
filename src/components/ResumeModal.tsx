"use client";

import React, { useEffect } from "react";
import { X, Download, FileText, ExternalLink, Check, Briefcase, GraduationCap, Award, Code2 } from "lucide-react";
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES, ACHIEVEMENTS } from "@/data/portfolio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E1118] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#131722]/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#B8F36B]/10 border border-[#B8F36B]/30 flex items-center justify-center text-[#B8F36B]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#F1F0EB]">Siddhant Gupta — Curriculum Vitae</h3>
              <p className="text-xs text-[#9496A1]">Official Verified Credentials • PDF Available</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Siddhant_Gupta_Resume.pdf"
              download="Siddhant_Gupta_Resume.pdf"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#0B0D12] bg-[#B8F36B] hover:bg-[#a8ea59] rounded-lg transition-all shadow-sm font-mono"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-[#9496A1] hover:text-[#F1F0EB] hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content - Scrollable Resume View */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-sm">
          {/* Header Card */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-[#F1F0EB] tracking-tight">{PERSONAL_INFO.name}</h1>
                <p className="text-sm text-[#B8F36B] font-mono mt-0.5">{PERSONAL_INFO.title}</p>
                <p className="text-xs text-[#9496A1] mt-2">
                  {PERSONAL_INFO.location} • {PERSONAL_INFO.phone}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[#F1F0EB] transition-colors inline-flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3 h-3 text-[#B8F36B]" /> : null}
                  {copied ? "Copied Email!" : PERSONAL_INFO.email}
                </button>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[#F1F0EB] transition-colors inline-flex items-center gap-1"
                >
                  GitHub <ExternalLink className="w-3 h-3 text-[#9496A1]" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[#F1F0EB] transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn <ExternalLink className="w-3 h-3 text-[#9496A1]" />
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <section>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#B8F36B] uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <div className="p-4 border border-white/10 rounded-xl bg-white/[0.02]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h4 className="font-semibold text-[#F1F0EB]">{PERSONAL_INFO.education.degree}</h4>
                  <p className="text-xs text-[#9496A1]">
                    {PERSONAL_INFO.education.institution} — {PERSONAL_INFO.education.location}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#B8F36B] mt-1 sm:mt-0">
                  {PERSONAL_INFO.education.period}
                </span>
              </div>
              <p className="text-xs text-[#9496A1] mt-2">
                Coursework: {PERSONAL_INFO.education.coursework.join(", ")}
              </p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#B8F36B] uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </div>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="p-4 border border-white/10 rounded-xl bg-white/[0.02]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-[#F1F0EB]">{exp.company}</h4>
                      <p className="text-xs text-[#B8F36B] font-mono">{exp.role}</p>
                    </div>
                    <span className="text-xs font-mono text-[#9496A1] mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5 list-disc list-inside text-xs text-[#CBD5E1]">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="leading-relaxed">{resp}</li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 text-[11px] font-mono bg-white/5 border border-white/10 rounded text-[#9496A1]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#B8F36B] uppercase tracking-wider">
              <Code2 className="w-4 h-4" />
              <span>Featured Technical Projects</span>
            </div>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 border border-white/10 rounded-xl bg-white/[0.02]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="font-semibold text-[#F1F0EB]">{proj.title}</h4>
                    <span className="text-xs font-mono text-[#9496A1]">GitHub: siddhant1232</span>
                  </div>
                  <p className="text-xs text-[#9496A1] mt-1">{proj.description}</p>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-xs text-[#CBD5E1]">
                    {proj.implementation.slice(0, 3).map((imp, iIdx) => (
                      <li key={iIdx}>{imp}</li>
                    ))}
                  </ul>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {proj.techStack.map((t, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 text-[10px] font-mono bg-[#B8F36B]/10 text-[#B8F36B] border border-[#B8F36B]/20 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#B8F36B] uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Achievements & Certifications</span>
            </div>
            <div className="space-y-2.5">
              {ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} className="p-3 border border-white/10 rounded-lg bg-white/[0.02] text-xs">
                  <div className="flex justify-between font-semibold text-[#F1F0EB]">
                    <span>{ach.title}</span>
                    <span className="font-mono text-[#B8F36B] text-[11px]">{ach.badge}</span>
                  </div>
                  <p className="text-[#9496A1] mt-1">{ach.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#131722]/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#9496A1] text-center sm:text-left">
            Need an interview or technical screening? Siddhant is open to full-time and internship roles.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#9496A1] hover:text-[#F1F0EB] transition-colors"
            >
              Close
            </button>
            <a
              href="/Siddhant_Gupta_Resume.pdf"
              download="Siddhant_Gupta_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0B0D12] bg-[#B8F36B] hover:bg-[#a8ea59] rounded-lg transition-all font-mono"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF File</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
