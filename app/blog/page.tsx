import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../components/json-ld";
import { blogPosts } from "../lib/content";
import { SITE_NAME, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title:
    "Untap Blog — Screen Time, Doomscrolling & Phone Addiction Guides",
  description:
    "In-depth guides on breaking phone addiction, stopping doomscrolling, and reducing screen time — backed by behavioral science and real user data from the Untap app.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title:
      "Untap Blog — Screen Time, Doomscrolling & Phone Addiction Guides",
    description:
      "In-depth guides on breaking phone addiction, stopping doomscrolling, and reducing screen time.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    blogPost: sorted.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.publishedAt,
      dateModified: p.updatedAt ?? p.publishedAt,
      author: { "@type": "Organization", name: p.author },
      url: `${SITE_URL}/blog/${p.slug}`,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={[blogJsonLd, breadcrumbJsonLd]} />
      <section className="px-6 py-24 pt-32 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <header className="mb-16 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Untap Blog
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Guides to reduce screen time and break phone addiction
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              In-depth, evidence-based guides on doomscrolling, digital
              wellbeing, and intentional phone use — written by the team behind
              the Untap screen time control app.
            </p>
          </header>

          <ul className="grid gap-6 sm:grid-cols-2">
            {sorted.map((post) => (
              <li
                key={post.slug}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 transition hover:-translate-y-0.5 hover:border-[var(--accent)]/40"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex h-full flex-col"
                >
                  <p className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    · {post.readMinutes} min read
                  </p>
                  <h2 className="mt-4 text-2xl font-bold leading-snug tracking-tight group-hover:text-[var(--accent)]">
                    {post.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 leading-relaxed text-[var(--muted)]">
                    {post.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-xs text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 text-sm font-medium text-[var(--accent)]">
                    Read article →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
