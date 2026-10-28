import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../components/json-ld";
import { blogPosts } from "../lib/content";
import { SITE_NAME, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title:
    "Untap Blog — Screen Time, Doomscrolling & Phone Addiction Guides",
  description: "In-depth guides on breaking phone addiction, stopping doomscrolling, and reducing screen time — backed by behavioral science and real user data from the Untap app.",
  alternates: { canonical: "https://www.getuntap.com/blog" },
  openGraph: {
    title:
      "Untap Blog — Screen Time, Doomscrolling & Phone Addiction Guides",
    description: "In-depth guides on breaking phone addiction, stopping doomscrolling, and reducing screen time.",
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
      <section className="px-6 py-32 pt-40 sm:py-40">
        <div className="mx-auto max-w-6xl">
          <header className="mb-20 max-w-4xl">
            <p className="eyebrow-label text-[var(--muted)]">
              UNTAP BLOG
            </p>
            <h1 className="mt-5 text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Guides to reduce screen time and break phone addiction
            </h1>
            <p className="mt-8 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              In-depth, evidence-based guides on doomscrolling, digital
              wellbeing, and intentional phone use — written by the team behind
              the Untap screen time control app.
            </p>
          </header>

          <ul className="grid gap-8 sm:grid-cols-2">
            {sorted.map((post) => (
              <li
                key={post.slug}
                className="group rounded border border-[var(--border)] bg-[var(--card)] p-10 transition hover:border-[var(--accent)]/40"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex h-full flex-col"
                >
                  <p className="eyebrow-label text-[var(--muted)]">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }).toUpperCase()}{" "}
                    · {post.readMinutes} MIN READ
                  </p>
                  <h2 className="mt-5 text-2xl font-normal leading-snug tracking-tight group-hover:text-[var(--accent)] sm:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-4 line-clamp-3 text-base leading-relaxed text-[var(--muted)]">
                    {post.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-8 text-sm font-medium text-[var(--accent)]">
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
