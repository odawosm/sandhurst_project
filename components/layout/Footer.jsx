import Link from "next/link";
import Image from "next/image";

import { company, nav } from "@/lib/site";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-night">
      <Container className="py-20">
        {/* Big tagline + full logo lockup on the far right */}
        <div className="flex flex-col gap-10 border-b border-line pb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {/*<Image
              src="/brand/mark-cream.png"
              alt=""
              width={48}
              height={48}
              className="mb-7 h-11 w-11 opacity-90"
            />*/}
            <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-tight text-cream sm:text-5xl">
              Built Strong.
              <br />
              <span className="text-accent">Living Elevated.</span>
            </h2>
          </div>

          {/* Full brand logo lockup (mark + wordmark) — exact artwork from the brand guide */}
          <Image
            src="/brand/logo-lockup-cream.png"
            alt={`${company.name} logo`}
            width={1851}
            height={1205}
            className="h-auto w-56 self-start opacity-95 sm:w-64 lg:w-72 lg:self-end"
          />
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 py-14 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="label mb-4 text-cream/45">Sitemap</p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm text-cream/75 transition-colors hover:text-accent">
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/75 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label mb-4 text-cream/45">Contact</p>
            <ul className="flex flex-col gap-3 text-sm text-cream/75">
              <li>
                <a href={company.phone.href} className="transition-colors hover:text-accent">
                  {company.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-accent">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="label mb-4 text-cream/45">Office</p>
            <address className="flex flex-col gap-1 text-sm not-italic text-cream/75">
              {company.address.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          </div>

          <div>
            <p className="label mb-4 text-cream/45">Follow</p>
            <ul className="flex flex-col gap-3 text-sm text-cream/75">
              <li>
                <a
                  href={company.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={company.url}
                  className="transition-colors hover:text-accent"
                >
                  Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Baseline */}
        <div className="flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-cream/40">
            © {company.name} · {company.category}
          </p>
          <p className="label text-cream/40">Sole Agent · {company.sellingAgent}</p>
        </div>
      </Container>

      {/* Oversized watermark wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden"
      >
        <p className="-mb-6 -mt-4 text-center font-sans text-[18vw] font-semibold leading-none tracking-tighter text-cream/[0.03]">
          SANDHURST
        </p>
      </div>
    </footer>
  );
}
