import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ProjectHero({ project }) {
  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <video
          src={project.heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/40 to-night" />
      </div>

      <Container className="flex min-h-[92svh] flex-col justify-end pb-16 pt-36">
        <Link
          href="/projects"
          className="label mb-8 inline-flex items-center gap-2 text-cream/60 transition-colors hover:text-accent"
        >
          ← All Projects
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-night">
            {project.status}
          </span>
          <span className="label text-cream/60">
            {project.location} · {project.region}
          </span>
        </div>
        <h1 className="mt-6 font-sans text-[clamp(3rem,9vw,8rem)] font-medium leading-[0.9] tracking-tight text-cream">
          {project.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
          {project.summary}
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button href={project.brochure.href} arrow>
            Download Brochure
          </Button>
          <Button href="/contact" variant="outline">
            Enquire
          </Button>
        </div>
      </Container>
    </section>
  );
}
