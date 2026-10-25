import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";
import {
  ANDROID_APP_URL,
  IOS_APP_URL,
  ORG_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
} from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Parental Controls – Screen Time For Kids",
  description: "Parental control app to manage kids' screen time on iPhone and Android. Set limits, block apps, and help kids build healthy phone habits. Free trial.",
  alternates: {
    canonical: "https://www.getuntap.com/features/parental-controls",
  },
};

const featuresSection = [
  {
    n: "01",
    title: "Friend Lock",
    body: "You set a password on your child's Untap restrictions. They cannot change their app limits, session locks, or daily caps without you. This is the feature that makes everything else hold.",
  },
  {
    n: "02",
    title: "Prevent Uninstall",
    body: "During an active session, Untap cannot be deleted from the device. No removing the app to get around it.",
  },
  {
    n: "03",
    title: "Per-App Daily Limits",
    body: "Give TikTok 30 minutes, YouTube 45, Instagram 20. Each app has its own cap. Once it is used up, it does not open again until the next day.",
  },
  {
    n: "04",
    title: "Hard Locks By Time",
    body: "Lock distracting apps until after school or after dinner. They simply do not open until the time you set.",
  },
  {
    n: "05",
    title: "Open Delays",
    body: "A 10 or 15-second pause before an app opens is often enough to break the autopilot habit. Small friction, real results.",
  },
  {
    n: "06",
    title: "Soft, Moderate, And Strict Modes",
    body: "You do not have to go straight to strict. Start with a delay and a daily limit. Add harder restrictions as the habit forms.",
  },
  {
    n: "07",
    title: "Usage Reports",
    body: "Daily, weekly, and monthly breakdowns show exactly where your child's screen time is going. Real data to back up real conversations. A good screen time parental control app should give you that visibility.",
  },
];

const comparisons = [
  {
    title: "ScreenZen",
    description: "ScreenZen is primarily built as a mindful screen time tool for individual adult users. It uses intervention pop-ups — a screen that asks you to pause before opening an app — rather than hard locks. That works well for motivated adults. For a child who does not want restrictions, a pop-up they can tap through in one second is not a real barrier. ScreenZen also starts at around $9.99 per month for family use, which adds up quickly.",
  },
  {
    title: "Opal",
    description: "Opal is a solid screen time app, mainly built for iOS. It only launched on Android in August 2025, which means the Android version is still maturing. Opal's parental control setup requires iOS 26.4 or later to work without bypass — on earlier iOS versions, a child can use Face ID or their device passcode to get around the Screen Time passcode. It is also priced at the premium end of the market.",
  },
];

const faqs = [
  {
    q: "What Does A Screen Time Parental Control App Like Untap Actually Do?",
    a: "It lets you set app-level limits, session locks, and open delays on your child's phone — and locks those settings behind a password only you hold. Your child cannot change the restrictions without you.",
  },
  {
    q: "Are There Good Apps To Control Children's Screen Time On Both iPhone And Android?",
    a: "Yes. Untap works fully on both. The iOS version uses Apple's official Screen Time APIs and the Android version matches it feature for feature — same limits, same locks, same reports on both sides.",
  },
  {
    q: "Can My Child Get Around The Restrictions?",
    a: "Not without your password. Friend Lock means your child cannot change their app limits or session locks without the trusted adult who set the password. Prevent Uninstall also stops them from deleting the app during an active session. That is what makes it a dependable screen time parental control app for families.",
  },
  {
    q: "Why Is Untap A Better Alternative To ScreenZen And Opal For Parents?",
    a: "ScreenZen uses intervention pop-ups rather than hard locks, which a motivated child can tap through quickly. Opal only launched properly on Android in mid-2025 and requires the latest iOS version to prevent bypass. Untap uses Friend Lock with a separately held password, Prevent Uninstall, and works equally on both platforms right now — with all data stored locally on the device.",
  },
  {
    q: "Can I Set Different Limits For Different Apps?",
    a: "Yes. Each app gets its own rules. TikTok can have a 30-minute daily limit, YouTube can be locked until after school, Instagram can have a 10-second open delay. You set it per app, not as a single blanket restriction. That flexibility is what to look for in apps to control children's screen time.",
  },
  {
    q: "Is My Child's Data Private?",
    a: "Yes. Everything stays on the device. No external servers, no ad tracking, nothing shared with anyone. Untap has no analytics SDKs and does not transmit personal data anywhere.",
  },
];

