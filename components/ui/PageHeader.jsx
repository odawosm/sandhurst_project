import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

// Standard inner-page header band.
export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <header className="relative overflow-hidden border-b border-line pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="bg-grid absolute inset-0 -z-10 opacity-30" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[360px] w-[360px] rounded-full bg-accent/[0.05] blur-3xl"
      />
      <Container>
        {eyebrow && <Eyebrow className="mb-7">{eyebrow}</Eyebrow>}
        <h1 className="max-w-4xl text-balance font-sans text-5xl font-medium leading-[0.98] tracking-tight text-cream sm:text-7xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/65">
            {intro}
          </p>
        )}
      </Container>
    </header>
  );
}
