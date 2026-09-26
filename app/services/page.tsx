import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three ways to work with Murphy Code Innovations, LLC: contract engineering, small business websites, and architecture reviews. Every engagement is led by our CTO.",
};

const OFFERS = [
  {
    name: "Contract Engineering / Staff Augmentation",
    price: "$100–150 per hour",
    timeline: "Start in days",
    body: "A senior engineer or architect embedded in your team, working your backlog in your time zone. For teams that need senior hands now — not a hiring cycle, not a junior ramp-up.",
    bullets: [
      "Senior-level only: architecture judgment, not just tickets closed",
      "US time zone, direct communication with the person doing the work",
      "Hourly billing, weekly or monthly — scale up or down as needed",
    ],
  },
  {
    name: "Small Business Websites & Digital Presence",
    price: "Fixed price, $2,500–$6,000",
    timeline: "Delivered in 2–4 weeks",
    body: "A complete digital front door for your business: a fast modern website, your Google Business Profile set up right, and content written for your customers.",
    bullets: [
      "Modern, fast website — designed, built, and launched",
      "Google Business Profile setup and optimization",
      "Content written in clear English for your customers",
      "Handover and a walkthrough so you can run it yourself",
    ],
  },
  {
    name: "Architecture Review",
    price: "Fixed price, $3,000–$8,000",
    timeline: "2–4 weeks",
    body: "A fixed-scope assessment of a system you already have. It ends in a written report and a prioritized remediation plan — yours to keep.",
    bullets: [
      "Code, data model, deployment, and dependency review",
      "Written findings: what is wrong, what is fine, what breaks next",
      "Prioritized, sequenced remediation plan with effort ranges",
      "A straight answer on whether you need outside help at all",
    ],
    cta: { href: "/architecture-review", label: "How the review works →" },
  },
];

const PRACTICE_AREAS = [
  {
    title: "Enterprise software architecture and technical consulting",
    body: "Architecture assessment, target-state design, technology selection, and the written rationale behind both.",
    when: "When a system has to change and nobody can own the decision.",
    get: "Current-state assessment, target architecture, technology choices with written reasons.",
  },
  {
    title: "Cloud-native and distributed systems",
    body: "Kubernetes and container platforms, microservice decomposition, service mesh, resilience and multi-site failover design.",
    when: "When you are moving to Kubernetes, splitting services, or need multi-site resilience.",
    get: "Decomposition plan, service mesh and elasticity design, failover design.",
  },
  {
    title: "DevOps and CI/CD engineering",
    body: "Build and release pipelines, environment strategy, observability, and the operational practices that make them stick.",
    when: "When releases depend on manual steps, environments drift, or incidents are invisible.",
    get: "Pipelines, environment strategy, observability in place.",
  },
  {
    title: "Digital transformation engineering",
    body: "Modernizing systems that work but can no longer be changed safely.",
    when: "When the system runs but every change is a risk.",
    get: "A phased modernization roadmap where every phase can be rolled back.",
  },
];

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Services</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
        Three ways to work with us. Every engagement is led by our CTO — an
        architect with twenty years in the field, fourteen of them at IBM.
      </p>

      <div className="mt-10 space-y-8">
        {OFFERS.map((o) => (
          <section
            key={o.name}
            className="rounded-lg border border-slate-200 bg-white p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-2xl font-bold tracking-tight">{o.name}</h2>
              <p className="text-base font-semibold text-orange-700">{o.price}</p>
            </div>
            <p className="mt-1 text-base text-slate-500">{o.timeline}</p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">{o.body}</p>
            <ul className="mt-4 space-y-2">
              {o.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-base leading-6 text-slate-700">
                  <span className="mt-1 text-orange-700">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            {o.cta && (
              <Link
                href={o.cta.href}
                className="mt-5 inline-block text-base font-semibold text-orange-700 hover:underline"
              >
                {o.cta.label}
              </Link>
            )}
          </section>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-bold tracking-tight">
        Practice areas
      </h2>
      <p className="mt-3 max-w-3xl text-slate-600">
        The technical ground behind every engagement.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {PRACTICE_AREAS.map((a) => (
          <div
            key={a.title}
            className="rounded-lg border border-slate-200 bg-slate-50 p-6"
          >
            <h3 className="text-base font-semibold">{a.title}</h3>
            <p className="mt-2 text-base leading-7 text-slate-600">{a.body}</p>
            <p className="mt-3 text-base leading-6 text-slate-700">
              <span className="font-semibold">When you need this: </span>
              {a.when}
            </p>
            <p className="mt-1 text-base leading-6 text-slate-700">
              <span className="font-semibold">What you get: </span>
              {a.get}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-orange-700 p-8 text-center">
        <p className="text-lg font-semibold text-white">
          Not sure which one you need? That is what the architecture review is
          for.
        </p>
        <Link
          href="/architecture-review"
          className="mt-4 inline-block rounded-md bg-white px-6 py-3 text-base font-semibold text-orange-900 hover:bg-orange-50"
        >
          Start with an architecture review →
        </Link>
      </div>
    </div>
  );
}
