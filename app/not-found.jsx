import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center">
      <Container className="text-center">
        <p className="label mb-6 text-accent">Error 404</p>
        <h1 className="font-sans text-6xl font-medium tracking-tight text-cream sm:text-8xl">
          Off the map.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-cream/60">
          The page you're looking for isn't here — but our flagship address very much is.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/" arrow>
            Back Home
          </Button>
          <Button href="/projects/the-woods-ogango" variant="outline">
            Explore The Woods
          </Button>
        </div>
      </Container>
    </section>
  );
}
