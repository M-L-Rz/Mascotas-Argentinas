import path from "node:path";
import type { NextConfig } from "next";

const projectRoot = path.join(__dirname);

function supabaseStorageHost(): string | null {
  const raw = process.env.SUPABASE_URL;
  if (!raw) return null;
  try {
    const host = new URL(raw).hostname;
    return host.endsWith(".supabase.co") ? host : null;
  } catch {
    return null;
  }
}

const storageHost = supabaseStorageHost();

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  poweredByHeader: false,
  turbopack: {
    root: projectRoot,
  },
  images: {
    remotePatterns: storageHost
      ? [
          {
            protocol: "https",
            hostname: storageHost,
            pathname: "/storage/v1/object/public/**",
          },
        ]
      : [],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
