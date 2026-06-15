"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Home() {
  const centerPhotoRef = useRef<HTMLDivElement>(null);
  const leftPhotoRef = useRef<HTMLDivElement>(null);
  const rightPhotoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(leftPhotoRef.current, {
      opacity: 1,
      x: -10,
      duration: 0.5,
    }).to(
      rightPhotoRef.current,
      {
        opacity: 1,
        x: 10,
        duration: 0.5,
      },
      "<",
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#2563EB] pt-36 sm:pt-44 md:pt-60 lg:pt-72">
      {/* Hero Heading */}
      <h1 className="absolute inset-0 flex flex-col justify-between py-[12vh] sm:py-[14vh] md:py-[15vh] items-center text-center pointer-events-none select-none overflow-hidden font-[var(--font-oswald)] text-[min(9vw,80px)] font-bold uppercase leading-[0.88] tracking-tight text-white">
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
      <div className="absolute top-28 left-4 z-30 sm:top-32 sm:left-6 md:top-40 md:left-12 lg:left-16">
        <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white sm:text-[9px] md:text-[10px]">
          Where Every Click
        </p>
        <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white sm:text-[9px] md:text-[10px]">
          Tells A Story
        </p>
      </div>

      {/* Top Right Year */}
      <div className="absolute top-28 right-4 z-30 sm:top-32 sm:right-6 md:top-40 md:right-12 lg:right-16">
        <span className="font-[var(--font-oswald)] text-[10px] font-semibold text-white sm:text-xs md:text-sm">
          2026
        </span>
      </div>

      {/* Center Overlapping Photos */}
      <div className="absolute inset-0 flex items-center justify-center pt-12 sm:pt-16 md:pt-20 lg:pt-12">
        <div className="relative h-[280px] w-[240px] sm:h-[340px] sm:w-[290px] md:h-[420px] md:w-[360px] lg:h-[480px] lg:w-[420px]">
          {/* Left Back Photo */}
          <div
            ref={leftPhotoRef}
            className="absolute overflow-hidden border-[2px] border-white shadow-xl sm:border-[3px] sm:shadow-2xl md:border-4 opacity-0"
            style={{
              width: "clamp(140px, 22vw, 240px)",
              height: "clamp(190px, 30vw, 320px)",
              top: "18%",
              left: "-8%",
              transform: "rotate(-12deg)",
              zIndex: 10,
            }}
          >
            <Image
              src="/images/hero3.webp"
              alt="Left portrait"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 220px, 240px"
            />
          </div>

          {/* Center Main Photo */}
          <div
            ref={centerPhotoRef}
            className="absolute overflow-hidden border-[2px] border-white shadow-xl sm:border-[3px] sm:shadow-2xl md:border-4"
            style={{
              width: "clamp(160px, 24vw, 270px)",
              height: "clamp(215px, 34vw, 360px)",
              top: "8%",
              left: "50%",
              transform: "translateX(-50%) rotate(0deg)",
              zIndex: 30,
            }}
          >
            <Image
              src="/images/hero-sec1.jpg"
              alt="Center portrait"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 250px, 270px"
            />
          </div>

          {/* Right Back Photo */}
          <div
            ref={rightPhotoRef}
            className="absolute overflow-hidden border-[2px] border-white shadow-xl sm:border-[3px] sm:shadow-2xl md:border-4 opacity-0"
            style={{
              width: "clamp(140px, 22vw, 240px)",
              height: "clamp(190px, 30vw, 320px)",
              top: "18%",
              right: "-8%",
              transform: "rotate(12deg)",
              zIndex: 15,
            }}
          >
            <Image
              src="/images/hero-sec2.jpg"
              alt="Right portrait"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 220px, 240px"
            />
          </div>
        </div>
      </div>

      {/* Left Side Text */}
      <div className="absolute bottom-[38%] left-4 z-30 max-w-[100px] sm:bottom-[40%] sm:left-6 sm:max-w-[130px] md:left-24 md:max-w-[160px] lg:left-28">
        <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-white sm:text-[8px] md:text-[9px] lg:text-[10px]">
          Let us bring your vision to life.
        </p>
      </div>

      {/* Bottom Right Text */}
      <div className="absolute bottom-6 right-4 z-30 max-w-[110px] sm:bottom-8 sm:right-6 sm:max-w-[140px] md:bottom-[32%] md:right-12 md:max-w-[180px] lg:right-16">
        <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-white sm:text-[8px] md:text-[9px] lg:text-[10px]">
          Our expert photographers will capture your moments
        </p>
      </div>
    </section>
  );
}
