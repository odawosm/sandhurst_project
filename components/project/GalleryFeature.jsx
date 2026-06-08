import Image from "next/image";

// Full-width cinematic poster that opens the walkthrough video in the lightbox.
export default function GalleryFeature({ video, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Play the walkthrough video"
      className="group relative mb-3 block aspect-video w-full overflow-hidden rounded-2xl border border-line ring-1 ring-transparent transition-all duration-500 hover:ring-accent/50 sm:mb-4"
    >
      <Image
        src={video.poster}
        alt={video.alt}
        fill
        priority
        quality={90}
        sizes="(min-width: 1024px) 1100px, 100vw"
        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-night/75 via-night/10 to-night/15 transition-opacity duration-500 group-hover:opacity-80" />

      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-night/45 ring-1 ring-cream/30 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:ring-accent sm:h-24 sm:w-24">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-1 h-7 w-7 fill-cream transition-colors duration-500 group-hover:fill-night sm:h-10 sm:w-10">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>

      <span className="label absolute bottom-4 left-4 flex items-center gap-2 text-cream sm:bottom-6 sm:left-6">
        <span className="h-px w-8 bg-accent/70" />
        Watch the walkthrough
      </span>
    </button>
  );
}
