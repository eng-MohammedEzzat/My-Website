"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import {
  motion,
  animate,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cvData } from "@/data/cvData";
import ProjectModal from "./ProjectModal";
import ProjectLogo from "./ProjectLogo";

const MIN_FACES = 8;
const AUTOPLAY_DEG_PER_SEC = 12;
const DRAG_DEG_PER_PX = 0.25;
const SMALL_SCREEN_QUERY = "(max-width: 639px)";

const CARD_SIZES = {
  small: { width: 190, height: 420, gap: 10 },
  large: { width: 260, height: 450, gap: 24 },
};

const PALETTE = [
  { card: "from-sky-200 to-sky-300", back: "bg-sky-300" },
  { card: "from-violet-200 to-violet-300", back: "bg-violet-300" },
  { card: "from-rose-200 to-rose-300", back: "bg-rose-300" },
  { card: "from-amber-200 to-amber-300", back: "bg-amber-300" },
  { card: "from-emerald-200 to-emerald-300", back: "bg-emerald-300" },
  { card: "from-teal-200 to-teal-300", back: "bg-teal-300" },
];

const { projects } = cvData;
const FACES = Array.from({ length: Math.ceil(MIN_FACES / projects.length) }, () => projects).flat();
const STEP = 360 / FACES.length;

