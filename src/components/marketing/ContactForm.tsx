"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] p-10 text-center">
        <p className="text-base font-semibold text-white">Message received</p>
        <p className="mt-2 max-w-sm text-sm text-white/55">
          This form is not yet wired to a live inbox. We&apos;ll connect it before launch — thanks for your patience.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Name" id="name" type="text" placeholder="Jane Doe" />
        <Field label="Email" id="email" type="email" placeholder="jane@example.com" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-white/80">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="How can we help?"
          className="w-full rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
      >
        Send message
      </button>
    </form>
  );
}

function Field({ label, id, type, placeholder }: { label: string; id: string; type: string; placeholder: string }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium text-white/80">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="h-10 w-full rounded-md border border-white/10 bg-white/[0.03] px-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/30"
      />
    </div>
  );
}
