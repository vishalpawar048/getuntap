import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Untap terms and conditions. The rules for using the Untap screen time control app on iOS and Android.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const permissions = [
  {
    title: "Screen Time Access",
    body: "Required for the App to monitor app usage and apply restrictions to your selected apps.",
  },
  {
    title: "Notification Access",
    body: "Required to deliver session limit alerts and break reminders.",
  },
];

const subscriptionTerms = [
  "Payment is charged to your Apple ID account at confirmation of purchase.",
  "Subscriptions automatically renew unless auto-renewal is turned off at least 24 hours before the end of the current billing period.",
  "Your account will be charged for renewal within 24 hours prior to the end of the current period at the same subscription price.",
  "You can manage and cancel subscriptions in your Apple ID Account Settings after purchase.",
  "Any unused portion of a free trial period, if offered, will be forfeited when you purchase a subscription.",
];

const acceptableUseItems = [
  "Reverse engineer, decompile, or disassemble the App or any part of it.",
  "Use the App for any unlawful purpose or in violation of any applicable laws or regulations.",
  "Attempt to bypass or circumvent any security features of the App.",
  "Redistribute, sublicense, or resell the App or any part of it.",
];

export default function TermsPage() {
  return (
    <section className="px-6 pb-20 pt-32 sm:pb-28 sm:pt-36">
      <article className="mx-auto w-full max-w-3xl">
        <div className="text-center">
          <h1 className="text-balance text-3xl font-medium leading-[1.2] tracking-tight sm:text-4xl md:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
            Last updated: February 12, 2026
          </p>
        </div>

        <div className="mt-14 space-y-10 text-base leading-7 text-[var(--muted)] sm:text-lg">
          <section>
            <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3">
              By downloading, installing, or using Untap (&quot;the App&quot;),
              you agree to be bound by these Terms and Conditions. If you do not
              agree to these terms, please do not use the App. The App is
              developed and operated by MBP Softwares.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
              2. Description of Service
            </h2>
            <p className="mt-3">
              Untap is a digital wellness application for iOS that helps users
              manage their screen time by adding intentional friction before
              opening selected apps. The App uses Apple&apos;s Screen Time APIs
              (FamilyControls, ManagedSettings, and DeviceActivity) to provide
              features including open delays, session time limits, hard locks,
              usage tracking, focus mode, and notification reminders.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
              3. Eligibility
            </h2>
            <p className="mt-3">
              You must be at least 13 years of age to use the App. By using
              Untap, you represent and warrant that you meet this age
              requirement. If you are under 18, you should review these terms
              with a parent or guardian.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
              4. User Account &amp; Permissions
            </h2>
            <p className="mt-3">
              The App does not require account creation. To function properly,
              Untap requires the following device permissions:
            </p>
            <div className="mt-4 space-y-4">
              {permissions.map((permission) => (
                <p key={permission.title}>
                  <span className="font-medium text-[var(--foreground)]">
                    {permission.title}
                  </span>{" "}
                  — {permission.body}
                </p>
              ))}
            </div>
            <p className="mt-4">
              You may revoke these permissions at any time through your
              device&apos;s Settings, though this will disable the App&apos;s
              core functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
              5. Subscriptions &amp; Payments
            </h2>
            <p className="mt-3">
              Untap may offer premium features through auto-renewable
              subscriptions via the Apple App Store. By purchasing a
              subscription:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              {subscriptionTerms.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>
            <p className="mt-4">
              All payments are processed by Apple. We do not have access to your
              payment information. Refund requests should be directed to Apple
              Support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
              6. Acceptable Use
            </h2>
            <p className="mt-3">You agree not to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              {acceptableUseItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
              7. Intellectual Property
            </h2>
            <p className="mt-3">
              All content, features, and functionality of Untap — including but
              not limited to the design, code, text, graphics, and logos — are
              the exclusive property of MBP Softwares and are protected by
              copyright, trademark, and other intellectual property laws. You
              are granted a limited, non-exclusive, non-transferable license to
              use the App for personal, non-commercial purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
              8. Disclaimer of Warranties
            </h2>
            <p className="mt-3">
              The App is provided on an &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; basis without warranties of any kind, either
              express or implied. We do not warrant that the App will be
              uninterrupted, error-free, or free of harmful components. Untap is
              a wellness tool and is not a medical device or therapeutic
              service. It is not intended to diagnose, treat, cure, or prevent
              any medical condition, including addiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
              9. Limitation of Liability
            </h2>
            <p className="mt-3">
              To the fullest extent permitted by applicable law, MBP Softwares
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to
              loss of data, loss of profits, or business interruption, arising
              out of or related to your use of or inability to use the App. Our
              total liability for any claims arising under these Terms shall not
              exceed the amount you paid for the App in the 12 months preceding
              the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
              10. Modifications to the App &amp; Terms
            </h2>
            <p className="mt-3">
              We reserve the right to modify, suspend, or discontinue the App
              (or any part of it) at any time without notice. We may also update
              these Terms from time to time. Changes will be posted on this page
              with an updated date. Your continued use of the App after any
              changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
              11. Termination
            </h2>
            <p className="mt-3">
              You may stop using the App at any time by deleting it from your
              device. We reserve the right to terminate or restrict your access
              to the App if you violate these Terms. Upon termination, all
              locally stored data will be removed when the App is deleted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
              12. Governing Law
            </h2>
            <p className="mt-3">
              These Terms shall be governed by and construed in accordance with
              the laws of India, without regard to conflict of law principles.
              Any disputes arising under these Terms shall be subject to the
              exclusive jurisdiction of the courts in India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
              13. Contact Us
            </h2>
            <p className="mt-3">
              If you have any questions about these Terms and Conditions, please
              contact us at:{" "}
              <a
                href="mailto:info.mbpsoftwares@gmail.com"
                className="font-medium text-[var(--foreground)] underline decoration-[var(--accent)] underline-offset-4"
              >
                info.mbpsoftwares@gmail.com
              </a>
            </p>
          </section>
        </div>
      </article>
    </section>
  );
}
