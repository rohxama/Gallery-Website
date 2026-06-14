import Link from "next/link";
import { Aperture, Globe, ExternalLink, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/[0.08]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Aperture className="w-6 h-6 text-primary" />
              <span className="heading-font text-lg font-bold tracking-wider uppercase">
                <span className="text-gradient">Photo</span>
                <span className="text-foreground/90">Gallery</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              Capturing life&apos;s beautiful moments through the art of
              premium photography.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground mb-6">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-3 border border-white/[0.08] rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Website"
              >
                <Globe className="w-5 h-5 text-muted hover:text-primary" />
              </a>
              <a
                href="#"
                className="p-3 border border-white/[0.08] rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Portfolio"
              >
                <ExternalLink className="w-5 h-5 text-muted hover:text-primary" />
              </a>
              <a
                href="#"
                className="p-3 border border-white/[0.08] rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs tracking-wider">
            &copy; {new Date().getFullYear()} PhotoGallery. All rights reserved.
          </p>
          <p className="text-muted/50 text-xs tracking-wider">
            Crafted with precision &amp; passion
          </p>
        </div>
      </div>
    </footer>
  );
}
