"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import confetti from "canvas-confetti";

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f97316', '#ea580c', '#c2410c']
    });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Training", href: "#training" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled
        ? "opacity-100 translate-y-0 bg-white/90 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm"
        : "opacity-0 -translate-y-full pointer-events-none py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-baseline gap-2 sm:gap-3 group">
          <span className="font-signature text-orange-500 text-3xl sm:text-4xl drop-shadow-sm group-hover:text-orange-600 transition-colors">
            Mohammed
          </span>
          <span className="text-lg sm:text-xl font-serif text-slate-900 uppercase tracking-widest group-hover:text-orange-500 transition-colors">
            Al-Madhoun
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-black text-slate-900 uppercase tracking-widest hover:text-orange-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle - Hidden for light theme focus */}
          {/* Download Resume / Print */}
          <button
            onClick={() => {
              triggerConfetti();
              window.print();
            }}
            className="hidden sm:flex items-center justify-center px-6 py-2.5 rounded-xl bg-slate-900 text-white font-black text-xs uppercase tracking-widest shadow-lg hover:bg-orange-500 transition-colors duration-300"
          >
            Download CV
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-6 py-4 mt-2 shadow-lg absolute w-full"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-900 font-black uppercase tracking-widest hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerConfetti();
                  window.print();
                }}
                className="w-full mt-2 px-6 py-4 rounded-xl bg-slate-900 text-white font-black uppercase tracking-widest text-xs shadow-md hover:bg-orange-500 transition-colors"
              >
                Download CV
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
