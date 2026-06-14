"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
      <div className="text-center mb-20">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.4em] text-primary mb-6">
          Contact
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="heading-font text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-[-0.03em]"
        >
          Get in <span className="text-gradient">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted max-w-2xl mx-auto leading-relaxed"
        >
          Have a project in mind? Let&apos;s create something beautiful
          together.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-10"
        >
          <div className="flex items-start gap-5">
            <div className="p-4 bg-card rounded-xl border border-white/[0.05]">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-foreground">Email</h3>
              <p className="text-muted text-sm">hello@photogallery.com</p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="p-4 bg-card rounded-xl border border-white/[0.05]">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
              <p className="text-muted text-sm">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="p-4 bg-card rounded-xl border border-white/[0.05]">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-foreground">Location</h3>
              <p className="text-muted text-sm">San Francisco, CA</p>
            </div>
          </div>

          <Link href="/contact" className="btn-primary inline-flex">
            Send a Message
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="bg-card p-10 rounded-2xl border border-white/[0.05]"
        >
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 bg-surface border border-white/[0.08] rounded-xl focus:outline-none focus:border-primary/50 transition-colors text-sm placeholder:text-muted/50"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-4 bg-surface border border-white/[0.08] rounded-xl focus:outline-none focus:border-primary/50 transition-colors text-sm placeholder:text-muted/50"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-5 py-4 bg-surface border border-white/[0.08] rounded-xl focus:outline-none focus:border-primary/50 transition-colors resize-none text-sm placeholder:text-muted/50"
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
