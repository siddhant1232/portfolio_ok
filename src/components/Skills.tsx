"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolio";

// ==========================================
// PIXEL-ART MINECRAFT ITEM SVG GENERATORS
// ==========================================
function PixelIcon({ type, color }: { type: string; color: string }) {
  switch (type) {
    case "sword":
      return (
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="pixel-art">
          {/* Blade */}
          <rect x="9" y="1" width="2" height="2" fill={color} />
          <rect x="11" y="2" width="2" height="2" fill={color} />
          <rect x="13" y="1" width="2" height="2" fill="#FFFFFF" />
          <rect x="7" y="3" width="2" height="2" fill={color} />
          <rect x="9" y="4" width="2" height="2" fill={color} />
          <rect x="5" y="5" width="2" height="2" fill={color} />
          <rect x="7" y="6" width="2" height="2" fill={color} />
          {/* Crossguard */}
          <rect x="4" y="8" width="2" height="2" fill="#FFAA00" />
          <rect x="6" y="8" width="2" height="2" fill="#FFAA00" />
          <rect x="2" y="10" width="2" height="2" fill="#FFAA00" />
          {/* Handle */}
          <rect x="2" y="11" width="2" height="2" fill="#5D3A1A" />
          <rect x="1" y="12" width="2" height="2" fill="#5D3A1A" />
          {/* Pommel */}
          <rect x="0" y="13" width="2" height="2" fill="#FFAA00" />
        </svg>
      );
    case "redstone":
      return (
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="pixel-art">
          <rect x="7" y="7" width="2" height="2" fill="#FF2200" />
          <rect x="5" y="6" width="2" height="2" fill="#D41100" />
          <rect x="9" y="6" width="2" height="2" fill="#FF5533" />
          <rect x="6" y="8" width="4" height="2" fill="#D41100" />
          <rect x="7" y="5" width="2" height="2" fill="#FF8866" />
          <rect x="4" y="9" width="2" height="2" fill="#990000" />
          <rect x="10" y="9" width="2" height="2" fill="#990000" />
          <rect x="7" y="10" width="2" height="2" fill="#FF2200" />
        </svg>
      );
    case "pickaxe":
      return (
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="pixel-art">
          {/* Head */}
          <rect x="6" y="2" width="2" height="2" fill={color} />
          <rect x="8" y="2" width="2" height="2" fill={color} />
          <rect x="10" y="2" width="2" height="2" fill={color} />
          <rect x="12" y="3" width="2" height="2" fill={color} />
          <rect x="4" y="3" width="2" height="2" fill={color} />
          <rect x="2" y="5" width="2" height="2" fill={color} />
          <rect x="13" y="5" width="2" height="2" fill={color} />
          {/* Handle */}
          <rect x="7" y="5" width="2" height="2" fill="#5D3A1A" />
          <rect x="6" y="7" width="2" height="2" fill="#5D3A1A" />
          <rect x="5" y="9" width="2" height="2" fill="#5D3A1A" />
          <rect x="4" y="11" width="2" height="2" fill="#5D3A1A" />
          <rect x="3" y="13" width="2" height="2" fill="#5D3A1A" />
        </svg>
      );
    case "apple":
      return (
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="pixel-art">
          {/* Stem */}
          <rect x="8" y="2" width="2" height="2" fill="#5D3A1A" />
          <rect x="9" y="1" width="2" height="1" fill="#44AA22" />
          {/* Body */}
          <rect x="5" y="4" width="6" height="8" fill={color} />
          <rect x="4" y="5" width="8" height="6" fill={color} />
          <rect x="6" y="5" width="2" height="2" fill="#FFFFFF" opacity="0.8" />
          <rect x="6" y="12" width="4" height="1" fill="#AA7700" />
        </svg>
      );
    case "book":
      return (
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="pixel-art">
          <rect x="3" y="3" width="10" height="10" fill="#7A2211" />
          <rect x="4" y="4" width="8" height="8" fill="#D9C79A" />
          <rect x="6" y="5" width="1" height="6" fill="#7A2211" />
          <rect x="4" y="3" width="8" height="1" fill="#FFAA00" />
          <rect x="3" y="12" width="10" height="1" fill="#FFAA00" />
          <rect x="8" y="7" width="2" height="2" fill="#55FFFF" />
        </svg>
      );
    case "chest":
      return (
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="pixel-art">
          <rect x="2" y="3" width="12" height="10" fill="#8C5C26" />
          <rect x="3" y="4" width="10" height="2" fill="#B37833" />
          <rect x="2" y="6" width="12" height="1" fill="#3D2810" />
          <rect x="7" y="6" width="2" height="3" fill="#C4C4C4" />
          <rect x="7" y="7" width="2" height="1" fill="#222" />
        </svg>
      );
    case "pearl":
      return (
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="pixel-art">
          <rect x="5" y="4" width="6" height="8" fill="#0C4A4A" />
          <rect x="4" y="5" width="8" height="6" fill="#0C4A4A" />
          <rect x="6" y="6" width="4" height="4" fill="#1DE9B6" />
          <rect x="7" y="7" width="2" height="2" fill="#FFFFFF" />
        </svg>
      );
    case "potion":
      return (
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="pixel-art">
          <rect x="7" y="2" width="2" height="2" fill="#7A5026" />
          <rect x="6" y="4" width="4" height="2" fill="#C4C4C4" />
          <rect x="5" y="6" width="6" height="6" fill={color} />
          <rect x="4" y="8" width="8" height="3" fill={color} />
          <rect x="6" y="8" width="2" height="2" fill="#FFFFFF" opacity="0.6" />
        </svg>
      );
    case "shield":
      return (
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="pixel-art">
          <rect x="3" y="2" width="10" height="7" fill="#8C5C26" />
          <rect x="4" y="9" width="8" height="3" fill="#8C5C26" />
          <rect x="5" y="12" width="6" height="2" fill="#8C5C26" />
          <rect x="7" y="14" width="2" height="1" fill="#8C5C26" />
          <rect x="7" y="3" width="2" height="10" fill="#C4C4C4" />
          <rect x="4" y="6" width="8" height="2" fill="#C4C4C4" />
        </svg>
      );
    case "anvil":
      return (
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="pixel-art">
          <rect x="2" y="3" width="12" height="3" fill="#555555" />
          <rect x="5" y="6" width="6" height="4" fill="#3D3D3D" />
          <rect x="4" y="10" width="8" height="1" fill="#555555" />
          <rect x="3" y="11" width="10" height="2" fill="#2E2E2E" />
        </svg>
      );
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="pixel-art">
          <rect x="3" y="3" width="10" height="10" fill={color} />
          <rect x="4" y="4" width="8" height="8" fill="#1C1E1C" />
          <rect x="6" y="6" width="4" height="4" fill={color} />
        </svg>
      );
  }
}

