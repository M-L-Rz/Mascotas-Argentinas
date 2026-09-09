export const SITE_URL = "https://mascotasargentinas.com.ar";
export const SITE_NAME = "Mascotas Argentinas";
export const SITE_TAGLINE =
  "Noticias, datos curiosos y guías de mascotas en Argentina. Un medio amable, sin recetas ni diagnósticos.";

/** Bandeja pública actual (Duck Address). Workspace en el dominio queda como opción posterior. */
export const MAIL_HELLO = "mascotasargentinas@duck.com";

export function formatArticleDate(iso: string): string {
  const [year, month, day] = iso.slice(0, 10).split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return new URL(path, SITE_URL).toString();
}
