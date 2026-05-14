import type { Metadata } from "next";
import { JsonLd } from "../components/json-ld";
import { researchEntries } from "../lib/content";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title:
    "Research — The Evidence Behind Untap's Screen Time Approach",
  description:
    "Peer-reviewed studies on phone addiction, doomscrolling, screen time, and intentional friction. The research that informs Untap's screen time control app design.",
  keywords: [
    "screen time research",
    "phone addiction studies",
    "doomscrolling research",
    "digital wellbeing studies",
    "screen time mental health",
    "behavioral science phone use",
  ],
  alternates: { canonical: "/research" },
  openGraph: {
    title: "Research — Evidence Behind Untap",
    description:
      "Peer-reviewed studies on phone addiction, doomscrolling, and screen time interventions.",
    url: `${SITE_URL}/research`,
    type: "website",
  },
};

export default function ResearchPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Untap research index",
    url: `${SITE_URL}/research`,
    itemListElement: researchEntries.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "ScholarlyArticle",
        name: r.title,
        abstract: r.summary,
        citation: r.citation,
        datePublished: String(r.year),
        url: `${SITE_URL}/research#${r.slug}`,
      },
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
        name: "Research",
        item: `${SITE_URL}/research`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={[itemList, breadcrumbJsonLd]} />
      <section className="px-6 py-24 pt-32 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <header className="mb-16 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Research
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              The evidence behind Untap&apos;s screen time approach
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              A curated index of peer-reviewed studies and foundational
              behavioral-science work that informs how the Untap app is
              designed. Use this page if you are a researcher, journalist, or
              user looking for the citations behind our claims.
            </p>
          </header>

          <div className="space-y-8">
            {researchEntries.map((r) => (
              <article
                key={r.slug}
                id={r.slug}
                className="scroll-mt-28 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7"
              >
                <header className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="text-2xl font-bold tracking-tight">
                    {r.title}
                  </h2>
                  <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
                    {r.year}
                  </span>
                </header>
                <p className="mt-4 leading-relaxed text-[var(--foreground)]/80">
                  {r.summary}
                </p>
                <p className="mt-4 border-l-2 border-[var(--accent)] pl-4 text-sm italic text-[var(--muted)]">
                  Citation: {r.citation}
                </p>
                <p className="mt-4 text-sm font-medium text-[var(--foreground)]">
                  Implication for Untap:{" "}
                  <span className="font-normal text-[var(--muted)]">
                    {r.takeaway}
                  </span>
                </p>
              </article>
            ))}
          </div>

          <aside className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 text-sm leading-relaxed text-[var(--muted)]">
            Studies referenced here are summarized for accessibility. Please
            consult the original peer-reviewed publications for full methods
            and results. If you spot an error or want to suggest additional
            research, email{" "}
            <a
              href="mailto:info.mbpsoftwares@gmail.com"
              className="text-[var(--accent)]"
            >
              info.mbpsoftwares@gmail.com
            </a>
            .
          </aside>
        </div>
      </section>
    </>
  );
}
