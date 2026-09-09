import Image from "next/image";
import type { Article } from "@/types/article";
import { MarkdownBody } from "@/lib/content/markdown";
import { jsonLdScript } from "@/lib/security/http";
import { articleJsonLd } from "@/lib/seo/jsonld";
import { formatArticleDate } from "@/lib/seo/site";

const kindLabel: Record<Article["kind"], string> = {
  noticia: "Noticia",
  curioso: "Dato curioso",
  guia: "Guía",
};

export function ArticleView({ article }: { article: Article }) {
  return (
    <article className="mx-auto w-[min(760px,calc(100%-2rem))] py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(articleJsonLd(article)) }}
      />
      <p className="font-display text-[13px] font-extrabold uppercase tracking-wide text-sky">
        {kindLabel[article.kind]} · {article.category}
        {article.location ? ` · ${article.location}` : ""}
      </p>
      <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight text-navy">
        {article.title}
      </h1>
      <p className="mt-3 text-muted">
        {formatArticleDate(article.publishedAt)} · {article.readingMinutes} min de lectura
      </p>
      <Image
        src={article.cover}
        alt={article.title}
        width={1200}
        height={720}
        sizes="(max-width: 760px) calc(100vw - 2rem), 760px"
        className="mt-6 h-auto w-full rounded-[22px] object-cover"
        priority
      />
      <p className="mt-6 text-xl leading-relaxed text-ink">{article.excerpt}</p>
      <div className="mt-6">
        <MarkdownBody source={article.body} />
      </div>
      <p className="mt-10 rounded-2xl border border-line bg-cream px-4 py-3 text-sm text-muted">
        Este texto es informativo y no sustituye la consulta con un veterinario matriculado.
        Mascotas Argentinas no diagnostica, no receta y no presta servicios clínicos.
      </p>
    </article>
  );
}
