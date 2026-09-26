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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="Murphy Code Innovations, LLC logo"
            className="h-7 w-auto"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-[#0a1830]">
              Murphy Code Innovations, LLC
            </span>
            <span className="text-sm text-slate-500">
              Enterprise Architecture &middot; Texas, USA
            </span>
          </span>
        </Link>
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
        <nav className="flex items-center gap-4 md:hidden">
          <Link
            href="/services"
            className="text-base font-medium text-slate-600 hover:text-orange-700"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-orange-600 px-3 py-2 text-base font-semibold text-white hover:bg-orange-700"
          >
            Talk to an architect
          </Link>
        </nav>
      </div>
    </header>
  );
}
