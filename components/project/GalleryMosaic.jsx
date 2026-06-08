import Image from "next/image";

import Reveal from "@/components/ui/Reveal";

// Deliberate bento layout. Spans are hand-tuned so the 10 tiles pack into a
// clean rectangle at both 2-col (mobile) and 4-col (desktop) widths — the two
// 2x2 features anchor the composition, wides and singles fill the rhythm.
const TILES = [
  "col-span-2 row-span-2", // 0  feature — rooftop aerial
  "col-span-1 row-span-1", // 1  front
  "col-span-2 row-span-1", // 2  arrival
  "col-span-1 row-span-1", // 3  parking
  "col-span-2 row-span-1", // 4  studio
  "col-span-1 row-span-1", // 5  living
  "col-span-2 row-span-2", // 6  feature — kitchen
  "col-span-1 row-span-1", // 7  entrance
  "col-span-2 row-span-1", // 8  bathroom
  "col-span-2 row-span-1", // 9  garden
];

export default function GalleryMosaic({ images, onSelect }) {
  return (
    <div className="grid auto-rows-[44vw] grid-cols-2 gap-3 [grid-auto-flow:dense] sm:auto-rows-[30vw] sm:gap-4 md:auto-rows-[15rem] md:grid-cols-4 lg:auto-rows-[16rem]">
      {images.map((img, i) => (
        <Reveal key={img.src} delay={(i % 5) * 70} className={`${TILES[i % TILES.length]} min-h-0`}>
          <button
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`View: ${img.alt}`}
            className="group relative block h-full w-full overflow-hidden rounded-xl border border-line ring-1 ring-transparent transition-all duration-500 hover:ring-accent/60 sm:rounded-2xl"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              quality={90}
              sizes="(min-width: 768px) 540px, 100vw"
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/5 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

            {/* expand cue */}
            <span className="absolute right-3 top-3 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-night/50 text-cream opacity-0 ring-1 ring-cream/25 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.6">
                <path d="M9 4H4v5M15 4h5v5M15 20h5v-5M9 20H4v-5" strokeLinecap="round" />
              </svg>
            </span>

            <span className="label absolute bottom-0 left-0 flex translate-y-2 items-center gap-2 p-4 text-left text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="h-px w-5 bg-accent" />
              {img.tag}
            </span>
          </button>
        </Reveal>
      ))}
    </div>
  );
}
