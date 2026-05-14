import type { PostBlock } from "../lib/content";

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="prose-untap mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-[var(--foreground)]">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "p":
            return (
              <p key={i} className="text-[var(--foreground)]/80">
                {block.text}
              </p>
            );
          case "h2": {
            const id = block.id ?? slugify(block.text);
            return (
              <h2
                key={i}
                id={id}
                className="mt-12 scroll-mt-28 text-3xl font-bold tracking-tight"
              >
                {block.text}
              </h2>
            );
          }
          case "h3": {
            const id = block.id ?? slugify(block.text);
            return (
              <h3
                key={i}
                id={id}
                className="mt-8 scroll-mt-28 text-2xl font-semibold tracking-tight"
              >
                {block.text}
              </h3>
            );
          }
          case "ul":
            return (
              <ul
                key={i}
                className="list-disc space-y-2 pl-6 text-[var(--foreground)]/80 marker:text-[var(--accent)]"
              >
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol
                key={i}
                className="list-decimal space-y-2 pl-6 text-[var(--foreground)]/80 marker:text-[var(--accent)] marker:font-semibold"
              >
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="rounded-2xl border-l-4 border-[var(--accent)] bg-[var(--card)] p-6 text-xl italic leading-relaxed text-[var(--foreground)]/85"
              >
                <p>&ldquo;{block.text}&rdquo;</p>
                {block.cite ? (
                  <footer className="mt-3 text-base not-italic text-[var(--muted)]">
                    — {block.cite}
                  </footer>
                ) : null}
              </blockquote>
            );
          case "stat":
            return (
              <div
                key={i}
                className="flex flex-col items-start gap-1 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
              >
                <span className="text-4xl font-bold text-[var(--accent)]">
                  {block.value}
                </span>
                <span className="text-base text-[var(--muted)]">
                  {block.label}
                </span>
                {block.source ? (
                  <span className="mt-1 text-xs text-[var(--muted)]">
                    Source: {block.source}
                  </span>
                ) : null}
              </div>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent-soft)]/40 p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
                  {block.title}
                </p>
                <p className="mt-2 text-[var(--foreground)]/85">{block.text}</p>
              </aside>
            );
        }
      })}
    </div>
  );
}
