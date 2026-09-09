-- Mascotas Argentinas — esquema inicial (MVP editorial)
-- Lectura pública de notas publicadas.
-- Newsletter y contacto: sin INSERT para anon. El sitio escribe con la secret key.

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
  created_at timestamptz not null default now(),
  constraint newsletter_email_len check (char_length(email) between 5 and 320)
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  topic text not null default 'otro',
  message text not null,
  created_at timestamptz not null default now(),
  constraint contact_name_len check (char_length(name) between 2 and 120),
  constraint contact_email_len check (char_length(email) between 5 and 320),
  constraint contact_message_len check (char_length(message) between 10 and 4000),
  constraint contact_topic_ok check (topic in ('prensa', 'sponsors', 'correcciones', 'otro'))
);

alter table public.articles enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.contact_messages enable row level security;

drop policy if exists "public_read_published_articles" on public.articles;
create policy "public_read_published_articles"
  on public.articles
  for select
  to anon, authenticated
  using (published_at is not null and published_at <= now());

drop policy if exists "anon_can_subscribe" on public.newsletter_subscribers;
drop policy if exists "anon_can_contact" on public.contact_messages;

revoke all on table public.newsletter_subscribers from anon, authenticated;
revoke all on table public.contact_messages from anon, authenticated;
revoke insert, update, delete on table public.articles from anon, authenticated;
grant select on table public.articles to anon, authenticated;

create index if not exists articles_published_at_idx
  on public.articles (published_at desc)
  where published_at is not null;

create index if not exists articles_kind_published_idx
  on public.articles (kind, published_at desc)
  where published_at is not null;
