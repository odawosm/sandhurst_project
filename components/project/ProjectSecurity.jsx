import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ProjectSecurity({ project }) {
  return (
    <section className="border-t border-line py-24 sm:py-28">
      <Container>
        <Eyebrow className="mb-12">Security & Sustainability</Eyebrow>
        <div className="grid gap-6 md:grid-cols-2">
          {project.security.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-line bg-night-700/20 p-9"
            >
              <h3 className="mb-4 font-sans text-2xl font-medium tracking-tight text-cream">
                {s.title}
              </h3>
              <p className="text-base leading-relaxed text-cream/65">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
