import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticlesByKind } from "@/lib/content/articles";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const articles = await getArticlesByKind("guia");
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  return { title: article?.title ?? "Guía" };
}

export default async function GuiaSlugPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article || article.kind !== "guia") notFound();

  return (
    <article className="mx-auto w-[min(760px,calc(100%-2rem))] py-10">
      <p className="font-display text-[13px] font-extrabold uppercase tracking-wide text-sky">
        {article.category}
      </p>
      <h1 className="mt-2 font-display text-4xl font-extrabold text-navy">{article.title}</h1>
      <Image
        src={article.cover}
        alt=""
        width={1200}
        height={720}
        className="mt-6 h-auto w-full rounded-[22px] object-cover"
      />
      <p className="mt-6 text-lg leading-relaxed text-ink">{article.excerpt}</p>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Esta guía no sustituye una consulta veterinaria. En urgencia real, buscá un
        profesional matriculado.
      </p>
    </article>
  );
}
