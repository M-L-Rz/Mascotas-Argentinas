import type { Metadata } from "next";
import { Nunito, Source_Sans_3 } from "next/font/google";
import { GoogleAnalytics } from "@/lib/analytics/GoogleAnalytics";
import { SiteShell } from "@/components/layout/SiteShell";
import { jsonLdScript } from "@/lib/security/http";
import { websiteJsonLd } from "@/lib/seo/jsonld";
import { HOME_TITLE } from "@/lib/seo/metadata";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/seo/site";
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
    default: HOME_TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  applicationName: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/brand/icon.png", sizes: "256x256", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: SITE_NAME,
    images: [{ url: "/brand/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className={`${nunito.variable} ${sourceSans.variable} font-sans`}>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(websiteJsonLd()) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
