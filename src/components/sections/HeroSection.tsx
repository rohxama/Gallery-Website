"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-background">
      {/* Giant Display Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-font text-foreground/[0.06] text-[12vw] md:text-[11vw] lg:text-[10vw] leading-[0.85] tracking-tight text-center font-bold"
        >
          THE ART OF
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="heading-font text-foreground/[0.06] text-[12vw] md:text-[11vw] lg:text-[10vw] leading-[0.85] tracking-tight text-center font-bold"
        >
          SEEING THE WORLD
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="heading-font text-foreground/[0.06] text-[12vw] md:text-[11vw] lg:text-[10vw] leading-[0.85] tracking-tight text-center font-bold"
        >
          CAPTURING MOMENTS
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="heading-font text-foreground/[0.06] text-[12vw] md:text-[11vw] lg:text-[10vw] leading-[0.85] tracking-tight text-center font-bold"
        >
          THAT LAST
        </motion.div>
      </div>

      {/* Photo Cards */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -80, y: -60, rotate: -12 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="absolute top-[8%] left-[18%] sm:left-[20%]"
        >
          <div className="bg-card p-2 border border-border w-[140px] h-[190px] sm:w-[200px] sm:h-[270px] md:w-[260px] md:h-[340px]">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"
                alt="Portrait 1"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 140px, (max-width: 768px) 200px, 260px"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80, rotate: 8 }}
          animate={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="absolute z-20 top-[12%]"
        >
          <div className="bg-card p-2 border border-border w-[160px] h-[220px] sm:w-[240px] sm:h-[330px] md:w-[320px] md:h-[440px]">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80"
                alt="Portrait 2"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 240px, 320px"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80, y: 60, rotate: 10 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 5 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="absolute z-10 bottom-[8%] right-[15%] sm:right-[18%]"
        >
          <div className="bg-card p-2 border border-border w-[130px] h-[180px] sm:w-[180px] sm:h-[250px] md:w-[240px] md:h-[320px]">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80"
                alt="Portrait 3"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 130px, (max-width: 768px) 180px, 240px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Text Labels */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute top-6 left-5 sm:top-8 sm:left-8 md:top-12 md:left-10 z-30"
      >
        <p className="label-text-bold text-muted">Where Every Click</p>
        <p className="label-text-bold text-muted">TELLS A STORY</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute top-6 right-5 sm:top-8 sm:right-8 md:top-12 md:right-10 z-30"
      >
        <p className="label-text text-muted">2025</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute top-1/3 right-4 sm:right-8 md:right-12 z-30 text-right hidden sm:block"
      >
        <p className="label-text text-muted">Memories</p>
        <p className="label-text-bold text-muted">LIGHT MODE, DARK MODE</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute top-[45%] left-4 sm:left-8 md:left-10 z-30 hidden md:block"
      >
        <p className="label-text text-muted leading-relaxed">
          Let us bring your vision to life.
          <br />
          Our expert photographers
          <br />
          specialize
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-10 z-30 text-right max-w-[160px] sm:max-w-[200px]"
      >
        <p className="label-text text-muted leading-relaxed">
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
