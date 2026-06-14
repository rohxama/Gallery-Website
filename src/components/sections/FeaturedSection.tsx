"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { photos } from "@/data/gallery";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll(".featured-item");
      gsap.fromTo(
        items,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
    }
  }, []);

  const featured = photos.slice(0, 4);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="text-center mb-20"
      >
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.4em] text-primary mb-6">
          Portfolio
        </span>
        <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-[-0.03em]">
          Featured <span className="text-gradient">Work</span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto leading-relaxed">
          A curated selection of our finest photographs, each telling a unique
          story through light, composition, and raw emotion.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured.map((photo, index) => (
          <div
            key={photo.id}
            className={`featured-item ${
              index === 0 ? "md:row-span-2" : ""
            } group`}
          >
            <Link href="/gallery">
              <div className="relative overflow-hidden rounded-xl bg-card h-full border border-white/[0.05]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3 block">
                      {photo.category}
                    </span>
                    <h3 className="heading-font text-2xl font-bold text-foreground mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-muted text-sm mb-4">
                      {photo.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link href="/gallery" className="btn-secondary">
          View All Work
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
