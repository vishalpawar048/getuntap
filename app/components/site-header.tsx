"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled || !isHome
          ? "border-white/10 bg-[var(--nav-bg)]/95 backdrop-blur-md"
          : "border-transparent bg-[var(--nav-bg)]/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo.png"
            alt="Untap logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded object-cover"
          />
          <span className="text-base font-medium tracking-tight">
            Untap
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-sm font-normal text-white/70 md:flex"
        >
            <Link
              href="/study-app-blocker"
              className="transition-colors hover:text-white"
            >
              Study blocker
            </Link>
            <Link
              href="/for-students"
              className="transition-colors hover:text-white"
            >
              For students
            </Link>
            <div className="relative"  onMouseEnter={() => setFeaturesOpen(true)}
  onMouseLeave={() => setFeaturesOpen(false)}>
  <button
    type="button"
    onClick={() => setFeaturesOpen(true)}
    aria-expanded={featuresOpen}
    aria-controls="features-dropdown"
    className="inline-flex items-center gap-1 text-sm transition-colors hover:text-white"
  >
    Features

    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
      className={`h-3.5 w-3.5 transition-transform duration-200 ${
        featuresOpen ? "rotate-180" : ""
      }`}
    >
      <path
        d="m5 7.5 5 5 5-5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>

  {featuresOpen && (
    <div
      id="features-dropdown"
      className="absolute left-0 top-full z-50 mt-2 w-56 rounded border border-white/10 bg-black p-1 shadow-xl"
    >
      <Link
        href="/features/app-blocker"
        onClick={() => setFeaturesOpen(false)}
        className="block rounded-sm px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        App blocker
      </Link>

      <Link
        href="/features/focus-mode"
        onClick={() => setFeaturesOpen(false)}
        className="block rounded-sm px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        Focus mode
      </Link>

      <Link
        href="/features/parental-controls"
        onClick={() => setFeaturesOpen(false)}
        className="block rounded-sm px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        Parental controls
      </Link>

      <Link
        href="/features/screen-time-control"
        onClick={() => setFeaturesOpen(false)}
        className="block rounded-sm px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        Screen time control
      </Link>

      <Link
        href="/features/social-media-control"
        onClick={() => setFeaturesOpen(false)}
        className="block rounded-sm px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        Social media control
      </Link>

      <Link
        href="/features/stop-doomscrolling-app"
        onClick={() => setFeaturesOpen(false)}
        className="block rounded-sm px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        Stop doomscrolling
      </Link>
    </div>
  )}
</div>
             <Link
              href="/for-schools"
              className="transition-colors hover:text-white"
            >
              For schools
            </Link>
            <Link
              href="/enterprise"
              className="transition-colors hover:text-white"
            >
              Enterprise
            </Link>
            <Link
              href="/blog"
              className="hidden transition-colors hover:text-white lg:inline"
            >
              Blog
            </Link>
            <Link
              href="/case-studies"
              className="hidden transition-colors hover:text-white lg:inline"
            >
              Case studies
            </Link>
            <Link
              href="/research"
              className="hidden transition-colors hover:text-white lg:inline"
            >
              Research
            </Link>
          </nav>

        <a
          href="https://apps.apple.com/us/app/untap-screen-time-control/id6759078648"
          className="rounded bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Download
        </a>
      </div>
    </header>
  );
}
