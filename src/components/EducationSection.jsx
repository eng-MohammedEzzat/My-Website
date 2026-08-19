"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cvData";

export default function EducationSection() {
  const { education } = cvData;

  return (
    <section id="education" className="py-24 relative bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-6xl font-serif text-slate-900 uppercase mb-6">
            Academic <span className="text-orange-500">Journey</span>
          </h2>
          <p className="text-slate-600 text-xs font-bold leading-relaxed max-w-xl mx-auto uppercase tracking-widest">
            Academic background in Computer Systems Engineering.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 p-10 rounded-[2rem] border border-slate-200 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 inset-x-0 h-2 bg-orange-500" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 mt-2">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-orange-100 text-orange-600">
                      {edu.status}
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {edu.location}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-2">{edu.institution}</h3>
                  <p className="text-sm font-black text-orange-500 uppercase tracking-widest">
                    {edu.degree}
                  </p>
                </div>

                <div className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-black text-slate-700 self-start sm:self-auto shadow-sm uppercase tracking-widest">
                  {edu.graduationDate}
                </div>
              </div>

              <p className="text-slate-700 text-base font-medium leading-relaxed mb-10">
                {edu.description}
              </p>

              {/* Coursework & Focus Areas */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">
                  Academic Focus & Engineering Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {edu.highlights.map((item) => (
                    <div
                      key={item}
                      className="bg-white p-4 rounded-xl text-sm font-bold text-slate-700 border border-slate-200 shadow-sm uppercase tracking-wider"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
