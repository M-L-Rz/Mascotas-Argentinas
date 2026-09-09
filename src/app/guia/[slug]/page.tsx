import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/article/ArticleView";
import { getArticleBySlug, getArticlesByKind } from "@/lib/content/articles";
import { articleMetadata, missingArticleMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateStaticParams() {
  const articles = await getArticlesByKind("guia");
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article || article.kind !== "guia") return missingArticleMetadata("Guía");
  return articleMetadata(article);
}

export default async function GuiaSlugPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article || article.kind !== "guia") notFound();
  return <ArticleView article={article} />;
}
