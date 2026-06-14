"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-[#2563EB] overflow-hidden flex items-center justify-center">
      {/* Layer 1: Giant Display Text Behind Images */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="display-font text-white text-[12vw] md:text-[11vw] lg:text-[10vw] leading-[0.85] tracking-tight text-center w-full"
        >
          THE ART OF
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="display-font text-white text-[12vw] md:text-[11vw] lg:text-[10vw] leading-[0.85] tracking-tight text-center w-full"
        >
          SEEING THE WORLD
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="display-font text-white text-[12vw] md:text-[11vw] lg:text-[10vw] leading-[0.85] tracking-tight text-center w-full"
        >
          CAPTURING MOMENTS
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="display-font text-white text-[12vw] md:text-[11vw] lg:text-[10vw] leading-[0.85] tracking-tight text-center w-full"
        >
          THAT LAST
        </motion.div>
      </div>

      {/* Layer 2: Overlapping Photo Cards */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {/* Photo 1 - Upper Left */}
        <motion.div
          initial={{ opacity: 0, x: -80, y: -60, rotate: -12 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="absolute"
          style={{ top: "8%", left: "18%" }}
        >
          <div className="bg-white p-2 shadow-2xl w-[180px] h-[240px] sm:w-[220px] sm:h-[300px] md:w-[260px] md:h-[340px]">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"
                alt="Portrait 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 180px, 260px"
              />
            </div>
          </div>
        </motion.div>

        {/* Photo 2 - Center (largest, on top) */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotate: 8 }}
          animate={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="absolute z-20"
          style={{ top: "12%", left: "50%", transform: "translateX(-50%)" }}
        >
          <div className="bg-white p-2 shadow-2xl w-[200px] h-[280px] sm:w-[260px] sm:h-[360px] md:w-[320px] md:h-[440px]">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80"
                alt="Portrait 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 200px, 320px"
              />
            </div>
          </div>
        </motion.div>

        {/* Photo 3 - Lower Right */}
        <motion.div
          initial={{ opacity: 0, x: 80, y: 60, rotate: 10 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 5 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="absolute z-10"
          style={{ bottom: "8%", right: "15%" }}
        >
          <div className="bg-white p-2 shadow-2xl w-[160px] h-[220px] sm:w-[200px] sm:h-[280px] md:w-[240px] md:h-[320px]">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80"
                alt="Portrait 3"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 240px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Layer 3: Small Text Labels */}
      {/* Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute top-8 left-6 md:top-12 md:left-10 z-30"
      >
        <p className="label-text-bold text-white">
          Where Every Click
        </p>
        <p className="label-text-bold text-white">
          TELLS A STORY
        </p>
      </motion.div>

      {/* Top Right - Year */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute top-8 right-6 md:top-12 md:right-10 z-30"
      >
        <p className="label-text text-white">2025</p>
      </motion.div>

      {/* Mid Right - Memories */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute top-1/3 right-4 md:right-12 z-30 text-right hidden sm:block"
      >
        <p className="label-text text-white">Memories</p>
        <p className="label-text-bold text-white">LIGHT MODE, DARK MODE</p>
      </motion.div>

      {/* Mid Left - Description */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute top-[45%] left-4 md:left-10 z-30 hidden md:block"
      >
        <p className="label-text text-white leading-relaxed">
          Let us bring your vision to life.
          <br />
          Our expert photographers
          <br />
          specialize
        </p>
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-8 right-4 md:bottom-12 md:right-10 z-30 text-right max-w-[200px]"
      >
        <p className="label-text text-white leading-relaxed">
          We&apos;ll creatively bring your
          <br />
          vision to life with our export
          <br />
          photographers
        </p>
      </motion.div>
    </section>
  );
}
