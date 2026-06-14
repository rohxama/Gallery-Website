"use client";

import Image from "next/image";

export default function Home() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#2563EB] pt-28 md:pt-32">
      {/* Background Large Typography - Single Heading */}
      <h1 className="pointer-events-none absolute inset-0 select-none overflow-hidden font-[var(--font-oswald)] text-[9vw] font-bold uppercase leading-[0.88] tracking-tight text-white">
        <span className="absolute top-[12%] left-1/2 -translate-x-1/2 whitespace-nowrap">
          THE ART OF
        </span>
        <span className="absolute top-[26%] left-[10%] whitespace-nowrap">
          SEEING
        </span>
        <span className="absolute top-[26%] right-[8%] whitespace-nowrap">
          THE WORLD
        </span>
        <span className="absolute bottom-[22%] left-[5%] whitespace-nowrap">
          CAPTURING
        </span>
        <span className="absolute bottom-[10%] left-1/2 -translate-x-1/2 whitespace-nowrap">
          THAT LAST
        </span>
      </h1>

      {/* Top Left Tagline */}
      <div className="absolute top-32 left-6 z-30 sm:top-36 sm:left-8 md:top-40 md:left-12">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white sm:text-[10px]">
          Where Every Click
        </p>
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white sm:text-[10px]">
          Tells A Story
        </p>
      </div>

      {/* Top Right Year */}
      <div className="absolute top-32 right-6 z-30 sm:top-36 sm:right-8 md:top-40 md:right-12">
        <span className="font-[var(--font-oswald)] text-xs font-semibold text-white">
          2026
        </span>
      </div>

      {/* Center Overlapping Photos */}
      <div className="absolute inset-0 flex items-center justify-center pt-20 md:pt-12">
        <div className="relative h-[350px] w-[300px] sm:h-[420px] sm:w-[360px] md:h-[480px] md:w-[420px]">
          {/* Photo 1 - Back left */}
          <div
            className="absolute border-[3px] border-white shadow-2xl sm:border-4"
            style={{
              width: "clamp(180px, 22vw, 240px)",
              height: "clamp(240px, 30vw, 320px)",
              top: "5%",
              left: "0%",
              transform: "rotate(-8deg)",
              zIndex: 10,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80"
              alt="Portrait with sky"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 180px, (max-width: 768px) 210px, 240px"
            />
          </div>

          {/* Photo 2 - Front center */}
          <div
            className="absolute border-[3px] border-white shadow-2xl sm:border-4"
            style={{
              width: "clamp(200px, 24vw, 260px)",
              height: "clamp(260px, 32vw, 340px)",
              top: "0%",
              left: "25%",
              transform: "rotate(4deg)",
              zIndex: 30,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&q=80"
              alt="Portrait woman"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 200px, (max-width: 768px) 230px, 260px"
            />
          </div>

          {/* Photo 3 - Back right */}
          <div
            className="absolute border-[3px] border-white shadow-2xl sm:border-4"
            style={{
              width: "clamp(170px, 20vw, 220px)",
              height: "clamp(230px, 28vw, 300px)",
              top: "12%",
              left: "52%",
              transform: "rotate(-3deg)",
              zIndex: 20,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80"
              alt="Portrait profile"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 170px, (max-width: 768px) 200px, 220px"
            />
          </div>
        </div>
      </div>

      {/* Hero Tagline */}
      <div className="absolute bottom-[18%] left-1/2 z-30 w-full -translate-x-1/2 px-6 text-center">
        <p className="font-[var(--font-oswald)] text-sm font-medium uppercase tracking-[0.15em] text-white sm:text-base md:text-lg">
          The art of seeing the world by capturing moments that lasts
        </p>
      </div>
    

      {/* Left Side Text */}
      <div className="absolute bottom-[38%] left-6 z-30 max-w-[130px] sm:left-8 sm:max-w-[160px] md:left-12">
        <p className="text-[8px] leading-relaxed text-white/80 sm:text-[9px]">
          Let us bring your vision to life.
        </p>
        <p className="text-[8px] leading-relaxed text-white/80 sm:text-[9px]">
          Our expert photographers specialize
        </p>
      </div>

      {/* Right Side Text */}
      <div className="absolute top-[42%] right-6 z-30 sm:right-8 md:right-12">
        <p className="mb-1 font-[var(--font-oswald)] text-[10px] font-medium text-white sm:text-xs">
          Memories
        </p>
        <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-white sm:text-[9px]">
          Light Mode, Dark Mode
        </p>
      </div>

      {/* Bottom Right Text */}
      <div className="absolute bottom-8 right-6 z-30 max-w-[140px] sm:bottom-12 sm:right-8 sm:max-w-[180px] md:right-12">
        <p className="text-[8px] leading-relaxed text-white/80 sm:text-[9px]">
          We&apos;ll creatively bring your vision to life with our expert
          photographers.
        </p>
      </div>
    </section>
  );
}
