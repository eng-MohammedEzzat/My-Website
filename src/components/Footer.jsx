"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 py-12 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Side: Brand info */}
        <div className="flex items-baseline gap-2">
          <span className="font-signature text-orange-500 text-3xl">
            Mohammed
          </span>
          <span className="text-sm font-serif text-slate-900 uppercase tracking-widest">
            Al-Madhoun
          </span>
        </div>

        {/* Center Tagline */}
        <div className="text-center md:text-left">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Computer Systems Engineer &bull; Palestine, Gaza
          </p>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2">
            Crafted with passion using Next.js & React
          </p>
        </div>

        {/* Right Side: Back to top */}
        <button
          onClick={scrollToTop}
          className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-orange-500 hover:text-white text-xs font-bold text-slate-900 uppercase tracking-widest transition-colors shadow-sm"
        >
          Back to Top
        </button>

      </div>
    </footer>
  );
}
