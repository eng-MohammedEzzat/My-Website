"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cvData } from "@/data/cvData";

export default function SkillsSection() {
  const { skills } = cvData;
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allTechSkills = [
    ...skills.programming.map((s) => ({ ...s, group: "Languages" })),
    ...skills.frontend.map((s) => ({ ...s, group: "Front-End" })),
    ...skills.backend.map((s) => ({ ...s, group: "Back-End" })),
    ...skills.database.map((s) => ({ ...s, group: "Database" })),
    ...skills.devops.map((s) => ({ ...s, group: "DevOps & CI/CD" })),
    ...skills.core.map((s) => ({ ...s, group: "Core Engineering" })),
  ];

  const filteredTech = allTechSkills.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "programming") return matchesSearch && item.group === "Languages";
    if (activeTab === "frontend") return matchesSearch && item.group === "Front-End";
    if (activeTab === "backend") return matchesSearch && item.group === "Back-End";
    if (activeTab === "database") return matchesSearch && item.group === "Database";
    if (activeTab === "devops") return matchesSearch && item.group === "DevOps & CI/CD";
    if (activeTab === "core") return matchesSearch && item.group === "Core Engineering";
    return matchesSearch;
  });

  const filteredSoft = skills.soft.filter((s) =>
    s.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="skills" className="py-24 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-6xl font-serif text-slate-900 uppercase mb-6">
            Technical <span className="text-orange-500">Arsenal</span>
          </h2>
          <p className="text-slate-600 font-bold leading-relaxed max-w-xl mx-auto uppercase tracking-widest text-xs">
            Technical stack, algorithmic foundation, and interpersonal skills.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 max-w-5xl mx-auto bg-white p-4 rounded-3xl shadow-sm border border-slate-200">
          {/* Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {["all", "programming", "frontend", "backend", "database", "devops", "core"].map((tab) => {
              const tabLabels = {
                all: "All Skills",
                programming: "Languages",
                frontend: "Front-End",
                backend: "Back-End",
                database: "Database",
                devops: "DevOps",
                core: "Core"
              };
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeTab === tab
                      ? "bg-orange-500 text-white shadow-[0_8px_20px_rgba(249,115,22,0.3)]"
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                >
                  {tabLabels[tab]}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="SEARCH SKILL..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 uppercase placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
            />
          </div>
        </div>

        {/* Technical Skills Animated Bars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {filteredTech.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white p-6 rounded-[1.5rem] border border-slate-200 hover:shadow-lg hover:border-orange-200 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-black text-slate-900 uppercase tracking-tight">{skill.name}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 text-slate-500">
                    {skill.group}
                  </span>
                </div>
                <span className="text-sm font-black text-orange-500">{skill.level}%</span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full rounded-full bg-orange-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Badges Grid */}
        {(activeTab === "all" || activeTab === "soft") && (
          <div className="max-w-4xl mx-auto pt-10 border-t border-slate-200">
            <h3 className="text-2xl font-black text-slate-900 mb-8 text-center uppercase tracking-tight">
              Professional <span className="text-orange-500">Attributes</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {filteredSoft.map((softSkill, idx) => (
                <motion.div
                  key={softSkill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white px-6 py-3.5 rounded-full text-sm font-black text-slate-700 uppercase tracking-widest border-2 border-slate-200 hover:border-orange-500 hover:text-orange-500 transition-colors duration-300 shadow-sm hover:shadow-md"
                >
                  {softSkill}
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