function subscribeToSmallScreen(callback) {
  const query = window.matchMedia(SMALL_SCREEN_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function useIsSmallScreen() {
  return useSyncExternalStore(
    subscribeToSmallScreen,
    () => window.matchMedia(SMALL_SCREEN_QUERY).matches,
    () => false
  );
}

function wrapFace(index) {
  return ((index % FACES.length) + FACES.length) % FACES.length;
}

function shortestDelta(from, to) {
  let delta = to - from;
  if (delta > FACES.length / 2) delta -= FACES.length;
  if (delta < -FACES.length / 2) delta += FACES.length;
  return delta;
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [frontFace, setFrontFace] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const stageRef = useRef(null);
  const spinControls = useRef(null);
  const isManuallyMoving = useRef(false);
  const wasDragged = useRef(false);

  const isInView = useInView(stageRef, { amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const card = CARD_SIZES[useIsSmallScreen() ? "small" : "large"];
  const radius = Math.round(card.width / 2 / Math.tan(Math.PI / FACES.length)) + card.gap;

  const rotation = useMotionValue(0);
  const activeProjectIdx = frontFace % projects.length;

  useMotionValueEvent(rotation, "change", (value) => {
    setFrontFace(wrapFace(Math.round(-value / STEP)));
  });

  const isPaused = reduceMotion || isHovered || !isInView || selectedProject !== null;

  useAnimationFrame((_, delta) => {
    if (isPaused || isManuallyMoving.current) return;
    rotation.set(rotation.get() - (AUTOPLAY_DEG_PER_SEC * delta) / 1000);
  });

  const goToFace = (faceIdx) => {
    const targetIndex = Math.round(-rotation.get() / STEP) + shortestDelta(frontFace, faceIdx);
    spinControls.current?.stop();
    isManuallyMoving.current = true;
    const controls = animate(
      rotation,
      -targetIndex * STEP,
      reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 55, damping: 16 }
    );
    spinControls.current = controls;
    controls.then(() => {
      if (spinControls.current === controls) isManuallyMoving.current = false;
    });
  };

  const goToProject = (projectIdx) => {
    const candidates = FACES.map((_, faceIdx) => faceIdx).filter(
      (faceIdx) => faceIdx % projects.length === projectIdx
    );
    const nearest = candidates.reduce((best, faceIdx) =>
      Math.abs(shortestDelta(frontFace, faceIdx)) < Math.abs(shortestDelta(frontFace, best)) ? faceIdx : best
    );
    goToFace(nearest);
  };

  const handleFaceClick = (faceIdx) => {
    if (wasDragged.current) return;
    if (faceIdx === frontFace) {
      setSelectedProject(FACES[faceIdx]);
    } else {
      goToFace(faceIdx);
    }
  };

  const handlePanEnd = () => {
    isManuallyMoving.current = false;
  };

  return (
    <section id="projects" className="py-24 relative bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl sm:text-6xl font-serif text-slate-900 uppercase mb-6">
            Featured <span className="text-sky-500">Work</span>
          </h2>
          <p className="text-slate-600 font-bold leading-relaxed max-w-xl mx-auto uppercase tracking-widest text-xs">
            Practical works demonstrating backend development, database architecture, and full-stack solutions.
          </p>
        </div>

        {/* Barrel Stage */}
        <motion.div
          ref={stageRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <motion.div
            onPointerDown={() => { wasDragged.current = false; }}
            onPanStart={() => {
              wasDragged.current = true;
              isManuallyMoving.current = true;
              spinControls.current?.stop();
              spinControls.current = null;
            }}
            onPan={(_, info) => rotation.set(rotation.get() + info.delta.x * DRAG_DEG_PER_PX)}
            onPanEnd={handlePanEnd}
            className="relative cursor-grab active:cursor-grabbing select-none"
            style={{
              height: card.height + 130,
              perspective: 1100,
              perspectiveOrigin: "50% 20%",
              touchAction: "pan-y",
            }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ transformStyle: "preserve-3d", z: -radius, rotateX: -10, rotateY: rotation }}
            >
              {FACES.map((project, faceIdx) => (
                <BarrelFace
                  key={faceIdx}
                  project={project}
                  faceIdx={faceIdx}
                  rotation={rotation}
                  radius={radius}
                  card={card}
                  isFront={faceIdx === frontFace}
                  onClick={() => handleFaceClick(faceIdx)}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Project Dots */}
          <div className="relative mt-4 flex items-center justify-center gap-2">
            {projects.map((project, projectIdx) => (
              <button
                key={project.id}
                onClick={() => goToProject(projectIdx)}
                aria-label={`Show ${project.title}`}
                aria-current={projectIdx === activeProjectIdx ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${projectIdx === activeProjectIdx ? "w-8 bg-sky-500" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
              />
            ))}
          </div>

          <p className="relative mt-5 text-center text-[10px] font-black uppercase tracking-widest text-slate-400">
            Drag to rotate &middot; Click the front card for details
          </p>
        </motion.div>

        {/* Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}

function BarrelFace({ project, faceIdx, rotation, radius, card, isFront, onClick }) {
  const baseAngle = faceIdx * STEP;
  const projectIdx = faceIdx % projects.length;
  const colors = PALETTE[projectIdx % PALETTE.length];

  // Opacity lives on the layers: on the face itself it would flatten the 3D context.
  const opacity = useTransform(rotation, (r) => {
    const facing = Math.cos(((baseAngle + r) * Math.PI) / 180);
    return 0.35 + 0.65 * ((facing + 1) / 2) ** 2;
  });

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        width: card.width,
        height: card.height,
        marginLeft: -card.width / 2,
        marginTop: -card.height / 2,
        transform: `rotateY(${baseAngle}deg) translateZ(${radius}px)`,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.button
        type="button"
        onClick={onClick}
        tabIndex={isFront ? 0 : -1}
        aria-hidden={!isFront || undefined}
        aria-label={isFront ? `Open details for ${project.title}` : undefined}
        style={{ opacity, backfaceVisibility: "hidden" }}
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.card} flex flex-col text-left overflow-hidden shadow-2xl transition-shadow duration-500 ${isFront ? "ring-2 ring-white/80 shadow-[0_25px_60px_-15px_rgba(14,165,233,0.6)]" : ""
          }`}
      >
        <ProjectLogo
          project={project}
          className="w-full h-32 sm:h-40 p-3 sm:p-4 border-b border-slate-900/5 text-4xl sm:text-5xl"
        />

        <div className="relative flex flex-1 flex-col items-start p-5 sm:p-6">
          <span className="absolute -right-2 -bottom-4 text-[90px] sm:text-[120px] font-black text-slate-900/10 leading-none pointer-events-none">
            {String(projectIdx + 1).padStart(2, "0")}
          </span>

          <span className="relative px-2.5 py-1 rounded-full bg-white/70 text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-800">
            {project.category}
          </span>

          <div className="relative mt-auto w-full">
            <h3 className="text-xl sm:text-2xl font-serif uppercase text-slate-900 leading-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-700">
              {project.subtitle}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded-md bg-white/70 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-slate-800"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-2 py-1 rounded-md bg-slate-900/10 text-[9px] sm:text-[10px] font-bold text-slate-800">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>

            <span
              className={`mt-4 inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-900 transition-opacity duration-300 ${isFront ? "opacity-100" : "opacity-0"
                }`}
            >
              Explore Details
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </motion.button>

      <motion.div
        aria-hidden
        style={{ opacity, backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        className={`absolute inset-0 rounded-2xl ${colors.back} brightness-75`}
      />
    </div>
  );
}
