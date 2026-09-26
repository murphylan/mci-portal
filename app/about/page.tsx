import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Murphy Code Innovations, LLC is a Texas software company founded in 2026. Engagements are led by founder and CTO Murphy — fourteen years at IBM, author, and holder of four registered software copyrights.",
};

const FACTS = [
  { label: "Legal name", value: "Murphy Code Innovations, LLC" },
  { label: "Founded", value: "2026" },
  { label: "Registered in", value: "Texas, USA" },
  { label: "Office", value: "5900 Balcones Drive, Suite 100, Austin, TX 78731" },
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h1>

      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight">The company</h2>
        <div className="mt-4 max-w-3xl space-y-4 leading-8 text-slate-600">
          <p>
            Murphy Code Innovations, LLC is a software company registered in
            Texas in 2026. We design and build enterprise systems: distributed
            architecture, cloud-native platforms, API-first integration, and
            the CI/CD engineering that keeps them shippable.
          </p>
          <p>
            We build software. Logistics and supply chain is the industry our
            first project serves.
          </p>
          <p>
            We are deliberately small. Engagements are led by the architect who
            does the work, not handed to whoever is available.
          </p>
        </div>
        <dl className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          {FACTS.map((f) => (
            <div
              key={f.label}
              className="rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {f.label}
              </dt>
              <dd className="mt-1 text-sm font-medium text-slate-900">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold tracking-tight">Leadership</h2>
        <div className="mt-6 max-w-3xl rounded-lg border border-slate-200 bg-white p-8">
          <h3 className="text-xl font-bold">Murphy</h3>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Founder and Chief Technology Officer
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Murphy spent fourteen years at IBM as a senior software engineer and
            solution architect, leading architecture for high-concurrency
            e-commerce, national-scale supply chain, and cloud-native
            microservice platforms. He is the author of an Angular development
            textbook published by Posts and Telecom Press, the sole holder of
            four registered software platforms, and was the 45th engineer
            worldwide to earn IBM&apos;s Full Stack Java and Open Source
            certification.
          </p>
        </div>
      </section>
    </div>
  );
}
