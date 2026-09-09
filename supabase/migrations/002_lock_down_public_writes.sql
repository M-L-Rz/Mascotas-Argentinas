-- Escritura pública cerrada. Newsletter y contacto solo vía API del sitio (service role).
-- Las notas publicadas siguen pudiendo leerse con la publishable key.

drop policy if exists "anon_can_subscribe" on public.newsletter_subscribers;
drop policy if exists "anon_can_contact" on public.contact_messages;

revoke all on table public.newsletter_subscribers from anon, authenticated;
revoke all on table public.contact_messages from anon, authenticated;

revoke insert, update, delete on table public.articles from anon, authenticated;
grant select on table public.articles to anon, authenticated;
