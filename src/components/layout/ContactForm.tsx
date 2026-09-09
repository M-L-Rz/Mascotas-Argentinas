"use client";

import { FormEvent, useState } from "react";

const topics = [
  { value: "prensa", label: "Prensa" },
  { value: "sponsors", label: "Sponsors / publicidad" },
  { value: "correcciones", label: "Corrección de una nota" },
  { value: "otro", label: "Otro" },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus("idle");

    const form = event.currentTarget;
    const payload = {
      name: String(new FormData(form).get("name") ?? ""),
      email: String(new FormData(form).get("email") ?? ""),
      topic: String(new FormData(form).get("topic") ?? "otro"),
      message: String(new FormData(form).get("message") ?? ""),
      company: String(new FormData(form).get("company") ?? ""),
    };

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json()) as { ok: boolean; message: string };
      setStatus(body.ok ? "ok" : "error");
      setMessage(body.message);
      if (body.ok) form.reset();
    } catch {
      setStatus("error");
      setMessage("No pudimos enviar el mensaje. Probá de nuevo.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="mt-8 grid gap-3" onSubmit={onSubmit}>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <label className="grid gap-1 text-sm font-semibold text-navy">
        Nombre
        <input
          name="name"
          required
          minLength={2}
          maxLength={120}
          className="rounded-2xl border-[1.5px] border-line bg-white px-4 py-3 font-normal text-ink"
        />
      </label>
      <label className="grid gap-1 text-sm font-semibold text-navy">
        Correo
        <input
          name="email"
          type="email"
          required
          className="rounded-2xl border-[1.5px] border-line bg-white px-4 py-3 font-normal text-ink"
        />
      </label>
      <label className="grid gap-1 text-sm font-semibold text-navy">
        Tema
        <select
          name="topic"
          className="rounded-2xl border-[1.5px] border-line bg-white px-4 py-3 font-normal text-ink"
          defaultValue="otro"
        >
          {topics.map((topic) => (
            <option key={topic.value} value={topic.value}>
              {topic.label}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm font-semibold text-navy">
        Mensaje
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={6}
          className="rounded-2xl border-[1.5px] border-line bg-white px-4 py-3 font-normal text-ink"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="mt-2 w-fit rounded-full bg-gold px-5 py-3 font-display text-[15px] font-extrabold text-navy-deep disabled:opacity-60"
      >
        {pending ? "Enviando…" : "Enviar"}
      </button>
      {status !== "idle" ? (
        <p className="font-bold text-navy">{message}</p>
      ) : null}
    </form>
  );
}