export default function ParentalControlPage() {
 const softwareAppJsonLd = {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      name: "Untap",
      alternateName: [
        "Untap App",
        "Untap Screen Time",
        "Untap Screen Time Control",
      ],
      applicationCategory: "LifestyleApplication",
      applicationSubCategory: "Screen Time Control",
      operatingSystem: "iOS, Android",
      description: "Untap protects your focus hours, then limits the rest of the day. Set session caps on brain-rotting apps so a short check does not become an hour.",
      url: SITE_URL,
      image: `${SITE_URL}/logo.png`,
      inLanguage: "en",
      isFamilyFriendly: true,
      keywords:
        "screen time control app, stop doomscrolling, break phone addiction, app blocker, digital wellbeing, focus app, mindful phone usage",
      publisher: {
        "@type": "Organization",
        name: ORG_NAME,
        url: SITE_URL,
      },
      offers: [
        {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          category: "Free",
        },
      ],
      downloadUrl: [IOS_APP_URL, ANDROID_APP_URL],
      installUrl: [IOS_APP_URL, ANDROID_APP_URL],
      featureList: [
        "Intentional app opening (QR scan, NFC tag, math challenge, breathing exercise, alternate-app suggestion)",
        "Soft, moderate, and strict modes",
        "Friend lock and password-protected settings",
        "Prevent uninstall",
        "Daily, weekly, monthly usage reports",
        "Over-consumption notifications",
        "Privacy-first: all data stays on device",
      ],
    };
  
    const organizationJsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      email: SUPPORT_EMAIL,
      sameAs: [IOS_APP_URL, ANDROID_APP_URL],
    };
  
   const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/features/parental-controls#webpage`,
  url: `${SITE_URL}/features/parental-controls`,
  name: "Parental Controls - Screen Time Management",
  description: String(metadata.description ?? ""),
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: ORG_NAME,
    url: SITE_URL,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Parental Controls",
      item: `${SITE_URL}/features/parental-controls`,
    },
  ],
};

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
      <JsonLd data={[
        softwareAppJsonLd,
        organizationJsonLd,
        webPageJsonLd,
        faqJsonLd,
        breadcrumbJsonLd,
      ]} />

      {/* Hero Section */}
      <section className="section-dark relative isolate overflow-hidden px-6 pb-20 pt-32 sm:pt-40">
        <div className="absolute -right-32 top-0 -z-10 h-80 w-80 rounded-full bg-[var(--accent)]/20 blur-3xl" />
        <div className="absolute left-0 top-40 -z-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="mx-auto max-w-5xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            parental control
          </span>
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            Screen Time Parental Control App:{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[#ffb067] bg-clip-text text-transparent">
              Help Your Kids Use Their Phone — Not The Other Way Around
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65 sm:text-xl">
            Your child said they were done with their phone an hour ago. You just walked past their room and the screen is still on.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            
            <a href="https://apps.apple.com/us/app/untap-screen-time-control/id6759078648"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-medium text-black transition hover:bg-white/90"
            >
              Download For iOS
            </a>
            
             <a href="https://play.google.com/store/apps/details?id=com.unrotapp.screencontrol"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-base font-medium text-white transition hover:bg-white/10"
            >
              Download For Android
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
                The solution
              </p>
              <p>
                This is not a discipline problem. It is a design problem. Every social app your child uses was built by engineers whose job is to keep them scrolling as long as possible. A screen time parental control app does not fight your child — it fights the design. It puts the right friction between your kid and the next 40-minute scroll session, so you stop having the same argument every evening.
              </p>

              <p>
                That is what <a href="https://www.getuntap.com/" className="text-[var(--accent)] hover:underline">Untap</a> Does. Not shame. Not a scary red timer. Just a calm, firm barrier that holds even when your child really wants it not to.
              </p>

              <p>
                You do not need to lock your child's entire phone to get the balance right. If your goal is to limit the apps that eat time — TikTok, Instagram, YouTube — while keeping calls, homework tools, and messaging accessible, you can set exactly that.
              </p>

              <p>
                Give each distracting app a daily time limit. Lock <a href="https://www.getuntap.com/features/social-media-control" className="text-[var(--accent)] hover:underline">Social Media</a> Until after homework is done. Add a 10-second pause before YouTube opens, so your child gets a moment to actually decide. It is your call, and you can loosen or tighten it as your child grows.
              </p>

              <p>
                Tom A., a dad of three in Manchester, said his evenings finally felt like evenings again after setting this up. His children noticed the difference before he did. That is what well-configured apps to control children's screen time actually look like — not a lockdown, but a boundary that holds without a fight every night.
              </p>
            </div>

            {/* Visual Card */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
              <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-8 text-center">A calm, firm barrier</p>

              <div className="space-y-4">
                <div className="rounded-lg border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 p-6">
                  <p className="text-xs text-[var(--accent)] uppercase font-bold tracking-wide">Sarah k., austin</p>
                  <p className="text-2xl font-bold text-black mt-2">Dinnertime, reclaimed</p>
                </div>

                <div className="rounded-lg border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4">
                  <p className="text-xs text-[var(--muted)] uppercase font-semibold">Tom a., manchester</p>
                  <p className="text-2xl font-bold text-black mt-2">Evenings feel like evenings again</p>
                </div>

                <div className="rounded-lg border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4">
                  <p className="text-xs text-[var(--muted)] uppercase font-semibold">Not a lockdown</p>
                  <p className="text-2xl font-bold text-black mt-2">A boundary that holds</p>
                </div>
              </div>

              <p className="text-xs text-[var(--muted)] mt-6 text-center">Calls, homework, and messaging stay accessible</p>
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
                The problem
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
                Why Parents Search For Apps To Control Children's Screen Time
              </h2>

              <div className="space-y-5 text-lg leading-relaxed text-white/60 mt-8">
                <p>
                  Most parents who go looking for apps to control children's <a href="https://www.getuntap.com/features/screen-time-control" className="text-[var(--accent)] hover:underline">Screen Time</a> Have already tried the built-in Screen Time settings on iPhone or Digital Wellbeing on Android. They set limits. Their child found the passcode workaround within a week.
                </p>

                <p>
                  The problem is not the idea — it is how easy those tools are to bypass. A child who is motivated enough can get around Apple's built-in screen time limit in under two minutes. What parents actually need is something that requires a trusted adult to change — not just a setting a determined twelve-year-old can Google their way out of. That is where a real screen time parental control app earns its place.
                </p>

                <p>
                  Untap solves this with Friend Lock. You set the restrictions on your child's phone, and you hold the password. Your child cannot change their app limits, session locks, or daily caps without you. Sarah K., a parent of two in Austin, said she went from nightly screen time arguments to reclaiming dinnertime — within one week of setting Untap up on her kids' phones.
                </p>
              </div>
            </div>

            {/* Visual Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-8">
              <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold text-center mb-8">Easy to bypass vs holds</p>

              <div className="space-y-6">
                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">Built-in limits</p>
                  <p className="text-3xl font-bold text-white mt-2">Under 2 minutes</p>
                  <p className="text-sm text-white/70 mt-1">For a motivated child to bypass</p>
                </div>

                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">Friend lock</p>
                  <p className="text-3xl font-bold text-[var(--accent)] mt-2">Password held by you</p>
                  <p className="text-sm text-white/70 mt-1">Not stored on your child's device</p>
                </div>

                <div className="border-l-2 border-[var(--accent)] pl-6">
                  <p className="text-xs text-white/60 uppercase">Result</p>
                  <p className="text-3xl font-bold text-white mt-2">Dinnertime, reclaimed</p>
                  <p className="text-sm text-white/70 mt-1">Within one week</p>
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
              Features
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Features That Make The Difference
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              A few things worth knowing before you set it up:
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
                <h3 className="mt-4 text-xl font-bold tracking-tight">
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

      {/* Mixed Devices */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                Cross-platform
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
                What If Your Kids Have Both iPhone And Android?
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-white/60">
              <p>
                A lot of families end up with mixed devices in the house. One child has an iPhone, another has an Android, and most parental control tools work properly on one side and feel patched together on the other.
              </p>

              <p>
                Untap was built properly for both from the start. The iOS version uses Apple's official FamilyControls and ManagedSettings frameworks — the same APIs that Apple's own Screen Time feature runs on. That means it is stable, it will not break with an iOS update, and your child cannot remove it during an active session. The Android version matches it feature for feature. Same limits, same locks, same Friend Lock, same reports.
              </p>

              <p className="text-white">
                Whether your household is all one brand or a mix, the screen time parental control app works the same way on both sides. You set the rules once, and they hold — regardless of which device is in your child's hands.
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
                Visibility
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                A Screen Time Parental Control App And Usage Tracker — Not Just One Or The Other
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
              <p>
                Restricting without seeing the data first is just guessing. That is why Untap works as an app to monitor and control children's screen time together — you see where the hours are actually going before you decide what to limit.
              </p>

              <p>
                Daily, weekly, and monthly reports show the real pattern. Not what your child tells you they use. What they actually use. Most parents are genuinely surprised when they see the numbers — and it gives you a real conversation to have with your child, based on facts rather than arguments. The best apps to control children's screen time make that conversation easier.
              </p>

              <p className="text-[var(--foreground)]">
                On average, Untap users save 3.5 hours of screen time per day. And 85 percent of users notice less doomscrolling within the first week. Those are not guesses — they come from real usage data across the app. For children whose GPA, sleep, and attention are all connected to how much time they spend scrolling, that shift matters more than it might sound.
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
              Comparison
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
              Why Untap Is A Better Alternative To ScreenZen And Opal For Parents
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/65">
              This is a fair question, and it deserves a straight answer.
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
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/60">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-white/65">
            <p>Untap is different in three specific ways that matter for parents:</p>
            <p>
              First, Friend Lock does not rely on a passcode stored on the child's device. A trusted adult holds it separately, so there is no workaround a child can Google.
            </p>
            <p>
              Second, Prevent Uninstall keeps the app in place during active sessions — the child cannot delete Untap to get around a lock, the way they might with other tools.
            </p>
            <p>
              Third, Untap works equally well on both Android and iOS right now — not as a recent add-on, but as a core part of how the app was built from the start. For mixed-device households, that matters. Not all apps to control children's screen time treat both platforms equally.
            </p>
            <p className="text-white">
              And everything runs locally on the device. No data leaves the phone, no ad networks, no external servers. For a screen time parental control app handling your child's usage data, that should be the baseline — not a premium feature.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
            <div>
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:sticky md:top-28">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="border-b border-[var(--border)] pb-8 last:border-0"
                >
                  <h3 className="text-xl font-bold">{faq.q}</h3>
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
          <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            Give Them Room To <span className="text-[var(--accent)]">Grow</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Available for iPhone and Android.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            
             <a href="https://apps.apple.com/us/app/untap-screen-time-control/id6759078648"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-medium text-black transition hover:bg-white/90"
            >
              Download For iOS
            </a>
            
            <a href="https://play.google.com/store/apps/details?id=com.unrotapp.screencontrol"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-base font-medium text-white transition hover:bg-white/10"
            >
              Download For Android
            </a>
          </div>
        </div>
      </section>
    </>
  );
}