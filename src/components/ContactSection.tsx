"use client";

import { useState } from "react";
import Button from "./Button";
import BookingCalendar from "./BookingCalendar";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <section id="kontakt" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center font-serif text-3xl font-semibold text-navy sm:text-4xl">
          Kontakt
        </h2>
        <p className="mt-3 text-center text-ink/70">
          Pokrivamo celu Srbiju. Javite nam se ili zakažite poziv u terminu
          koji vam odgovara.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h3 className="font-serif text-xl font-semibold text-navy">
              Pošaljite poruku
            </h3>

            {sent ? (
              <div className="mt-6 rounded-2xl bg-cream p-8 text-center">
                <p className="font-serif text-xl font-semibold text-navy">
                  Hvala vam!
                </p>
                <p className="mt-2 text-ink/70">
                  Vaša poruka je zaprimljena — kontaktiraćemo vas uskoro.
                </p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitting(true);
                  window.setTimeout(() => {
                    setSubmitting(false);
                    setSent(true);
                  }, 600);
                }}
              >
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-navy">
                    Ime i prezime
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Marko Marković"
                    className="w-full rounded-xl border border-navy/15 bg-cream px-4 py-3 text-ink placeholder:text-ink/40 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-navy">
                    Telefon ili email
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="064 111 21 04"
                    className="w-full rounded-xl border border-navy/15 bg-cream px-4 py-3 text-ink placeholder:text-ink/40 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-navy">
                    Poruka
                  </span>
                  <textarea
                    required
                    rows={4}
                    placeholder="Recite nam nešto o vašem zemljištu ili pitanju..."
                    className="w-full rounded-xl border border-navy/15 bg-cream px-4 py-3 text-ink placeholder:text-ink/40 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                </label>
                <Button
                  type="submit"
                  variant="primary"
                  className={`w-full ${submitting ? "opacity-70" : ""}`}
                >
                  {submitting ? "Slanje..." : "Pošalji poruku"}
                </Button>
              </form>
            )}

            <div className="mt-8 flex flex-col gap-1 text-sm text-ink/60">
              <a href="tel:+381641112104" className="hover:text-navy">
                064 111 21 04
              </a>
              <a href="mailto:kontakt@terralink.rs" className="hover:text-navy">
                kontakt@terralink.rs
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-navy">
              Zakažite poziv
            </h3>
            <div className="mt-6">
              <BookingCalendar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
