import { DIDATTICA } from "@/lib/data";

export default function TeachingSection() {
  return (
    <section
      id="didattica"
      className="scroll-mt-28 border-t border-brand-200 py-12 dark:border-brand-800"
    >
      <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">
        Didattica
      </h2>

      <div className="mt-4 divide-y divide-brand-200 border-t border-brand-200 dark:divide-brand-800 dark:border-brand-800">
        <div className="py-3">
          <p className="text-sm font-semibold uppercase tracking-wide">
            Frequenza obbligatoria
          </p>
          <p className="mt-1 text-sm text-foreground/70">
            {DIDATTICA.frequenzaObbligatoria}
          </p>
        </div>
        <div className="py-3">
          <p className="text-sm font-semibold uppercase tracking-wide">
            Lezioni
          </p>
          <p className="mt-1 text-sm text-foreground/70">{DIDATTICA.lezioni}</p>
        </div>
        <div className="py-3">
          <p className="text-sm font-semibold uppercase tracking-wide">
            Verifiche in itinere
          </p>
          <p className="mt-1 text-sm text-foreground/70">
            {DIDATTICA.verificheInItinere}
          </p>
        </div>
      </div>
    </section>
  );
}
