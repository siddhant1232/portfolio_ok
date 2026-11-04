"use client";

import React, { useState } from "react";
import { Sparkles, Terminal, Code2, Layout, Server, Database, Cloud, BrainCircuit, Compass, Search } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "PROGRAMMING LANGUAGES":
        return <Code2 className="w-4 h-4 text-[#B8F36B]" />;
      case "FRONTEND":
        return <Layout className="w-4 h-4 text-cyan-400" />;
      case "BACKEND":
        return <Server className="w-4 h-4 text-emerald-400" />;
      case "DATABASES":
        return <Database className="w-4 h-4 text-amber-400" />;
      case "DEVOPS AND CLOUD":
        return <Cloud className="w-4 h-4 text-blue-400" />;
      case "AI AND LLM":
        return <BrainCircuit className="w-4 h-4 text-purple-400" />;
      case "ENGINEERING CONCEPTS":
        return <Compass className="w-4 h-4 text-rose-400" />;
      default:
        return <Terminal className="w-4 h-4 text-[#B8F36B]" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (selectedCategory !== "ALL" && cat.category !== selectedCategory) {
      return false;
    }
    if (!searchTerm) return true;

    const matchesCat = cat.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkill = cat.skills.some(
      (s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.focus?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchesCat || matchesSkill;
  });

  return (
    <section id="skills" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-[#B8F36B] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F0EB] tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-sm sm:text-base text-[#9496A1] mt-2">
            A comprehensive overview of programming languages, frameworks, cloud infrastructure, and architectural concepts used in production and research environments.
          </p>

          {/* Search and Category Filter */}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#616573] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search skills (e.g., Redis, Next.js, LangGraph, Docker)..."
                className="w-full bg-[#11141C] text-[#F1F0EB] text-xs font-mono pl-9 pr-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#B8F36B]/50 placeholder:text-[#616573]"
              />
            </div>

            {/* Quick Category Reset */}
            {selectedCategory !== "ALL" && (
              <button
                onClick={() => setSelectedCategory("ALL")}
                className="px-3 py-2 text-xs font-mono rounded-lg bg-white/5 text-[#9496A1] hover:text-[#F1F0EB] border border-white/10 shrink-0"
              >
                Clear Filter
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {["ALL", ...SKILL_CATEGORIES.map((c) => c.category)].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
                  selectedCategory === cat
                    ? "bg-[#B8F36B] text-[#0B0D12] font-semibold"
                    : "bg-[#11141C] text-[#9496A1] hover:text-[#F1F0EB] border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-[#0E1118]/80 border border-white/10 hover:border-[#B8F36B]/30 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#B8F36B]/40 transition-colors">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold text-[#F1F0EB] tracking-wider">
                      {group.category}
                    </h3>
                    <p className="text-[10px] text-[#9496A1] mt-0.5 line-clamp-1">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="mt-4 space-y-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold text-[#F1F0EB]">
                        <span>{skill.name}</span>
                      </div>
                      {skill.focus && (
                        <p className="text-[11px] font-mono text-[#9496A1] mt-0.5">
                          {skill.focus}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#616573]">
                <span>{group.skills.length} Competencies</span>
                <span className="text-[#B8F36B]">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
