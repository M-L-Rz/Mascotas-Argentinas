import type { Metadata } from "next";
import { CuriousCard } from "@/components/article/ArticleCard";
import { getArticlesByKind } from "@/lib/content/articles";

export const metadata: Metadata = {
  title: "Datos curiosos",
};

export default async function CuriososPage() {
  const articles = await getArticlesByKind("curioso");

  return (
    <main className="mx-auto w-[min(1120px,calc(100%-2rem))] py-10">
      <h1 className="mb-6 font-display text-4xl font-extrabold text-navy">
        Datos curiosos
      </h1>
      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <CuriousCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
  );
}
