import { DOVE_LAVORA } from "@/lib/data";

export default function WorkplaceSection() {
  return (
    <section id="dove-lavora" className="scroll-mt-28 py-12">
      <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">
        Dove lavora
      </h2>
      <div className="mt-3 space-y-3 text-sm text-foreground/75">
        {DOVE_LAVORA.map((paragrafo, i) => (
          <p key={i}>{paragrafo}</p>
        ))}
      </div>
    </section>
  );
}
