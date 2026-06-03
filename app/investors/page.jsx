import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { company } from "@/lib/site";
import { getProject } from "@/lib/projects";

export const metadata = {
  title: "Investors",
  description:
    "Sandhurst Projects develops high-yield, high-specification assets engineered for superior returns and capital appreciation across Africa.",
};

const reasons = [
  {
    no: "01",
    title: "High-Yield by Design",
    body: "Properties are sited in high-growth areas and engineered specifically to attract premium rental income and capital appreciation.",
  },
  {
    no: "02",
    title: "Resilient Infrastructure",
    body: "Underground water reservoirs, CCTV-ready security, and fire safety protect the asset and its long-term value.",
  },
  {
    no: "03",
    title: "Early-Mover Advantage",
    body: "We develop among the first premium addresses in fast-growing hubs, close to business districts and transit.",
  },
  {
    no: "04",
    title: "Flexible Entry",
    body: "Construction-linked payment plans lower the barrier to ownership while the asset is built to the Gold Standard.",
  },
];

const process = [
  { step: "Identify", body: "Pinpoint high-growth corridors with structural demand." },
  { step: "Develop", body: "Build high-specification assets to the Gold Standard." },
  { step: "Secure", body: "Engineer water, security, and parking for resilience." },
  { step: "Return", body: "Deliver high-yield income and capital appreciation." },
];

export default function InvestorsPage() {
  const woods = getProject("the-woods-ogango");

  return (
    <>
      <PageHeader
        eyebrow="For Investors"
        title="Real estate, through the lens of asset performance."
        intro="We don't just build structures; we curate environments that solve urban challenges while maximizing the luxury factors that drive premium pricing and superior returns."
      />

      {/* Headline numbers */}
      <section className="border-b border-line py-16">
        <Container>
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            {[
              [woods.investment.price, "Entry Price"],
              ["750K", "Booking Deposit (Kes)"],
              ["12 mo", "To Completion"],
              ["High-Yield", "Return Profile"],
            ].map(([v, l], i) => (
              <Reveal key={l} delay={i * 70} className="text-center sm:text-left">
                <p className="font-sans text-4xl font-medium tracking-tight text-cream sm:text-5xl">
                  {v}
                </p>
                <p className="label mt-3 text-cream/50">{l}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why partner */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="mb-14 max-w-2xl">
            <Eyebrow className="mb-6">Why Partner With Sandhurst</Eyebrow>
            <h2 className="text-balance font-sans text-4xl font-medium leading-[1.05] tracking-tight text-cream sm:text-5xl">
              Built for returns. Engineered to endure.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal
                key={r.no}
                delay={(i % 2) * 90}
                className="flex gap-7 bg-night p-9 transition-colors duration-500 hover:bg-night-700/40"
              >
                <span className="font-mono text-sm text-accent">{r.no}</span>
                <div>
                  <h3 className="mb-3 font-sans text-xl font-medium tracking-tight text-cream">
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-cream/60">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-t border-line bg-night-700/20 py-24 sm:py-28">
        <Container>
          <Eyebrow className="mb-12">The Sandhurst Model</Eyebrow>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal
                key={p.step}
                delay={i * 80}
                className="bg-night p-8"
              >
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <h3 className="mb-3 mt-6 font-sans text-2xl font-medium tracking-tight text-cream">
                  {p.step}
                </h3>
                <p className="text-sm leading-relaxed text-cream/60">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28 sm:py-32">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance font-sans text-4xl font-medium leading-[1.04] tracking-tight text-cream sm:text-6xl">
              Request the investment brief.
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-cream/65">
              Get full pricing, payment plans, and yield projections for The Woods,
              Ogango, and first access to our upcoming pan-African pipeline.
            </p>
            <div className="mt-11 flex flex-wrap justify-center gap-4">
              <Button href={company.brochure.href} arrow>
                Download Brochure
              </Button>
              <Button href="/contact" variant="outline">
                Speak to the Team
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
