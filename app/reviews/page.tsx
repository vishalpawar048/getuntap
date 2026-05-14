import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews — What People Say About Untap",
  description:
    "Real user reviews of the Untap screen time control app. See why people who care about their time use Untap to break phone addiction and stop doomscrolling.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Untap reviews — real people, real time back",
    description:
      "Read user reviews of the Untap screen time control app for iOS and Android.",
    url: "/reviews",
    type: "website",
  },
};

const reviews = [
  {
    quote:
      "I got back two hours a day. Untap is the only app that actually made me put my phone down.",
    name: "Maya R.",
    role: "Designer, Brooklyn",
  },
  {
    quote:
      "Cleaner than every other screen time tool I've tried. No nagging, no shame — it just works.",
    name: "Daniel K.",
    role: "Product Manager",
  },
  {
    quote:
      "Felt like turning the lights on. I had no idea how much I was tapping until Untap showed me.",
    name: "Priya S.",
    role: "Writer",
  },
  {
    quote:
      "My evenings finally feel like evenings again. The kids noticed before I did.",
    name: "Tom A.",
    role: "Dad of three",
  },
  {
    quote:
      "Untap doesn't make me feel guilty for using my phone. It just makes me want to use it less.",
    name: "Lina V.",
    role: "Therapist",
  },
  {
    quote:
      "After two weeks I was sleeping better. After a month I picked up a book for the first time in a year.",
    name: "Amir J.",
    role: "Engineer",
  },
];

export default function ReviewsPage() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col">
        <div className="flex flex-col items-center text-center">
          <p className="text-balance text-3xl font-medium leading-[1.2] tracking-tight sm:text-4xl md:text-5xl">
            Real people. Real{" "}
            <span className="text-[var(--accent)]">time back</span>.
          </p>
          <p className="mt-6 max-w-xl text-balance text-base leading-7 text-[var(--muted)] sm:text-lg">
            A few words from the people who put their phones down.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <li
              key={review.name}
              className="flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-colors hover:border-[var(--accent)]"
            >
              <p className="text-balance text-base leading-7">
                “{review.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid h-9 w-9 place-items-center rounded-full bg-[var(--accent-soft)] text-sm font-medium text-[var(--foreground)]"
                >
                  {review.name.charAt(0)}
                </span>
                <div className="text-sm">
                  <div className="font-medium">{review.name}</div>
                  <div className="text-[var(--muted)]">{review.role}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
