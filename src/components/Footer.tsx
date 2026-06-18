"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { name: "INSTAGRAM", className: "top-[30%] left-[15%] sm:left-[18%] md:left-[20%] rotate-[-8deg]" },
  { name: "TIKTOK", className: "top-[25%] right-[10%] sm:right-[15%] md:right-[20%] rotate-[5deg]" },
  { name: "SNAPCHAT", className: "top-[50%] left-[25%] sm:left-[30%] md:left-[35%] rotate-[3deg]" },
  { name: "THREADS", className: "bottom-[30%] left-[5%] sm:left-[8%] md:left-[12%] rotate-[-5deg]" },
  { name: "FACEBOOK", className: "bottom-[28%] right-[15%] sm:right-[20%] md:right-[25%] rotate-[-3deg]" },
];

const emptyPills = [
  { className: "bottom-0 left-[10%] rotate-[4deg]" },
  { className: "bottom-0 right-[12%] rotate-[-6deg]" },
  { className: "bottom-0 left-[30%] rotate-[7deg]" },
  { className: "bottom-0 right-[30%] rotate-[-4deg]" },
  { className: "bottom-0 left-[55%] rotate-[3deg]" },
  { className: "bottom-0 right-[5%] rotate-[-5deg]" },
  { className: "bottom-0 left-[40%] rotate-[6deg]" },
  { className: "bottom-0 left-[5%] rotate-[-3deg]" },
  { className: "bottom-0 left-[20%] rotate-[5deg]" },
  { className: "bottom-0 right-[20%] rotate-[-7deg]" },
  { className: "bottom-0 left-[50%] rotate-[4deg]" },
  { className: "bottom-0 right-[40%] rotate-[-5deg]" },
  { className: "bottom-0 left-[65%] rotate-[6deg]" },
  { className: "bottom-0 right-[55%] rotate-[-4deg]" },
  { className: "bottom-0 left-[8%] rotate-[3deg]" },
  { className: "bottom-0 right-[8%] rotate-[-6deg]" },
  { className: "bottom-0 left-[25%] rotate-[5deg]" },
  { className: "bottom-0 right-[25%] rotate-[-3deg]" },
  { className: "bottom-0 left-[45%] rotate-[7deg]" },
  { className: "bottom-0 right-[15%] rotate-[-4deg]" },
  { className: "bottom-0 left-[60%] rotate-[4deg]" },
  { className: "bottom-0 left-[12%] rotate-[-5deg]" },
  { className: "bottom-0 right-[10%] rotate-[6deg]" },
  { className: "bottom-0 left-[35%] rotate-[-3deg]" },
  { className: "bottom-0 right-[35%] rotate-[5deg]" },
];

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLAnchorElement | HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pills = pillRefs.current.filter(Boolean);

      pills.forEach((pill, i) => {
        if (!pill) return;

        const startOffset = -400 - Math.random() * 400;
        const randomX = (Math.random() - 0.5) * 500;

        gsap.fromTo(
          pill,
          {
            y: startOffset,
            x: randomX,
            rotation: (Math.random() - 0.5) * 90,
            opacity: 0,
          },
          {
            y: 0,
            x: 0,
            rotation: 0,
            opacity: 1,
            duration: 1.5 + Math.random() * 0.5,
            ease: "bounce.out",
            delay: i * 0.05,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 50%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="w-full bg-[#000] text-white overflow-hidden">
      {/* Large scrolling contacts text */}
      <div className="w-full overflow-hidden py-10 sm:py-8 md:py-10 lg:py-14 border-b border-white/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-[var(--font-oswald)] text-[36px] xs:text-[48px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-bold uppercase tracking-tight mx-3 sm:mx-4"
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
      <div className="relative w-full h-[220px] sm:h-[350px] md:h-[400px]">
        {/* Decorative badge - left */}
        <div className="absolute top-[10%] sm:top-[35%] left-[8%] sm:left-[12%] w-[70px] h-[70px] sm:w-[170px] sm:h-[170px] md:w-[210px] md:h-[210px]">
          <div className="relative w-full h-full rounded-full border border-white flex items-center justify-center">
            <div className="absolute inset-2 rounded-full border border-dashed border-white" />
          </div>
        </div>

        {/* Decorative badge - right */}
        <div className="absolute top-[5%] sm:top-[30%] right-[8%] sm:right-[12%] w-[60px] h-[60px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px]">
          <div className="relative w-full h-full rounded-full border border-white flex items-center justify-center">
            <div className="absolute inset-2 rounded-full border border-dashed border-white" />
          </div>
        </div>

        {/* Decorative badge - center bottom */}
        <div className="absolute bottom-[5%] sm:bottom-[15%] left-[40%] w-[80px] h-[80px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px]">
          <div className="relative w-full h-full rounded-full border border-white flex items-center justify-center overflow-hidden">
            <div className="absolute inset-2 rounded-full border border-dashed border-white" />
          </div>
        </div>

        {/* Social pill links */}
        {socialLinks.map((link, i) => (
          <a
            key={i}
            ref={(el) => { pillRefs.current[i] = el; }}
            href="#"
            className={`absolute w-[80px] h-[28px] sm:w-[130px] sm:h-[45px] md:w-[160px] md:h-[50px] border border-white/30 rounded-full text-[9px] sm:text-sm md:text-base font-medium tracking-wider text-black bg-white flex items-center justify-center z-20 ${link.className}`}
          >
            {link.name}
          </a>
        ))}

        {/* Empty pills */}
        {emptyPills.map((pill, i) => (
          <div
            key={`empty-${i}`}
            ref={(el) => { pillRefs.current[socialLinks.length + i] = el; }}
            className={`absolute w-[18px] h-[18px] sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px] border border-white/30 rounded-full bg-white z-10 ${pill.className}`}
          />
        ))}
      </div>
    </footer>
  );
}
