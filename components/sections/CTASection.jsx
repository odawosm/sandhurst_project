import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTASection({
  eyebrow = "Partner With Us",
  title = "Curating environments worth standing on.",
  body = "When you see your name on a Sandhurst property, it means what the name has always meant: something solid, something established, something built to last.",
  primary = { href: "/contact", label: "Start a Conversation" },
  secondary = { href: "/investors", label: "Investor Brief" },
}) {
  return (
    <section className="relative overflow-hidden border-t border-line py-28 sm:py-36">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-8 justify-center [&>span]:hidden">{eyebrow}</Eyebrow>
          <h2 className="text-balance font-sans text-4xl font-medium leading-[1.04] tracking-tight text-cream sm:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-cream/65">
            {body}
          </p>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <Button href={primary.href} arrow>
              {primary.label}
            </Button>
          </div>
        </Reveal>
      </Container>

      {/* faint canopy motif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-3xl"
      />
    </section>
  );
}
