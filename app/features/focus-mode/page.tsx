import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";

export const metadata: Metadata = {
  title: "Brain Focus App | Best Focus App for Android & iPhone | Untap",
  description:
    "Untap is the brain focus app that helps you stop distractions and actually get things done. Best focus app for Android & iPhone. Try it free today!",
  alternates: {
    canonical: "https://www.getuntap.com/features/focus-mode/",
  },
};

const featuresSection = [
  {
    n: "01",
    title: "Session locks",
    body: "Pick a time block, say 9am to 1pm, and lock every distracting app for that entire window. They are not deleted. They are just not opening until your session ends. Ravi M., a college student from Bengaluru, went from 9 hours of deep work per week to 16 just by running a four-hour morning lock during his study sessions.",
  },
  {
    n: "02",
    title: "Open delays",
    body: "Not ready for a full lock? A 10-second delay before Instagram opens is enough. Those 10 seconds give your brain a moment to decide. Priya, a designer in London, cut her Instagram opens by 40 percent with nothing but the open delay feature.",
  },
  {
    n: "03",
    title: "Alternate app suggestions",
    body: "When you try to open a distraction, Untap can redirect you to something useful instead. Going for YouTube? It can suggest your notes app instead.",
  },
  {
    n: "04",
    title: "Soft, moderate, and strict modes",
    body: "You do not have to go cold turkey on day one. Soft mode adds a small pause. Strict mode means the app does not open, period.",
  },
];

const commonMistakes = [
  {
    title: "Starting on strict mode",
    description:
      "If you lock everything on day one and feel completely cut off, you will delete the app by day three. Start with soft mode. Add friction gradually.",
  },
  {
    title: "Not using Friend Lock",
    description:
      "Most people skip Friend Lock because they think they will not need it. They need it. The whole point is that your future self in a weak moment is not the best judge of what you need. Set it up with someone you trust.",
  },
  {
    title: "Blocking the wrong apps",
    description:
      "Look at your actual usage report before you set restrictions. You might think YouTube is the problem when it is actually WhatsApp groups eating two hours a day.",
  },
  {
    title: "Forgetting to set session times",
    description:
      "A focus lock without a schedule is just an extra step. Set specific times for when the lock kicks in — your study hours, your work blocks, your morning routine. That is when the brain focus app actually earns its place.",
  },
];

const preventsCheating = [
  {
    title: "Friend Lock",
    description:
      "A trusted person (a study partner, a sibling, your partner) sets a password on your Untap settings. You cannot change your restrictions without them. It sounds extreme until the day it saves you from undoing two weeks of progress at midnight.",
  },
  {
    title: "Prevent Uninstall",
    description:
      "During an active session, you cannot delete Untap. The app stays in place until your session is done. No deleting your way out of a weak moment.",
  },
 
];

const features = [
  "Session locks — Pick a time block, say 9am to 1pm, and lock every distracting app for that entire window. They are not deleted. They are just not opening until your session ends. Ravi M., a college student from Bengaluru, went from 9 hours of deep work per week to 16 just by running a four-hour morning lock during his study sessions.",
  "Open delays — Not ready for a full lock? A 10-second delay before Instagram opens is enough. Those 10 seconds give your brain a moment to decide. Priya, a designer in London, cut her Instagram opens by 40 percent with nothing but the open delay feature.",
  "Alternate app suggestions — When you try to open a distraction, Untap can redirect you to something useful instead. Going for YouTube? It can suggest your notes app instead.",
  "Soft, moderate, and strict modes — You do not have to go cold turkey on day one. Soft mode adds a small pause. Strict mode means the app does not open, period.",
];

