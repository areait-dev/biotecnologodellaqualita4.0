"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTATTI_ALETHEIA } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-800 bg-brand-700 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="#hero" className="flex items-center gap-3">
          <Image
            src="/aletheia-logo.png"
            alt="Alètheia"
            width={829}
            height={409}
            className="h-12 w-auto brightness-0 invert"
            priority
          />
        </Link>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${CONTATTI_ALETHEIA.telefono.replace(/\s/g, "")}`}
            onClick={() => trackEvent("phone_click", { source: "header" })}
            className="hidden text-sm text-white/80 hover:text-white sm:inline"
          >
            {CONTATTI_ALETHEIA.telefono}
          </a>
          <a
            href="#modulo-candidatura"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wide text-brand-700 shadow-sm transition-colors hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Candidati ora
          </a>
        </div>
      </div>
    </header>
  );
}
