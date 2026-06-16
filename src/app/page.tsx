"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Slider3D } from "@/components/Slider3D";
import { GallerySection } from "@/components/GallerySection";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { Footer } from "@/components/Footer";

// Sample images for the 3D slider
const sliderImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80",
];

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
      delay: 0,
    }).to(
      rightPhotoRef.current,
      {
        opacity: 1,
        x: 10,
        duration: 0.5,
        delay: 0,
      },
      "<",
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative w-full min-h-screen overflow-hidden bg-[#000] pt-36 sm:pt-44 md:pt-60 lg:pt-72">
        {/* Hero Heading */}
        <h1 className="absolute inset-0 flex flex-col justify-between py-[36vh] xs:py-[34vh] sm:py-[25vh] md:py-[20vh]  lg:py-[16vh] items-center text-center pointer-events-none select-none overflow-hidden font-[var(--font-oswald)] text-[min(9vw,120px)] font-bold uppercase leading-[0.88] tracking-tight text-white">
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
        <div className="absolute top-54 left-8 z-30 sm:top-32 sm:left-6 md:top-32 md:left-12 lg:left-16">
          <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-white sm:text-[9px] md:text-[10px]">
            Where Every Click
          </p>
          <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-white sm:text-[9px] md:text-[10px]">
            Tells A Story
          </p>
        </div>

        {/* Top Right Year */}
        <div className="absolute top-54 right-10 z-30 sm:top-32 sm:right-6 md:top-32 md:right-12 lg:right-16">
          <span className="font-[var(--font-oswald)] text-[7px] font-semibold text-white sm:text-xs md:text-sm">
            2026
          </span>
        </div>

        {/* Center Overlapping Photos */}
        <div className="absolute inset-0 flex items-center justify-center pt-12 sm:pt-16 md:pt-20 lg:pt-12">
          <div className="relative h-[280px] w-[240px] sm:h-[340px] sm:w-[290px] md:h-[420px] md:w-[360px] lg:h-[480px] lg:w-[420px]">
            {/* Left Back Photo */}
            <div
              ref={leftPhotoRef}
              className="
    absolute overflow-hidden border-[2px] border-white shadow-xl
    sm:border-[3px] sm:shadow-2xl md:border-4 opacity-0

    h-[120px]
    sm:h-[220px]
    md:h-[260px]
    lg:h-[320px]

    w-[100px]
    sm:w-[180px]
    md:w-[220px]
    lg:w-[240px]

    left-[10%]
    sm:left-[-6%]
    md:left-[-8%]
  "
              style={{
                top: "18%",
                transform: "rotate(-12deg)",
                zIndex: 10,
              }}
            >
              <Image
                src="/images/hero3.webp"
                alt="Left portrait"
                fill
                className="object-cover"
              />
            </div>

            {/* Center Main Photo */}
            <div
              ref={centerPhotoRef}
              className="
  absolute overflow-hidden border-[2px] border-white shadow-xl
  sm:border-[3px] sm:shadow-2xl md:border-4
  top-[15%] sm:top-[7%] md:top-[8%] lg:top-[10%]

  z-30
   h-[130px]
    sm:h-[220px]
    md:h-[290px]
    lg:h-[350px]

    w-[100px]
    sm:w-[180px]
    md:w-[220px]
    lg:w-[240px]
"
              style={{
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
              />
            </div>

            {/* Right Back Photo */}
             <div
              ref={rightPhotoRef}
              className="
    absolute overflow-hidden border-[2px] border-white shadow-xl
    sm:border-[3px] sm:shadow-2xl md:border-4 opacity-0

    h-[120px]
    xs:h-[140px]
    sm:h-[220px]
    md:h-[260px]
    lg:h-[320px]

    w-[100px]
    sm:w-[180px]
    md:w-[220px]
    lg:w-[240px]

    right-[10%]
    sm:right-[-6%]
    md:right-[-8%]
  "
              style={{
                top: "18%",
                transform: "rotate(12deg)",
                zIndex: 10,
              }}
            >
              <Image
                src="/images/hero-sec2.jpg"
                alt="Right portrait"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 120px, (max-width: 768px) 180px, (max-width: 1024px) 220px, 240px"
              />
            </div>
          </div>
        </div>

        {/* Left Side Text */}
        <div className="absolute bottom-[32%] left-4 z-30 max-w-[100px] sm:bottom-[40%] sm:left-6 sm:max-w-[130px] md:left-10 md:max-w-[160px] lg:left-28">
          <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-white sm:text-[8px] md:text-[9px] lg:text-[10px]">
            A Collection of Lovely Moments
          </p>
        </div>

        {/* Bottom Right Text */}
        <div className="absolute bottom-[28%] z-30 max-w-[110px] sm:bottom-30 sm:max-w-[140px] md:bottom-[36%] md:max-w-[100px] right-[-20px] xl:right-20">
          <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-white sm:text-[8px] md:text-[9px] lg:text-[10px]">
           Because Every Girl Has a Story
          </p>
        </div>

        {/* Down Arrow */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30">
          <button
            onClick={() => {
              document.getElementById("section2")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 text-white hover:text-white transition-colors"
          >
            <svg
              className="w-7 h-12 animate-bounce border-2 border-white rounded-xl p-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* ==================== 3D SLIDER SECTION ==================== */}
      <section id="section2" className="relative w-full bg-[#000] pt-16 sm:pt-20 md:pt-24 pb-32 overflow-hidden">
        

        {/* 3D Slider Component - relative wrapper for absolute children */}
        <div className="relative" style={{ height: "calc(50vmin + 100px + 10vmin)" }}>
          <Slider3D slides={sliderImages} />
        </div>
      </section>

      {/* ==================== GALLERY SECTION ==================== */}
      <GallerySection />

      {/* ==================== MARQUEE BANNER ==================== */}
      <div className="bg-[#000]">
        <MarqueeBanner />
      </div>

      {/* ==================== FOOTER ==================== */}
      <Footer />
    </>
  );
}
