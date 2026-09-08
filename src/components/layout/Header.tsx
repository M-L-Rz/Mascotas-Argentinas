"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/noticias", label: "Noticias" },
  { href: "/curiosos", label: "Curiosos" },
  { href: "/guia", label: "Guías" },
  { href: "/directorio", label: "Directorio", soon: true },
  { href: "/#newsletter", label: "Newsletter" },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Mascotas Argentinas">
      <Image
        src="/brand/icon.png"
        alt=""
        width={compact ? 36 : 40}
        height={compact ? 36 : 40}
        className="rounded-full bg-white"
        priority
      />
      <span className="leading-none">
        <span className="block font-display text-[13px] font-extrabold tracking-[0.04em] text-navy">
          MASCOTAS
        </span>
        <span className="block font-display text-[11px] font-bold tracking-[0.08em] text-sky">
          ARGENTINAS
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] items-center justify-between gap-4 py-2.5">
        <Brand />
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-soft text-lg text-navy md:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen((value) => !value)}
        >
          ☰
        </button>
        <nav
          className={`${open ? "flex" : "hidden"} absolute left-4 right-4 top-[4.25rem] flex-col rounded-2xl border border-line bg-white p-2 md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((link) => {
            const active =
              link.href !== "/#newsletter" &&
              (pathname === link.href || pathname.startsWith(`${link.href}/`));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-full px-3 py-2 font-display text-[15px] font-bold text-navy ${active ? "bg-sky-soft" : "hover:bg-sky-soft"}`}
              >
                {link.label}
                {link.soon ? (
                  <span className="ml-1 inline-flex rounded-full bg-tan px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-navy">
                    Pronto
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-3 bg-navy-deep px-0 pb-6 pt-9 text-[#d5e8f3]">
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] gap-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-3 inline-flex rounded-2xl bg-white p-2">
            <Image src="/brand/logo.png" alt="Mascotas Argentinas" width={88} height={88} />
          </div>
          <p className="max-w-sm text-sm leading-relaxed">
            Medio digital de mascotas en Argentina. Publicidad, contenido y, más
            adelante, directorio.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-white">Secciones</h2>
          <Link className="mt-1.5 block text-[#c5e4f2]" href="/noticias">
            Noticias
          </Link>
          <Link className="mt-1.5 block text-[#c5e4f2]" href="/curiosos">
            Datos curiosos
          </Link>
          <Link className="mt-1.5 block text-[#c5e4f2]" href="/guia">
            Guías
          </Link>
          <Link className="mt-1.5 block text-[#c5e4f2]" href="/directorio">
            Directorio
          </Link>
        </div>
        <div>
          <h2 className="mb-2 font-display text-white">Sitio</h2>
          <Link className="mt-1.5 block text-[#c5e4f2]" href="/contacto">
            Contacto
          </Link>
          <Link className="mt-1.5 block text-[#c5e4f2]" href="/legal">
            Uso de marca y privacidad
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-6 w-[min(1120px,calc(100%-2rem))] border-t border-[#274a72] pt-4 text-[13px] text-[#9db8cb]">
        Los contenidos son informativos y no sustituyen la consulta con un
        veterinario matriculado. Mascotas Argentinas no presta servicios
        clínicos. Marca mixta registrada ante el INPI.
      </p>
    </footer>
  );
}
