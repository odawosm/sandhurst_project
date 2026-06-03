import Link from "next/link";
import Image from "next/image";

// Project card for the projects grid. `featured` makes it span wide.
export default function ProjectCard({ project, featured = false }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative block overflow-hidden rounded-2xl border border-line bg-night-700/30 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className={`relative w-full overflow-hidden ${featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        <Image
          src={project.cardImage}
          alt={project.name}
          fill
          sizes={featured ? "(min-width: 1024px) 1180px, 100vw" : "(min-width: 1024px) 580px, 100vw"}
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />

        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-accent/95 px-3.5 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-night">
          <span className="h-1.5 w-1.5 rounded-full bg-night" />
          {project.status}
        </span>
      </div>

      <div className="flex items-end justify-between gap-6 p-6 sm:p-7">
        <div>
          <p className="label mb-2 text-cream/45">{project.location}</p>
          <h3 className="font-sans text-2xl font-medium tracking-tight text-cream sm:text-3xl">
            {project.name}
          </h3>
          {featured && (
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-cream/65">
              {project.summary}
            </p>
          )}
        </div>
        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-line-strong text-cream transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-night">
          <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
