import { animate } from "framer-motion";

const NAV_OFFSET = 80;
const EASE_IN_OUT = [0.65, 0, 0.35, 1];
const INTERRUPT_EVENTS = ["wheel", "touchstart", "keydown"];

const noop = () => {};
let stopActiveScroll = noop;

export function scrollToY(y) {
  const root = document.documentElement;
  const target = Math.max(0, Math.min(y, root.scrollHeight - window.innerHeight));

  stopActiveScroll();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, target);
    return;
  }

  const start = window.scrollY;
  const duration = Math.min(1.4, Math.max(0.6, Math.abs(target - start) / 2000));

  // CSS smooth scrolling would re-animate every per-frame scrollTo call.
  root.style.scrollBehavior = "auto";

  const controls = animate(start, target, {
    duration,
    ease: EASE_IN_OUT,
    onUpdate: (value) => window.scrollTo(0, value),
    onComplete: () => stop(),
  });

  const stop = () => {
    controls.stop();
    root.style.scrollBehavior = "";
    INTERRUPT_EVENTS.forEach((event) => window.removeEventListener(event, stop));
    if (stopActiveScroll === stop) stopActiveScroll = noop;
  };

  INTERRUPT_EVENTS.forEach((event) => window.addEventListener(event, stop, { passive: true }));
  stopActiveScroll = stop;
}

export function scrollToHash(hash) {
  if (!hash || hash === "#") {
    scrollToY(0);
    history.replaceState(null, "", window.location.pathname + window.location.search);
    return;
  }

  const element = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!element) return;

  scrollToY(element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET);
  history.pushState(null, "", hash);
}
