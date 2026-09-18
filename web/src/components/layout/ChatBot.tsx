import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Phone,
  ArrowRight,
  RotateCcw,
  Building2,
  CheckCircle2,
} from 'lucide-react'

interface Message {
  id: string
  sender: 'bot' | 'user'
  text: string
  quickReplies?: string[]
  linkCta?: {
    label: string
    url: string
    isExternal?: boolean
  }
  time: string
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'bot',
    text: 'Namaste! Welcome to Shri Balaji Builders & Developers. I am your Balaji Bentota Virtual Concierge.\n\nAsk me anything about apartment sizes, pricing, site visits, or amenities. How can I assist you today?',
    quickReplies: [
      '🏡 2 & 3 BHK Apartment Sizes',
      '💰 Pricing & Bank Loans',
      '📍 Location & Connectivity',
      '✨ Amenities & Facilities',
      '📅 Schedule In-Person Site Visit',
      '📜 Approvals & Vastu Compliance',
    ],
    time: 'Just now',
  },
]

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasUnread, setHasUnread] = useState(true)
  const [showNotificationBubble, setShowNotificationBubble] = useState(false)
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto scroll to latest message or typing indicator
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isTyping, isOpen])

  // Show friendly notification pill after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowNotificationBubble(true)
      }
    }, 3500)
    return () => clearTimeout(timer)
  }, [isOpen])

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false)
      setShowNotificationBubble(false)
      setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
    }
  }, [isOpen])

  const getCurrentTime = () => {
    const now = new Date()
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  // Comprehensive Knowledge Engine covering numerous buyer questions & intent categories
  const generateBotReply = (userQuery: string): {
    text: string
    quickReplies?: string[]
    linkCta?: { label: string; url: string; isExternal?: boolean }
  } => {
    const q = userQuery.toLowerCase().trim()

    // 1. GREETINGS & CASUAL HELLOS
    if (
      q === 'hi' ||
      q === 'hello' ||
      q === 'hey' ||
      q.startsWith('namaste') ||
      q.includes('good morning') ||
      q.includes('good evening') ||
      q.includes('good afternoon')
    ) {
      return {
        text: 'Hello & Welcome! Great to have you here. I can help you with floor plans, unit dimensions, pricing sheets, amenities, and scheduling a site tour at Indrali, Udupi.\n\nWhat would you like to explore first?',
        quickReplies: [
          '🏡 2 & 3 BHK Unit Sizes',
          '💰 Price & Payment Plans',
          '📍 Exact Site Location',
          '📅 Book Free Site Visit',
        ],
        linkCta: {
          label: 'Explore Project Overview',
          url: '/project',
        },
      }
    }

    // 2. PRICING OF FLATS, ROOMS, 2/3 BHK & QUOTATIONS (PRIORITY CHECK)
    if (
      q.includes('price') ||
      q.includes('cost') ||
      q.includes('rate') ||
      q.includes('budget') ||
      q.includes('how much') ||
      q.includes('quote') ||
      q.includes('quotation') ||
      q.includes('per sqft') ||
      q.includes('sq.ft rate') ||
      q.includes('booking amount') ||
      q.includes('token') ||
      q.includes('discount') ||
      q.includes('offer')
    ) {
      return {
        text: 'To get the official price and floor-wise quotation for the flats and rooms at Balaji Bentota, please contact our sales team directly:\n\n📞 Primary Sales Hotline: +91 9740763625\n📞 Alternative Line: +91 8660576288\n📞 Desk Line: +91 7795716581\n💬 WhatsApp: +91 9740763625\n\nOur team will share the complete floor-wise price breakdown, installment payment schedules, and current booking offers with you immediately!',
        quickReplies: [
          '📞 Call +91 9740763625',
          '💬 WhatsApp for Price Sheet',
          '📅 Book Free Site Visit',
          '🏦 Bank Loan Assistance',
        ],
        linkCta: {
          label: 'Call Sales Team (+91 9740763625)',
          url: 'tel:+919740763625',
          isExternal: true,
        },
      }
    }

    // 3. SPECIFIC FLATS: FLAT 001, 002, 003
    if (
      q.includes('flat 001') ||
      q.includes('flat 1') ||
      q.includes('flat 002') ||
      q.includes('flat 2') ||
      q.includes('flat 003') ||
      q.includes('flat 3') ||
      q.includes('typical floor') ||
      q.includes('first floor')
    ) {
      return {
        text: 'Balaji Bentota has 3 distinct corner residence layouts per residential floor:\n\n• Flat 001 (3 BHK): 1565 sq.ft (Typical) & 1540 sq.ft (1st Floor) — 3 bedrooms, 3 baths, dual balconies.\n• Flat 002 (2 BHK): 1340 sq.ft (Typical) & 1305 sq.ft (1st Floor) — 2 bedrooms, 2 baths, 21\'0" living hall, 2 balconies.\n• Flat 003 (3 BHK): 1595 sq.ft (Typical) & 1560 sq.ft (1st Floor) — Largest 3 BHK with master suite, dining room & cross-ventilation.\n\nEvery flat is a corner unit with three-sided open exposure!',
        quickReplies: [
          '📐 View Floor Plan Blueprints',
          '💰 Request Unit Price Quote',
          '📅 Book Site Inspection',
        ],
        linkCta: {
          label: 'View Full Blueprint Drawings',
          url: '/project',
        },
      }
    }

    // 4. 2 BHK APARTMENT INQUIRIES
    if (q.includes('2 bhk') || q.includes('2bhk') || q.includes('2 bedroom')) {
      return {
        text: 'Balaji Bentota 2 BHK Luxury Residences (Flat 002):\n\n• Super Built-up Area: 1340 sq.ft (Typical Floor) & 1305 sq.ft (First Floor)\n• Living & Dining Hall: Expansive 21\'0" × 11\'3" with attached private balcony\n• Master Bedroom: Attached designer bathroom & corner window vistas\n• Guest Bedroom: Cross-ventilated with common bathroom access\n• Kitchen: Granite counter with reticulated LPG gas & 4\'6" wide utility balcony\n• Orientation: 100% Vastu compliant corner home.',
        quickReplies: [
          '💰 2 BHK Pricing Quote',
          '🏡 What about 3 BHK?',
          '📐 Download 2 BHK Layout',
        ],
        linkCta: {
          label: 'Inspect 2 BHK Floor Plan',
          url: '/project',
        },
      }
    }

    // 5. 3 BHK APARTMENT INQUIRIES
    if (q.includes('3 bhk') || q.includes('3bhk') || q.includes('3 bedroom')) {
      return {
        text: 'Balaji Bentota 3 BHK Grand Corner Residences (Flat 001 & 003):\n\n• Super Built-up Area: 1540 to 1595 sq.ft\n• Living Room: Grand separate living hall with attached deep balcony\n• Dining Room: Independent dining space for family meals\n• 3 Full Bedrooms: Master suite + 2 restful bedrooms with optimal daylight\n• 3 Designer Bathrooms: Branded CP fittings, glazed tiles up to 7ft\n• Dual Balconies: Panoramic views and sea-breeze airflow\n• Kitchen + Utility: Granite counter, stainless sink, LPG line & utility wash.',
        quickReplies: [
          '💰 3 BHK Pricing Quote',
          '🏡 What about 2 BHK?',
          '📅 Schedule Site Tour',
        ],
        linkCta: {
          label: 'Inspect 3 BHK Floor Plan',
          url: '/project',
        },
      }
    }

    // 6. APARTMENT SIZES, CARPET AREA & DIMENSIONS
    if (
      q.includes('size') ||
      q.includes('dimension') ||
      q.includes('sq.ft') ||
      q.includes('sqft') ||
      q.includes('area') ||
      q.includes('carpet') ||
      q.includes('sba') ||
      q.includes('measurement')
    ) {
      return {
        text: 'Balaji Bentota Area Statements:\n\n• 2 BHK SBA: 1304.00 sq.ft to 1340.00 sq.ft\n• 3 BHK SBA: 1540.00 sq.ft to 1595.00 sq.ft\n• Total Project Area: 17,565 sq.ft across G+4 floors\n\nAll units feature maximum usable carpet efficiency with zero wasted corridor space, designed by A.G. Associates.',
        quickReplies: [
          '📐 View Detailed Blueprints',
          '💰 Price Per Sq.Ft',
          '📞 Talk to Sales Desk',
        ],
        linkCta: {
          label: 'View Unit Mix & SBA Table',
          url: '/project',
        },
      }
    }

    // 7. BANK LOANS, EMI, DOWN PAYMENT & APPROVALS
    if (
      q.includes('loan') ||
      q.includes('bank') ||
      q.includes('emi') ||
      q.includes('finance') ||
      q.includes('mortgage') ||
      q.includes('sbi') ||
      q.includes('hdfc') ||
      q.includes('canara') ||
      q.includes('installment') ||
      q.includes('payment plan') ||
      q.includes('token')
    ) {
      return {
        text: 'Home Loan & Financing Assistance:\n\n• Pre-approved property for fast loan sanctions with major banks (SBI, HDFC Bank, Canara Bank, Bank of Baroda, ICICI, etc.)\n• Up to 80% to 85% home loan eligibility subject to applicant credentials\n• Transparent construction-linked installment payment schedule\n• Complete legal title deed documentation provided for seamless bank appraisal.',
        quickReplies: [
          '💰 Request Payment Schedule',
          '📞 Speak with Loan Advisor',
          '📅 Book Site Visit',
        ],
        linkCta: {
          label: 'Speak to Builder on Financing',
          url: 'tel:+919740763625',
          isExternal: true,
        },
      }
    }

    // 8. LOCATION, ADDRESS, CONNECTIVITY & DISTANCES
    if (
      q.includes('location') ||
      q.includes('where') ||
      q.includes('address') ||
      q.includes('indrali') ||
      q.includes('kunjibettu') ||
      q.includes('station') ||
      q.includes('distance') ||
      q.includes('how far') ||
      q.includes('manipal') ||
      q.includes('kmc') ||
      q.includes('temple') ||
      q.includes('krishna') ||
      q.includes('highway') ||
      q.includes('malpe')
    ) {
      return {
        text: 'Strategic Prime Location:\nBalaji Bentota, Indrali Railway Station Road, Kunjibettu, Udupi – 576102, Karnataka.\n\nProximity & Travel Times:\n• Indrali Railway Station: 2 Minutes\n• Manipal University, KMC & MIT: 5 to 7 Minutes\n• Udupi Sri Krishna Temple & Car Street: 5 Minutes\n• Kunjibettu Main Junction: 1 Minute\n• City Bus Stand & Service Bus Stand: 5 Minutes\n• Malpe Beach: 15 Minutes\n• Direct access to NH-169A highway.',
        quickReplies: [
          '🗺️ Open Google Maps',
          '📅 Plan Site Visit',
          '🏡 Explore Apartments',
        ],
        linkCta: {
          label: 'View Map & Location Guide',
          url: '/contact',
        },
      }
    }

    // 9. AMENITIES & RESIDENTIAL FACILITIES
    if (
      q.includes('amenit') ||
      q.includes('facilit') ||
      q.includes('lift') ||
      q.includes('elevator') ||
      q.includes('generator') ||
      q.includes('power backup') ||
      q.includes('water') ||
      q.includes('parking') ||
      q.includes('cctv') ||
      q.includes('security') ||
      q.includes('gas') ||
      q.includes('terrace')
    ) {
      return {
        text: 'Balaji Bentota Modern Amenities & Infrastructure:\n\n1. 8-Passenger Automatic SS Lift: Silent operation with Automatic Rescue Device (ARD) & battery backup.\n2. Automatic Generator Backup: 100% uninterrupted power for lift, pumps, and common lighting.\n3. Reticulated Gas Pipeline: Centralized LPG connected safely to your kitchen.\n4. 24×7 Ample Water: Municipal water connection + high-yield on-site deep borewell with large underground RCC sump & overhead tanks.\n5. CCTV Digital Surveillance: 24/7 security across gate, parking, and lobbies.\n6. Covered Ground Car Parking: Dedicated bays with wide driveway interlock paving.\n7. Covered Rooftop Terrace: All-weather pergola lounge for residents\' leisure.',
        quickReplies: [
          '✨ View Full Specifications',
          '🏡 Apartment Dimensions',
          '💰 Pricing Details',
        ],
        linkCta: {
          label: 'Explore Complete Amenities Grid',
          url: '/project',
        },
      }
    }

    // 10. VASTU COMPLIANCE, AIRFLOW & VENTILATION
    if (
      q.includes('vastu') ||
      q.includes('vaastu') ||
      q.includes('facing') ||
      q.includes('direction') ||
      q.includes('ventilation') ||
      q.includes('air') ||
      q.includes('sunlight')
    ) {
      return {
        text: 'Vastu & Architectural Harmony:\n\n• 100% Vastu Compliant layouts planned by renowned ISO 9001:2015 certified consultants A.G. Associates.\n• Main entrance doors, kitchen cooking platforms, and master bedroom orientations strictly adhere to positive Vastu principles.\n• Three-Sided Open Design: Corner apartments guarantee cross-ventilation, coastal breezes, natural lighting, and maximum privacy between neighbors.',
        quickReplies: [
          '📐 Check Floor Blueprints',
          '📍 Project Location',
          '📞 Call Builder Desk',
        ],
        linkCta: {
          label: 'Review Floor Plan Layouts',
          url: '/project',
        },
      }
    }

    // 11. CONSTRUCTION QUALITY, MATERIALS & SPECIFICATIONS
    if (
      q.includes('construction') ||
      q.includes('quality') ||
      q.includes('structure') ||
      q.includes('material') ||
      q.includes('door') ||
      q.includes('window') ||
      q.includes('tile') ||
      q.includes('flooring') ||
      q.includes('electrical') ||
      q.includes('rcc') ||
      q.includes('waterproof')
    ) {
      return {
        text: 'A-Class Premium Construction Specifications:\n\n• Structure: A-Class waterproof reinforced cement concrete (RCC) framed structure designed for high seismic & coastal resilience.\n• Flooring: Premium vitrified tiles for living, dining, and bedrooms; anti-skid ceramic tiles for bathrooms & balconies.\n• Doors & Windows: Decorative teak-finish entrance door; powder-coated aluminium sliding windows with mosquito mesh.\n• Kitchen: Polished granite countertop, stainless sink, glazed tile dado up to 2ft, and reticulated gas line.\n• Electrical: Concealed fire-retardant copper wiring, modular switches, split AC provisions in bedrooms & living area.',
        quickReplies: [
          '✨ Read All Specifications',
          '🏡 2 & 3 BHK Layouts',
          '📅 Book Site Inspection',
        ],
        linkCta: {
          label: 'See Detailed Technical Specs',
          url: '/project',
        },
      }
    }

    // 12. STATUTORY APPROVALS, RERA & LEGAL TITLE
    if (
      q.includes('rera') ||
      q.includes('approval') ||
      q.includes('sanction') ||
      q.includes('legal') ||
      q.includes('title') ||
      q.includes('freehold') ||
      q.includes('document') ||
      q.includes('municipal')
    ) {
      return {
        text: 'Clear Marketable Title & Statutory Approvals:\n\n• Municipal Approvals: Sanctioned building plan adhering to municipal town planning norms.\n• Town Planning & Structural Certification: Supervised by A.G. Associates (ISO 9001:2015 Certified).\n• Legal Title: 100% clear, unencumbered freehold land title.\n• Complete document scrutiny package available for buyer lawyers and bank appraisals.',
        quickReplies: [
          '📞 Request Legal Documents',
          '💬 WhatsApp Support',
          '🏡 Unit Floor Plans',
        ],
        linkCta: {
          label: 'Contact Legal & Booking Desk',
          url: '/contact',
        },
      }
    }

    // 13. POSSESSION, HANDOVER & CONSTRUCTION STATUS
    if (
      q.includes('possession') ||
      q.includes('handover') ||
      q.includes('completion') ||
      q.includes('ready') ||
      q.includes('status') ||
      q.includes('progress') ||
      q.includes('when') ||
      q.includes('timeline')
    ) {
      return {
        text: 'Construction Status & Handover:\n\n• Balaji Bentota is progressing on an active construction schedule adhering to strict quality benchmarks.\n• The modern G+4 RCC structural frame engineering is advancing smoothly.\n• Possession and handover timeline updates are communicated transparently with construction-linked payment milestones.\n\nYou are warmly invited to inspect the active construction progress at the site!',
        quickReplies: [
          '📅 Book Site Inspection',
          '📸 View Gallery Photos',
          '📞 Call Builder Desk',
        ],
        linkCta: {
          label: 'View Construction Gallery',
          url: '/gallery',
        },
      }
    }

    // 14. BUILDER & ARCHITECT BACKGROUND
    if (
      q.includes('builder') ||
      q.includes('developer') ||
      q.includes('who is') ||
      q.includes('shri balaji') ||
      q.includes('associates') ||
      q.includes('a.g') ||
      q.includes('architect') ||
      q.includes('track record')
    ) {
      return {
        text: 'About Shri Balaji Builders & Developers:\n\n• A trusted, premier residential builder in Udupi & coastal Karnataka, renowned for punctuality, structural integrity, and transparent dealings.\n• Tagline: "Transforming Ideas Into Landmark"\n• Registered Office: "Shri Balaji", Udyavara, Udupi Dist., Karnataka.\n\nArchitectural & Engineering Consultant:\n• Planned by A.G. Associates, ISO 9001:2015 Certified Architects, Engineers & Town Planners (AGA Kantilever, Udupi).',
        quickReplies: [
          '📜 Read Developer Legacy',
          '📍 Visit Registered Office',
          '🏡 View Project Units',
        ],
        linkCta: {
          label: 'Learn More About Us',
          url: '/about',
        },
      }
    }

    // 15. IN-PERSON SITE VISIT & SCHEDULING
    if (
      q.includes('visit') ||
      q.includes('site visit') ||
      q.includes('see') ||
      q.includes('inspect') ||
      q.includes('tour') ||
      q.includes('timing') ||
      q.includes('open') ||
      q.includes('sunday')
    ) {
      return {
        text: 'In-Person Site Visit Details:\n\n• Location: Balaji Bentota site on Indrali Railway Station Road, Kunjibettu, Udupi.\n• Timings: Our site desk is open 7 days a week (Monday to Sunday) from 9:30 AM to 6:30 PM.\n• Guided Walkthrough: A dedicated representative will guide you through the floor blueprints, corner unit orientations, and parking bays.\n\nWould you like us to arrange a visit today?',
        quickReplies: [
          '📞 Call +91 9740763625',
          '💬 Book via WhatsApp',
          '📍 Open Google Maps',
        ],
        linkCta: {
          label: 'Schedule Site Visit Form',
          url: '/contact',
        },
      }
    }

    // 16. CONTACT NUMBERS, WHATSAPP & HUMAN SUPPORT
    if (
      q.includes('contact') ||
      q.includes('call') ||
      q.includes('phone') ||
      q.includes('number') ||
      q.includes('whatsapp') ||
      q.includes('speak') ||
      q.includes('human') ||
      q.includes('agent') ||
      q.includes('email')
    ) {
      return {
        text: 'Direct Builder Contact Hotlines:\n\n📞 Phone 1: +91 9740763625\n📞 Phone 2: +91 8660576288\n📞 Phone 3: +91 7795716581\n✉️ Email: info@balajibentota.com\n\n💬 Official WhatsApp: Instant brochure, high-res floor plans, and pricing sent to your phone!',
        quickReplies: [
          '💬 Chat on WhatsApp Now',
          '📞 Direct Call to Desk',
          '📅 Book Site Inspection',
        ],
        linkCta: {
          label: 'Open WhatsApp Chat',
          url: 'https://wa.me/919740763625?text=Hello%20Shri%20Balaji%20Builders%2C%20I%20am%20interested%20in%20Balaji%20Bentota%20Apartments.',
          isExternal: true,
        },
      }
    }

    // 17. CUSTOMIZATION & INTERIOR MODIFICATIONS
    if (
      q.includes('customiz') ||
      q.includes('interior') ||
      q.includes('modify') ||
      q.includes('changes') ||
      q.includes('paint') ||
      q.includes('kitchen')
    ) {
      return {
        text: 'Customization & Personalization Options:\n\n• For early bookings, buyers can customize specific internal finishes such as vitrified tile colors, additional electrical points, air-conditioner plumbing, and modular kitchen layouts.\n• All modifications are coordinated directly with our on-site structural and civil engineering team.',
        quickReplies: [
          '📞 Speak with Civil Team',
          '🏡 View Standard Specs',
          '💰 Request Pricing',
        ],
        linkCta: {
          label: 'Enquire for Customization',
          url: '/contact',
        },
      }
    }

    // 18. THANK YOU & CLOSING
    if (
      q.includes('thank') ||
      q.includes('thanks') ||
      q.includes('bye') ||
      q.includes('goodbye') ||
      q === 'ok' ||
      q === 'okay' ||
      q === 'great' ||
      q === 'sure'
    ) {
      return {
        text: 'You are most welcome! It was a pleasure assisting you. Feel free to ask anytime or give our builder desk a call at +91 9740763625.\n\nHave a wonderful day and we hope to welcome you home to Balaji Bentota!',
        quickReplies: [
          '🏡 View Floor Plans Again',
          '📍 Site Location',
          '💬 Save WhatsApp Contact',
        ],
        linkCta: {
          label: 'Explore Balaji Bentota Gallery',
          url: '/gallery',
        },
      }
    }

    // DEFAULT COMPREHENSIVE FALLBACK
    return {
      text: `Thank you for your question! Here is what you should know about Balaji Bentota:\n\n• Boutique G+4 Residential Community located on Indrali Railway Station Road, Kunjibettu, Udupi.\n• Premium 2 & 3 BHK Corner Apartments (1304 to 1595 sq.ft) with 3-sided open cross ventilation & 100% Vastu.\n• Key Amenities: 8-Passenger Automatic Elevator, Generator Backup, Reticulated Gas Pipeline, 24×7 Dual Water Supply, Covered Car Parking & Rooftop Terrace.\n\nWould you like more details on any specific topic below?`,
      quickReplies: [
        '🏡 2 & 3 BHK Apartment Sizes',
        '💰 Pricing & Quotation',
        '📍 Project Location & Distances',
        '✨ Building Amenities',
        '📅 Book Free Site Visit',
        '📞 Call Builder: 9740763625',
      ],
      linkCta: {
        label: 'View Floor Plans & Specs',
        url: '/project',
      },
    }
  }

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || input).trim()
    if (!query) return

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: getCurrentTime(),
    }

    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    // EXACT 2-SECOND REALISTIC CONCIERGE TYPING DELAY
    setTimeout(() => {
      const botResponse = generateBotReply(query)
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse.text,
        quickReplies: botResponse.quickReplies,
        linkCta: botResponse.linkCta,
        time: getCurrentTime(),
      }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 2000)
  }

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES)
  }

  return (
    <aside aria-label="Balaji Bentota AI Assistant">
      {/* 1. Floating Notification Teaser Bubble (Bottom Right) */}
      {showNotificationBubble && !isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 bg-white text-navy px-4 py-3 rounded-2xl shadow-2xl border border-gold/30 max-w-[270px] cursor-pointer animate-in fade-in slide-in-from-bottom-3 duration-300 flex items-start gap-3 hover:scale-105 transition-transform group"
        >
          <div className="w-8 h-8 rounded-full bg-navy text-gold flex items-center justify-center shrink-0 shadow-md">
            <Sparkles className="w-4 h-4 text-gold animate-pulse" />
          </div>
          <div>
            <p className="text-xs font-bold text-navy group-hover:text-maroon transition-colors flex items-center gap-1.5">
              <span>Balaji Concierge</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            </p>
            <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
              Have questions on 2 &amp; 3 BHK floor plans or pricing? Tap to chat!
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setShowNotificationBubble(false)
            }}
            className="text-slate-400 hover:text-navy -mr-1 -mt-1 p-1"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 2. Floating Circular Launch Button (Bottom Right) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close Balaji AI Concierge' : 'Open Balaji AI Concierge'}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-navy via-navy to-maroon text-gold hover:text-white border-2 border-gold/70 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white transition-transform duration-200 rotate-90 group-hover:rotate-0" />
        ) : (
          <div className="relative flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
            <Sparkles className="w-3 h-3 text-gold-300 absolute -top-1.5 -right-1.5 animate-ping" />
            {hasUnread && (
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-maroon text-[9px] font-bold text-white rounded-full flex items-center justify-center border border-white">
                1
              </span>
            )}
          </div>
        )}
      </button>

      {/* 3. Luxury Chat Window Panel */}
      {isOpen && (
        <div className="fixed inset-x-3 bottom-20 top-20 sm:top-auto sm:inset-x-auto sm:right-6 sm:bottom-24 sm:w-[390px] sm:h-[560px] z-50 bg-white rounded-3xl shadow-2xl border border-navy/15 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-navy via-navy to-navy-950 text-white p-4 flex items-center justify-between border-b border-gold/20 shadow-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-gold/40 flex items-center justify-center text-gold shadow-inner">
                  <Building2 className="w-5 h-5 text-gold" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-navy" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-white leading-tight flex items-center gap-1.5">
                  <span>Balaji Assistant</span>
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                </h3>
                <p className="text-[11px] text-gold-200/90 font-light flex items-center gap-1">
                  <span>Indrali, Udupi • Instant Answers</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-white/80">
              <button
                onClick={handleReset}
                title="Restart conversation"
                className="p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Restart conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat window"
                className="p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close chat window"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Status Bar */}
          <div className="bg-navy-50/90 px-4 py-1.5 border-b border-navy/5 flex items-center justify-between text-[11px] text-navy/70 shrink-0">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Brochure Data</span>
            </span>
            <a
              href="tel:+919740763625"
              className="font-semibold text-maroon hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>+91 9740763625</span>
            </a>
          </div>

          {/* Message Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-maroon text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-navy/10 rounded-bl-none'
                  }`}
                >
                  {msg.text}

                  {/* Optional Action CTA Button inside bot message */}
                  {msg.linkCta && (
                    <div className="mt-3 pt-2.5 border-t border-navy/10">
                      {msg.linkCta.isExternal ? (
                        <a
                          href={msg.linkCta.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200"
                        >
                          <span>{msg.linkCta.label}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <Link
                          to={msg.linkCta.url}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-maroon hover:text-maroon-800 transition-colors bg-maroon-50 px-3 py-1.5 rounded-lg border border-maroon-200"
                        >
                          <span>{msg.linkCta.label}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {msg.time}
                </span>

                {/* Quick Reply Chips (Only for Bot's latest message) */}
                {msg.sender === 'bot' &&
                  msg.quickReplies &&
                  msg.id === messages[messages.length - 1].id && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                      {msg.quickReplies.map((reply, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(reply)}
                          className="text-[11px] font-medium text-navy bg-white hover:bg-navy-50 hover:border-gold border border-navy/15 rounded-xl px-2.5 py-1 transition-all shadow-sm active:scale-95 text-left"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            {/* Realistic 2-Second Typing Indicator with animation */}
            {isTyping && (
              <div className="flex items-center gap-2 bg-white border border-navy/10 rounded-2xl rounded-bl-none px-4 py-2.5 w-fit shadow-sm animate-in fade-in duration-200">
                <div className="w-2 h-2 rounded-full bg-gold animate-ping" />
                <span className="text-xs text-slate-500 font-medium">
                  Balaji Concierge is typing an answer...
                </span>
                <div className="flex items-center gap-1 ml-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce"
                    style={{ animationDelay: '0.15s' }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce"
                    style={{ animationDelay: '0.3s' }}
                  />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendMessage()
            }}
            className="p-3 bg-white border-t border-navy/10 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about 2/3 BHK, price, loans, location..."
              className="flex-1 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-navy/20 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-all placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="w-10 h-10 rounded-xl bg-maroon hover:bg-maroon-800 disabled:opacity-40 text-white flex items-center justify-center transition-all shadow-md active:scale-95 shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </aside>
  )
}
