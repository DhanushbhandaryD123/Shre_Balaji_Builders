import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import {
  SiteSettings,
  HeroSection,
  AboutSection,
  Unit,
  FloorPlan,
  Specification,
  Amenity,
  GalleryImage,
  Testimonial,
} from '../types'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || ''
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01'

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null

export function urlFor(source: any) {
  if (!builder || !source) return ''
  return builder.image(source).auto('format').fit('max').url()
}

/* =========================================================================
   AUTHENTIC SEED & DEFAULT BROCHURE DATA
   Extracted verbatim from the official Balaji Bentota architectural brochure
   ========================================================================= */

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  siteName: 'Shri Balaji Builders & Developers',
  tagline: 'Transforming Ideas Into Landmark',
  logoUrl: '/assets/balaji-logo.svg',
  phoneNumbers: ['9740763625', '8660576288', '7795716581'],
  whatsappNumber: '919740763625',
  email: 'info@balajibentota.com',
  officeAddress: '"Shri Balaji", Udyavara, Udupi Dist., Karnataka, India',
  projectAddress: 'Balaji Bentota, Indrali Railway Station Road, Kunjibettu, Udupi – 576102, Karnataka',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.203875560965!2d74.76189537508383!3d13.337637887012588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4bb21a719ab%3A0xe7c4ec2646c2efaa!2sIndrali%20Railway%20Station!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
  socialLinks: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
  defaultSeoTitle: 'Balaji Bentota | Luxury 2 & 3 BHK Apartments in Indrali, Kunjibettu, Udupi',
  defaultSeoDescription:
    'Balaji Bentota by Shri Balaji Builders & Developers offers premium 2 & 3 BHK apartments on Indrali Railway Station Road, Kunjibettu, Udupi. A-class construction, automatic lift, generator backup.',
}

export const DEFAULT_HERO_SECTION: HeroSection = {
  headline: 'A Landmark For Your Legacy',
  subheadline: 'Premium 2 & 3 BHK Residential Apartments located at Indrali Railway Station Road, Kunjibettu, Udupi – 576102',
  quoteLine: '“Transforming ideas into Landmark with uncompromising engineering and coastal grace.”',
  ctaLabel: 'Enquire For Booking',
  heroImageUrl: '/assets/elevation-luxury.jpg',
  fallbackToKenBurns: true,
}

export const DEFAULT_ABOUT_SECTION: AboutSection = {
  builderStoryHtml:
    'Shri Balaji Builders & Developers is driven by an unwavering dedication to creating enduring, prestigious residential communities across Udupi and coastal Karnataka. With decades of regional expertise, we unite structural integrity, Vastu-compliant architecture, and forward-thinking engineering to craft homes where generations thrive.',
  visionStatement:
    'To sculpt timeless residential addresses across coastal Karnataka that harmonize structural excellence, Vastu harmony, and enduring community pride.',
  consultantName: 'A.G. Associates',
  consultantCredentials:
    'Architects, Engineers, Town Planners & Valuers — ISO 9001:2015 Certified Organization. Located at AGA Kantilever, Udupi. Official website: agaudupi.com',
  trackRecordPoints: [
    'A-Class waterproof structural RCC frame construction engineered for coastal weather durability.',
    'Prime proximity to Indrali Railway Station, Manipal University hub, temples, and national highways.',
    'Comprehensive statutory clearances, clear freehold title, and municipal approvals.',
    'Thoughtfully planned cross-ventilation, abundant daylight, and 8-passenger automatic elevator with battery backup.',
  ],
}

export const DEFAULT_UNITS: Unit[] = [
  {
    _id: 'unit-1',
    flatNumber: 'Flat 001',
    bhkType: '3BHK',
    sba: 1565.0,
    floor: 'Typical',
    price: 'Enquire for Price',
    status: 'fast_selling',
  },
  {
    _id: 'unit-2',
    flatNumber: 'Flat 002',
    bhkType: '2BHK',
    sba: 1340.0,
    floor: 'Typical',
    price: 'Enquire for Price',
    status: 'available',
  },
  {
    _id: 'unit-3',
    flatNumber: 'Flat 003',
    bhkType: '3BHK',
    sba: 1595.0,
    floor: 'Typical',
    price: 'Enquire for Price',
    status: 'fast_selling',
  },
  {
    _id: 'unit-4',
    flatNumber: 'Flat 001 (First Floor)',
    bhkType: '3BHK',
    sba: 1540.0,
    floor: 'First',
    price: 'Enquire for Price',
    status: 'available',
  },
  {
    _id: 'unit-5',
    flatNumber: 'Flat 002 (First Floor)',
    bhkType: '2BHK',
    sba: 1305.0,
    floor: 'First',
    price: 'Enquire for Price',
    status: 'available',
  },
  {
    _id: 'unit-6',
    flatNumber: 'Flat 003 (First Floor)',
    bhkType: '3BHK',
    sba: 1560.0,
    floor: 'First',
    price: 'Enquire for Price',
    status: 'available',
  },
]

