import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";

export const metadata: Metadata = {
  title: "How It Works – Quiz To Unlock Apps",
  description: "See how Untap's quiz-to-unlock feature works: upload your study notes, answer questions to unblock distracting apps, and study more. Free for students.",
  alternates: { canonical: "https://www.getuntap.com/how-it-works" },
  keywords: [
    "how Untap works",
    "quiz to unlock apps",
    "study to unlock phone",
    "screen time control app how it works",
    "intentional friction",
  ],
  openGraph: {
    title: "How Untap Works — Quiz Your Notes To Unlock Apps",
    description: "Upload study notes, answer quiz questions, unlock your phone. Turn distractions into study sessions.",
    url: "/how-it-works",
    type: "website",
  },
};

const steps = [
  {
    number: "01",
    title: "Pick Your Noisy Apps.",
    body: "Choose the apps that have been quietly stealing your hours. Social, news, video — whatever pulls you in.",
  },
  {
    number: "02",
    title: "Get A Gentle Pause.",
    body: "When you reach for them, Untap takes a breath before opening. No shame, no lockout — just a moment of choice.",
  },
  {
    number: "03",
    title: "Watch Your Time Return.",
    body: "Each week, see the hours you've quietly reclaimed and the apps you've outgrown. The wins compound.",
  },
];

export default function HowItWorksPage() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use Untap App Blocker to Study More",
    description: "Learn how to use Untap's quiz-to-unlock feature to turn phone distractions into study opportunities.",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.body,
    })),
  };

  return (
    <>
      <JsonLd data={howToJsonLd} />
      <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto flex w-full max-w-4xl flex-col">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-balance text-3xl font-medium leading-[1.2] tracking-tight sm:text-4xl md:text-5xl">
            How Untap Works: Study To Unlock
          </h1>
          <p className="text-balance text-3xl font-medium leading-[1.2] tracking-tight sm:text-4xl md:text-5xl">
            Three small steps to a{" "}
            <span className="text-[var(--accent)]">quieter phone</span>.
          </p>
          <p className="mt-6 max-w-xl text-balance text-base leading-7 text-[var(--muted)] sm:text-lg">
            Untap doesn&apos;t shout, lock you out, or shame you. It just makes
            the loop a little harder to fall into.
          </p>
        </div>

        <ol className="mt-20 flex flex-col gap-12">
          {steps.map((step) => (
            <li
              key={step.number}
              className="grid items-start gap-6 sm:grid-cols-[auto_1fr] sm:gap-10"
            >
              <span className="font-mono text-sm tracking-widest text-[var(--accent)]">
                {step.number}
              </span>
              <div>
                <h2 className="text-balance text-2xl font-medium tracking-tight sm:text-3xl">
                  {step.title}
                </h2>
                <p className="mt-3 max-w-xl text-balance text-base leading-7 text-[var(--muted)] sm:text-lg">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-24 text-balance text-center text-base leading-7 text-[var(--muted)] sm:text-lg">
          That&apos;s it. No dashboards to manage. No streaks to protect.
          <br className="hidden sm:block" />
          Just a little less phone, a little more life.
        </p>
      </div>
    </section>
    </>
  );
}
