import type { Metadata } from "next";
import { Viga, Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const viga = Viga({
  variable: "--font-viga",
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
  openGraph: {
    title: "Biotecnologo della Qualità 4.0 | Alètheia ITS STEP",
    description:
      "Percorso ITS STEP a Vittoria (RG): 2.000 ore tra aula, laboratori e stage aziendale per diventare Biotecnologo della Qualità.",
    type: "website",
    locale: "it_IT",
    // [DA CONFERMARE] Sostituire con un'immagine dedicata 1200x630 per una resa
    // ottimale negli annunci Facebook; per ora riusa il logo Alètheia.
    images: ["/aletheia-logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${viga.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        {META_PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
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
