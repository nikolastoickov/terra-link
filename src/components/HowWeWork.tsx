const steps = [
  {
    number: "I",
    title: "Prijavite parcelu",
    description: "Ostavite lokaciju vašeg zemljišta — traje manje od minuta.",
  },
  {
    number: "II",
    title: "Analiziramo i uparujemo",
    description:
      "Proveravamo urbanistički potencijal i upoređujemo sa investitorima iz naše mreže.",
  },
  {
    number: "III",
    title: "Pregovaramo najbolju ponudu",
    description: "Vodimo pregovore u vaše ime, bez ikakvih obaveza sa vaše strane.",
  },
  {
    number: "IV",
    title: "Vi birate",
    description: "Dobijate uporedive ponude i sami odlučujete da li i sa kim nastavljate.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-6 py-20">
        <h2 className="text-center font-serif text-3xl font-semibold text-navy sm:text-4xl">
          Kako radimo
        </h2>
        <div className="mt-14">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex flex-col items-center">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold font-serif text-lg font-semibold text-navy">
                  {step.number}
                </span>
                {index < steps.length - 1 && (
                  <span className="mt-2 w-px flex-1 bg-navy/15" />
                )}
              </div>
              <div className={index < steps.length - 1 ? "pb-10" : ""}>
                <h3 className="pt-2 font-serif text-xl font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
