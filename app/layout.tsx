import type { Metadata } from "next";
import { Viga, Nunito } from "next/font/google";
import Script from "next/script";
import { CONTATTI_ALETHEIA, ORE_STRUTTURA, SEDE_CORSO } from "@/lib/data";
import "./globals.css";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const viga = Viga({
  variable: "--font-viga",
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const SITE_URL = "https://biotecnologoqualita40.aletheiasrl.it";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Biotecnologo della Qualità 4.0 | Alètheia ITS STEP",
  description:
    "Percorso ITS STEP Biotecnologo della Qualità 4.0 a Vittoria (RG), promosso da Alètheia. 2.000 ore tra aula, laboratori e 1.000 ore di stage aziendale.",
  keywords: [
    "ITS Academy",
    "Biotecnologo della Qualità 4.0",
    "Biotecnologo della Qualità",
    "Alètheia",
    "Vittoria RG",
    "ITS STEP",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Biotecnologo della Qualità 4.0 | Alètheia ITS STEP",
    description:
      "Percorso a Vittoria (RG): 2.000 ore tra aula, laboratori e stage aziendale per diventare Biotecnologo della Qualità.",
    url: SITE_URL,
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Biotecnologo della Qualità 4.0 - Alètheia ITS STEP, Vittoria (RG)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biotecnologo della Qualità 4.0 | Alètheia ITS STEP",
    description:
      "Percorso a Vittoria (RG): 2.000 ore tra aula, laboratori e stage aziendale per diventare Biotecnologo della Qualità.",
    images: ["/og-image.jpg"],
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: "Alètheia",
      url: SITE_URL,
      logo: `${SITE_URL}/aletheia-logo.png`,
      telephone: CONTATTI_ALETHEIA.telefono,
      email: CONTATTI_ALETHEIA.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: SEDE_CORSO.indirizzo,
        addressLocality: "Vittoria",
        addressRegion: "RG",
        addressCountry: "IT",
      },
      sameAs: [
        CONTATTI_ALETHEIA.social.instagram,
        CONTATTI_ALETHEIA.social.facebook,
        CONTATTI_ALETHEIA.social.linkedin,
      ],
    },
    {
      "@type": "Course",
      "@id": `${SITE_URL}/#course`,
      name: "Biotecnologo della Qualità 4.0",
      description:
        "Percorso ITS STEP per Tecnico Superiore per il sistema di qualità di prodotti e processi a base biotecnologica e chimico-industriali. 2.000 ore tra aula, laboratori e stage aziendale.",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      timeRequired: `PT${ORE_STRUTTURA.totali}H`,
      educationalCredentialAwarded:
        "Diploma di Tecnico Superiore (V livello EQF)",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "onsite",
        location: {
          "@type": "Place",
          name: SEDE_CORSO.nome,
          address: {
            "@type": "PostalAddress",
            streetAddress: SEDE_CORSO.indirizzo,
            addressLocality: "Vittoria",
            addressRegion: "RG",
            addressCountry: "IT",
          },
        },
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${viga.variable} ${nunito.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.google.com" />
        <Script id="jsonld-course" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(JSON_LD)}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        {children}

        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="ga4-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}

        {META_PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="lazyOnload">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
