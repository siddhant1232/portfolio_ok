"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative z-10 py-10 text-left"
      style={{
        background: "rgba(10,12,10,0.98)",
        borderTop: "2px solid rgba(93,138,60,0.2)",
      }}
    >
      {/* Dirt/bedrock texture line */}
      <div
        style={{
          height: "4px",
          background: "repeating-linear-gradient(90deg, rgba(93,138,60,0.3) 0px, rgba(93,138,60,0.3) 8px, rgba(0,0,0,0.5) 8px, rgba(0,0,0,0.5) 16px)",
          marginBottom: "0",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Top row */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div
                className="w-9 h-9 flex items-center justify-center font-mono font-bold text-sm"
                style={{
                  background: "rgba(93,138,60,0.2)",
                  border: "1px solid rgba(160,208,96,0.4)",
                  borderTop: "1px solid rgba(160,208,96,0.2)",
                  borderLeft: "1px solid rgba(160,208,96,0.15)",
                  borderBottom: "2px solid rgba(0,0,0,0.6)",
                  borderRight: "2px solid rgba(0,0,0,0.6)",
                  color: "#A0D060",
                }}
              >
                SG
              </div>
              <span className="text-base font-bold text-[#F1F0EB] tracking-tight">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-[11px] font-mono text-[#5A6A5A]">
              Full Stack Developer · Backend Architecture · AI Applications
            </p>
          </div>

          {/* Social links + Back to top */}
          <div className="flex items-center gap-2">
            {[
              { href: PERSONAL_INFO.github, label: "GitHub", icon: <Github className="w-4 h-4" /> },
              { href: PERSONAL_INFO.linkedin, label: "LinkedIn", icon: <Linkedin className="w-4 h-4" /> },
              { href: `mailto:${PERSONAL_INFO.email}`, label: "Email", icon: <Mail className="w-4 h-4" /> },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="p-2 transition-colors text-[#5A6A5A] hover:text-[#A0D060]"
                style={{
                  background: "rgba(26,28,26,0.9)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  borderBottom: "2px solid rgba(0,0,0,0.5)",
                  borderRight: "2px solid rgba(0,0,0,0.5)",
                }}
              >
                {icon}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 text-[11px] font-mono transition-colors text-[#5A6A5A] hover:text-[#A0D060] ml-1"
              style={{
                background: "rgba(26,28,26,0.9)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                borderBottom: "2px solid rgba(0,0,0,0.5)",
                borderRight: "2px solid rgba(0,0,0,0.5)",
              }}
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#3A4A3A]">
          <div>
            © 2026 {PERSONAL_INFO.name}. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </div>
          {/* Minecraft-style coordinate display */}
          <div
            className="px-3 py-1.5 flex items-center gap-3"
            style={{
              background: "rgba(13,15,13,0.9)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <span className="text-[#A0D060]">XYZ: END / 0 / 0</span>
            <span>·</span>
            <span>The End Dimension</span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A0D060] animate-pulse inline-block" />
              Open for Roles
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
