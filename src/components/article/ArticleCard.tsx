import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types/article";
import { hrefFor } from "@/lib/content/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="flex min-h-full flex-col overflow-hidden rounded-[22px] border border-line bg-white">
      <Link href={hrefFor(article)} className="flex min-h-full flex-col">
        <Image
          src={article.cover}
          alt=""
          width={640}
          height={360}
          className="h-44 w-full object-cover"
        />
        <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3.5">
          <span className="inline-block w-fit rounded-full bg-sky-soft px-2.5 py-1 font-display text-xs font-extrabold uppercase tracking-wide text-navy">
            {article.category}
          </span>
          <h3 className="font-display text-lg leading-snug text-navy">{article.title}</h3>
          <p className="text-[15px] text-muted">{article.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}

export function CuriousCard({ article }: { article: Article }) {
  return (
    <article className="grid grid-cols-[88px_1fr] items-center gap-3.5 rounded-[22px] border border-line bg-white p-[18px]">
      <Image
        src={article.cover}
        alt=""
        width={88}
        height={88}
        className="h-[88px] w-[88px] rounded-[20px] object-cover"
      />
      <div>
        <span className="inline-block rounded-full bg-tan px-2.5 py-1 font-display text-xs font-extrabold uppercase tracking-wide text-navy">
          {article.category}
        </span>
        <h3 className="mt-1 font-display text-[17px] text-navy">
          <Link href={hrefFor(article)}>{article.title}</Link>
        </h3>
        <p className="mt-1 text-sm text-muted">{article.excerpt}</p>
      </div>
    </article>
  );
}
