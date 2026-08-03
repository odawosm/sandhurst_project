"use client";

import { useActionState } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { joinWaitlist } from "@/app/contact/actions";

export default function Waitlist({
  eyebrow = "Early Access",
  title = "Join the waitlist.",
  body = "Units in our next release are allocated to the waitlist first. Leave your email and we'll reach out before we go public.",
  source,
}) {
  const [state, formAction, isPending] = useActionState(joinWaitlist, {});

  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="mb-8 justify-center [&>span]:hidden">{eyebrow}</Eyebrow>
          <h2 className="text-balance font-sans text-3xl font-medium leading-[1.06] tracking-tight text-cream sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-cream/65">{body}</p>

          {state.success ? (
            <p className="label mt-10 text-accent">You&apos;re on the list — we&apos;ll be in touch.</p>
          ) : (
            <form
              action={formAction}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              {source && <input type="hidden" name="source" value={source} />}
              <label htmlFor="waitlist-email" className="sr-only">
                Email address
              </label>
              <input
                id="waitlist-email"
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-full border border-line bg-night-700/30 px-5 py-3.5 text-cream placeholder:text-cream/35 transition-colors focus:border-accent"
              />
              <button
                type="submit"
                disabled={isPending}
                className="shrink-0 rounded-full bg-accent px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-night transition-colors hover:bg-cream disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isPending ? "Joining…" : "Join"}
              </button>
            </form>
          )}

          {state.error && <p className="label mt-4 text-red-400">{state.error}</p>}
        </Reveal>
      </Container>
    </section>
  );
}
