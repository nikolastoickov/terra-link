"use client";

import { useState, type ReactNode } from "react";

export type WizardStepProps = {
  onNext: (fields?: Record<string, string>) => void;
  onBack: () => void;
  isFirst: boolean;
  submitting: boolean;
  error: string | null;
};

export type WizardStep = {
  label: string;
  render: (props: WizardStepProps) => ReactNode;
};

type WizardProps = {
  steps: WizardStep[];
  thankYou: ReactNode;
  formType: string;
};

export default function Wizard({ steps, thankYou, formType }: WizardProps) {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [data, setData] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = steps.length;

  async function goNext(fields?: Record<string, string>) {
    const merged = { ...data, ...fields };
    setData(merged);

    if (index !== total - 1) {
      setIndex((i) => Math.min(i + 1, total - 1));
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, fields: merged }),
      });
      if (!res.ok) throw new Error("Slanje nije uspelo");
      setDone(true);
    } catch {
      setError("Došlo je do greške. Pokušajte ponovo.");
    } finally {
      setSubmitting(false);
    }
  }

  function goBack() {
    setIndex((i) => Math.max(0, i - 1));
  }

  if (done) {
    return <div>{thankYou}</div>;
  }

  const step = steps[index];

  return (
    <div>
      <div className="mb-10">
        <div className="mb-2 flex justify-between text-xs font-semibold uppercase tracking-wide text-navy/60">
          <span>{step.label}</span>
          <span>
            Korak {index + 1} / {total}
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-navy/10">
          <div
            className="h-full rounded-full bg-gold transition-all duration-300"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
      </div>
      {step.render({
        onNext: goNext,
        onBack: goBack,
        isFirst: index === 0,
        submitting,
        error,
      })}
    </div>
  );
}
