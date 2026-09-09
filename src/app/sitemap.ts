import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/content/articles";
import { hrefFor } from "@/lib/content/paths";
import { SITE_URL } from "@/lib/seo/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/noticias",
    "/curiosos",
    "/guia",
    "/contacto",
    "/legal",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}${hrefFor(article)}`,
    lastModified: article.publishedAt.slice(0, 10),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
