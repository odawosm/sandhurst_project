import Image from "next/image";

import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { getProject } from "@/lib/projects";

export default function FeaturedProject() {
  const project = getProject("the-woods-ogango");

  return (
    <section className="relative border-t border-line py-24 sm:py-32">
      <Container>
        <Eyebrow className="mb-10">Flagship Development</Eyebrow>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <p className="label mb-4 text-cream/45">
              {project.location} · {project.year}
            </p>
            <h2 className="text-balance font-sans text-5xl font-medium leading-[0.98] tracking-tight text-cream sm:text-6xl">
              {project.name}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/70">
              {project.intro}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
              {project.composition.map((c) => (
                <div key={c.label} className="bg-night p-6">
                  <dt className="font-sans text-4xl font-medium text-accent">{c.value}</dt>
                  <dd className="label mt-2 text-cream/55">{c.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={`/projects/${project.slug}`} arrow>
                View Project
              </Button>
              <Button href={project.brochure.href} variant="outline">
                Brochure ↓
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-line">
              <video
                src={project.heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/40 to-transparent" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
