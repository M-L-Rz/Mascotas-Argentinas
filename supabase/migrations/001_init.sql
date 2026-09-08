-- Mascotas Argentinas — esquema inicial
-- Pegar en Supabase → SQL Editor → Run
-- Lectura pública de notas publicadas. Alta de newsletter con la anon key.

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  kind text not null check (kind in ('noticia', 'curioso', 'guia')),
  title text not null,
  excerpt text not null,
  body text,
  category text not null,
  cover_url text,
  location text,
  reading_minutes integer not null default 4,
  featured boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz not null default now()
);

alter table public.articles enable row level security;
alter table public.newsletter_subscribers enable row level security;

drop policy if exists "public_read_published_articles" on public.articles;
create policy "public_read_published_articles"
  on public.articles
  for select
  to anon, authenticated
  using (published_at is not null and published_at <= now());

drop policy if exists "anon_can_subscribe" on public.newsletter_subscribers;
create policy "anon_can_subscribe"
  on public.newsletter_subscribers
  for insert
  to anon
  with check (true);

create index if not exists articles_published_at_idx
  on public.articles (published_at desc)
  where published_at is not null;
