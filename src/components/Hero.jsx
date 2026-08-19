import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedProfileImage from "./AnimatedProfileImage";
import { cvData } from "@/data/cvData";
import { ArrowUpRight, Menu } from "lucide-react";

export default function Hero() {
  const { personalInfo } = cvData;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative w-full h-[90vh] min-h-[700px] max-h-[900px] flex overflow-hidden">

      {/* LEFT PANEL - ORANGE */}
      <div className="w-[55%] h-full relative bg-gradient-to-br from-[#c2410c] to-[#9a3412] p-12 flex flex-col justify-between overflow-hidden">

        {/* Top Left Logo (or Name) */}
        <div className="relative z-20 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
          <span className="font-signature text-white text-4xl sm:text-5xl drop-shadow-md">Mohammed</span>
          <span className="text-white font-medium text-sm sm:text-lg tracking-widest uppercase">Al-Madhoun</span>
        </div>

        {/* Center Content Left */}
        <div className="relative z-20 flex-1 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[70px] leading-[0.85] font-serif text-white uppercase ml-[-5px]"
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
              className="mt-10 inline-flex items-center gap-3 px-8 py-3.5 bg-white rounded-full text-[#9a3412] font-bold text-sm shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] hover:scale-105 transition-all duration-300"
            >
              VIEW WORK
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>



        {/* Glowing Background FX */}
        <div className="absolute top-1/2 left-[80%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/40 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* RIGHT PANEL - WHITE */}
      <div className="w-[45%] h-full bg-white relative p-12 flex flex-col justify-between">

        {/* Top Right Nav */}
        <div className="flex justify-end items-center gap-8 relative z-30">
          <nav className="hidden xl:flex items-center gap-8">
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

        {/* Center Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-30 self-end mr-10 xl:mr-20 text-right"
        >

        </motion.div>

        {/* Bottom Right Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-30 bg-slate-50 p-6 rounded-3xl w-full max-w-sm self-end shadow-sm border border-slate-100"
        >
          <div className="text-orange-500 font-serif text-4xl leading-none h-6 mb-2">"</div>
          <p className="text-slate-700 text-xs font-medium leading-relaxed mb-6">
            Final-year Computer Systems Engineering student and Full-Stack Developer with real-world production experience.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200">
              <img src="/profile.jpg" alt="self" className="w-full h-full object-cover grayscale" />
            </div>
            <div>
              <p className="text-xl font-signature text-slate-900 leading-none">Mohammed</p>
              <p className="text-[9px] text-slate-400 uppercase tracking-widest mt-1">Developer</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CENTER OVERLAP IMAGE */}
      <div className="absolute top-0 bottom-0 left-[25%] right-[10%] flex items-end justify-center pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[95%] w-full relative"
        >
          {/* We use the profile image. If it's not a transparent cutout, we apply mix-blend modes or styling to make it look cohesive. For now we use object-contain */}
          <img
            src={personalInfo.image || "/profile.jpg"}
            alt="Mohammed"
            className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
      </div>

    </section>
  );
}
