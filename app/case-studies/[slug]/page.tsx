import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "../../components/json-ld";
import { PostBody } from "../../components/post-body";
import { caseStudies } from "../../lib/content";
import {
  ANDROID_APP_URL,
  IOS_APP_URL,
  ORG_NAME,
  SITE_URL,
} from "../../lib/site";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  const url = `${SITE_URL}/case-studies/${study.slug}`;
  return {
    title: study.title,
    description: study.description,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      type: "article",
      url,
      title: study.title,
      description: study.description,
      publishedTime: study.publishedAt,
      images: [{ url: "/logo.png", alt: study.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.description,
      images: ["/logo.png"],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const url = `${SITE_URL}/case-studies/${study.slug}`;
  const reductionPct = Math.round(
    ((study.beforeHours - study.afterHours) / study.beforeHours) * 100,
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.description,
    datePublished: study.publishedAt,
    author: { "@type": "Organization", name: "Untap Team", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: [`${SITE_URL}/logo.png`],
    about: "Screen time reduction case study",
  };

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
      {
        "@type": "ListItem",
        position: 3,
        name: study.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <article className="px-6 py-24 pt-32 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 text-sm text-[var(--muted)]"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[var(--foreground)]">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-[var(--foreground)]"
                >
                  Case Studies
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li
                className="truncate text-[var(--foreground)]"
                aria-current="page"
              >
                {study.title}
              </li>
            </ol>
          </nav>

          <header className="mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
              Case Study
            </p>
            <h1 className="mt-3 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              {study.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              {study.description}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
                <dt className="text-xs uppercase tracking-widest text-[var(--muted)]">
                  Before
                </dt>
                <dd className="mt-1 text-2xl font-bold">
                  {study.beforeHours}h
                </dd>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
                <dt className="text-xs uppercase tracking-widest text-[var(--muted)]">
                  After
                </dt>
                <dd className="mt-1 text-2xl font-bold text-[var(--accent)]">
                  {study.afterHours}h
                </dd>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
                <dt className="text-xs uppercase tracking-widest text-[var(--muted)]">
                  Reduction
                </dt>
                <dd className="mt-1 text-2xl font-bold">{reductionPct}%</dd>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
                <dt className="text-xs uppercase tracking-widest text-[var(--muted)]">
                  Duration
                </dt>
                <dd className="mt-1 text-2xl font-bold">
                  {study.durationWeeks}w
                </dd>
              </div>
            </dl>
          </header>

          <PostBody blocks={study.body} />

          <aside className="mt-20 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              Run the same playbook on your phone
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              Untap is free to download. The exact configuration described
              above is available in the app.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={IOS_APP_URL}
                className="rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition hover:opacity-90"
              >
                Download for iOS
              </a>
              <a
                href={ANDROID_APP_URL}
                className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--foreground)]/5"
              >
                Download for Android
              </a>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
