import LeadForm from "@/components/LeadForm";
import { POSTI_DISPONIBILI } from "@/lib/data";

export default function CandidateSection() {
  return (
    <section id="modulo-candidatura" className="scroll-mt-28 py-12">
      <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">Modulo di candidatura</h2>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-400">
        Solo {POSTI_DISPONIBILI} posti disponibili per questa edizione
      </p>
      <p className="mt-3 text-foreground/70">
        Lasciaci i tuoi contatti: il team Alètheia ti ricontatterà per
        informazioni sull&apos;edizione di Vittoria (RG) del percorso
        Biotecnologo della Qualità 4.0.
      </p>

      <div className="mt-6 rounded-sm border border-brand-200 p-6 dark:border-brand-800">
        <LeadForm />
      </div>
    </section>
  );
}
