import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";

export const metadata: Metadata = {
  title: "Study App Blocker – Quiz Your Notes To Unlock",
  description: "Best study app blocker for students. Answer quiz questions from your study notes to unlock distracting apps. Turn phone time into study time. Free for iPhone & Android.",
  alternates: {
    canonical: "https://www.getuntap.com/study-app-blocker",
  },
  keywords: [
    "study app blocker",
    "app blocker for studying",
    "phone block app",
    "best app blocker for students",
    "study to unlock apps",
    "focus app for students",
  ],
  openGraph: {
    title: "Study App Blocker — Quiz Your Notes To Unlock Apps",
    description: "The only app blocker that makes you study to unlock your phone. Turn distractions into study sessions.",
    url: "/study-app-blocker",
    type: "website",
  },
};

const features = [
  {
    title: "Quiz From Your Notes",
    description: "Upload your study materials and Untap generates quiz questions. You can't unlock Instagram until you answer correctly.",
  },
  {
    title: "Exam-Ready Mode",
    description: "Lock your phone completely during study blocks. Set it to unlock only after you've completed a timed study session or passed a quiz.",
  },
  {
    title: "Focus Analytics",
    description: "See how many distraction attempts you blocked, how many quizzes you passed, and how much study time you protected each week.",
  },
  {
    title: "Works On Campus WiFi",
    description: "No VPN required. Works seamlessly on iOS and Android, in dorms, libraries, or coffee shops.",
  },
];

const faqs = [
  {
    q: "How Does The Study-To-Unlock Feature Work?",
    a: "Upload your study notes, flashcards, or lecture slides into Untap. When you try to open a distracting app like TikTok or Instagram, Untap shows you a quiz question from your notes. Answer correctly and the app opens. Get it wrong and you're back to studying.",
  },
  {
    q: "Can I Use This As An App Blocker For Studying During Finals?",
    a: "Yes. Thousands of students use Untap during midterms and finals week. Set it to hard-lock distracting apps during study hours, or require a quiz pass before opening them. You can also schedule automatic locks for recurring study blocks.",
  },
  {
    q: "Is This A Phone Block App Or Does It Just Delay Things?",
    a: "Both. You can set a soft delay (10 seconds before opening), a quiz gate (answer to unlock), session limits (30 minutes per day), or a full hard lock (no access until 9pm). Start light and increase friction as exams get closer.",
  },
  {
    q: "Will It Work With My Study Methods?",
    a: "If you study from notes, flashcards, slides, or any text-based material, yes. Untap works with PDFs, photos of handwritten notes, typed documents, and more. Upload what you're already using.",
  },
  {
    q: "Is It Free for students?",
    a: "There's a free tier with core features. Paid plans add unlimited quiz banks, deeper analytics, and group study mode. Many students start free and upgrade during finals.",
  },
  {
    q: "Does It Work On iPhone And Android?",
    a: "Yes. Full feature parity across both platforms. Set it up once and your restrictions sync across devices.",
  },
];

