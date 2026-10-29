import { JsonLd } from "./components/json-ld";
import { Reveal } from "./components/reveal";
import { Parallax } from "./components/parallax";
import {
  ANDROID_APP_URL,
  IOS_APP_URL,
  ORG_NAME,
  SITE_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
} from "./lib/site";

const testimonials = [
  {
    quote:
      "at this point every single screen time app has failed me and my self-control except this one, trust me i just downloaded it randomly thinking i am gonna fall into the same loop as it happened with other apps where if i hit the limit i coud immediately.go and turn off the protection, and that is not the case with this app (i luvvvv the strict mode and strict focus mode, these are the bestttt features of the app), definitely gonna recommend it on my socials to my audience!!",
    name: "Alia",
    title: "Google Play",
    location: "US",
    stars: 5,
    result: "Jun 7, 2026",
    featured: true,
  },
  {
    quote:
      "The app is really good, At first I had doubts about whether or not it's gonna be like OneSec but it's better. It strict, harder to get through and almost everything is unlocked in the free tier. love it! One thing that I would recommend you to add will be to add some barrier so that the user cannot enable after disabling it. Alot of times when I'm bored I just turn it off and nothing happens!",
    name: "Unidentified Dude",
    title: "Google Play",
    location: "US",
    stars: 5,
    result: "Jun 30, 2026",
  },
  {
    quote:
      "I used to be extremely mindful about my screentime until I gave up bec A I'm a free user and actually good apps are expensive, B I'm a Xiaomi user and permissions keep getting blocked (UGHH). I found this by accident and honestly a life saver bcz school is like in seven days, it covers all my needs, doesn't get blocked AND inexpensive. Yaaay thank y'all<3",
    name: "Kenzie Abdeen",
    title: "Google Play",
    location: "US",
    stars: 5,
    result: "Sep 6, 2026",
  },
  {
    quote:
      "Ive been using Untap for two months now. I love the messages on the block screen. Thr math creates just the right amoint of friction for me to second guess my doom scrolling impulse decision. This app is effective and easy to use. Great job developers!",
    name: "Lia D",
    title: "Google Play",
    location: "US",
    stars: 5,
    result: "Sep 26, 2026",
  },
  {
    quote:
      "absalutely one of the best apps i have ever used i went from being constantly tired and exhausted and being unable to even finish my sentences to being my old clear minded self again genuinely reccomend this to everyone it's such a life changer 🙏",
    name: "Jana Ahmad",
    title: "Google Play",
    location: "US",
    stars: 5,
    result: "Aug 20, 2026",
  },
  {
    quote:
      "I've tried about 5 different apps now, and this is by far the best one for me. Offers delays on open rather than full blocks, and it actually blocks websites in firefox, which I've found few apps that do. Really happy about it.",
    name: "Christoffer",
    title: "Google Play",
    location: "US",
    stars: 5,
    result: "Aug 18, 2026",
  },
  {
    quote:
      "Better than other apps like opal. it reduced my screen time drastically as compared to opal. the simple launcher is a big contributer. i recommend you to add like the bottom of simple launcher has messages their the SMS app is by default there should be an option to set WhatsApp or someother app as messages",
    name: "Ayaan ali Joo",
    title: "Google Play",
    location: "US",
    stars: 5,
    result: "Apr 23, 2026",
  },
  {
    quote:
      "I am using it for 4 days. For now this app is lifesaver as someone who used to watch insta reel for 6 hours a day and feels miserable. I keep up with it and i can feel how fresh my life feels like.",
    name: "Gouri Ganesh",
    title: "Google Play",
    location: "US",
    stars: 5,
    result: "Jun 4, 2026",
  },
  {
    quote:
      "Best app the first one I ever tried and got best result with it decreased my screen time from 10 hours to 4-5 hours literally definitely you should go for it 🫶🏻👍🏻",
    name: "Kudrat Hargun",
    title: "Google Play",
    location: "US",
    stars: 5,
    result: "Mar 8, 2026",
  },
  {
    quote:
      "does the job, thoroughly impressed. unlike the other apps who charge basic things, this one doesn't. extremely happy.",
    name: "Nandagopal M",
    title: "Google Play",
    location: "US",
    stars: 5,
    result: "Oct 4, 2026",
  },
  {
    quote:
      "Haha, the quiz option is so delightful and useful! This is ten times better than the other apps I've tried. Blocks distractions and keeps the mind sharp :)",
    name: "Cece _",
    title: "Google Play",
    location: "US",
    stars: 5,
    result: "Sep 27, 2026",
  },
  {
    quote:
      "This is an incredible app, it does everything the other app does, but for completely free! The devs are awesome too! They updated this app to patch many bypass tricks.",
    name: "PeaceSeeker",
    title: "Google Play",
    location: "US",
    stars: 5,
    result: "Sep 24, 2026",
  },
];

