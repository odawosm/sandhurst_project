// Project data. The Woods, Ogango is the flagship, the blueprint for "The Gold Standard".
// Sourced from The-Woods-Ogango.pdf.

export const projects = [
  {
    slug: "the-woods-ogango",
    name: "The Woods, Ogango",
    location: "Ogango, Kisumu",
    region: "Kenya",
    status: "Booking Now",
    statusKind: "live", // live | pipeline
    year: "2026",
    // Hero plays a lightweight muted autoplay loop; full walkthrough lives in the gallery.
    heroVideo: "/projects/the-woods-ogango/short-walkthrough.mp4",
    cardImage: "/projects/the-woods-ogango/woods-exterior-arrival.jpg",
    summary:
      "A signature investment property in the burgeoning suburb of Ogango, Kisumu: 30 luxury studios plus an integrated commercial store, combining luxury living with commercial convenience.",
    intro:
      "The Woods is the blueprint for the Sandhurst standard: sophisticated architectural design meets functional urban living, engineered for superior investor returns and an elevated resident lifestyle. Designed for the modern urbanite, it pairs suburban tranquility with genuine urban accessibility.",

    composition: [
      { value: "30", label: "Luxury Studios" },
      { value: "1", label: "Integrated Commercial Store" },
    ],

    // Walkthrough video (featured first in the gallery). Web-optimized MP4 with poster.
    video: {
      src: "/projects/the-woods-ogango/woods.mp4",
      poster: "/projects/the-woods-ogango/woods-poster.jpg",
      alt: "The Woods, Ogango — project walkthrough video",
    },

    gallery: [
      { src: "/projects/the-woods-ogango/woods-exterior-aerial.jpg", tag: "Rooftop Aerial", alt: "Aerial view of The Woods showing the rooftop social lounge" },
      { src: "/projects/the-woods-ogango/woods-exterior-front.jpg", tag: "Front Elevation", alt: "Front elevation of The Woods, Ogango" },
      { src: "/projects/the-woods-ogango/woods-exterior-arrival.jpg", tag: "Arrival at Dusk", alt: "The Woods gated street entrance lit at dusk" },
      { src: "/projects/the-woods-ogango/woods-parking.jpg", tag: "Covered Parking", alt: "Covered tenant and visitor parking at The Woods" },
      { src: "/projects/the-woods-ogango/woods-studio.jpg", tag: "Luxury Studio", alt: "Open-plan luxury studio with living and sleeping zones" },
      { src: "/projects/the-woods-ogango/woods-living.jpg", tag: "Living Space", alt: "Studio living area with designer TV wall and fittings" },
      { src: "/projects/the-woods-ogango/woods-kitchen.jpg", tag: "Designer Kitchen", alt: "Designer kitchen with marble counters and premium finishes" },
      { src: "/projects/the-woods-ogango/woods-entrance.jpg", tag: "Studio Entrance", alt: "Studio entrance hallway with feature wall" },
      { src: "/projects/the-woods-ogango/woods-bathroom.jpg", tag: "Bathroom", alt: "Modern bathroom with walk-in shower and premium fixtures" },
      { src: "/projects/the-woods-ogango/woods-exterior-garden.jpg", tag: "Garden Elevation", alt: "Garden-side elevation of The Woods among mature trees" },
    ],

    // Studio specification highlights
    specs: [
      {
        title: "Layout",
        body: "Open-plan living with optimized spatial flow, high-end finishes, and expansive windows for natural light.",
      },
      {
        title: "Interiors",
        body: "Designer kitchen fittings, premium ceramic tiling, bespoke wardrobes, and modern bathroom fixtures.",
      },
      {
        title: "Water & Utilities",
        body: "A massive underground water storage tank ensures 24/7 supply, with energy-efficient lighting throughout the common areas.",
      },
    ],

    // Lifestyle & amenities
    amenities: [
      { title: "Rooftop Lounge", body: "A signature social space to unwind with panoramic views of the Kisumu landscape." },
      { title: "Outdoor Spaces", body: "Professionally landscaped greenery, picnic tables, swing chairs, and barbecue pavilion." },
      { title: "Covered Parking", body: "Ample covered parking provided for both tenants and visitors." },
      { title: "Mini Mart", body: "An integrated commercial store bringing everyday convenience on-site." },
      { title: "CCTV Surveillance", body: "CCTV-ready infrastructure and gated access control throughout." },
      { title: "Underground Reservoir", body: "Large-scale underground water storage with rainwater harvesting." },
    ],

    // Visual proof points shown alongside the amenities grid.
    amenityHighlights: [
      { src: "/projects/the-woods-ogango/woods-exterior-aerial.jpg", caption: "Rooftop social lounge & landscaped grounds" },
      { src: "/projects/the-woods-ogango/woods-parking.jpg", caption: "Covered tenant & visitor parking" },
    ],

    // Location & connectivity
    location_features: [
      { title: "Connectivity", body: "Easy access to the Kisumu-Nairobi Highway and minutes from Kisumu International Airport." },
      { title: "Healthcare", body: "Minutes from Aga Khan Hospital, Avenue Hospital, and Kisumu Specialists Hospital." },
      { title: "Education", body: "Close to universities and colleges within Kisumu, ideal for student tenants." },
      { title: "Retail", body: "Near major retail centres, offering everyday convenience to residents." },
    ],

    // Security & sustainability
    security: [
      { title: "Security Suite", body: "24/7 uniformed security, CCTV-ready infrastructure, gated access control, and comprehensive fire safety systems." },
      { title: "Eco-Features", body: "Rainwater harvesting integrated with the underground tank, plus energy-efficient systems to reduce the building's carbon footprint." },
    ],

    // Construction progress. Update a phase's status as work advances
    // ("complete" | "current" | "upcoming") and bump `updated` when you do.
    progress: {
      updated: "July 2026",
      phases: [
        { label: "NEMA & Statutory Approvals", status: "complete" },
        { label: "Groundworks & Foundation", status: "current" },
        { label: "Structure", status: "upcoming" },
        { label: "Roofing & Envelope", status: "upcoming" },
        { label: "Interiors & Finishes", status: "upcoming" },
        { label: "Handover", status: "upcoming" },
      ],
    },

    // Investment, pricing & timeline
    investment: {
      price: "From Kes 2.65M",
      deposit: "Kes 750,000 booking deposit",
      plan: "Flexible construction-linked payment plans; final balance due on possession.",
      start: "Construction starts April 2026",
      completion: "Estimated 12 months to completion",
    },

    // Project team
    team: [
      { role: "Developer", name: "Sandhurst Projects Ltd." },
      { role: "Architect", name: "Platzarch[k] Ltd" },
      { role: "Contractor", name: "Eleven Contractors" },
      { role: "Services Engineers", name: "Dalia Consortium" },
      { role: "Structural Engineer", name: "Necent Consulting Engineers" },
      { role: "Legal", name: "Neto & Company Advocates" },
      { role: "Selling Agent", name: "The Willow Tree Realty" },
    ],

    // Per-project brochure download (served from /public/brochure)
    brochure: {
      href: "/brochure/the-woods-ogango.pdf",
      filename: "The-Woods-Ogango-Brochure.pdf",
    },

    // Architectural elevation renders, offered as a separate download.
    elevations: {
      href: "/brochure/the-woods-ogango-elevations.pdf",
      filename: "The-Woods-Ogango-Elevations.pdf",
    },
  },
];

// Future pipeline placeholders (intentionally light, "Coming Soon").
export const pipeline = [
  { name: "East Africa Expansion", location: "Regional", status: "In Planning" },
  { name: "Continental Pipeline", location: "Pan-African", status: "Future" },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}
