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
    <section
      ref={sectionRef}
      className="py-24 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About the <span className="text-primary">Artist</span>
            </h2>
            <p className="text-muted mb-6 leading-relaxed">
              With over a decade of experience in professional photography,
              I specialize in capturing the raw beauty of landscapes, the
              authenticity of portraits, and the energy of street life.
            </p>
            <p className="text-muted mb-8 leading-relaxed">
              My approach combines technical precision with artistic vision,
              creating images that not only document moments but evoke emotions.
              Every photograph is a story waiting to be told.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-full font-medium hover:bg-primary-light transition-colors"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="p-6 bg-background rounded-xl text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div
                  className="stat-number text-3xl font-bold mb-1"
                  data-value={stat.value}
                >
                  0
                </div>
                <div className="text-muted text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
