import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise Software Architecture & Cloud-Native Consulting",
  description:
    "Murphy Code Innovations, LLC is an Austin software firm. We come in when an enterprise system has to scale, integrate, or be rebuilt without stopping the business — and an architect leads the work.",
};

const PROBLEMS = [
  {
    title: "Growth is hitting the architecture.",
    body: "Traffic, order volume, or data has outgrown a design that was right three years ago. Every fix costs more than the last one.",
  },
  {
    title: "Integration keeps failing.",
    body: "A new system has to talk to an old one, and nobody can say what will break.",
  },
  {
    title: "No one owns the architecture.",
    body: "Decisions get made in tickets. Six months later nobody remembers why, and the reasoning is gone with the person who left.",
  },
];

const PRACTICE_AREAS = [
  {
    title: "Enterprise software architecture and technical consulting",
    body: "Architecture assessment, target-state design, technology selection, and the written rationale behind both.",
  },
  {
    title: "Cloud-native and distributed systems",
    body: "Kubernetes and container platforms, microservice decomposition, service mesh, resilience and multi-site failover design.",
  },
  {
    title: "DevOps and CI/CD engineering",
    body: "Build and release pipelines, environment strategy, observability, and the operational practices that make them stick.",
  },
  {
    title: "Digital transformation engineering",
    body: "Modernizing systems that work but can no longer be changed safely.",
  },
];

const WHY_US = [
  {
    title: "An architect leads the engagement.",
    body: "Every engagement is led by our CTO, whose roughly twenty-year record includes fourteen years at IBM delivering platforms for a Fortune Global 500 retailer, China Mobile, Nike, and FAW.",
  },
  {
    title: "Depth on the record, not just claimed.",
    body: "Our CTO wrote the Angular development textbook published by Posts and Telecom Press and used in universities and corporate training, holds four registered software copyrights, and was the 45th engineer worldwide to earn IBM\u2019s Full Stack Java and Open Source certification.",
  },
  {
    title: "You keep the reasoning.",
    body: "Every engagement produces documentation you own and can hand to the next engineer \u2014 the architecture decisions, why they were made, and what we deliberately chose not to do.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
            Murphy Code Innovations, LLC · Austin, Texas
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Your systems work. They just cannot change anymore.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We are an Austin software firm that comes in when an enterprise
            system has to scale, has to integrate with something it was never
            designed to talk to, or has to be rebuilt without stopping the
            business.
          </p>
          <p className="mt-4 max-w-2xl text-lg font-semibold text-white">
            An architect leads the work — not a project coordinator.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/architecture-review"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500"
            >
              Start with an architecture review
            </Link>
            <Link
              href="/services"
              className="rounded-md border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:border-slate-400"
            >
              See our services
            </Link>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Does this sound familiar?
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            How we work
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Four practice areas, one accountable architect.{" "}
            <Link href="/services" className="font-medium text-blue-800 hover:underline">
              See services in detail →
            </Link>
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {PRACTICE_AREAS.map((a) => (
              <div
                key={a.title}
                className="rounded-lg border border-slate-200 bg-white p-6"
              >
                <h3 className="text-base font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Why MCI
        </h2>
        <div className="mt-8 space-y-8">
          {WHY_US.map((w, i) => (
            <div key={w.title} className="flex gap-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-800 text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 max-w-3xl leading-7 text-slate-600">{w.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
            An architecture review is the usual starting point.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-blue-100">
            Fixed price, two to four weeks, ends in a document. It tells both
            sides whether a larger engagement is worth doing.
          </p>
          <Link
            href="/architecture-review"
            className="mt-6 inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-900 hover:bg-blue-50"
          >
            How the review works →
          </Link>
        </div>
      </section>
    </>
  );
}
