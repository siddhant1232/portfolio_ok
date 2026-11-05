"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  onOpenResumeModal?: () => void;
  onOpenCommandPalette?: () => void;
}

export default function Navbar({ onOpenResumeModal, onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
            ? "border-b border-[rgba(93,138,60,0.2)] bg-[#0D0F0D]/90 backdrop-blur-xl py-2.5"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram — Clean Block Style */}
          <a href="#" className="flex items-center gap-2.5 group focus:outline-none">
            <div
              className="w-9 h-9 flex items-center justify-center font-mono text-xs font-bold text-[#A0D060] group-hover:text-[#FFFFFF] transition-colors"
              style={{
                background: "#141C10",
                border: "1px solid rgba(160,208,96,0.5)",
                borderBottom: "2px solid rgba(0,0,0,0.8)",
                borderRight: "2px solid rgba(0,0,0,0.8)",
              }}
            >
              SG
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-bold text-[#F1F0EB] tracking-tight group-hover:text-[#A0D060] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono text-[#6A7065] leading-none tracking-wider uppercase">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links — Sleek & Uncongested Hotbar */}
          <nav className="hidden lg:flex items-center gap-0.5 px-1.5 py-1 bg-[#101210]/80 border border-white/5 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-mono font-medium transition-all ${
                    isActive
                      ? "text-[#A0D060] bg-[#182015] border border-[rgba(160,208,96,0.35)]"
                      : "text-[#8A9085] hover:text-[#F1F0EB] hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Ender Eyes + Command Palette + Resume */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Ender Eyes Icon Button — Minimal & Sleek (No text) */}
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("summon-ender-assistant"));
                }
              }}
              className="p-2 transition-all border border-[#3A1F5C] bg-[#0A0712] hover:bg-[#180E28] hover:border-[#9B4DCA]"
              title="Summon Ender Assistant (RAG Chatbot)"
              aria-label="Summon Ender Assistant"
            >
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1 bg-[#C084FC] inline-block shadow-[0_0_4px_#A855F7]" />
                <span className="w-1.5 h-1 bg-[#C084FC] inline-block shadow-[0_0_4px_#A855F7]" />
              </div>
            </button>

            {/* Command Palette Trigger */}
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-[#8A9085] hover:text-[#A0D060] transition-colors border border-white/10 bg-[#141614] hover:bg-[#1A1E1A]"
                title="Command Palette (⌘K)"
              >
                <Terminal className="w-3.5 h-3.5 text-[#A0D060]" />
                <span className="text-[10px] text-[#5A6055]">⌘K</span>
              </button>
            )}

            {/* Resume Button */}
            {onOpenResumeModal && (
              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold text-[#0D0F0D] bg-[#A0D060] hover:bg-[#B4E070] transition-all"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderBottom: "2px solid rgba(0,0,0,0.6)",
                  borderRight: "2px solid rgba(0,0,0,0.6)",
                }}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("summon-ender-assistant"));
                }
              }}
              className="p-2 border border-[#3A1F5C] bg-[#0A0712]"
              title="Summon Ender Assistant"
              aria-label="Summon Ender Assistant"
            >
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1 bg-[#C084FC] inline-block shadow-[0_0_4px_#A855F7]" />
                <span className="w-1.5 h-1 bg-[#C084FC] inline-block shadow-[0_0_4px_#A855F7]" />
              </div>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#C8D4B8] hover:text-[#A0D060] bg-[#141614] border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0D0F0D]/95 backdrop-blur-xl lg:hidden pt-20 px-6 pb-8 flex flex-col justify-between"
          style={{ borderBottom: "1px solid rgba(93,138,60,0.3)" }}
        >
          <div className="space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-mono text-[#C8D4B8] hover:text-[#A0D060] hover:bg-[#1E2A1A] transition-colors border border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            {onOpenResumeModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-mono font-bold text-[#0D0F0D] bg-[#A0D060]"
              >
                <Download className="w-4 h-4" />
                <span>Download / Preview Resume</span>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
