const testimonials = [
  {
    quote:
      "This app completely changed my relationship with my phone. I went from 7 hours of screen time to under 2. I actually read books now.",
    name: "Arjun",
    title: "user of untap",
  },
  {
    quote:
      "I was skeptical, but after a week I noticed I was more present with my kids. Less scrolling, more living. Highly recommend.",
    name: "Sarah K.",
    title: "parent & user of untap",
  },
  {
    quote:
      "As a student, doomscrolling was destroying my productivity. Untap added just enough friction to break the habit. My grades have improved.",
    name: "Ravi M.",
    title: "college student",
  },
  {
    quote:
      "Simple, elegant, and effective. The open delay feature is genius — those few seconds of pause are enough to make you reconsider opening Instagram.",
    name: "Priya",
    title: "designer & user of untap",
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
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "open delays",
    description:
      "add a customizable pause before distracting apps open. those few seconds of friction are often enough to break the autopilot loop.",
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
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "session limits",
    description:
      "set daily time caps for each app. once your limit is reached, untap steps in so you can step away.",
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
    title: "hard locks",
    description:
      "for apps you want to completely avoid during focus hours, hard lock prevents access entirely until your schedule allows.",
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
        <path d="M12 8v4l3 3" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
      </svg>
    ),
    title: "focus mode",
    description:
      "schedule distraction-free windows. during focus time, only your chosen productive apps are accessible.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
          <div className="text-center">
            <h1 className="animate-fade-up max-w-4xl text-balance text-5xl font-bold leading-[1.08] tracking-tight text-white lowercase sm:text-6xl md:text-7xl lg:text-8xl">
            Choose Purpose Over Distraction.
      
            </h1>

            <p className="animate-fade-up delay-200 mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-white/60 sm:text-xl">
              untap helps you break phone addiction with intentional friction.
              take back your time, focus on what matters, and reclaim hours of
              your day.
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
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <div>
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
            </div>
        
          </div>
        </div>
      </section>

      {/* Features - dark section */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-4xl font-bold leading-[1.1] tracking-tight lowercase text-white sm:text-5xl">
            designed to reduce your{" "}
            <span className="text-[var(--accent)]">dopamine addiction</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-white/50">
            if the first thing you reach for when you open your eyes is your
            phone, untap is for you.
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                <div className="text-[var(--accent)]">{feature.icon}</div>
                <h3 className="mt-5 text-xl font-bold lowercase text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/50">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Control section */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <div className="order-2 flex items-center justify-center md:order-1">
              <div className="relative">
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
              </div>
            </div>

            <div className="order-1 md:order-2">
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
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - dark section */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-4xl font-bold leading-[1.1] tracking-tight lowercase text-white sm:text-5xl">
            loved by people who{" "}
            <span className="text-[var(--accent)]">value their time</span>
          </h2>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <p className="text-lg leading-relaxed text-white/70">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-white/40">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mindful section */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
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
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
              >
                <p className="text-3xl font-bold text-[var(--accent)]">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm leading-snug text-[var(--muted)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
            <div>
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight lowercase text-white sm:text-5xl md:sticky md:top-28">
                all you need to know
              </h2>
            </div>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="border-b border-white/10 pb-8 last:border-0"
                >
                  <h3 className="text-xl font-bold lowercase text-white">
                    {faq.q}
                  </h3>
                  <p className="mt-3 leading-relaxed text-white/50">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
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
        </div>
      </section>
    </>
  );
}
