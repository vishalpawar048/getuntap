import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";

export const metadata: Metadata = {
  title: "Screen Time App for students – Focus On Studying",
  description: "Limit screen time for college and high school students. Quiz-to-unlock app blocker helps you focus during study sessions, exams, and homework. Free for students.",
  alternates: {
    canonical: "https://www.getuntap.com/for-students",
  },
  keywords: [
    "limit screen time for students",
    "screen time app for students",
    "student focus app",
    "college app blocker",
    "study focus app",
    "exam prep app",
  ],
  openGraph: {
    title: "Untap for students — Limit Screen Time, Ace Your Exams",
    description: "The screen time app built for students. Quiz from your notes to unlock distracting apps. Turn procrastination into study time.",
    url: "/for-students",
    type: "website",
  },
};

const useCases = [
  {
    title: "During Finals Week",
    desc: "Lock social media completely or require 3 correct quiz answers before unlocking. Thousands of students use Untap to stay focused during midterms and finals.",
  },
  {
    title: "In Class Or Lectures",
    desc: "Set your phone to hard-lock mode during class hours so you're not tempted to check Instagram mid-lecture. Focus on the professor, not your notifications.",
  },
  {
    title: "Late-Night Study Sessions",
    desc: "Block TikTok and YouTube after 9pm so late-night study sessions don't turn into 3am scroll fests. Wake up refreshed, not bleary-eyed.",
  },
  {
    title: "Group Study Accountability",
    desc: "Set Friend Lock with a study partner so neither of you can disable restrictions without the other's password. Mutual accountability that actually works.",
  },
];

const features = [
  {
    title: "Quiz-To-Unlock From Notes",
    desc: "Upload lecture notes, flashcards, or textbook photos. Answer quiz questions to unlock your phone. Every distraction becomes a study rep.",
  },
  {
    title: "Exam Mode",
    desc: "Hard-lock all distracting apps during study blocks. Set it to unlock only after a timed session or when you pass a knowledge check.",
  },
  {
    title: "Study Analytics",
    desc: "See how many distraction attempts you blocked, how many quiz questions you answered, and how much focus time you protected each week.",
  },
  {
    title: "Friend Lock",
    desc: "Give a study buddy or roommate password access to your restrictions so you can't bypass them at 2am when discipline is low.",
  },
  {
    title: "Schedule Study Blocks",
    desc: "Set recurring locks for daily study hours—9am to 5pm weekdays, 7pm to 10pm every night, or custom schedules around your class timetable.",
  },
  {
    title: "Works Offline",
    desc: "Quizzes and restrictions work without WiFi. Study in the library, on the bus, or anywhere without worrying about connectivity.",
  },
];

const testimonials = [
  {
    quote:
      "As a student, doomscrolling was destroying my productivity. Untap added just enough friction to break the habit. My grades have improved.",
    name: "Ravi M.",
    role: "college student, Bengaluru, IN",
    result: "GPA up 0.4",
  },
  {
    quote:
      "This app completely changed my relationship with my phone. I went from 7 hours of screen time to under 2. I actually read books now.",
    name: "Arjun",
    role: "engineering student, Pune, IN",
    result: "7h → 1.8h / day",
  },
  {
    quote:
      "I tried one sec, Opal, and Apple Screen Time. Untap is the first one that actually stuck past the second week. The math challenge is brutal — perfect.",
    name: "Sofía G.",
    role: "marketer, Madrid, ES",
    result: "Week 8 and counting",
  },
];

const faqs = [
  {
    q: "How Does Untap Help Students Specifically?",
    a: "Most app blockers just lock your phone. Untap makes you study to unlock it. Upload your class notes and Untap generates quiz questions. Try to open Instagram and you have to answer a question from your biology notes first. It's like having a tutor that intercepts every distraction.",
  },
  {
    q: "Can I Use It To Limit Screen Time During Finals?",
    a: "Absolutely. Most students turn on strict mode during finals week: apps stay locked until you complete a timed study session or pass multiple quiz questions in a row. You can schedule it to auto-lock every day at 8am and unlock at 6pm, or customize it around your exam schedule.",
  },
  {
    q: "Is There A Student Discount?",
    a: "The core features are free. Unlimited quiz banks and advanced analytics require a subscription, but we offer student pricing (50% off) with a valid .edu email address.",
  },
  {
    q: "Does It Work With Online Classes And Remote Learning?",
    a: "Yes. Set it to allow Zoom, Canvas, Google Classroom, and other school apps while locking entertainment apps. You can study online without getting sidetracked by TikTok notifications.",
  },
  {
    q: "Will It Help Me Stop Procrastinating?",
    a: "It's designed for it. One college student cut her procrastination scrolling from 187 app opens per week down to 22. The quiz-to-unlock feature means every procrastination attempt becomes a study opportunity instead.",
  },
  {
    q: "Can I Use It With My Roommate Or Study Group?",
    a: "Yes. Friend Lock lets someone else set a password on your restrictions. Give it to your roommate, study buddy, or accountability partner. You can't disable it without their permission, which keeps you honest when willpower is low.",
  },
];

