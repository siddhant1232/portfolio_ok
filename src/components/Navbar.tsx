"use client";

import React, { useState, useEffect } from "react";
import { Download, Search, Menu, X, FileText, Sparkles, Terminal } from "lucide-react";
import { PERSONAL_INFO, NAV_LINKS } from "@/data/portfolio";

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenResumeModal: () => void;
}

export default function Navbar({ onOpenCommandPalette, onOpenResumeModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0D12]/80 backdrop-blur-xl border-b border-white/10 shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#171B26] to-[#0E1118] border border-white/15 flex items-center justify-center font-mono font-bold text-sm text-[#F1F0EB] group-hover:border-[#B8F36B]/60 group-hover:shadow-[0_0_15px_-3px_rgba(184,243,107,0.3)] transition-all">
              <span className="text-[#B8F36B]">S</span>G
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold tracking-tight text-[#F1F0EB] group-hover:text-[#B8F36B] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono text-[#9496A1] leading-none hidden sm:inline">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#11141C]/80 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                    isActive
                      ? "text-[#0B0D12] bg-[#B8F36B] font-semibold shadow-sm"
                      : "text-[#9496A1] hover:text-[#F1F0EB] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Command Palette trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-2.5 py-1.5 text-xs text-[#9496A1] hover:text-[#F1F0EB] bg-[#11141C] hover:bg-white/5 border border-white/10 rounded-lg transition-all font-mono"
              title="Open Command Palette"
            >
              <Search className="w-3.5 h-3.5 text-[#B8F36B]" />
              <span className="text-[11px] hidden md:inline">Quick Jump</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-white/5 border border-white/10 rounded text-[#9496A1]">
                ⌘K
              </kbd>
            </button>

            {/* Resume Button */}
            <div className="flex items-center gap-1.5">
              <a
                href="/Siddhant_Gupta_Resume.pdf"
                download="Siddhant_Gupta_Resume.pdf"
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#0B0D12] bg-[#B8F36B] hover:bg-[#a8ea59] rounded-lg transition-all shadow-[0_0_15px_-3px_rgba(184,243,107,0.3)] font-mono"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
              <button
                onClick={onOpenResumeModal}
                className="p-1.5 text-[#9496A1] hover:text-[#F1F0EB] hover:bg-white/5 border border-white/10 rounded-lg transition-colors"
                title="Preview Resume"
              >
                <FileText className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 text-[#9496A1] hover:text-[#F1F0EB] bg-white/5 border border-white/10 rounded-lg"
              aria-label="Quick search"
            >
              <Search className="w-4 h-4 text-[#B8F36B]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#9496A1] hover:text-[#F1F0EB] bg-white/5 border border-white/10 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-black/90 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 animate-in fade-in duration-200">
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <p className="text-[11px] font-mono text-[#B8F36B] uppercase tracking-wider mb-2">Navigation</p>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium text-[#F1F0EB] hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#9496A1]">#</span>
                </a>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <a
                href="/Siddhant_Gupta_Resume.pdf"
                download="Siddhant_Gupta_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-[#0B0D12] bg-[#B8F36B] rounded-xl font-mono"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-[#F1F0EB] bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl"
              >
                <FileText className="w-4 h-4 text-[#B8F36B]" />
                <span>Preview Resume In-Browser</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

