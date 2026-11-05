"use client";

import React, { useState, useEffect } from "react";
import { Search, ArrowRight, Download, Mail, ExternalLink, Terminal, Sparkles, FolderGit2 } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { PERSONAL_INFO, PROJECTS } from "@/data/portfolio";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenResume }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or toggle
        }
      }
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: "ender-assistant",
      name: "Summon Ender Assistant (RAG Chatbot)",
      subtitle: "Ask questions about Siddhant's skills, experience & projects",
      icon: <Sparkles className="w-4 h-4 text-[#C084FC]" />,
      action: () => {
        onClose();
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("summon-ender-assistant"));
        }
      },
    },
    {
      id: "projects",
      name: "View Featured Projects",
      subtitle: "Multi-Agent System, Distributed Rate Limiter, Conciso",
      icon: <FolderGit2 className="w-4 h-4 text-[#B8F36B]" />,
      action: () => {
        onClose();
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "resume",
      name: "Open & Download Resume",
      subtitle: "Official PDF with verified experience and skills",
      icon: <Download className="w-4 h-4 text-[#B8F36B]" />,
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: "experience",
      name: "Work Experience",
      subtitle: "Codec Technologies India (Full Stack Developer Intern)",
      icon: <Terminal className="w-4 h-4 text-[#B8F36B]" />,
      action: () => {
        onClose();
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "skills",
      name: "Technical Skills",
      subtitle: "Languages, Backend, Frontend, Cloud & AI Frameworks",
      icon: <Sparkles className="w-4 h-4 text-[#B8F36B]" />,
      action: () => {
        onClose();
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "contact",
      name: "Get in Touch / Email",
      subtitle: PERSONAL_INFO.email,
      icon: <Mail className="w-4 h-4 text-[#B8F36B]" />,
      action: () => {
        onClose();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "github",
      name: "Open GitHub Profile",
      subtitle: "github.com/siddhant1232",
      icon: <Github className="w-4 h-4 text-[#B8F36B]" />,
      action: () => {
        window.open(PERSONAL_INFO.github, "_blank");
        onClose();
      },
    },
    {
      id: "linkedin",
      name: "Open LinkedIn Profile",
      subtitle: "linkedin.com/in/siddhant62632",
      icon: <Linkedin className="w-4 h-4 text-[#B8F36B]" />,
      action: () => {
        window.open(PERSONAL_INFO.linkedin, "_blank");
        onClose();
      },
    },
  ];

  const filteredActions = actions.filter((act) =>
    act.name.toLowerCase().includes(query.toLowerCase()) ||
    act.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#0E1118] border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-[#131722]/90">
          <Search className="w-4 h-4 text-[#9496A1]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            autoFocus
            className="w-full bg-transparent text-[#F1F0EB] text-sm focus:outline-none placeholder:text-[#616573] font-sans"
          />
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-[#9496A1] bg-white/5 border border-white/10 rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/[0.04]">
          {filteredActions.length === 0 ? (
            <div className="p-6 text-center text-xs text-[#9496A1]">
              No actions matching &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredActions.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.05] group transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#B8F36B]/40 group-hover:bg-[#B8F36B]/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#F1F0EB] group-hover:text-[#B8F36B] transition-colors">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-[#9496A1]">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#616573] group-hover:text-[#B8F36B] group-hover:translate-x-0.5 transition-all" />
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#0B0D12] border-t border-white/10 flex items-center justify-between text-[11px] text-[#616573] font-mono">
          <span>Quick actions for technical recruiters</span>
          <span className="text-[#B8F36B]">Siddhant Gupta</span>
        </div>
      </div>
    </div>
  );
}
