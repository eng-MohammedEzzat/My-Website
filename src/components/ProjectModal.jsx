"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 overflow-y-auto"
      >
        <div className="min-h-full flex items-center justify-center w-full py-10">
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-2xl w-full rounded-[2.5rem] p-8 sm:p-10 border border-slate-200 shadow-2xl relative overflow-hidden"
          >
            {/* Header Bar */}
            <div className="flex items-start justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-orange-100 text-orange-600">
                    {project.category}
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {project.location}
                  </span>
                </div>
                <h3 className="text-4xl font-serif text-slate-900 mb-2 uppercase">{project.title}</h3>
                <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mt-1">{project.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs uppercase tracking-widest transition-colors shrink-0"
              >
                CLOSE
              </button>
            </div>

            {/* Project Summary */}
            <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-200">
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-10">
              <h4 className="text-xl font-serif text-slate-900 mb-4 capitalize">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-slate-50 text-slate-600 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Deliverables & Implementation Highlights */}
            <div className="mb-10">
              <h4 className="text-xl font-serif text-slate-900 mb-4 capitalize">
                Implementation Highlights
              </h4>
              <div className="space-y-4">
                {project.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-4 text-sm font-medium text-slate-600 leading-relaxed">
                    <div className="w-4 h-[1px] bg-orange-500 mt-2.5 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            {project.features && (
              <div className="mb-10">
                <h4 className="text-xl font-serif text-slate-900 mb-4 capitalize">
                  Core Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 border-l-2 border-orange-500 bg-slate-50 text-xs font-bold text-slate-700 uppercase tracking-widest"
                    >
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Action */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8 border-t border-slate-100">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-widest transition-colors duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  Visit Website
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              )}
              <button
                onClick={onClose}
                className={`w-full sm:w-auto px-10 py-4 rounded-full ${project.url ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-900 hover:bg-orange-500 text-white'} text-xs font-bold uppercase tracking-widest transition-colors duration-300 shadow-md`}
              >
                Close Details
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
