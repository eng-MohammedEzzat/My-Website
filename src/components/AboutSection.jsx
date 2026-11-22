"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Workflow,
  Trophy,
  Bot,
  BadgeCheck,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { cvData } from "@/data/cvData";

const { education, training, projects } = cvData;
const liveProject = projects.find((project) => project.url);
const certificateCount = training.reduce(
  (total, item) => total + (item.certificates?.length ?? (item.hasCertificate ? 1 : 0)),
  0
);

const STATS = [
  { value: education[0].description.replace("GPA: ", ""), label: "University GPA" },
  { value: "42nd", label: "ICPC Palestine 2026" },
  { value: String(certificateCount), label: "Verified certificates" },
  { value: education[0].graduationDate.replace("Expected ", ""), label: "Graduation" },
];

const HIGHLIGHTS = [
  {
    icon: Rocket,
    label: "Shipped to Production",
    description: "Co-built and launched Gaza Gate, a live e-commerce platform, across both frontend and backend.",
    tags: ["React.js", "Express.js", "REST APIs"],
    proof: { text: "Live at gazagate.store", href: liveProject?.url },
  },
  {
    icon: Workflow,
    label: "CI/CD & Deployment",
    description: "Automated build, test, and deploy pipelines and ran containerized apps on a cloud VPS.",
    tags: ["GitHub Actions", "Docker", "Coolify", "Postman"],
    proof: { text: "TAQAT CodeMap 2026 certificate" },
  },
  {
    icon: Trophy,
    label: "Algorithmic Problem-Solving",
    description: "Competed in the national ICPC contest after completing a structured DSA path in Python.",
    tags: ["Python", "Data Structures", "Complexity Analysis"],
    proof: { text: "42nd place, ICPC PCPC 2026" },
  },
  {
    icon: Bot,
    label: "AI-Assisted Engineering",
    description: "Trained in integrating LLMs into full-stack apps and in agentic coding workflows.",
    tags: ["Claude API", "Tool Use", "Claude Code"],
    proof: { text: "3 Anthropic Academy certificates" },
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-6xl font-serif text-slate-900 uppercase mb-6">
            About <span className="text-sky-500">Me</span>
          </h2>
          <p className="text-base sm:text-lg font-semibold text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Computer Systems Engineering student building reliable full-stack applications with a focus on clean architecture and problem-solving.
          </p>
        </div>

        {/* Intro + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 mb-6">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden bg-slate-50 rounded-[2rem] border border-slate-200 p-8 sm:p-10"
          >
            <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-sky-400 to-sky-600" />
            <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-sky-600">
              <MapPin className="w-3.5 h-3.5" />
              {education[0].institution} &middot; {education[0].location}
            </span>
            <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed">
              I&rsquo;m Mohammed, a final-year Computer Systems Engineering student who enjoys turning ideas into
              working software. I build full-stack web applications with{" "}
              <strong className="text-slate-900">Next.js, Node.js, Express.js, and MongoDB</strong>&mdash;from responsive
              interfaces to RESTful APIs, CI/CD pipelines, and Dockerized deployments.
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              I&rsquo;ve already shipped a live e-commerce platform with a team, and I&rsquo;m now looking for a{" "}
              <strong className="text-slate-900">training opportunity</strong> where I can contribute to real products
              and keep growing alongside experienced engineers.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
                className="bg-white rounded-[1.5rem] border border-slate-200 p-5 sm:p-6 flex flex-col justify-center hover:border-sky-300 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{stat.value}</span>
                <span className="mt-1 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-slate-500">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Evidence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.label}
                {...fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group bg-white p-6 rounded-[1.5rem] border border-slate-200 flex flex-col hover:border-sky-300 hover:shadow-[0_20px_45px_-20px_rgba(14,165,233,0.45)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 shrink-0 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide leading-tight">
                    {item.label}
                  </h3>
                </div>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{item.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-bold text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4">
                  <div className="pt-4 border-t border-slate-100">
                    {item.proof.href ? (
                      <a
                        href={item.proof.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700"
                      >
                        <BadgeCheck className="w-4 h-4" />
                        {item.proof.text}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700">
                        <BadgeCheck className="w-4 h-4 text-sky-500" />
                        {item.proof.text}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Statement Banner */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-sky-500 p-8 sm:p-10 rounded-[2rem] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h4 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-3">
              Seeking a Professional Training Opportunity
            </h4>
            <p className="text-base font-semibold text-white/90 leading-relaxed">
              Graduating {STATS[3].value} and ready to contribute to backend and full-stack work on a real engineering team.
            </p>
          </div>

          <a
            href="#contact"
            className="relative z-10 px-8 py-4 rounded-xl bg-white text-sky-600 hover:bg-slate-900 hover:text-white text-sm font-black uppercase tracking-widest transition-colors duration-300 whitespace-nowrap shadow-lg"
          >
            Get In Touch
          </a>
        </motion.div>

      </div>
    </section>
  );
}
