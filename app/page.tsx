import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise Software Architecture & Cloud-Native Consulting",
  description:
    "Murphy Code Innovations, LLC is an Austin software firm. We come in when an enterprise system has to scale, integrate, or be rebuilt without stopping the business — and an architect leads the work.",
};

const STATS = [
  { value: "20+ years", label: "Founder\u2019s engineering career" },
  { value: "14 at IBM", label: "Architecture and delivery" },
  { value: "4 platforms", label: "Registered software IP" },
  { value: "3 clear offers", label: "Hourly or fixed-price" },
];

const MAP_NODES = [
  { title: "Applications", sub: "Interfaces & services" },
  { title: "Data", sub: "Models & flows" },
  { title: "Platform", sub: "Cloud & runtime" },
  { title: "Operations", sub: "Delivery & observe" },
];

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

function SystemMap() {
  return (
    <div className="rounded-xl bg-[#0a1830] p-6 shadow-xl sm:p-8">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          System Map
        </span>
        <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
          Governed
        </span>
      </div>
      <div className="mt-6 grid grid-cols-3 items-stretch gap-3">
        <div className="rounded border border-slate-500/40 p-3">
          <p className="text-xs font-semibold text-slate-200">{MAP_NODES[0].title}</p>
          <p className="mt-0.5 text-[10px] leading-4 text-slate-400">{MAP_NODES[0].sub}</p>
        </div>
        <div className="row-span-2 flex items-center">
          <div className="w-full rounded bg-orange-600 p-3">
            <p className="text-xs font-semibold text-white">Architecture</p>
            <p className="mt-0.5 text-[10px] leading-4 text-orange-100">
              Decisions with reasons
            </p>
          </div>
        </div>
        <div className="rounded border border-slate-500/40 p-3">
          <p className="text-xs font-semibold text-slate-200">{MAP_NODES[1].title}</p>
          <p className="mt-0.5 text-[10px] leading-4 text-slate-400">{MAP_NODES[1].sub}</p>
        </div>
        <div className="rounded border border-slate-500/40 p-3">
          <p className="text-xs font-semibold text-slate-200">{MAP_NODES[2].title}</p>
          <p className="mt-0.5 text-[10px] leading-4 text-slate-400">{MAP_NODES[2].sub}</p>
        </div>
        <div className="rounded border border-slate-500/40 p-3">
          <p className="text-xs font-semibold text-slate-200">{MAP_NODES[3].title}</p>
          <p className="mt-0.5 text-[10px] leading-4 text-slate-400">{MAP_NODES[3].sub}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-slate-500">
        <span>Current state</span>
        <span>Target state</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#faf8f4]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-700">
              <span className="h-px w-6 bg-orange-600" />
              Murphy Code Innovations, LLC
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#0a1830] sm:text-5xl">
              Senior software delivery, without the agency overhead.
            </h1>
            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              MCI gives U.S. businesses direct access to experienced
              engineering leadership&mdash;for hands-on contract delivery, a
              credible digital presence, or a clear architecture plan. The
              engineer you meet leads the work.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700"
              >
                Discuss your project &rarr;
              </Link>
              <Link
                href="/services"
                className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400"
              >
                See services &amp; pricing
              </Link>
            </div>
          </div>
          <SystemMap />
        </div>
        {/* Stats strip */}
        <div className="border-t border-orange-900/10">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.value}>
                <p className="text-xl font-bold tracking-tight text-[#0a1830]">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-[#0a1830] sm:text-3xl">
          Does this sound familiar?
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-[#0a1830]">{p.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="bg-[#f3efe7]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold tracking-tight text-[#0a1830] sm:text-3xl">
            How we work
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Four practice areas, one accountable architect.{" "}
            <Link href="/services" className="font-medium text-orange-700 hover:underline">
              See services in detail &rarr;
            </Link>
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {PRACTICE_AREAS.map((a) => (
              <div
                key={a.title}
                className="rounded-lg border border-slate-200 bg-white p-6"
              >
                <h3 className="text-base font-semibold text-[#0a1830]">{a.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-[#0a1830] sm:text-3xl">
          Why MCI
        </h2>
        <div className="mt-8 space-y-8">
          {WHY_US.map((w, i) => (
            <div key={w.title} className="flex gap-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-700 text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[#0a1830]">{w.title}</h3>
                <p className="mt-2 max-w-3xl leading-7 text-slate-600">{w.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-700">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
            An architecture review is the usual starting point.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-orange-100">
            Fixed price, two to four weeks, ends in a document. It tells both
            sides whether a larger engagement is worth doing.
          </p>
          <Link
            href="/architecture-review"
            className="mt-6 inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-orange-900 hover:bg-orange-50"
          >
            How the review works &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
