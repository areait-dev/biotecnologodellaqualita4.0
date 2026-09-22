// Dati ufficiali del percorso ITS STEP "Biotecnologo della Qualità 4.0".
// Non aggiungere numeri o dettagli che non siano stati forniti nel brief:
// se manca un'informazione, usare un placeholder marcato "[DA CONFERMARE]".

export const CONTATTI_ALETHEIA = {
  telefono: "+39 0932 862613",
  email: "info@aletheiasrl.it",
  indirizzo: "C.da Casazza, 97019 Vittoria (RG), presso Promotergroup",
  orari: "Lunedì-Venerdì, 9:00-13:00 / 14:00-18:00",
  social: {
    instagram: "https://instagram.com/aletheiasrl",
    facebook: "https://facebook.com/aletheiasrl.it",
    linkedin: "https://it.linkedin.com/company/al%C3%A8theia-srl",
  },
};

export const SEZIONI_NAV = [
  { id: "dove-lavora", label: "Dove lavora" },
  { id: "titolo-di-studio", label: "Titolo di studio" },
  { id: "stage-in-azienda", label: "Stage in azienda" },
  { id: "come-si-accede", label: "Come si accede" },
  { id: "sede-del-corso", label: "Sede del corso" },
  { id: "didattica", label: "Didattica" },
  { id: "piano-di-studi", label: "Il piano di studi" },
  { id: "materiale-didattico", label: "Materiale didattico" },
  { id: "modulo-candidatura", label: "Modulo di candidatura" },
] as const;

// Ripartizione ufficiale delle ore del percorso.
export const ORE_STRUTTURA = {
  totali: 2000,
  teoriaAula: 485,
  laboratori: 515,
  stageAzienda: 1000,
};

// Piano di studi ufficiale, organizzato in moduli didattico-formativi
// con relativo elenco di argomenti e ore.
export const MODULI_PIANO_STUDI = [
  {
    titolo: "Riallineamento delle conoscenze e competenze di base",
    argomenti: [
      { nome: "Chimica, biologia, matematica, fisica e laboratorio", ore: 60 },
      { nome: "Chimica generale e analitica", ore: 20 },
      { nome: "Chimica strumentale e analisi", ore: 25 },
      { nome: "Biochimica", ore: 20 },
      { nome: "Microbiologia generale e applicata", ore: 20 },
      { nome: "Lingua Inglese", ore: 60 },
      { nome: "Manutenzione degli impianti", ore: 10 },
    ],
  },
  {
    titolo: "Conoscenze informatiche",
    argomenti: [
      { nome: "Informatica", ore: 30 },
      { nome: "Information technologies e data integrity", ore: 10 },
      {
        nome: "Intelligenza artificiale per l'analisi e l'ottimizzazione dei processi biotecnologici",
        ore: 15,
      },
    ],
  },
  {
    titolo: "Gestione e sviluppo di un'impresa",
    argomenti: [
      {
        nome: "Organizzazione di un sito produttivo in ambito biotecnologico",
        ore: 10,
      },
      {
        nome: "Fonti di finanziamento e redazione del business plan – ASA con indicatori economico finanziari",
        ore: 10,
      },
      {
        nome: "Business – eccellenza operativa. Cenni sulla lean manufacturing",
        ore: 10,
      },
    ],
  },
  {
    titolo: "Controllo di qualità e di processo",
    argomenti: [
      { nome: "Certificazione dei prodotti – norme ISO 9000", ore: 25 },
      { nome: "Principi attivi: funzioni e controllo di qualità (CQ)", ore: 30 },
      {
        nome: "Controllo di qualità di medicinali e dei prodotti a base biotecnologica",
        ore: 30,
      },
      {
        nome: "Applicazione del controllo di qualità alla produzione industriale (in process control)",
        ore: 20,
      },
      { nome: "Controllo di qualità di eccipienti e materie prime", ore: 30 },
      { nome: "Sistemi di qualità aziendali", ore: 15 },
      {
        nome: "Statistica applicata al controllo di qualità e di processo (SPC) – Elaborazione dati e analisi TREND",
        ore: 25,
      },
    ],
  },
  {
    titolo: "Softskill e competenze professionali",
    argomenti: [
      { nome: "Orientamento al ruolo", ore: 10 },
      { nome: "Comunicazione", ore: 10 },
      { nome: "Competenze per la vita (life comp)", ore: 10 },
      {
        nome: "Organizzazione aziendale e gestione del lavoro e dei processi secondo standard di qualità",
        ore: 10,
      },
      {
        nome: "Pari opportunità e contrasto ad ogni forma di discriminazione",
        ore: 20,
      },
    ],
  },
  {
    titolo: "Ricerca, sviluppo e regolamentazione",
    argomenti: [
      { nome: "Norme di buona pratica di fabbricazione", ore: 20 },
      { nome: "Regolatorio", ore: 20 },
      { nome: "Fascicolo tecnico del prodotto e il dossier di AIC", ore: 20 },
      { nome: "Supply chain e tracciabilità", ore: 10 },
      { nome: "Cenni di nutraceutica", ore: 15 },
      { nome: "Tecniche di liofilizzazione", ore: 15 },
      { nome: "Technical transfer dei metodi di analisi", ore: 14 },
      { nome: "Sviluppo farmaceutico", ore: 15 },
    ],
  },
  {
    titolo: "Salute e sicurezza ambientale",
    argomenti: [
      { nome: "Primo soccorso", ore: 16 },
      { nome: "Sicurezza, salute e qualità degli ambienti di lavoro", ore: 20 },
      {
        nome: "Sostenibilità ambientale e sociale nel settore delle biotecnologie – aspetti di contaminazione ambientale – principio del DNSH",
        ore: 30,
      },
    ],
  },
  {
    titolo: "Laboratori tecnici di settore",
    argomenti: [
      { nome: "Chimica strumentale e analisi di laboratorio", ore: 60 },
      { nome: "Biochimica", ore: 30 },
      { nome: "Microbiologia generale e applicata", ore: 50 },
      { nome: "Buone pratiche del laboratorio di controllo", ore: 50 },
      { nome: "Utilizzo delle principali strumentazioni analitiche", ore: 50 },
      { nome: "Project Work applicativo", ore: 30 },
    ],
  },
];

