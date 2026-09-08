import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function ContactoPage() {
  return (
    <main className="mx-auto w-[min(720px,calc(100%-2rem))] py-16">
      <h1 className="font-display text-4xl font-extrabold text-navy">Contacto</h1>
      <p className="mt-4 text-lg text-muted">
        Para prensa, sponsors o correcciones: escribinos cuando el correo corporativo del
        dominio esté activo. Mientras tanto, el newsletter de la home es el canal de
        aviso.
      </p>
    </main>
  );
}
