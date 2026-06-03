import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";

export default function ProjectInvestment({ project }) {
  const rows = [
    ["Payment Plan", project.investment.plan],
    ["Construction Start", project.investment.start],
    ["Completion", project.investment.completion],
  ];

  return (
    <section className="relative overflow-hidden border-t border-line bg-night-700/20 py-24 sm:py-28">
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-6">Investment, Pricing & Timeline</Eyebrow>
            <p className="font-sans text-5xl font-medium tracking-tight text-accent sm:text-6xl">
              {project.investment.price}
            </p>
            <p className="mt-4 text-sm text-cream/55">{project.investment.deposit}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={project.brochure.href} arrow>
                Download Brochure
              </Button>
              <Button href="/contact" variant="outline">
                Book a Viewing
              </Button>
            </div>
          </div>
          <dl className="lg:col-span-7">
            {rows.map(([k, v]) => (
              <div
                key={k}
                className="flex flex-col gap-1 border-b border-line py-6 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <dt className="label text-cream/45">{k}</dt>
                <dd className="max-w-md text-base text-cream/80 sm:text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
