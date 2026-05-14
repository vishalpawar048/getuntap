import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../components/json-ld";
import { LeadDialogTrigger } from "../components/lead-dialog";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title:
    "Untap Enterprise — Distraction-Free Workplaces & Deep Work at Scale",
  description:
    "Untap Enterprise helps companies create distraction-free workplaces. Deploy focus policies for teams, schedule deep-work hours, block social and entertainment apps during work, and protect employee privacy.",
  keywords: [
    "untap enterprise",
    "workplace screen time",
    "deep work app for teams",
    "block social media at work",
    "employee focus app",
    "company-wide focus policy",
    "office distraction app",
    "remote work focus",
    "team productivity app",
    "workplace digital wellbeing",
  ],
  alternates: { canonical: "/enterprise" },
  openGraph: {
    title:
      "Untap Enterprise — Distraction-Free Workplaces & Deep Work at Scale",
    description:
      "Deploy focus policies across teams, schedule deep-work hours, and reclaim distraction-free workplaces — without surveilling employees.",
    url: `${SITE_URL}/enterprise`,
    type: "website",
  },
};

const enterpriseFeatures = [
  {
    title: "deep-work hours, deployed to teams",
    description:
      "schedule company-wide focus blocks — for example tue/thu mornings 9 to noon — and have distracting apps quietly lock for everyone in the policy.",
  },
  {
    title: "policies by team, not by person",
    description:
      "engineering, sales, support and design all have different rhythms. configure separate policies per team, per role, or per project, and update them in one click.",
  },
  {
    title: "block by category, not just by app name",
    description:
      "block social, video, news, gaming, dating and shopping in one toggle. add or remove specific apps without re-deploying anything.",
  },
  {
    title: "office-only, remote-only or always-on",
    description:
      "geofence the office for hybrid teams, schedule by working hours for remote teams, or ship a soft global policy for the whole company. mix and match per group.",
  },
  {
    title: "meeting mode & focus mode",
    description:
      "trigger a deeper lock during meetings or while a focus session is active. the team room stops being a phone room.",
  },
  {
    title: "no surveillance, ever",
    description:
      "untap enforces locally on each device. it does not capture screenshots, log keystrokes, read messages, browse photos, or report which app a person tried to open. the only thing the dashboard shows is policy compliance.",
  },
];

const useCases = [
  {
    title: "engineering & design",
    body: "protect maker time. lock chat, social and video apps during deep-work blocks so engineers and designers stay in flow.",
  },
  {
    title: "sales & success",
    body: "force a quiet phone during pitch hours and customer calls. allow crm, email and calendar to keep working untouched.",
  },
  {
    title: "support & ops",
    body: "shift-based policies. when an agent is on-shift, distractions go quiet. when the shift ends, the phone goes back to normal.",
  },
  {
    title: "executive & off-sites",
    body: "ship a temporary 'all hands' profile for off-sites, board meetings and workshops — then disable it when the room clears.",
  },
];

type PolicyState = "allowed" | "delayed" | "blocked";

const policyExample: { app: string; state: PolicyState; note: string }[] = [
  { app: "Slack", state: "allowed", note: "always available" },
  { app: "Email", state: "allowed", note: "always available" },
  { app: "Calendar", state: "allowed", note: "always available" },
  { app: "Instagram", state: "blocked", note: "9–12 & 14–17" },
  { app: "TikTok", state: "blocked", note: "9–12 & 14–17" },
  { app: "X / Twitter", state: "blocked", note: "9–12 & 14–17" },
  { app: "YouTube", state: "delayed", note: "10s pause + 20m/day" },
  { app: "News apps", state: "delayed", note: "10s pause + 30m/day" },
];

const stats = [
  { stat: "+47%", label: "median deep-work hours per week reported by pilot teams" },
  { stat: "−63%", label: "average drop in social-app opens during work hours" },
  { stat: "0", label: "personal data points collected from employee devices" },
];

const rolloutSteps = [
  {
    n: "01",
    title: "scope the pilot",
    body: "pick one team or one office. share team size, ios/android split, and the focus hours you want covered. we send back a draft policy in 48 hours.",
  },
  {
    n: "02",
    title: "tune the policy",
    body: "co-design the lock rules with the team lead — what stays open, what gets a pause, what hard-locks, and during which hours.",
  },
  {
    n: "03",
    title: "ship to devices",
    body: "employees install the untap app and scan a one-time enrollment code. mdm integration is available for fleets that need it.",
  },
  {
    n: "04",
    title: "measure the change",
    body: "after two weeks the team lead reviews compliance and self-reported focus. tighten, loosen or roll the policy out company-wide.",
  },
];

