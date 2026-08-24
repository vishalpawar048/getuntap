"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

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
          <span className="text-lg font-semibold tracking-tight lowercase">
            untap
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 text-sm text-white/60 md:flex"
          >
            <Link
              href="/features/app-blocker"
              className="transition-colors hover:text-white"
            >
              app blocker
            </Link>
             <Link
              href="/features/focus-mode"
              className="transition-colors hover:text-white"
            >
              focus mode
            </Link>
             <Link
              href="/for-schools"
              className="transition-colors hover:text-white"
            >
              for schools
            </Link>
            <Link
              href="/enterprise"
              className="transition-colors hover:text-white"
            >
              enterprise
            </Link>
            <Link
              href="/blog"
              className="hidden transition-colors hover:text-white lg:inline"
            >
              blog
            </Link>
            <Link
              href="/case-studies"
              className="hidden transition-colors hover:text-white lg:inline"
            >
              case studies
            </Link>
            <Link
              href="/research"
              className="hidden transition-colors hover:text-white lg:inline"
            >
              research
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
            download
          </a>
        </div>
      </div>
    </header>
  );
}
