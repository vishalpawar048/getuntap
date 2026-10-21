import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";

export const metadata: Metadata = {
  title: "Focus Hours, Then Limit The Day",
  description: "Set focus hours to protect your focus, then limit the rest of the day. Cap sessions on brain-rotting apps. Free for iPhone and Android.",
  alternates: { canonical: "https://www.getuntap.com/how-it-works" },
  keywords: [
    "how Untap works",
    "quiz to unlock apps",
    "study to unlock phone",
    "screen time control app how it works",
    "intentional friction",
  ],
  openGraph: {
    title: "How Untap Works — Focus Hours, Then Limit The Day",
    description: "Protect your focus hours, limit the rest of the day, and cap sessions on brain-rotting apps.",
    url: "/how-it-works",
    type: "website",
  },
};

const steps = [
  {
    number: "01",
    title: "Set Your Focus Hours.",
    body: "Pick the block you need to protect. Class, study, or deep work. During those hours, distracting apps stay limited.",
  },
  {
    number: "02",
    title: "Limit The Rest Of The Day.",
    body: "After focus hours, Untap still limits how much of the day those apps can take, so the scroll does not fill every gap.",
  },
  {
    number: "03",
    title: "Cap Brain-Rotting Sessions.",
    body: "Set a session length on TikTok, Instagram, YouTube, and the rest. When the session ends, the app stops.",
  },
];

export default function HowItWorksPage() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How To Protect Your Focus With Untap",
    description: "Set focus hours, limit the rest of the day, and cap sessions on brain-rotting apps.",
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
            Set Focus Hours, Then Limit The Day
          </h1>
          <p className="mt-6 max-w-xl text-balance text-base leading-7 text-[var(--muted)] sm:text-lg">
            Untap protects your focus during the hours you choose, then limits
            the rest of the day. Session caps keep brain-rotting apps from
            running on.
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
