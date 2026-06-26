import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cardiomed - Excelência em saúde, cuidado para a vida",
  description:
    "Há mais de 25 anos a Cardiomed oferece qualidade de vida e bem-estar a pacientes cardíacos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${lora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
