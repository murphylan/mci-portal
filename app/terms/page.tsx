import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service of Murphy Code Innovations, LLC: service scope, payment, intellectual property, liability, and governing law (Texas).",
};

export default function Terms() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-3 text-base text-slate-500">Last updated: September 2026</p>

      <div className="mt-8 space-y-8 leading-7 text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-slate-900">
            1. Who we are
          </h2>
          <p className="mt-3">
            These terms apply to the website and services of Murphy Code
            Innovations, LLC (“MCI”, “we”), 5900 Balcones Drive, Suite 100,
            Austin, TX 78731.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            2. Services
          </h2>
          <p className="mt-3">
            MCI provides enterprise software architecture, cloud-native
            systems, and DevOps engineering services, including contract
            engineering, small business websites, and architecture reviews as
            described on this site. Specific scope, timeline, and price for any
            engagement are set in a written proposal or agreement — nothing on
            this website is itself a binding offer.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            3. Quotes and payment
          </h2>
          <p className="mt-3">
            Fixed-price engagements are quoted in writing before work begins.
            Hourly engagements are billed at the agreed rate. Unless otherwise
            agreed in writing, invoices are due within 30 days. Work begins
            after any agreed deposit is received.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            4. Intellectual property
          </h2>
          <p className="mt-3">
            Ownership of deliverables is assigned in the written agreement for
            each engagement. Until then, MCI retains all rights in its
            pre-existing tools, platforms, and methods, and grants the client
            no license beyond what the written agreement states.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            5. Confidentiality
          </h2>
          <p className="mt-3">
            Each side keeps the other&apos;s non-public information
            confidential and uses it only for the engagement. This does not
            apply to information that is already public or independently
            developed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            6. Limitation of liability
          </h2>
          <p className="mt-3">
            To the maximum extent permitted by law, MCI&apos;s total liability
            for any engagement is limited to the fees paid for that engagement.
            MCI is not liable for indirect, incidental, or consequential
            damages. Nothing on this website promises a specific business
            outcome, uptime level, or delivery date beyond what a written
            agreement states.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            7. Website content
          </h2>
          <p className="mt-3">
            This website is provided for general information. We try to keep it
            accurate but make no warranties about completeness. Past experience
            described on this site refers to our CTO&apos;s personal
            professional history, not to engagements performed by MCI.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            8. Governing law
          </h2>
          <p className="mt-3">
            These terms are governed by the laws of the State of Texas. Any
            dispute will be handled in the state or federal courts located in
            Travis County, Texas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            9. Changes
          </h2>
          <p className="mt-3">
            We may update these terms; the date above will change. The version
            in effect when you engage us applies to that engagement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">10. Contact</h2>
          <p className="mt-3">
            Questions about these terms:{" "}
            <a
              href="mailto:murphylan@hotmail.com"
              className="font-medium text-orange-700 hover:underline"
            >
              murphylan@hotmail.com
            </a>
            , 346-515-8280.
          </p>
        </section>
      </div>
    </div>
  );
}
