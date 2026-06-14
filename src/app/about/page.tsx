"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <h1 className="heading-font text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-[-0.04em]">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-muted max-w-lg mx-auto">Coming soon.</p>
        </div>
      </div>
    </div>
  );
}
