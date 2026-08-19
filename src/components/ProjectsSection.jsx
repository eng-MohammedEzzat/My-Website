"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cvData } from "@/data/cvData";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const { projects } = cvData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-6xl font-serif text-slate-900 uppercase mb-6">
            Featured <span className="text-orange-500">Work</span>
          </h2>
          <p className="text-slate-600 text-lg font-bold leading-relaxed max-w-xl mx-auto uppercase tracking-widest text-xs">
            Practical works demonstrating backend development, database architecture, and full-stack solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-slate-50 rounded-[2rem] p-10 border border-slate-200 flex flex-col justify-between relative group hover:shadow-[0_20px_60px_rgba(249,115,22,0.15)] hover:-translate-y-2 transition-all duration-500"
              >
                {/* Header Info */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-8">
                    <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-orange-100 text-orange-600">
                      {project.category}
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {project.location}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-3xl font-black text-slate-900 group-hover:text-orange-500 transition-colors tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">{project.subtitle}</p>
                  </div>

                  <p className="text-base text-slate-700 font-medium leading-relaxed mb-8">
                    {project.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white text-slate-900 border border-slate-200 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-4 rounded-xl bg-slate-900 text-white hover:bg-orange-500 text-sm font-black uppercase tracking-widest transition-colors duration-300 shadow-lg"
                >
                  Explore Details
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
