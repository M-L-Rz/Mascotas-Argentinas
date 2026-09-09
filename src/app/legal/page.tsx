import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import { MAIL_HELLO } from "@/lib/seo/site";

export const metadata: Metadata = pageMetadata({
  title: "Uso de marca y privacidad",
  description:
    "Marca mixta INPI de Mascotas Argentinas, disclaimer veterinario y cómo tratamos el correo del newsletter.",
  path: "/legal",
});

export default function LegalPage() {
  return (
    <main className="mx-auto w-[min(720px,calc(100%-2rem))] py-16">
      <h1 className="font-display text-4xl font-extrabold text-navy">
        Uso de marca y privacidad
      </h1>
      <p className="mt-4 text-lg text-muted">
        Texto mínimo para publicar el sitio. No es un dictamen jurídico.
      </p>

      <h2 className="mt-10 font-display text-2xl font-extrabold text-navy">Marca</h2>
      <p className="mt-3 text-lg text-muted">
        Mascotas Argentinas es una marca mixta registrada ante el INPI, con limitación
        en publicidad y marketing por internet, gestión comercial, retail/mayorista de
        camas, lechos, piensos, utensilios de belleza y de higiene, y registro de razas.
        El nombre no es un monopolio de la palabra “mascotas” ni de la profesión
        veterinaria.
      </p>

      <h2 className="mt-10 font-display text-2xl font-extrabold text-navy">
        Contenidos y salud animal
      </h2>
      <p className="mt-3 text-lg text-muted">
        Las notas son informativas. No diagnostican, no recetan y no sustituyen la
        consulta con un veterinario matriculado. Mascotas Argentinas no presta servicios
        clínicos, no da turnos y no opera adopciones.
      </p>

      <h2 className="mt-10 font-display text-2xl font-extrabold text-navy">
        Datos que tratamos (sin cuenta de usuario)
      </h2>
      <p className="mt-3 text-lg text-muted">
        En esta etapa no hay registro de lectores. Si dejás un correo en el newsletter,
        lo guardamos solo para enviarte notas y avisos del sitio. Si escribís por el
        formulario de contacto, guardamos nombre, correo, tema y mensaje para responder.
        Podés pedir la baja del newsletter o la eliminación de un mensaje en{" "}
        <a href={`mailto:${MAIL_HELLO}`} className="font-semibold text-navy underline decoration-gold underline-offset-2">
          {MAIL_HELLO}
        </a>
        , o por el formulario de contacto.
      </p>
      <p className="mt-3 text-lg text-muted">
        El tratamiento de datos personales en Argentina se encuadra en la Ley 25.326. No
        vendemos bases de lectores.
      </p>

      <h2 className="mt-10 font-display text-2xl font-extrabold text-navy">Cookies</h2>
      <p className="mt-3 text-lg text-muted">
        El sitio puede usar cookies técnicas y, si se configura, una herramienta de
        medición de audiencia (por ejemplo Google Analytics). Esa medición se enciende
        solo cuando hay un identificador cargado en el entorno de publicación.
      </p>

      <h2 className="mt-10 font-display text-2xl font-extrabold text-navy">Publicidad</h2>
      <p className="mt-3 text-lg text-muted">
        Cuando haya anuncios o notas pagas, van a estar rotuladas. El medio se financia
        con publicidad, contenidos patrocinados y, más adelante, directorio y comercio
        de los rubros que cubre la marca.
      </p>
    </main>
  );
}
