import type { Metadata } from "next";
import Image from "next/image";
import { getArticlesByKind } from "@/lib/content/articles";

export const metadata: Metadata = {
  title: "Guías",
};

export default async function GuiaPage() {
  const articles = await getArticlesByKind("guia");

  return (
    <main className="mx-auto w-[min(1120px,calc(100%-2rem))] py-10">
      <h1 className="mb-6 font-display text-4xl font-extrabold text-navy">Guías</h1>
      <div className="grid gap-4">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="grid overflow-hidden rounded-[22px] border border-line bg-white md:grid-cols-[280px_1fr]"
          >
            <Image
              src={article.cover}
              alt=""
              width={560}
              height={360}
              className="h-full min-h-[180px] w-full object-cover"
            />
            <div className="p-5">
              <span className="inline-block rounded-full bg-sky-soft px-2.5 py-1 font-display text-xs font-extrabold uppercase tracking-wide text-navy">
                {article.category}
              </span>
              <h2 className="mt-2 font-display text-2xl text-navy">{article.title}</h2>
              <p className="mt-2 text-muted">{article.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
