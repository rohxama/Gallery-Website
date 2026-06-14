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
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h1>
            <p className="text-muted mb-6 leading-relaxed">
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
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Photographer portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-background p-6 rounded-xl">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </motion.div>
        </div>

        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            My <span className="text-primary">Values</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-surface rounded-xl text-center"
              >
                <value.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-muted text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            My <span className="text-primary">Journey</span>
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-white/10" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="bg-surface p-6 rounded-xl inline-block">
                      <span className="text-primary font-bold text-lg">{milestone.year}</span>
                      <h3 className="font-semibold mt-2">{milestone.title}</h3>
                      <p className="text-muted text-sm mt-1">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full relative z-10" />
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
