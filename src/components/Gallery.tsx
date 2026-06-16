"use client";

import Image from "next/image";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", alt: "Portrait 1" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80", alt: "Portrait 2" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80", alt: "Portrait 3" },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80", alt: "Portrait 4" },
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80", alt: "Portrait 5" },
  { src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80", alt: "Portrait 6" },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80", alt: "Portrait 7" },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80", alt: "Portrait 8" },
  { src: "https://images.unsplash.com/photo-1488161628813-04466f0e3e6a?w=600&q=80", alt: "Portrait 9" },
  { src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80", alt: "Portrait 10" },
  { src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&q=80", alt: "Portrait 11" },
  { src: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&q=80", alt: "Portrait 12" },
  { src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80", alt: "Portrait 13" },
  { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80", alt: "Portrait 14" },
  { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80", alt: "Portrait 15" },
  { src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80", alt: "Portrait 16" },
];

// Heights vary to create masonry effect
const heights = [
  "h-[280px]", "h-[350px]", "h-[240px]", "h-[300px]",
  "h-[320px]", "h-[260px]", "h-[290px]", "h-[340px]",
  "h-[250px]", "h-[310px]", "h-[270px]", "h-[330px]",
  "h-[280px]", "h-[360px]", "h-[240px]", "h-[300px]",
];

export function Gallery() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      {/* Section Header */}
      <div className="mx-auto max-w-6xl px-6 mb-10 sm:mb-12 md:mb-16 text-center">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8A96B] mb-3 sm:mb-4">
          Portfolio
        </span>
        <h2 className="font-[var(--font-oswald)] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-black">
          Photo Gallery
        </h2>
      </div>

      {/* Masonry Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="columns-2 sm:columns-3 md:columns-4 gap-2 sm:gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`mb-2 sm:mb-3 md:mb-4 break-inside-avoid overflow-hidden ${heights[i]}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