// Map skill names to Minecraft lore, item type, enchantments, and stack counts
interface SkillMeta {
  name: string;
  focus: string;
  category: string;
  itemType: string;
  color: string;
  stack: number;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  rarityColor: string;
  enchantments: string[];
  lore: string;
}

const SKILL_METAS: Record<string, SkillMeta> = {
  "TypeScript": {
    name: "TypeScript",
    focus: "Strict typing, generics & schemas",
    category: "PROGRAMMING LANGUAGES",
    itemType: "sword",
    color: "#57E0E0",
    stack: 64,
    rarity: "Legendary",
    rarityColor: "#FFAA00",
    enchantments: ["Type Safety V", "Strict Generics IV", "Zero Runtime Errors III"],
    lore: "Forged to banish 'undefined is not a function' across client and server.",
  },
  "JavaScript (ES6+)": {
    name: "JavaScript (ES6+)",
    focus: "Modern asynchronous idioms & closures",
    category: "PROGRAMMING LANGUAGES",
    itemType: "sword",
    color: "#FFFF55",
    stack: 64,
    rarity: "Rare",
    rarityColor: "#55FFFF",
    enchantments: ["Async Await IV", "Event Loop Mastery IV"],
    lore: "The ancient blade of the web. Fast, dynamic, and ever-present.",
  },
  "Java": {
    name: "Java",
    focus: "OOP, multithreading & collections",
    category: "PROGRAMMING LANGUAGES",
    itemType: "pickaxe",
    color: "#FF8844",
    stack: 64,
    rarity: "Rare",
    rarityColor: "#55FFFF",
    enchantments: ["Thread Safety IV", "OOP Hierarchy V"],
    lore: "Bedrock language of distributed enterprise computing.",
  },
  "Python": {
    name: "Python",
    focus: "AI tooling, LangGraph & scripting",
    category: "PROGRAMMING LANGUAGES",
    itemType: "apple",
    color: "#55FF55",
    stack: 64,
    rarity: "Epic",
    rarityColor: "#FF55FF",
    enchantments: ["AI Interop V", "Rapid Scripting IV"],
    lore: "Conducts data transformations and AI agent pipelines with zero friction.",
  },
  "SQL": {
    name: "SQL",
    focus: "Relational queries, indexing & schema design",
    category: "PROGRAMMING LANGUAGES",
    itemType: "pickaxe",
    color: "#FFAA00",
    stack: 64,
    rarity: "Rare",
    rarityColor: "#55FFFF",
    enchantments: ["Index Optimization IV", "ACID Guarantee V"],
    lore: "Excavates millions of relational records in single-digit milliseconds.",
  },
  "Next.js": {
    name: "Next.js",
    focus: "App Router, SSR & Server Actions",
    category: "FRONTEND",
    itemType: "pearl",
    color: "#57E0E0",
    stack: 32,
    rarity: "Legendary",
    rarityColor: "#FFAA00",
    enchantments: ["Server Actions V", "Edge Streaming IV", "Turbopack III"],
    lore: "Teleports pre-rendered HTML across global CDN edge nodes instantly.",
  },
  "React.js": {
    name: "React.js",
    focus: "Hooks, state management & reusable design",
    category: "FRONTEND",
    itemType: "shield",
    color: "#55FFFF",
    stack: 64,
    rarity: "Epic",
    rarityColor: "#FF55FF",
    enchantments: ["Hook Mastery V", "Virtual DOM Diffing IV"],
    lore: "Constructs reactive, composable user interfaces that resist state drift.",
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    focus: "Utility-first design systems",
    category: "FRONTEND",
    itemType: "potion",
    color: "#38BDF8",
    stack: 64,
    rarity: "Rare",
    rarityColor: "#55FFFF",
    enchantments: ["Utility Agility V", "Zero CSS Bloat IV"],
    lore: "Imbues web components with pixel-precise visual styling at zero runtime cost.",
  },
  "Node.js": {
    name: "Node.js",
    focus: "Event loop, non-blocking I/O & streams",
    category: "BACKEND",
    itemType: "redstone",
    color: "#55FF55",
    stack: 64,
    rarity: "Legendary",
    rarityColor: "#FFAA00",
    enchantments: ["Non-Blocking I/O V", "Stream Piping IV"],
    lore: "The central redstone engine driving asynchronous backend microservices.",
  },
  "Express.js": {
    name: "Express.js",
    focus: "Middleware, routing & REST APIs",
    category: "BACKEND",
    itemType: "potion",
    color: "#C4C4C4",
    stack: 64,
    rarity: "Rare",
    rarityColor: "#55FFFF",
    enchantments: ["Middleware Chaining V", "Sub-10ms Routing IV"],
    lore: "A lightweight conduit channeling HTTP requests through security pipelines.",
  },
  "REST APIs": {
    name: "REST APIs",
    focus: "Resource design, status codes & specs",
    category: "BACKEND",
    itemType: "book",
    color: "#FFAA00",
    stack: 64,
    rarity: "Rare",
    rarityColor: "#55FFFF",
    enchantments: ["Idempotency V", "Semantic Statuses IV"],
    lore: "Clean contractual interfaces connecting distributed services seamlessly.",
  },
  "Microservices": {
    name: "Microservices",
    focus: "Service segregation & decoupled gateways",
    category: "BACKEND",
    itemType: "redstone",
    color: "#FF5533",
    stack: 16,
    rarity: "Epic",
    rarityColor: "#FF55FF",
    enchantments: ["Fault Isolation V", "Independent Scaling IV"],
    lore: "Decouples monolithic architectures into resilient, specialized service nodes.",
  },
  "JWT Authentication": {
    name: "JWT Authentication",
    focus: "Token signing, verification & RBAC",
    category: "BACKEND",
    itemType: "shield",
    color: "#FFAA00",
    stack: 64,
    rarity: "Rare",
    rarityColor: "#55FFFF",
    enchantments: ["Stateless Auth V", "Tamper Proofing V"],
    lore: "Guards endpoints with cryptographically signed role-based passports.",
  },
  "PostgreSQL": {
    name: "PostgreSQL",
    focus: "Relational modeling, indexing & ACID",
    category: "DATABASES",
    itemType: "chest",
    color: "#336791",
    stack: 64,
    rarity: "Legendary",
    rarityColor: "#FFAA00",
    enchantments: ["ACID Compliance V", "B-Tree Indexing V"],
    lore: "The unbreakable obsidian vault of relational data integrity.",
  },
  "Redis": {
    name: "Redis",
    focus: "Distributed caching, rate limiting & sorted sets",
    category: "DATABASES",
    itemType: "redstone",
    color: "#FF2200",
    stack: 64,
    rarity: "Legendary",
    rarityColor: "#FFAA00",
    enchantments: ["In-Memory Speed V", "Sub-Millisecond Read V"],
    lore: "Blazing redstone memory clock shielding underlying databases from overload.",
  },
  "MongoDB": {
    name: "MongoDB",
    focus: "Document storage & flexible schemas",
    category: "DATABASES",
    itemType: "chest",
    color: "#47A248",
    stack: 64,
    rarity: "Rare",
    rarityColor: "#55FFFF",
    enchantments: ["Dynamic Schema IV", "Aggregation Pipelines IV"],
    lore: "Stores deeply nested JSON document structures with flexible schemas.",
  },
  "Docker": {
    name: "Docker",
    focus: "Multi-stage builds & container orchestration",
    category: "DEVOPS AND CLOUD",
    itemType: "anvil",
    color: "#2496ED",
    stack: 32,
    rarity: "Legendary",
    rarityColor: "#FFAA00",
    enchantments: ["Container Isolation V", "Multi-Stage Build IV"],
    lore: "Standardized shipping containers ensuring identical execution anywhere.",
  },
  "AWS EC2": {
    name: "AWS EC2",
    focus: "Compute instances, security groups & SSH",
    category: "DEVOPS AND CLOUD",
    itemType: "anvil",
    color: "#FF9900",
    stack: 16,
    rarity: "Epic",
    rarityColor: "#FF55FF",
    enchantments: ["Cloud Compute V", "Security Isolation IV"],
    lore: "Elastic virtual instances provisioned to handle intensive cloud workloads.",
  },
  "AWS S3": {
    name: "AWS S3",
    focus: "Object storage & asset distribution",
    category: "DEVOPS AND CLOUD",
    itemType: "chest",
    color: "#569A31",
    stack: 64,
    rarity: "Rare",
    rarityColor: "#55FFFF",
    enchantments: ["99.999999999% Durability V"],
    lore: "Infinite cloud bucket storing user assets, images, and public downloads.",
  },
  "Git": {
    name: "Git",
    focus: "Version control, branching & PR workflows",
    category: "DEVOPS AND CLOUD",
    itemType: "book",
    color: "#F05032",
    stack: 64,
    rarity: "Legendary",
    rarityColor: "#FFAA00",
    enchantments: ["Time Travel V", "Conflict Resolution IV"],
    lore: "Records every line of code history and synchronizes team collaboration.",
  },
  "Google Gemini API": {
    name: "Google Gemini API",
    focus: "Multimodal prompting & streaming",
    category: "AI AND LLM",
    itemType: "apple",
    color: "#D47CFF",
    stack: 16,
    rarity: "Legendary",
    rarityColor: "#FFAA00",
    enchantments: ["Multimodal Reasoning V", "Token Streaming IV"],
    lore: "High-intelligence LLM reasoning engine parsing text, code, and vision.",
  },
  "Retrieval-Augmented Generation (RAG)": {
    name: "Retrieval-Augmented Generation (RAG)",
    focus: "Chunking, vector search & grounding",
    category: "AI AND LLM",
    itemType: "book",
    color: "#57E0E0",
    stack: 32,
    rarity: "Epic",
    rarityColor: "#FF55FF",
    enchantments: ["Vector Similarity V", "Hallucination Defense V"],
    lore: "Grounds AI responses in deterministic document knowledge vectors.",
  },
  "Prompt Engineering": {
    name: "Prompt Engineering",
    focus: "Few-shot schemas & deterministic outputs",
    category: "AI AND LLM",
    itemType: "potion",
    color: "#FFAA00",
    stack: 64,
    rarity: "Rare",
    rarityColor: "#55FFFF",
    enchantments: ["Few-Shot Precision IV", "JSON Schema Forcing V"],
    lore: "Directs neural nets into generating strictly typed, predictable JSON outputs.",
  },
  "System Design": {
    name: "System Design",
    focus: "Architectural blueprints & trade-off analysis",
    category: "ENGINEERING CONCEPTS",
    itemType: "book",
    color: "#FFAA00",
    stack: 16,
    rarity: "Legendary",
    rarityColor: "#FFAA00",
    enchantments: ["High Availability V", "Scalability Planning V"],
    lore: "The master architectural blueprint balancing latency, cost, and reliability.",
  },
  "Distributed Systems": {
    name: "Distributed Systems",
    focus: "Consistency, latency & fault tolerance",
    category: "ENGINEERING CONCEPTS",
    itemType: "redstone",
    color: "#FF2200",
    stack: 16,
    rarity: "Legendary",
    rarityColor: "#FFAA00",
    enchantments: ["CAP Theorem Mastery V", "Consensus Protocol IV"],
    lore: "Coordinates separate machines across physical networks without split-brain.",
  },
  "Debugging": {
    name: "Debugging",
    focus: "Chrome DevTools, profilers & root cause analysis",
    category: "ENGINEERING CONCEPTS",
    itemType: "potion",
    color: "#55FF55",
    stack: 64,
    rarity: "Epic",
    rarityColor: "#FF55FF",
    enchantments: ["Root Cause Discovery V", "Call Stack Tracing V"],
    lore: "Tracks down elusive race conditions and memory leaks with surgical accuracy.",
  },
  "Performance Optimization": {
    name: "Performance Optimization",
    focus: "Asset compression & caching strategies",
    category: "ENGINEERING CONCEPTS",
    itemType: "pearl",
    color: "#57E0E0",
    stack: 32,
    rarity: "Epic",
    rarityColor: "#FF55FF",
    enchantments: ["Sub-100ms TTFB V", "Bundle Shrinking IV"],
    lore: "Trims unnecessary megabytes and eliminates rendering bottlenecks.",
  },
};