// Informazioni sulla didattica del percorso.
export const DIDATTICA = {
  frequenzaObbligatoria: "Percentuale massima di assenza 20%",
  lezioni: "Aula di teoria e laboratori, dal lunedì al venerdì, 5/6 ore al giorno",
  verificheInItinere:
    "A conclusione di ciascun modulo didattico-formativo, è prevista la somministrazione di questionari di verifica delle conoscenze e competenze acquisite",
  pianoStudiIntro:
    "Il piano formativo è organizzato in semestri che consentono la ripartizione logico funzionale delle attività formative, che possono essere modificate su indicazione del Comitato Tecnico Scientifico in ragione delle esigenze didattiche e/o di richieste esterne da parte delle aziende.",
  pianoStudiOrePresenza: "Le ore di teoria in aula, i laboratori e gli stage in azienda si svolgono in presenza.",
  pianoStudiNote: "La frequenza obbligatoria minima complessiva è pari all'80% del monte ore corso.",
};

// Profilo professionale: dove lavora il tecnico formato dal percorso.
export const DOVE_LAVORA = [
  "Opera all'interno dei comparti chimico, chimico farmaceutico, alimentare, ambientale e dei biomateriali, per la ricerca, produzione e gestione e controllo degli standard di qualità.",
  "Contribuisce alla corretta applicazione di standard e procedure di produzione partecipando sia alla scelta e all'approvvigionamento delle materie prime, sia alla validazione del processo verificando la funzionalità degli impianti.",
  "Collabora nell'applicazione delle normative internazionali, comunitarie e nazionali che regolamentano l'attività del comparto.",
  "Fornisce supporto alle attività volte ad acquisire le autorizzazioni necessarie per l'immissione sul mercato dei prodotti. Collabora alla documentazione Regulatory Affairs: redige, elabora e gestisce \"dossier\" di prodotti e servizi a fini registrativi, aggiorna e modifica la documentazione sulla base delle richieste della produzione e Controllo Qualità.",
  "Applica le Good Laboratory Practice (GLP) e le Good Manufacturing Practice (GMP) con annessi controlli e promuove l'uso di soluzioni digitali per favorire l'interazione tra i vari ambiti e la sostenibilità e monitoraggio delle applicazioni rilasciate, collaborando alla loro commercializzazione.",
];