const faqs = [
  {
    q: "How Does It Work?",
    a: "Set the hours you need to protect, such as study or a hobby, and limit distracting apps for the rest of the day. Before Instagram or TikTok opens, Untap can ask a few questions from your study notes, or ask you to read, do pushups, or smile. That pause is a check on your mood before cheap content takes over. It uses Apple's screen time APIs on iOS.",
  },
  {
    q: "What Plans Does Untap Offer?",
    a: "Untap offers a free tier with core features. For power users, we have monthly and annual subscription plans with advanced features like focus mode, detailed analytics, and unlimited app restrictions.",
  },
  {
    q: "Is My Privacy Protected?",
    a: "Absolutely. Untap stores all data locally on your device. We have no analytics, no tracking, and no advertising SDKs. We do not collect, store, or transmit any personal data to external servers. Your data never leaves your phone.",
  },
  {
    q: "Will It Work On My Phone?",
    a: "Untap is currently available for iOS (iPhone and iPad). We also have an Android version available on the google play store. Both platforms are fully supported with all core features.",
  },
  {
    q: "Can I Still Access My Apps?",
    a: "Yes. Untap does not delete your apps. Outside your focus hours you can still open them, with a limit on the rest of the day and a pause first: a quiz from your notes, a few pages of a book, pushups, or a smile so you notice your mental state before you scroll.",
  },
  {
    q: "Is It Safe For My Phone?",
    a: "Yes! Untap uses only official apple APIs (FamilyControls, ManagedSettings, DeviceActivity) to function. It installs like any other app from the app store and can be removed at any time.",
  },
];

const features = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    ),
    title: "Set focus hours",
    description: "Pick the hours you need to protect. Class, study, or deep work. During that block, distracting apps stay limited so your focus holds.",
    highlights: [
      "Class blocks",
      "Study blocks",
      "Deep work",
      "Custom hours",
    ],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8"
      >
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M12 16v2" />
        <path d="M8 11V7a4 4 0 118 0v4" />
      </svg>
    ),
    title: "Limit the rest of the day",
    description: "Focus hours come first. After they end, Untap still limits how much of the day those apps can take, so the scroll does not fill every gap.",
    highlights: ["Daily caps", "After focus hours", "Hard stops"],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8"
      >
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 15v-4" />
        <path d="M12 15V8" />
        <path d="M16 15v-6" />
      </svg>
    ),
    title: "Session limits on brain-rotting apps",
    description: "Cap each session on TikTok, Instagram, YouTube, and the rest. When the session ends, the app stops instead of pulling you into another hour.",
    highlights: ["TikTok", "Instagram", "YouTube", "Short sessions"],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M8 8h8" />
        <path d="M8 16h8" />
      </svg>
    ),
    title: "A pause before the app opens",
    description: "Answer a few questions from your study notes, read a book, do pushups, or smile. You notice your mood and your progress before cheap content takes the wheel.",
    highlights: ["Quiz from notes", "Read a book", "Pushups", "A smile"],
  },
];

