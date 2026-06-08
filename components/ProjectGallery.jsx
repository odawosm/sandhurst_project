"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Varied crops give the masonry its staggered rhythm (sources are all 16:9).
const ASPECTS = [
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/3]",
  "aspect-[3/4]",
];

export default function ProjectGallery({ images, video }) {
  const [active, setActive] = useState(null);

  // Lightbox order: video (when present) first, then the still images.
  const items = video
    ? [{ type: "video", ...video }, ...images.map((img) => ({ type: "image", ...img }))]
    : images.map((img) => ({ type: "image", ...img }));

  // Offset so image index maps to the right lightbox slot when a video leads.
  const imgOffset = video ? 1 : 0;

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + items.length) % items.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, items.length]);

  const current = active !== null ? items[active] : null;

  return (
    <>
      {/* Cinematic video feature */}
      {video && (
        <button
          type="button"
          onClick={() => setActive(0)}
          aria-label="Play walkthrough video"
          className="group relative mb-3 block aspect-video w-full overflow-hidden rounded-2xl border border-line sm:mb-4"
        >
          <Image
            src={video.poster}
            alt={video.alt}
            fill
            priority
            quality={90}
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-night/70 via-night/10 to-night/15 transition-opacity duration-300 group-hover:opacity-80" />

          {/* Play affordance */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-night/45 backdrop-blur-sm ring-1 ring-cream/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:ring-accent sm:h-24 sm:w-24">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="ml-1 h-7 w-7 fill-cream transition-colors duration-300 group-hover:fill-night sm:h-10 sm:w-10"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>

          <span className="label absolute bottom-4 left-4 flex items-center gap-2 text-cream sm:bottom-6 sm:left-6">
            <span className="h-px w-8 bg-accent/70" />
            Watch the walkthrough
          </span>
        </button>
      )}

      {/* Masonry of stills */}
      <div className="columns-2 gap-3 sm:gap-4 lg:columns-3 [&>*]:mb-3 sm:[&>*]:mb-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(imgOffset + i)}
            aria-label="View image"
            className={`group relative block w-full break-inside-avoid overflow-hidden rounded-xl border border-line ${
              ASPECTS[i % ASPECTS.length]
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              quality={90}
              sizes="(min-width: 1024px) 640px, 80vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-night/0 transition-colors duration-300 group-hover:bg-night/20" />
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-night/95 p-4 backdrop-blur-sm sm:p-10"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-cream transition-colors hover:border-accent hover:text-accent"
          >
            ✕
          </button>
          <div
            className="relative aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {current.type === "video" ? (
              <video
                src={current.src}
                poster={current.poster}
                controls
                autoPlay
                playsInline
                className="h-full w-full bg-black object-contain"
              />
            ) : (
              <Image
                src={current.src}
                alt={current.alt}
                fill
                quality={90}
                sizes="100vw"
                className="object-cover"
              />
            )}
          </div>
          <p className="label absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60">
            {active + 1} / {items.length}
          </p>
        </div>
      )}
    </>
  );
}
