import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";

export const metadata: Metadata = {
  title: "Screen Time Control App | Reduce Screen Time App for iOS & Android | Untap",
  description:
    "Untap is the screen time control app that helps you reduce screen time on iPhone and Android. Screen lock time app with real friction. Try it free today!",
  alternates: {
    canonical: "https://www.getuntap.com/features/screen-time-control/",
  },
};

const featuresSection = [
  {
    n: "01",
    title: "Open Delays",
    body: "Set a 5, 10, or 30-second pause before any app opens. That pause is where most impulse opens die. Priya, a designer in London, cut her Instagram opens by 40 percent from this one feature alone.",
  },
  {
    n: "02",
    title: "Daily Time Limits",
    body: "Give each app a daily cap. Once it runs out, the app does not open again until the next day. No negotiating your way around it.",
  },
  {
    n: "03",
    title: "Hard Session Locks",
    body: "Block specific apps completely for a time window you set. The apps to manage time spent on phone that cause the most damage — TikTok, Instagram, YouTube — stay closed until your session ends.",
  },
  {
    n: "04",
    title: "Friend Lock",
    body: "Someone you trust sets a password on your Untap settings. You cannot quietly change your limits at 11pm without them. Daniel K., a product manager in Berlin, cut his social media time by 60 percent using this feature.",
  },
  {
    n: "05",
    title: "Prevent Uninstall",
    body: "During an active session, Untap cannot be deleted. There is no removing your way out of a weak moment.",
  },
  {
    n: "06",
    title: "Soft, Moderate, and Strict Modes",
    body: "Start light. Tighten it as the habit builds. Tom A., a dad of three in Manchester, started on soft mode with his kids and said his evenings finally felt like evenings again within two weeks.",
  },
];

const comparisons = [
  {
    title: "ScreenZen",
    description:
      "ScreenZen is completely free and adds a countdown delay before apps open. That is its whole model — a nudge, then you can proceed anyway. There is no hard blocking. No Friend Lock. No session locks. No way to stop yourself from just waiting out the timer and opening the app. It works well for people whose phone use is mostly autopilot rather than compulsion. But the moment you really want to scroll, ScreenZen does not hold.",
  },
  {
    title: "Opal",
    description:
      "Opal is the premium end of this category. Deep Focus mode is genuinely hard to bypass — but it is locked behind Opal Pro, which costs $99.99 a year or $19.99 a month. The free version gives you one recurring session and basic blocking you can still override. On top of that, Opal's strongest features are iOS-only. Android users get a version that lags behind. And at $100 a year, you are paying premium prices for gamification features — gems, streaks, leaderboards — that many people find more annoying than useful.",
  },
];

const faqs = [
  {
    q: "What does a screen time control app actually do?",
    a: "It adds real friction before your phone lets you open distracting apps — a delay, a breathing pause, a math challenge, a QR scan. That pause gives your brain a moment to decide instead of reacting on autopilot. Most people open their distracting apps far less just from that one change.",
  },
  {
    q: "Is Untap a good reduce screen time app for both Android and iPhone?",
    a: "Yes. The iOS version uses Apple's official APIs. The Android version matches it feature for feature — same delays, same locks, same Friend Lock, same reports. There is no watered-down version on either side.",
  },
  {
    q: "How does the screen lock time app feature work?",
    a: "You set a time window and every app you flag as distracting locks for that entire window. They are not deleted. They simply will not open until your session ends. You can also set hard locks that hold until a time you choose, regardless of session length.",
  },
  {
    q: "Why is Untap better than ScreenZen?",
    a: "ScreenZen adds a delay you can wait out and then open the app anyway. There is no hard blocking, no Friend Lock, and no way to prevent yourself from bypassing it when motivation is low. Untap has all three — real locks, Friend Lock, and Prevent Uninstall — which is what actually holds when you genuinely want to scroll.",
  },
  {
    q: "Why is Untap better than Opal?",
    a: "Opal's best features sit behind a $99.99 per year paywall and the free version is easy to bypass. Opal's Android version also lags behind iPhone. Untap gives you hard locking and full cross-platform support without the $100 annual subscription or gamification features most people never use.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Everything stays on your device — no external servers, no ad tracking, nothing shared with anyone. Untap has no analytics SDK and no advertising network running in the background.",
  },
  {
    q: "Is the screen time control app free to try?",
    a: "Yes. There is a free tier with all core features. Paid plans add deeper analytics and unlimited restrictions for users who need more.",
  },
];

