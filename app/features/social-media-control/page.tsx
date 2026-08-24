import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";

export const metadata: Metadata = {
  title: "App to Limit Use of Social Media | Social Media Blocker App | Untap",
  description:
    "Untap is the social media blocker app that limits Instagram, TikTok & more on Android & iPhone. Social media timing app with real friction. Try it free today!",
  alternates: {
    canonical: "https://www.getuntap.com/features/social-media-control/",
  },
};

const features = [
  "Open Delays — Set a 5, 10, or 30-second pause before a social media app opens. That few seconds is where most impulse opens die. Priya, a designer in London, cut her Instagram opens by 40 percent from this feature alone.",
  "Daily Time Limits — Give each app a daily cap. Once it is used up, the app does not open again until the next day. No negotiation.",
  "Hard Locks — Block a social media app completely until a time you set. TikTok locked until 6pm. Instagram locked during work hours. You decide the rule, Untap holds it.",
  "Friend Lock — Someone you trust sets a password on your settings. You cannot change your limits without them — even when motivation is low and the urge to scroll is high.",
  "Prevent Uninstall — During an active session, the app cannot be deleted. No removing your way out of a weak moment.",
  "Soft, Moderate, and Strict Modes — Start with a small delay and build from there. You do not have to go strict on day one. Jordan P., a remote founder, ran soft mode with his whole team during focus blocks and nearly doubled their deep work hours.",
];

const faqs = [
  {
    q: "What does an app to limit use of social media actually do?",
    a: "It puts real friction between you and your social media apps — a delay, a breathing pause, a math challenge — so you get a genuine moment to decide before the scroll starts. Most people open their apps far less once that pause is in place.",
  },
  {
    q: "Is Untap a proper social media blocker app or just a timer?",
    a: "Both. You can use it as a social media timing app with daily limits and open delays, or as a full blocker that locks specific apps until a time you choose. Most people use a mix of both depending on the app.",
  },
  {
    q: "How does the social media timing app work on Android versus iPhone?",
    a: "The same way on both. Same delays, same locks, same Friend Lock, same usage reports. The iOS version uses Apple's official APIs so it is stable and update-proof. Android has full feature parity.",
  },
  {
    q: "Can I limit social media use for my kids without blocking everything?",
    a: "Yes. You can set specific limits per app — Instagram gets 20 minutes, TikTok gets locked until after homework — without touching anything else on their phone. Friend Lock lets you password-protect those settings so they cannot be changed without you.",
  },
  {
    q: "Will I lose access to my apps permanently?",
    a: "No. Nothing is deleted or permanently removed. You are adding a pause or a time limit, and you can adjust or remove it any time you like.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Everything stays on your device — no external servers, no ad tracking, nothing shared with anyone.",
  },
];

