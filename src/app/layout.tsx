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
  title: "Reciclama | Reciclaje en Guatemala",
  description:
    "Reciclama compra y recolecta hierro, papel, electrónicos, cobre, aluminio, plástico y baterías en Guatemala. Gestión responsable con licencia ambiental y destrucción certificada.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-grain flex min-h-full flex-col">{children}</body>
    </html>
  );
}
