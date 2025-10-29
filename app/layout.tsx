import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pesan Villa Puncak Bogor | Sewa Villa & Staycation Nyaman",
  description:
    "Temukan dan pesan villa terbaik di Puncak Bogor untuk liburan keluarga, pasangan, atau teman. Nikmati pengalaman staycation eksklusif dengan fasilitas lengkap dan pemandangan pegunungan.",
  keywords: [
    "villa puncak",
    "villa bogor",
    "sewa villa puncak",
    "staycation puncak",
    "villa keluarga puncak",
    "pesan villa murah puncak",
    "villa dengan kolam renang puncak",
  ],
  openGraph: {
    title: "Pesan Villa Puncak Bogor | Sewa Villa & Staycation Nyaman",
    description:
      "Pesan villa terbaik di Puncak Bogor dengan fasilitas lengkap dan pemandangan indah. Cocok untuk liburan keluarga, honeymoon, dan staycation seru.",
    url: "https://pesanvilla.com",
    siteName: "Pesan Villa",
    images: [
      {
        url: "/pesan-villa-web-light.png", // buat 1200x630 px (Open Graph preview)
        width: 1200,
        height: 630,
        alt: "Pesan Villa Puncak Bogor",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/pesan-villa-web-light.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
