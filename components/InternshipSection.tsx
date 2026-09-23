import { PERCENTUALE_ASSUNZIONE_STAGE } from "@/lib/data";

export default function InternshipSection() {
  return (
    <section
      id="stage-in-azienda"
      className="scroll-mt-28 border-t border-brand-200 py-12 dark:border-brand-800"
    >
      <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">
        Stage in azienda
      </h2>
      <p className="mt-3 text-sm text-foreground/70">
        L&apos;attività di stage/tirocinio viene effettuata nelle stesse
        aziende che hanno evidenziato il fabbisogno che ha condotto alla
        progettazione del percorso formativo.
      </p>

      <p className="mt-4 text-sm text-foreground/70">
        Nel <strong>{PERCENTUALE_ASSUNZIONE_STAGE}% dei casi</strong> i nostri
        studenti vengono assunti da aziende del settore entro un anno dal
        diploma.
      </p>
    </section>
  );
}
