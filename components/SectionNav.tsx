"use client";

import { MouseEvent, useEffect, useState } from "react";
import { SEZIONI_NAV } from "@/lib/data";

export default function SectionNav() {
  const [activeId, setActiveId] = useState<string>(SEZIONI_NAV[0].id);

  useEffect(() => {
    const sections = SEZIONI_NAV.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    // Soglia: consideriamo "attiva" la sezione il cui inizio ha superato
    // questa percentuale dell'altezza della viewport, scorrendo dall'alto.
    const THRESHOLD_RATIO = 0.3;

    const updateActiveSection = () => {
      const threshold = window.innerHeight * THRESHOLD_RATIO;

      let current = sections[0]?.id;
      for (const section of sections) {
        const { top } = section.getBoundingClientRect();
        if (top - threshold <= 0) {
          current = section.id;
        } else {
          break;
        }
      }

      if (current) {
        setActiveId(current);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  return (
    <>
      {/* Sidebar desktop */}
      <nav
        aria-label="Navigazione sezioni"
        className="hidden lg:block sticky top-24 mt-12 h-fit w-64 shrink-0 pl-6"
      >
        <ul className="space-y-1 border-r border-brand-200 dark:border-brand-800">
          {SEZIONI_NAV.map((sezione) => {
            const isActive = activeId === sezione.id;
            return (
              <li key={sezione.id}>
                <a
                  href={`#${sezione.id}`}
                  onClick={(event) => handleClick(event, sezione.id)}
                  className={[
                    "block w-full cursor-pointer pr-4 pl-3 py-2 -mr-px border-r-2 text-sm uppercase tracking-wide transition-colors",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",
                    isActive
                      ? "border-brand-600 text-brand-700 dark:text-brand-300 font-semibold bg-brand-50 dark:bg-brand-900/30"
                      : "border-transparent text-foreground/70 hover:text-foreground hover:border-brand-300",
                  ].join(" ")}
                  aria-current={isActive ? "true" : undefined}
                >
                  {sezione.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Tab bar mobile */}
      <nav
        aria-label="Navigazione sezioni"
        className="lg:hidden sticky top-16 z-30 -mx-4 mb-6 overflow-x-auto border-b border-brand-200 bg-background/95 px-4 backdrop-blur dark:border-brand-800"
      >
        <ul className="flex gap-1 whitespace-nowrap py-2">
          {SEZIONI_NAV.map((sezione) => {
            const isActive = activeId === sezione.id;
            return (
              <li key={sezione.id}>
                <a
                  href={`#${sezione.id}`}
                  onClick={(event) => handleClick(event, sezione.id)}
                  className={[
                    "block cursor-pointer rounded-full px-3 py-1.5 text-sm uppercase tracking-wide transition-colors",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",
                    isActive
                      ? "bg-brand-600 text-white font-semibold"
                      : "bg-brand-50 text-foreground/70 hover:bg-brand-100 dark:bg-brand-900/40 dark:hover:bg-brand-900/60",
                  ].join(" ")}
                  aria-current={isActive ? "true" : undefined}
                >
                  {sezione.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
