"use client";

import Wizard, { type WizardStep } from "./Wizard";
import Button from "./Button";

const inputClass =
  "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none";

const steps: WizardStep[] = [
  {
    label: "Lokacija",
    render: ({ onNext }) => (
      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          onNext();
        }}
      >
        <h2 className="font-serif text-2xl font-semibold text-navy">
          Gde se nalazi vaše zemljište?
        </h2>
        <p className="text-ink/70">
          Unesite tačnu lokaciju svog placa — to je sve što nam treba za
          početak.
        </p>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">
            Tačna lokacija placa
          </span>
          <input
            type="text"
            required
            placeholder="Grad, opština, naselje, broj katastarske parcele..."
            className={inputClass}
          />
        </label>
        <Button type="submit" variant="primary" className="w-full">
          Dalje
        </Button>
      </form>
    ),
  },
  {
    label: "Analiza",
    render: ({ onNext, onBack }) => (
      <div className="space-y-5">
        <h2 className="font-serif text-2xl font-semibold text-navy">
          Radimo besplatnu detaljnu analizu
        </h2>
        <p className="text-ink/70">
          Proveravamo urbanistički plan i izračunavamo koliko kvadrata se
          maksimalno može izgraditi na vašoj parceli, uz uvid u najbolje
          ponude koje su vlasnici u istom kvartu već dobili — potpuno
          transparentno.
        </p>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={onBack} className="flex-1">
            Nazad
          </Button>
          <Button variant="primary" onClick={onNext} className="flex-1">
            Dalje
          </Button>
        </div>
      </div>
    ),
  },
  {
    label: "Bez rizika",
    render: ({ onNext, onBack }) => (
      <div className="space-y-5">
        <h2 className="font-serif text-2xl font-semibold text-navy">
          100% besplatno za vas
        </h2>
        <p className="text-ink/70">
          Proviziju za našu uslugu plaća investitor, nikada vlasnik zemljišta.
          Nemate nikakve obaveze — sami birate da li i sa kim nastavljate
          dalje.
        </p>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={onBack} className="flex-1">
            Nazad
          </Button>
          <Button variant="primary" onClick={onNext} className="flex-1">
            Dalje
          </Button>
        </div>
      </div>
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
          Poslednji korak
        </h2>
        <p className="text-ink/70">
          Ostavite kontakt i javićemo vam se u kratkom roku sa besplatnom
          procenom.
        </p>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">
            Ime i prezime
          </span>
          <input type="text" required className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy">
            Telefon ili email
          </span>
          <input type="text" required className={inputClass} />
        </label>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={onBack} className="flex-1">
            Nazad
          </Button>
          <Button type="submit" variant="primary" className="flex-1">
            Pošalji
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
      Vaši podaci su primljeni. Naš tim će vas kontaktirati uskoro sa
      besplatnom procenom vašeg zemljišta.
    </p>
  </div>
);

export default function LandOwnerWizard() {
  return <Wizard steps={steps} thankYou={thankYou} />;
}
