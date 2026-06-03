import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ProjectLocation({ project }) {
  return (
    <section className="border-t border-line py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-6">Location & Connectivity</Eyebrow>
            <h2 className="text-balance font-sans text-4xl font-medium leading-[1.05] tracking-tight text-cream">
              Suburban calm, urban access.
            </h2>
          </div>
          <div className="grid gap-px self-start overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:col-span-8">
            {project.location_features.map((f) => (
              <div key={f.title} className="bg-night p-7">
                <h3 className="label mb-3 text-accent">{f.title}</h3>
                <p className="text-sm leading-relaxed text-cream/65">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
