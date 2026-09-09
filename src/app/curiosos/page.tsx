import type { Metadata } from "next";
import { CuriousCard } from "@/components/article/ArticleCard";
import { getArticlesByKind } from "@/lib/content/articles";
import { pageMetadata } from "@/lib/seo/metadata";

export const revalidate = 60;

export const metadata: Metadata = pageMetadata({
  title: "Datos curiosos",
  description:
    "Datos curiosos de perros, gatos y aves en Mascotas Argentinas: hechos verificables, en criollo y sin mito.",
  path: "/curiosos",
});

export default async function CuriososPage() {
  const articles = await getArticlesByKind("curioso");

  return (
    <main className="mx-auto w-[min(1120px,calc(100%-2rem))] py-10">
      <p className="font-display text-[13px] font-extrabold uppercase tracking-[0.08em] text-sky">
        Entretenimiento con fuente
      </p>
      <h1 className="mb-3 mt-2 font-display text-4xl font-extrabold text-navy">
        Datos curiosos
      </h1>
      <p className="mb-8 max-w-[52ch] text-lg text-muted">
        Un hecho que se puede afirmar, y el límite donde empieza el mito. Para leer de
        un saque, no para diagnosticar.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <CuriousCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
  );
}
