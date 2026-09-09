import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="mx-auto w-[min(720px,calc(100%-2rem))] py-20 text-center">
      <p className="font-display text-[13px] font-extrabold uppercase tracking-[0.08em] text-sky">
        404
      </p>
      <h1 className="mt-2 font-display text-4xl font-extrabold text-navy">
        Esa página no está.
      </h1>
      <p className="mt-4 text-lg text-muted">
        Puede que la nota se haya movido o que el enlace esté viejo.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-gold px-5 py-3 font-display font-extrabold text-navy-deep"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
