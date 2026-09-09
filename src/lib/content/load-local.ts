import fs from "node:fs";
import path from "node:path";
import type { Article, ArticleKind } from "@/types/article";

const CONTENT_ROOT = path.join(process.cwd(), "content");

type Frontmatter = {
  slug: string;
  kind: ArticleKind;
  title: string;
  excerpt: string;
  category: string;
  cover: string;
  publishedAt: string;
  readingMinutes: number;
  featured?: boolean;
  location?: string;
};

function parseScalar(raw: string): string | number | boolean {
  const value = raw.trim();
  if (value === "true") return true;
  if (value === "false") return false;
  if (/^\d+$/.test(value)) return Number(value);
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function parseFrontmatter(file: string): { data: Frontmatter; body: string } {
  const match = file.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error("El markdown necesita frontmatter entre ---");
  }

  const data: Record<string, string | number | boolean> = {};
  for (const line of match[1].split("\n")) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    data[line.slice(0, colon).trim()] = parseScalar(line.slice(colon + 1));
  }

  return { data: data as Frontmatter, body: match[2].trim() };
}

function readKind(kindFolder: string): Article[] {
  const dir = path.join(CONTENT_ROOT, kindFolder);
  if (!fs.existsSync(dir)) return [];

  const articles: Article[] = [];
  for (const file of fs.readdirSync(dir).filter((name) => name.endsWith(".md"))) {
    try {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, body } = parseFrontmatter(raw);
      articles.push({
        slug: data.slug,
        kind: data.kind,
        title: data.title,
        excerpt: data.excerpt,
        body,
        category: data.category,
        cover: data.cover,
        publishedAt: String(data.publishedAt),
        readingMinutes: Number(data.readingMinutes),
        featured: Boolean(data.featured),
        location: data.location ? String(data.location) : undefined,
      });
    } catch (error) {
      console.error(`Markdown inválido (${kindFolder}/${file}):`, error);
    }
  }
  return articles;
}

export function loadLocalArticles(): Article[] {
  return [...readKind("noticias"), ...readKind("curiosos"), ...readKind("guias")].sort(
    (a, b) => b.publishedAt.localeCompare(a.publishedAt),
  );
}
