import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderMenu from "@/components/Layout/HeaderMenu/page";
import { AlertProvider } from "../context/AlertContext";
import Alert from "../components/Alert/Alert";
import { LoadingProvider } from "../context/LoadingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NPS Survey",
  description: "Plataforma de pesquisa de satisfação",
  openGraph: {
    title: "NPS Survey",
    description: "Plataforma de pesquisa de satisfação",
    url: "https://nps-platform.com",
    siteName: "NPS Survey",
    images: [
      {
        url: "https://nps-platform.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NPS Survey Platforma",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>
          <AlertProvider>
            <HeaderMenu />
            {children}
            <Alert />
          </AlertProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
