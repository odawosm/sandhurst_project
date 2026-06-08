"use client";

import { useEffect, useState } from "react";

import GalleryFeature from "@/components/project/GalleryFeature";
import GalleryMosaic from "@/components/project/GalleryMosaic";
import GalleryLightbox from "@/components/project/GalleryLightbox";

export default function ProjectGallery({ images, video }) {
  const [active, setActive] = useState(null);

  // Lightbox order: video (when present) first, then the still images.
  const items = video
    ? [{ type: "video", ...video }, ...images.map((img) => ({ type: "image", ...img }))]
    : images.map((img) => ({ type: "image", ...img }));
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

  return (
    <>
      {video && <GalleryFeature video={video} onClick={() => setActive(0)} />}
      <GalleryMosaic images={images} onSelect={(i) => setActive(imgOffset + i)} />
      {active !== null && (
        <GalleryLightbox
          items={items}
          index={active}
          onClose={() => setActive(null)}
          onNavigate={(dir) => setActive((i) => (i + dir + items.length) % items.length)}
        />
      )}
    </>
  );
}
