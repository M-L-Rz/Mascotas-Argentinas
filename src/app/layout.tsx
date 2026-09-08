import type { Metadata } from "next";
import { Nunito, Source_Sans_3 } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["700", "800"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Mascotas Argentinas",
    template: "%s · Mascotas Argentinas",
  },
  description:
    "Noticias y datos curiosos de mascotas en Argentina. Un medio amable, sin recetas ni diagnósticos.",
  applicationName: "Mascotas Argentinas",
  metadataBase: new URL("https://mascotasargentinas.com.ar"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className={`${nunito.variable} ${sourceSans.variable} font-sans`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
