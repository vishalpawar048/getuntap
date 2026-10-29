import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../components/json-ld";
import { LeadDialogTrigger } from "../components/lead-dialog";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Untap for schools – Distraction-Free Classrooms",
  description: "Help students focus in class. Block social media in school, schedule phone-free hours, and create distraction-free classrooms. Free trial for schools.",
  keywords: [
    "untap for schools",
    "untap for colleges",
    "phone in classroom",
    "block social media in school",
    "school screen time",
    "student focus app",
    "classroom phone policy",
    "campus phone restrictions",
    "geofence school apps",
    "education digital wellbeing",
  ],
  alternates: { canonical: "https://www.getuntap.com/for-schools" },
  openGraph: {
    title: "Untap for schools & Colleges — Distraction-Free Classrooms",
    description: "Block distracting apps inside school premises and schedule phone-free classroom hours. Help students focus, help teachers teach.",
    url: `${SITE_URL}/for-schools`,
    type: "website",
  },
};

const studentBenefits = [
  {
    title: "No Autopilot Scrolling In Class",
    description: "An intentional pause appears before Instagram, TikTok, snapchat, YouTube and games during school hours — so the reflex of pulling out the phone breaks itself.",
  },
  {
    title: "Stay On The Lesson, Not On The Feed",
    description: "Social, video and entertainment apps stay quietly locked while class is in session. Notes apps, calculators, dictionaries and learning tools stay one tap away.",
  },
  {
    title: "Homework Focus Mode",
    description: "After class, students can switch on a study session — distractions stay off until the timer ends, with a real challenge required to break the lock early.",
  },
  {
    title: "No Shame, No Surveillance",
    description:
      "untap doesn\u2019t read messages, track location of every step, or report what the student looked at. it just adds friction in front of the apps that don\u2019t belong in the classroom.",
  },
];

const schoolBenefits = [
  {
    title: "Geofenced School Premises",
    description:
      "draw your campus on a map. when a student\u2019s phone enters the zone, the school profile activates automatically. when they walk out, normal life resumes.",
  },
  {
    title: "Bell-To-Bell Schedules",
    description:
      "set classroom hours per day and per grade — for example mon\u2013fri, 8:30am to 3:30pm. apps you classify as distractions stay locked through the bell.",
  },
  {
    title: "Block By Category, Not Just App",
    description: "Block whole categories like social, video, games, dating, gambling and shopping in one click. Add or remove individual apps any time without re-deploying.",
  },
  {
    title: "Exam Mode",
    description: "Tighten the lock during exam weeks. Block screen recording, ai chat apps, web browsers and messaging — only the apps your school approves remain available.",
  },
  {
    title: "Teachers Stay In Control",
    description: "Give teachers a simple panel to start a focus block in their classroom, extend or end it early, and see at a glance which devices are following the policy.",
  },
  {
    title: "Built For iOS And Android",
    description:
      "untap uses apple\u2019s family controls and android\u2019s device administration apis. one tool covers both fleets — no separate stack for iphones and androids.",
  },
];

const studentSchedule = [
  { time: "08:30", label: "school day starts", state: "locked" as const },
  { time: "10:15", label: "morning break", state: "open" as const },
  { time: "10:30", label: "back to class", state: "locked" as const },
  { time: "13:00", label: "lunch", state: "open" as const },
  { time: "13:45", label: "afternoon classes", state: "locked" as const },
  { time: "15:30", label: "school day ends", state: "open" as const },
];

const lockedAppsPreview = [
  { name: "Instagram", note: "social" },
  { name: "TikTok", note: "video" },
  { name: "Snapchat", note: "social" },
  { name: "YouTube", note: "video" },
  { name: "Roblox", note: "games" },
  { name: "Discord", note: "messaging" },
];

const allowedAppsPreview = [
  { name: "Notes" },
  { name: "Calculator" },
  { name: "Dictionary" },
  { name: "Camera" },
  { name: "Phone" },
  { name: "Maps" },
];

const rolloutSteps = [
  {
    n: "01",
    title: "Tell Us About The Campus",
    body: "Share student count, iOS/Android split and the hours you want covered. We send a deployment plan within 48 hours.",
  },
  {
    n: "02",
    title: "Configure The School Profile",
    body: "Draw the geofence, pick the school hours, and choose the categories or specific apps you want quiet during class.",
  },
  {
    n: "03",
    title: "Students Enroll In Minutes",
    body: "Students install Untap from the app store and scan a one-time school code. The profile applies and is protected from removal.",
  },
  {
    n: "04",
    title: "Teachers And Admins Get A Dashboard",
    body: "see compliance per class, run exam mode, and adjust policies any time \u2014 without pushing a new build to every device.",
  },
];

