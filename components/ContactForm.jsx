"use client";

import { useState } from "react";

const interests = ["Buying", "Investing", "General"];

const field =
  "w-full rounded-xl border border-line bg-night-700/30 px-4 py-3.5 text-cream placeholder:text-cream/35 transition-colors focus:border-accent";

export default function ContactForm() {
  const [interest, setInterest] = useState("Buying");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          interest,
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Failed to send");
      }

      setSent(true);
      form.reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
        disabled={loading}
        className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-night transition-colors hover:bg-cream disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending…" : sent ? "Sent!" : "Send Enquiry"}
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>

      {sent && (
        <p className="label text-accent">
          Thank you! We've received your enquiry and will be in touch soon.
        </p>
      )}

      {error && (
        <p className="label text-red-400">Error: {error}</p>
      )}
    </form>
  );
}
