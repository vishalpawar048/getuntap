import QRCode from "qrcode";
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
      "This app completely changed my relationship with my phone. I went from 7 hours of screen time to under 2. I actually read books now.",
    name: "Arjun",
    title: "engineering student",
    location: "Pune, IN",
    stars: 5,
    result: "7h → 1.8h / day",
    featured: true,
  },
  {
    quote:
      "I was skeptical, but after a week I noticed I was more present with my kids. Less scrolling, more living. Highly recommend.",
    name: "Sarah K.",
    title: "parent of two",
    location: "Austin, TX",
    stars: 5,
    result: "Reclaimed dinnertime",
  },
  {
    quote:
      "As a student, doomscrolling was destroying my productivity. Untap added just enough friction to break the habit. My grades have improved.",
    name: "Ravi M.",
    title: "college student",
    location: "Bengaluru, IN",
    stars: 5,
    result: "GPA up 0.4",
  },
  {
    quote:
      "Simple, elegant, and effective. The open delay feature is genius — those few seconds of pause are enough to make you reconsider opening Instagram.",
    name: "Priya",
    title: "designer",
    location: "London, UK",
    stars: 5,
    result: "40% fewer opens",
  },
  {
    quote:
      "I got back two hours a day. Untap is the only app that actually made me put my phone down without feeling guilty.",
    name: "Maya R.",
    title: "designer",
    location: "Brooklyn, NY",
    stars: 5,
    result: "+2h / day",
  },
  {
    quote:
      "Cleaner than every screen time tool I've tried. No nagging, no shame — it just works. The friend lock is a game-changer.",
    name: "Daniel K.",
    title: "product manager",
    location: "Berlin, DE",
    stars: 5,
    result: "Cut social by 60%",
  },
  {
    quote:
      "Felt like turning the lights on. I had no idea how much I was tapping until Untap showed me. The weekly report is humbling and motivating.",
    name: "Priya S.",
    title: "writer",
    location: "Mumbai, IN",
    stars: 5,
    result: "187 → 22 opens/wk",
  },
  {
    quote:
      "My evenings finally feel like evenings again. The kids noticed before I did. Worth every minute of setup.",
    name: "Tom A.",
    title: "dad of three",
    location: "Manchester, UK",
    stars: 5,
    result: "Phone-free dinners",
  },
  {
    quote:
      "Untap doesn't make me feel guilty for using my phone. It just makes me want to use it less. That's a meaningful difference.",
    name: "Lina V.",
    title: "therapist",
    location: "Amsterdam, NL",
    stars: 5,
    result: "Calmer mornings",
  },
  {
    quote:
      "After two weeks I was sleeping better. After a month I picked up a book for the first time in a year. The breathing unlock saved me.",
    name: "Amir J.",
    title: "software engineer",
    location: "Toronto, CA",
    stars: 5,
    result: "+45 min sleep",
  },
  {
    quote:
      "I tried one sec, Opal, and Apple Screen Time. Untap is the first one that actually stuck past the second week. The math challenge is brutal — perfect.",
    name: "Sofía G.",
    title: "marketer",
    location: "Madrid, ES",
    stars: 5,
    result: "Week 8 and counting",
  },
  {
    quote:
      "I run a remote team and we all installed Untap during focus blocks. Deep work hours nearly doubled. Nobody felt surveilled.",
    name: "Jordan P.",
    title: "founder, design studio",
    location: "remote",
    stars: 5,
    result: "9 → 16 deep-work h/wk",
  },
];

