"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { heroSlides } from "@/data/gallery";

import "swiper/css";
import "swiper/css/effect-fade";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-[#0B0B0B]/60" />

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-6xl mx-auto px-6 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4 block">
                      Photography
                    </span>
                    <h1 className="font-[var(--font-syne)] text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.04em] leading-[0.9] mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-muted text-sm max-w-md mb-10 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <Link
                      href="/gallery"
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary border border-primary/30 px-6 py-3 rounded-full hover:bg-primary hover:text-background transition-all duration-300"
                    >
                      View Work
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-8 left-6">
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
          />
        </div>
      </div>
    </section>
  );
}
