import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";

export const metadata: Metadata = {
  title: "Timer Lock for Apps | Block Instagram App on Android & iPhone",
  description:
    "Timer Lock for Apps to block Instagram, social media & distracting apps. App Usage Tracker & Blocker for Android & iPhone. Take back your time. Try it free today!",
  alternates: {
    canonical: "https://www.getuntap.com/features/app-blocker/",
  },
};

const featuresSection = [
  {
    title: "Friend Lock",
    description:
      "someone you trust can set a password on your restrictions, so you can't quietly turn them off at 11pm.",
  },
  {
    title: "Prevent Uninstall",
    description:
      "keeps the app in place during a session instead of letting you delete your way out of a rough moment.",
  },
  {
    title: "Soft, moderate, and strict modes",
    description:
      "you don't need the harshest setting on day one. start light and tighten it as the habit builds.",
  },
  {
    title: "Cross-platform support",
    description:
      "set your delays and locks up once, and the same rules and reports carry over whether you're on Android or iOS.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a timer lock for apps actually do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It puts a short delay in front of an app before it opens — a challenge, a breathing pause, a QR scan — so you get a real second to decide instead of opening it on autopilot.",
      },
    },
    {
      "@type": "Question",
      name: "Can I fully block Instagram app access, or only slow it down?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both work. You can set a short delay, a daily time limit, or a full lock that only opens back up at a time you pick.",
      },
    },
    {
      "@type": "Question",
      name: "Is the app blocker android version as capable as the iPhone one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, they're built to match. Delays, locks, Friend Lock, and reports work the same way on both.",
      },
    },
    {
      "@type": "Question",
      name: "Will I lose access if I use it to block apps from my iPhone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Nothing is deleted or permanently removed. You're adding a pause, and you can adjust or remove it whenever you like.",
      },
    },
    {
      "@type": "Question",
      name: "Is the app usage tracker and blocker free to try?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There's a free tier with the core features. Paid plans add deeper analytics and unlimited restrictions if you need more.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Everything stays on your device — no external servers, no ad tracking, nothing shared.",
      },
    },
  ],
};

const features = [
  "Friend Lock – someone you trust can set a password on your restrictions, so you can't quietly turn them off at 11pm.",
  "Prevent Uninstall – keeps the app in place during a session instead of letting you delete your way out of a rough moment.",
  "Soft, moderate, and strict modes – you don't need the harshest setting on day one. Start light and tighten it as the habit builds.",
  "Cross-platform support – set your delays and locks up once, and the same rules and reports carry over whether you're on Android or iOS.",
];

const faqs = [
  {
    q: "What does a timer lock for apps actually do?",
    a: "It puts a short delay in front of an app before it opens — a challenge, a breathing pause, a QR scan — so you get a real second to decide instead of opening it on autopilot.",
  },
  {
    q: "Can I fully block Instagram app access, or only slow it down?",
    a: "Both work. You can set a short delay, a daily time limit, or a full lock that only opens back up at a time you pick.",
  },
  {
    q: "Is the app blocker android version as capable as the iPhone one?",
    a: "Yes, they're built to match. Delays, locks, Friend Lock, and reports work the same way on both.",
  },
  {
    q: "Will I lose access if I use it to block apps from my iPhone?",
    a: "No. Nothing is deleted or permanently removed. You're adding a pause, and you can adjust or remove it whenever you like.",
  },
  {
    q: "Is the app usage tracker and blocker free to try?",
    a: "There's a free tier with the core features. Paid plans add deeper analytics and unlimited restrictions if you need more.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Everything stays on your device — no external servers, no ad tracking, nothing shared.",
  },
];