export const DEFAULT_FLOOR_PLANS: FloorPlan[] = [
  {
    _id: 'fp-typical',
    floorName: 'Typical Floor Plan (2nd, 3rd, 4th Floors)',
    slug: 'typical-floor-plan',
    planImageUrl: '/assets/typical-floor-plan.png',
    totalFloorArea: 4500.0,
    description:
      'Features three spacious corner residences: Flat 001 (3 BHK - 1565 sq.ft), Flat 002 (2 BHK - 1340 sq.ft), and Flat 003 (3 BHK - 1595 sq.ft) with 6\'0" wide passage and independent private balconies.',
    relatedUnits: DEFAULT_UNITS.slice(0, 3),
  },
  {
    _id: 'fp-first',
    floorName: 'First Floor Plan',
    slug: 'first-floor-plan',
    planImageUrl: '/assets/brochure-spread.png',
    totalFloorArea: 4405.0,
    description:
      'First floor residential configuration featuring Flat 001 (3 BHK - 1540 sq.ft), Flat 002 (2 BHK - 1305 sq.ft), and Flat 003 (3 BHK - 1560 sq.ft) directly above ground floor covered parking.',
    relatedUnits: DEFAULT_UNITS.slice(3, 6),
  },
]

export const DEFAULT_SPECIFICATIONS: Specification[] = [
  {
    _id: 'spec-1',
    label: 'Structure & Finish',
    description: 'A-Class waterproof reinforced cement concrete (RCC) framed structure designed for high durability and seismic resistance.',
    iconName: 'ShieldCheck',
    sortOrder: 1,
  },
  {
    _id: 'spec-2',
    label: 'Flooring',
    description: 'Premium vitrified tile flooring for living, dining, bedrooms, and kitchen. Anti-skid ceramic tiles in bathrooms, utility, and balconies.',
    iconName: 'LayoutGrid',
    sortOrder: 2,
  },
  {
    _id: 'spec-3',
    label: 'Doors & Windows',
    description: 'Decorative teak-finish entrance door with brass fittings. Premium quality flush interior doors and powder-coated aluminium sliding windows with mosquito mesh.',
    iconName: 'DoorClosed',
    sortOrder: 3,
  },
  {
    _id: 'spec-4',
    label: 'Kitchen',
    description: 'Polished granite kitchen platform with stainless steel sink, glazed ceramic wall tiles up to 2 feet above platform, and plumbing for water purifier.',
    iconName: 'Utensils',
    sortOrder: 4,
  },
  {
    _id: 'spec-5',
    label: 'Bathrooms & Sanitary',
    description: 'Designer glazed wall tiles up to 7 feet height, concealed CPVC plumbing, premium branded sanitaryware, and top-tier chrome-plated fittings.',
    iconName: 'Bath',
    sortOrder: 5,
  },
  {
    _id: 'spec-6',
    label: 'Electrical',
    description: 'Concealed flame-retardant copper wiring with modular switches. Dedicated split AC power points in bedrooms and living area, TV/telephone conduits, and MCB protection.',
    iconName: 'Zap',
    sortOrder: 6,
  },
  {
    _id: 'spec-7',
    label: 'Elevator',
    description: 'High-speed 8-passenger automatic stainless-steel lift with Automatic Rescue Device (ARD) and emergency battery backup.',
    iconName: 'ArrowUpDown',
    sortOrder: 7,
  },
  {
    _id: 'spec-8',
    label: 'Ventilation & Privacy',
    description: 'Three-sided open design ensuring abundant natural daylight and breezy cross-ventilation with maximum visual privacy between apartments.',
    iconName: 'Wind',
    sortOrder: 8,
  },
]

