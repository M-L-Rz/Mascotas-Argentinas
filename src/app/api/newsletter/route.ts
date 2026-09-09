import { NextResponse } from "next/server";
import {
  allowRequest,
  asString,
  clientIp,
  isTrustedOrigin,
  isValidEmail,
  readJsonBody,
} from "@/lib/security/http";
import { getSupabaseAdmin } from "@/lib/supabase/client";

export async function POST(request: Request) {
  if (!isTrustedOrigin(request) || !allowRequest(`nl:${clientIp(request)}`)) {
    return NextResponse.json(
      { ok: false, message: "No pudimos anotar el correo. Probá más tarde." },
      { status: 429 },
    );
  }

  const body = await readJsonBody<{ email?: unknown; company?: unknown }>(request);
  if (!body || (body.company !== undefined && asString(body.company) === undefined)) {
    return NextResponse.json(
      { ok: false, message: "Necesitamos un correo válido." },
      { status: 400 },
    );
  }

  if (asString(body.company)?.trim()) {
    return NextResponse.json({
      ok: true,
      message: "Listo. Te escribimos cuando haya algo que valga leer.",
    });
  }

  const email = asString(body.email)?.trim().toLowerCase() ?? "";
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Necesitamos un correo válido." },
      { status: 400 },
    );
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json(
      { ok: false, message: "El newsletter todavía no está conectado." },
      { status: 503 },
    );
  }

  const { error } = await supabase.from("newsletter_subscribers").insert({ email });

  if (error && error.code !== "23505") {
    return NextResponse.json(
      { ok: false, message: "No pudimos anotar el correo. Probá de nuevo." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Listo. Te escribimos cuando haya algo que valga leer.",
  });
}
