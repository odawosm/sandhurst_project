import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/sections/CTASection";
import Waitlist from "@/components/sections/Waitlist";
import { projects, pipeline } from "@/lib/projects";

export const metadata = {
  title: "Projects",
  description:
    "Explore Sandhurst Projects developments, led by The Woods, Ogango, our flagship in Kisumu, with a growing pan-African pipeline.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Developments"
        title="A portfolio built to the Gold Standard."
        intro="Each Sandhurst development is engineered for asset performance, solving urban challenges while maximizing the luxury factors that drive premium pricing."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} featured={i === 0} />
            ))}
          </div>
        </Container>
      </section>

      {/* Pipeline */}
      <section className="border-t border-line py-20 sm:py-24">
        <Container>
          <Eyebrow className="mb-10">Future Pipeline · Coming Soon</Eyebrow>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {pipeline.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 100}
                className="flex items-center justify-between gap-6 bg-night p-8 sm:p-10"
              >
                <div>
                  <h3 className="font-sans text-2xl font-medium tracking-tight text-cream">
                    {p.name}
                  </h3>
                  <p className="label mt-2 text-cream/45">{p.location}</p>
                </div>
                <span className="label rounded-full border border-line-strong px-4 py-2 text-cream/60">
                  {p.status}
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Waitlist
        source="Projects listing"
        eyebrow="Early Access"
        title="First access to the pipeline."
        body="Pipeline developments are offered to the waitlist before they go public. Leave your email and we'll reach out when the next release opens."
      />

      <CTASection
        eyebrow="Register Interest"
        title="Be early on the next Sandhurst address."
        body="Our developments move from pipeline to sold quickly. Register to receive first access to upcoming releases across Africa."
        primary={{ href: "/contact", label: "Register Interest" }}
        secondary={{ href: "/investors", label: "Investor Brief" }}
      />
    </>
  );
}
