import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/article/ArticleView";
import { getArticleBySlug, getArticlesByKind } from "@/lib/content/articles";
import { articleMetadata, missingArticleMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateStaticParams() {
  const articles = await getArticlesByKind("curioso");
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article || article.kind !== "curioso") return missingArticleMetadata("Dato curioso");
  return articleMetadata(article);
}

export default async function CuriosoPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article || article.kind !== "curioso") notFound();
  return <ArticleView article={article} />;
}
