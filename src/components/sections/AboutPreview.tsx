"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Award, Users, Coffee } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Camera, label: "Photos Taken", value: "2,500+" },
  { icon: Award, label: "Awards Won", value: "15" },
  { icon: Users, label: "Happy Clients", value: "200+" },
  { icon: Coffee, label: "Cups of Coffee", value: "1,000+" },
];

export function AboutPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (sectionRef.current) {
      const counters = sectionRef.current.querySelectorAll(".stat-number");
      counters.forEach((counter) => {
        gsap.fromTo(
          counter,
          { textContent: "0" },
          {
            textContent: counter.getAttribute("data-value"),
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: counter,
              start: "top 80%",
            },
            snap: { textContent: 1 },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.4em] text-primary mb-6">
              About
            </span>
            <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-[-0.03em]">
              The <span className="text-gradient">Artist</span>
            </h2>
            <p className="text-muted mb-6 leading-relaxed text-lg">
              With over a decade of experience in professional photography, I
              specialize in capturing the raw beauty of landscapes, the
              authenticity of portraits, and the energy of street life.
            </p>
            <p className="text-muted mb-10 leading-relaxed">
              My approach combines technical precision with artistic vision,
              creating images that not only document moments but evoke deep
              emotions. Every photograph is a story waiting to be told.
            </p>
            <a href="/about" className="btn-primary">
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="p-8 bg-card rounded-2xl text-center border border-white/[0.05] hover:border-primary/20 transition-colors duration-500"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div
                  className="stat-number heading-font text-3xl font-bold mb-2 text-gradient"
                  data-value={stat.value}
                >
                  0
                </div>
                <div className="text-muted text-xs uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
