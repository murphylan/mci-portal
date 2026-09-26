"use client";

import { useState } from "react";

const CONTACT_EMAIL = "murphylan@hotmail.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [system, setSystem] = useState("");
  const [referral, setReferral] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Website inquiry from ${name || "a visitor"}${company ? ` (${company})` : ""}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        ``,
        `What system are you having trouble with:`,
        system,
        ``,
        `How did you hear about us: ${referral}`,
      ].join("\n")
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
            Name *
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-slate-700">
            Company
          </label>
          <input
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={inputClass}
            placeholder="Company name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
          Email *
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="system" className="mb-1.5 block text-sm font-medium text-slate-700">
          What system are you having trouble with? *
        </label>
        <textarea
          id="system"
          required
          rows={5}
          value={system}
          onChange={(e) => setSystem(e.target.value)}
          className={inputClass}
          placeholder="A few sentences about the system and what is going wrong."
        />
      </div>
      <div>
        <label htmlFor="referral" className="mb-1.5 block text-sm font-medium text-slate-700">
          How did you hear about us?
        </label>
        <input
          id="referral"
          value={referral}
          onChange={(e) => setReferral(e.target.value)}
          className={inputClass}
          placeholder="Referral, search, LinkedIn…"
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-blue-800 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-900"
      >
        Send inquiry
      </button>
      <p className="text-xs leading-5 text-slate-500">
        Submitting opens your email app addressed to {CONTACT_EMAIL}. We reply
        to every inquiry within one business day.
      </p>
    </form>
  );
}
