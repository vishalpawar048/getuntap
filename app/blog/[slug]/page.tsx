import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "../../components/json-ld";
import { PostBody } from "../../components/post-body";
import { blogPosts } from "../../lib/content";
import {
  ANDROID_APP_URL,
  IOS_APP_URL,
  ORG_NAME,
  SITE_NAME,
  SITE_URL,
} from "../../lib/site";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: "/logo.png", alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/logo.png"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Organization", name: post.author, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: [`${SITE_URL}/logo.png`],
    keywords: post.tags.join(", "),
    inLanguage: "en",
    articleSection: "Digital Wellbeing",
    wordCount: post.body.reduce((acc, block) => {
      const text =
        "text" in block
          ? block.text
          : "items" in block
            ? block.items.join(" ")
            : "";
      return acc + text.split(/\s+/).length;
    }, 0),
    isPartOf: {
      "@type": "Blog",
      name: `${SITE_NAME} Blog`,
      url: `${SITE_URL}/blog`,
    },
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
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
                <Link href="/blog" className="hover:text-[var(--foreground)]">
                  Blog
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li
                className="truncate text-[var(--foreground)]"
                aria-current="page"
              >
                {post.title}
              </li>
            </ol>
          </nav>

          <header className="mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
              {post.tags[0]}
            </p>
            <h1 className="mt-3 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              {post.description}
            </p>
            <p className="mt-6 text-sm text-[var(--muted)]">
              By {post.author} ·{" "}
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>{" "}
              · {post.readMinutes} min read
            </p>
          </header>

          <PostBody blocks={post.body} />

          <aside className="mt-20 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              Ready to put this into practice?
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              Untap is free to download. Try the 10-second open delay today.
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
