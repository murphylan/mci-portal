import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <p className="text-base font-bold text-slate-900">
            Murphy Code Innovations, LLC
          </p>
          <p className="mt-2 text-base leading-6 text-slate-600">
            Enterprise software architecture, cloud-native systems, and DevOps
            engineering. Austin, Texas.
          </p>
        </div>
        <div>
          <p className="text-base font-bold text-slate-900">Contact</p>
          <address className="mt-2 text-base not-italic leading-6 text-slate-600">
            5900 Balcones Drive, Suite 100
            <br />
            Austin, TX 78731
            <br />
            <a
              href="tel:+13465158280"
              className="hover:text-orange-700"
            >
              346-515-8280
            </a>
            <br />
            <a
              href="mailto:murphylan@hotmail.com"
              className="hover:text-orange-700"
            >
              murphylan@hotmail.com
            </a>
          </address>
        </div>
        <div>
          <p className="text-base font-bold text-slate-900">Company</p>
          <ul className="mt-2 space-y-2 text-base text-slate-600">
            <li>
              <Link href="/about" className="hover:text-orange-700">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-orange-700">
                Services
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-orange-700">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-orange-700">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Murphy Code Innovations, LLC. All rights reserved.</span>
          <span>Austin, Texas · Founded 2026</span>
        </div>
      </div>
    </footer>
  );
}
