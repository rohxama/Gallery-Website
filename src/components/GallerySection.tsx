"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  // Top row - left side
  { src: "/images/img1.jpg", alt: "Girl 1", className: "top-[2%] left-[2%] w-[45px] h-[60px] sm:w-[90px] sm:h-[110px] md:w-[100px] md:h-[130px]" },
  { src: "/images/img2.jpg", alt: "Girl 2", className: "top-[1%] left-[15%] w-[40px] h-[55px] sm:w-[80px] sm:h-[100px] md:w-[90px] md:h-[110px]" },
  { src: "/images/img3.jpg", alt: "Girl 3", className: "top-[5%] left-[28%] w-[42px] h-[58px] sm:w-[85px] sm:h-[105px] md:w-[95px] md:h-[120px]" },

  // Top row - right side
  { src: "/images/img4.jpg", alt: "Girl 4", className: "top-[2%] right-[2%] w-[45px] h-[60px] sm:w-[90px] sm:h-[110px] md:w-[100px] md:h-[130px]" },
  { src: "/images/img5.jpg", alt: "Girl 5", className: "top-[1%] right-[15%] w-[40px] h-[55px] sm:w-[80px] sm:h-[100px] md:w-[90px] md:h-[110px]" },
  { src: "/images/img6.jpg", alt: "Girl 6", className: "top-[5%] right-[28%] w-[42px] h-[58px] sm:w-[85px] sm:h-[105px] md:w-[95px] md:h-[120px]" },

  // Middle left
  { src: "/images/img7.jpg", alt: "Girl 7", className: "top-[30%] left-[1%] w-[48px] h-[65px] sm:w-[95px] sm:h-[120px] md:w-[110px] md:h-[140px]" },
  { src: "/images/img9.jpg", alt: "Girl 8", className: "top-[33%] left-[14%] w-[38px] h-[52px] sm:w-[80px] sm:h-[100px] md:w-[90px] md:h-[115px]" },

  // Middle right
  { src: "/images/img10.jpg", alt: "Girl 9", className: "top-[30%] right-[1%] w-[48px] h-[65px] sm:w-[95px] sm:h-[120px] md:w-[110px] md:h-[140px]" },
  { src: "/images/img13.jpg", alt: "Girl 10", className: "top-[33%] right-[14%] w-[38px] h-[52px] sm:w-[80px] sm:h-[100px] md:w-[90px] md:h-[115px]" },

  // Bottom left
  { src: "/images/img14.jpg", alt: "Girl 11", className: "bottom-[30%] left-[1%] w-[42px] h-[58px] sm:w-[85px] sm:h-[110px] md:w-[100px] md:h-[125px]" },
  { src: "/images/img16.jpg", alt: "Girl 12", className: "bottom-[24%] left-[14%] w-[45px] h-[60px] sm:w-[90px] sm:h-[115px] md:w-[105px] md:h-[135px]" },
  { src: "/images/img17.jpg", alt: "Girl 13", className: "bottom-[18%] left-[26%] w-[36px] h-[50px] sm:w-[75px] sm:h-[95px] md:w-[85px] md:h-[110px]" },

  // Bottom right
  { src: "/images/img18.jpg", alt: "Girl 14", className: "bottom-[30%] right-[1%] w-[42px] h-[58px] sm:w-[85px] sm:h-[110px] md:w-[100px] md:h-[125px]" },
  { src: "/images/img20.jpg", alt: "Girl 15", className: "bottom-[24%] right-[14%] w-[45px] h-[60px] sm:w-[90px] sm:h-[115px] md:w-[105px] md:h-[135px]" },
  { src: "/images/img22.jpg", alt: "Girl 16", className: "bottom-[18%] right-[26%] w-[36px] h-[50px] sm:w-[75px] sm:h-[95px] md:w-[85px] md:h-[110px]" },

  // Very bottom row
  { src: "/images/img23.jpg", alt: "Girl 17", className: "bottom-[4%] left-[5%] w-[40px] h-[55px] sm:w-[80px] sm:h-[100px] md:w-[90px] md:h-[115px]" },
  { src: "/images/img24.jpg", alt: "Girl 18", className: "bottom-[2%] left-[20%] w-[42px] h-[58px] sm:w-[85px] sm:h-[105px] md:w-[95px] md:h-[120px]" },
  { src: "/images/img25.jpg", alt: "Girl 19", className: "bottom-[4%] right-[5%] w-[40px] h-[55px] sm:w-[80px] sm:h-[100px] md:w-[90px] md:h-[115px]" },
  { src: "/images/img26.jpg", alt: "Girl 20", className: "bottom-[2%] right-[20%] w-[42px] h-[58px] sm:w-[85px] sm:h-[105px] md:w-[95px] md:h-[120px]" },
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
            x: direction * -300,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 1.5,
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
      className="relative w-full bg-[#000] overflow-hidden pt-2 sm:pt-20 md:pt-36 h-[60vh] sm:h-[80vh] md:h-[100vh]"
    >

      {/* White gradient blob - top left */}
      <div
        className="absolute -top-0 -left-32 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 90%)",
          filter: "blur(40px)",
        }}
      />
      {/* White gradient blob - bottom right */}
      <div
        className="absolute -bottom-5 -right-32 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 90%)",
          filter: "blur(40px)",
        }}
      />
      {/* Center blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: "rgba(255,255,255,0.3)",
            animation: `float-particle ${4 + Math.random() * 6}s ease-in-out ${Math.random() * 3}s infinite alternate`,
          }}
        />
      ))}

      {/* Heading - centered with z-index above images */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-4">
        <h2 className="font-[var(--font-oswald)] text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center leading-tight">
          A collection of moments <br className="hidden sm:block" /> filled with charm.
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
