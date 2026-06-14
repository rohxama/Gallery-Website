"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-20">
        <Link href="/" className="heading-font text-sm font-light tracking-[0.3em] uppercase text-foreground">
          Gallery
        </Link>

        <Link
          href="/contact"
          className="px-6 py-2.5 text-xs font-medium tracking-widest uppercase border border-primary/40 text-primary rounded-none hover:bg-primary hover:text-background transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(200,169,107,0.15)]"
        >
          Contact
        </Link>
      </div>
    </motion.header>
  );
}