const faqs = [
  {
    q: "is untap enterprise surveillance software?",
    a: "no, and that is the entire point. untap does not capture screen content, keystrokes, messages or browsing history. all enforcement runs on the device. the admin dashboard shows policy compliance only — not what someone tried to open or scroll.",
  },
  {
    q: "do employees have to give up their personal phone?",
    a: "no. untap installs as a normal app and only enforces the policy you configure during the hours you configure. outside those hours and outside any geofence, the phone behaves exactly as it always did.",
  },
  {
    q: "does this work with our mdm?",
    a: "yes. untap can be deployed via apple business manager / android enterprise as a managed app, or installed individually with a one-time enrollment code. it coexists with your existing mdm without conflicting policies.",
  },
  {
    q: "can teams override the policy?",
    a: "policies are protected by an admin password. you can optionally allow individual override (with a clear audit log of overrides) or run a strict mode where only an admin can lift the lock.",
  },
  {
    q: "what about meetings and customer-facing roles?",
    a: "policies are time-and-context aware. you can lock distractions only during focus blocks, only during meetings, only during customer calls, or any combination — while leaving business apps fully available.",
  },
  {
    q: "what does it cost?",
    a: "untap enterprise is priced per active seat per month with volume discounts for fleets above 100 devices. nonprofits and education get preferential pricing. email us for a custom quote.",
  },
];

const privacyPromises = [
  "no screenshots",
  "no keylogging",
  "no message reading",
  "no photo or file scanning",
  "no per-app open logs",
  "no location history",
];

