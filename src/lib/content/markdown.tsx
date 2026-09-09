import type { ReactNode } from "react";

function safeHref(href: string): string | null {
  const value = href.trim();
  if (!value || value.startsWith("//")) return null;
  if (value.startsWith("/") && !value.startsWith("//")) return value;

  try {
    const url = new URL(value);
    if (url.protocol === "https:" || url.protocol === "http:" || url.protocol === "mailto:") {
      return url.protocol === "mailto:" ? value : url.toString();
    }
  } catch {
    return null;
  }

  return null;
}

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text))) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }

    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(<strong key={key++}>{token.slice(2, -2)}</strong>);
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const href = safeHref(link[2]);
        if (!href) {
          nodes.push(link[1]);
        } else {
          nodes.push(
            <a
              key={key++}
              href={href}
              className="font-semibold text-navy underline decoration-gold underline-offset-2"
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link[1]}
            </a>,
          );
        }
      }
    }

    last = match.index + token.length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function MarkdownBody({ source }: { source: string }) {
  const blocks = source.trim().split(/\n{2,}/);

  return (
    <div className="space-y-5 text-lg leading-relaxed text-ink">
      {blocks.map((block, index) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={index} className="pt-2 font-display text-2xl font-extrabold text-navy">
              {block.slice(3)}
            </h2>
          );
        }

        if (block.startsWith("> ")) {
          return (
            <blockquote
              key={index}
              className="rounded-2xl border border-line bg-sky-soft px-4 py-3 text-base text-navy"
            >
              {renderInline(block.replace(/^>\s?/gm, ""))}
            </blockquote>
          );
        }

        if (block.split("\n").every((line) => line.startsWith("- "))) {
          return (
            <ul key={index} className="list-disc space-y-2 pl-6">
              {block.split("\n").map((line, lineIndex) => (
                <li key={lineIndex}>{renderInline(line.slice(2))}</li>
              ))}
            </ul>
          );
        }

        return <p key={index}>{renderInline(block.replace(/\n/g, " "))}</p>;
      })}
    </div>
  );
}
