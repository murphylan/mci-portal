import Link from "next/link";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/architecture-review", label: "Architecture Review" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-base font-bold tracking-tight text-slate-900">
            Murphy Code Innovations, LLC
          </span>
          <span className="text-xs text-slate-500">
            Enterprise software architecture · Austin, Texas
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-800"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-blue-800 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900"
          >
            Get in touch
          </Link>
        </nav>
        <nav className="flex items-center gap-4 md:hidden">
          <Link
            href="/services"
            className="text-sm font-medium text-slate-600 hover:text-blue-800"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-900"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
