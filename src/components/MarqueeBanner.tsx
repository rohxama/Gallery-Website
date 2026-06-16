"use client";

export function MarqueeBanner() {
  const repeatCount = 15;

  return (
    <div className="w-full bg-[#000] overflow-hidden h-[100px] sm:mb-20 md:mb-24 flex items-center mt-16 sm:mt-20 md:mt-24">
      <div className="flex whitespace-nowrap animate-marquee gap-20">
        {Array.from({ length: repeatCount }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-20 font-[var(--font-oswald)] font-bold uppercase text-white tracking-wider"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            <span>brand</span>
            <span>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}