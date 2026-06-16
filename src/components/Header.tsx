"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:h-24">
        <Link
          href="/"
          className="shrink-0 text-base font-bold tracking-tight text-white md:text-lg"
        >
          Brand<span className="text-white/60">.</span>
        </Link>

        <nav className="hidden min-w-0 items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-xs font-medium uppercase tracking-widest text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 md:flex">
          <Link
            href="/login"
            className="whitespace-nowrap text-xs font-medium text-white/80 transition-colors hover:text-white"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-full border border-white/30 px-5 py-2 whitespace-nowrap text-xs font-medium text-white transition-all hover:bg-white hover:text-[#000]"
          >
            Sign up
          </Link>
        </div>

        <button
          type="button"
          className="flex shrink-0 flex-col justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${
              menuOpen ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${
              menuOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="w-full bg-[#000]/95 backdrop-blur-sm md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-full py-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex w-full flex-col gap-3 border-t border-white/20 pt-4">
              <Link
                href="/login"
                className="w-full text-sm text-white/80 transition-colors hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="w-full rounded-full border border-white/30 px-5 py-2 text-center text-sm font-medium text-white transition-all hover:bg-white hover:text-[#000]"
                onClick={() => setMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
