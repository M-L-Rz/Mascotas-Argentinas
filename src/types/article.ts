export type ArticleKind = "noticia" | "curioso" | "guia";

export type Article = {
  slug: string;
  kind: ArticleKind;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  cover: string;
  publishedAt: string;
  readingMinutes: number;
  featured?: boolean;
  location?: string;
};
