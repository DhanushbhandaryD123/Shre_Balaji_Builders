export interface PageMeta {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
}

export const SEO_DATA: Record<string, PageMeta> = {
  home: {
    title: 'Balaji Bentota | Luxury 2 & 3 BHK Apartments in Indrali, Kunjibettu, Udupi',
    description: 'Discover Balaji Bentota by Shri Balaji Builders & Developers. Premium 2 & 3 BHK residential apartments on Indrali Railway Station Road, Kunjibettu, Udupi. A-class construction, automatic lift, generator backup.',
    keywords: 'Balaji Bentota, Apartments in Udupi, 2 BHK in Indrali, 3 BHK in Kunjibettu, Flats for sale in Udupi, Shri Balaji Builders & Developers',
    ogImage: '/assets/elevation-luxury.jpg',
  },
  about: {
    title: 'About Us | Shri Balaji Builders & Developers & A.G. Associates Udupi',
    description: 'Learn about Shri Balaji Builders & Developers and architectural consultant A.G. Associates (ISO 9001:2015 certified). Decades of crafting landmark residential communities in Udupi.',
    keywords: 'Shri Balaji Builders Udupi, A.G. Associates Architects, ISO 9001:2015 Udupi, Builder story, Residential developers Udupi',
    ogImage: '/assets/brochure-cover.jpg',
  },
  project: {
    title: 'Project Details & Floor Plans | Balaji Bentota Udupi (2 & 3 BHK)',
    description: 'Explore Balaji Bentota unit mix (1304–1595 sq.ft), architectural floor plans, typical floor blueprint, specifications, and 8 amenities. Indrali Railway Station Road, Udupi.',
    keywords: 'Balaji Bentota floor plan, 2 BHK floor plan Udupi, 3 BHK floor plan Indrali, Unit mix Balaji Bentota, Area statements Udupi',
    ogImage: '/assets/typical-floor-plan.png',
  },
  gallery: {
    title: 'Photo Gallery & Architectural Renders | Balaji Bentota Udupi',
    description: 'View elevation renders, blueprints, floor plans, and concept visualizations for Balaji Bentota premium apartments in Kunjibettu, Udupi.',
    keywords: 'Balaji Bentota gallery, Balaji Bentota photos, Apartment elevation Udupi, Floor plan images Udupi',
    ogImage: '/assets/elevation-luxury.jpg',
  },
  contact: {
    title: 'Contact & Booking Desk | Balaji Bentota Udupi (9740763625)',
    description: 'Book your dream 2 or 3 BHK apartment at Balaji Bentota. Direct booking contacts: 9740763625 / 8660576288 / 7795716581. Site address: Indrali Railway Station Road, Kunjibettu, Udupi.',
    keywords: 'Balaji Bentota booking, Shri Balaji contact number, Apartments in Kunjibettu enquiry, Site visit Indrali Udupi',
    ogImage: '/assets/elevation-luxury.jpg',
  },
}
