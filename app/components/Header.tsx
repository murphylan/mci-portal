import Link from "next/link";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/architecture-review", label: "Architecture Review" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy & Terms" },
];

export default function Header() {
  return (
    <header className="border-b border-orange-900/10 bg-[#faf8f4]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:py-4">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <img
            src="/logo.png"
            alt="Murphy Code Innovations, LLC logo"
            className="h-7 w-auto shrink-0"
          />
          {/* Mobile: short brand mark */}
          <span className="shrink-0 text-base font-bold tracking-tight text-[#0a1830] md:hidden">
            MCI
          </span>
          {/* Desktop: full brand */}
          <span className="hidden min-w-0 flex-col leading-tight md:flex">
            <span className="truncate text-base font-bold tracking-tight text-[#0a1830]">
              Murphy Code Innovations, LLC
            </span>
            <span className="text-sm text-slate-500">
              Enterprise Architecture &middot; Texas, USA
            </span>
          </span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-slate-600 hover:text-orange-700"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-orange-600 px-4 py-2 text-base font-semibold text-white hover:bg-orange-700"
          >
            Talk to an architect
          </Link>
        </nav>
        {/* Mobile nav */}
        <nav className="flex shrink-0 items-center gap-3 md:hidden">
          <Link
            href="/services"
            className="text-base font-medium text-slate-600 hover:text-orange-700"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-700"
          >
            Talk to an architect
          </Link>
        </nav>
      </div>
    </header>
  );
}
