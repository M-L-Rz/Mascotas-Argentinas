"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setPending(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          company: String(new FormData(event.currentTarget).get("company") ?? ""),
        }),
      });
      const payload = (await response.json()) as { ok: boolean; message: string };

      setStatus(payload.ok ? "ok" : "error");
      setMessage(payload.message);
      if (payload.ok) setEmail("");
    } catch {
      setStatus("error");
      setMessage("No pudimos anotar el correo. Probá de nuevo.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="flex flex-wrap gap-2" onSubmit={onSubmit}>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="tu@correo.com"
        aria-label="Correo electrónico"
        className="min-w-[180px] flex-1 rounded-full border-[1.5px] border-line bg-cream px-4 py-3"
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-navy px-[18px] py-3 font-display text-[15px] font-extrabold text-white disabled:opacity-60"
      >
        {pending ? "Enviando…" : "Quiero el correo"}
      </button>
      {status !== "idle" ? (
        <p className="basis-full font-bold text-navy">{message}</p>
      ) : null}
    </form>
  );
}
