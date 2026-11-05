"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  PERSONAL_INFO,
  PROJECTS,
  EXPERIENCES,
  SKILL_CATEGORIES,
  ACHIEVEMENTS,
} from "@/data/portfolio";

// ─── Knowledge Base (Simulated RAG) ──────────────────────────────────────────
const KB_ENTRIES = [
  {
    keys: ["who", "about", "siddhant", "yourself", "introduce", "tell me"],
    answer: `§ ENTITY PROFILE LOADED §\n\nI am Siddhant Gupta — a Full Stack Developer and B.Tech CSE undergraduate at Technocrats Institute of Technology, Bhopal (graduating 2027).\n\nI specialize in building scalable backend systems, full-stack web applications, and AI-powered tools. Currently open to software development opportunities — internships and full-time roles.\n\n📍 Bhopal, Madhya Pradesh, India\n📧 ${PERSONAL_INFO.email}`,
  },
  {
    keys: ["skill", "tech", "stack", "language", "framework", "tools", "know", "use"],
    answer: `§ INVENTORY SCAN COMPLETE §\n\n⚔ LANGUAGES\n${PERSONAL_INFO.bio.aboutParagraphs[0]}\nJS/TS, Java, Python, SQL, HTML5, CSS3\n\n🛡 FRONTEND\nReact.js, Next.js, Tailwind CSS\n\n🗡 BACKEND\nNode.js, Express.js, REST APIs, Microservices, JWT\n\n🔮 DATABASES\nPostgreSQL, MongoDB, Redis, ChromaDB, Firebase\n\n☁ DEVOPS & CLOUD\nDocker, AWS EC2, AWS S3, Git\n\n🤖 AI & LLM\nGoogle Gemini API, RAG, LangGraph, Prompt Engineering`,
  },
  {
    keys: ["project", "build", "made", "work", "portfolio", "what have"],
    answer: `§ OUTER ISLAND BUILDS DISCOVERED §\n\n${PROJECTS.map((p, i) => `🔮 PROJECT ${i + 1}: ${p.title}\n   ${p.tagline}\n   Stack: ${p.techStack.join(", ")}\n   → ${p.githubUrl}`).join("\n\n")}`,
  },
  {
    keys: ["multi-agent", "langgraph", "ai agent", "research", "autonomous", "gemini"],
    answer: `§ OUTER ISLAND LAB 01 §\n\n🤖 Multi-Agent Research & Report System\n\n${PROJECTS[0].description}\n\nProblem solved: ${PROJECTS[0].problem}\n\nKey decisions:\n${PROJECTS[0].keyDecisions.map(d => `  • ${d}`).join("\n")}\n\nStack: ${PROJECTS[0].techStack.join(", ")}`,
  },
  {
    keys: ["rate limiter", "redis", "microservice", "distributed", "bullmq", "docker"],
    answer: `§ OUTER ISLAND LAB 02 §\n\n⚡ Distributed API Rate Limiter & Microservices\n\n${PROJECTS[1].description}\n\nProblem solved: ${PROJECTS[1].problem}\n\nKey decisions:\n${PROJECTS[1].keyDecisions.map(d => `  • ${d}`).join("\n")}\n\nStack: ${PROJECTS[1].techStack.join(", ")}`,
  },
  {
    keys: ["conciso", "pdf", "summarizer", "document", "nextjs", "summarize"],
    answer: `§ OUTER ISLAND LAB 03 §\n\n📄 Conciso — AI PDF Summarizer\n\n${PROJECTS[2].description}\n\nProblem solved: ${PROJECTS[2].problem}\n\nKey decisions:\n${PROJECTS[2].keyDecisions.map(d => `  • ${d}`).join("\n")}\n\nStack: ${PROJECTS[2].techStack.join(", ")}`,
  },
  {
    keys: ["experience", "internship", "job", "work", "codec", "company"],
    answer: `§ QUEST LOG — COMPLETED §\n\n✅ ${EXPERIENCES[0].role}\n   ${EXPERIENCES[0].company}\n   ${EXPERIENCES[0].period} (${EXPERIENCES[0].duration})\n\n${EXPERIENCES[0].responsibilities.map(r => `  ▸ ${r}`).join("\n")}\n\nTech: ${EXPERIENCES[0].technologies.join(", ")}`,
  },
  {
    keys: ["achievement", "hackathon", "sih", "smart india", "award", "competition", "nptel", "hack"],
    answer: `§ ACHIEVEMENTS UNLOCKED §\n\n${ACHIEVEMENTS.map(a => `🏆 ${a.title}\n   ${a.organization}${a.venue ? ` — ${a.venue}` : ""}\n   ${a.description}`).join("\n\n")}`,
  },
  {
    keys: ["education", "college", "university", "btech", "degree", "study", "course"],
    answer: `§ PLAYER ORIGIN §\n\n🎓 ${PERSONAL_INFO.education.degree}\n   ${PERSONAL_INFO.education.institution}\n   ${PERSONAL_INFO.education.location}\n   ${PERSONAL_INFO.education.period}\n   Status: ${PERSONAL_INFO.education.status}\n\nCoursework:\n${PERSONAL_INFO.education.coursework.map(c => `  • ${c}`).join("\n")}`,
  },
  {
    keys: ["contact", "email", "phone", "reach", "hire", "connect", "linkedin", "github"],
    answer: `§ DIMENSIONAL COORDINATES §\n\n📧 Email: ${PERSONAL_INFO.email}\n📱 Phone: ${PERSONAL_INFO.phone}\n🔗 GitHub: ${PERSONAL_INFO.github}\n💼 LinkedIn: ${PERSONAL_INFO.linkedin}\n📍 Location: ${PERSONAL_INFO.location}\n\n${PERSONAL_INFO.availability}`,
  },
  {
    keys: ["available", "open", "hire", "opportunity", "looking", "job", "role", "position"],
    answer: `§ STATUS: ACTIVE §\n\n✅ OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES\n\nI am actively seeking:\n  • Full Stack Developer roles\n  • Backend Engineering positions\n  • AI/ML application development\n  • Internships & full-time opportunities\n\nBest way to reach me:\n  📧 ${PERSONAL_INFO.email}\n  💼 ${PERSONAL_INFO.linkedin}`,
  },
];

