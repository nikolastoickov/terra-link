import type { Metadata } from "next";
import InvestorWizard from "@/components/InvestorWizard";

export const metadata: Metadata = {
  title: "Za investitore — Terra Link",
  description:
    "Tražite parcelu za svoj sledeći stambeni projekat? Terra Link pronalazi parcele koje odgovaraju vašim kriterijumima širom Srbije.",
};

export default function InvestitoriPage() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-xl px-6 py-16 sm:py-24">
        <InvestorWizard />
      </div>
    </section>
  );
}