export const DEFAULT_AMENITIES: Amenity[] = [
  {
    _id: 'am-1',
    label: 'Generator Backup',
    description: 'Uninterrupted power backup for common lighting, lift, water pumps, and apartment lighting points.',
    iconName: 'BatteryCharging',
    featured: true,
    sortOrder: 1,
  },
  {
    _id: 'am-2',
    label: 'Gas Pipeline Provision',
    description: 'Centralized and safe reticulated cooking gas pipeline connection directly to your kitchen.',
    iconName: 'Flame',
    featured: true,
    sortOrder: 2,
  },
  {
    _id: 'am-3',
    label: 'Interlock Paving',
    description: 'Heavy-duty interlock concrete paving for driveway, walkways, and visitor movement areas.',
    iconName: 'Grid',
    featured: true,
    sortOrder: 3,
  },
  {
    _id: 'am-4',
    label: '24×7 Ample Water Supply',
    description: 'Dual water supply network from municipal connection and high-yield borewell with automatic sensors.',
    iconName: 'Droplet',
    featured: true,
    sortOrder: 4,
  },
  {
    _id: 'am-5',
    label: 'Sump & Overhead Tanks',
    description: 'High-capacity underground RCC water sump paired with overhead storage tanks ensuring zero water disruption.',
    iconName: 'Database',
    featured: true,
    sortOrder: 5,
  },
  {
    _id: 'am-6',
    label: 'CCTV Security Surveillance',
    description: '24×7 digital surveillance cameras covering the main entrance, parking bays, lift lobbies, and boundary perimeter.',
    iconName: 'Video',
    featured: true,
    sortOrder: 6,
  },
  {
    _id: 'am-7',
    label: 'Covered Terrace Area',
    description: 'Spacious all-weather covered rooftop terrace for community gatherings, morning yoga, and serene evenings.',
    iconName: 'Umbrella',
    featured: true,
    sortOrder: 7,
  },
  {
    _id: 'am-8',
    label: '8-Passenger Automatic Lift',
    description: 'State-of-the-art automatic passenger elevator connecting parking to all residential floors.',
    iconName: 'ArrowUpDown',
    featured: true,
    sortOrder: 8,
  },
]

export const DEFAULT_GALLERY_IMAGES: GalleryImage[] = [
  {
    _id: 'gal-1',
    title: 'Balaji Bentota Front Elevation',
    imageUrl: '/assets/elevation-luxury.jpg',
    category: 'exterior',
    caption: 'Photorealistic architectural render showcasing contemporary G+4 facade, covered stilt car parking, and private corner balconies.',
    sortOrder: 1,
  },
  {
    _id: 'gal-2',
    title: 'Twilight Architectural View',
    imageUrl: '/assets/elevation-twilight-luxury.jpg',
    category: 'exterior',
    caption: 'Evening illumination showcasing facade lighting, lit apartment balconies, and covered parking bays against a sunset sky.',
    sortOrder: 2,
  },
  {
    _id: 'gal-3',
    title: 'Covered Rooftop Terrace Amenity',
    imageUrl: '/assets/terrace-amenity-luxury.jpg',
    category: 'exterior',
    caption: 'All-weather covered pergola rooftop lounge with panoramic sunset vistas over Udupi and lush coastal greenery.',
    sortOrder: 3,
  },
  {
    _id: 'gal-4',
    title: 'Luxury Living & Dining Room',
    imageUrl: '/assets/living-dining-luxury.jpg',
    category: 'interior',
    caption: 'Expansive living and dining hall with vitrified tile flooring, warm cove ceiling lighting, and sliding glass balcony doors.',
    sortOrder: 4,
  },
  {
    _id: 'gal-5',
    title: 'Master Bedroom with Balcony',
    imageUrl: '/assets/master-bedroom-luxury.jpg',
    category: 'interior',
    caption: 'Peaceful master suite with corner window vistas, split AC electrical provision, and attached private balcony.',
    sortOrder: 5,
  },
  {
    _id: 'gal-6',
    title: 'Modular Kitchen & Utility Area',
    imageUrl: '/assets/kitchen-utility-luxury.jpg',
    category: 'interior',
    caption: 'Polished granite countertops with reticulated gas pipeline connection, stainless steel sink, and attached utility balcony.',
    sortOrder: 6,
  },
  {
    _id: 'gal-7',
    title: 'Designer Bathroom & Sanitary',
    imageUrl: '/assets/bathroom-designer-luxury.jpg',
    category: 'interior',
    caption: 'Designer wall tiles up to 7ft, concealed CPVC plumbing, walk-in glass shower enclosure, rain shower, and floating quartz vanity.',
    sortOrder: 7,
  },
  {
    _id: 'gal-8',
    title: 'Entrance Lobby & Automatic Elevator',
    imageUrl: '/assets/elevator-lobby-luxury.jpg',
    category: 'interior',
    caption: 'Prestigious reception lobby with Italian marble flooring, 8-passenger automatic elevator, and CCTV security monitors.',
    sortOrder: 8,
  },
  {
    _id: 'gal-9',
    title: 'A-Class Structural Construction',
    imageUrl: '/assets/construction-progress-luxury.jpg',
    category: 'construction',
    caption: 'Active site engineering showing heavy reinforced concrete RCC columns and beam framework engineered by A.G. Associates.',
    sortOrder: 9,
  },
  {
    _id: 'gal-10',
    title: 'Typical Floor Plan Blueprint',
    imageUrl: '/assets/typical-floor-plan.png',
    category: 'floorplan',
    caption: 'Architectural blueprint drafted by A.G. Associates showing 2 & 3 BHK layout, passage, and room dimensions.',
    sortOrder: 10,
  },
]

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    _id: 'test-1',
    name: 'K. Ramesh Rao',
    roleOrLocation: 'Udupi Resident & Investor',
    quote:
      'Shri Balaji Builders has a stellar reputation for delivering what they promise. Balaji Bentota’s location near Indrali Railway station and Kunjibettu makes it an unbeatable investment in Udupi.',
  },
  {
    _id: 'test-2',
    name: 'Pradeep Shetty',
    roleOrLocation: 'NRI Homebuyer, Dubai',
    quote:
      'The floor plan layouts designed by A.G. Associates are so well ventilated. Every bedroom has private light and air. The builder has been transparent with all documentation from day one.',
  },
]

