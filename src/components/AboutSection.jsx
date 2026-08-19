"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cvData";

export default function AboutSection() {
  const { personalInfo } = cvData;

  const features = [
    {
      title: "Systems Engineering",
      description: "Solid foundation in hardware-software integration, algorithm optimization, and computing systems.",
    },
    {
      title: "DSA Proficiency",
      description: "Trained through Gaza Sky Geeks SkillStack path in Python, mastering search, sort, recursion, trees, and time complexity.",
    },
    {
      title: "Clean Code & OOP",
      description: "Passionate about building maintainable RESTful APIs and OOP architectures using modern frameworks.",
    },
    {
      title: "Growth Mindset",
      description: "Strong self-learner and proactive problem solver seeking hands-on training to contribute effectively to software teams.",
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-6xl font-serif text-slate-900 uppercase mb-6">
            About <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-slate-600 font-bold leading-relaxed max-w-xl mx-auto uppercase tracking-widest text-xs">
            Bridging theoretical computer systems engineering with practical full-stack software development.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="mb-6">
                <span className="text-4xl font-black text-orange-200 mb-4 block group-hover:text-orange-500 transition-colors">0{idx + 1}</span>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm font-bold text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-orange-500 p-10 rounded-[2rem] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h4 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-3">
              Seeking a Professional Training Opportunity
            </h4>
            <p className="text-base font-bold text-white/90 leading-relaxed">
              Ready to bring energy, algorithmic analytical skills, and full-stack dedication to your engineering team.
            </p>
          </div>

          <a
            href="#contact"
            className="relative z-10 px-8 py-4 rounded-xl bg-white text-orange-600 hover:bg-slate-900 hover:text-white text-sm font-black uppercase tracking-widest transition-colors duration-300 whitespace-nowrap shadow-lg"
          >
            Get In Touch
          </a>
        </motion.div>

      </div>
    </section>
  );
}
