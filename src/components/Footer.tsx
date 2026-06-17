"use client";

import Image from "next/image";

const socialLinks = [
  { name: "INSTAGRAM", className: "top-[30%] left-[15%] sm:left-[18%] md:left-[20%] rotate-[-8deg]" },
  { name: "DRIBBBLE", className: "top-[25%] right-[10%] sm:right-[15%] md:right-[20%] rotate-[5deg]" },
  { name: "BEHANCE", className: "top-[50%] left-[25%] sm:left-[30%] md:left-[35%] rotate-[3deg]" },
  { name: "LINKEDIN", className: "bottom-[30%] left-[5%] sm:left-[8%] md:left-[12%] rotate-[-5deg]" },
  { name: "FACEBOOK", className: "bottom-[28%] right-[15%] sm:right-[20%] md:right-[25%] rotate-[-3deg]" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#000] text-white overflow-hidden">
      {/* Large scrolling contacts text */}
      <div className="w-full overflow-hidden py-8 sm:py-10 md:py-14 border-b border-white/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-[var(--font-oswald)] text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-bold uppercase tracking-tight mx-4"
            >
              Aurabelle ✦&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Info row */}
      <div className="max-w-7xl mx-auto px-6 py-8 sm:py-10 md:py-12 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-center sm:text-left">
        <p className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] text-white leading-relaxed">
          Because Every Girl Has a Story ♡
        </p>
        <p className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] text-white text-center sm:text-right">
          © 2026 All Rights
          <br />
          Reserved
        </p>
      </div>

      {/* Social links area */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
        {/* Decorative badge - left */}
        <div className="absolute top-[35%] left-[8%] sm:left-[12%] w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] md:w-[210px] md:h-[210px]">
          <div className="relative w-full h-full rounded-full border border-white flex items-center justify-center">
            <div className="absolute inset-2 rounded-full border border-dashed border-white" />
          </div>
          <svg className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l1.5 8.5L22 12l-8.5 1.5L12 22l-1.5-8.5L2 12l8.5-1.5z" />
          </svg>
        </div>

        {/* Decorative badge - right */}
        <div className="absolute top-[30%] right-[8%] sm:right-[12%] w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px]">
          <div className="relative w-full h-full rounded-full border border-white flex items-center justify-center">
            <div className="absolute inset-2 rounded-full border border-dashed border-white" />
          </div>
          <svg className="absolute -top-1 -left-1 w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l1.5 8.5L22 12l-8.5 1.5L12 22l-1.5-8.5L2 12l8.5-1.5z" />
          </svg>
        </div>

        {/* Decorative badge - center bottom */}
        <div className="absolute bottom-[15%] left-[40%] w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px]">
          <div className="relative w-full h-full rounded-full border border-white flex items-center justify-center overflow-hidden">
            <div className="absolute inset-2 rounded-full border border-dashed border-white" />
          </div>
          <svg className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 text-white/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l1.5 8.5L22 12l-8.5 1.5L12 22l-1.5-8.5L2 12l8.5-1.5z" />
          </svg>
        </div>

        {/* Social pill links */}
        {socialLinks.map((link, i) => (
          <a
            key={i}
            href="#"
            className={`absolute px-7 sm:px-9 md:px-12 py-3 sm:py-3.5 md:py-4 border border-white/30 rounded-full text-xs sm:text-sm md:text-base font-medium tracking-wider text-black bg-white hover:bg-black hover:text-white transition-all duration-300 ${link.className}`}
          >
            {link.name}
          </a>
        ))}
      </div>

    </footer>
  );
}