export default function EnterprisePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Enterprise",
        item: `${SITE_URL}/enterprise`,
      },
    ],
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Untap Enterprise",
    description:
      "Distraction-free workplaces. Deploy focus policies for teams, schedule deep-work hours, and protect employee privacy.",
    brand: { "@type": "Brand", name: "Untap" },
    category: "Workplace Productivity / Digital Wellbeing",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Companies, Teams, Workplaces",
    },
    url: `${SITE_URL}/enterprise`,
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
        <div className="absolute -right-32 top-0 -z-10 h-80 w-80 rounded-full bg-[var(--accent)]/20 blur-3xl" />
        <div className="absolute left-0 top-40 -z-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(248,113,27,0.18),transparent_32rem)]" />

        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                untap enterprise
              </span>
              <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight lowercase text-white sm:text-6xl md:text-7xl">
                deep work,{" "}
                <span className="bg-gradient-to-r from-[var(--accent)] to-[#ffb067] bg-clip-text text-transparent">
                  at company scale
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65 sm:text-xl">
                untap enterprise gives teams the focus their tools keep
                stealing. deploy distraction-free hours across the company,
                lock social and entertainment apps during work, and give
                people back the kind of workday where things actually get
                shipped &mdash; without surveilling a single keystroke.
              </p>

              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                <LeadDialogTrigger
                  type="enterprise"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-medium text-black transition hover:bg-white/90"
                >
                  talk to sales
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
                  href="/for-schools"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-medium text-white transition hover:bg-white/10"
                >
                  looking for schools?
                </Link>
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-white/40">
                    deep work
                  </dt>
                  <dd className="mt-2 text-2xl font-bold text-white">
                    protected
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-white/40">
                    work tools
                  </dt>
                  <dd className="mt-2 text-2xl font-bold text-white">
                    untouched
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-white/40">
                    employee data
                  </dt>
                  <dd className="mt-2 text-2xl font-bold text-[var(--accent)]">
                    on-device
                  </dd>
                </div>
              </dl>
            </div>

            {/* Policy mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/40 backdrop-blur">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                    focus policy
                  </p>
                  <span className="rounded-full bg-[var(--accent)]/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[var(--accent)]">
                    live
                  </span>
                </div>
                <p className="mt-3 text-lg font-bold text-white">
                  engineering · deep-work
                </p>
                <p className="text-xs text-white/50">
                  mon–fri · 9–12 &amp; 14–17 · 86 devices
                </p>

                <ul className="mt-5 space-y-1.5">
                  {policyExample.map((row) => (
                    <li
                      key={row.app}
                      className="flex items-center justify-between rounded-xl border border-white/5 bg-black/20 px-3 py-2"
                    >
                      <div className="flex min-w-0 items-center gap-2.5">
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                            row.state === "allowed"
                              ? "bg-emerald-400"
                              : row.state === "delayed"
                                ? "bg-amber-400"
                                : "bg-[var(--accent)]"
                          }`}
                        />
                        <span className="truncate text-sm text-white/85">
                          {row.app}
                        </span>
                      </div>
                      <span className="shrink-0 text-[10px] uppercase tracking-widest text-white/40">
                        {row.note}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-[11px] text-white/50">
                  <span>compliance</span>
                  <span className="font-semibold text-emerald-400">94%</span>
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
                the workplace problem
              </p>
              <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl">
                the office is open. the focus isn&apos;t.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
              <p>
                the average knowledge worker switches context every few
                minutes &mdash; and most of those switches are pulled out of
                the work itself, into a feed.
              </p>
              <p>
                companies have tried open offices, focus rooms, do-not-disturb
                policies and quarterly &ldquo;deep work weeks.&rdquo; the
                phone keeps winning because the phone never stops asking.
              </p>
              <p className="text-[var(--foreground)]">
                untap enterprise installs the boundary at the device. the
                things the team needs stay open. the things stealing their
                attention go quiet for the hours that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-dark relative isolate overflow-hidden px-6 py-24 sm:py-32">
        <div className="absolute -bottom-40 right-0 -z-10 h-96 w-96 rounded-full bg-[var(--accent)]/15 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                what it does
              </p>
              <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight lowercase text-white sm:text-5xl">
                a focus layer for the whole company
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-white/60">
              one policy engine, one dashboard, native ios and android.
              policies live in the cloud; enforcement lives on the device.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {enterpriseFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:bg-white/[0.08]"
              >
                <h3 className="text-lg font-bold lowercase tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                use cases
              </p>
              <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl">
                the same engine, tuned for each team
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
                every team has a different definition of focus. configure
                separate policies for each one and let leads update them
                without filing a ticket.
              </p>
            </div>

            <ul className="space-y-4">
              {useCases.map((useCase) => (
                <li
                  key={useCase.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
                >
                  <h3 className="text-lg font-bold lowercase tracking-tight">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {useCase.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Privacy callout */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                privacy by design
              </p>
              <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.05] tracking-tight lowercase text-white sm:text-5xl">
                a focus tool, not a surveillance tool
              </h2>
            </div>

            <ul className="grid gap-3 text-white/70 sm:grid-cols-2">
              {privacyPromises.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    className="h-4 w-4 text-[var(--accent)]"
                  >
                    <path d="M4 11l4 4 8-9" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-white/55">
            the only thing the dashboard ever shows is policy compliance.
            employees keep their privacy. companies get the focus.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              early results
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl">
              what teams report after a 2-week pilot
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7"
              >
                <p className="text-4xl font-bold text-[var(--accent)]">
                  {s.stat}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-[var(--muted)]">
            self-reported metrics from pilot teams of 15&ndash;200 people across
            engineering, design and operations functions. individual results
            vary.
          </p>
        </div>
      </section>

      {/* Rollout */}
      <section className="section-dark px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              rollout
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.1] tracking-tight lowercase text-white sm:text-5xl">
              from kickoff to a focused team in two weeks
            </h2>
          </div>

          <ol className="mt-14 grid gap-6 sm:grid-cols-2">
            {rolloutSteps.map((step) => (
              <li
                key={step.n}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-7"
              >
                <span className="font-mono text-sm tracking-widest text-[var(--accent)]">
                  {step.n}
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight lowercase text-white">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/55">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
            <div>
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight lowercase sm:text-5xl md:sticky md:top-28">
                questions from teams
              </h2>
            </div>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="border-b border-[var(--border)] pb-8 last:border-0"
                >
                  <h3 className="text-xl font-bold lowercase">{faq.q}</h3>
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
          <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight lowercase text-white sm:text-5xl md:text-6xl">
            give your team back the{" "}
            <span className="text-[var(--accent)]">hours</span> their tools
            keep stealing
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            tell us about your team. we&apos;ll send back a sample policy, a
            pilot plan and pricing within two business days.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LeadDialogTrigger
              type="enterprise"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-medium text-black transition hover:bg-white/90"
            >
              talk to sales
            </LeadDialogTrigger>
            <LeadDialogTrigger
              type="enterprise"
              formTitle="ask about pricing"
              formSubtitle="share a few details and we'll send a tailored quote within 2 business days."
              defaultRequirement="Pricing inquiry — please share enterprise pricing for our team. Other details: "
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-base font-medium text-white transition hover:bg-white/10"
            >
              ask about pricing
            </LeadDialogTrigger>
          </div>
        </div>
      </section>
    </>
  );
}
