"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="heading-font text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold mb-6 tracking-[-0.04em] leading-[0.95]"
        >
          Photo<span className="text-gradient">Gallery</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-muted max-w-lg mx-auto"
        >
          Coming soon.
        </motion.p>
      </div>
    </section>
  );
}