export default function SocialMediaControlPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* Hero Section */}
      <section className="section-dark relative isolate overflow-hidden px-6 pb-20 pt-32 sm:pt-40">
        <div className="absolute -right-32 top-0 -z-10 h-80 w-80 rounded-full bg-[var(--accent)]/20 blur-3xl" />
        <div className="absolute left-0 top-40 -z-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="mx-auto max-w-5xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            social media control
          </span>
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight lowercase text-white sm:text-6xl md:text-7xl">
            App to Limit Use of Social Media:{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[#ffb067] bg-clip-text text-transparent">
              Take Back the Hours You Did Not Mean to Lose
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65 sm:text-xl">
            You opened Instagram to reply to one message. Thirty-five minutes later you are watching a stranger's holiday reel and you have no idea how you got there.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="https://apps.apple.com/us/app/untap-screen-time-control/id6759078648"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-medium text-black transition hover:bg-white/90"
            >
              Download for iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.unrotapp.screencontrol"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-base font-medium text-white transition hover:bg-white/10"
            >
              Download for Android
            </a>
          </div>
        </div>
      </section>

      {/* THE SOLUTION Section */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-6 text-lg leading-9 text-gray-700">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                the solution
              </p>
              <p>
                It is not carelessness. It is the way these apps were built — no natural stopping point, no moment where you pause and decide. An app to limit use of social media puts that moment back in. It gives you a real second to choose before the scroll begins.
              </p>

              <p>
                That is exactly what Untap does. No guilt trips. No shame charts. Just the right amount of friction at the right moment — so you stay in control of your own time.
              </p>
            </div>

            {/* Visual Card - Social Media Friction */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
              <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-6 text-center">real friction</p>
              
              <div className="space-y-4">
                <div className="rounded-lg border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 p-6">
                  <p className="text-xs text-[var(--accent)] uppercase font-bold tracking-wide">pause placed</p>
                  <p className="text-2xl font-bold text-black mt-2">at right moment</p>
                </div>

                <div className="rounded-lg border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4">
                  <p className="text-xs text-[var(--muted)] uppercase font-semibold">autopilot</p>
                  <p className="text-2xl font-bold text-black mt-2">moment passes</p>
                </div>

                <div className="rounded-lg border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4">
                  <p className="text-xs text-[var(--muted)] uppercase font-semibold">you</p>
                  <p className="text-2xl font-bold text-black mt-2">stay in control</p>
                </div>
              </div>

              <p className="text-xs text-[var(--muted)] mt-6 text-center">60% reduction in social media time</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM Section */}
      <section className="section-dark relative isolate overflow-hidden px-6 py-24 sm:py-32">
        <div className="absolute -bottom-40 left-0 -z-10 h-96 w-96 rounded-full bg-[var(--accent)]/15 blur-3xl" />

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                the problem
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lowercase text-white sm:text-5xl">
                Why People Search for a Social Media Blocker App
              </h2>
              
              <div className="space-y-5 text-lg leading-relaxed text-white/60 mt-8">
                <p>
                  Most people who go looking for a social media blocker app have already tried deleting the apps. They reinstalled within three days.
                </p>

                <p>
                  Deleting apps feels dramatic in the moment and pointless by Tuesday. What people actually need is not removal — it is resistance. Something that slows the impulse down long enough for your brain to catch up with your thumb. That is the difference between a blunt tool and one that actually works.
                </p>

                <p>
                  Untap adds that resistance through intentional friction. Before a social media app opens, you might solve a quick math problem, hold a breathing pause, or scan a QR code. By the time you have done that, the autopilot moment has passed. Daniel K., a product manager in Berlin, cut his social media time by 60 percent using nothing but Untap's open delay. No deleting. No dramatic detox. Just a pause placed at the right moment.
                </p>
              </div>
            </div>

            {/* Visual Card - Delete vs Resist */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-8">
              <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold text-center mb-6">delete vs resist</p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">deleting apps</p>
                  <p className="text-3xl font-bold text-white mt-2">3 days</p>
                  <p className="text-sm text-white/70 mt-1">before reinstalling</p>
                </div>

                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">friction approach</p>
                  <p className="text-3xl font-bold text-[var(--accent)] mt-2">-60%</p>
                  <p className="text-sm text-white/70 mt-1">social media time reduction</p>
                </div>

                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">users report</p>
                  <p className="text-3xl font-bold text-white mt-2">sustained</p>
                  <p className="text-sm text-white/70 mt-1">habit change over time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Limit Social Media */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                how to use
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl">
                How to Limit Social Media Use Without Deleting Everything
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
              <p>
                You do not need to remove Instagram to stop losing hours to it. If your goal is to limit social media use during the parts of your day that matter — mornings, work hours, evenings with family — you can set a delay, a daily time limit, or a hard lock that only lifts when you say so.
              </p>

              <p>
                Set Instagram to wait 10 seconds before opening during work hours. Give TikTok a 30-minute daily limit. Lock Twitter completely until 6pm. It is your call, and you can adjust it any time your schedule changes.
              </p>

              <p>
                Arjun, an engineering student from Pune, went from 7 hours of daily screen time down to 1.8 hours once he set session limits on his social apps during study hours. Lina V., a therapist in Amsterdam, said Untap made her want to use her phone less — without making her feel guilty for picking it up. That is what a well-set social media timing app actually delivers — a shift in habit, not a punishment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Friend Lock & Accountability */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                accountability
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lowercase text-white sm:text-5xl">
                What If You Need to Limit Social Media Use for Someone Else Too?
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-white/60">
              <p>
                A lot of parents, couples, and study partners end up in a situation where one person needs accountability and the other needs visibility. Most social media timing app tools are designed for solo use only — and fall apart the moment someone really wants to scroll.
              </p>

              <p>
                Untap was built with that gap in mind. The Friend Lock feature lets someone you trust — a parent, a partner, a study buddy — set a password on your restrictions. You cannot quietly change your limits at 11pm without them. Tom A., a dad of three in Manchester, said his evenings finally felt like evenings again after setting this up with his kids. His children noticed the change before he did.
              </p>

              <p>
                For families with both iPhone and Android in the house, Untap covers both. The social media blocker app on iOS uses Apple's official FamilyControls and ManagedSettings APIs — nothing that breaks with an update. The Android version matches it feature for feature. Same limits, same locks, same reporting on both sides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Reporting */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                visibility
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl">
                A Social Media Timing App and Blocker — Not Just One or the Other
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
              <p>
                Blocking without data is just guessing. That is why Untap works as a social media timing app and a blocker together — you see exactly where the hours are going before you decide what to restrict.
              </p>

              <p>
                Daily, weekly, and monthly reports show your real usage patterns. Not the ones you assume you have. Priya S., a writer from Mumbai, said it felt like turning the lights on — she had no idea how much she was tapping until the weekly report showed her. That kind of visibility is what makes the limits you set actually stick, because you are working from facts, not feelings.
              </p>

              <p>
                On average, Untap users save 3.5 hours of screen time a day. And 85 percent notice less doomscrolling within the first week. Those numbers come from real usage data across the app — from users like Amir J. in Toronto who slept better after two weeks, and Sofía G. in Madrid who tried three other tools before Untap was the first one that held past the second week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            features
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lowercase text-white sm:text-5xl mb-12">
            Features That Make the Difference
          </h2>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition hover:bg-white/[0.08]"
              >
                <span className="text-lg leading-8 text-white">
                  ✓ {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                privacy
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl">
                Your Data Stays Yours
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
              <p>
                Everything runs locally on your device. There is no tracking SDK, no ad network getting a look at your habits, nothing sent to a server. If you are going to give an app to limit use of social media this much visibility into your phone, it should at least keep that information to itself. Untap does — always has, always will.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
            <div>
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight lowercase text-white sm:text-5xl md:sticky md:top-28">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="border-b border-white/10 pb-8 last:border-0"
                >
                  <h3 className="text-xl font-bold lowercase text-white">{faq.q}</h3>
                  <p className="mt-3 leading-relaxed text-white/60">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight lowercase text-black sm:text-5xl md:text-6xl">
            Download Untap <span className="text-[var(--accent)]">Today</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Available for iPhone and Android.
          </p>

           <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://apps.apple.com/us/app/untap-screen-time-control/id6759078648"
              className="group flex items-center gap-3 rounded-full bg-[var(--foreground)] px-7 py-4 text-base font-medium text-[var(--background)] transition hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.81-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              download for iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.unrotapp.screencontrol"
              className="group flex items-center gap-3 rounded-full border border-[var(--border)] px-7 py-4 text-base font-medium text-[var(--foreground)] transition hover:bg-[var(--foreground)]/5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 9.99l-2.302 2.302L5.864 2.658z" />
              </svg>
              download for android
            </a>
          </div>
        </div>
      </section>
    </>
  );
}