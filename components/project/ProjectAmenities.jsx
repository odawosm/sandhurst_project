import Image from "next/image";

import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

export default function ProjectAmenities({ project }) {
  const highlights = project.amenityHighlights ?? [];
  return (
    <section className="border-t border-line py-24 sm:py-28">
      <Container>
        <div className="mb-14 max-w-2xl">
          <Eyebrow className="mb-6">Lifestyle & Amenities</Eyebrow>
          <h2 className="text-balance font-sans text-4xl font-medium leading-[1.05] tracking-tight text-cream sm:text-5xl">
            An urban luxury environment, designed to be lived in.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {project.amenities.map((a, i) => (
            <Reveal
              key={a.title}
              delay={(i % 3) * 80}
              className="bg-night p-8 transition-colors duration-500 hover:bg-night-700/40"
            >
              <h3 className="mb-3 font-sans text-lg font-medium tracking-tight text-cream">
                {a.title}
              </h3>
              <p className="text-sm leading-relaxed text-cream/60">{a.body}</p>
            </Reveal>
          ))}
        </div>

        {highlights.length > 0 && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <Reveal
                key={h.src}
                delay={i * 100}
                className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-line"
              >
                <Image
                  src={h.src}
                  alt={h.caption}
                  fill
                  quality={90}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/10 to-transparent" />
                <span className="label absolute bottom-5 left-5 right-5 text-cream">
                  {h.caption}
                </span>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