export default function ForStudentsPage() {
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
    name: "Untap for Students",
    applicationCategory: "EducationalApplication",
    applicationSubCategory: "Screen Time Control",
    operatingSystem: "iOS, Android",
    description: "Screen time control app designed for students. Quiz from your study notes to unlock distracting apps. Limit screen time and improve focus during study sessions and exams.",
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

  return (
    <>
      <JsonLd data={[faqJsonLd, softwareAppJsonLd]} />

      {/* Hero */}
      <section className="section-dark relative isolate overflow-hidden px-6 pb-20 pt-32 sm:pt-40">
        <div className="absolute -right-32 top-0 -z-10 h-80 w-80 rounded-full bg-[var(--accent)]/20 blur-3xl" />
        <div className="absolute left-0 top-40 -z-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="mx-auto max-w-5xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            For Students
          </span>
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            Limit Screen Time,{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[#ffb067] bg-clip-text text-transparent">
              Ace Your Exams
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl">
            The screen time app built for students who want better grades, not just better screen time stats. Quiz from your notes to unlock distracting apps.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="https://apps.apple.com/us/app/untap-screen-time-control/id6759078648"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-medium text-black transition hover:bg-white/90"
            >
              Download For iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.unrotapp.screencontrol"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-base font-medium text-white transition hover:bg-white/10"
            >
              Download For Android
            </a>
          </div>
        </div>
      </section>

      {/* The Student Problem */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                The student problem
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                Procrastination Isn't a Discipline Problem
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
              <p>
                You sit down to study. You open your laptop or textbook. Five minutes in, you're "just checking" Instagram. Twenty minutes later you're three subreddits deep and haven't reviewed a single flashcard.
              </p>
              <p>
                It's not because you're lazy. It's because every app on your phone was engineered by teams of PhDs to be maximally addictive. You're not fighting fair.
              </p>
              <p>
                Untap evens the odds. It doesn't shame you or guilt-trip you. It just adds friction where you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-dark relative isolate overflow-hidden px-6 py-24 sm:py-32">
        <div className="absolute -bottom-40 left-0 -z-10 h-96 w-96 rounded-full bg-[var(--accent)]/15 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Use cases
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
              How Students Use Untap
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 transition duration-300 hover:border-[var(--accent)]/40"
              >
                <span className="absolute right-6 top-6 text-xs font-semibold text-white/30">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {useCase.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/60">
                  {useCase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Features
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Everything You Need To Stay Focused
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                <span className="absolute right-5 top-5 text-xs font-semibold text-[var(--muted)]">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-bold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Student reviews
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
              What Students Are Saying
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-0.5 text-[var(--accent)]">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-3.5 w-3.5"
                      >
                        <path d="M10 1.5l2.7 5.47 6.04.88-4.37 4.26 1.03 6.01L10 15.27l-5.4 2.84 1.03-6.01L1.26 7.85l6.04-.88L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                  <span className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {t.result}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/75">
                  "{t.quote}"
                </p>
                <div className="mt-4 border-t border-white/10 pt-3">
                  <p className="text-xs font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Student results
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Real Numbers From Real Students
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { stat: "3.5h", label: "average screen time saved per day" },
              { stat: "85%", label: "reduce phone distractions in week 1" },
              { stat: "40+", label: "extra study reps per day with quiz mode" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center"
              >
                <p className="text-4xl font-bold text-[var(--accent)]">
                  {item.stat}
                </p>
                <p className="mt-3 text-sm leading-snug text-[var(--muted)]">
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
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:sticky md:top-28">
                Student Questions
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
            Join Thousands Of Students{" "}
            <span className="text-[var(--accent)]">Acing Their Exams</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Free to start. Student discounts available. Works on iPhone and Android.
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
