import type { Article } from "@/types/article";
import { hrefFor } from "@/lib/content/paths";
import { MAIL_HELLO, SITE_NAME, SITE_TAGLINE, SITE_URL, absoluteUrl } from "@/lib/seo/site";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function newsMediaOrganizationJsonLd() {
  return {
    "@type": "NewsMediaOrganization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    email: MAIL_HELLO,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/brand/logo.png"),
      width: 1024,
      height: 1024,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      newsMediaOrganizationJsonLd(),
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "es-AR",
        description: SITE_TAGLINE,
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

export function articleJsonLd(article: Article) {
  const published = article.publishedAt.slice(0, 10);
  const pageUrl = absoluteUrl(hrefFor(article));
  const isGuide = article.kind === "guia";

  return {
    "@context": "https://schema.org",
    "@type": isGuide ? "Article" : "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(article.cover),
    },
    datePublished: published,
    dateModified: published,
    articleSection: article.category,
    inLanguage: "es-AR",
    author: { "@id": ORG_ID },
    publisher: newsMediaOrganizationJsonLd(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
    },
    isPartOf: { "@id": WEBSITE_ID },
  };
}
