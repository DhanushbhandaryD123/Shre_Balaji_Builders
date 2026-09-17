export interface SiteSettings {
  siteName: string
  tagline: string
  logoUrl?: string
  phoneNumbers: string[]
  whatsappNumber: string
  email: string
  officeAddress: string
  projectAddress: string
  googleMapsEmbedUrl: string
  socialLinks?: {
    facebook?: string
    instagram?: string
    youtube?: string
  }
  defaultSeoTitle: string
  defaultSeoDescription: string
}

export interface HeroSection {
  headline: string
  subheadline: string
  quoteLine: string
  ctaLabel: string
  heroVideoUrl?: string
  heroImageUrl: string
  fallbackToKenBurns: boolean
}

export interface AboutSection {
  builderStoryHtml?: string
  visionStatement: string
  consultantName: string
  consultantCredentials: string
  trackRecordPoints: string[]
}

export interface Unit {
  _id?: string
  flatNumber: string
  bhkType: '2BHK' | '3BHK'
  sba: number // Super Built-up Area in sq.ft
  floor: 'First' | 'Typical' | 'All'
  price?: string
  status?: 'available' | 'fast_selling' | 'sold'
}

export interface FloorPlan {
  _id?: string
  floorName: string
  slug?: string
  planImageUrl: string
  totalFloorArea: number
  description?: string
  relatedUnits?: Unit[]
}

export interface Specification {
  _id?: string
  label: string
  description: string
  iconName?: string
  sortOrder: number
}

export interface Amenity {
  _id?: string
  label: string
  description?: string
  iconName: string
  iconUrl?: string
  featured: boolean
  sortOrder: number
}

export interface GalleryImage {
  _id?: string
  title?: string
  imageUrl: string
  category: 'exterior' | 'interior' | 'floorplan' | 'construction'
  caption?: string
  sortOrder: number
}

export interface Testimonial {
  _id?: string
  name: string
  roleOrLocation?: string
  quote: string
  avatarUrl?: string
}

export interface EnquiryPayload {
  name: string
  phone: string
  email?: string
  unitInterest?: string
  message?: string
  siteVisitRequested: boolean
}
