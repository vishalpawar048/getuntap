import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";

export const metadata: Metadata = {
  title: "Study to Unlock – Quiz Your Way Out",
  description:
    "Quiz-to-unlock app blocker feature: answer questions from your study notes to unlock your phone. Turn every distraction into a study opportunity. Free For Students.",
  alternates: {
    canonical: "https://www.getuntap.com/study-to-unlock",
  },
  keywords: [
    "study to unlock",
    "quiz to unlock apps",
    "quiz-based app blocker",
    "educational app lock",
    "study before phone access",
  ],
  openGraph: {
    title: "Study to Unlock — Quiz from Your Notes to Unlock Apps",
    description:
      "The only app blocker that makes you answer quiz questions from your study materials before unlocking distracting apps.",
    url: "/study-to-unlock",
    type: "website",
  },
};

const howItWorksSteps = [
  {
    num: "01",
    title: "Add Your Study Materials",
    desc: "Upload lecture notes, textbook photos, flashcards, or PDFs. Untap scans them and generates quiz questions automatically.",
  },
  {
    num: "02",
    title: "Set Which Apps Require a Quiz",
    desc: "Choose which apps—Instagram, TikTok, YouTube, whatever steals your focus—require you to pass a quiz before opening.",
  },
  {
    num: "03",
    title: "Answer to Unlock",
    desc: "Try to open a blocked app and Untap shows you a quiz question. Get it right and the app opens. Wrong answer sends you back to studying.",
  },
];

const benefits = [
  {
    title: "Spaced Repetition, Automatically",
    desc: "Every time you reach for your phone, you're testing yourself on your notes. That's dozens of extra study reps per day without opening a flashcard app.",
  },
  {
    title: "Works With Any Subject",
    desc: "Chemistry, history, coding, law—if you can photograph or upload it, Untap can quiz you on it. No manual flashcard entry required.",
  },
  {
    title: "Adjustable Difficulty",
    desc: "Set easy mode for review, medium for daily practice, or hard mode during finals when you need maximum friction.",
  },
  {
    title: "Offline Support",
    desc: "Quizzes work without WiFi. Study in airplanes, subways, or anywhere your notes and phone are.",
  },
];

const faqs = [
  {
    q: "How does Untap generate quiz questions from my notes?",
    a: "Upload a photo or PDF of your notes, and Untap's AI reads them to create multiple-choice, true/false, and short-answer questions. You don't have to manually type flashcards—just upload and go.",
  },
  {
    q: "What if I get the quiz question wrong?",
    a: "The app stays locked and you're shown the correct answer with an explanation pulled from your notes. Then you go back to studying. You can try again in 5 minutes or set a longer lockout.",
  },
  {
    q: "Can I use this for multiple classes at once?",
    a: "Yes. Upload notes from every class and Untap organizes them into separate quiz banks. You can set different apps to pull from different subjects if you want.",
  },
  {
    q: "Is this better than just using flashcard apps?",
    a: "Flashcard apps require you to remember to open them. Untap puts the quiz in front of every distraction attempt. You end up studying 10-20 more times per day without thinking about it.",
  },
  {
    q: "Does it work for exam prep?",
    a: "Absolutely. Many students turn on hard mode during finals week: every app requires 3 correct answers in a row to unlock. It's brutal but effective.",
  },
  {
    q: "Is it free?",
    a: "There's a free tier that covers one subject and basic quiz features. Unlimited subjects and advanced quiz types (fill-in-blank, essay prompts) require the paid plan.",
  },
];

export default function StudyToUnlockPage() {
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

      {/* Hero */}
      <section className="section-dark relative isolate overflow-hidden px-6 pb-20 pt-32 sm:pt-40">
        <div className="absolute -right-32 top-0 -z-10 h-80 w-80 rounded-full bg-[var(--accent)]/20 blur-3xl" />
        <div className="absolute left-0 top-40 -z-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="mx-auto max-w-5xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            quiz to unlock
          </span>
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            Study Your Way Out{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[#ffb067] bg-clip-text text-transparent">
              Of Every Distraction
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl">
            The only app blocker that requires you to answer quiz questions from your study notes before unlocking your phone. Every distraction becomes a study session.
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

      {/* The Insight */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                the insight
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                You Already Reach for Your Phone Dozens of Times a Day
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
              <p>
                Most people check their phone 80–100 times per day. Students check more often during stressful periods—before exams, during assignments, when procrastinating. That's 80 opportunities to review your notes, if you set it up right.
              </p>
              <p>
                Untap's study-to-unlock feature turns every distraction attempt into a quiz session. Instead of fighting your phone habit, you redirect it. Same impulse, better outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-dark relative isolate overflow-hidden px-6 py-24 sm:py-32">
        <div className="absolute -bottom-40 left-0 -z-10 h-96 w-96 rounded-full bg-[var(--accent)]/15 blur-3xl" />

        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              How It Works
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Three Steps to Smarter Phone Use
            </h2>
          </div>

          <ol className="mt-16 space-y-8">
            {howItWorksSteps.map((step) => (
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

      {/* Benefits */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              benefits
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Why Quiz-to-Unlock Works
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                <span className="absolute right-6 top-6 text-xs font-semibold text-[var(--muted)]">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-bold tracking-tight">
                  {benefit.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Student Story */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                student story
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
                From 7 Hours of Scrolling to a 0.4 GPA Boost
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-white/60">
              <p>
                Ravi, a college student in Bengaluru, was spending 7 hours a day on his phone during finals prep. He tried deleting apps, turning off notifications, and using Apple's Screen Time limits. Nothing stuck.
              </p>
              <p>
                Then he set up Untap's quiz-to-unlock feature with his organic chemistry notes. Every time he tried to open Instagram or YouTube, he had to answer a chem question first. Within two weeks, his phone time dropped to under 2 hours and he'd reviewed his notes 40+ times without meaning to. His GPA went up 0.4 points that semester.
              </p>
              <p>
                He didn't develop superhuman discipline. He just made his phone work for him instead of against him.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
            <div>
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:sticky md:top-28">
                Questions About Quiz-to-Unlock
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

      {/* CTA */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            Make Every Distraction{" "}
            <span className="text-[var(--accent)]">A Study Session</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Free to start. iPhone and Android. Upload your notes and start studying smarter today.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
      </section>
    </>
  );
}