const faqs = [
  {
    q: "Do You Read Messages Or Track Location Of Students?",
    a: "no. untap only knows whether a device is inside the school geofence and which apps are flagged for the school profile. we do not read messages, listen to audio, look at photos, or track a student\u2019s location step-by-step. all enforcement happens locally on the device.",
  },
  {
    q: "Can Students Just Delete The App And Bypass It?",
    a: "no. untap uses apple\u2019s family controls and android device administration apis with prevent-uninstall and password-protected settings, so the school profile cannot be removed without an admin password.",
  },
  {
    q: "What Happens After School Hours?",
    a: "Outside the configured hours and outside the geofence, the school profile turns off and the phone behaves normally. Families can layer their own Untap profile on top for evenings and weekends if they choose.",
  },
  {
    q: "Does This Work For Both iPhone And Android Students?",
    a: "Yes. Untap ships native iOS and Android apps with the same school profile system, so a mixed student fleet is fully supported.",
  },
  {
    q: "What About Teachers And Staff?",
    a: "Teachers can use a lighter version of the same profile, or skip it entirely. The school dashboard lets you decide which user groups the policy applies to.",
  },
];

export default function ForSchoolsPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "For Schools & Colleges",
        item: `${SITE_URL}/for-schools`,
      },
    ],
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Untap for Schools & Colleges",
    description: "Distraction-free classrooms. Block social and gaming apps inside school premises and schedule phone-free classroom hours.",
    brand: { "@type": "Brand", name: "Untap" },
    category: "Education / Classroom Management",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "Schools, Colleges, Teachers, Students",
    },
    url: `${SITE_URL}/for-schools`,
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
      <JsonLd data={[productJsonLd, breadcrumbJsonLd, faqJsonLd]} />

      {/* Hero */}
      <section className="section-dark relative isolate overflow-hidden px-6 pb-20 pt-32 sm:pt-40">
        <div className="absolute -left-32 top-0 -z-10 h-72 w-72 rounded-full bg-[var(--accent)]/20 blur-3xl" />
        <div className="absolute right-0 top-40 -z-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(248,113,27,0.18),transparent_32rem)]" />

        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                untap for education
              </span>
              <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
                A Calm{" "}
                <span className="text-white/50">
                  Classroom
                </span>
                , One Tap Away
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65 sm:text-xl">
                Untap helps schools and colleges turn the classroom back into a
                place for learning. Block distracting apps inside school
                premises, schedule phone-free hours bell-to-bell, and give
                students a real chance to focus &mdash; without locking down
                their entire phone.
              </p>

              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                <LeadDialogTrigger
                  type="school"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-medium text-black transition hover:bg-white/90"
                >
                  Request A School Demo
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    aria-hidden
                    className="h-4 w-4"
                  >
                    <path d="M4 10h12" />
                    <path d="M11 5l5 5-5 5" />
                  </svg>
                </LeadDialogTrigger>
                <Link
                  href="/enterprise"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-medium text-white transition hover:bg-white/10"
                >
                  Looking For Workplaces?
                </Link>
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-white/40">
                    classroom hours
                  </dt>
                  <dd className="mt-2 text-2xl font-bold text-white">
                    quiet
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-white/40">
                    after school
                  </dt>
                  <dd className="mt-2 text-2xl font-bold text-white">
                    normal
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-white/40">
                    privacy
                  </dt>
                  <dd className="mt-2 text-2xl font-bold text-[var(--accent)]">
                    on-device
                  </dd>
                </div>
              </dl>
            </div>

            {/* Phone mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="flex h-[460px] w-[240px] flex-col rounded-[2.5rem] border-2 border-white/10 bg-[var(--dark-bg)] p-5 shadow-2xl shadow-black/40">
                  <div className="flex items-center justify-between">
                    <div className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                      School mode
                    </p>
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>

                  <div className="mt-5 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/15 p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--accent)]">
                      Now
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Class in session
                    </p>
                    <p className="mt-0.5 text-[11px] text-white/60">
                      Ends 3:30pm &middot; lincoln high
                    </p>
                  </div>

                  <p className="mt-5 text-[10px] uppercase tracking-widest text-white/40">
                    Locked during class
                  </p>
                  <div className="mt-2 grid flex-1 grid-cols-3 gap-2">
                    {lockedAppsPreview.map((app) => (
                      <div
                        key={app.name}
                        className="flex flex-col items-center gap-1 rounded-xl border border-white/5 bg-white/5 p-2"
                      >
                        <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/10">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.6}
                            className="h-4 w-4 text-white/70"
                          >
                            <rect x="6" y="11" width="12" height="9" rx="2" />
                            <path d="M9 11V7a3 3 0 016 0v4" />
                          </svg>
                        </div>
                        <p className="truncate text-[9px] text-white/60">
                          {app.name}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-3 text-[10px] uppercase tracking-widest text-white/40">
                    Always available
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {allowedAppsPreview.map((app) => (
                      <span
                        key={app.name}
                        className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/70"
                      >
                        {app.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                The classroom problem
              </p>
              <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                Phones Are Louder Than The Lesson
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
              <p>
                Short-form video, group chats and games are designed to win
                every spare second. In a classroom, they win minutes
                &mdash; sometimes most of the period.
              </p>
              <p>
                Blanket phone bans are hard to enforce and harder to police.
                Students still need their phones for safety, two-factor codes,
                bus passes, attendance and learning apps.
              </p>
              <p className="text-[var(--foreground)]">
                Untap solves the right problem: it doesn&apos;t take the phone
                away. It takes the distractions out of the phone, only during
                school, only on campus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student benefits */}
      <section className="section-dark relative isolate overflow-hidden px-6 py-24 sm:py-32">
        <div className="absolute -bottom-40 left-0 -z-10 h-96 w-96 rounded-full bg-[var(--accent)]/15 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                For Students
              </p>
              <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
                Focus That Doesn&apos;T Feel Like Punishment
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-white/60">
              Students don&apos;t lose their phone. They lose the autopilot
              scroll. Messaging family, calling for a ride, scanning a school
              id &mdash; everything they actually need still works.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {studentBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:bg-white/[0.08]"
              >
                <span className="absolute right-6 top-6 text-xs font-semibold text-white/30">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/60">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule visual */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                Bell-to-bell
              </p>
              <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                Quiet During Class. Normal At The Gate.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
                You decide the hours. Untap activates the school profile when
                a student arrives on campus and turns it off when they leave.
                Breaks and lunch can stay open, or stay locked &mdash;
                it&apos;s your call.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
                No profile pushed at home. No profile pushed on weekends. Just
                school, while at school.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                  Monday schedule
                </p>
                <span className="rounded-full bg-[var(--accent)]/15 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                  active
                </span>
              </div>
              <ol className="mt-5 space-y-2">
                {studentSchedule.map((slot) => (
                  <li
                    key={slot.time}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${
                      slot.state === "locked"
                        ? "border-[var(--accent)]/30 bg-[var(--accent)]/10"
                        : "border-[var(--border)] bg-[var(--background)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-semibold text-[var(--foreground)]">
                        {slot.time}
                      </span>
                      <span className="text-sm text-[var(--foreground)]/80">
                        {slot.label}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-widest ${
                        slot.state === "locked"
                          ? "text-[var(--accent)]"
                          : "text-[var(--muted)]"
                      }`}
                    >
                      {slot.state === "locked" ? "locked" : "open"}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* School / admin features */}
      <section className="section-dark relative isolate overflow-hidden px-6 py-24 sm:py-32">
        <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-[var(--accent)]/20 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              For Schools &amp; Colleges
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
              Everything An Administrator Needs, Nothing They Don&apos;T
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/65">
              One school profile. One dashboard. Clear rules students can
              actually understand &mdash; and a system parents trust because
              it doesn&apos;t spy on their kids.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {schoolBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:bg-white/[0.08]"
              >
                <h3 className="text-lg font-bold tracking-tight text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rollout */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Rollout
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              A Typical School Is Live In A Week
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              No hardware. No integration with student information systems
              required. Enrollment is a one-time scan.
            </p>
          </div>

          <ol className="mt-14 grid gap-6 sm:grid-cols-2">
            {rolloutSteps.map((step) => (
              <li
                key={step.n}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7"
              >
                <span className="font-mono text-sm tracking-widest text-[var(--accent)]">
                  {step.n}
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
            <div>
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:sticky md:top-28">
                Questions From Schools
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
                  <p className="mt-3 leading-relaxed text-white/55">
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
          <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Give Your Classrooms Back Their{" "}
            <span className="text-[var(--accent)]">Attention</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Send us your school size and the hours you want covered. We&apos;ll
            send back a deployment plan and pricing within two business days.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LeadDialogTrigger
              type="school"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--foreground)] px-7 py-4 text-base font-medium text-[var(--background)] transition hover:opacity-90"
            >
              Request A School Demo
            </LeadDialogTrigger>
            <LeadDialogTrigger
              type="school"
              formTitle="ask about pricing"
              formSubtitle="share a few details and we'll send a tailored quote within 2 business days."
              defaultRequirement="Pricing inquiry — please share pricing for our school. Other details: "
              className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] px-7 py-4 text-base font-medium text-[var(--foreground)] transition hover:bg-[var(--foreground)]/5"
            >
              Ask About Pricing
            </LeadDialogTrigger>
          </div>
        </div>
      </section>
    </>
  );
}
