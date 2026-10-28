import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews – Students Love Untap",
  description: "See what students say about Untap: improved focus, better grades, less phone addiction. Real reviews from students using the quiz-to-unlock app blocker.",
  alternates: { canonical: "https://www.getuntap.com/reviews" },
  openGraph: {
    title: "Untap Reviews — Students Reclaim Their Focus",
    description: "Read real student reviews of Untap, the study app blocker that turns screen time into study time.",
    url: "/reviews",
    type: "website",
  },
};

const reviews = [
  {
    quote:
      "at this point every single screen time app has failed me and my self-control except this one...i luvvvv the strict mode and strict focus mode, these are the bestttt features of the app, definitely gonna recommend it on my socials to my audience!!",
    name: "Alia",
    role: "Google Play, Jun 7, 2026",
  },
  {
    quote:
      "The app is really good, At first I had doubts about whether or not it's gonna be like OneSec but it's better. It strict, harder to get through and almost everything is unlocked in the free tier. love it!",
    name: "Unidentified Dude",
    role: "Google Play, Jun 30, 2026",
  },
  {
    quote:
      "I found this by accident and honestly a life saver bcz school is like in seven days, it covers all my needs, doesn't get blocked AND inexpensive. Yaaay thank y'all<3",
    name: "Kenzie Abdeen",
    role: "Google Play, Sep 6, 2026",
  },
  {
    quote:
      "Ive been using Untap for two months now. I love the messages on the block screen. Thr math creates just the right amoint of friction for me to second guess my doom scrolling impulse decision. This app is effective and easy to use.",
    name: "Lia D",
    role: "Google Play, Sep 26, 2026",
  },
  {
    quote:
      "absalutely one of the best apps i have ever used i went from being constantly tired and exhausted and being unable to even finish my sentences to being my old clear minded self again genuinely reccomend this to everyone it's such a life changer 🙏",
    name: "Jana Ahmad",
    role: "Google Play, Aug 20, 2026",
  },
  {
    quote:
      "I've tried about 5 different apps now, and this is by far the best one for me. Offers delays on open rather than full blocks, and it actually blocks websites in firefox, which I've found few apps that do. Really happy about it.",
    name: "Christoffer",
    role: "Google Play, Aug 18, 2026",
  },
  {
    quote:
      "Better than other apps like opal. it reduced my screen time drastically as compared to opal. the simple launcher is a big contributer.",
    name: "Ayaan ali Joo",
    role: "Google Play, Apr 23, 2026",
  },
  {
    quote:
      "I am using it for 4 days. For now this app is lifesaver as someone who used to watch insta reel for 6 hours a day and feels miserable. I keep up with it and i can feel how fresh my life feels like.",
    name: "Gouri Ganesh",
    role: "Google Play, Jun 4, 2026",
  },
  {
    quote:
      "Best app the first one I ever tried and got best result with it decreased my screen time from 10 hours to 4-5 hours literally definitely you should go for it 🫶🏻👍🏻",
    name: "Kudrat Hargun",
    role: "Google Play, Mar 8, 2026",
  },
  {
    quote:
      "does the job, thoroughly impressed. unlike the other apps who charge basic things, this one doesn't. extremely happy.",
    name: "Nandagopal M",
    role: "Google Play, Oct 4, 2026",
  },
  {
    quote:
      "Haha, the quiz option is so delightful and useful! This is ten times better than the other apps I've tried. Blocks distractions and keeps the mind sharp :)",
    name: "Cece _",
    role: "Google Play, Sep 27, 2026",
  },
  {
    quote:
      "This is an incredible app, it does everything the other app does, but for completely free! The devs are awesome too! They updated this app to patch many bypass tricks.",
    name: "PeaceSeeker",
    role: "Google Play, Sep 24, 2026",
  },
  {
    quote:
      "This app is literally change my whole life I really appreciate the developers This app contains literally no ADDs",
    name: "Mahad hassan",
    role: "Google Play, Oct 18, 2026",
  },
  {
    quote:
      "Great app for focus. This helped me in my focus for competative exams.",
    name: "OJAS CHAUDHARI",
    role: "Google Play, Oct 7, 2026",
  },
  {
    quote:
      "This is the most amazing app designed by the kindest people who even let free users enjoy most of the app features! Unlike other apps which are mostly stingy with their features, this app allows me, as a free user, to enjoy to such a satisfying extent!",
    name: "mario bajo",
    role: "Google Play, Aug 25, 2026",
  },
  {
    quote:
      "a great app for minimizing your screen time really helps with your school work and it has improved my overall life great app totally free and very reliable",
    name: "Tebogo Mtubha",
    role: "Google Play, Aug 2, 2026",
  },
  {
    quote:
      "the app is very useful for students who easily get distracted by the mobile. I totally recommend this app",
    name: "Abdullah Azaam",
    role: "Google Play, Jul 22, 2026",
  },
  {
    quote:
      "wonderful app helped me reduce my screen time. provides enough resistance but not too much resistance for my phone",
    name: "Nuel Iyke",
    role: "Google Play, Jun 24, 2026",
  },
];

export default function ReviewsPage() {
  return (
    <section className="px-6 py-32 pt-40 sm:py-40">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow-label text-[var(--muted)]">REVIEWS</p>
          <h1 className="mt-5 text-balance text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Real 5-star Google Play reviews
          </h1>
          <p className="mt-2 text-balance text-4xl font-normal leading-[1.1] tracking-tight text-[var(--accent)] sm:text-5xl md:text-6xl">
            Verbatim from actual users
          </p>
          <p className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            These reviews are quoted exactly as written by users on the{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.unrotapp.screencontrol"
              className="text-[var(--accent)] underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play Store
            </a>
            .
          </p>
        </div>

        <ul className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <li
              key={review.name}
              className="flex flex-col justify-between rounded border border-[var(--border)] bg-[var(--card)] p-8 transition-colors hover:border-[var(--accent)]"
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
