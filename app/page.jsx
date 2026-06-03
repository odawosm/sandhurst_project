import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import FeaturedProject from "@/components/sections/FeaturedProject";
import StatStrip from "@/components/sections/StatStrip";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Brand story / intro */}
      <section className="relative border-t border-line py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>Sandhurst</Eyebrow>
            </div>
            <Reveal className="lg:col-span-8">
              <p className="text-balance font-sans text-2xl font-medium leading-[1.3] tracking-tight text-cream sm:text-3xl">
                Sandhurst (Old English for a{" "}
                <span className="text-accent">sandy, wooded hill</span>) carries
                the spirit of the Royal Military Academy: strength, trust, and
                enduring stability. We bring that same discipline to real estate,
                bridging sophisticated architecture and functional urban living.
              </p>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/60">
                From our flagship development, The Woods in Ogango, to a growing
                pan-African pipeline, we build high-specification assets that offer
                superior returns for investors and an elevated lifestyle for residents.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <Pillars />
      <FeaturedProject />
      <StatStrip />
      <CTASection />
    </>
  );
}
