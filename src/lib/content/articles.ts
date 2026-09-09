import { loadLocalArticles } from "@/lib/content/load-local";
import { getSupabase } from "@/lib/supabase/client";
import type { Article, ArticleKind } from "@/types/article";

export { hrefFor } from "@/lib/content/paths";

type ArticleRow = {
  slug: string;
  kind: ArticleKind;
  title: string;
  excerpt: string;
  body: string | null;
  category: string;
  cover_url: string | null;
  published_at: string;
  reading_minutes: number;
  featured: boolean | null;
  location: string | null;
};

function fromRow(row: ArticleRow, localBody?: string): Article {
  return {
    slug: row.slug,
    kind: row.kind,
    title: row.title,
    excerpt: row.excerpt,
    body: row.body?.trim() || localBody || "",
    category: row.category,
    cover: row.cover_url ?? "/images/perro-vereda.png",
    publishedAt: row.published_at,
    readingMinutes: row.reading_minutes,
    featured: row.featured ?? false,
    location: row.location ?? undefined,
  };
}

async function fromSupabase(local: Article[]): Promise<Article[] | null> {
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("articles")
    .select(
      "slug, kind, title, excerpt, body, category, cover_url, published_at, reading_minutes, featured, location",
    )
    .not("published_at", "is", null)
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false });

  if (error || !data) {
    console.error("Supabase articles:", error?.message);
    return null;
  }

  if (data.length === 0) return null;

  const localBySlug = new Map(local.map((article) => [article.slug, article]));
  return (data as ArticleRow[]).map((row) =>
    fromRow(row, localBySlug.get(row.slug)?.body),
  );
}

export async function getArticles(): Promise<Article[]> {
  const local = loadLocalArticles();
  const remote = await fromSupabase(local);
  if (remote && remote.length > 0) return remote;
  return local;
}

export async function getHomeData() {
  const articles = await getArticles();
  const featured =
    articles.find((article) => article.featured && article.kind === "noticia") ??
    articles.find((article) => article.kind === "noticia");
  const noticias = articles
    .filter((article) => article.kind === "noticia" && article.slug !== featured?.slug)
    .slice(0, 3);
  const curiosos = articles.filter((article) => article.kind === "curioso").slice(0, 3);
  const guia = articles.find((article) => article.kind === "guia");

  return { featured, noticias, curiosos, guia };
}

export async function getArticlesByKind(kind: ArticleKind): Promise<Article[]> {
  const articles = await getArticles();
  return articles.filter((article) => article.kind === kind);
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const articles = await getArticles();
  return articles.find((article) => article.slug === slug);
}
