import Button from "./Button";

export default function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
        <h1 className="font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl md:text-6xl">
          Ne prihvatajte prvu ponudu koju dobijete.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/80 sm:text-xl">
          Sarađujemo sa 20+ proverenih investitora — besplatno analiziramo vašu
          parcelu i pronalazimo najbolju moguću opciju.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/procena-zemljista" variant="primary">
            Procenite svoje zemljište
          </Button>
          <Button href="/investitori" variant="secondary">
            Tražim parcelu za investiciju
          </Button>
        </div>
      </div>
    </section>
  );
}
