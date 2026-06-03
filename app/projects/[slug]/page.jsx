import { notFound } from "next/navigation";

import CTASection from "@/components/sections/CTASection";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectGallerySection from "@/components/project/ProjectGallerySection";
import ProjectAmenities from "@/components/project/ProjectAmenities";
import ProjectLocation from "@/components/project/ProjectLocation";
import ProjectSecurity from "@/components/project/ProjectSecurity";
import ProjectInvestment from "@/components/project/ProjectInvestment";
import ProjectTeam from "@/components/project/ProjectTeam";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name}, ${project.location}`,
    description: project.summary,
    openGraph: { images: [project.heroImage] },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectGallerySection project={project} />
      <ProjectAmenities project={project} />
      <ProjectLocation project={project} />
      <ProjectSecurity project={project} />
      <ProjectInvestment project={project} />
      <ProjectTeam project={project} />

      <CTASection
        eyebrow="The Woods, Ogango"
        title="Own a piece of the Gold Standard."
        body="Flexible, construction-linked payment plans are available now. Speak with our exclusive selling agent to secure your studio."
        primary={{ href: "/contact", label: "Enquire Now" }}
        secondary={{ href: project.brochure.href, label: "Brochure ↓" }}
      />
    </>
  );
}
