// Central site/company configuration — single source of truth for nav, contact, brand copy.
// Company facts sourced from The-Woods-Ogango.pdf and companyprofile.txt.

export const company = {
  name: "Sandhurst Projects Ltd.",
  shortName: "Sandhurst",
  tagline: "Built Strong. Living Elevated.",
  category: "Real Estate Development",
  description:
    "A boutique luxury real estate developer creating high-value, high-specification assets across Africa — built on architectural innovation, structural integrity, and investor profitability.",
  url: "https://www.sandhurstprojectsltd.com",
  email: "hello@sandhurstprojectsltd.com",
  phone: { display: "+254 742 366 747", href: "tel:+254742366747" },
  address: {
    lines: [
      "Sandhurst Projects Ltd, Mbugani Estate",
      "Popo Road, South C, Nairobi",
      "P.O. Box 103333 — 00101",
    ],
  },
  sellingAgent: "The Willow Tree Realty",
  social: {
    instagram: "https://instagram.com/sandhurstprojects",
  },
  mission:
    "To lead the transformation of urban landscapes across Africa by developing functional, high-specification properties that empower investors and provide tenants with secure, sophisticated, and reliable spaces.",
  vision:
    "To be the preeminent real estate developer across Kenya, East Africa, and the African continent, setting the gold standard for luxury investment and architectural excellence in every major African hub.",
  // Downloadable company brochure (served from /public/brochure)
  brochure: {
    href: "/brochure/the-woods-ogango.pdf",
    label: "Download Brochure",
    filename: "Sandhurst-The-Woods-Ogango.pdf",
  },
};

export const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Investors", href: "/investors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// The four brand pillars (from the company profile).
export const pillars = [
  {
    no: "01",
    title: "Investment Intelligence",
    body: "We identify high-growth areas and develop properties engineered for high-yield rental income and capital appreciation.",
  },
  {
    no: "02",
    title: "Modern Luxury",
    body: "Lifestyle-centric features — rooftop social zones, premium studio layouts — built for the modern professional.",
  },
  {
    no: "03",
    title: "Structural Reliability",
    body: "Essential infrastructure first: large-scale underground water storage and CCTV-ready security for long-term viability.",
  },
  {
    no: "04",
    title: "Scalable Vision",
    body: "Rooted in Kenya, our operational model is designed for seamless expansion across East Africa and the continent.",
  },
];

export const stats = [
  { value: "30+", label: "Luxury Units" },
  { value: "Kes 2.4M", label: "Entry Price" },
  { value: "12 mo", label: "To Completion" },
  { value: "Africa", label: "Growth Pipeline" },
];
