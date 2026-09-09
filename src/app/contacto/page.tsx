import type { Metadata } from "next";
import { ContactForm } from "@/components/layout/ContactForm";
import { pageMetadata } from "@/lib/seo/metadata";
import { MAIL_HELLO } from "@/lib/seo/site";

export const metadata: Metadata = pageMetadata({
  title: "Contacto",
  description:
    "Contacto de Mascotas Argentinas: prensa, publicidad y correcciones. No es una consulta veterinaria.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <main className="mx-auto w-[min(720px,calc(100%-2rem))] py-16">
      <h1 className="font-display text-4xl font-extrabold text-navy">Contacto</h1>
      <p className="mt-4 text-lg text-muted">
        Para prensa, publicidad o una corrección:{" "}
        <a
          href={`mailto:${MAIL_HELLO}`}
          className="font-semibold text-navy underline decoration-gold underline-offset-2"
        >
          {MAIL_HELLO}
        </a>
        . El formulario también llega al proyecto. No es una consulta veterinaria y no
        hay turnos.
      </p>
      <ContactForm />
    </main>
  );
}
