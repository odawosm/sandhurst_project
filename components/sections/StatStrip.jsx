import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { stats } from "@/lib/site";

export default function StatStrip() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-night-700/20 py-20">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <Container className="relative">
        <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <p className="font-sans text-5xl font-medium tracking-tight text-cream sm:text-6xl">
                {s.value}
              </p>
              <p className="label mt-3 text-cream/50">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