export default function ScreenTimeControlPage() {
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
            screen time control
          </span>
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight lowercase text-white sm:text-6xl md:text-7xl">
            Screen Time Control App:{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[#ffb067] bg-clip-text text-transparent">
              The Only Tool That Makes You Actually Put Your Phone Down
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65 sm:text-xl">
            You check your phone screen time report on Sunday. The number is embarrassing. You tell yourself next week will be different. Next Sunday, the number is the same.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            
            <a href="https://apps.apple.com/us/app/untap-screen-time-control/id6759078648"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-medium text-black transition hover:bg-white/90"
            >
              Download for iOS
            </a>
            
              <a href="https://play.google.com/store/apps/details?id=com.unrotapp.screencontrol"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-base font-medium text-white transition hover:bg-white/10">
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
                Knowing how much time you are losing is not the same as doing something about it. A real screen time control app does not just show you the problem — it puts friction between you and the habit, so the number actually changes. That is what <a href="https://getuntap.com/" className="text-[var(--accent)] hover:underline">Untap</a> is built to do.
              </p>

              <p>
                You do not need to delete anything. If your goal is to manage time spent on the phone during work hours, mornings, or evenings with family — you can set a delay, a daily cap, or a hard screen lock time app that only lifts when you say so.
              </p>

              <p>
                Give Instagram a 10-second open delay during work hours. Set TikTok to a 30-minute daily limit. Lock YouTube completely until 6pm. The rules are yours to set, and you can change them any time your schedule shifts.
              </p>

              <p>
                Arjun, an engineering student from Pune, went from 7 hours of daily screen time down to 1.8 hours once he put session limits on his social apps during study blocks. Maya R., a designer in Brooklyn, got back two hours a day without feeling guilty for picking up her phone. A screen time control app earns its place when the shift happens without the punishment — and that is exactly what Untap delivers.
              </p>
            </div>

            {/* Visual Card - Reduction Stats */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
              <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-8 text-center">the shift</p>

              <div className="space-y-4">
                <div className="rounded-lg border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 p-6">
                  <p className="text-xs text-[var(--accent)] uppercase font-bold tracking-wide">arjun, pune</p>
                  <p className="text-2xl font-bold text-black mt-2">7 hrs → 1.8 hrs daily</p>
                </div>

                <div className="rounded-lg border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4">
                  <p className="text-xs text-[var(--muted)] uppercase font-semibold">maya r., brooklyn</p>
                  <p className="text-2xl font-bold text-black mt-2">2 hours back a day</p>
                </div>

                <div className="rounded-lg border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4">
                  <p className="text-xs text-[var(--muted)] uppercase font-semibold">on average</p>
                  <p className="text-2xl font-bold text-black mt-2">3.5 hours saved daily</p>
                </div>
              </div>

              <p className="text-xs text-[var(--muted)] mt-6 text-center">without deleting the apps you need</p>
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
                Why People Search for a Screen Time Control App
              </h2>

              <div className="space-y-5 text-lg leading-relaxed text-white/60 mt-8">
                <p>
                  Most people who go looking for a screen time control app have already spent a week with Apple's built-in Screen Time or Google's Digital Wellbeing. They turned it off before the month was out.
                </p>

                <p>
                  Here is why those tools fail. They track everything perfectly and change nothing. You see the data, you feel bad, and then Instagram opens in one tap anyway. There is no friction. No pause. Nothing that makes you stop and think before you scroll.
                </p>

                <p>
                  A reduce screen time app that actually works has to sit between the intention and the action. Untap does this through open delays, session locks, math challenges, breathing pauses, and QR scans — all placed right before an app opens. By the time you have done one of those, the autopilot moment is gone. Most of the time you decide not to open it at all.
                </p>
              </div>
            </div>

            {/* Visual Card - Track vs Change */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-8">
              <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold text-center mb-6">built-in vs real</p>

              <div className="space-y-6">
                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">built-in tools</p>
                  <p className="text-3xl font-bold text-white mt-2">track everything</p>
                  <p className="text-sm text-white/70 mt-1">change nothing</p>
                </div>

                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">real friction</p>
                  <p className="text-3xl font-bold text-[var(--accent)] mt-2">delays, math, breath</p>
                  <p className="text-sm text-white/70 mt-1">placed before the app opens</p>
                </div>

                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">result</p>
                  <p className="text-3xl font-bold text-white mt-2">sofía held past week two</p>
                  <p className="text-sm text-white/70 mt-1">where three other tools failed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features That Make the Difference */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              features
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl">
              Features That Make the Difference
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              A few things worth knowing before you download:
            </p>
          </div>

          <ol className="mt-14 grid gap-6 sm:grid-cols-2">
            {featuresSection.map((step) => (
              <li
                key={step.n}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7"
              >
                <span className="font-mono text-sm tracking-widest text-[var(--accent)]">
                  {step.n}
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight lowercase">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Android & iOS Parity */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                cross-platform
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lowercase text-white sm:text-5xl">
                What If You Need a Screen Time Control App Android Users Can Also Use?
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-white/60">
              <p>
                A lot of screen time apps are built for iPhone first and then quietly abandoned on Android. Untap was built for both from the start and keeps both versions at full feature parity.
              </p>

              <p>
                The screen time app for iOS uses Apple's official FamilyControls and ManagedSettings APIs — the exact same frameworks Apple's own Screen Time feature runs on. That means it is stable, approved, and will not break when Apple pushes an update. The screen time control app android version carries the same delays, same session locks, same Friend Lock, and same usage reports. No compromises on either side.
              </p>

              <p className="text-white">
                Jordan P., a remote founder, ran Untap with his whole team during <a href="https://www.getuntap.com/features/focus-mode" className="text-[var(--accent)] hover:underline">focus blocks</a>. Deep work hours nearly doubled. Half his team was on iPhone, the other half on Android — and every single person got the same experience. That kind of cross-platform reliability is rare in this category.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Tracker */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                visibility
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl">
                A Screen Time App Lock and Usage Tracker — Not Just One or the Other
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
              <p>
                Blocking without data is just guessing. That is why Untap works as a screen time app lock and a usage tracker together — you see exactly where the hours are going before you decide what to restrict.
              </p>

              <p>
                Daily, weekly, and monthly reports show your real usage patterns. Priya S., a writer from Mumbai, said it felt like turning the lights on. She had no idea how much she was opening apps until the weekly report showed her the real number. That kind of visibility is what makes restrictions actually stick — because you are working from facts, not assumptions.
              </p>

              <p className="text-[var(--foreground)]">
                On average, Untap users save 3.5 hours of screen time a day. And 85 percent notice less doomscrolling within the first week. You see the data. You decide what to lock. You run the session. The report shows you what changed. That full loop — track, decide, block, review — is what makes this a real mobile phone time management tool and not just a timer with a pretty screen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: ScreenZen & Opal */}
      <section className="section-dark relative isolate overflow-hidden px-6 py-24 sm:py-32">
        <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-[var(--accent)]/20 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              comparison
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.05] tracking-tight lowercase text-white sm:text-5xl">
              Why Untap Is a Better Alternative to ScreenZen and Opal
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/65">
              This is a fair question. Both are well-known tools. Here is the honest answer.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {comparisons.map((benefit, index) => (
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
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-white/65">
            Untap sits between those two. It is not a soft nudge like ScreenZen — it has real hard locking, Friend Lock, and Prevent Uninstall that make bypassing genuinely difficult. And it is not $100 a year like Opal — there is a free tier with core features, and paid plans are priced for real people, not enterprise budgets. Both Android and iPhone users get the same full experience. No features held back on either side. No gamification you did not ask for. Just a screen time control app that actually does what it says.
          </p>
        </div>
      </section>

      {/* Privacy */}
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
              <p className="text-[var(--foreground)]">
                Everything runs locally on your device. No tracking SDKs, no advertising network getting a look at your habits, nothing sent to an external server. Untap has no analytics running in the background, no data sold to anyone. If you are handing a screen time control app this much visibility into how you use your phone, it should keep that information to itself. Untap always has.
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
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl md:sticky md:top-28">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="border-b border-[var(--border)] pb-8 last:border-0"
                >
                  <h3 className="text-xl font-bold lowercase">{faq.q}</h3>
                  <p className="mt-3 leading-relaxed text-[var(--muted)]">
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
            Take Back <span className="text-[var(--accent)]">Control</span>
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