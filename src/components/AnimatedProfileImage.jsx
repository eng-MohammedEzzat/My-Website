"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Expand, Eye, Layers, Orbit, Cpu, Compass } from "lucide-react";

export default function AnimatedProfileImage({ src, alt = "Mohammed Al-Madhoun" }) {
  const [animationMode, setAnimationMode] = useState("aura"); // "aura", "tilt", "orbit", "scan"
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Handle 3D tilt calculation
  const handleMouseMove = (e) => {
    if (animationMode !== "tilt" || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 25, y: -x * 25 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const orbitBadges = [
    { label: "JavaScript", color: "from-yellow-400 to-amber-600", delay: 0 },
    { label: "Python", color: "from-blue-400 to-cyan-500", delay: 1.5 },
    { label: "Java", color: "from-orange-500 to-red-600", delay: 3 },
    { label: "DSA", color: "from-emerald-400 to-teal-600", delay: 4.5 },
    { label: "Full-Stack", color: "from-purple-400 to-indigo-600", delay: 6 }
  ];

  return (
    <div className="flex flex-col items-center select-none">
      {/* Animation Mode Selector Bar */}
      <div className="flex items-center gap-1.5 p-1.5 mb-6 rounded-full glass-card border border-white/10 text-xs shadow-lg">
        <button
          onClick={() => setAnimationMode("aura")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
            animationMode === "aura"
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 font-semibold"
              : "text-slate-400 hover:text-white"
          }`}
          title="Cyber Neon Aura Effect"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Aura</span>
        </button>

        <button
          onClick={() => setAnimationMode("tilt")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
            animationMode === "tilt"
              ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/25 font-semibold"
              : "text-slate-400 hover:text-white"
          }`}
          title="Interactive 3D Tilt Parallax"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>3D Tilt</span>
        </button>

        <button
          onClick={() => setAnimationMode("orbit")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
            animationMode === "orbit"
              ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25 font-semibold"
              : "text-slate-400 hover:text-white"
          }`}
          title="Floating Tech Badges Orbit"
        >
          <Orbit className="w-3.5 h-3.5" />
          <span>Orbit</span>
        </button>

        <button
          onClick={() => setAnimationMode("scan")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
            animationMode === "scan"
              ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-md shadow-pink-500/25 font-semibold"
              : "text-slate-400 hover:text-white"
          }`}
          title="Cybernetic Shimmer Scan"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>Scan</span>
        </button>
      </div>

      {/* Main Image Container Frame */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative group cursor-pointer perspective-1000"
        onClick={() => setIsLightboxOpen(true)}
      >
        {/* Animated Glow Backdrops */}
        {animationMode === "aura" && (
          <>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-60 blur-xl animate-pulse-glow" />
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-400 to-emerald-400 opacity-40 animate-spin-slow blur-md" />
          </>
        )}

        {animationMode === "scan" && (
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-70 blur-lg animate-pulse" />
        )}

        {animationMode === "orbit" && (
          <div className="absolute -inset-6 rounded-full border border-cyan-500/30 animate-spin-slow pointer-events-none" />
        )}

        {/* Orbiting Tech Badges */}
        {animationMode === "orbit" && (
          <div className="absolute inset-0 pointer-events-none">
            {orbitBadges.map((badge, idx) => {
              const angle = (idx * (360 / orbitBadges.length)) * (Math.PI / 180);
              const radius = 145; // distance from center
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={badge.label}
                  animate={{
                    x: [x, Math.cos(angle + Math.PI * 2) * radius],
                    y: [y, Math.sin(angle + Math.PI * 2) * radius],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                    delay: idx * 0.5,
                  }}
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full text-[10px] font-bold text-white bg-gradient-to-r ${badge.color} shadow-lg shadow-black/40 border border-white/20 whitespace-nowrap z-20`}
                >
                  {badge.label}
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Profile Card Frame */}
        <motion.div
          style={{
            rotateX: animationMode === "tilt" ? tilt.x : 0,
            rotateY: animationMode === "tilt" ? tilt.y : 0,
            transformStyle: "preserve-3d",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl p-2.5 overflow-hidden transition-all duration-500 glass-card shadow-2xl border ${
            animationMode === "scan"
              ? "border-pink-500/50 shadow-pink-500/20"
              : "border-cyan-500/30 shadow-cyan-500/20"
          }`}
        >
          {/* Inner Frame Wrapper */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900/90">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Shimmer Scan Line Effect */}
            {animationMode === "scan" && (
              <motion.div
                initial={{ top: "-100%" }}
                animate={{ top: "200%" }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent pointer-events-none transform -skew-y-12"
              />
            )}

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
              <span className="text-xs font-medium text-cyan-300 flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" /> View Photo
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-500/30 text-cyan-200 border border-cyan-400/30">
                {animationMode}
              </span>
            </div>

            {/* Live Status Badge */}
            <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-[11px] font-medium text-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full rounded-3xl overflow-hidden glass-card p-3 border border-white/20"
            >
              <div className="relative w-full h-[480px] rounded-2xl overflow-hidden">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between p-4 text-slate-200">
                <div>
                  <h3 className="text-lg font-bold text-white">{alt}</h3>
                  <p className="text-xs text-cyan-400">Computer Systems Engineer • Gaza, Palestine</p>
                </div>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
