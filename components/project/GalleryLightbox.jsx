"use client";

import Image from "next/image";

const NAV = "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line-strong bg-night/60 text-2xl text-cream backdrop-blur-sm transition-colors hover:border-accent hover:text-accent";

export default function GalleryLightbox({ items, index, onClose, onNavigate }) {
  const item = items[index];
  if (!item) return null;

  const stop = (e) => e.stopPropagation();
  const go = (dir) => (e) => {
    e.stopPropagation();
    onNavigate(dir);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-night/95 p-4 backdrop-blur-md sm:p-10"
      onClick={onClose}
      style={{ animation: "fadeUp 0.35s cubic-bezier(0.16,1,0.3,1)" }}
    >
      <button type="button" aria-label="Close" onClick={onClose} className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-cream transition-colors hover:border-accent hover:text-accent">
        ✕
      </button>
      <button type="button" aria-label="Previous" onClick={go(-1)} className={`${NAV} left-4 sm:left-8`}>‹</button>
      <button type="button" aria-label="Next" onClick={go(1)} className={`${NAV} right-4 sm:right-8`}>›</button>

      <figure className="relative aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-xl border border-line" onClick={stop}>
        {item.type === "video" ? (
          <video src={item.src} poster={item.poster} controls autoPlay playsInline className="h-full w-full bg-black object-contain" />
        ) : (
          <Image src={item.src} alt={item.alt} fill quality={90} sizes="100vw" className="object-cover" />
        )}
      </figure>

      <p className="label absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60">
        {item.tag ? `${item.tag} · ` : ""}{index + 1} / {items.length}
      </p>
    </div>
  );
}
