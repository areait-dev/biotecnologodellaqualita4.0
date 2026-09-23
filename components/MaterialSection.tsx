import { MATERIALE_DIDATTICO } from "@/lib/data";

export default function MaterialSection() {
  return (
    <section
      id="materiale-didattico"
      className="scroll-mt-28 border-t border-brand-200 py-12 dark:border-brand-800"
    >
      <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">
        Materiale didattico
      </h2>
      <p className="mt-3 text-sm text-foreground/75">
        {MATERIALE_DIDATTICO}
      </p>
    </section>
  );
}
