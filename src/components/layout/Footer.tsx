import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link
          href="/"
          className="font-[var(--font-syne)] font-bold text-xs tracking-[0.15em] uppercase"
        >
          Photo<span className="text-primary">.</span>
        </Link>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.15em] text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-[10px] text-muted/50 tracking-wider">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
