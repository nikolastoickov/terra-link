const stats = [
  { value: "20+", label: "proverenih investitora u mreži" },
  { value: "100%", label: "besplatno za vlasnike zemljišta" },
  { value: "Cela Srbija", label: "teritorija koju pokrivamo" },
];

export default function About() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-brown">
              O nama
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Znanje i mreža koje rade u vašu korist
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                Terra Link je nastao iz jednostavnog uverenja: vlasnici
                zemljišta retko imaju pristup istim informacijama kao
                investitori, pa prihvataju prvu ponudu koja im stigne — iako
                često nije ni blizu najbolje.
              </p>
              <p>
                Naš tim čine stručnjaci za urbanizam i nekretnine koji
                svakodnevno prate tržište građevinskog zemljišta u Srbiji i
                sarađuju sa proverenom mrežom investitora, kako bi svaka
                strana dobila transparentnu i poštenu ponudu.
              </p>
              <p>
                Radimo sa punom transparentnošću, bez skrivenih troškova za
                vlasnike zemljišta — naš interes je isti kao i vaš: da
                dobijete najbolju moguću ponudu.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm shadow-navy/[0.04] transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-navy/[0.06]"
              >
                <div className="font-serif text-3xl font-semibold text-navy">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-ink/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
