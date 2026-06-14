"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, ExternalLink } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.4em] text-primary mb-6">
            Contact
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="heading-font text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-[-0.04em]"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Ready to capture your special moments? Let&apos;s discuss your
            project and create something extraordinary together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-card p-8 rounded-2xl border border-white/[0.05]">
              <h3 className="heading-font font-bold text-lg mb-8">
                Contact Info
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-surface rounded-xl border border-white/[0.08]">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <p className="font-medium text-sm">
                      hello@photogallery.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-4 bg-surface rounded-xl border border-white/[0.08]">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <p className="font-medium text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-4 bg-surface rounded-xl border border-white/[0.08]">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-widest mb-1">
                      Location
                    </p>
                    <p className="font-medium text-sm">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-white/[0.05]">
              <h3 className="heading-font font-bold text-lg mb-6">Follow</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-4 border border-white/[0.08] rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label="Website"
                >
                  <Globe className="w-5 h-5 text-muted" />
                </a>
                <a
                  href="#"
                  className="p-4 border border-white/[0.08] rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label="Portfolio"
                >
                  <ExternalLink className="w-5 h-5 text-muted" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form className="bg-card p-10 rounded-2xl border border-white/[0.05] space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-3"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-surface border border-white/[0.08] rounded-xl focus:outline-none focus:border-primary/50 transition-colors text-sm placeholder:text-muted/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-3"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-surface border border-white/[0.08] rounded-xl focus:outline-none focus:border-primary/50 transition-colors text-sm placeholder:text-muted/40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-3"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Inquiry"
                  className="w-full px-5 py-4 bg-surface border border-white/[0.08] rounded-xl focus:outline-none focus:border-primary/50 transition-colors text-sm placeholder:text-muted/40"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 bg-surface border border-white/[0.08] rounded-xl focus:outline-none focus:border-primary/50 transition-colors resize-none text-sm placeholder:text-muted/40"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
