import { useState } from "react";
import { motion } from "framer-motion";
import { cvData } from "@/data/cvData";
import { ArrowUpRight, Menu } from "lucide-react";

export default function Hero() {
  const { personalInfo } = cvData;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[100vh] md:h-[90vh] md:min-h-[700px] md:max-h-[900px] flex flex-col md:flex-row overflow-hidden bg-white">
      
      {/* Mobile Nav Button (Absolute for Mobile) */}
      <div className="absolute top-6 right-6 z-50 md:hidden">
        <button
          className="w-10 h-10 rounded-full border border-white/30 bg-black/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/20 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* LEFT / TOP PANEL - ORANGE */}
      <div className="w-full md:w-[55%] h-[60vh] md:h-full relative bg-gradient-to-br from-[#c2410c] to-[#9a3412] p-8 md:p-12 flex flex-col justify-between overflow-hidden">
        
        {/* Logo (or Name) */}
        <div className="relative z-20 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
          <span className="font-signature text-white text-4xl sm:text-5xl drop-shadow-md">Mohammed</span>
          <span className="text-white/90 font-medium text-xs sm:text-lg tracking-widest uppercase">Al-Madhoun</span>
        </div>

        {/* Center Content Left */}
        <div className="relative z-20 flex-1 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-[70px] leading-[0.9] sm:leading-[0.85] font-serif text-white uppercase sm:ml-[-5px]"
          >
            Full-Stack<br />Development
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6"
          >
            <a
              href="#projects"
              className="mt-6 sm:mt-10 inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 bg-white rounded-full text-[#9a3412] font-bold text-xs sm:text-sm shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] hover:scale-105 transition-all duration-300"
            >
              VIEW WORK
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Glowing Background FX */}
        <div className="absolute top-1/2 left-[80%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-orange-500/40 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
      </div>

      {/* RIGHT / BOTTOM PANEL - WHITE */}
      <div className="w-full md:w-[45%] h-[40vh] md:h-full bg-white relative p-8 md:p-12 flex flex-col justify-end md:justify-between">
        
        {/* Desktop Nav */}
        <div className="hidden md:flex justify-end items-center gap-8 relative z-30">
          <nav className="flex items-center gap-8">
            <a href="#projects" className="text-xs font-bold text-slate-900 tracking-wider hover:text-[#9a3412] transition-colors">WORK</a>
            <a href="#about" className="text-xs font-bold text-slate-900 tracking-wider hover:text-[#9a3412] transition-colors">ABOUT</a>
            <a href="#skills" className="text-xs font-bold text-slate-900 tracking-wider hover:text-[#9a3412] transition-colors">SKILLS</a>
            <a href="#contact" className="text-xs font-bold text-slate-900 tracking-wider hover:text-[#9a3412] transition-colors">CONTACT</a>
          </nav>
          <button
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-4 h-4 text-slate-900" />
          </button>
        </div>

        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-30 bg-slate-50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl w-full max-w-[280px] sm:max-w-sm self-end shadow-sm border border-slate-100 mt-auto md:mt-0 mb-4 md:mb-0"
        >
          <div className="text-orange-500 font-serif text-3xl sm:text-4xl leading-none h-4 sm:h-6 mb-2">"</div>
          <p className="text-slate-700 text-[10px] sm:text-xs font-medium leading-relaxed mb-4 sm:mb-6">
            Final-year Computer Systems Engineering student and Full-Stack Developer with real-world production experience.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-slate-200">
              <img src="/profile.jpg" alt="self" className="w-full h-full object-cover grayscale" />
            </div>
            <div>
              <p className="text-sm sm:text-xl font-signature text-slate-900 leading-none">Mohammed</p>
              <p className="text-[8px] sm:text-[9px] text-slate-400 uppercase tracking-widest mt-1">Developer</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CENTER OVERLAP IMAGE */}
      <div className="absolute bottom-0 right-0 left-0 md:left-[25%] md:right-[10%] h-[50vh] md:h-auto md:top-0 md:bottom-0 flex items-end justify-end md:justify-center pointer-events-none z-10 pr-4 md:pr-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full md:h-[95%] w-auto md:w-full relative flex items-end justify-end md:justify-center"
        >
          <img
            src={personalInfo.image || "/profile.jpg"}
            alt="Mohammed"
            className="w-auto h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-[80vw]"
          />
        </motion.div>
      </div>

    </section>
  );
}
