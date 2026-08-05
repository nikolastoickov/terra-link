import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/procena-zemljista", label: "Za vlasnike zemljišta" },
  { href: "/investitori", label: "Za investitore" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/80 shadow-sm shadow-navy/[0.03] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Terra Link — početna" className="shrink-0">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-navy sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-1 transition-colors hover:text-brown"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-gold transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
          <a
            href="tel:+381641112104"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-navy shadow-sm shadow-gold/40 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-gold/40 hover:brightness-95"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1.1l-2.2 2.1z" />
            </svg>
            Procenite zemljište besplatno
          </a>
        </nav>
        <a
          href="tel:+381641112104"
          className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy shadow-sm shadow-gold/40 transition active:scale-95 sm:hidden"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1.1l-2.2 2.1z" />
          </svg>
          Besplatna procena
        </a>
      </div>
    </header>
  );
}
