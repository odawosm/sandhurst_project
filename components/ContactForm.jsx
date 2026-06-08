"use client";

import { useState } from "react";
import { company } from "@/lib/site";

const interests = ["Invest", "Partnership", "General"];

const field =
  "w-full rounded-xl border border-line bg-night-700/30 px-4 py-3.5 text-cream placeholder:text-cream/35 transition-colors focus:border-accent";

export default function ContactForm() {
  const [interest, setInterest] = useState("Invest");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `[${interest}] Enquiry from ${data.get("name") || "Website"}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nInterest: ${interest}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className="label mb-3 block text-cream/45">I'm interested in</label>
        <div className="flex flex-wrap gap-2.5">
          {interests.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setInterest(opt)}
              className={`label rounded-full border px-4 py-2.5 transition-colors ${
                interest === opt
                  ? "border-accent bg-accent text-night"
                  : "border-line-strong text-cream/70 hover:border-accent hover:text-accent"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <input name="name" required placeholder="Full name" className={field} />
        <input name="email" type="email" required placeholder="Email address" className={field} />
      </div>
      <input name="phone" placeholder="Phone (optional)" className={field} />
      <textarea
        name="message"
        rows={5}
        required
        placeholder="Tell us a little about what you're looking for…"
        className={`${field} resize-none`}
      />

      <button
        type="submit"
        className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-night transition-colors hover:bg-cream"
      >
        {sent ? "Opening your email…" : "Send Enquiry"}
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>

      {sent && (
        <p className="label text-accent">
          Your email client should open with the message ready to send.
        </p>
      )}
    </form>
  );
}
