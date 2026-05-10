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
          <span className="text-lg font-semibold lowercase text-white">
            untap
          </span>
        </div>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/40">
          take back your time. reduce screen time and build healthier digital
          habits.
        </p>

        {/* Links grid */}
        <div className="mt-12 grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="font-semibold uppercase tracking-widest text-white/30 text-xs">
              Product
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              <a
                href="https://apps.apple.com/us/app/untap-screen-time-control/id6759078648"
                className="text-white/60 transition hover:text-white"
              >
                iOS app
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.Untapapp.screencontrol"
                className="text-white/60 transition hover:text-white"
              >
                Android app
              </a>
              <Link
                href="/qr"
                className="text-white/60 transition hover:text-white"
              >
                QR code
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
                privacy policy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 transition hover:text-white"
              >
                terms & conditions
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
                email
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
