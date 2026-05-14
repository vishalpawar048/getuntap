"use client";

import { useId, useRef, useState } from "react";
import {
  SUPABASE_LEAD_ENDPOINT,
  SUPABASE_PUBLISHABLE_KEY,
} from "../lib/supabase";

export type LeadType = "school" | "enterprise";

type Status = "idle" | "submitting" | "success" | "error";

const COPY: Record<
  LeadType,
  {
    title: string;
    subtitle: string;
    rolePlaceholder: string;
    requirementPlaceholder: string;
    cta: string;
  }
> = {
  school: {
    title: "request a school demo",
    subtitle:
      "tell us about your campus and we'll get back within 2 business days.",
    rolePlaceholder: "e.g. principal, head of IT, dean",
    requirementPlaceholder:
      "e.g. ~600 students, mixed iPhone + Android, want quiet hours mon–fri 8:30–3:30, exam mode in march.",
    cta: "send request",
  },
  enterprise: {
    title: "talk to sales",
    subtitle:
      "tell us about your team and we'll get back within 2 business days.",
    rolePlaceholder: "e.g. COO, head of people, IT lead",
    requirementPlaceholder:
      "e.g. 80-person engineering team in bengaluru + remote, looking to pilot deep-work blocks tue/thu mornings.",
    cta: "send request",
  },
};

type LeadDialogTriggerProps = {
  type: LeadType;
  className?: string;
  children: React.ReactNode;
  defaultRequirement?: string;
  formTitle?: string;
  formSubtitle?: string;
};

export function LeadDialogTrigger({
  type,
  className,
  children,
  defaultRequirement,
  formTitle,
  formSubtitle,
}: LeadDialogTriggerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const titleId = useId();

  const config = COPY[type];
  const title = formTitle ?? config.title;
  const subtitle = formSubtitle ?? config.subtitle;

  function open() {
    setStatus("idle");
    setErrorMsg("");
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const payload = {
      email_id: String(formData.get("email") ?? "").trim(),
      type,
      platform: "web",
      country: String(formData.get("country") ?? "").trim(),
      role: String(formData.get("role") ?? "").trim(),
      requirement: String(formData.get("requirement") ?? "").trim(),
    };

    setStatus("submitting");
    setErrorMsg("");

    try {
      const response = await fetch(SUPABASE_LEAD_ENDPOINT, {
        method: "POST",
        headers: {
          apikey: SUPABASE_PUBLISHABLE_KEY,
          Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(text || `request failed (${response.status})`);
      }

      formEl.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "something went wrong. please try again.",
      );
    }
  }

  return (
    <>
      <button type="button" onClick={open} className={className}>
        {children}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        // Reset the inner state once the dialog has fully closed so reopening
        // shows the form again instead of the success screen.
        onClose={() => setStatus("idle")}
        className="m-0 h-[100dvh] max-h-none w-screen max-w-none overflow-y-auto bg-transparent p-0 text-[var(--foreground)] backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      >
        <div
          className="flex min-h-[100dvh] items-center justify-center p-4 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="w-full max-w-md rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-2xl shadow-black/40 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id={titleId}
                  className="text-2xl font-bold leading-tight tracking-tight lowercase"
                >
                  {title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
                  {subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="close"
                className="-m-2 rounded-full p-2 text-[var(--muted)] transition hover:bg-[var(--background)] hover:text-[var(--foreground)]"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M5 5l10 10" />
                  <path d="M15 5L5 15" />
                </svg>
              </button>
            </div>

            {status === "success" ? (
              <div className="mt-8 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-6 text-center">
                <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-[var(--accent)] text-white">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    className="h-5 w-5"
                    aria-hidden
                  >
                    <path d="M4 11l4 4 8-9" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold lowercase">
                  we got it. talk soon.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  we&apos;ll be in touch within 2 business days.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition hover:opacity-90"
                >
                  close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                <Field
                  label="work email"
                  name="email"
                  type="email"
                  required
                  placeholder={
                    type === "school" ? "you@school.edu" : "you@company.com"
                  }
                  autoComplete="email"
                  autoFocus
                />
                <Field
                  label="country"
                  name="country"
                  required
                  placeholder="e.g. India, United States, UK"
                  autoComplete="country-name"
                />
                <Field
                  label="your role"
                  name="role"
                  required
                  placeholder={config.rolePlaceholder}
                  autoComplete="organization-title"
                />

                <div>
                  <label
                    htmlFor="lead-requirement"
                    className="block text-xs font-semibold uppercase tracking-widest text-[var(--muted)]"
                  >
                    what do you need?
                  </label>
                  <textarea
                    id="lead-requirement"
                    name="requirement"
                    rows={4}
                    required
                    defaultValue={defaultRequirement}
                    placeholder={config.requirementPlaceholder}
                    className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)]/60 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30"
                  />
                </div>

                {status === "error" ? (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-600"
                  >
                    {errorMsg}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3.5 text-sm font-medium text-[var(--background)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <>
                      <svg
                        viewBox="0 0 20 20"
                        className="h-4 w-4 animate-spin"
                        aria-hidden
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeDasharray="32"
                          strokeDashoffset="20"
                          strokeLinecap="round"
                        />
                      </svg>
                      sending…
                    </>
                  ) : (
                    <>
                      {config.cta}
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        className="h-4 w-4"
                        aria-hidden
                      >
                        <path d="M4 10h12" />
                        <path d="M11 5l5 5-5 5" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] leading-relaxed text-[var(--muted)]">
                  we&apos;ll only use this to reply to you. no marketing spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  autoFocus?: boolean;
};

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
  autoFocus,
}: FieldProps) {
  const id = `lead-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold uppercase tracking-widest text-[var(--muted)]"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)]/60 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30"
      />
    </div>
  );
}
