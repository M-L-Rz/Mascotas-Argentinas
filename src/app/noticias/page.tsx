import type { Metadata } from "next";
import { ArticleCard } from "@/components/article/ArticleCard";
import { getArticlesByKind } from "@/lib/content/articles";
import { pageMetadata } from "@/lib/seo/metadata";

export const revalidate = 60;

export const metadata: Metadata = pageMetadata({
  title: "Noticias",
  description:
    "Noticias de mascotas en Argentina, en Mascotas Argentinas: hechos locales y nacionales, sin recetas ni diagnósticos.",
  path: "/noticias",
});

export default async function NoticiasPage() {
  const articles = await getArticlesByKind("noticia");

  return (
    <main className="mx-auto w-[min(1120px,calc(100%-2rem))] py-10">
      <p className="font-display text-[13px] font-extrabold uppercase tracking-[0.08em] text-sky">
        Medio · Argentina
      </p>
      <h1 className="mb-3 mt-2 font-display text-4xl font-extrabold text-navy">Noticias</h1>
      <p className="mb-8 max-w-[52ch] text-lg text-muted">
        Ordenanzas, salud pública animal, alimento y trámites. Sin recetas y sin fingir
        que esto es un diario de consultorio.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
  );
}
