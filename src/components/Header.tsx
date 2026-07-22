import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Terra Link — početna">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-navy sm:flex">
          <Link href="/" className="hover:text-brown">
            Početna
          </Link>
          <Link href="/procena-zemljista" className="hover:text-brown">
            Za vlasnike zemljišta
          </Link>
          <Link href="/investitori" className="hover:text-brown">
            Za investitore
          </Link>
          <Link
            href="/procena-zemljista"
            className="rounded-full bg-gold px-5 py-2.5 text-navy transition hover:brightness-95"
          >
            Procenite zemljište besplatno
          </Link>
        </nav>
        <Link
          href="/procena-zemljista"
          className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy sm:hidden"
        >
          Procena
        </Link>
      </div>
    </header>
  );
}
