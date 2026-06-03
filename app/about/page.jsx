import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";
import { company, pillars } from "@/lib/site";

export const metadata = {
  title: "About",
  description: company.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Sandhurst"
        title="Something solid. Something worth standing on."
        intro="Sandhurst Projects is a dynamic real estate development firm dedicated to creating high-value, boutique luxury spaces — built on architectural innovation, structural integrity, and investor profitability."
      />

      {/* Name story */}
      <section className="border-b border-line py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>The Name</Eyebrow>
            </div>
            <Reveal className="lg:col-span-8">
              <p className="text-balance font-sans text-2xl font-medium leading-[1.3] tracking-tight text-cream sm:text-3xl">
                Sandhurst is a place name of Old English origin — a{" "}
                <span className="text-accent">sandy, wooded hill</span> — most
                famously tied to the Royal Military Academy in Berkshire, England.
              </p>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/60">
                The connection is deliberate. When you see your name on a Sandhurst
                property, it should mean what the name has always meant — something
                solid, something established, something worth standing on. Our roots
                are in Kenya; our vision is pan-African.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission / Vision */}
      <section className="border-b border-line py-24 sm:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="rounded-2xl border border-line bg-night-700/20 p-9 sm:p-11">
              <Eyebrow className="mb-7">Mission</Eyebrow>
              <p className="text-xl leading-relaxed text-cream/85 sm:text-2xl">
                {company.mission}
              </p>
            </Reveal>
            <Reveal delay={120} className="rounded-2xl border border-line bg-accent p-9 text-night sm:p-11">
              <span className="label mb-7 inline-flex items-center gap-3">
                <span className="h-px w-8 bg-night/40" />
                Vision
              </span>
              <p className="text-xl font-medium leading-relaxed sm:text-2xl">
                {company.vision}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="mb-14 max-w-2xl">
            <Eyebrow className="mb-6">How We Operate</Eyebrow>
            <h2 className="text-balance font-sans text-4xl font-medium leading-[1.05] tracking-tight text-cream sm:text-5xl">
              We view real estate through the lens of asset performance.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal
                key={p.no}
                delay={(i % 2) * 90}
                className="flex gap-7 bg-night p-9 transition-colors duration-500 hover:bg-night-700/40"
              >
                <span className="font-mono text-sm text-accent">{p.no}</span>
                <div>
                  <h3 className="mb-3 font-sans text-xl font-medium tracking-tight text-cream">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-cream/60">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
