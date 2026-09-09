import { SITE_URL } from "@/lib/seo/site";

const WINDOW_MS = 60 * 60 * 1000;
const MAX_HITS = 8;
const MAX_TRACKED_KEYS = 10_000;

const hits = new Map<string, { count: number; resetAt: number }>();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return value.length >= 5 && value.length <= 320 && EMAIL_RE.test(value);
}

/** Only strings. Objects/arrays from JSON must not reach `.trim()`. */
export function asString(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

export async function readJsonBody<T>(request: Request): Promise<T | null> {
  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.startsWith("application/json")) return null;

  try {
    return (await request.json()) as T;
  } catch {
    return null;
  }
}

function allowedHosts(): Set<string> {
  const hosts = new Set<string>([
    "mascotasargentinas.com.ar",
    "www.mascotasargentinas.com.ar",
    "mascotasargentinas.com",
    "www.mascotasargentinas.com",
  ]);

  try {
    hosts.add(new URL(SITE_URL).host);
  } catch {
    /* SITE_URL is a constant */
  }

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercel) hosts.add(vercel.replace(/^https?:\/\//, ""));

  if (process.env.NODE_ENV !== "production") {
    hosts.add("localhost:3000");
    hosts.add("127.0.0.1:3000");
  }

  return hosts;
}

export function isTrustedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const hosts = allowedHosts();

  if (origin) {
    try {
      const url = new URL(origin);
      if (!hosts.has(url.host)) return false;
      if (process.env.NODE_ENV === "production") return url.protocol === "https:";
      return url.protocol === "http:" || url.protocol === "https:";
    } catch {
      return false;
    }
  }

  if (process.env.NODE_ENV === "production") return false;
  const host = request.headers.get("host") ?? "";
  return hosts.has(host);
}

/** Prefer platform-set IP headers. The first XFF hop is attacker-controlled. */
export function clientIp(request: Request): string {
  const real = request.headers.get("x-real-ip")?.trim();
  if (real) return real;

  const vercel = request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim();
  if (vercel) return vercel;

  if (process.env.NODE_ENV !== "production") {
    const forwarded = request.headers.get("x-forwarded-for");
    if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return "unknown";
}

function pruneHits(now: number) {
  if (hits.size < MAX_TRACKED_KEYS) return;
  for (const [key, current] of hits) {
    if (now >= current.resetAt) hits.delete(key);
  }
  if (hits.size >= MAX_TRACKED_KEYS) {
    const oldest = hits.keys().next().value;
    if (oldest) hits.delete(oldest);
  }
}

export function allowRequest(ip: string): boolean {
  const now = Date.now();
  pruneHits(now);
  const current = hits.get(ip);

  if (!current || now >= current.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  current.count += 1;
  return current.count <= MAX_HITS;
}

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