const faqs = [
  {
    q: "how does it work?",
    a: "untap adds intentional friction before you open distracting apps. set open delays, session limits, or hard locks to break the autopilot habit of reaching for your phone. it uses apple's screen time APIs to work seamlessly on iOS.",
  },
  {
    q: "what plans does untap offer?",
    a: "untap offers a free tier with core features. for power users, we have monthly and annual subscription plans with advanced features like focus mode, detailed analytics, and unlimited app restrictions.",
  },
  {
    q: "is my privacy protected?",
    a: "absolutely. untap stores all data locally on your device. we have no analytics, no tracking, and no advertising SDKs. we do not collect, store, or transmit any personal data to external servers. your data never leaves your phone.",
  },
  {
    q: "will it work on my phone?",
    a: "untap is currently available for iOS (iPhone and iPad). we also have an android version available on the google play store. both platforms are fully supported with all core features.",
  },
  {
    q: "can I still access my apps?",
    a: "yes! untap doesn't permanently block any apps. it adds a mindful pause — a customizable delay — before opening apps you've flagged as distracting. you're always in control and can adjust or remove restrictions at any time.",
  },
  {
    q: "is it safe for my phone?",
    a: "yes! untap uses only official apple APIs (FamilyControls, ManagedSettings, DeviceActivity) to function. it installs like any other app from the app store and can be removed at any time.",
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
    title: "intentional app opening",
    description:
      "choose what someone must do before opening a distracting app, from a tiny pause to a real challenge.",
    highlights: [
      "scan QR code",
      "scan NFC tag",
      "solve math challenge",
      "suggest alternate app",
      "breathing exercise",
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
    title: "locks you cannot bypass",
    description:
      "friend lock lets someone you trust protect your settings with a password, while prevent uninstall keeps the app in place.",
    highlights: ["friend lock", "password-protected settings", "prevent uninstall"],
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
    title: "usage reports and alerts",
    description:
      "see where your attention goes and get notified when consumption crosses the line you set.",
    highlights: [
      "daily reports",
      "weekly reports",
      "monthly reports",
      "over-consumption notifications",
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
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M8 8h8" />
        <path d="M8 16h8" />
      </svg>
    ),
    title: "soft to strict control",
    description:
      "start gently or make the boundaries firm. untap adapts to how much help you need in the moment.",
    highlights: ["soft mode", "moderate mode", "strict mode"],
  },
];

const APP_URL = SITE_URL;

type Testimonial = (typeof testimonials)[number];

function Star({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M10 1.5l2.7 5.47 6.04.88-4.37 4.26 1.03 6.01L10 15.27l-5.4 2.84 1.03-6.01L1.26 7.85l6.04-.88L10 1.5z" />
    </svg>
  );
}

const avatarGradients = [
  "from-[#f8711b] to-[#ffb067]",
  "from-[#7c5cff] to-[#b793ff]",
  "from-[#22c55e] to-[#86efac]",
  "from-[#06b6d4] to-[#67e8f9]",
  "from-[#ef4444] to-[#fca5a5]",
  "from-[#eab308] to-[#fde68a]",
];

function gradientForName(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) | 0;
  }
  return avatarGradients[Math.abs(hash) % avatarGradients.length];
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initial = testimonial.name.charAt(0).toUpperCase();
  const gradient = gradientForName(testimonial.name);

  return (
    <figure className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.07]">
      <div className="flex items-center justify-between gap-2">
        <div
          role="img"
          aria-label={`Rated ${testimonial.stars} out of 5 stars`}
          className="flex gap-0.5 text-[var(--accent)]"
        >
          {Array.from({ length: testimonial.stars }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5" />
          ))}
        </div>
        {testimonial.result ? (
          <span className="truncate rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)]">
            {testimonial.result}
          </span>
        ) : null}
      </div>

      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-white/75">
        <p>&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>

      <figcaption className="mt-4 flex items-center gap-2.5 border-t border-white/10 pt-3">
        <span
          aria-hidden
          className={`grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br ${gradient} text-xs font-semibold text-black/80`}
        >
          {initial}
        </span>
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-white">
            {testimonial.name}
          </p>
          <p className="truncate text-[11px] text-white/40">
            {testimonial.title}
            {testimonial.location ? ` · ${testimonial.location}` : ""}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export default async function Home() {
  const qrSvg = await QRCode.toString(APP_URL, {
    type: "svg",
    color: {
      dark: "#1a1108",
      light: "#fffaf3",
    },
    margin: 1,
    width: 220,
    errorCorrectionLevel: "M",
  });

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
    description:
      "Untap is a screen time control app that helps you stop doomscrolling and break phone addiction with intentional friction — app open delays, breathing pauses, QR/NFC unlocks, and focus locks.",
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
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "1284",
      reviewCount: "412",
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
        className="section-dark relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        <Parallax
          speed={0.3}
          className="pointer-events-none absolute left-1/2 top-1/3 -z-10 -translate-x-1/2"
        >
          <div className="h-[34rem] w-[34rem] rounded-full bg-[var(--accent)]/30 blur-3xl" />
        </Parallax>
        <Parallax
          speed={-0.18}
          className="pointer-events-none absolute -bottom-32 -right-32 -z-10"
        >
          <div className="h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        </Parallax>

        <Parallax
          speed={-0.12}
          ariaHidden={false}
          className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center"
        >
          <div className="text-center">
            <h1
              id="hero-heading"
              className="animate-fade-up max-w-4xl text-balance text-5xl font-bold leading-[1.08] tracking-tight text-white lowercase sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Choose Purpose Over Distraction.
            </h1>

            <p className="sr-only">
              Untap is the screen time control app for iPhone and Android that
              helps you stop doomscrolling and break phone addiction.
            </p>

            <p className="animate-fade-up delay-200 mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-white/60 sm:text-xl">
              Untap is a screen time control app that helps you stop
              doomscrolling and break phone addiction with intentional
              friction. Take back your time, focus on what matters, and reclaim
              hours of your day.
            </p>

            <div className="animate-fade-up delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://apps.apple.com/us/app/untap-screen-time-control/id6759078648"
                className="group flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-medium text-black transition hover:bg-white/90"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.81-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                download for iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.unrotapp.screencontrol"
                className="group flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-base font-medium text-white transition hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 9.99l-2.302 2.302L5.864 2.658z" />
                </svg>
                download for android
              </a>
            </div>
          </div>
        </Parallax>
      </section>

      {/* Introduction */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <Reveal variant="left">
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl">
                your attention is{" "}
                <span className="text-[var(--accent)]">precious</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
                smartphone addiction affects your mental health, your
                relationships, and your productivity. endless scrolling and
                dopamine-driven notifications steal hours of your day without
                you even realizing it.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
                untap is a mindful screen time tool that helps you use your
                phone intentionally — not impulsively.
              </p>
            </Reveal>
            <Reveal variant="right" delay={120} className="flex justify-center md:justify-end">
              <div className="w-full max-w-xs rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 text-center shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                  scan QR code
                </p>
                <p className="mt-2 text-2xl font-bold leading-tight tracking-tight lowercase">
                  unlock the app
                </p>
                <div
                  className="mx-auto mt-6 rounded-2xl bg-[#fffaf3] p-4"
                  aria-label="QR code linking to the Untap app"
                  dangerouslySetInnerHTML={{ __html: qrSvg }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features - dark section */}
      <section className="section-dark relative isolate overflow-hidden px-6 py-24 sm:py-32">
        <Parallax
          speed={0.2}
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
        >
          <div className="h-[28rem] w-[28rem] rounded-full bg-[var(--accent)]/20 blur-3xl" />
        </Parallax>
        <Parallax speed={-0.15} className="absolute -bottom-40 right-0 -z-10">
          <div className="h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        </Parallax>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(248,113,27,0.18),transparent_32rem)]" />

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <Reveal variant="up">
              <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                mindful friction
              </p>
              <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight lowercase text-white sm:text-5xl md:text-6xl">
                designed to reduce your{" "}
                <span className="bg-gradient-to-r from-[var(--accent)] to-[#ffb067] bg-clip-text text-transparent">
                  dopamine addiction
                </span>
              </h2>
            </Reveal>

            <Reveal variant="up" delay={150}>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur">
                <p className="text-lg leading-relaxed text-white/65">
                  if the first thing you reach for when you open your eyes is your
                  phone, untap adds the right kind of friction: QR and NFC unlocks,
                  math challenges, breathing pauses, alternate app suggestions,
                  reports, alerts, and stronger locks when you need them.
                </p>
                <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-black/20 text-center">
                  {["soft", "moderate", "strict"].map((step) => (
                    <div
                      key={step}
                      className="border-r border-white/10 px-3 py-4 last:border-r-0"
                    >
                      <p className="text-sm font-semibold lowercase text-white">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-12">
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
                  className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:bg-white/[0.09] sm:p-8"
                >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--accent)]/10 transition duration-300 group-hover:bg-[var(--accent)]/20" />
                <div className="relative flex items-start justify-between gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/15 text-[var(--accent)] shadow-lg shadow-[var(--accent)]/10">
                    {feature.icon}
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/35">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="relative mt-8 text-2xl font-bold lowercase tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="relative mt-4 max-w-xl leading-relaxed text-white/55">
                  {feature.description}
                </p>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {feature.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium lowercase text-white/55"
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
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <Reveal variant="left" className="order-2 flex items-center justify-center md:order-1">
              <Parallax speed={0.08} ariaHidden={false} className="relative">
                <div className="flex h-[420px] w-[220px] flex-col rounded-[2.5rem] border-2 border-[var(--foreground)]/10 bg-[var(--dark-bg)] p-6 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-3 rounded-full bg-[var(--accent)]" />
                    <p className="text-xs font-medium text-white/40">untap</p>
                    <div className="h-3 w-3 rounded-full bg-white/20" />
                  </div>
                  <div className="mt-8 flex-1 space-y-4">
                    <div className="rounded-xl bg-white/10 p-3">
                      <p className="text-xs font-medium text-white/70">
                        Instagram
                      </p>
                      <p className="mt-1 text-[10px] text-white/40">
                        5s delay · 30min limit
                      </p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-3">
                      <p className="text-xs font-medium text-white/70">
                        Twitter/X
                      </p>
                      <p className="mt-1 text-[10px] text-white/40">
                        10s delay · 15min limit
                      </p>
                    </div>
                    <div className="rounded-xl bg-[var(--accent)]/20 p-3">
                      <p className="text-xs font-medium text-[var(--accent)]">
                        TikTok
                      </p>
                      <p className="mt-1 text-[10px] text-white/40">
                        hard locked until 6pm
                      </p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-3">
                      <p className="text-xs font-medium text-white/70">
                        YouTube
                      </p>
                      <p className="mt-1 text-[10px] text-white/40">
                        8s delay · 45min limit
                      </p>
                    </div>
                  </div>
                </div>
              </Parallax>
            </Reveal>

            <Reveal variant="right" delay={120} className="order-1 md:order-2">
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl">
                you control your phone{" "}
                <span className="text-[var(--muted)]">
                  (not the other way around)
                </span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
                a lot of thought went into the design of untap. it was created
                to improve your productivity and reduce your screen time to
                break your phone addiction.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
                with untap, you consciously decide which app to open and when.
                open the apps that you need and avoid the apps that are
                distractions.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials - dark section */}
      <section
        aria-labelledby="testimonials-heading"
        className="section-dark relative isolate overflow-hidden px-6 py-16 sm:py-20"
      >
        <Parallax speed={0.18} className="absolute -right-32 top-0 -z-10">
          <div className="h-72 w-72 rounded-full bg-[var(--accent)]/15 blur-3xl" />
        </Parallax>

        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <Reveal variant="up">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                <Star className="h-3.5 w-3.5" />
                4.8 / 5 from 1,284 reviews
              </span>
              <h2
                id="testimonials-heading"
                className="mt-4 max-w-2xl text-balance text-3xl font-bold leading-[1.1] tracking-tight lowercase text-white sm:text-4xl"
              >
                loved by people who{" "}
                <span className="bg-gradient-to-r from-[var(--accent)] to-[#ffb067] bg-clip-text text-transparent">
                  value their time
                </span>
              </h2>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <a
                href="/reviews"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/80 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                read all reviews
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden
                  className="h-3.5 w-3.5"
                >
                  <path d="M4 10h12" />
                  <path d="M11 5l5 5-5 5" />
                </svg>
              </a>
            </Reveal>
          </div>

          <div className="mt-10 grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {testimonials.map((t, index) => (
              <Reveal
                key={t.name}
                variant="up"
                delay={(index % 4) * 80}
                duration={600}
              >
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mindful section */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="up">
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl">
              use your phone in a{" "}
              <span className="text-[var(--accent)]">mindful way</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              when you use untap, you quickly start to realize the unhealthy
              usage patterns your phone was causing. the peace of mind and
              happiness this brings is something you won&apos;t want to go back
              from.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
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
                stat: "4.8",
                label: "average rating from our users",
              },
            ].map((item, index) => (
              <Reveal
                key={item.label}
                variant="scale"
                delay={index * 120}
              >
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                  <p className="text-3xl font-bold text-[var(--accent)]">
                    {item.stat}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-[var(--muted)]">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
            <Reveal variant="left">
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight lowercase text-white sm:text-5xl md:sticky md:top-28">
                all you need to know
              </h2>
            </Reveal>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <Reveal
                  key={faq.q}
                  variant="up"
                  delay={index * 60}
                  duration={600}
                >
                  <div className="border-b border-white/10 pb-8 last:border-0">
                    <h3 className="text-xl font-bold lowercase text-white">
                      {faq.q}
                    </h3>
                    <p className="mt-3 leading-relaxed text-white/50">
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
      <section className="px-6 py-24 sm:py-32">
        <Reveal variant="scale" className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl md:text-6xl">
            download untap now and{" "}
            <span className="text-[var(--accent)]">
              reduce your screen time
            </span>
          </h2>

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
        </Reveal>
      </section>
    </>
  );
}