const faqs = [
  {
    q: "What does a brain focus app like Untap actually do?",
    a: "It adds real friction before your phone lets you open distracting apps. A delay, a challenge, a breathing pause — enough that your brain gets a moment to decide instead of just reacting. Most people open their distracting apps far less just from that pause alone.",
  },
  {
    q: "Is Untap the best focus app for students?",
    a: "It is built for exactly that situation — study blocks, exam prep, long reading sessions where you need your phone nearby but not in your face. The session lock and Friend Lock features are the ones students find most useful.",
  },
  {
    q: "How does the focus app android version compare to the iPhone version?",
    a: "They are built to match. Same delays, same locks, same reporting, same Friend Lock feature. There is no watered-down version on either side.",
  },
  {
    q: "Can I use Untap as a focus lock app without blocking apps completely?",
    a: "Yes. You can use just the delay feature — 5, 10, or 30 seconds before an app opens — without setting any hard locks. A lot of people start there and find it is enough on its own.",
  },
  {
    q: "Will setting up the focus app iOS version affect my other phone settings?",
    a: "No. Untap uses Apple's official APIs to manage restrictions. It does not touch your other settings, and it can be adjusted or removed at any time.",
  },
  {
    q: "Is my usage data private?",
    a: "Everything stays on your device. No tracking SDKs, no advertising networks, nothing sent to a server. Your usage patterns belong to you.",
  },
];

