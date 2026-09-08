import Image from "next/image";
import Link from "next/link";
import { ArticleCard, CuriousCard } from "@/components/article/ArticleCard";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { getHomeData, hrefFor } from "@/lib/content/articles";

export default async function HomePage() {
  const { featured, noticias, curiosos, guia } = await getHomeData();

  return (
    <main>
      <div className="relative overflow-hidden px-0 pb-3 pt-9">
        <div className="pointer-events-none absolute -right-20 -top-28 z-0 h-[420px] w-[420px] rounded-full bg-[#d9f1fa]" />
        <div className="pointer-events-none absolute bottom-[-70px] left-[8%] z-0 h-[180px] w-[180px] rounded-full bg-tan" />
        <div className="relative z-[1] mx-auto grid w-[min(1120px,calc(100%-2rem))] items-center gap-7 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-2.5 font-display text-[13px] font-extrabold uppercase tracking-[0.08em] text-sky">
              Noticias · datos curiosos · Argentina
            </p>
            <h1 className="mb-3 font-display text-[clamp(32px,4vw,48px)] font-extrabold leading-tight text-navy">
              Lo que pasa con las mascotas, contado cerca tuyo.
            </h1>
            <p className="mb-5 max-w-[36ch] text-lg text-muted">
              Un medio amable para leer, entender y después encontrar un comercio de
              confianza. Arrancamos por las notas. El mapa de veterinarias viene después.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/noticias"
                className="inline-flex rounded-full bg-gold px-[18px] py-3 font-display text-[15px] font-extrabold text-navy-deep"
              >
                Leer lo último
              </Link>
              <Link
                href="/curiosos"
                className="inline-flex rounded-full px-[18px] py-3 font-display text-[15px] font-extrabold text-navy shadow-[inset_0_0_0_2px_#163a6b]"
              >
                Un dato curioso
              </Link>
            </div>
          </div>
          {featured ? (
            <Link
              href={hrefFor(featured)}
              className="overflow-hidden rounded-[28px] border border-line bg-white shadow-card"
            >
              <Image
                src={featured.cover}
                alt=""
                width={900}
                height={520}
                className="h-[280px] w-full object-cover"
                priority
              />
              <div className="px-5 pb-5 pt-4">
                <span className="inline-block rounded-full bg-sky-soft px-2.5 py-1 font-display text-xs font-extrabold uppercase tracking-wide text-navy">
                  Destacada
                </span>
                <h2 className="mt-2.5 font-display text-[26px] leading-snug text-navy">
                  {featured.title}
                </h2>
                <p className="mt-1 text-sm text-muted">
                  {featured.location ?? "Argentina"} · {featured.readingMinutes} min de
                  lectura
                </p>
              </div>
            </Link>
          ) : null}
        </div>
      </div>

      <section id="noticias" className="py-9">
        <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 className="font-display text-[28px] text-navy">Noticias</h2>
            <Link href="/noticias" className="font-bold text-navy">
              Ver todas
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {noticias.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section id="curiosos" className="border-y border-line bg-gradient-to-b from-white to-sky-soft py-9">
        <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 className="font-display text-[28px] text-navy">Datos curiosos</h2>
            <Link href="/curiosos" className="font-bold text-navy">
              Ver todos
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {curiosos.map((article) => (
              <CuriousCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {guia ? (
        <section id="guia" className="py-9">
          <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
            <h2 className="mb-4 font-display text-[28px] text-navy">Guía piloto</h2>
            <article className="grid overflow-hidden rounded-[22px] border border-line bg-white md:grid-cols-[280px_1fr]">
              <Image
                src={guia.cover}
                alt=""
                width={560}
                height={360}
                className="h-full min-h-[180px] w-full object-cover"
              />
              <div className="flex flex-col gap-2 px-4 py-4">
                <span className="inline-block w-fit rounded-full bg-sky-soft px-2.5 py-1 font-display text-xs font-extrabold uppercase tracking-wide text-navy">
                  {guia.category}
                </span>
                <h3 className="font-display text-lg text-navy">
                  <Link href={hrefFor(guia)}>{guia.title}</Link>
                </h3>
                <p className="text-[15px] text-muted">{guia.excerpt}</p>
              </div>
            </article>
          </div>
        </section>
      ) : null}

      <section className="py-9">
        <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
          <div
            id="directorio"
            className="grid overflow-hidden rounded-[32px] bg-navy text-[#eef7fb] md:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="px-7 py-8">
              <span className="inline-block rounded-full bg-white/15 px-2.5 py-1 font-display text-xs font-extrabold uppercase tracking-wide text-white">
                Próximamente
              </span>
              <h2 className="mb-2.5 mt-2 font-display text-[30px] text-white">
                Veterinarias cerca tuyo, cuando el mapa valga la pena.
              </h2>
              <p className="mb-4 max-w-[42ch] text-[#c5e4f2]">
                Vamos a listar clínicas y comercios de terceros. Mascotas Argentinas no
                atiende ni da turnos: te ayuda a encontrarlos. Primero, el AMBA con fichas
                de verdad.
              </p>
              <Link
                href="/#newsletter"
                className="inline-flex rounded-full bg-gold px-[18px] py-3 font-display text-[15px] font-extrabold text-navy-deep"
              >
                Avisame cuando esté
              </Link>
            </div>
            <Image
              src="/images/parque.png"
              alt=""
              width={800}
              height={520}
              className="min-h-[260px] h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="newsletter" className="py-9">
        <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
          <div className="grid items-center gap-5 rounded-[28px] border border-line bg-white p-7 md:grid-cols-2">
            <div>
              <p className="mb-2.5 font-display text-[13px] font-extrabold uppercase tracking-[0.08em] text-sky">
                Sin cuenta, sin contraseña
              </p>
              <h2 className="font-display text-[28px] text-navy">
                Un correo cuando haya algo que valga leer.
              </h2>
              <p className="mt-2 max-w-[36ch] text-lg text-muted">
                Noticias y un curioso por semana. Podés irte cuando quieras.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  );
}
