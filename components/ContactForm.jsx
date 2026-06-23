"use client";

import { useActionState, useState } from "react";
import { submitContactForm } from "@/app/contact/actions";

const interests = ["Buying", "Investing", "General"];

const field =
  "w-full rounded-xl border border-line bg-night-700/30 px-4 py-3.5 text-cream placeholder:text-cream/35 transition-colors focus:border-accent";

export default function ContactForm() {
  const [interest, setInterest] = useState("Buying");
  const [state, formAction, isPending] = useActionState(submitContactForm, {});

  if (state.success) {
    return (
      <div className="rounded-2xl border border-line bg-night-700/20 p-10 text-center">
        <p className="label mb-3 text-accent">Message sent</p>
        <p className="text-base leading-relaxed text-cream/70">
          Thank you — we&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <input type="hidden" name="interest" value={interest} />

      <div>
        <label className="label mb-3 block text-cream/45">I&apos;m interested in</label>
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

      {state.error && <p className="label text-red-400">{state.error}</p>}

      <button
        type="submit"
        disabled={isPending}
        className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-night transition-colors hover:bg-cream disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending…" : "Send Enquiry"}
        {!isPending && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        )}
      </button>
    </form>
  );
}