export default function StudyAppBlockerPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Untap Study App Blocker",
    applicationCategory: "EducationalApplication",
    applicationSubCategory: "Study App Blocker",
    operatingSystem: "iOS, Android",
    description: "Study app blocker that generates quizzes from your notes. Answer correctly to unlock distracting apps. Designed for students preparing for exams.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
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
        item: "https://www.getuntap.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Study App Blocker",
        item: "https://www.getuntap.com/study-app-blocker",
      },
    ],
  };

  return (
    <>
      <JsonLd data={[faqJsonLd, softwareAppJsonLd, breadcrumbJsonLd]} />

      {/* Hero Section */}
      <section className="section-dark relative isolate overflow-hidden px-6 pb-24 pt-40 sm:pt-48">
        <div className="absolute -right-32 top-0 -z-10 h-80 w-80 rounded-full bg-gradient-to-br from-[var(--accent-purple)]/12 via-[var(--accent-pink)]/8 to-white/5 blur-3xl" />
        <div className="absolute left-0 top-40 -z-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          <span className="eyebrow-label inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[var(--accent)]">
            STUDY APP BLOCKER
          </span>
          <h1 className="mt-6 text-balance text-5xl font-normal leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            The app blocker that{" "}
            <span className="text-white/50">
              makes you study first
            </span>
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl">
            Set focus hours so study time stays protected, then limit the rest of the day. Session caps stop brain-rotting apps from running on. Students can also quiz from their notes before Instagram or TikTok opens.
          </p>

          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="https://apps.apple.com/us/app/untap-screen-time-control/id6759078648"
              className="inline-flex items-center gap-3 rounded bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Download for iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.unrotapp.screencontrol"
              className="inline-flex items-center gap-3 rounded border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Download for Android
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 py-32 sm:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            <div>
              <p className="eyebrow-label text-[var(--muted)]">
                THE PROBLEM
              </p>
              <h2 className="mt-5 text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl">
                Most app blockers don't actually help you study
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              <p>
                You've tried locking Instagram during study hours. You've deleted TikTok before finals. You've set Screen Time limits that you immediately bypassed. The problem isn't willpower—it's that blocking alone doesn't create a better alternative.
              </p>
              <p>
                What if instead of just blocking distractions, your phone helped you study? That's why Untap is different. It doesn't just say no. It turns every distraction attempt into a study opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-dark relative isolate overflow-hidden px-6 py-32 sm:py-40">
        <div className="absolute -bottom-40 left-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-[var(--accent-purple)]/10 to-[var(--accent-pink)]/10 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="eyebrow-label text-[var(--accent)]">
              HOW IT WORKS
            </p>
            <h2 className="mt-5 text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl">
              Three steps to better grades
            </h2>
          </div>

          <ol className="mt-16 space-y-8">
            {[
              {
                num: "01",
                title: "Upload Your Study Materials",
                desc: "Add lecture notes, flashcards, PDFs, or photos of handwritten notes. Untap reads them and generates quiz questions automatically.",
              },
              {
                num: "02",
                title: "Try To Open A Distracting App",
                desc: "When you reach for Instagram, TikTok, or any app you've marked as distracting, Untap pauses and shows you a quiz question from your notes.",
              },
              {
                num: "03",
                title: "Answer Correctly Or Keep Studying",
                desc: "Get it right and the app opens. Get it wrong and you're back to your notes. Either way, you're studying more than scrolling.",
              },
            ].map((step) => (
              <li
                key={step.num}
                className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10"
              >
                <span className="font-mono text-sm tracking-widest text-[var(--accent)]">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-white/60">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-32 sm:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="eyebrow-label text-[var(--muted)]">
              FEATURES
            </p>
            <h2 className="mt-5 text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl">
              Built for students, not just blockers
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded border border-[var(--border)] bg-[var(--card)] p-10 transition duration-300 hover:border-[var(--accent)]"
              >
                <span className="eyebrow-label absolute right-8 top-8 text-[var(--muted)]">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-normal tracking-tight sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Results */}
      <section className="section-dark px-6 py-32 sm:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            <div>
              <p className="eyebrow-label text-[var(--accent)]">
                RESULTS
              </p>
              <h2 className="mt-5 text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl">
                Students who study more, scroll less
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-white/70 sm:text-lg">
              <p>
                One college student in Bengaluru raised her GPA by 0.4 points after using Untap during finals prep. A high school senior cut his phone time from 7 hours to under 2 during exam week. They didn't have superhuman discipline—they just made every distraction a study opportunity.
              </p>
              <p>
                Students using Untap as their study app blocker report fewer late-night cram sessions, better focus during lectures, and more confidence walking into exams. The quiz-to-unlock feature means every Instagram attempt becomes another pass through your flashcards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Comparison
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Why Untap Vs Other Phone Block Apps
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--border)]">
            <table className="w-full">
              <thead className="bg-[var(--card)]">
                <tr className="border-b border-[var(--border)]">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[var(--accent)]">
                    Untap
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[var(--muted)]">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {[
                  ["Quiz from notes", "✓", "✗"],
                  ["Study analytics", "✓", "✗"],
                  ["Exam mode", "✓", "Partial"],
                  ["Works offline", "✓", "Partial"],
                  ["No VPN required", "✓", "✗"],
                  ["Student pricing", "✓", "✗"],
                ].map(([feature, untap, others]) => (
                  <tr key={feature}>
                    <td className="px-6 py-4 text-sm">{feature}</td>
                    <td className="px-6 py-4 text-center text-sm font-medium text-[var(--accent)]">
                      {untap}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-[var(--muted)]">
                      {others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
            <div>
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:sticky md:top-28">
                Common Questions
              </h2>
            </div>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="border-b border-white/10 pb-8 last:border-0"
                >
                  <h3 className="text-xl font-bold text-white">
                    {faq.q}
                  </h3>
                  <p className="mt-3 leading-relaxed text-white/60">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Turn Distractions Into{" "}
            <span className="text-[var(--accent)]">Study Sessions</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Free to start. Works on iPhone and Android. Thousands of students already studying smarter.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://apps.apple.com/us/app/untap-screen-time-control/id6759078648"
              className="group flex items-center gap-3 rounded-full bg-[var(--foreground)] px-7 py-4 text-base font-medium text-[var(--background)] transition hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.81-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download For iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.unrotapp.screencontrol"
              className="group flex items-center gap-3 rounded-full border border-[var(--border)] px-7 py-4 text-base font-medium text-[var(--foreground)] transition hover:bg-[var(--foreground)]/5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 9.99l-2.302 2.302L5.864 2.658z" />
              </svg>
              Download For Android
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
