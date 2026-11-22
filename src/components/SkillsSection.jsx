"use client";

import { motion } from "framer-motion";
import { Server, Sparkles } from "lucide-react";
import { cvData } from "@/data/cvData";

const CATEGORY_ORDER = ["programming", "frontend", "backend", "database", "devops", "core"];
const MIN_TILES_PER_LOOP = 10;
const SECONDS_PER_TILE = 3.5;

const TECH_SKILLS = CATEGORY_ORDER.flatMap((id) => cvData.skills[id] ?? []);
const SOFT_SKILLS = (cvData.skills.soft ?? []).map((name) => ({ name, icon: Sparkles }));

function fillLoop(items) {
  if (items.length === 0) return [];
  const repeats = Math.ceil(MIN_TILES_PER_LOOP / items.length);
  return Array.from({ length: repeats }, () => items).flat();
}

function LogoTile({ skill, hidden }) {
  const FallbackIcon = skill.icon ?? Server;
  return (
    <li className="pr-4 shrink-0" aria-hidden={hidden || undefined}>
      <div className="h-16 px-6 flex items-center gap-3 rounded-xl border border-white/5 bg-gradient-to-b from-[#0d1f36] to-[#081425] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_-12px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/40 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_35px_-10px_rgba(14,165,233,0.55)]">
        {skill.logo ? (
          <img src={skill.logo} alt={hidden ? "" : `${skill.name} logo`} className="h-7 w-7 object-contain" loading="lazy" />
        ) : (
          <FallbackIcon className="h-6 w-6 text-sky-400" />
        )}
        <span className="text-sm font-semibold text-white/90 whitespace-nowrap">{skill.name}</span>
      </div>
    </li>
  );
}

function Marquee({ items, reverse = false, label }) {
  const loop = fillLoop(items);
  if (loop.length === 0) return null;

  return (
    <div
      className="marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      aria-label={label}
    >
      <ul
        className={`animate-marquee flex w-max ${reverse ? "[animation-direction:reverse]" : ""}`}
        style={{ "--marquee-duration": `${loop.length * SECONDS_PER_TILE}s` }}
      >
        {loop.map((skill, idx) => (
          <LogoTile key={`a-${idx}`} skill={skill} hidden={idx >= items.length} />
        ))}
        {loop.map((skill, idx) => (
          <LogoTile key={`b-${idx}`} skill={skill} hidden />
        ))}
      </ul>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative bg-slate-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl sm:text-6xl font-serif text-slate-900 uppercase mb-6">
            Skills & <span className="text-sky-500">Tools</span>
          </h2>
          <p className="text-slate-600 font-bold leading-relaxed max-w-xl mx-auto uppercase tracking-widest text-xs">
            The languages, frameworks, and tools I build with every day.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-slate-300 py-10 flex flex-col gap-4 shadow-[0_30px_60px_-25px_rgba(2,6,23,0.6)]"
        >
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-sky-500/20 rounded-full blur-[100px] pointer-events-none" />

          <Marquee items={TECH_SKILLS} label="Technical skills and tools" />
          <Marquee items={SOFT_SKILLS} label="Professional attributes" reverse />
        </motion.div>

      </div>
    </section>
  );
}
