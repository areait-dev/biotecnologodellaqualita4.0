import Image from "next/image";
import { POSTI_DISPONIBILI } from "@/lib/data";

const BADGES = [
  { value: "2.000 ore", label: "durata totale del percorso" },
  { value: "1.000 ore", label: "di stage in azienda" },
  { value: "Vittoria (RG)", label: "sede del corso" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full border-b border-brand-100 bg-white py-16 dark:border-brand-900 dark:bg-background sm:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-brand-200 sm:h-36 sm:w-36">
            <Image
              src="/hero-biotecnologo-v2.jpg"
              alt="Biotecnologo della Qualità al lavoro con un tablet"
              fill
              sizes="144px"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-400">
              Posti limitati · Solo {POSTI_DISPONIBILI} posti disponibili
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold uppercase tracking-tight text-foreground sm:text-5xl">
              <span className="text-brand-600 dark:text-brand-300">
                Biotecnologo della Qualità
              </span>{" "}
              4.0
            </h1>
          </div>
        </div>

        <p className="mt-6 text-lg text-foreground/70">
          Diventa tecnico superiore per il sistema di qualità di prodotti e
          processi a base biotecnologica e chimico-industriali
        </p>

        <div className="mt-3">
          <span className="rounded-full bg-white border border-brand-200 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700 dark:border-brand-800">
            Livello EQF 5
          </span>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold uppercase tracking-tight text-brand-700 dark:text-brand-300">
            Ambito delle Biotecnologie
          </p>
          <p className="text-sm uppercase tracking-wide text-foreground/60">
            Biotecnologie Industriali e Ambientali
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-px overflow-hidden rounded-sm border border-brand-200 dark:border-brand-800 sm:inline-flex">
          {BADGES.map((badge) => (
            <div
              key={badge.value}
              className="min-w-[10rem] flex-1 border-brand-200 bg-brand-50/60 px-4 py-3 dark:border-brand-800 dark:bg-brand-900/30 sm:border-r sm:last:border-r-0"
            >
              <div className="text-xl font-bold text-brand-700 dark:text-brand-300">
                {badge.value}
              </div>
              <div className="text-xs uppercase tracking-wide text-foreground/60">
                {badge.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="#modulo-candidatura"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            Richiedi informazioni
          </a>
        </div>
      </div>
    </section>
  );
}