const SUGGESTIONS = [
  "What can Siddhant build?",
  "Tell me about the AI project",
  "What's the tech stack?",
  "Show experience & internship",
  "Any achievements or hackathons?",
  "How to contact Siddhant?",
];

function queryKB(input: string): string {
  const q = input.toLowerCase();
  for (const entry of KB_ENTRIES) {
    if (entry.keys.some((k) => q.includes(k))) {
      return entry.answer;
    }
  }
  return `§ SIGNAL UNCLEAR §\n\nI couldn't find a precise match in the knowledge base for:\n"${input}"\n\nTry asking about:\n  • Skills & tech stack\n  • Projects (AI agent, rate limiter, PDF summarizer)\n  • Experience at Codec Technologies\n  • Education & achievements\n  • Contact info\n  • Hiring availability`;
}

// ─── Enderman CSS Sprite ──────────────────────────────────────────────────────
function EndermanSprite({ isOpen, isTeleporting }: { isOpen: boolean; isTeleporting: boolean }) {
  return (
    <div
      style={{
        width: 44,
        height: 88,
        position: "relative",
        opacity: isTeleporting ? 0 : 1,
        transition: "opacity 0.25s ease",
        filter: isOpen ? "drop-shadow(0 0 12px #9B4DCA) drop-shadow(0 0 24px #7C3AED)" : "drop-shadow(0 0 6px #7C3AED)",
        cursor: "pointer",
      }}
    >
      {/* Head */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 20,
          height: 20,
          background: "#0A0A12",
          border: "2px solid #3A1F5C",
          boxShadow: isOpen ? "0 0 8px #9B4DCA" : "0 0 4px #5B2D8E",
        }}
      >
        {/* Eyes */}
        <div
          style={{
            position: "absolute",
            top: 6,
            left: 2,
            width: 5,
            height: 3,
            background: "#C084FC",
            boxShadow: "0 0 4px #A855F7, 0 0 8px #9B4DCA",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 6,
            right: 2,
            width: 5,
            height: 3,
            background: "#C084FC",
            boxShadow: "0 0 4px #A855F7, 0 0 8px #9B4DCA",
          }}
        />
      </div>
      {/* Body */}
      <div
        style={{
          position: "absolute",
          top: 22,
          left: "50%",
          transform: "translateX(-50%)",
          width: 14,
          height: 28,
          background: "#080810",
          border: "2px solid #2D1A42",
        }}
      />
      {/* Left Arm */}
      <div
        style={{
          position: "absolute",
          top: 22,
          left: 2,
          width: 6,
          height: 36,
          background: "#060608",
          border: "1px solid #2D1A42",
          transformOrigin: "top center",
          animation: isOpen ? "none" : "enderArm 3s ease-in-out infinite",
        }}
      />
      {/* Right Arm */}
      <div
        style={{
          position: "absolute",
          top: 22,
          right: 2,
          width: 6,
          height: 36,
          background: "#060608",
          border: "1px solid #2D1A42",
          transformOrigin: "top center",
          animation: isOpen ? "none" : "enderArm 3s ease-in-out infinite 1.5s",
        }}
      />
      {/* Left Leg */}
      <div
        style={{
          position: "absolute",
          top: 52,
          left: "50%",
          marginLeft: -10,
          width: 6,
          height: 36,
          background: "#060608",
          border: "1px solid #2D1A42",
        }}
      />
      {/* Right Leg */}
      <div
        style={{
          position: "absolute",
          top: 52,
          left: "50%",
          marginLeft: 4,
          width: 6,
          height: 36,
          background: "#060608",
          border: "1px solid #2D1A42",
        }}
      />
      {/* Particle aura */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 3,
            height: 3,
            background: "#9B4DCA",
            borderRadius: "50%",
            top: `${20 + i * 18}%`,
            left: i % 2 === 0 ? "-8px" : "calc(100% + 5px)",
            opacity: 0.7,
            animation: `enderParticle ${1.5 + i * 0.4}s ease-in-out infinite ${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function EnderAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTeleporting, setIsTeleporting] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialized, setInitialized] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "ender"; text: string }[]>([
    {
      role: "ender",
      text: "§ ENDER SIGNAL ESTABLISHED §\n\nI am the Ender Assistant — an entity bound to the outer islands of this portfolio dimension.\n\nAsk me anything about Siddhant's skills, projects, experience, or how to get in contact.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [typingTarget, setTypingTarget] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const teleportTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Safe corner positions (avoid center of screen)
  const getRandomPosition = useCallback(() => {
    if (typeof window === "undefined") return { x: 40, y: 40 };
    const margin = 110;
    const spriteH = 110;
    const panelW = isOpen ? 380 : 0;
    const positions = [
      { x: margin, y: margin },
      { x: window.innerWidth - margin - 60 - panelW, y: margin },
      { x: margin, y: window.innerHeight - spriteH - margin },
      { x: window.innerWidth - margin - 60 - panelW, y: window.innerHeight - spriteH - margin },
      { x: margin, y: window.innerHeight * 0.45 },
      { x: window.innerWidth - margin - 60 - panelW, y: window.innerHeight * 0.45 },
    ];
    return positions[Math.floor(Math.random() * positions.length)];
  }, [isOpen]);

  // Init position on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPosition({ x: window.innerWidth - 160, y: window.innerHeight - 220 });
      setInitialized(true);
    }
  }, []);

  // Auto-teleport every 10–14s when closed
  const scheduleTeleport = useCallback(() => {
    if (teleportTimerRef.current) clearTimeout(teleportTimerRef.current);
    teleportTimerRef.current = setTimeout(() => {
      if (!isOpen) {
        setIsTeleporting(true);
        setTimeout(() => {
          setPosition(getRandomPosition());
          setTimeout(() => setIsTeleporting(false), 300);
        }, 300);
      }
      scheduleTeleport();
    }, 10000 + Math.random() * 4000);
  }, [isOpen, getRandomPosition]);

  useEffect(() => {
    if (initialized) scheduleTeleport();
    return () => {
      if (teleportTimerRef.current) clearTimeout(teleportTimerRef.current);
    };
  }, [initialized, scheduleTeleport]);

  // Scroll messages to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, displayedText]);

  // Typewriter effect
  useEffect(() => {
    if (!typingTarget) return;
    setDisplayedText("");
    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      setDisplayedText(typingTarget.slice(0, idx));
      if (idx >= typingTarget.length) {
        clearInterval(interval);
        setIsTyping(false);
        setMessages((prev) => [...prev, { role: "ender", text: typingTarget }]);
        setTypingTarget("");
        setDisplayedText("");
      }
    }, 12);
    return () => clearInterval(interval);
  }, [typingTarget]);

  const handleSend = useCallback(
    (q?: string) => {
      const query = (q ?? input).trim();
      if (!query || isTyping) return;
      setInput("");
      setMessages((prev) => [...prev, { role: "user", text: query }]);
      setIsTyping(true);
      // Simulate brief "teleporting..." delay
      setTimeout(() => {
        const answer = queryKB(query);
        setTypingTarget(answer);
      }, 600);
    },
    [input, isTyping]
  );

  const handleToggle = () => {
    if (!isOpen) {
      // Brief teleport animation when opening
      setIsTeleporting(true);
      setTimeout(() => {
        setIsTeleporting(false);
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }, 350);
    } else {
      setIsOpen(false);
    }
  };

  if (!initialized) return null;

  const panelWidth = 360;

  // Calculate panel position (keep it on screen)
  const panelLeft =
    typeof window !== "undefined"
      ? Math.min(position.x, window.innerWidth - panelWidth - 20)
      : position.x;
  const panelTop =
    typeof window !== "undefined"
      ? Math.max(10, Math.min(position.y - 300, window.innerHeight - 540))
      : position.y - 300;

  return (
    <>
      {/* Global keyframes */}
      <style>{`
        @keyframes enderArm {
          0%, 100% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg); }
        }
        @keyframes enderParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-8px) scale(1.4); opacity: 0.3; }
        }
        @keyframes voidPulse {
          0%, 100% { box-shadow: 0 0 10px #7C3AED, 0 0 20px rgba(124,58,237,0.3); }
          50% { box-shadow: 0 0 20px #9B4DCA, 0 0 40px rgba(155,77,202,0.4); }
        }
        @keyframes enderBlink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0; }
        }
        @keyframes fadeInPanel {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes particleRise {
          0% { transform: translateY(0) scale(1); opacity: 0.8; }
          100% { transform: translateY(-24px) scale(0.3); opacity: 0; }
        }
      `}</style>

      {/* ── Sprite (always visible) ── */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          zIndex: 9999,
          transition: isTeleporting ? "none" : "left 0.6s cubic-bezier(0.68,-0.55,0.27,1.55), top 0.6s cubic-bezier(0.68,-0.55,0.27,1.55)",
          userSelect: "none",
        }}
      >
        {/* Label */}
        {!isOpen && !isTeleporting && (
          <div
            style={{
              position: "absolute",
              bottom: "calc(100% + 6px)",
              left: "50%",
              transform: "translateX(-50%)",
              whiteSpace: "nowrap",
              fontSize: 9,
              fontFamily: "monospace",
              color: "#C084FC",
              background: "rgba(6,6,10,0.9)",
              border: "1px solid rgba(155,77,202,0.4)",
              padding: "3px 7px",
              letterSpacing: "0.08em",
              animation: "enderBlink 4s ease-in-out infinite",
            }}
          >
            ☽ KNOCK TWICE TO SUMMON
          </div>
        )}

        <button
          onClick={handleToggle}
          aria-label="Toggle Ender Assistant"
          style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer" }}
        >
          <EndermanSprite isOpen={isOpen} isTeleporting={isTeleporting} />
        </button>

        {/* Rising particles when teleporting */}
        {isTeleporting &&
          [...Array(8)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: 4,
                height: 4,
                background: i % 2 === 0 ? "#9B4DCA" : "#E0AAFF",
                left: `${10 + i * 8}px`,
                top: `${30 + (i % 3) * 15}px`,
                animation: `particleRise ${0.4 + i * 0.05}s ease-out forwards`,
              }}
            />
          ))}
      </div>

      {/* ── Chat Panel ── */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            left: Math.max(10, panelLeft),
            top: Math.max(10, panelTop),
            width: panelWidth,
            maxHeight: 520,
            zIndex: 9998,
            display: "flex",
            flexDirection: "column",
            background: "rgba(6,6,10,0.98)",
            border: "1px solid rgba(155,77,202,0.5)",
            borderTop: "3px solid #9B4DCA",
            borderBottom: "3px solid rgba(0,0,0,0.9)",
            borderRight: "3px solid rgba(0,0,0,0.9)",
            boxShadow: "0 0 40px rgba(124,58,237,0.25), 0 24px 60px rgba(0,0,0,0.8)",
            animation: "fadeInPanel 0.3s ease-out",
          }}
        >
          {/* Panel Header */}
          <div
            style={{
              padding: "10px 14px",
              borderBottom: "1px solid rgba(155,77,202,0.3)",
              background: "rgba(30,10,50,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {/* Mini eyes */}
              <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
                <div style={{ width: 7, height: 5, background: "#C084FC", boxShadow: "0 0 4px #A855F7" }} />
                <div style={{ width: 7, height: 5, background: "#C084FC", boxShadow: "0 0 4px #A855F7" }} />
              </div>
              <div>
                <div style={{ fontSize: 11, fontFamily: "monospace", color: "#E0AAFF", fontWeight: 700, letterSpacing: "0.1em" }}>
                  ENDER ASSISTANT
                </div>
                <div style={{ fontSize: 9, fontFamily: "monospace", color: "#7C3AED", letterSpacing: "0.08em" }}>
                  ☽ OUTER ISLANDS RAG ENTITY // ACTIVE
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "1px solid rgba(155,77,202,0.3)",
                color: "#9B4DCA",
                width: 24,
                height: 24,
                cursor: "pointer",
                fontFamily: "monospace",
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              scrollbarWidth: "thin",
              scrollbarColor: "#3A1F5C transparent",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "88%",
                    padding: "8px 11px",
                    fontSize: 11,
                    fontFamily: "monospace",
                    lineHeight: 1.65,
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    ...(msg.role === "user"
                      ? {
                          background: "rgba(124,58,237,0.2)",
                          border: "1px solid rgba(155,77,202,0.4)",
                          borderTop: "2px solid #9B4DCA",
                          color: "#E0AAFF",
                        }
                      : {
                          background: "rgba(10,10,20,0.9)",
                          border: "1px solid rgba(155,77,202,0.2)",
                          borderLeft: "3px solid #7C3AED",
                          color: "#C8B4E8",
                        }),
                  }}
                >
                  {msg.role === "ender" && (
                    <div style={{ fontSize: 9, color: "#7C3AED", marginBottom: 4, letterSpacing: "0.1em" }}>
                      ☽ ENDER ASSISTANT
                    </div>
                  )}
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typewriter in-progress */}
            {isTyping && typingTarget && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <div
                  style={{
                    maxWidth: "88%",
                    padding: "8px 11px",
                    fontSize: 11,
                    fontFamily: "monospace",
                    lineHeight: 1.65,
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    background: "rgba(10,10,20,0.9)",
                    border: "1px solid rgba(155,77,202,0.2)",
                    borderLeft: "3px solid #7C3AED",
                    color: "#C8B4E8",
                  }}
                >
                  <div style={{ fontSize: 9, color: "#7C3AED", marginBottom: 4, letterSpacing: "0.1em" }}>
                    ☽ ENDER ASSISTANT
                  </div>
                  {displayedText}
                  <span style={{ animation: "enderBlink 0.8s infinite", color: "#9B4DCA" }}>▌</span>
                </div>
              </div>
            )}

            {/* Teleporting indicator */}
            {isTyping && !typingTarget && (
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 8px" }}>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 6,
                      height: 6,
                      background: "#7C3AED",
                      animation: `enderParticle 0.8s ease-in-out infinite ${i * 0.2}s`,
                    }}
                  />
                ))}
                <span style={{ fontSize: 9, fontFamily: "monospace", color: "#7C3AED", letterSpacing: "0.1em" }}>
                  TELEPORTING...
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Chips */}
          {messages.length <= 2 && !isTyping && (
            <div
              style={{
                padding: "8px 12px",
                borderTop: "1px solid rgba(155,77,202,0.15)",
                display: "flex",
                flexWrap: "wrap",
                gap: 5,
                flexShrink: 0,
              }}
            >
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSend(s)}
                  style={{
                    fontSize: 9,
                    fontFamily: "monospace",
                    padding: "4px 8px",
                    background: "rgba(124,58,237,0.1)",
                    border: "1px solid rgba(155,77,202,0.3)",
                    color: "#C084FC",
                    cursor: "pointer",
                    letterSpacing: "0.05em",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.background = "rgba(124,58,237,0.25)";
                    (e.target as HTMLButtonElement).style.borderColor = "#9B4DCA";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.background = "rgba(124,58,237,0.1)";
                    (e.target as HTMLButtonElement).style.borderColor = "rgba(155,77,202,0.3)";
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            style={{
              padding: "10px 12px",
              borderTop: "1px solid rgba(155,77,202,0.2)",
              display: "flex",
              gap: 8,
              flexShrink: 0,
              background: "rgba(15,5,25,0.8)",
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask the Ender Assistant..."
              disabled={isTyping}
              style={{
                flex: 1,
                background: "rgba(6,6,10,0.9)",
                border: "1px solid rgba(155,77,202,0.3)",
                borderBottom: "2px solid rgba(0,0,0,0.6)",
                borderRight: "2px solid rgba(0,0,0,0.6)",
                color: "#E0AAFF",
                fontSize: 11,
                fontFamily: "monospace",
                padding: "7px 10px",
                outline: "none",
                opacity: isTyping ? 0.5 : 1,
              }}
            />
            <button
              onClick={() => handleSend()}
              disabled={isTyping || !input.trim()}
              style={{
                background: input.trim() && !isTyping ? "#7C3AED" : "rgba(124,58,237,0.2)",
                border: "1px solid rgba(155,77,202,0.4)",
                borderTop: "1px solid rgba(224,170,255,0.2)",
                borderBottom: "2px solid rgba(0,0,0,0.6)",
                borderRight: "2px solid rgba(0,0,0,0.6)",
                color: "#E0AAFF",
                fontSize: 11,
                fontFamily: "monospace",
                padding: "7px 12px",
                cursor: input.trim() && !isTyping ? "pointer" : "not-allowed",
                fontWeight: 700,
                transition: "background 0.15s",
              }}
            >
              ⬥ SEND
            </button>
          </div>
        </div>
      )}
    </>
  );
}

