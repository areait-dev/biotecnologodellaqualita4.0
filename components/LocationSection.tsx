import { CONTATTI_ALETHEIA, SEDE_CORSO } from "@/lib/data";

export default function LocationSection() {
  return (
    <section
      id="sede-del-corso"
      className="scroll-mt-28 border-t border-brand-200 py-12 dark:border-brand-800"
    >
      <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">
        Sede del corso
      </h2>
      <div className="mt-3 space-y-3 text-sm text-foreground/75">
        <p>{SEDE_CORSO.note}</p>
      </div>

      <div className="mt-6 max-w-xl rounded-sm border border-brand-200 p-5 dark:border-brand-800">
        <p className="text-sm font-semibold uppercase tracking-wide">
          {SEDE_CORSO.nome}
        </p>
        <p className="mt-1 text-sm text-foreground/75">{SEDE_CORSO.indirizzo}</p>
        <p className="mt-3 text-sm text-foreground/75">
          {CONTATTI_ALETHEIA.orari}
        </p>
      </div>

      <div className="mt-6 max-w-xl overflow-hidden rounded-sm border border-brand-200 dark:border-brand-800">
        <iframe
          title="Mappa sede del corso - Promotergroup"
          src="https://www.google.com/maps?q=37.0161607,14.5042447(Promotergroup)&z=17&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
