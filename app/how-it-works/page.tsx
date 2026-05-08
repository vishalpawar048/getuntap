export const metadata = {
  title: "Untap — How it works",
};

const steps = [
  {
    number: "01",
    title: "Pick your noisy apps.",
    body: "Choose the apps that have been quietly stealing your hours. Social, news, video — whatever pulls you in.",
  },
  {
    number: "02",
    title: "Get a gentle pause.",
    body: "When you reach for them, Untap takes a breath before opening. No shame, no lockout — just a moment of choice.",
  },
  {
    number: "03",
    title: "Watch your time return.",
    body: "Each week, see the hours you've quietly reclaimed and the apps you've outgrown. The wins compound.",
  },
];

export default function HowItWorksPage() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto flex w-full max-w-4xl flex-col">
        <div className="flex flex-col items-center text-center">
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
  );
}
