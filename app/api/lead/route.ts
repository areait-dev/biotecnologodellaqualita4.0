import { NextRequest, NextResponse } from "next/server";

const LEAD_ENDPOINT = process.env.LEAD_ENDPOINT ?? process.env.NEXT_PUBLIC_LEAD_ENDPOINT;

const REQUIRED_FIELDS = [
  "nome",
  "cognome",
  "email",
  "telefono",
  "luogoNascita",
  "dataNascita",
  "cittaResidenza",
  "indirizzoResidenza",
  "cap",
  "titoloStudio",
  "istitutoProvenienza",
  "cittaIstituto",
  "statoOccupazionale",
] as const;

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const fields: Record<string, string> = {};
  for (const key of REQUIRED_FIELDS) {
    const value = formData.get(key);
    if (typeof value !== "string" || value.trim() === "") {
      return NextResponse.json(
        { ok: false, error: "Campi obbligatori mancanti." },
        { status: 400 }
      );
    }
    fields[key] = value;
  }

  if (formData.get("privacyConsent") !== "on") {
    return NextResponse.json(
      { ok: false, error: "È necessario accettare l'informativa privacy." },
      { status: 400 }
    );
  }
  fields.consensoPrivacy = "true";

  fields.prefissoTelefono =
    (formData.get("prefissoTelefono") as string | null) ?? "+39";

  if (!LEAD_ENDPOINT) {
    // TODO: DA CONFERMARE, impostare la variabile d'ambiente NEXT_PUBLIC_LEAD_ENDPOINT
    // con l'URL del Google Apps Script / endpoint che scrive su Google Sheets.
    console.warn("LEAD_ENDPOINT non configurato: lead non inoltrato.", fields);
    return NextResponse.json(
      { ok: false, error: "Endpoint di destinazione non configurato." },
      { status: 500 }
    );
  }

  try {
    const upstream = await fetch(LEAD_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...fields,
        corso: "Biotecnologo della Qualità 4.0 (Vittoria, RG)",
        sorgente: "landing-aletheia",
        timestamp: new Date().toISOString(),
      }),
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { ok: false, error: "Errore nell'invio al destinatario." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Errore di rete durante l'invio." },
      { status: 502 }
    );
  }
}
