"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-6 py-20">
        <h2 className="text-center font-serif text-3xl font-semibold text-navy sm:text-4xl">
          Kontakt
        </h2>
        <p className="mt-3 text-center text-ink/70">
          Pokrivamo celu Srbiju. Javite nam se i odgovaramo u najkraćem roku.
        </p>

        {sent ? (
          <div className="mt-10 rounded-2xl bg-cream p-8 text-center">
            <p className="font-serif text-xl font-semibold text-navy">
              Hvala vam!
            </p>
            <p className="mt-2 text-ink/70">
              Vaša poruka je zaprimljena — kontaktiraćemo vas uskoro.
            </p>
          </div>
        ) : (
          <form
            className="mt-10 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-navy">
                Ime i prezime
              </span>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-navy/15 bg-cream px-4 py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-navy">
                Telefon ili email
              </span>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-navy/15 bg-cream px-4 py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-navy">
                Poruka
              </span>
              <textarea
                required
                rows={4}
                className="w-full rounded-xl border border-navy/15 bg-cream px-4 py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
              />
            </label>
            <Button type="submit" variant="primary" className="w-full">
              Pošalji poruku
            </Button>
          </form>
        )}

        <div className="mt-8 flex flex-col items-center gap-1 text-sm text-ink/60">
          <a href="tel:+381641112104" className="hover:text-navy">
            064 111 21 04
          </a>
          <a href="mailto:kontakt@terralink.rs" className="hover:text-navy">
            kontakt@terralink.rs
          </a>
        </div>
      </div>
    </section>
  );
}
