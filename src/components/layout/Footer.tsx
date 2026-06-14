import Link from "next/link";
import { Camera, Globe, ExternalLink, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Camera className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold">
                <span className="text-primary">Photo</span>Gallery
              </span>
            </Link>
            <p className="text-muted text-sm">
              Capturing life&apos;s beautiful moments through the art of photography.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-surface-light rounded-full hover:bg-primary hover:text-background transition-all"
                aria-label="Website"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-surface-light rounded-full hover:bg-primary hover:text-background transition-all"
                aria-label="Portfolio"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-surface-light rounded-full hover:bg-primary hover:text-background transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} PhotoGallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
