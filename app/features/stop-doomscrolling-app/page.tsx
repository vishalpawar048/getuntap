import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";

export const metadata: Metadata = {
  title: "Stop Doomscrolling App | App to Stop Doomscrolling on iPhone & Android | Untap",
  description:
    "Untap is the stop doomscrolling app that puts real friction between you and the scroll. App to stop doomscrolling on iPhone & Android. Try it free today!",
  alternates: {
    canonical: "https://www.getuntap.com/features/stop-doomscrolling/",
  },
};

const featuresSection = [
  {
    n: "01",
    title: "Open Delays",
    body: "A 5, 10, or 30-second pause before a distracting app opens. That small gap is where most impulse scrolling sessions die before they start. Priya, a designer in London, cut her Instagram opens by 40 percent from this feature alone.",
  },
  {
    n: "02",
    title: "Session Locks",
    body: "Pick a time block and lock every distracting app for the whole window. They do not open until your session ends. Ravi M. in Bengaluru went from 9 hours of deep work a week to 16 just by running a four-hour morning lock.",
  },
  {
    n: "03",
    title: "Daily Time Limits",
    body: "Give each app a daily cap. Once it is used up, the app does not open again until the next day.",
  },
  {
    n: "04",
    title: "Friend Lock",
    body: "A trusted person sets a password on your settings. You cannot change your restrictions without them — even when motivation is low and the feed is calling.",
  },
  {
    n: "05",
    title: "Prevent Uninstall",
    body: "During an active session, Untap cannot be deleted from your device. No removing the app to get around a lock.",
  },
  {
    n: "06",
    title: "Soft, Moderate, and Strict Modes",
    body: "Start with a small pause. Tighten it as the habit builds. You do not have to go strict on day one.",
  },
  {
    n: "07",
    title: "Alternate App Suggestions",
    body: "When you try to open a distraction, Untap can redirect you to something useful instead. Going for YouTube? It suggests your notes app.",
  },
];

const comparisons = [
  {
    title: "ScreenZen",
    description:
      "ScreenZen works through intervention pop-ups. Before an app opens, it shows you a screen asking whether you really want to open it. For some people that is enough. But a pop-up you can tap through in one second is a low bar when the urge to scroll is strong. ScreenZen also does not have a Friend Lock equivalent — there is no way for a trusted person to hold your restrictions in place. If you really want to bypass it, you can. Its premium upgrade runs around $4.99 per month.",
  },
  {
    title: "Opal",
    description:
      "Opal is a well-built app, primarily for iOS, with a $99.99 per year subscription at its paid tier — the most expensive in this category by a significant margin. Opal works by blocking apps entirely during a focus session, which works well for some people. But once the session ends, every app opens exactly as it always did — the content inside has not changed. Opal also originally used a VPN profile to manage connections, which some users had battery and privacy concerns about. And while Opal has an Android version, its primary experience and feature depth remain iOS-first.",
  },
];

const faqs = [
  {
    q: "What does a stop doomscrolling app actually do?",
    a: "It puts real friction between you and your most distracting apps — a delay, a breathing pause, a math challenge — so the autopilot moment breaks before the scroll begins. Most people find they open their distracting apps far less just from that pause alone.",
  },
  {
    q: "Is Untap a proper app to stop doomscrolling or just a basic timer?",
    a: "Both. You can use it as a simple open delay, a daily time limit, or a full lock that does not lift until a time you choose. Most people use a mix of all three depending on the app and the time of day.",
  },
  {
    q: "What happens if I try to bypass my own restrictions?",
    a: "If you have set up Friend Lock, you cannot change your settings without the person who holds your password. Prevent Uninstall means you also cannot delete the app during an active session. These two features together are why people stick with Untap past the first week when other tools failed.",
  },
  {
    q: "Why is Untap a better alternative to ScreenZen and Opal for stopping doomscrolling?",
    a: "ScreenZen uses pop-ups you can tap through quickly and has no equivalent to Friend Lock. Opal costs up to $99.99 per year, blocks apps all-or-nothing without adjustable friction, and remains primarily iOS-focused. Untap gives you adjustable friction levels, Friend Lock for external accountability, Prevent Uninstall, and works equally on both Android and iOS — with all data stored locally on device and no VPN profile required.",
  },
  {
    q: "Does the app to stop doomscrolling work on both Android and iPhone?",
    a: "Yes. The iOS version uses Apple's official FamilyControls and ManagedSettings APIs. The Android version matches it feature for feature — same delays, same locks, same Friend Lock, same usage reports. No watered-down version on either side.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Everything stays on your device — no external servers, no ad tracking, no VPN profile, nothing shared with anyone.",
  },
];

