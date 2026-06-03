import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ProjectGallery from "@/components/ProjectGallery";

export default function ProjectGallerySection({ project }) {
  return (
    <section className="border-t border-line py-20 sm:py-24">
      <Container>
        <Eyebrow className="mb-10">Gallery</Eyebrow>
        <ProjectGallery images={project.gallery} />
      </Container>
    </section>
  );
}
