"use client";

import { FormEvent, useState } from "react";
import {
  CONTATTI_ALETHEIA,
  PRIVACY_POLICY_URL,
  STATO_OCCUPAZIONALE_OPTIONS,
  TITOLO_STUDIO_OPTIONS,
} from "@/lib/data";
import { trackMetaPixelEvent } from "@/lib/meta-pixel";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "mt-1 w-full rounded-sm border border-brand-300 bg-background px-3 py-2 text-base outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-brand-700";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(
          data.error ?? "Si è verificato un errore. Riprova più tardi."
        );
        return;
      }

      setStatus("success");
      trackMetaPixelEvent("Lead", {
        content_name: "Biotecnologo della Qualità 4.0 - Vittoria (RG)",
      });
      trackEvent("generate_lead", {
        form_name: "candidatura",
      });
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Impossibile inviare la richiesta. Controlla la connessione.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-sm border border-brand-300 border-l-4 border-l-brand-600 bg-brand-50 p-6 text-brand-800 dark:border-brand-700 dark:bg-brand-900/30 dark:text-brand-200"
      >
        <p className="font-semibold">Richiesta inviata con successo!</p>
        <p className="mt-1 text-sm">
          Ti contatteremo al più presto. Per urgenze puoi scriverci a{" "}
          <a className="underline" href={`mailto:${CONTATTI_ALETHEIA.email}`}>
            {CONTATTI_ALETHEIA.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium">
            Nome <span aria-hidden className="text-accent-600">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Inserisci nome"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="cognome" className="block text-sm font-medium">
            Cognome <span aria-hidden className="text-accent-600">*</span>
          </label>
          <input
            id="cognome"
            name="cognome"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Inserisci cognome"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email <span aria-hidden className="text-accent-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Inserisci email"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-medium">
            Numero di telefono <span aria-hidden className="text-accent-600">*</span>
          </label>
          <div className="mt-1 flex gap-2">
            <select
              id="prefissoTelefono"
              name="prefissoTelefono"
              defaultValue="+39"
              aria-label="Prefisso internazionale"
              className="w-24 shrink-0 rounded-sm border border-brand-300 bg-background px-2 py-2 text-base outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-brand-700"
            >
              <option value="+39">+39</option>
            </select>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              required
              autoComplete="tel-national"
              placeholder="+39"
              className={inputClass + " mt-0"}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="luogoNascita" className="block text-sm font-medium">
            Luogo di nascita <span aria-hidden className="text-accent-600">*</span>
          </label>
          <input
            id="luogoNascita"
            name="luogoNascita"
            type="text"
            required
            placeholder="Inserisci luogo di nascita"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="dataNascita" className="block text-sm font-medium">
            Data di nascita <span aria-hidden className="text-accent-600">*</span>
          </label>
          <input
            id="dataNascita"
            name="dataNascita"
            type="date"
            required
            autoComplete="bday"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cittaResidenza" className="block text-sm font-medium">
            Città di residenza <span aria-hidden className="text-accent-600">*</span>
          </label>
          <input
            id="cittaResidenza"
            name="cittaResidenza"
            type="text"
            required
            autoComplete="address-level2"
            placeholder="Inserisci città di residenza"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="cap" className="block text-sm font-medium">
            CAP <span aria-hidden className="text-accent-600">*</span>
          </label>
          <input
            id="cap"
            name="cap"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{5}"
            required
            autoComplete="postal-code"
            placeholder="Inserisci CAP"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="indirizzoResidenza" className="block text-sm font-medium">
            Indirizzo di residenza <span aria-hidden className="text-accent-600">*</span>
          </label>
          <input
            id="indirizzoResidenza"
            name="indirizzoResidenza"
            type="text"
            required
            autoComplete="street-address"
            placeholder="Inserisci indirizzo di residenza"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="titoloStudio" className="block text-sm font-medium">
            Titolo di studio <span aria-hidden className="text-accent-600">*</span>
          </label>
          <select
            id="titoloStudio"
            name="titoloStudio"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Seleziona...
            </option>
            {TITOLO_STUDIO_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="istitutoProvenienza" className="block text-sm font-medium">
            Istituto di provenienza <span aria-hidden className="text-accent-600">*</span>
          </label>
          <input
            id="istitutoProvenienza"
            name="istitutoProvenienza"
            type="text"
            required
            placeholder="Denominazione dell'istituto, università o altro"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="cittaIstituto" className="block text-sm font-medium">
            Città dell&apos;istituto <span aria-hidden className="text-accent-600">*</span>
          </label>
          <input
            id="cittaIstituto"
            name="cittaIstituto"
            type="text"
            required
            placeholder="Inserisci la città dell'istituto"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="statoOccupazionale" className="block text-sm font-medium">
            Stato occupazionale <span aria-hidden className="text-accent-600">*</span>
          </label>
          <select
            id="statoOccupazionale"
            name="statoOccupazionale"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Seleziona...
            </option>
            {STATO_OCCUPAZIONALE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacyConsent"
          name="privacyConsent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-brand-300 text-brand-600 focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-brand-700"
        />
        <label htmlFor="privacyConsent" className="text-sm text-foreground/70">
          Ho letto l&apos;
          <a
            href={PRIVACY_POLICY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-brand-600"
          >
            informativa sulla privacy
          </a>{" "}
          e acconsento al trattamento dei miei dati personali per essere
          ricontattato/a in merito al corso.{" "}
          <span aria-hidden className="text-accent-600">
            *
          </span>
        </label>
      </div>

      {status === "error" && errorMessage && (
        <p role="alert" className="text-sm text-red-600 dark:text-red-400">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      >
        {status === "loading" ? "Invio in corso..." : "Invia la richiesta"}
      </button>

      <p className="text-xs text-foreground/60">
        Hai bisogno di parlare subito con noi? Chiamaci al{" "}
        <a className="underline" href={`tel:${CONTATTI_ALETHEIA.telefono.replace(/\s/g, "")}`}>
          {CONTATTI_ALETHEIA.telefono}
        </a>{" "}
        oppure scrivici a{" "}
        <a className="underline" href={`mailto:${CONTATTI_ALETHEIA.email}`}>
          {CONTATTI_ALETHEIA.email}
        </a>
        .
      </p>
    </form>
  );
}
