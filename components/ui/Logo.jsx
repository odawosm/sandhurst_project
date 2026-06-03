import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/site";

// Canopy mark + wordmark. `tone` picks the mark color asset.
export default function Logo({ tone = "cream", className = "" }) {
  const mark = tone === "accent" ? "/brand/mark-accent.png" : "/brand/mark-cream.png";
  return (
    <Link
      href="/"
      aria-label={`${company.name} — home`}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <Image
        src={mark}
        alt=""
        width={34}
        height={34}
        priority
        className="h-8 w-8 transition-transform duration-500 group-hover:-translate-y-0.5"
      />
      <span className="flex flex-col leading-none">
        <span className="font-mono text-[0.95rem] font-medium tracking-[0.16em] text-cream">
          SANDHURST
        </span>
        <span className="label mt-1 text-[0.5rem] text-cream/55">
          Projects Ltd.
        </span>
      </span>
    </Link>
  );
}