export default function AppBlockerPage() {
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
            app blocker
          </span>
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight lowercase text-white sm:text-6xl md:text-7xl">
            Timer Lock for Apps:{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[#ffb067] bg-clip-text text-transparent">
              Best App Blocker Features to Improve Productivity
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65 sm:text-xl">
            You pick up your phone to check one notification. Twenty minutes later you're still scrolling, and you can't really explain how you got there. It's not really a willpower problem. It's a design problem — the app was built to skip past the moment where you'd normally stop and think.
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

      {/* THE SOLUTION Section - FIXED ALIGNMENT */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-6 text-lg leading-9 text-gray-700">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                the solution
              </p>
              <p>
                A timer lock for apps puts that moment back. It gives you a few seconds to actually decide whether opening Instagram right now is what you want, or just what your thumb wants.
              </p>

              <p>
                That's the whole idea behind Untap. It's not another app that shames you with a red screen or a scary chart. It just slows things down enough that you get to choose.
              </p>
            </div>

            {/* Visual Card - Pause Concept */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
              <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-6 text-center">pause concept</p>
              
              <div className="space-y-4">
                <div className="rounded-lg border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 p-6">
                  <p className="text-xs text-[var(--accent)] uppercase font-bold tracking-wide">10 seconds</p>
                  <p className="text-2xl font-bold text-black mt-2">breathing pause</p>
                </div>

                <div className="rounded-lg border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4">
                  <p className="text-xs text-[var(--muted)] uppercase font-semibold">challenge</p>
                  <p className="text-2xl font-bold text-black mt-2">math problem</p>
                </div>

                <div className="rounded-lg border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4">
                  <p className="text-xs text-[var(--muted)] uppercase font-semibold">alternative</p>
                  <p className="text-2xl font-bold text-black mt-2">QR scan</p>
                </div>
              </div>

              <p className="text-xs text-[var(--muted)] mt-6 text-center">enough friction to let you choose</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM Section - FIXED ALIGNMENT */}
      <section className="section-dark relative isolate overflow-hidden px-6 py-24 sm:py-32">
        <div className="absolute -bottom-40 left-0 -z-10 h-96 w-96 rounded-full bg-[var(--accent)]/15 blur-3xl" />

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                the problem
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lowercase text-white sm:text-5xl">
                Why People Search for an App Blocker Android Solution
              </h2>
              
              <div className="space-y-5 text-lg leading-relaxed text-white/60 mt-8">
                <p>
                  Most people who go looking for something to block distracting apps on Android have already tried the built-in digital wellbeing settings and given up on them within a week. They're clunky, easy to snooze, and honestly forgettable. What actually works is something you can't casually dismiss without a bit of friction — a math problem, a breathing pause, a QR scan. Untap works this way, and it's a big reason people stick with it longer than the tools they tried before.
                </p>

                <p>
                  One user went from 187 app opens a week down to 22. Another cut her Instagram checks by 40 percent, just from the pause screen alone. That's the kind of shift a decent app blocker android should be able to deliver — not through guilt, but through a genuine pause point.
                </p>
              </div>
            </div>

            {/* Visual Card - Results Stats */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-8">
              <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold text-center mb-6">real results</p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">user #1</p>
                  <p className="text-3xl font-bold text-white mt-2">187 → 22</p>
                  <p className="text-sm text-white/70 mt-1">app opens per week</p>
                </div>

                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">user #2</p>
                  <p className="text-3xl font-bold text-[var(--accent)] mt-2">-40%</p>
                  <p className="text-sm text-white/70 mt-1">Instagram checks reduced</p>
                </div>

                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">student in pune</p>
                  <p className="text-3xl font-bold text-white mt-2">7h → 2h</p>
                  <p className="text-sm text-white/70 mt-1">daily screen time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Block Instagram */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                how to use
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl">
                How to Block Instagram App Notifications Without Deleting It
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
              <p>
                You don't need to delete Instagram to get your time back. If your goal is to block Instagram app pickups during the parts of the day that matter — work hours, mornings, dinner — you can set a delay, a session limit, or a hard lock that only lifts at a time you choose. Set it to kick in after 9pm, or make it wait 10 seconds before opening during work hours. It's your call, and you can loosen or tighten it whenever your habits change.
              </p>

              <p>
                One reviewer, a student in Pune, said her screen time dropped from 7 hours a day to under 2 once she started using it to block Instagram app openings during study blocks. Small delay, big difference over a few weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* iPhone Section */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                cross-platform
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lowercase text-white sm:text-5xl">
                What If You Need to Block Apps From iPhone Instead?
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-white/60">
              <p>
                A lot of families and couples end up with one iPhone and one Android in the house, and most blockers only work well on one side. Untap was actually built first for iOS, so if you want to block apps from the iPhone, it uses Apple's own FamilyControls and ManagedSettings frameworks under the hood — nothing hacky, nothing that Apple could break with an update. You get the same delays and locks whether you're trying to block apps from iPhone or an Android device, which matters if your household isn't all one brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracker Section */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                tracking
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl">
                An App Usage Tracker and Blocker, Not Just One or the Other
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
              <p>
                Blocking without seeing the data first is just guessing. That's why Untap works as an app usage tracker and blocker together — you see where the hours are actually going before you decide what to restrict. Daily, weekly, and monthly reports show the real pattern, not the one you assume you have.
              </p>

              <p>
                On average, people using Untap as their app usage tracker and blocker save about 3.5 hours a day, and roughly 85 percent notice less doomscrolling within the first week. Those aren't marketing numbers pulled from nowhere — they come from actual usage across the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
     
      <section className="section-dark relative isolate overflow-hidden px-6 py-24 sm:py-32">
        <div className="absolute -bottom-40 left-0 -z-10 h-96 w-96 rounded-full bg-[var(--accent)]/15 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                Features
              </p>
              <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight lowercase text-white sm:text-5xl">
                Features That Make the Difference

              </h2>
            </div>
            <p className="text-lg leading-relaxed text-white/60">
              The app blocker features that actually work are the ones that give you a moment to pause, not a red screen to shame you. Untap's delays, locks, and Friend Lock are designed to be just enough friction to let you choose, without making you feel like you're in a prison.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {featuresSection.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:bg-white/[0.08]"
              >
                <span className="absolute right-6 top-6 text-xs font-semibold text-white/30">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-bold lowercase tracking-tight text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/60">
                  {benefit.description}
                </p>
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
                Everything runs locally on the device. There's no tracking SDK buried in there, no ad network getting a peek at your habits, nothing sent off to a server somewhere. If you're going to hand an app this much visibility into your phone use, it should at least keep that information to itself.
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