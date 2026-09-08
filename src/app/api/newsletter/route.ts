import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase/client";

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string };
  const email = body.email?.trim().toLowerCase();

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { ok: false, message: "Necesitamos un correo válido." },
      { status: 400 },
    );
  }

  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({
      ok: true,
      message: "Listo. Cuando conectemos Supabase, este correo queda guardado de verdad.",
    });
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
