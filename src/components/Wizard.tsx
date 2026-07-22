"use client";

import { useState, type ReactNode } from "react";

export type WizardStepProps = {
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
};

export type WizardStep = {
  label: string;
  render: (props: WizardStepProps) => ReactNode;
};

type WizardProps = {
  steps: WizardStep[];
  thankYou: ReactNode;
};

export default function Wizard({ steps, thankYou }: WizardProps) {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  const total = steps.length;

  function goNext() {
    if (index === total - 1) {
      setDone(true);
    } else {
      setIndex((i) => Math.min(i + 1, total - 1));
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
      {step.render({ onNext: goNext, onBack: goBack, isFirst: index === 0 })}
    </div>
  );
}