// Requisiti di accesso ufficiali ("Come si accede").
export const REQUISITI_ACCESSO = {
  titoloRichiesto:
    "È necessario un Diploma quinquennale, oppure un diploma di 4 anni di istruzione e formazione professionale + un corso annuale IFTS.",
  candidature:
    "Le candidature sono aperte tutto l'anno e sono disponibili 30 posti per ogni edizione del percorso formativo.",
};

// Percentuale di studenti assunti da aziende del settore entro un anno dal diploma.
export const PERCENTUALE_ASSUNZIONE_STAGE = 90;

// Titolo di studio rilasciato al termine del percorso.
export const TITOLO_DI_STUDIO = {
  titolo:
    "Diploma di \"Tecnico Superiore per il sistema di qualità di prodotti e processi a base biotecnologica e chimico-industriali\"",
  figura:
    "V Livello del Quadro Europeo delle Qualifiche (European Qualification Framework - EQF), rilasciato dal Ministero dell'Istruzione e del Merito.",
};

// Sede del corso.
export const SEDE_CORSO = {
  nome: "Promotergroup",
  indirizzo: "C.da Casazza, 97019 Vittoria (RG)",
  note:
    "Il percorso si svolge a Vittoria (RG), presso la sede di Promotergroup, partner Alètheia per l'erogazione del corso.",
};

// Materiale didattico fornito agli allievi.
export const MATERIALE_DIDATTICO =
  "L'ITS Academy fornisce ai propri allievi il materiale didattico e gli accessori necessari al corretto svolgimento delle attività formative d'aula e di laboratorio.";

export const AZIENDE_PARTNER = [
  {
    nome: "Aristeia Farmaceutici S.r.l.",
    luogo: "Piazza Armerina (EN)",
    descrizione:
      "Azienda farmaceutica specializzata in integratori alimentari, dispositivi medici e cosmetici.",
  },
  {
    nome: "Promo.San S.r.l.",
    luogo: "Vittoria (RG)",
    descrizione:
      "Nata dall'esperienza di Promotergroup S.p.A., leader nazionale nella sorveglianza sanitaria e sicurezza sul lavoro.",
  },
  {
    nome: "L.C. – Laboratori Campisi S.r.l.",
    luogo: "Avola (SR)",
    descrizione:
      "Oltre 25 anni di attività in analisi cliniche, biologia molecolare e genetica medica, certificata ISO 9001:2015.",
  },
];

export const TITOLO_STUDIO_OPTIONS = [
  "Diploma di Scuola secondaria di II grado",
  "Laurea triennale",
  "Laurea magistrale / a ciclo unico",
  "Altro",
];

export const STATO_OCCUPAZIONALE_OPTIONS = [
  "Studente/essa",
  "Occupato/a",
  "Disoccupato/a",
  "Inattivo/a",
];

export const LEAD_ENDPOINT_ENV = "NEXT_PUBLIC_LEAD_ENDPOINT";

// [DA CONFERMARE] Sostituire con l'URL reale della pagina Privacy Policy di Alètheia
// (non trovata pubblicamente su aletheiasrl.it al momento della stesura).
export const PRIVACY_POLICY_URL = "https://www.aletheiasrl.it/privacy-policy";

// Numero di posti disponibili per l'edizione del corso: usato per la copy di urgenza
// nelle sezioni Hero e Candidati ora, pensata per la campagna Facebook Ads Lead Gen.
export const POSTI_DISPONIBILI = 30;

// ID del Meta Pixel per il tracciamento delle conversioni della campagna Facebook Ads.
// Configurare tramite variabile d'ambiente NEXT_PUBLIC_META_PIXEL_ID.
export const META_PIXEL_ID_ENV = "NEXT_PUBLIC_META_PIXEL_ID";
