"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Projects", value: "120+" },
  { label: "Awards", value: "15" },
  { label: "Clients", value: "80+" },
  { label: "Years", value: "10" },
];

export function AboutPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!ref.current) return;
    const counters = ref.current.querySelectorAll(".num");
    counters.forEach((c) => {
      gsap.fromTo(
        c,
        { textContent: "0" },
        {
          textContent: c.getAttribute("data-val"),
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: { trigger: c, start: "top 85%" },
          snap: { textContent: 1 },
        }
      );
    });
  }, []);

  return (
    <section ref={ref} className="py-32 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-3">
              About
            </span>
            <h2 className="font-[var(--font-syne)] text-3xl md:text-4xl font-extrabold tracking-[-0.03em] mb-8">
              The Artist
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              A decade of capturing light, form, and emotion through the lens.
              Specializing in landscape, portrait, and architectural photography.
            </p>
            <Link
              href="/about"
              className="text-[11px] uppercase tracking-[0.2em] text-primary hover:opacity-70 transition-opacity"
            >
              More &rarr;
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-px bg-white/[0.06]"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#0B0B0B] p-8 text-center">
                <div
                  className="num font-[var(--font-syne)] text-3xl font-bold text-primary mb-1"
                  data-val={stat.value}
                >
                  0
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
