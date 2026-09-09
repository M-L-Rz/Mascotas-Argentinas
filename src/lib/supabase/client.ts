import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

function supabaseUrl(): string | undefined {
  return process.env.SUPABASE_URL;
}

/** Solo servidor. No uses NEXT_PUBLIC_ para estas claves: irían al navegador. */
export function getSupabase(): SupabaseClient | null {
  const url = supabaseUrl();
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) return null;
  return createClient(url, key);
}

/** Inserts de newsletter/contacto. Nunca importes esto en un componente cliente. */
export function getSupabaseAdmin(): SupabaseClient | null {
  const url = supabaseUrl();
  const key = process.env.SUPABASE_SECRET_KEY;

  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

