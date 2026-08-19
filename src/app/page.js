"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TrainingSection from "@/components/TrainingSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen relative flex flex-col justify-between overflow-hidden">

      {/* Background PORTFOLIO Watermark */}
      <div className="fixed inset-0 pointer-events-none flex justify-center z-0 pt-10">
        <h1 className="text-[12vw] font-black text-white/10 uppercase tracking-tighter select-none">
          PORTFOLIO
        </h1>
      </div>

      {/* Main Content Wrappers (The Inner Card) */}
      <div className="relative z-10 max-w-[1400px] w-[95%] mx-auto my-12 rounded-[2.5rem] overflow-hidden bg-white shadow-2xl flex flex-col">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <main>
          <Hero />
          <AboutSection />
          <TrainingSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

    </div>
  );
}
