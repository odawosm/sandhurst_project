import Image from "next/image";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { company } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate grain min-h-[100svh] overflow-hidden">
      {/* Background render */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/projects/the-woods-ogango/woods-exterior-front.jpg"
          alt="The Woods, Ogango — Sandhurst Projects"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/85 via-night/55 to-night" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/80 to-transparent" />
      </div>

      <Container className="flex min-h-[100svh] flex-col justify-end pb-20 pt-32">
        <div className="max-w-4xl">
          <p
            className="label mb-8 flex items-center gap-3 text-accent opacity-0"
            style={{ animation: "fadeUp 0.9s 0.1s cubic-bezier(0.16,1,0.3,1) forwards" }}
          >
            <span className="h-px w-10 bg-accent/60" />
            {company.category} · Kenya → Africa
          </p>

          <h1 className="text-balance font-sans text-[clamp(2.75rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.02em] text-cream">
            <span
              className="block opacity-0"
              style={{ animation: "fadeUp 1s 0.2s cubic-bezier(0.16,1,0.3,1) forwards" }}
            >
              Built Strong.
            </span>
            <span
              className="block text-accent opacity-0"
              style={{ animation: "fadeUp 1s 0.35s cubic-bezier(0.16,1,0.3,1) forwards" }}
            >
              Living Elevated.
            </span>
          </h1>

          <p
            className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75 opacity-0"
            style={{ animation: "fadeUp 1s 0.5s cubic-bezier(0.16,1,0.3,1) forwards" }}
          >
            Boutique luxury real estate, engineered for an elevated way of living
            and superior investor returns across Kenya, East Africa, and the continent.
          </p>

          <div
            className="mt-11 flex flex-wrap items-center gap-4 opacity-0"
            style={{ animation: "fadeUp 1s 0.65s cubic-bezier(0.16,1,0.3,1) forwards" }}
          >
            <Button href="/projects/the-woods-ogango" arrow>
              Explore The Woods
            </Button>
            <Button href="/investors" variant="outline">
              Invest With Us
            </Button>
          </div>
        </div>
      </Container>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="label text-cream/40">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
