import Image from "next/image";
import { CONTATTI_ALETHEIA } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-brand-800 bg-brand-700 py-10 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <Image
              src="/aletheia-logo.png"
              alt="Alètheia"
              width={829}
              height={409}
              className="h-24 w-auto brightness-0 invert"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contatti</p>
            <ul className="mt-2 space-y-1.5 text-sm text-white/70">
              <li>
                <a
                  href={`tel:${CONTATTI_ALETHEIA.telefono.replace(/\s/g, "")}`}
                  className="hover:text-brand-200"
                >
                  {CONTATTI_ALETHEIA.telefono}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTATTI_ALETHEIA.email}`}
                  className="hover:text-brand-200"
                >
                  {CONTATTI_ALETHEIA.email}
                </a>
              </li>
              <li>{CONTATTI_ALETHEIA.indirizzo}</li>
              <li className="text-xs text-white/50">{CONTATTI_ALETHEIA.orari}</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Social</p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href={CONTATTI_ALETHEIA.social.instagram}
                aria-label="Instagram"
                className="text-white/70 hover:text-brand-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.73.07-.96.04-1.48.2-1.83.34-.46.18-.79.39-1.13.74-.35.34-.56.67-.74 1.13-.14.35-.3.87-.34 1.83C3.17 8.5 3.16 8.85 3.16 12s.01 3.5.07 4.73c.04.96.2 1.48.34 1.83.18.46.39.79.74 1.13.34.35.67.56 1.13.74.35.14.87.3 1.83.34 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c.96-.04 1.48-.2 1.83-.34.46-.18.79-.39 1.13-.74.35-.34.56-.67.74-1.13.14-.35.3-.87.34-1.83.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.04-.96-.2-1.48-.34-1.83-.18-.46-.39-.79-.74-1.13a3.14 3.14 0 0 0-1.13-.74c-.35-.14-.87-.3-1.83-.34C15.5 4.01 15.15 4 12 4zm0 3.5A4.5 4.5 0 1 1 12 16.5 4.5 4.5 0 0 1 12 7.5zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4zm4.7-2a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z" />
                </svg>
              </a>
              <a
                href={CONTATTI_ALETHEIA.social.facebook}
                aria-label="Facebook"
                className="text-white/70 hover:text-brand-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M13.5 22v-8.2h2.75l.41-3.2h-3.16V8.55c0-.93.26-1.56 1.6-1.56h1.7V4.14C15.98 4.05 15.11 4 14.07 4c-2.16 0-3.64 1.32-3.64 3.75v2.85H7.66v3.2h2.77V22h3.07z" />
                </svg>
              </a>
              <a
                href={CONTATTI_ALETHEIA.social.linkedin}
                aria-label="LinkedIn"
                className="text-white/70 hover:text-brand-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.64h.05c.53-.99 1.83-2.04 3.77-2.04 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-8 border-t border-brand-800 pt-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/50">
              Percorso finanziato da
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <Image
                src="/barra-loghi-bianco.svg"
                alt="Loghi ITS Academy, Coesione Italia, Unione Europea, Repubblica Italiana, Regione Siciliana"
                width={600}
                height={36}
                className="h-9 w-auto"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/50">
              Percorso realizzato in collaborazione con
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <Image
                src="/its-academy-logo-white.png"
                alt="ITS Academy Nuove Tecnologie della Vita &quot;Alessandro Volta&quot;"
                width={1256}
                height={193}
                className="h-9 w-auto"
              />
              <Image
                src="/promotergroup-logo-white.png"
                alt="Promotergroup SpA"
                width={1293}
                height={327}
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/50">
          In collaborazione con ITS Academy Nuove Tecnologie della Vita
          &quot;Alessandro Volta&quot;. © {new Date().getFullYear()} Alètheia.
        </p>
      </div>
    </footer>
  );
}
