"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const isVideoItem = (item) => item.type === "video" || item.src?.match(/\.(mp4|webm|mov)$/i);

export default function ProjectGallery({ images }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, images.length]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {images.map((img, i) => {
          const video = isVideoItem(img);

          return (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-xl border border-line ${
                i === 0 ? "col-span-2 aspect-[16/10] lg:col-span-2 lg:row-span-2 lg:aspect-auto" : "aspect-[4/3]"
              }`}
            >
              {video ? (
                <video
                  src={img.src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              ) : (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 700px, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              )}
              <span className="absolute inset-0 bg-night/0 transition-colors duration-300 group-hover:bg-night/20" />
              {video && (
                <span className="pointer-events-none absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-cream">
                  ▶
                </span>
              )}
            </button>
          );
        })}
      </div>

      {active !== null && (
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
            {isVideoItem(images[active]) ? (
              <video
                src={images[active].src}
                controls
                autoPlay
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                {images[active].alt}
              </video>
            ) : (
              <Image
                src={images[active].src}
                alt={images[active].alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            )}
          </div>
          <p className="label absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60">
            {active + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
