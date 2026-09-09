import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Directorio",
  description:
    "El directorio de veterinarias de Mascotas Argentinas se publica cuando haya fichas reales en el AMBA.",
  path: "/directorio",
  robots: { index: false, follow: true },
});

export default function DirectorioPage() {
  return (
    <main className="mx-auto w-[min(720px,calc(100%-2rem))] py-16">
      <p className="mb-3 font-display text-[13px] font-extrabold uppercase tracking-[0.08em] text-sky">
        Próximamente
      </p>
      <h1 className="font-display text-4xl font-extrabold text-navy">
        Veterinarias cerca tuyo
      </h1>
      <p className="mt-4 text-lg text-muted">
        El mapa se publica cuando haya fichas reales en el AMBA. Mascotas Argentinas no
        atiende ni da turnos: va a listar comercios de terceros.
      </p>
      <Link
        href="/#newsletter"
        className="mt-6 inline-flex rounded-full bg-gold px-5 py-3 font-display font-extrabold text-navy-deep"
      >
        Avisame cuando esté
      </Link>
    </main>
  );
}
