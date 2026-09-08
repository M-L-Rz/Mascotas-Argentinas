import type { Metadata } from "next";
import { ArticleCard } from "@/components/article/ArticleCard";
import { getArticlesByKind } from "@/lib/content/articles";

export const metadata: Metadata = {
  title: "Noticias",
};

export default async function NoticiasPage() {
  const articles = await getArticlesByKind("noticia");

  return (
    <main className="mx-auto w-[min(1120px,calc(100%-2rem))] py-10">
      <h1 className="mb-6 font-display text-4xl font-extrabold text-navy">Noticias</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
  );
}
