"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Award, Heart, Eye } from "lucide-react";

const milestones = [
  {
    year: "2015",
    title: "Started the Journey",
    description: "Picked up my first DSLR camera and fell in love with photography.",
  },
  {
    year: "2017",
    title: "First Exhibition",
    description: "Held my first solo photography exhibition at a local gallery.",
  },
  {
    year: "2019",
    title: "International Recognition",
    description: "Won multiple international photography awards.",
  },
  {
    year: "2022",
    title: "Studio Launch",
    description: "Opened my own professional photography studio.",
  },
];

const values = [
  {
    icon: Eye,
    title: "Attention to Detail",
    description: "Every composition is carefully crafted to capture the perfect moment.",
  },
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "Photography is not just work—it's a lifelong passion and art form.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality in every photograph.",
  },
  {
    icon: Camera,
    title: "Creativity",
    description: "Pushing boundaries and exploring new perspectives constantly.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.4em] text-primary mb-6">
              About
            </span>
            <h1 className="heading-font text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 tracking-[-0.04em]">
              The <span className="text-gradient">Artist</span>
            </h1>
            <p className="text-muted mb-6 leading-relaxed text-lg">
              I&apos;m a professional photographer based in San Francisco with a
              passion for capturing the world&apos;s beauty through my lens. With
              over 10 years of experience, I specialize in landscape, portrait,
              and street photography.
            </p>
            <p className="text-muted mb-6 leading-relaxed">
              My work has been featured in numerous publications and exhibitions
              worldwide. I believe that every photograph should tell a story and
              evoke emotion, which drives me to constantly push creative
              boundaries.
            </p>
            <p className="text-muted leading-relaxed">
              When I&apos;m not behind the camera, you can find me exploring new
              locations, teaching photography workshops, or spending time in the
              darkroom developing film.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.08]">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Photographer portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-primary to-accent text-background p-8 rounded-2xl">
              <div className="heading-font text-4xl font-bold">10+</div>
              <div className="text-xs uppercase tracking-widest opacity-80">
                Years Experience
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="heading-font text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-16 tracking-[-0.03em]"
          >
            Core <span className="text-gradient">Values</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-card rounded-2xl text-center border border-white/[0.05] hover:border-primary/20 transition-colors duration-500"
              >
                <value.icon className="w-10 h-10 text-primary mx-auto mb-5" />
                <h3 className="heading-font font-bold mb-3 text-lg">
                  {value.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="heading-font text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-16 tracking-[-0.03em]"
          >
            Creative <span className="text-gradient">Journey</span>
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={`flex items-center gap-10 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <div className="bg-card p-8 rounded-2xl inline-block border border-white/[0.05] hover:border-primary/20 transition-colors duration-500">
                      <span className="text-gradient heading-font font-bold text-xl">
                        {milestone.year}
                      </span>
                      <h3 className="heading-font font-bold mt-3 text-lg">
                        {milestone.title}
                      </h3>
                      <p className="text-muted text-sm mt-2">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full relative z-10 shadow-lg shadow-primary/20" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
