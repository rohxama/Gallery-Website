"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Home() {
  const centerPhotoRef = useRef<HTMLDivElement>(null);
  const leftPhotoRef = useRef<HTMLDivElement>(null);
  const rightPhotoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(
      centerPhotoRef.current,
      { opacity: 0, y: -120, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2 }
    )
      .fromTo(
        leftPhotoRef.current,
        { opacity: 0, y: -120, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        rightPhotoRef.current,
        { opacity: 0, y: -120, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
        "-=0.5"
      );
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#2563EB] pt-60 md:pt-72">
      {/* Hero Heading */}
      <h1 className="absolute inset-0 flex flex-col justify-between py-[15vh] items-center text-center pointer-events-none select-none overflow-hidden font-[var(--font-oswald)] text-[9vw] font-bold uppercase leading-[0.88] tracking-tight text-white">
        <div className="flex flex-col items-center">
          <span>THE ART OF</span>
          <span>SEEING THE WORLD</span>
        </div>

        <div className="flex flex-col items-center">
          <span>BY CAPTURING</span>
          <span>MOMENTS THAT LAST</span>
        </div>
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

    {/* Left Back Photo */}
    <div
      ref={leftPhotoRef}
      className="absolute overflow-hidden border-[3px] border-white shadow-2xl sm:border-4"
      style={{
        width: "clamp(180px, 22vw, 240px)",
        height: "clamp(240px, 30vw, 320px)",
        top: "18%",
        left: "-8%",
        transform: "rotate(-12deg)",
        zIndex: 10,
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80"
        alt="Left portrait"
        fill
        className="object-cover"
      />
    </div>

    {/* Center Main Photo */}
    <div
      ref={centerPhotoRef}
      className="absolute overflow-hidden border-[3px] border-white shadow-2xl sm:border-4"
      style={{
        width: "clamp(200px, 24vw, 270px)",
        height: "clamp(270px, 34vw, 360px)",
        top: "8%",
        left: "50%",
        transform: "translateX(-50%) rotate(0deg)",
        zIndex: 30,
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&q=80"
        alt="Center portrait"
        fill
        className="object-cover"
      />
    </div>

    {/* Right Back Photo */}
    <div
      ref={rightPhotoRef}
      className="absolute overflow-hidden border-[3px] border-white shadow-2xl sm:border-4"
      style={{
        width: "clamp(180px, 22vw, 240px)",
        height: "clamp(240px, 30vw, 320px)",
        top: "18%",
        right: "-8%",
        transform: "rotate(12deg)",
        zIndex: 15,
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80"
        alt="Right portrait"
        fill
        className="object-cover"
      />
    </div>

  </div>
</div>

      {/* Left Side Text */}
      <div className="absolute bottom-[43%] left-6 z-30 max-w-[130px] sm:left-8 sm:max-w-[160px] md:left-24">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white sm:text-[10px]">
          Let us bring your vision to life.
        </p>
      </div>

      {/* Bottom Right Text */}
      <div className="absolute bottom-8 right-6 z-30 max-w-[140px] sm:bottom-[32%] sm:right-8 sm:max-w-[180px] md:right-12">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white sm:text-[10px]">
    Our expert
          photographers will capture your moments
        </p>
      </div>
    </section>
  );
}
