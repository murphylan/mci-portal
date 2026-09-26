import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Murphy Code Innovations, LLC. We reply to every inquiry within one business day. Austin, Texas: 346-515-8280, murphylan@hotmail.com.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
        We reply to every inquiry within one business day.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-lg font-bold">Murphy Code Innovations, LLC</h2>
            <address className="mt-4 text-base not-italic leading-7 text-slate-600">
              5900 Balcones Drive, Suite 100
              <br />
              Austin, TX 78731
            </address>
            <div className="mt-4 space-y-2 text-base">
              <p>
                <a
                  href="tel:+13465158280"
                  className="font-medium text-orange-700 hover:underline"
                >
                  346-515-8280
                </a>
              </p>
              <p>
                <a
                  href="mailto:murphylan@hotmail.com"
                  className="font-medium text-orange-700 hover:underline"
                >
                  murphylan@hotmail.com
                </a>
              </p>
            </div>
            <p className="mt-6 border-t border-slate-200 pt-4 text-sm leading-6 text-slate-500">
              Prefer to talk first? Call during US Central business hours and
              ask for Murphy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
