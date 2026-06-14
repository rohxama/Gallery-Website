"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-3">
            Contact
          </span>
          <h1 className="font-[var(--font-syne)] text-4xl md:text-5xl font-extrabold tracking-[-0.04em]">
            Get in Touch
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <Mail size={16} className="text-primary" />
              <span className="text-sm text-muted">hello@photo.gallery</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={16} className="text-primary" />
              <span className="text-sm text-muted">+1 (555) 000-0000</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm text-muted">San Francisco, CA</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-white/[0.08] py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted/40"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-white/[0.08] py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted/40"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full bg-transparent border-b border-white/[0.08] py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-muted/40"
              />
              <button
                type="submit"
                className="text-[11px] uppercase tracking-[0.2em] text-primary border border-primary/30 px-8 py-3 rounded-full hover:bg-primary hover:text-background transition-all duration-300"
              >
                Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
