import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HeroSection } from '../../types'
import { ArrowRight, MapPin, ChevronDown, Sparkles, Building2, Eye, X } from 'lucide-react'
import { gsap } from 'gsap'

interface HeroProps {
  data: HeroSection
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const containerRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadRef = useRef<HTMLParagraphElement>(null)
  const quoteRef = useRef<HTMLParagraphElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollPromptRef = useRef<HTMLDivElement>(null)
  const elevationTagRef = useRef<HTMLDivElement>(null)

  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.15 })

    // Staggered luxury entrance sequence
    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: -15, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6 }
    )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.35'
      )
      .fromTo(
        subheadRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        quoteRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.35'
      )
      .fromTo(
        elevationTagRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(
        featuresRef.current ? featuresRef.current.children : [],
        { opacity: 0, y: 15, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.08 },
        '-=0.3'
      )
      .fromTo(
        ctaRef.current ? ctaRef.current.children : [],
        { opacity: 0, y: 20, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.12 },
        '-=0.25'
      )
      .fromTo(
        scrollPromptRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.2'
      )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <>
      <section
        ref={containerRef}
        className="relative min-h-[100svh] min-h-[100dvh] lg:min-h-screen flex flex-col justify-between items-center overflow-hidden bg-navy pt-20 sm:pt-24 lg:pt-28 pb-5 sm:pb-8 lg:pb-12"
      >
        {/* Background Media: Adaptive Responsive Picture for Mobile & Desktop */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {data.heroVideoUrl ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-center brightness-75 scale-105"
            >
              <source src={data.heroVideoUrl} type="video/mp4" />
            </video>
          ) : (
            <picture className="w-full h-full block">
              {/* Specialized vertical 9:16 high-resolution building elevation for mobile screens */}
              <source
                media="(max-width: 640px)"
                srcSet="/assets/elevation-mobile.jpg"
              />
              {/* Wide landscape elevation for tablets and desktop screens */}
              <img
                src={data.heroImageUrl || '/assets/elevation-luxury.jpg'}
                alt="Balaji Bentota Architectural Elevation"
                className="w-full h-full object-cover object-center brightness-[0.88] sm:brightness-[0.68] animate-ken-burns will-change-transform"
              />
            </picture>
          )}

          {/* Luxury Gradient Overlays:
              - Mobile: lightened center so the architectural elevation is clearly visible and vivid.
              - Desktop: rich cinematic gradient. */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/20 sm:via-navy-950/50 to-navy-950/90 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent sm:via-navy/30 to-navy/70 pointer-events-none" />
        </div>

        {/* TOP SECTION: Location Badge, Headline & Subheadline (positioned over sky) */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
          {/* Project Location Badge */}
          <div ref={badgeRef} className="mb-2.5 sm:mb-4">
           
          </div>

          {/* Main Headline */}
          <h1
            ref={headingRef}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.12] mb-2 sm:mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
          >
            {data.headline}
          </h1>

          {/* Subheadline with Unit Types */}
          <p
            ref={subheadRef}
            className="text-xs sm:text-lg md:text-xl text-slate-100 font-light max-w-2xl mb-1.5 sm:mb-3 leading-snug sm:leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]"
          >
            {data.subheadline}
          </p>

          {/* Desktop/Tablet Tagline (hidden on compact mobile to let building breathe) */}
          <p
            ref={quoteRef}
            className="hidden sm:block text-xs sm:text-sm md:text-base text-gold-300 italic font-serif max-w-xl mb-4 sm:mb-6 opacity-95 px-2 drop-shadow"
          >
            {data.quoteLine}
          </p>
        </div>

        {/* MIDDLE SECTION: Elevation Focal Tag (allows users to appreciate and zoom into the building) */}
        <div ref={elevationTagRef} className="relative z-10 my-auto py-1 sm:py-2">
          <button
            onClick={() => setLightboxOpen(true)}
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-950/70 hover:bg-navy-900/90 backdrop-blur-md border border-gold/30 hover:border-gold text-white text-xs font-medium shadow-xl transition-all hover:scale-105"
            title="Click to view full uncropped elevation"
          >
            <Building2 className="w-3.5 h-3.5 text-gold" />
            <span className="text-white/95">Balaji Bentota • Front Elevation</span>
            <Eye className="w-3.5 h-3.5 text-gold-300 group-hover:text-gold transition-colors ml-0.5" />
          </button>
        </div>

        {/* BOTTOM SECTION: Trust Badges, Action Buttons & Scroll Indicator (positioned over driveway) */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
          

          {/* Call to Action Group */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto mb-3 sm:mb-4"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-maroon hover:bg-maroon-800 text-white font-semibold text-sm sm:text-base shadow-xl shadow-maroon/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-gold-300" />
              <span>{data.ctaLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/project"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Explore Floor Plans</span>
            </Link>
          </div>

          {/* Floating Subtle Scroll Indicator */}
          <div
            ref={scrollPromptRef}
            className="flex flex-col items-center text-slate-300/80 hover:text-white transition-colors cursor-pointer mt-1"
            onClick={() => {
              window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' })
            }}
          >
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold text-gold-300/90 mb-0.5">
              Scroll To Explore
            </span>
            <div className="w-4 h-4 flex items-center justify-center animate-bounce">
              <ChevronDown className="w-4 h-4 text-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* FULL UNENCUMBERED ELEVATION PREVIEW MODAL */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            {/* Header bar */}
            <div className="w-full flex items-center justify-between text-white pb-3 border-b border-white/10 mb-3">
              <div>
                <h3 className="font-serif font-bold text-lg text-white">
                  Balaji Bentota • Architectural Elevation
                </h3>
                <p className="text-xs text-gold-300">
                  Indrali Railway Station Road, Kunjibettu, Udupi
                </p>
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close elevation preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Elevation Image Display */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 max-h-[80vh] flex items-center justify-center">
              <img
                src="/assets/elevation-luxury.jpg"
                alt="Balaji Bentota Architectural Elevation Full View"
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>

            {/* Caption */}
            <p className="text-xs text-slate-300 mt-3 text-center">
              A-Class RCC Framed Structure • Planned by A.G. Associates (ISO 9001:2015)
            </p>
          </div>
        </div>
      )}
    </>
  )
}


