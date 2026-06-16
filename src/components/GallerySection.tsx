"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  // Top row - left side
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80", alt: "Girl 1", className: "top-[5%] left-[2%] w-[70px] h-[90px] sm:w-[90px] sm:h-[110px] md:w-[100px] md:h-[130px]" },
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80", alt: "Girl 2", className: "top-[3%] left-[12%] w-[60px] h-[80px] sm:w-[80px] sm:h-[100px] md:w-[90px] md:h-[110px]" },
  { src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&q=80", alt: "Girl 3", className: "top-[8%] left-[22%] w-[65px] h-[85px] sm:w-[85px] sm:h-[105px] md:w-[95px] md:h-[120px]" },

  // Top row - right side
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80", alt: "Girl 4", className: "top-[5%] right-[2%] w-[70px] h-[90px] sm:w-[90px] sm:h-[110px] md:w-[100px] md:h-[130px]" },
  { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80", alt: "Girl 5", className: "top-[3%] right-[12%] w-[60px] h-[80px] sm:w-[80px] sm:h-[100px] md:w-[90px] md:h-[110px]" },
  { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80", alt: "Girl 6", className: "top-[8%] right-[22%] w-[65px] h-[85px] sm:w-[85px] sm:h-[105px] md:w-[95px] md:h-[120px]" },

  // Middle left
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&q=80", alt: "Girl 7", className: "top-[35%] left-[1%] w-[75px] h-[95px] sm:w-[95px] sm:h-[120px] md:w-[110px] md:h-[140px]" },
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&q=80", alt: "Girl 8", className: "top-[38%] left-[12%] w-[60px] h-[80px] sm:w-[80px] sm:h-[100px] md:w-[90px] md:h-[115px]" },

  // Middle right
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&q=80", alt: "Girl 9", className: "top-[35%] right-[1%] w-[75px] h-[95px] sm:w-[95px] sm:h-[120px] md:w-[110px] md:h-[140px]" },
  { src: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=500&q=80", alt: "Girl 10", className: "top-[38%] right-[12%] w-[60px] h-[80px] sm:w-[80px] sm:h-[100px] md:w-[90px] md:h-[115px]" },

  // Bottom left
  { src: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&q=80", alt: "Girl 11", className: "bottom-[30%] left-[1%] w-[65px] h-[85px] sm:w-[85px] sm:h-[110px] md:w-[100px] md:h-[125px]" },
  { src: "https://images.unsplash.com/photo-1514315384763-ba401779410f?w=500&q=80", alt: "Girl 12", className: "bottom-[25%] left-[12%] w-[70px] h-[90px] sm:w-[90px] sm:h-[115px] md:w-[105px] md:h-[135px]" },
  { src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500&q=80", alt: "Girl 13", className: "bottom-[20%] left-[22%] w-[55px] h-[75px] sm:w-[75px] sm:h-[95px] md:w-[85px] md:h-[110px]" },

  // Bottom right
  { src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&q=80", alt: "Girl 14", className: "bottom-[30%] right-[1%] w-[65px] h-[85px] sm:w-[85px] sm:h-[110px] md:w-[100px] md:h-[125px]" },
  { src: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&q=80", alt: "Girl 15", className: "bottom-[25%] right-[12%] w-[70px] h-[90px] sm:w-[90px] sm:h-[115px] md:w-[105px] md:h-[135px]" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", alt: "Girl 16", className: "bottom-[20%] right-[22%] w-[55px] h-[75px] sm:w-[75px] sm:h-[95px] md:w-[85px] md:h-[110px]" },

  // Very bottom row
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80", alt: "Girl 17", className: "bottom-[5%] left-[5%] w-[60px] h-[80px] sm:w-[80px] sm:h-[100px] md:w-[90px] md:h-[115px]" },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80", alt: "Girl 18", className: "bottom-[3%] left-[18%] w-[65px] h-[85px] sm:w-[85px] sm:h-[105px] md:w-[95px] md:h-[120px]" },
  { src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80", alt: "Girl 19", className: "bottom-[5%] right-[5%] w-[60px] h-[80px] sm:w-[80px] sm:h-[100px] md:w-[90px] md:h-[115px]" },
  { src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&q=80", alt: "Girl 20", className: "bottom-[3%] right-[18%] w-[65px] h-[85px] sm:w-[85px] sm:h-[105px] md:w-[95px] md:h-[120px]" },
];

export function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((img, i) => {
        if (!img) return;

        const direction = i % 2 === 0 ? -1 : 1;

        gsap.fromTo(
          img,
          {
            x: direction * -400,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#000] overflow-hidden pt-20 sm:pt-28 md:pt-36"
      style={{ height: "100vh" }}
    >
      {/* Heading - centered with z-index above images */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <h2 className="font-[var(--font-oswald)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight">
         A collection of moments <br /> filled with elegance and charm.
        </h2>
      </div>

      {/* Scattered Images - around the edges, not behind text */}
      {galleryImages.map((img, i) => (
        <div
          key={i}
          ref={(el) => { imagesRef.current[i] = el; }}
          className={`absolute overflow-hidden ${img.className}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={150}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </section>
  );
}
