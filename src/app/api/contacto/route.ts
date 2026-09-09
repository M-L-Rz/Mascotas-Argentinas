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

const topics = new Set(["prensa", "sponsors", "correcciones", "otro"]);

export async function POST(request: Request) {
  if (!isTrustedOrigin(request) || !allowRequest(`ct:${clientIp(request)}`)) {
    return NextResponse.json(
      { ok: false, message: "No pudimos enviar el mensaje. Probá más tarde." },
      { status: 429 },
    );
  }

  const body = await readJsonBody<{
    name?: unknown;
    email?: unknown;
    topic?: unknown;
    message?: unknown;
    company?: unknown;
  }>(request);

  if (!body || (body.company !== undefined && asString(body.company) === undefined)) {
    return NextResponse.json(
      { ok: false, message: "Completá nombre, un correo válido y un mensaje." },
      { status: 400 },
    );
  }

  if (asString(body.company)?.trim()) {
    return NextResponse.json({
      ok: true,
      message: "Listo. Lo leemos y respondemos a ese correo.",
    });
  }

  const name = asString(body.name)?.trim() ?? "";
  const email = asString(body.email)?.trim().toLowerCase() ?? "";
  const topicRaw = asString(body.topic) ?? "";
  const topic = topics.has(topicRaw) ? topicRaw : "otro";
  const message = asString(body.message)?.trim() ?? "";

  if (name.length < 2 || name.length > 120 || !isValidEmail(email) || message.length < 10 || message.length > 4000) {
    return NextResponse.json(
      { ok: false, message: "Completá nombre, un correo válido y un mensaje." },
      { status: 400 },
    );
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json(
      { ok: false, message: "El formulario todavía no está conectado." },
      { status: 503 },
    );
  }

  const { error } = await supabase.from("contact_messages").insert({
    name,
    email,
    topic,
    message,
  });

  if (error) {
    return NextResponse.json(
      { ok: false, message: "No pudimos enviar el mensaje. Probá de nuevo." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Listo. Lo leemos y respondemos a ese correo.",
  });
}
