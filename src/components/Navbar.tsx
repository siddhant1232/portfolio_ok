"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X, FileText, Terminal, Search } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "About", href: "#about", icon: "⚔", coord: "X: 0" },
  { label: "Experience", href: "#experience", icon: "📋", coord: "Y: -64" },
  { label: "Projects", href: "#projects", icon: "🔬", coord: "Z: 128" },
  { label: "Skills", href: "#skills", icon: "🎒", coord: "X: 256" },
  { label: "Achievements", href: "#achievements", icon: "🏆", coord: "Y: 128" },
  { label: "Contact", href: "#contact", icon: "🌐", coord: "Z: 512" },
];

interface NavbarProps {
  onOpenResumeModal?: () => void;
  onOpenCommandPalette?: () => void;
}

export default function Navbar({ onOpenResumeModal, onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 64, z: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update fake world coordinates based on scroll
      const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setCursorPos({
        x: Math.round(scrollPct * 1024 - 512),
        y: Math.round(64 - scrollPct * 64),
        z: Math.round(scrollPct * 512),
      });

      // Active section detection
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= window.scrollY + 140) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[rgba(93,138,60,0.2)] bg-[#0D0F0D]/90 backdrop-blur-xl py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram — Block Style */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div
              className="w-10 h-10 flex items-center justify-center font-pixel text-sm font-bold text-[#A0D060] group-hover:text-[#E8E0D0] transition-colors"
              style={{
                background: "linear-gradient(135deg, #1E2A1A 0%, #141C10 100%)",
                border: "2px solid rgba(160,208,96,0.4)",
                borderBottomColor: "rgba(0,0,0,0.6)",
                borderRightColor: "rgba(0,0,0,0.6)",
              }}
            >
              SG
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-sm font-bold text-[#E8E0D0] tracking-tight group-hover:text-[#A0D060] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono text-[#5A5450] leading-none tracking-wider uppercase">
                Full Stack Dev // SDE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links — Hotbar Style */}
          <nav className="hidden lg:flex items-center gap-1 px-2 py-1.5 bg-[#0D0F0D]/80 border border-[rgba(255,255,255,0.08)] backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  title={`Navigate to ${link.label} ${link.coord}`}
                  className={`relative px-3 py-1.5 text-xs font-mono font-semibold transition-all duration-150 ${
                    isActive
                      ? "text-[#A0D060] bg-[#1E2A1A]"
                      : "text-[#9A9490] hover:text-[#E8E0D0] hover:bg-[rgba(255,255,255,0.04)]"
                  }`}
                  style={
                    isActive
                      ? {
                          border: "2px solid rgba(160,208,96,0.5)",
                          borderBottomColor: "rgba(0,0,0,0.5)",
                          borderRightColor: "rgba(0,0,0,0.5)",
                        }
                      : {}
                  }
                >
                  <span>{link.icon} {link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right: Coordinates HUD + Command Palette + Resume */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Coordinate display */}
            <div className="hidden lg:flex items-center gap-1 px-2.5 py-1 bg-[#0A0C0A] border border-[rgba(255,255,255,0.06)] font-mono text-[10px] text-[#5D8A3C]">
              <span>X:{cursorPos.x}</span>
              <span className="text-[#3A3C3A] mx-1">/</span>
              <span>Y:{cursorPos.y}</span>
              <span className="text-[#3A3C3A] mx-1">/</span>
              <span>Z:{cursorPos.z}</span>
            </div>

            {/* Ender Assistant Quick Summon */}
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("summon-ender-assistant"));
                }
              }}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-[#C084FC] hover:text-[#E0AAFF] transition-colors border border-[rgba(155,77,202,0.3)] bg-[#10081C] hover:bg-[#1A0A2E]"
              title="Summon Ender Assistant (RAG Chatbot)"
            >
              <div className="flex gap-0.5">
                <span className="w-1.5 h-1 bg-[#C084FC] inline-block shadow-[0_0_4px_#A855F7]" />
                <span className="w-1.5 h-1 bg-[#C084FC] inline-block shadow-[0_0_4px_#A855F7]" />
              </div>
              <span className="hidden xl:inline text-[10px] tracking-wider text-[#E0AAFF]">ENDER AI</span>
            </button>

            {/* Command Palette Trigger */}
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-[#9A9490] hover:text-[#A0D060] transition-colors border border-[rgba(255,255,255,0.08)] bg-[#141614] hover:bg-[#1A1E1A]"
                title="Open Command Palette (⌘K)"
              >
                <Terminal className="w-3.5 h-3.5 text-[#A0D060]" />
                <span className="text-[10px] text-[#5A5450] border border-[#2A2A2A] px-1 py-0.2">/</span>
              </button>
            )}

            {/* Resume download */}
            <a
              href="/Siddhant_Gupta_Resume.pdf"
              download="Siddhant_Gupta_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold text-[#0D0F0D] bg-[#A0D060] hover:bg-[#B4E070] transition-all"
              style={{
                border: "2px solid rgba(255,255,255,0.2)",
                borderBottomColor: "rgba(0,0,0,0.5)",
                borderRightColor: "rgba(0,0,0,0.5)",
              }}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {onOpenResumeModal && (
              <button
                onClick={onOpenResumeModal}
                className="p-2 text-[#9A9490] hover:text-[#A0D060] transition-colors border border-[rgba(255,255,255,0.08)] bg-[#141614] hover:bg-[#1A1E1A]"
                title="Preview Resume"
              >
                <FileText className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="p-2 text-[#9A9490] hover:text-[#A0D060] transition-colors border border-[rgba(255,255,255,0.08)] bg-[#141614]"
                title="Open Command Palette"
              >
                <Terminal className="w-4 h-4 text-[#A0D060]" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#9A9490] hover:text-[#A0D060] transition-colors border border-[rgba(255,255,255,0.08)] bg-[#141614]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#0D0F0D]/98 backdrop-blur-2xl flex flex-col pt-20 px-6 pb-8">
          <div className="mb-4 text-[10px] font-mono text-[#3A3C3A] uppercase tracking-wider">
            // NAVIGATION CONSOLE
          </div>
          <div className="flex-1 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 px-4 border border-[rgba(255,255,255,0.06)] text-[#E8E0D0] hover:bg-[rgba(93,138,60,0.08)] hover:border-[rgba(93,138,60,0.3)] hover:text-[#A0D060] transition-all font-mono text-sm"
              >
                <span>{link.icon} {link.label}</span>
                <span className="text-[10px] text-[#3A3C3A]">{link.coord}</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] space-y-2">
            <a
              href="/Siddhant_Gupta_Resume.pdf"
              download="Siddhant_Gupta_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 font-mono font-bold text-sm text-[#0D0F0D] bg-[#A0D060]"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}
