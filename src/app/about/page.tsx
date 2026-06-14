"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const milestones = [
  { year: "2015", title: "First Camera", desc: "Began the journey." },
  { year: "2017", title: "First Exhibition", desc: "Solo show at a local gallery." },
  { year: "2019", title: "Awards", desc: "International recognition." },
  { year: "2022", title: "Studio", desc: "Opened my own space." },
];

const values = [
  { title: "Detail", desc: "Every frame composed with care." },
  { title: "Passion", desc: "Photography as a way of life." },
  { title: "Quality", desc: "Uncompromising standards." },
  { title: "Vision", desc: "Seeing beyond the obvious." },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-3">
              About
            </span>
            <h1 className="font-[var(--font-syne)] text-4xl md:text-5xl font-extrabold tracking-[-0.04em] mb-8">
              The Artist
            </h1>
            <div className="space-y-4 text-sm text-muted leading-relaxed">
              <p>
                San Francisco based photographer with 10+ years of experience in
                landscape, portrait, and street photography.
              </p>
              <p>
                Featured in publications worldwide. Every photograph should tell a
                story and evoke emotion.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] mb-32">
          {values.map((v) => (
            <div key={v.title} className="bg-[#0B0B0B] p-8">
              <h3 className="font-[var(--font-syne)] font-bold text-sm mb-2">
                {v.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-[1px] bg-white/[0.06]" />
          <div className="space-y-16">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex items-center gap-8 ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}
                >
                  <span className="text-primary text-xs font-bold">{m.year}</span>
                  <h3 className="font-[var(--font-syne)] font-bold text-sm mt-1">
                    {m.title}
                  </h3>
                  <p className="text-xs text-muted mt-1">{m.desc}</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-primary relative z-10" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
