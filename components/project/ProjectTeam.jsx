import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ProjectTeam({ project }) {
  return (
    <section className="border-t border-line py-24 sm:py-28">
      <Container>
        <Eyebrow className="mb-12">The Team</Eyebrow>
        <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {project.team.map((t) => (
            <div key={t.role} className="bg-night p-7">
              <dt className="label mb-2 text-cream/45">{t.role}</dt>
              <dd className="font-sans text-lg text-cream">{t.name}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
