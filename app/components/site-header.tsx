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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[var(--dark-bg)]/90 backdrop-blur-md"
          : isHome
            ? "bg-transparent"
            : "bg-[var(--dark-bg)]"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white"
        >
          <Image
            src="/logo.png"
            alt="Untap logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-xl object-cover ring-1 ring-white/20"
          />
          <span className="text-lg font-semibold tracking-tight">
            Untap
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 text-sm text-white/60 md:flex"
          >
            <Link
              href="/study-app-blocker"
              className="transition-colors hover:text-white"
            >
              Study Blocker
            </Link>
            <Link
              href="/for-students"
              className="transition-colors hover:text-white"
            >
              For Students
            </Link>
            <div className="relative"  onMouseEnter={() => setFeaturesOpen(true)}
  onMouseLeave={() => setFeaturesOpen(false)}>
  <button
    type="button"
    onClick={() => setFeaturesOpen(true)}
    aria-expanded={featuresOpen}
    aria-controls="features-dropdown"
    className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white"
  >
    Features

    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
      className={`h-4 w-4 transition-transform duration-200 ${
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
      className="absolute left-0 top-full z-50 mt-4 w-64 rounded-2xl border border-white/10 bg-[var(--dark-bg)] p-2 shadow-xl backdrop-blur-md"
    >
      <Link
        href="/features/app-blocker"
        onClick={() => setFeaturesOpen(false)}
        className="block rounded-xl px-4 py-3 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
      >
        App Blocker
      </Link>

      <Link
        href="/features/focus-mode"
        onClick={() => setFeaturesOpen(false)}
        className="block rounded-xl px-4 py-3 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
      >
        Focus Mode
      </Link>

      <Link
        href="/features/parental-controls"
        onClick={() => setFeaturesOpen(false)}
        className="block rounded-xl px-4 py-3 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
      >
        Parental Controls
      </Link>

      <Link
        href="/features/screen-time-control"
        onClick={() => setFeaturesOpen(false)}
        className="block rounded-xl px-4 py-3 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
      >
        Screen Time Control
      </Link>

      <Link
        href="/features/social-media-control"
        onClick={() => setFeaturesOpen(false)}
        className="block rounded-xl px-4 py-3 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
      >
        Social Media Control
      </Link>

      <Link
        href="/features/stop-doomscrolling-app"
        onClick={() => setFeaturesOpen(false)}
        className="block rounded-xl px-4 py-3 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
      >
        Stop Doomscrolling
      </Link>
    </div>
  )}
</div>
             <Link
              href="/for-schools"
              className="transition-colors hover:text-white"
            >
              For Schools
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
              Case Studies
            </Link>
            <Link
              href="/research"
              className="hidden transition-colors hover:text-white lg:inline"
            >
              Research
            </Link>
            <Link
              href="/qr"
              className="hidden transition-colors hover:text-white lg:inline"
            >
              QR
            </Link>
          </nav>

          <a
            href="https://apps.apple.com/us/app/untap-screen-time-control/id6759078648"
            className="rounded-full bg-white/15 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/25"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
}
