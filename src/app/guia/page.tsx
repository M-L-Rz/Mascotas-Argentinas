import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getArticlesByKind } from "@/lib/content/articles";
import { hrefFor } from "@/lib/content/paths";
import { pageMetadata } from "@/lib/seo/metadata";

export const revalidate = 60;

export const metadata: Metadata = pageMetadata({
  title: "Guías",
  description:
    "Guías locales y fechadas de Mascotas Argentinas. El contenido no sustituye la consulta con un veterinario matriculado.",
  path: "/guia",
});

export default async function GuiaPage() {
  const articles = await getArticlesByKind("guia");

  return (
    <main className="mx-auto w-[min(1120px,calc(100%-2rem))] py-10">
      <p className="font-display text-[13px] font-extrabold uppercase tracking-[0.08em] text-sky">
        Pocas, profundas, con fecha
      </p>
      <h1 className="mb-3 mt-2 font-display text-4xl font-extrabold text-navy">Guías</h1>
      <p className="mb-8 max-w-[52ch] text-lg text-muted">
        No es un wiki nacional. Arrancamos con una guía piloto de CABA. Consultá a tu
        vet: esto no es un protocolo clínico.
      </p>
      <div className="grid gap-4">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="grid overflow-hidden rounded-[22px] border border-line bg-white md:grid-cols-[280px_1fr]"
          >
            <Image
              src={article.cover}
              alt={article.title}
              width={560}
              height={360}
              sizes="(max-width: 768px) 100vw, 280px"
              className="h-full min-h-[180px] w-full object-cover"
            />
            <div className="p-5">
              <span className="inline-block rounded-full bg-sky-soft px-2.5 py-1 font-display text-xs font-extrabold uppercase tracking-wide text-navy">
                {article.category}
              </span>
              <h2 className="mt-2 font-display text-2xl text-navy">
                <Link href={hrefFor(article)}>{article.title}</Link>
              </h2>
              <p className="mt-2 text-muted">{article.excerpt}</p>
              <Link
                href={hrefFor(article)}
                className="mt-4 inline-flex font-display font-extrabold text-navy"
              >
                Leer la guía
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
