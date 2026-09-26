import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Murphy Code Innovations, LLC: what we collect, how we use it, and how to reach us.",
};

export default function Privacy() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-slate-500">Last updated: September 2026</p>

      <div className="mt-8 space-y-8 leading-7 text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-slate-900">
            1. Who we are
          </h2>
          <p className="mt-3">
            This website is operated by Murphy Code Innovations, LLC, 5900
            Balcones Drive, Suite 100, Austin, TX 78731. You can reach us at{" "}
            <a
              href="mailto:murphylan@hotmail.com"
              className="font-medium text-orange-700 hover:underline"
            >
              murphylan@hotmail.com
            </a>{" "}
            or 346-515-8280 with any privacy question.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            2. Information we collect
          </h2>
          <p className="mt-3">
            <span className="font-semibold">Contact inquiries.</span> If you use
            the contact form, your email application sends us the details you
            provide: name, company, email address, your description of the
            system you are having trouble with, and how you heard about us.
          </p>
          <p className="mt-3">
            <span className="font-semibold">Server logs.</span> Our hosting
            provider records standard technical information (such as IP
            address, browser type, and pages visited) to operate and secure the
            site.
          </p>
          <p className="mt-3">
            <span className="font-semibold">Cookies and analytics.</span> This
            site does not currently run analytics or advertising cookies. If
            that changes, this policy will be updated first.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            3. How we use it
          </h2>
          <p className="mt-3">
            We use inquiry information only to respond to you and to discuss a
            potential engagement. We do not sell personal information, and we
            do not add you to a marketing list without your consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            4. Third parties
          </h2>
          <p className="mt-3">
            Inquiry emails pass through your and our email providers.
            Cloudflare provides hosting and security for this site and processes
            technical log data on our behalf. We do not share inquiry content
            with any other third party.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">5. Retention</h2>
          <p className="mt-3">
            We keep inquiry correspondence for as long as needed to handle your
            request and any resulting business relationship, then delete it on
            request.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">6. Your rights</h2>
          <p className="mt-3">
            You may ask us at any time what information we hold about you, ask
            us to correct it, or ask us to delete it. Write to{" "}
            <a
              href="mailto:murphylan@hotmail.com"
              className="font-medium text-orange-700 hover:underline"
            >
              murphylan@hotmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            7. Changes to this policy
          </h2>
          <p className="mt-3">
            If we change this policy, we will update the date above. Continued
            use of the site after a change means you accept the updated policy.
          </p>
        </section>
      </div>
    </div>
  );
}
