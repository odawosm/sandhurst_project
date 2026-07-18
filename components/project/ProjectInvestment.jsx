import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";

const segment = {
  complete: "bg-accent",
  current: "bg-cream/10",
  upcoming: "bg-cream/10",
};

const phaseText = {
  complete: "text-cream/40",
  current: "text-accent",
  upcoming: "text-cream/25",
};

function ConstructionProgress({ progress }) {
  const { phases, updated } = progress;
  const done = phases.filter((p) => p.status === "complete").length;
  const current = phases.find((p) => p.status === "current");

  return (
    <div className="border-b border-line pb-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="label text-cream/45">Construction Progress</span>
        <span className="label text-cream/35">Updated {updated}</span>
      </div>

      <div
        className="mt-6 flex gap-1.5"
        role="img"
        aria-label={`Construction progress: ${done} of ${phases.length} phases complete${
          current ? `, currently ${current.label}` : ""
        }`}
      >
        {phases.map((p) => (
          <div key={p.label} className={`h-1 flex-1 overflow-hidden rounded-full ${segment[p.status]}`}>
            {p.status === "current" && (
              <div className="h-full w-1/2 rounded-full bg-accent motion-safe:animate-pulse" />
            )}
          </div>
        ))}
      </div>

      <ol className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
        {phases.map((p) => (
          <li key={p.label} className={`label ${phaseText[p.status]}`}>
            {p.status === "complete" && <span aria-hidden="true">✓ </span>}
            {p.label}
            <span className="sr-only">
              {p.status === "complete" ? " (complete)" : p.status === "current" ? " (in progress)" : " (upcoming)"}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

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
            {project.elevations && (
              <a
                href={project.elevations.href}
                target="_blank"
                rel="noopener noreferrer"
                className="label mt-6 inline-flex items-center gap-2 text-cream/55 transition-colors hover:text-accent"
              >
                <span className="h-px w-6 bg-current" />
                Architectural elevations (PDF) ↗
              </a>
            )}
          </div>
          <div className="lg:col-span-7">
            {project.progress && <ConstructionProgress progress={project.progress} />}
            <dl>
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
        </div>
      </Container>
    </section>
  );
}
