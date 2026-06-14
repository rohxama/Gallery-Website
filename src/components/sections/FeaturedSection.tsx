"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { photos } from "@/data/gallery";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!ref.current) return;
    const items = ref.current.querySelectorAll(".item");
    gsap.fromTo(
      items,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      }
    );
  }, []);

  const featured = photos.slice(0, 4);

  return (
    <section ref={ref} className="py-32 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-3">
          Selected
        </span>
        <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold tracking-[-0.03em]">
          Work
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featured.map((photo, index) => (
          <div
            key={photo.id}
            className={`item ${index === 0 ? "md:row-span-2" : ""}`}
          >
            <Link href="/gallery" className="block group">
              <div className="relative overflow-hidden bg-card">
                <div
                  className={`relative ${
                    index === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-sm font-medium">{photo.title}</h3>
                  <p className="text-[10px] text-muted uppercase tracking-wider mt-1">
                    {photo.category}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/gallery"
          className="text-[11px] uppercase tracking-[0.2em] text-primary hover:opacity-70 transition-opacity"
        >
          View All &rarr;
        </Link>
      </div>
    </section>
  );
}