export default function FocusModePage() {
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
            focus mode
          </span>
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight lowercase text-white sm:text-6xl md:text-7xl">
            Brain Focus App:{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[#ffb067] bg-clip-text text-transparent">
              The Focus Mode That Actually Keeps You on Track
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65 sm:text-xl">
            You sit down to study. You open your phone to check the time. Forty minutes later, you are still on Instagram.
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
                This is not a focus problem. It is a friction problem. Your phone has zero resistance between you and every distraction you have ever wanted — and your brain takes the path of least resistance every single time.
              </p>

              <p>
                A brain focus app changes that path. Untap's focus mode puts a real barrier between your work time and your scroll time, so you stay in the zone without having to fight yourself every five minutes.
              </p>
            </div>

            {/* Visual Card - Focus Concept */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
              <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-8 text-center">friction matters</p>
              
              <div className="space-y-4">
                <div className="rounded-lg border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 p-6">
                  <p className="text-xs text-[var(--accent)] uppercase font-bold tracking-wide">real barrier</p>
                  <p className="text-2xl font-bold text-black mt-2">between work & scroll</p>
                </div>

                <div className="rounded-lg border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4">
                  <p className="text-xs text-[var(--muted)] uppercase font-semibold">stay in</p>
                  <p className="text-2xl font-bold text-black mt-2">the zone</p>
                </div>

                <div className="rounded-lg border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4">
                  <p className="text-xs text-[var(--muted)] uppercase font-semibold">stop</p>
                  <p className="text-2xl font-bold text-black mt-2">fighting yourself</p>
                </div>
              </div>

              <p className="text-xs text-[var(--muted)] mt-6 text-center">users average 3.5 fewer hours daily</p>
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
                Why Built-In Focus Modes Never Actually Work
              </h2>
              
              <div className="space-y-5 text-lg leading-relaxed text-white/60 mt-8">
                <p>
                  Every phone comes with some version of a focus or do-not-disturb mode. Most people turn it off within three days.
                </p>

                <p>
                  Here is why. Those built-in settings are easy to dismiss. One tap, one swipe — and you are out. There is no real commitment. When Instagram is calling and your willpower is already low from four hours of studying, a setting that takes one second to disable is not going to hold.
                </p>

                <p>
                  A proper focus app android setup works differently. It makes dismissing restrictions take actual effort — a math challenge, a breathing pause, a QR code scan. By the time you have done that, you have had the three seconds you needed to ask yourself: do I actually need to open this right now? Most of the time, the answer is no.
                </p>
              </div>
            </div>

            {/* Visual Card - Built-in vs Real */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-8">
              <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold text-center mb-6">built-in vs real</p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">built-in</p>
                  <p className="text-3xl font-bold text-white mt-2">1 tap</p>
                  <p className="text-sm text-white/70 mt-1">to disable setting</p>
                </div>

                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">real friction</p>
                  <p className="text-3xl font-bold text-[var(--accent)] mt-2">3 seconds</p>
                  <p className="text-sm text-white/70 mt-1">to ask yourself if you need it</p>
                </div>

                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">result</p>
                  <p className="text-3xl font-bold text-white mt-2">most say no</p>
                  <p className="text-sm text-white/70 mt-1">to opening distracting apps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Untap's Focus Mode Does */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
             features
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl">
              What Untap's Focus Mode Actually Does for You
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              The brain focus app in Untap is not just a timer. It is a full control system for how you use your phone during the times that matter most. Here is what you can set up:
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

      {/* Best Focus App for Students */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                for students
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lowercase text-white sm:text-5xl">
                Best Focus App for Students: What Makes Untap Different
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-white/60">
              <p>
                Most students looking for the best focus apps for students try two or three options before giving up. The problem is usually the same — the app is either too easy to bypass or too annoying to stick with.
              </p>

              <p>
                Untap was designed by people who understand that balance. It is strict enough to actually block distractions, but flexible enough that you do not feel like you are being punished for picking up your phone.
              </p>

              <p>
                A student in Pune who used to spend 7 hours a day on her phone brought that down to under 2 hours once she started locking social apps during her study blocks. She did not use the strictest setting. She just used a 15-second delay and a one-hour session limit — and that was enough to break the habit loop.
              </p>

              <p>
                If you are a student dealing with exams, assignments, or just trying to get your reading done without your phone hijacking every quiet moment — this is the focus lock app setup that actually holds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross Platform */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                cross-platform
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl">
                Focus App for Android and iPhone — Same Rules, Both Sides
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
              <p>
                A lot of focus apps work well on one platform and feel patched together on the other. Untap was built properly for both. The focus app iOS version uses Apple's native FamilyControls and ManagedSettings frameworks — the same official APIs that Apple's own Screen Time feature runs on. That means it is stable, it will not break with iOS updates, and Apple cannot remove it.
              </p>

              <p>
                The focus app android version is equally capable. Same delays, same session locks, same Friend Lock feature — where someone you trust sets a password on your restrictions so you cannot quietly undo them at 11pm when motivation is low.
              </p>

              <p className="text-[var(--foreground)]">
                Whether your house has one iPhone and one Android, or your class group chat has both — Untap covers both without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Friend Lock & Prevent Uninstall */}
     
       <section className="section-dark relative isolate overflow-hidden px-6 py-24 sm:py-32">
        <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-[var(--accent)]/20 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              accountability
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.05] tracking-tight lowercase text-white sm:text-5xl">
              The Focus Lock App That Prevents You from Cheating Yourself
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/65">
             Here is the thing most people do not want to admit. When you really want to scroll, you will find a way around almost any restriction — unless the restriction makes that genuinely hard.

            </p>
             <p className="mt-6 text-lg leading-relaxed text-white/65">
             Untap's focus lock app has two features built specifically for this:


            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {preventsCheating.map((benefit, index) => (
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

      {/* Usage Reports */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                visibility
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl">
                See the Data First, Then Decide What to Block
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
              <p>
                One thing that separates Untap from a basic focus lock app is the usage reporting built into the same tool. 
                </p>
                <p>
                Before you set any restrictions, you can see exactly where your time is going. Daily, weekly, and monthly reports show your real patterns — not the ones you assume you have. Most people are genuinely surprised. 85 percent of Untap users reduce their doomscrolling within the first seven days, and the reports are a big part of that because they make the problem visible.
              </p>

              <p className="text-[var(--foreground)]">
                You see the data. You decide what to lock. You run a focus session. The reports show you what changed. That full loop — track, decide, block, review — is what makes this a real brain focus app and not just another timer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
    
   <section className="section-dark relative isolate overflow-hidden px-6 py-24 sm:py-32">
        <div className="absolute -bottom-40 left-0 -z-10 h-96 w-96 rounded-full bg-[var(--accent)]/15 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Common Mistakes
              </p>
              <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight lowercase text-white sm:text-5xl">
                Common Mistakes People Make With Focus Apps
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-white/60">
             Getting a focus app is the easy part. Using it right takes a little thought. Here are the mistakes that undo people's progress:
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {commonMistakes.map((benefit, index) => (
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
            Get Your Focus <span className="text-[var(--accent)]">Back</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Available for iPhone and Android.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
    </>
  );
}