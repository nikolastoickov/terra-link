import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <Logo variant="light" />
          <p className="max-w-xs text-sm text-cream/70">
            Povezujemo vlasnike zemljišta sa proverenim investitorima. Pokrivamo celu Srbiju.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-cream/80">
          <span className="font-serif text-base text-cream">Kontakt</span>
          <a href="tel:+381641112104" className="hover:text-gold">
            064 111 21 04
          </a>
          <a href="mailto:kontakt@terralink.rs" className="hover:text-gold">
            kontakt@terralink.rs
          </a>
          <span className="text-cream/70">Radno vreme: 08-23h</span>
        </div>
        <div className="flex flex-col gap-2 text-sm text-cream/80">
          <span className="font-serif text-base text-cream">Krenite odmah</span>
          <Link href="/procena-zemljista" className="hover:text-gold">
            Procenite svoje zemljište
          </Link>
          <Link href="/investitori" className="hover:text-gold">
            Tražim parcelu za investiciju
          </Link>
        </div>
      </div>
      <div className="border-t border-cream/10 px-6 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Terra Link. Sva prava zadržana.
      </div>
    </footer>
  );
}
