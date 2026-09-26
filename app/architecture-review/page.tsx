import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architecture Review",
  description:
    "A fixed-price, fixed-scope assessment of a system you already have. Two to four weeks, $3,000–$8,000. Ends in a document you keep.",
};

const STEPS = [
  {
    title: "Kickoff.",
    body: "We agree on which system, which questions matter, and who we need to talk to.",
  },
  {
    title: "Review.",
    body: "Code and repository structure, data model, deployment and release process, dependencies, and the failure modes nobody has written down. Interviews with the people who run it.",
  },
  {
    title: "Findings.",
    body: "A written report: what is actually wrong, what is fine, and what is going to break next.",
  },
  {
    title: "Plan.",
    body: "A prioritized remediation plan \u2014 sequenced, with effort ranges, and with the options you chose not to take written down alongside the reasons.",
  },
  {
    title: "Walkthrough.",
    body: "A working session with your team. Questions answered, not just a document dropped.",
  },
];

const DELIVERABLES = [
  "A written architecture assessment, yours to keep and hand to anyone.",
  "A prioritized, sequenced remediation plan with effort ranges.",
  "A recorded walkthrough session.",
  "A straight answer on whether you need outside help at all.",
];

export default function ArchitectureReview() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <p className="text-base font-semibold uppercase tracking-widest text-orange-700">
        Fixed price · Fixed scope · 2–4 weeks
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Architecture Review
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
        A fixed-price, fixed-scope assessment of a system you already have. Two
        to four weeks. It ends in a document you keep.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight">What happens</h2>
      <ol className="mt-6 space-y-6">
        {STEPS.map((s, i) => (
          <li key={s.title} className="flex gap-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-700 text-base font-bold text-white">
              {i + 1}
            </span>
            <div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 max-w-3xl leading-7 text-slate-600">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 text-2xl font-bold tracking-tight">What you get</h2>
      <ul className="mt-6 space-y-3">
        {DELIVERABLES.map((d) => (
          <li key={d} className="flex gap-3 leading-7 text-slate-700">
            <span className="mt-1 text-orange-700">✓</span>
            <span>{d}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold tracking-tight">
        What this is not
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h3 className="font-semibold">Not a sales document.</h3>
          <p className="mt-2 text-base leading-7 text-slate-600">
            If the answer is “your architecture is fine, fix your release
            process,” that is what the report says.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h3 className="font-semibold">Not a commitment.</h3>
          <p className="mt-2 text-base leading-7 text-slate-600">
            The review does not commit either side to a larger engagement. It
            tells both of us whether one is worth doing.
          </p>
        </div>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight">
        Price and timeline
      </h2>
      <div className="mt-6 rounded-lg border border-orange-200 bg-orange-50 p-8">
        <p className="text-lg leading-8 text-slate-800">
          Most reviews land between{" "}
          <span className="font-bold">$3,000 and $8,000</span>, depending on
          system size. The price is fixed and agreed before we start — two to
          four weeks, ending in a document you keep.
        </p>
      </div>

      <div className="mt-10 rounded-lg bg-orange-700 p-8 text-center">
        <p className="text-lg font-semibold text-white">
          Book a 30-minute scoping call.
        </p>
        <p className="mt-2 text-orange-100">
          We will agree on scope and a fixed price — no obligation.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-md bg-white px-6 py-3 text-base font-semibold text-orange-900 hover:bg-orange-50"
        >
          Contact us →
        </Link>
      </div>
    </div>
  );
}
