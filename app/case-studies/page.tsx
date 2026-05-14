import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../components/json-ld";
import { caseStudies } from "../lib/content";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title:
    "Untap Case Studies — Real Screen Time Reductions, Real People",
  description:
    "Read real Untap case studies: a student who cut screen time from 7 hours to under 2, a family who reclaimed dinnertime, and a remote team that doubled deep-work hours.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Untap Case Studies — Real Screen Time Reductions",
    description:
      "Documented before/after results from individuals, families, and teams using the Untap screen time control app.",
    url: `${SITE_URL}/case-studies`,
    type: "website",
  },
};

export default function CaseStudiesIndexPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: `${SITE_URL}/case-studies`,
      },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Untap Case Studies",
    url: `${SITE_URL}/case-studies`,
    hasPart: caseStudies.map((c) => ({
      "@type": "Article",
      headline: c.title,
      description: c.description,
      datePublished: c.publishedAt,
      url: `${SITE_URL}/case-studies/${c.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={[collectionJsonLd, breadcrumbJsonLd]} />
      <section className="px-6 py-24 pt-32 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <header className="mb-16 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Case Studies
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Real screen time reductions, documented end-to-end
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              Detailed before/after case studies from individuals, families,
              and teams who used Untap to break phone addiction and reclaim
              their attention. Each case study includes the configuration
              used, weekly progress, and measured outcomes.
            </p>
          </header>

          <ul className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((c) => (
              <li
                key={c.slug}
                className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 transition hover:-translate-y-0.5 hover:border-[var(--accent)]/40"
              >
                <Link href={`/case-studies/${c.slug}`} className="flex flex-1 flex-col">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-3xl font-bold text-[var(--accent)]">
                      {c.beforeHours}h → {c.afterHours}h
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[var(--muted)]">
                      {c.durationWeeks} weeks
                    </span>
                  </div>
                  <h2 className="mt-5 text-xl font-bold leading-snug tracking-tight group-hover:text-[var(--accent)]">
                    {c.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {c.subject}
                  </p>
                  <p className="mt-4 line-clamp-4 leading-relaxed text-[var(--foreground)]/75">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                  <span className="mt-6 text-sm font-medium text-[var(--accent)]">
                    Read case study →
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
