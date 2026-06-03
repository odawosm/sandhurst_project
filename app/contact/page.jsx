import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Eyebrow from "@/components/ui/Eyebrow";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Speak with Sandhurst Projects about investing in or buying at The Woods, Ogango, or partnering on our pan-African pipeline.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's build something worth standing on."
        intro="Whether you're investing, buying, or partnering, our team and exclusive selling agent are ready to help."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Details */}
            <aside className="lg:col-span-5">
              <div className="flex flex-col gap-10">
                <div>
                  <Eyebrow className="mb-5">Office</Eyebrow>
                  <address className="flex flex-col gap-1 text-base not-italic leading-relaxed text-cream/80">
                    {company.address.lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                </div>

                <div>
                  <Eyebrow className="mb-5">Direct</Eyebrow>
                  <ul className="flex flex-col gap-2 text-base text-cream/80">
                    <li>
                      <a href={company.phone.href} className="transition-colors hover:text-accent">
                        {company.phone.display}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${company.email}`}
                        className="transition-colors hover:text-accent"
                      >
                        {company.email}
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <Eyebrow className="mb-5">Exclusive Selling Agent</Eyebrow>
                  <p className="text-base text-cream/80">{company.sellingAgent}</p>
                </div>

                <div className="rounded-2xl border border-line bg-night-700/20 p-7">
                  <p className="label mb-2 text-cream/45">Brochure</p>
                  <p className="mb-5 text-sm leading-relaxed text-cream/65">
                    Full pricing, payment plans, and project detail for The Woods, Ogango.
                  </p>
                  <a
                    href={company.brochure.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-night transition-colors hover:bg-cream"
                  >
                    View Brochure ↗
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
