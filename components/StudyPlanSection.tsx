"use client";

import { useState } from "react";
import { DIDATTICA, MODULI_PIANO_STUDI, ORE_STRUTTURA } from "@/lib/data";

type Argomento = { nome: string; ore: number };

function AccordionItem({
  title,
  argomenti,
}: {
  title: string;
  argomenti: Argomento[];
}) {
  const [open, setOpen] = useState(false);
  const totaleOre = argomenti.reduce((sum, a) => sum + a.ore, 0);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-3 text-left text-sm font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-300"
      >
        <span>
          {title} <span className="text-foreground/40">({totaleOre} ore)</span>
        </span>
        <span aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>
      {open && (
        <ul className="space-y-2 pb-4 text-sm text-foreground/70">
          {argomenti.map((a) => (
            <li key={a.nome} className="flex items-start justify-between gap-4">
              <span>{a.nome}</span>
              <span className="shrink-0 font-semibold text-brand-700 dark:text-brand-300">
                {a.ore} ore
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function StudyPlanSection() {
  return (
    <section
      id="piano-di-studi"
      className="scroll-mt-28 border-t border-brand-200 py-12 dark:border-brand-800"
    >
      <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">
        Il piano di studi
      </h2>
      <p className="mt-3 text-sm text-foreground/70">
        {DIDATTICA.pianoStudiIntro}
      </p>
      <p className="mt-3 text-sm text-foreground/70">
        {DIDATTICA.pianoStudiOrePresenza}
        <br />
        {DIDATTICA.pianoStudiNote}
      </p>

      <div className="mt-6 flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide">
            Ore totali
          </span>
          <span className="rounded-sm bg-brand-900 px-3 py-1 text-sm font-bold text-white">
            {ORE_STRUTTURA.totali.toLocaleString("it-IT")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide">
            Teoria in aula
          </span>
          <span className="rounded-sm bg-white border border-brand-200 px-3 py-1 text-sm font-bold text-brand-700 dark:border-brand-800">
            {ORE_STRUTTURA.teoriaAula}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide">
            Laboratori
          </span>
          <span className="rounded-sm bg-white border border-brand-200 px-3 py-1 text-sm font-bold text-brand-700 dark:border-brand-800">
            {ORE_STRUTTURA.laboratori}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide">
            Stage in azienda
          </span>
          <span className="rounded-sm bg-white border border-brand-200 px-3 py-1 text-sm font-bold text-brand-700 dark:border-brand-800">
            {ORE_STRUTTURA.stageAzienda.toLocaleString("it-IT")}
          </span>
        </div>
      </div>

      <div className="mt-6 divide-y divide-brand-200 border-b border-brand-200 dark:divide-brand-800 dark:border-brand-800">
        {MODULI_PIANO_STUDI.map((modulo) => (
          <AccordionItem
            key={modulo.titolo}
            title={modulo.titolo}
            argomenti={modulo.argomenti}
          />
        ))}
      </div>
    </section>
  );
}
