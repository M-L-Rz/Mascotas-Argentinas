import type { Metadata } from "next";
import type { Article } from "@/types/article";
import { hrefFor } from "@/lib/content/paths";
import { SITE_NAME, absoluteUrl } from "@/lib/seo/site";

export const HOME_TITLE =
  "Mascotas Argentinas | Noticias, datos curiosos y guías de mascotas en Argentina";

const DEFAULT_OG_IMAGE = "/brand/logo.png";

type PageMetaInput = {
  title: string | { absolute: string };
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  robots?: Metadata["robots"];
};

function brandedTitle(title: string | { absolute: string }): string {
  return typeof title === "string" ? `${title} · ${SITE_NAME}` : title.absolute;
}

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  robots,
}: PageMetaInput): Metadata {
  const canonical = path === "" ? "/" : path;
  const url = absoluteUrl(canonical);
  const socialTitle = brandedTitle(title);

  return {
    title,
    description,
    alternates: { canonical },
    robots,
    openGraph: {
      type,
      locale: "es_AR",
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      url,
      images: [{ url: image }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}

export function articleMetadata(article: Article): Metadata {
  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: hrefFor(article),
    image: article.cover,
    type: "article",
    publishedTime: article.publishedAt.slice(0, 10),
  });
}

export function missingArticleMetadata(fallbackTitle: string): Metadata {
  return {
    title: fallbackTitle,
    robots: { index: false, follow: false },
  };
}
