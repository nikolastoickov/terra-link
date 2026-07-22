import type { Metadata } from "next";
import LandOwnerWizard from "@/components/LandOwnerWizard";

export const metadata: Metadata = {
  title: "Besplatna procena zemljišta — Terra Link",
  description:
    "Besplatno analiziramo vašu parcelu i pronalazimo najbolju ponudu investitora. Bez obaveza, bez rizika.",
};

export default function ProcenaZemljistaPage() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-xl px-6 py-16 sm:py-24">
        <LandOwnerWizard />
      </div>
    </section>
  );
}
