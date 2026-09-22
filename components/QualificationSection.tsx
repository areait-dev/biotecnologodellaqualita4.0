import { TITOLO_DI_STUDIO } from "@/lib/data";

export default function QualificationSection() {
  return (
    <section
      id="titolo-di-studio"
      className="scroll-mt-28 border-t border-brand-200 py-12 dark:border-brand-800"
    >
      <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">
        Titolo di studio
      </h2>
      <div className="mt-4 space-y-3 text-sm text-foreground/75">
        <p>{TITOLO_DI_STUDIO.titolo}</p>
        <p>{TITOLO_DI_STUDIO.figura}</p>
      </div>
    </section>
  );
}