// ==========================================
// CRAFTING RECIPES PRESETS
// ==========================================
interface Recipe {
  id: string;
  name: string;
  category: string;
  grid: (string | null)[]; // 9 slots
  result: {
    name: string;
    type: string;
    color: string;
    lore: string;
    level: number;
    stack: string;
  };
}

const RECIPES: Recipe[] = [
  {
    id: "fullstack",
    name: "Full-Stack Web Platform",
    category: "Web Engineering",
    grid: [
      "React.js", "Next.js", "TypeScript",
      "Tailwind CSS", "Node.js", "PostgreSQL",
      null, "JWT Authentication", null
    ],
    result: {
      name: "Production Web Platform",
      type: "shield",
      color: "#57E0E0",
      lore: "Type-safe, SSR-rendered e-commerce & SaaS platform deployed with zero downtime.",
      level: 27,
      stack: "x1",
    },
  },
  {
    id: "ratelimiter",
    name: "Distributed Rate Limiter",
    category: "Microservices",
    grid: [
      "Node.js", "Express.js", "Redis",
      "Docker", "System Design", "Distributed Systems",
      null, null, null
    ],
    result: {
      name: "High-Throughput Token Bucket",
      type: "redstone",
      color: "#FF2200",
      lore: "Processes 10,000+ req/sec across distributed Docker nodes with sub-2ms latency.",
      level: 27,
      stack: "x1",
    },
  },
  {
    id: "ai-agents",
    name: "Autonomous AI Agent System",
    category: "Applied AI",
    grid: [
      "Google Gemini API", "Python", "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering", null, null,
      null, null, null
    ],
    result: {
      name: "Multi-Agent Research Engine",
      type: "apple",
      color: "#D47CFF",
      lore: "Self-healing LLM agent pipeline that conducts web research and writes cited technical briefs.",
      level: 27,
      stack: "x1",
    },
  },
  {
    id: "cloud-infra",
    name: "Resilient Cloud Pipeline",
    category: "DevOps & Data",
    grid: [
      "Docker", "AWS EC2", "AWS S3",
      "PostgreSQL", "Redis", "Git",
      null, null, null
    ],
    result: {
      name: "Cloud Infrastructure Cluster",
      type: "anvil",
      color: "#FFAA00",
      lore: "Containerized deployment with distributed caching and multi-tier persistent storage.",
      level: 27,
      stack: "x1",
    },
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("ALL");
  const [hoveredSkill, setHoveredSkill] = useState<SkillMeta | null>(null);
  const [activeRecipe, setActiveRecipe] = useState<Recipe>(RECIPES[0]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Play synthetic Minecraft-like click sound using Web Audio API
  const playClickSound = (freq = 400, dur = 0.04) => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + dur);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + dur);
    } catch {
      // AudioContext muted/unsupported
    }
  };

  const handleSelectRecipe = (rec: Recipe) => {
    setActiveRecipe(rec);
    playClickSound(580, 0.08);
  };

  // Filter inventory
  const allSkillsList = Object.values(SKILL_METAS);
  const filteredSkills =
    activeTab === "ALL"
      ? allSkillsList
      : allSkillsList.filter((s) => s.category.toUpperCase().includes(activeTab.toUpperCase()));

  return (
    <section id="skills" className="py-24 relative overflow-hidden" style={{ borderTop: "1px solid rgba(93,138,60,0.2)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Coordinate Label */}
        <div className="mb-3 font-mono text-[11px] text-[#5D8A3C] tracking-wider">
          ◈ SECTOR: WORKBENCH_AND_INVENTORY // X:0 Y:64 Z:0 // CRAFTING SYSTEM v1.21
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 text-left">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-[#A0D060] mb-4"
              style={{
                background: "rgba(93,138,60,0.12)",
                border: "1px solid rgba(93,138,60,0.35)",
                borderTop: "1px solid rgba(160,208,96,0.2)",
                borderLeft: "1px solid rgba(160,208,96,0.2)",
                borderBottom: "1px solid rgba(0,0,0,0.5)",
                borderRight: "1px solid rgba(0,0,0,0.5)",
              }}
            >
              <span>⚒</span>
              <span>CRAFTING TABLE &amp; INVENTORY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F1F0EB] tracking-tight">
              Skills forged in production.
            </h2>
            <p className="text-sm sm:text-base text-[#8A9080] mt-2 font-mono">
              Hover over items to inspect enchantments, stack sizes, and architectural lore. Click recipes to craft full systems.
            </p>
          </div>

          {/* Minecraft HUD Bar: Hearts, Food, Level, Sound */}
          <div
            className="p-3 select-none self-start lg:self-auto space-y-2"
            style={{
              background: "rgba(20,22,20,0.95)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderTop: "1px solid rgba(255,255,255,0.15)",
              borderBottom: "2px solid rgba(0,0,0,0.7)",
              borderRight: "2px solid rgba(0,0,0,0.7)",
            }}
          >
            {/* Hearts & Drumsticks */}
            <div className="flex items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-0.5 text-red-500" title="10/10 Hearts">
                {"❤❤❤❤❤❤❤❤❤❤".split("").map((h, i) => (
                  <span key={i} className="text-xs">{h}</span>
                ))}
              </div>
              <div className="flex items-center gap-0.5 text-amber-600" title="10/10 Hunger">
                {"🍗🍗🍗🍗🍗🍗🍗🍗🍗🍗".split("").map((f, i) => (
                  <span key={i} className="text-[10px]">{f}</span>
                ))}
              </div>
            </div>

            {/* Level & XP Bar */}
            <div className="flex items-center gap-3">
              <div
                className="w-7 h-7 flex items-center justify-center font-mono font-bold text-xs"
                style={{
                  background: "#5D8A3C",
                  color: "#0D0F0D",
                  border: "1px solid rgba(160,208,96,0.6)",
                  boxShadow: "0 0 8px rgba(93,138,60,0.6)",
                }}
                title="Player Level: Class of 2027"
              >
                27
              </div>
              <div className="flex-1 h-2 bg-[#1C1E1C] overflow-hidden border border-[#3C3C3C]">
                <div
                  className="h-full bg-gradient-to-r from-[#5D8A3C] to-[#A0D060]"
                  style={{ width: "88%" }}
                />
              </div>
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="text-[10px] font-mono px-2 py-0.5 bg-white/5 hover:bg-white/10 border border-white/10 text-[#C8D4B8]"
                title="Toggle Web Audio SFX"
              >
                {soundEnabled ? "🔊 SFX ON" : "🔇 MUTED"}
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 1: THE INTERACTIVE 3X3 CRAFTING WORKBENCH           */}
        {/* ============================================================ */}
        <div
          className="mb-12 p-6 sm:p-8"
          style={{
            background: "rgba(22,25,22,0.98)",
            border: "1px solid rgba(93,138,60,0.35)",
            borderTop: "3px solid #A0D060",
            borderLeft: "1px solid rgba(160,208,96,0.2)",
            borderBottom: "3px solid rgba(0,0,0,0.8)",
            borderRight: "3px solid rgba(0,0,0,0.8)",
          }}
        >
          {/* Workbench Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-xl">⚒</span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#F1F0EB] tracking-tight">
                  Crafting Table (3×3 Grid)
                </h3>
              </div>
              <p className="text-xs font-mono text-[#8A9080] mt-0.5">
                Combine technical competencies to craft production-grade software architectures.
              </p>
            </div>

            {/* Recipe Book Selection Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-mono text-[#5D8A3C] uppercase tracking-wider mr-1">
                RECIPES:
              </span>
              {RECIPES.map((rec) => {
                const isSelected = activeRecipe.id === rec.id;
                return (
                  <button
                    key={rec.id}
                    onClick={() => handleSelectRecipe(rec)}
                    className="px-2.5 py-1 text-[11px] font-mono transition-all"
                    style={{
                      background: isSelected ? "rgba(160,208,96,0.25)" : "rgba(13,15,13,0.8)",
                      border: isSelected ? "1px solid #A0D060" : "1px solid rgba(255,255,255,0.08)",
                      color: isSelected ? "#A0D060" : "#8A9080",
                    }}
                  >
                    {rec.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Workbench Center Grid: 3x3 Inputs -> Arrow -> Output Slot */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-4">

            {/* 3x3 Crafting Grid */}
            <div className="flex flex-col items-center">
              <div className="text-[10px] font-mono text-[#5D8A3C] uppercase tracking-widest mb-2">
                ▸ INGREDIENT SLOTS (3×3)
              </div>
              <div
                className="grid grid-cols-3 gap-2 p-3"
                style={{
                  background: "#161816",
                  border: "2px solid #373737",
                  borderBottomColor: "#555",
                  borderRightColor: "#555",
                  boxShadow: "inset 0 0 10px rgba(0,0,0,0.8)",
                }}
              >
                {activeRecipe.grid.map((skillName, idx) => {
                  const meta = skillName ? SKILL_METAS[skillName] : null;
                  return (
                    <div
                      key={idx}
                      className="w-14 h-14 sm:w-16 sm:h-16 flex flex-col items-center justify-center relative cursor-pointer select-none group"
                      style={{
                        background: meta ? "rgba(35,40,35,0.9)" : "rgba(18,20,18,0.9)",
                        border: "2px solid #2B2D2B",
                        borderTopColor: "#1A1C1A",
                        borderLeftColor: "#1A1C1A",
                        borderBottomColor: "#3F423F",
                        borderRightColor: "#3F423F",
                        boxShadow: "inset 0 0 6px rgba(0,0,0,0.6)",
                      }}
                      onMouseEnter={() => {
                        if (meta) {
                          setHoveredSkill(meta);
                          playClickSound(350, 0.02);
                        }
                      }}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {meta ? (
                        <>
                          <PixelIcon type={meta.itemType} color={meta.color} />
                          <span className="text-[9px] font-mono text-center text-[#C8D4B8] mt-1 leading-none line-clamp-1 px-1">
                            {meta.name}
                          </span>
                          <span className="absolute bottom-0.5 right-1 text-[8px] font-mono font-bold text-white/70">
                            {meta.stack}
                          </span>
                        </>
                      ) : (
                        <span className="text-xs font-mono text-white/10">✕</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Glowing Crafting Arrow */}
            <div className="flex flex-col items-center justify-center px-4">
              <div
                className="w-12 h-12 flex items-center justify-center text-2xl font-bold transition-all"
                style={{
                  color: "#A0D060",
                  filter: "drop-shadow(0 0 8px rgba(160,208,96,0.6))",
                }}
              >
                ➜
              </div>
              <span className="text-[9px] font-mono text-[#5D8A3C] mt-1">CRAFTED</span>
            </div>

            {/* Output Slot (2x2 Sized Big Slot) */}
            <div className="flex flex-col items-center">
              <div className="text-[10px] font-mono text-[#FFAA00] uppercase tracking-widest mb-2">
                ★ RESULTING ARCHITECTURE
              </div>
              <div
                className="w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center relative select-none p-2 text-center"
                style={{
                  background: "radial-gradient(circle, rgba(160,208,96,0.12) 0%, rgba(20,22,20,0.95) 100%)",
                  border: "3px solid #FFAA00",
                  borderTopColor: "#FFD700",
                  borderLeftColor: "#FFD700",
                  borderBottomColor: "#996600",
                  borderRightColor: "#996600",
                  boxShadow: "0 0 15px rgba(255,170,0,0.25), inset 0 0 10px rgba(0,0,0,0.8)",
                }}
              >
                <div className="scale-125 mb-1">
                  <PixelIcon type={activeRecipe.result.type} color={activeRecipe.result.color} />
                </div>
                <span className="text-[11px] font-mono font-bold text-[#F1F0EB] leading-tight">
                  {activeRecipe.result.name}
                </span>
                <span className="absolute bottom-1 right-1.5 text-[9px] font-mono font-bold text-[#FFAA00]">
                  {activeRecipe.result.stack}
                </span>
              </div>
            </div>

            {/* Output Lore Description Card */}
            <div
              className="lg:max-w-xs p-4 space-y-2 text-left"
              style={{
                background: "rgba(14,16,14,0.9)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderLeft: "3px solid #A0D060",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#A0D060] font-bold uppercase">
                  {activeRecipe.name}
                </span>
                <span className="text-[9px] font-mono text-[#FFAA00]">
                  REQ LVL {activeRecipe.result.level}
                </span>
              </div>
              <p className="text-xs text-[#C8D4B8] leading-relaxed">
                &ldquo;{activeRecipe.result.lore}&rdquo;
              </p>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#6E6E6E]">
                <span>Status: Production Verified</span>
                <span className="text-[#A0D060]">✔ READY</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 2: PLAYER INVENTORY WITH MINECRAFT TOOLTIPS          */}
        {/* ============================================================ */}
        <div className="text-left">
          {/* Category Tabs (Minecraft Creative Inventory Style) */}
          <div className="flex flex-wrap items-center gap-1.5 mb-6">
            <span className="text-[11px] font-mono text-[#5D8A3C] uppercase tracking-wider mr-2">
              🎒 INVENTORY TABS:
            </span>
            {[
              { id: "ALL", label: "All Items" },
              { id: "PROGRAMMING", label: "⚔ Languages" },
              { id: "FRONTEND", label: "🖥 Frontend" },
              { id: "BACKEND", label: "⚙ Backend" },
              { id: "DATABASES", label: "🗄 Databases" },
              { id: "DEVOPS", label: "☁ Cloud & DevOps" },
              { id: "AI", label: "🧪 Applied AI" },
              { id: "CONCEPTS", label: "📐 Architecture" },
            ].map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    playClickSound(420, 0.03);
                  }}
                  className="px-3 py-1.5 text-xs font-mono transition-all"
                  style={{
                    background: isSelected ? "rgba(93,138,60,0.3)" : "rgba(20,22,20,0.85)",
                    border: isSelected ? "1px solid #A0D060" : "1px solid rgba(255,255,255,0.08)",
                    borderTop: isSelected ? "2px solid #A0D060" : "1px solid rgba(255,255,255,0.1)",
                    borderLeft: isSelected ? "2px solid #A0D060" : "1px solid rgba(255,255,255,0.08)",
                    borderBottom: "2px solid rgba(0,0,0,0.6)",
                    borderRight: "2px solid rgba(0,0,0,0.6)",
                    color: isSelected ? "#A0D060" : "#8A9080",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Grid Layout: Inventory Chest on Left, Authentic Tooltip Inspector on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Inventory Slots (9-column Chest Layout) */}
            <div
              className="lg:col-span-8 p-4 sm:p-6"
              style={{
                background: "rgba(20,22,20,0.95)",
                border: "2px solid #373737",
                borderTopColor: "#555",
                borderLeftColor: "#555",
                borderBottomColor: "#1A1A1A",
                borderRightColor: "#1A1A1A",
              }}
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5 font-mono text-xs text-[#8A9080]">
                <span>CHEST INVENTORY // 9×3 SLOTS</span>
                <span>{filteredSkills.length} SKILLS LOADED</span>
              </div>

              {/* 9-Column Slot Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-2">
                {filteredSkills.map((skill) => {
                  const isHovered = hoveredSkill?.name === skill.name;
                  return (
                    <div
                      key={skill.name}
                      className="aspect-square flex flex-col items-center justify-center relative cursor-pointer select-none transition-all group"
                      style={{
                        background: isHovered ? "rgba(93,138,60,0.25)" : "rgba(14,16,14,0.9)",
                        border: isHovered ? "2px solid #A0D060" : "2px solid #2B2D2B",
                        borderTopColor: isHovered ? "#A0D060" : "#1A1C1A",
                        borderLeftColor: isHovered ? "#A0D060" : "#1A1C1A",
                        borderBottomColor: isHovered ? "#5D8A3C" : "#3F423F",
                        borderRightColor: isHovered ? "#5D8A3C" : "#3F423F",
                        boxShadow: isHovered
                          ? "0 0 10px rgba(160,208,96,0.3), inset 0 0 6px rgba(0,0,0,0.4)"
                          : "inset 0 0 4px rgba(0,0,0,0.6)",
                      }}
                      onMouseEnter={() => {
                        setHoveredSkill(skill);
                        playClickSound(300 + Math.random() * 150, 0.02);
                      }}
                      onClick={() => {
                        setHoveredSkill(skill);
                        playClickSound(500, 0.04);
                      }}
                    >
                      <PixelIcon type={skill.itemType} color={skill.color} />
                      <span className="text-[8px] font-mono text-center text-[#C8D4B8] leading-none line-clamp-1 px-0.5 mt-1">
                        {skill.name}
                      </span>
                      <span className="absolute bottom-0.5 right-1 text-[8px] font-mono font-bold text-white/70">
                        {skill.stack}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Hotbar (9 Core Weapons at Bottom) */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="text-[10px] font-mono text-[#5D8A3C] uppercase tracking-wider mb-2">
                  ▸ PLAYER QUICK HOTBAR (KEYS 1–9)
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-9 gap-2">
                  {[
                    "TypeScript",
                    "Next.js",
                    "React.js",
                    "Node.js",
                    "PostgreSQL",
                    "Redis",
                    "Docker",
                    "Google Gemini API",
                    "System Design",
                  ].map((coreName, idx) => {
                    const skill = SKILL_METAS[coreName];
                    const isHovered = hoveredSkill?.name === coreName;
                    return (
                      <div
                        key={coreName}
                        className="aspect-square flex flex-col items-center justify-center relative cursor-pointer select-none transition-all"
                        style={{
                          background: isHovered ? "rgba(160,208,96,0.25)" : "rgba(24,28,24,0.9)",
                          border: isHovered ? "2px solid #FFAA00" : "2px solid #4A4D4A",
                          borderTopColor: isHovered ? "#FFD700" : "#2B2D2B",
                          borderLeftColor: isHovered ? "#FFD700" : "#2B2D2B",
                          borderBottomColor: isHovered ? "#996600" : "#6E726E",
                          borderRightColor: isHovered ? "#996600" : "#6E726E",
                        }}
                        onMouseEnter={() => {
                          if (skill) {
                            setHoveredSkill(skill);
                            playClickSound(400, 0.02);
                          }
                        }}
                      >
                        {skill && <PixelIcon type={skill.itemType} color={skill.color} />}
                        <span className="text-[8px] font-mono text-center text-[#F1F0EB] leading-none line-clamp-1 px-0.5 mt-0.5">
                          {coreName}
                        </span>
                        <span className="absolute top-0.5 left-1 text-[7px] font-mono text-[#A0D060]">
                          {idx + 1}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Minecraft Item Tooltip Box */}
            <div className="lg:col-span-4">
              <div className="text-[11px] font-mono text-[#5D8A3C] uppercase tracking-wider mb-2">
                ▸ ITEM INSPECTION TOOLTIP
              </div>

              {hoveredSkill ? (
                <div
                  className="p-5 relative select-none animate-in fade-in duration-150"
                  style={{
                    background: "#100010",
                    border: "2px solid #28007F",
                    outline: "2px solid #5000FF",
                    boxShadow: "0 0 20px rgba(80,0,255,0.35)",
                  }}
                >
                  {/* Item Title in Minecraft Colors */}
                  <div className="flex items-center gap-2 mb-1">
                    <PixelIcon type={hoveredSkill.itemType} color={hoveredSkill.color} />
                    <h4
                      className="text-base sm:text-lg font-mono font-bold tracking-wide"
                      style={{ color: hoveredSkill.rarityColor }}
                    >
                      {hoveredSkill.name}
                    </h4>
                  </div>

                  {/* Rarity & Category */}
                  <div className="text-xs font-mono text-[#AAAAAA] mb-3">
                    {hoveredSkill.rarity} · {hoveredSkill.category}
                  </div>

                  {/* Enchantments List in Gray */}
                  <div className="space-y-1 mb-3 font-mono text-xs text-[#AAAAAA]">
                    {hoveredSkill.enchantments.map((ench, eIdx) => (
                      <div key={eIdx} className="flex items-center gap-1.5 text-[#55FFFF]">
                        <span>✧</span>
                        <span>{ench}</span>
                      </div>
                    ))}
                  </div>

                  {/* Lore Quote in Italic Dark Purple */}
                  <div
                    className="p-2.5 my-3 font-mono text-xs italic leading-relaxed"
                    style={{
                      background: "rgba(170,0,170,0.08)",
                      borderLeft: "2px solid #AA00AA",
                      color: "#D480FF",
                    }}
                  >
                    &ldquo;{hoveredSkill.lore}&rdquo;
                  </div>

                  {/* Focus Spec */}
                  <div className="font-mono text-xs text-[#8A9080] mb-3">
                    <span className="text-[#A0D060]">Architectural Focus: </span>
                    {hoveredSkill.focus}
                  </div>

                  {/* Production Durability Bar */}
                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[#AAAAAA]">Durability: Production Grade</span>
                      <span className="text-[#55FF55]">100% Tested</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#2A2A2A] overflow-hidden">
                      <div className="h-full bg-[#55FF55]" style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="p-8 text-center font-mono text-xs text-[#6E6E6E] flex flex-col items-center justify-center min-h-[260px]"
                  style={{
                    background: "rgba(16,18,16,0.8)",
                    border: "1px dashed rgba(255,255,255,0.1)",
                  }}
                >
                  <span className="text-3xl mb-2">🎒</span>
                  <p className="text-[#8A9080] font-bold">No Item Selected</p>
                  <p className="text-[11px] text-[#5A5450] mt-1 max-w-xs">
                    Hover over or click any skill slot in the chest or workbench to reveal its enchantments, rarity, and engineering lore.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
