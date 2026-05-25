import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.simulasikreditmu.my.id"),
   icons: {
    icon: "/images/favicon.png",
  },
  title: {
    default: "Simulasi Kredit Motor – Hitung Cicilan Mudah & Cepat",
    template: "%s | SimulasiKredit.id",
  },
  description:
    "Hitung simulasi kredit motor Honda, Yamaha, Suzuki dengan mudah. Temukan cicilan terjangkau sesuai kemampuanmu. Gratis & tanpa registrasi.",
  keywords: [
    "simulasi kredit motor",
    "hitung cicilan motor",
    "kredit motor Honda",
    "kredit motor Yamaha",
    "angsuran motor",
    "kalkulator kredit",
  ],

  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "SimulasiKredit.id",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
