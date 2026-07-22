"use client";

import Wizard, { type WizardStep } from "./Wizard";
import Button from "./Button";

const inputClass =
  "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none";

const steps: WizardStep[] = [
  {
    label: "Kriterijumi",
    render: ({ onNext }) => (
      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          onNext();
        }}
      >
        <h2 className="font-serif text-2xl font-semibold text-navy">
          Tražite parcelu za svoj sledeći projekat?
        </h2>
        <p className="text-ink/70">
          Pronalazimo tačno ono što odgovara vašim potrebama. Recite nam
          osnovne kriterijume.
        </p>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">
            Željeni koeficijent izgrađenosti
          </span>
          <input
            type="text"
            required
            placeholder="npr. 1.2"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">
            Lokacija
          </span>
          <input
            type="text"
            required
            placeholder="Grad / opština"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">
            Dodatne napomene ili potrebe (opciono)
          </span>
          <textarea rows={3} className={inputClass} />
        </label>
        <Button type="submit" variant="primary" className="w-full">
          Dalje
        </Button>
      </form>
    ),
  },
  {
    label: "Kontakt",
    render: ({ onNext, onBack }) => (
      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          onNext();
        }}
      >
        <h2 className="font-serif text-2xl font-semibold text-navy">
          Ostavite kontakt
        </h2>
        <p className="text-ink/70">
          Javićemo vam se sa parcelama koje odgovaraju vašim kriterijumima.
        </p>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">
            Ime firme / ime i prezime
          </span>
          <input type="text" required className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">
            Broj telefona
          </span>
          <input type="tel" required className={inputClass} />
        </label>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={onBack} className="flex-1">
            Nazad
          </Button>
          <Button type="submit" variant="primary" className="flex-1">
            Pošalji upit
          </Button>
        </div>
      </form>
    ),
  },
];

const thankYou = (
  <div className="rounded-2xl bg-white p-10 text-center">
    <p className="font-serif text-2xl font-semibold text-navy">Hvala vam!</p>
    <p className="mt-3 text-ink/70">
      Vaš upit je primljen. Javićemo vam se čim pronađemo parcelu koja
      odgovara vašim kriterijumima.
    </p>
  </div>
);

export default function InvestorWizard() {
  return <Wizard steps={steps} thankYou={thankYou} />;
}
