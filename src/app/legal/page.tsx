import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uso de marca y privacidad",
};

export default function LegalPage() {
  return (
    <main className="mx-auto w-[min(720px,calc(100%-2rem))] py-16">
      <h1 className="font-display text-4xl font-extrabold text-navy">
        Uso de marca y privacidad
      </h1>
      <p className="mt-4 text-lg text-muted">
        Mascotas Argentinas es una marca mixta registrada ante el INPI. Los contenidos del
        sitio son informativos y no sustituyen la consulta con un veterinario matriculado.
      </p>
      <p className="mt-4 text-lg text-muted">
        El newsletter guarda solo el correo que nos dejes, para enviarte notas. No hay
        cuentas de usuario en esta etapa.
      </p>
    </main>
  );
}
