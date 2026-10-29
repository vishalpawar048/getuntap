import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="section-dark border-t border-white/10 px-6 py-20">
      <div className="mx-auto w-full max-w-7xl">
        {/* Logo + tagline */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded object-cover"
          />
          <span className="text-base font-medium tracking-tight text-white">
            Untap
          </span>
        </div>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
          Set focus hours, then limit the rest of the day. Cap sessions on
          brain-rotting apps.
        </p>

        {/* Links grid */}
        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 text-sm sm:grid-cols-3 lg:grid-cols-6">
          <div>
            <p className="eyebrow-label text-white/40">
              PRODUCT
            </p>
            <nav className="mt-5 flex flex-col gap-3">
              <a
                href="https://apps.apple.com/us/app/untap-screen-time-control/id6759078648"
                className="text-white/60 transition hover:text-white"
              >
                iOS app
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.unrotapp.screencontrol"
                className="text-white/60 transition hover:text-white"
              >
                Android app
              </a>
              <Link
                href="/how-it-works"
                className="text-white/60 transition hover:text-white"
              >
                How it works
              </Link>
              <Link
                href="/reviews"
                className="text-white/60 transition hover:text-white"
              >
                Reviews
              </Link>
            </nav>
          </div>
<div>
  <p className="eyebrow-label text-white/40">
    FEATURES
  </p>

  <nav className="mt-5 flex flex-col gap-3">
    <Link
      href="/features/app-blocker"
      className="text-white/60 transition hover:text-white"
    >
      App blocker
    </Link>

    <Link
      href="/features/focus-mode"
      className="text-white/60 transition hover:text-white"
    >
      Focus mode
    </Link>

    <Link
      href="/features/parental-controls"
      className="text-white/60 transition hover:text-white"
    >
      Parental controls
    </Link>

    <Link
      href="/features/screen-time-control"
      className="text-white/60 transition hover:text-white"
    >
      Screen time control
    </Link>

    <Link
      href="/features/social-media-control"
      className="text-white/60 transition hover:text-white"
    >
      Social media control
    </Link>

    <Link
      href="/features/stop-doomscrolling-app"
      className="text-white/60 transition hover:text-white"
    >
      Stop doomscrolling
    </Link>
  </nav>
</div>
          <div>
            <p className="eyebrow-label text-white/40">
              SOLUTIONS
            </p>
            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="/study-app-blocker"
                className="text-white/60 transition hover:text-white"
              >
                Study app blocker
              </Link>
              <Link
                href="/study-to-unlock"
                className="text-white/60 transition hover:text-white"
              >
                Study to unlock
              </Link>
              <Link
                href="/for-students"
                className="text-white/60 transition hover:text-white"
              >
                For students
              </Link>
              <Link
                href="/for-schools"
                className="text-white/60 transition hover:text-white"
              >
                For schools &amp; colleges
              </Link>
              <Link
                href="/enterprise"
                className="text-white/60 transition hover:text-white"
              >
                Untap enterprise
              </Link>
            </nav>
          </div>

          <div>
            <p className="eyebrow-label text-white/40">
              LEARN
            </p>
            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="/blog"
                className="text-white/60 transition hover:text-white"
              >
                Blog
              </Link>
              <Link
                href="/case-studies"
                className="text-white/60 transition hover:text-white"
              >
                Case studies
              </Link>
              <Link
                href="/research"
                className="text-white/60 transition hover:text-white"
              >
                Research
              </Link>
            </nav>
          </div>

          <div>
            <p className="eyebrow-label text-white/40">
              LEGAL
            </p>
            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="/privacy"
                className="text-white/60 transition hover:text-white"
              >
                Privacy policy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 transition hover:text-white"
              >
                Terms &amp; conditions
              </Link>
            </nav>
          </div>

          <div>
            <p className="eyebrow-label text-white/40">
              CONTACT
            </p>
            <nav className="mt-5 flex flex-col gap-3">
              <a
                href="mailto:info.mbpsoftwares@gmail.com"
                className="text-white/60 transition hover:text-white"
              >
                Email
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Untap. All rights reserved.</p>
          <p>
            Made with care by{" "}
            <span className="text-white/50">MBP Softwares</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
