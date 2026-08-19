"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cvData } from "@/data/cvData";

export default function TrainingSection() {
  const { training } = cvData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="training" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-6xl font-serif text-slate-900 uppercase mb-6">
            Certifications & <span className="text-orange-500">Training</span>
          </h2>
          <p className="text-slate-600 font-bold leading-relaxed max-w-xl mx-auto uppercase tracking-widest text-xs">
            Rigorous hands-on algorithmic and data structures training under Gaza Sky Geeks.
          </p>
        </div>

        {/* Training Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {training.map((item, index) => (
            <motion.div
              key={item.program}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 mb-10"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 inset-x-0 h-2 bg-slate-900" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 mt-2">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-slate-100 text-slate-700">
                      {item.location}
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-2">{item.organization}</h3>
                  <p className="text-sm font-black text-orange-500 uppercase tracking-widest">
                    {item.program}
                  </p>
                </div>

                {/* Certificate Action Button */}
                {item.hasCertificate && (
                  <button
                    onClick={() => setSelectedCert(item)}
                    className="px-6 py-3 rounded-xl bg-slate-900 text-white text-xs font-black uppercase tracking-widest shadow-md hover:bg-orange-500 transition-colors duration-300 self-start md:self-auto"
                  >
                    View Certificate
                  </button>
                )}
              </div>

              <p className="text-slate-700 text-base font-medium leading-relaxed mb-10">
                {item.description}
              </p>

              {/* Topics Grid */}
              <div className="mb-10">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">
                  Key Topics & Modules Covered
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {item.topics.map((topic) => (
                    <div
                      key={topic}
                      className="bg-slate-50 p-4 rounded-xl text-sm font-bold text-slate-700 border border-slate-200 uppercase tracking-wider"
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Outcomes */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">
                  Key Achievements & Learning Outcomes
                </h4>
                <div className="space-y-4">
                  {item.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-4 text-sm font-bold text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white max-w-4xl w-full p-10 rounded-[2rem] relative shadow-2xl border border-slate-200"
              >
                <div className="flex-1 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 mb-8 flex items-center justify-center relative">
                  {selectedCert.certificateImage ? (
                    selectedCert.certificateImage.endsWith('.pdf') ? (
                      <iframe src={`${selectedCert.certificateImage}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} className="w-full h-full min-h-[500px] border-0" title="Certificate PDF" />
                    ) : (
                      <img src={selectedCert.certificateImage} alt="Certificate" className="w-full h-auto object-contain max-h-[600px]" />
                    )
                  ) : (
                    <div className="w-full p-10 flex flex-col items-center justify-center text-slate-400">
                      <p className="font-serif text-2xl mb-2">Certificate Unavailable</p>
                      <p className="text-sm font-bold uppercase tracking-widest">Image not found</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="w-full py-4 rounded-xl bg-slate-900 text-white text-sm font-black uppercase tracking-widest hover:bg-orange-500 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
