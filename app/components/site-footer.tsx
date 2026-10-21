import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="section-dark px-6 py-16">
      <div className="mx-auto w-full max-w-5xl">
        {/* Logo + tagline */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg object-cover"
          />
          <span className="text-lg font-semibold text-white">
            untap
          </span>
        </div>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/40">
          Set focus hours, then limit the rest of the day. Cap sessions on
          brain-rotting apps.
        </p>

        {/* Links grid */}
        <div className="mt-12 grid grid-cols-2 gap-8 text-sm sm:grid-cols-3 lg:grid-cols-5">
          <div>
            <p className="font-semibold uppercase tracking-widest text-white/30 text-xs">
              Product
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              <a
                href="https://apps.apple.com/us/app/untap-screen-time-control/id6759078648"
                className="text-white/60 transition hover:text-white"
              >
                iOS App
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.unrotapp.screencontrol"
                className="text-white/60 transition hover:text-white"
              >
                Android App
              </a>
              <Link
                href="/how-it-works"
                className="text-white/60 transition hover:text-white"
              >
                How It Works
              </Link>
              <Link
                href="/reviews"
                className="text-white/60 transition hover:text-white"
              >
                Reviews
              </Link>
              <Link
                href="/qr"
                className="text-white/60 transition hover:text-white"
              >
                QR Code
              </Link>
            </nav>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-widest text-white/30 text-xs">
              Solutions
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="/study-app-blocker"
                className="text-white/60 transition hover:text-white"
              >
                Study App Blocker
              </Link>
              <Link
                href="/study-to-unlock"
                className="text-white/60 transition hover:text-white"
              >
                Study To Unlock
              </Link>
              <Link
                href="/for-students"
                className="text-white/60 transition hover:text-white"
              >
                For Students
              </Link>
              <Link
                href="/for-schools"
                className="text-white/60 transition hover:text-white"
              >
                For Schools &amp; Colleges
              </Link>
              <Link
                href="/enterprise"
                className="text-white/60 transition hover:text-white"
              >
                Untap Enterprise
              </Link>
            </nav>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-widest text-white/30 text-xs">
              Learn
            </p>
            <nav className="mt-4 flex flex-col gap-3">
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
                Case Studies
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
            <p className="font-semibold uppercase tracking-widest text-white/30 text-xs">
              Legal
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="/privacy"
                className="text-white/60 transition hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 transition hover:text-white"
              >
                Terms & Conditions
              </Link>
            </nav>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-widest text-white/30 text-xs">
              Contact
            </p>
            <nav className="mt-4 flex flex-col gap-3">
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
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/30 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} untap. all rights reserved.</p>
          <p>
            made with care by{" "}
            <span className="text-white/50">MBP Softwares</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
