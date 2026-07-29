import type { Metadata, Viewport } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "./lib/constants";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const title = "Cardiomed - Excelência em saúde, cuidado para a vida";
const description =
  "Há mais de 25 anos a Cardiomed distribui tecnologia médico-hospitalar de ponta para cardiologia em Belo Horizonte e em todo o Brasil: marca-passos, cardiodesfibriladores, sistemas de ressincronização, mapeamento eletroanatômico e soluções de eletrofisiologia.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  keywords: [
    "Cardiomed",
    "tecnologia médico-hospitalar",
    "equipamentos cardiológicos",
    "marca-passo",
    "cardiodesfibrilador implantável",
    "ressincronização cardíaca",
    "eletrofisiologia",
    "mapeamento eletroanatômico",
    "distribuidora de produtos médicos Belo Horizonte",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  category: "health",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title,
    description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#336B41",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/hero.jpg`,
  description,
  telephone: "+55-31-3241-7101",
  email: "contato@cardiomed.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. do Contorno, 2646, sala 1305 - Santa Efigênia",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    postalCode: "30110-017",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],
  sameAs: [
    "https://instagram.com/cardiomed",
    "https://linkedin.com/company/cardiomed",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${geist.variable} ${lora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <div className="flex-1">{children}</div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