type Testimonial = (typeof testimonials)[number];

export default function Home() {
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "724",
    },
    review: testimonials.slice(0, 3).map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
    })),
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

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en",
    publisher: { "@type": "Organization", name: ORG_NAME, url: SITE_URL },
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
      <JsonLd
        data={[
          softwareAppJsonLd,
          organizationJsonLd,
          websiteJsonLd,
          faqJsonLd,
        ]}
      />
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="section-dark relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        <Parallax
          speed={0.25}
          className="pointer-events-none absolute left-1/2 top-1/3 -z-10 -translate-x-1/2"
        >
          <div className="h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-[var(--accent-purple)]/15 via-[var(--accent-pink)]/10 to-white/5 blur-3xl" />
        </Parallax>
        <Parallax
          speed={-0.15}
          className="pointer-events-none absolute -bottom-40 -right-40 -z-10"
        >
          <div className="h-[30rem] w-[30rem] rounded-full bg-white/3 blur-3xl" />
        </Parallax>

        <Parallax
          speed={-0.1}
          ariaHidden={false}
          className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center"
        >
          <div className="text-center">
            <h1
              id="hero-heading"
              className="animate-fade-up max-w-5xl text-balance text-5xl font-normal leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Your Dopamine Detox App
            </h1>

            <p className="sr-only">
              Untap is a <a href="https://www.getuntap.com/features/app-blocker" className="text-[var(--accent)] hover:underline">dopamine detox app</a> that blocks social media when you need to focus, limits them the rest of the day, and stops brain rot from short-form content.
            </p>

            <p className="animate-fade-up delay-200 mx-auto mt-8 max-w-3xl text-balance text-lg leading-relaxed text-white/65 sm:text-xl md:text-2xl">
              Block social media apps when you need to focus. Limit them the rest of the day. Block short-form content completely and stop brain rot.
            </p>

            <div className="animate-fade-up delay-300 mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://apps.apple.com/us/app/untap-screen-time-control/id6759078648"
                className="group flex items-center gap-3 rounded bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.81-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download for iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.unrotapp.screencontrol"
                className="group flex items-center gap-3 rounded border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 9.99l-2.302 2.302L5.864 2.658z" />
                </svg>
                Download for Android
              </a>
            </div>
          </div>
        </Parallax>
      </section>

      {/* Problems Untap solves */}
      <section className="px-6 py-32 sm:py-40">
        <div className="mx-auto max-w-6xl">
          <Reveal variant="up">
            <p className="eyebrow-label text-[var(--muted)]">
              THE PROBLEM
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Social media takes the hour you meant to keep
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <Reveal variant="up">
              <article className="h-full rounded border border-[var(--border)] bg-[var(--card)] p-10">
                <p className="eyebrow-label text-[var(--accent)]">
                  STUDENTS
                </p>
                <h3 className="mt-5 text-2xl font-normal tracking-tight sm:text-3xl">
                  Study starts. One notification ends it.
                </h3>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--muted)]">
                  <p>
                    Students want to study, and they also want <a href="https://www.getuntap.com/features/social-media-control" className="text-[var(--accent)] hover:underline">social media </a> in control so other people&apos;s lives do not wreck the day.
                    A status, a friend&apos;s post, or cheap content is enough
                    to spark FOMO and the fear of being left behind.
                  </p>
                  <p>
                    They sit down to study. A notification appears. Instagram
                    opens, the mind switches, and the scroll keeps going. Mood
                    drops. The study block is gone.
                  </p>
                </div>
              </article>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <article className="h-full rounded border border-[var(--border)] bg-[var(--card)] p-10">
                <p className="eyebrow-label text-[var(--accent)]">
                  EVERYONE ELSE
                </p>
                <h3 className="mt-5 text-2xl font-normal tracking-tight sm:text-3xl">
                  Boredom opens the app. The app keeps you.
                </h3>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--muted)]">
                  <p>
                    People open Instagram because they are bored. Once it is
                    open, the scroll continues. Attention gets shorter, the
                    content stays in mind, and comparing your life with someone
                    else&apos;s leaves you low or guilty.
                  </p>
                  <p>
                    There is a passion, a job, a side project, a hobby, or a
                    book waiting. The time goes to social media instead. By the
                    time the app closes, energy and motivation are gone.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal variant="up" className="mt-8">
            <div className="rounded border border-[var(--border)] bg-[var(--card)] p-10 sm:p-12">
              <p className="eyebrow-label text-[var(--accent)]">
                HOW UNTAP SOLVES IT
              </p>
              <h3 className="mt-5 text-3xl font-normal tracking-tight sm:text-4xl">
                Protect the hours that matter. Limit the rest of the day.
              </h3>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted)]">
                Set study hours, or the time for a hobby, work, or a book.
                During that block there is no distraction. For the rest of the
                day, social media stays limited, so you can still use it as
                entertainment without letting it rot the day or your mood.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--muted)]">
                When an app does open, Untap asks for a pause first. Students
                answer a few questions from their notes and see where their
                study actually stands. Anyone can read a book, do pushups, or
                simply smile, a short self-check so cheap content does not
                take the mood with it.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {[
                  "Focus hours",
                  "Limit the rest of the day",
                  "Quiz from your notes",
                  "Read a book",
                  "Pushups",
                  "A smile",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-[var(--border)] px-3 py-1.5 text-sm font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features - dark section */}
      <section className="section-dark relative isolate overflow-hidden px-6 py-32 sm:py-40">
        <Parallax
          speed={0.18}
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
        >
          <div className="h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-[var(--accent-purple)]/12 via-[var(--accent-pink)]/8 to-white/5 blur-3xl" />
        </Parallax>
        <Parallax speed={-0.12} className="absolute -bottom-40 right-0 -z-10">
          <div className="h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </Parallax>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <Reveal variant="up">
              <p className="eyebrow-label mb-6 inline-flex rounded-sm border border-white/10 bg-white/5 px-3 py-1.5 text-[var(--accent)]">
                FOCUS HOURS
              </p>
              <h2 className="max-w-3xl text-4xl font-normal leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
                Focus hours first.{" "}
                <span className="text-white/50">
                  Limits after that.
                </span>
              </h2>
            </Reveal>

            <Reveal variant="up" delay={150}>
              <div className="rounded border border-white/10 bg-white/[0.04] p-8">
                <p className="text-base leading-relaxed text-white/70">
                  Set the block you need to protect. Untap limits distracting
                  apps during those hours, then limits the rest of the day with
                  session caps on the apps that rot your attention.
                </p>
                <div className="mt-6 grid grid-cols-3 overflow-hidden rounded border border-white/10 bg-black/20 text-center">
                  {["Focus hours", "Rest of day", "Sessions"].map((step) => (
                    <div
                      key={step}
                      className="border-r border-white/10 px-3 py-4 last:border-r-0"
                    >
                      <p className="text-xs font-medium uppercase tracking-wider text-white/80">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid auto-rows-fr gap-5 lg:grid-cols-12">
            {features.map((feature, index) => (
              <Reveal
                key={feature.title}
                variant="up"
                delay={index * 100}
                className={`${
                  index === 0
                    ? "lg:col-span-7"
                    : index === 1
                      ? "lg:col-span-5"
                      : "lg:col-span-4"
                }`}
              >
                <div
                  className="group relative flex h-full flex-col overflow-hidden rounded border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:p-10"
                >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="relative flex items-start justify-between gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded border border-white/20 bg-white/5 text-white">
                    {feature.icon}
                  </div>
                  <span className="eyebrow-label text-white/30">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="relative mt-8 text-xl font-normal tracking-tight text-white sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="relative mt-4 flex-1 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                  {feature.description}
                </p>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {feature.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-sm border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-white/60"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Control section */}
      <section className="px-6 py-32 sm:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-2 md:items-center md:gap-20">
            <Reveal variant="left" className="order-2 md:order-1">
              <div className="space-y-6">
                <div className="rounded border border-white/10 bg-white/5 p-6">
                  <p className="eyebrow-label text-white/60">FOCUS HOURS</p>
                  <p className="mt-3 text-lg font-medium text-white">9am – 5pm</p>
                  <p className="mt-2 text-sm text-white/50">Apps blocked during study</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-6">
                  <p className="eyebrow-label text-white/60">REST OF DAY</p>
                  <p className="mt-3 text-lg font-medium text-white">Limited sessions</p>
                  <p className="mt-2 text-sm text-white/50">30 min cap after focus hours</p>
                </div>
                <div className="rounded border border-white/10 bg-white/5 p-6">
                  <p className="eyebrow-label text-white/60">INSTAGRAM • TIKTOK • YOUTUBE</p>
                  <p className="mt-3 text-lg font-medium text-white">Session limits</p>
                  <p className="mt-2 text-sm text-white/50">Hard stop when time ends</p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" delay={120} className="order-1 md:order-2">
              <h2 className="text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl">
                You control your phone{" "}
                <span className="text-[var(--muted)]">
                  (not the other way around)
                </span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                Untap protects your focus by starting with the hours that
                matter, then limiting the rest of the day. Brain-rotting apps
                get a session cap instead of an open tab.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                You still choose the schedule. Focus hours stay protected, and
                the rest of the day stays limited so those apps cannot take
                whatever time is left.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mindful section */}
      <section className="px-6 py-32 sm:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal variant="up">
            <h2 className="text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Use your phone in a{" "}
              <span className="text-[var(--accent)]">mindful way</span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              When you use Untap, you quickly start to realize the unhealthy
              usage patterns your phone was causing. The peace of mind and
              happiness this brings is something you won&apos;t want to go back
              from.
            </p>
          </Reveal>
          <div className="mt-16 grid auto-rows-fr gap-6 text-left sm:grid-cols-3">
            {[
              {
                stat: "3.5h",
                label: "average daily screen time saved",
              },
              {
                stat: "85%",
                label: "of users reduce doomscrolling in week one",
              },
      {
        stat: "4.4",
        label: "average rating from our users",
      },
            ].map((item, index) => (
              <Reveal
                key={item.label}
                variant="scale"
                delay={index * 120}
              >
                <div className="flex h-full flex-col rounded border border-[var(--border)] bg-[var(--card)] p-8">
                  <p className="text-4xl font-light text-[var(--accent)]">
                    {item.stat}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-dark px-6 py-32 sm:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-[1fr_1.8fr] md:gap-20">
            <Reveal variant="left">
              <h2 className="text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl md:sticky md:top-28">
                All you need to know
              </h2>
            </Reveal>
            <div className="space-y-10">
              {faqs.map((faq, index) => (
                <Reveal
                  key={faq.q}
                  variant="up"
                  delay={index * 60}
                  duration={600}
                >
                  <div className="border-b border-white/10 pb-10 last:border-0">
                    <h3 className="text-lg font-medium text-white sm:text-xl">
                      {faq.q}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-white/60">
                      {faq.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden px-6 py-32 sm:py-40">
        <Parallax speed={0.2} className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-[var(--accent-purple)]/10 via-[var(--accent-pink)]/8 to-white/4 blur-3xl" />
        </Parallax>
        <Reveal variant="scale" className="relative z-10 mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Download Untap now and{" "}
            <span className="text-[var(--accent)]">
              reduce your screen time
            </span>
          </h2>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://apps.apple.com/us/app/untap-screen-time-control/id6759078648"
              className="group flex items-center gap-3 rounded bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.81-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.unrotapp.screencontrol"
              className="group flex items-center gap-3 rounded border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--foreground)]/30 hover:bg-[var(--foreground)]/5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 9.99l-2.302 2.302L5.864 2.658z" />
              </svg>
              Download for Android
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
