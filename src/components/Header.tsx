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
    <header className="relative z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0 text-lg font-semibold tracking-tight text-gray-900">
          Brand
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden min-w-0 items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <Link
            href="/login"
            className="whitespace-nowrap text-sm text-gray-600 transition-colors hover:text-gray-900"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-gray-900 px-5 py-2 whitespace-nowrap text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="flex shrink-0 flex-col justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-gray-900 transition-transform duration-200 ${
              menuOpen ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-gray-900 transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-gray-900 transition-transform duration-200 ${
              menuOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="w-full border-t border-gray-100 bg-white md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-full py-3 text-sm text-gray-500 transition-colors hover:text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex w-full flex-col gap-3 border-t border-gray-100 pt-4">
              <Link
                href="/login"
                className="w-full text-sm text-gray-600 transition-colors hover:text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="w-full rounded-full bg-gray-900 px-5 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-gray-700"
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
