import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { pillars } from "@/lib/site";

export default function Pillars() {
  return (
    <section className="relative border-t border-line py-24 sm:py-32">
      <Container>
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow className="mb-6">The Gold Standard</Eyebrow>
            <h2 className="text-balance font-sans text-4xl font-medium leading-[1.05] tracking-tight text-cream sm:text-5xl">
              Four pillars behind every Sandhurst development.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/60">
            We view real estate through the lens of asset performance, curating
            environments that solve urban challenges while maximizing the luxury
            factors that drive premium pricing.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal
              key={p.no}
              delay={i * 90}
              className="group relative flex min-h-[280px] flex-col justify-between bg-night p-8 transition-colors duration-500 hover:bg-night-700/40"
            >
              <span className="font-mono text-sm text-accent">{p.no}</span>
              <div>
                <h3 className="mb-3 font-sans text-xl font-medium tracking-tight text-cream">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/60">{p.body}</p>
              </div>
              <span className="absolute right-7 top-7 h-2 w-2 rounded-full bg-line-strong transition-colors duration-500 group-hover:bg-accent" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
