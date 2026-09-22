import { POSTI_DISPONIBILI, REQUISITI_ACCESSO } from "@/lib/data";

export default function AccessSection() {
  return (
    <section
      id="come-si-accede"
      className="scroll-mt-28 border-t border-brand-200 py-12 dark:border-brand-800"
    >
      <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">
        Come si accede
      </h2>
      <div className="mt-3 space-y-3 text-sm text-foreground/75">
        <p>{REQUISITI_ACCESSO.titoloRichiesto}</p>
        <p>{REQUISITI_ACCESSO.candidature}</p>
      </div>

      <div className="mt-6 inline-flex items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide">
          Posti disponibili
        </span>
        <span className="rounded-sm bg-white border border-brand-200 px-3 py-1 text-sm font-bold text-brand-700 dark:border-brand-800">
          {POSTI_DISPONIBILI}
        </span>
      </div>
    </section>
  );
}