/* =========================================================================
   GROQ QUERY HELPERS WITH FALLBACKS
   ========================================================================= */

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!sanityClient) return DEFAULT_SITE_SETTINGS
  try {
    const data = await sanityClient.fetch(`*[_type == "siteSettings"][0]`)
    return data || DEFAULT_SITE_SETTINGS
  } catch (err) {
    console.warn('Using default site settings:', err)
    return DEFAULT_SITE_SETTINGS
  }
}

export async function getHeroSection(): Promise<HeroSection> {
  if (!sanityClient) return DEFAULT_HERO_SECTION
  try {
    const data = await sanityClient.fetch(`*[_type == "heroSection"][0]`)
    return data || DEFAULT_HERO_SECTION
  } catch (err) {
    return DEFAULT_HERO_SECTION
  }
}

export async function getAboutSection(): Promise<AboutSection> {
  if (!sanityClient) return DEFAULT_ABOUT_SECTION
  try {
    const data = await sanityClient.fetch(`*[_type == "aboutSection"][0]`)
    return data || DEFAULT_ABOUT_SECTION
  } catch (err) {
    return DEFAULT_ABOUT_SECTION
  }
}

export async function getUnits(): Promise<Unit[]> {
  if (!sanityClient) return DEFAULT_UNITS
  try {
    const data = await sanityClient.fetch(`*[_type == "unit"] | order(flatNumber asc)`)
    return data?.length ? data : DEFAULT_UNITS
  } catch (err) {
    return DEFAULT_UNITS
  }
}

export async function getFloorPlans(): Promise<FloorPlan[]> {
  if (!sanityClient) return DEFAULT_FLOOR_PLANS
  try {
    const data = await sanityClient.fetch(`*[_type == "floorPlan"] | order(_createdAt asc)`)
    return data?.length ? data : DEFAULT_FLOOR_PLANS
  } catch (err) {
    return DEFAULT_FLOOR_PLANS
  }
}

export async function getSpecifications(): Promise<Specification[]> {
  if (!sanityClient) return DEFAULT_SPECIFICATIONS
  try {
    const data = await sanityClient.fetch(`*[_type == "specification"] | order(sortOrder asc)`)
    return data?.length ? data : DEFAULT_SPECIFICATIONS
  } catch (err) {
    return DEFAULT_SPECIFICATIONS
  }
}

export async function getAmenities(): Promise<Amenity[]> {
  if (!sanityClient) return DEFAULT_AMENITIES
  try {
    const data = await sanityClient.fetch(`*[_type == "amenity"] | order(sortOrder asc)`)
    return data?.length ? data : DEFAULT_AMENITIES
  } catch (err) {
    return DEFAULT_AMENITIES
  }
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  if (!sanityClient) return DEFAULT_GALLERY_IMAGES
  try {
    const data = await sanityClient.fetch(`*[_type == "galleryImage"] | order(sortOrder asc)`)
    return data?.length ? data : DEFAULT_GALLERY_IMAGES
  } catch (err) {
    return DEFAULT_GALLERY_IMAGES
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!sanityClient) return DEFAULT_TESTIMONIALS
  try {
    const data = await sanityClient.fetch(`*[_type == "testimonial"]`)
    return data?.length ? data : DEFAULT_TESTIMONIALS
  } catch (err) {
    return DEFAULT_TESTIMONIALS
  }
}
