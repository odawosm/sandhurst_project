import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ProjectOverview({ project }) {
  return (
    <section className="border-t border-line py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow className="mb-7">Project Overview</Eyebrow>
            <p className="text-balance font-sans text-2xl font-medium leading-[1.3] tracking-tight text-cream sm:text-3xl">
              {project.intro}
            </p>
          </div>
          <div className="lg:col-span-5">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {project.composition.map((c) => (
                <div key={c.label} className="bg-night p-7">
                  <dt className="font-sans text-4xl font-medium text-accent sm:text-5xl">
                    {c.value}
                  </dt>
                  <dd className="label mt-3 text-cream/55">{c.label}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 grid gap-4">
              {project.specs.map((s) => (
                <div key={s.title} className="rounded-xl border border-line p-5">
                  <h3 className="label mb-2 text-accent">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-cream/65">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
