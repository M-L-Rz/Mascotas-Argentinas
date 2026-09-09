import type { Article, ArticleKind } from "@/types/article";

export function hrefFor(article: Pick<Article, "kind" | "slug">): string {
  if (article.kind === "noticia") return `/noticias/${article.slug}`;
  if (article.kind === "curioso") return `/curiosos/${article.slug}`;
  return `/guia/${article.slug}`;
}

export function pathForKind(kind: ArticleKind): string {
  if (kind === "noticia") return "/noticias";
  if (kind === "curioso") return "/curiosos";
  return "/guia";
}