export default function StopDoomscrollingPage() {
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
            stop doomscrolling
          </span>
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight lowercase text-white sm:text-6xl md:text-7xl">
            Stop Doomscrolling App:{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[#ffb067] bg-clip-text text-transparent">
              Break the Loop That Is Quietly Eating Your Day
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65 sm:text-xl">
            You picked up your phone to check one thing. Forty minutes later you are three years deep into a stranger's Instagram and you still have not checked the thing you opened it for.
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
                That is doomscrolling. And it is not a character flaw — it is what happens when there is zero friction between your thumb and an endless feed. A stop doomscrolling app does not fix your willpower. It fixes the friction. It puts a real pause between you and the scroll, so your brain gets a moment to actually decide.
              </p>

              <p>
                That is exactly what <a href="https://www.getuntap.com/" className="text-[var(--accent)] hover:underline">Untap</a> does. No guilt. No shame chart. Just the right amount of resistance at the right moment — so the autopilot habit breaks, and you get your hours back.
              </p>

              <p>
                You do not need to delete Instagram to stop losing hours to it. If your goal is to break the scroll habit during the parts of your day that matter — mornings, work hours, the hour before sleep — you can set a delay, a session limit, or a hard lock that only lifts when you say so.
              </p>

              <p>
                Make TikTok wait 15 seconds before opening during work hours. Give Instagram a 20-minute daily cap. Lock YouTube completely until 7pm. It is your call, and you can loosen or tighten it any time your habits change.
              </p>

              <p>
                Arjun, an engineering student from Pune, went from 7 hours of daily screen time down to 1.8 hours once he started using Untap during his study sessions. Lina V., a therapist in Amsterdam, said Untap made her want to use her phone less — without making her feel guilty for picking it up. That is what a well-set app to stop doomscrolling actually delivers — a real shift in habit, not a punishment.
              </p>
            </div>

            {/* Visual Card */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
              <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-8 text-center">the right pause</p>

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
                  <p className="text-xs text-[var(--muted)] uppercase font-semibold">lina v., amsterdam</p>
                  <p className="text-2xl font-bold text-black mt-2">less scroll, no guilt</p>
                </div>
              </div>

              <p className="text-xs text-[var(--muted)] mt-6 text-center">a real shift in habit, not a punishment</p>
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
                Why People Search for an App to Stop Doomscrolling
              </h2>

              <div className="space-y-5 text-lg leading-relaxed text-white/60 mt-8">
                <p>
                  Most people who go looking for an app to stop doomscrolling have already tried putting their phone in another room, deleting apps, or setting a phone-free hour before bed. It worked for two days.
                </p>

                <p>
                  The problem is not commitment. It is that none of those things address the moment the habit actually happens — which is the half-second between picking up your phone and opening TikTok without thinking. What works is something that interrupts that exact half-second. A math challenge. A breathing pause. A QR code scan. Something that costs enough attention that the autopilot cannot complete.
                </p>

                <p>
                  Untap is built around that idea. Before a distracting app opens, you meet a small challenge — and in those few seconds, the urge passes. Amir J., a software engineer in Toronto, said he was sleeping better after two weeks. Maya R., a designer in Brooklyn, got back two hours a day. Sofía G. in Madrid tried one sec, Opal, and Apple Screen Time before Untap — and said it was the first one that held past the second week.
                </p>
              </div>
            </div>

            {/* Visual Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-8">
              <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold text-center mb-8">the half-second that matters</p>

              <div className="space-y-6">
                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">other attempts</p>
                  <p className="text-3xl font-bold text-white mt-2">worked for two days</p>
                  <p className="text-sm text-white/70 mt-1">phone in another room, deleted apps</p>
                </div>

                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">real friction</p>
                  <p className="text-3xl font-bold text-[var(--accent)] mt-2">a small challenge</p>
                  <p className="text-sm text-white/70 mt-1">before the distracting app opens</p>
                </div>

                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">sofía g., madrid</p>
                  <p className="text-3xl font-bold text-white mt-2">held past week two</p>
                  <p className="text-sm text-white/70 mt-1">after one sec, opal, and screen time</p>
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

      {/* Bypassing Your Own Restrictions */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                accountability
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lowercase text-white sm:text-5xl">
                What If You Keep Bypassing Your Own Restrictions?
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-white/60">
              <p>
                Here is the honest part. Most people who try a stop doomscrolling app give up on it — not because the app is bad, but because when motivation is low and the urge to scroll is high, they bypass their own rules. One tap to snooze the lock. One setting change to extend the limit. And just like that, an hour is gone.
              </p>

              <p>
                Untap was built with that moment in mind. Friend Lock lets someone you trust — a partner, a study buddy, a sibling — set a password on your Untap settings. You cannot change your restrictions without them. It sounds like overkill until the night it saves you from undoing two weeks of progress at midnight.
              </p>

              <p className="text-white">
                Prevent Uninstall keeps the app in place during an active session too. You cannot delete your way out of a weak moment. Daniel K., a product manager in Berlin, cut his <a href="https://www.getuntap.com/features/social-media-control" className="text-[var(--accent)] hover:underline">social media time</a> by 60 percent — and said Friend Lock was the feature that finally made the difference. Every other tool he had tried, he had found a way around.
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
                A Stop Doomscrolling App and Usage Tracker — Not Just One or the Other
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
              <p>
                <a href="https://www.getuntap.com/features/app-blocker" className="text-[var(--accent)] hover:underline">Blocking without data</a> is just guessing which apps to restrict. That is why Untap works as an app to stop doomscrolling and a usage tracker together — you see exactly where your time is going before you decide what to limit.
              </p>

              <p>
                Daily, weekly, and monthly reports show your real usage patterns. Not the ones you assume you have. Priya S., a writer in Mumbai, said seeing her weekly report felt like turning the lights on. She had no idea how much she was tapping until the numbers were in front of her. That kind of visibility is what makes the restrictions you set actually stick — because you are working from facts, not feelings.
              </p>

              <p className="text-[var(--foreground)]">
                On average, Untap users save 3.5 hours of screen time a day. And 85 percent of users reduce their doomscrolling within the first week. Those numbers come from real usage data across the app — not a marketing slide.
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
              This is a fair question and it deserves a straight answer — not a sales pitch.
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
          <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-white/65">
            <p>Untap is different in three specific ways that matter for stopping doomscrolling:</p>
            <p>
              First, friction is adjustable. Untap does not just block or not block. It gives you a spectrum — a 5-second delay, a math challenge, a breathing pause, a QR scan — so the friction matches what you actually need on any given day.
            </p>
            <p>
              Second, Friend Lock means someone else holds your commitment in place. No other app in this category does this as cleanly. Your restrictions cannot be undone without another person — which is the exact thing that makes it hold during a weak moment.
            </p>
            <p className="text-white">
              Third, everything stays on your device. No VPN profile, no external server, no ad network. Untap uses Apple's official FamilyControls and ManagedSettings APIs on iOS and the equivalent approach on Android. Your usage data never leaves your phone.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-24 sm:py-32">
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
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight lowercase text-white sm:text-5xl md:text-6xl">
            Break the <span className="text-[var(--accent)]">Loop</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Available for iPhone and Android.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            
          <a href="https://apps.apple.com/us/app/untap-screen-time-control/id6759078648"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-medium text-black transition hover:bg-white/90">
              Download for iOS
            </a>
            
            <a href="https://play.google.com/store/apps/details?id=com.unrotapp.screencontrol"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-base font-medium text-white transition hover:bg-white/10">
              Download for Android </a>
          </div>
        </div>
      </section>
    </>
  );
}