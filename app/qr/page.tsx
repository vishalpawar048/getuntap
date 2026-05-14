import type { Metadata } from "next";
import QRCode from "qrcode";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: "Scan to Unblock Apps with Untap",
  description:
    "Scan this QR code to unblock apps inside Untap, or to install the Untap screen time control app on iPhone and Android.",
  alternates: { canonical: "/qr" },
  robots: { index: true, follow: true },
};

const APP_URL = "https://getuntap.com";

export default async function QRPage() {
  const qrSvg = await QRCode.toString(APP_URL, {
    type: "svg",
    color: {
      dark: "#1a1108",
      light: "#fffaf3",
    },
    margin: 1,
    width: 280,
    errorCorrectionLevel: "M",
  });

  return (
    <section className="flex flex-1 items-center justify-center px-6 pb-20 pt-32 sm:pb-28 sm:pt-36">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <p className="text-balance text-3xl font-medium leading-[1.2] tracking-tight sm:text-4xl md:text-5xl">
          Scan To{" "}
          <span className="text-[var(--accent)]">Unblock Apps</span>.
        </p>

        <p className="mt-6 max-w-lg text-balance text-base leading-7 text-[var(--muted)] sm:text-lg">
          Point your phone&apos;s camera at the code below when Untap asks you to scan a QR code.
        </p>

        <div
          className="mt-12 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6"
          aria-label="QR code linking to the Untap download page"
          dangerouslySetInnerHTML={{ __html: qrSvg }}
        />

        <p className="mt-6 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
          getuntap.com
        </p>

        <PrintButton qrSvg={qrSvg} />
      </div>
    </section>
  );
}
