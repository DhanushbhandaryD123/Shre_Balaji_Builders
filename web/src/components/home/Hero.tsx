import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { HeroSection } from '../../types'
import { ArrowRight, MapPin, ChevronDown, Sparkles } from 'lucide-react'
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
    <section
      ref={containerRef}
      className="relative min-h-[100svh] min-h-[100dvh] lg:min-h-screen flex flex-col justify-between items-center overflow-hidden bg-navy pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 lg:pb-12"
    >
      {/* Background Media with Ken-Burns Zoom or Video */}
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
          <img
            src={data.heroImageUrl}
            alt="Balaji Bentota Elevation"
            className="w-full h-full object-cover object-center brightness-[0.65] animate-ken-burns will-change-transform"
          />
        )}

        {/* Sophisticated Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/35" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-navy/30 to-navy/80 pointer-events-none" />
      </div>

      {/* Spacer to center main hero box vertically while keeping scroll indicator at bottom */}
      <div className="hidden lg:block w-full h-2" />

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center my-auto w-full">
        {/* Project Location & Category Badge */}
        <div ref={badgeRef} className="mb-3 sm:mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/40 text-gold-200 text-xs sm:text-xs font-semibold tracking-wider uppercase shadow-lg shadow-black/20">
            <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
            <MapPin className="w-3.5 h-3.5 text-gold" />
            <span>Indrali Station Road • Kunjibettu, Udupi</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          ref={headingRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.12] mb-3 sm:mb-4 drop-shadow-lg"
        >
          {data.headline}
        </h1>

        {/* Subheadline with Unit Types */}
        <p
          ref={subheadRef}
          className="text-sm sm:text-lg md:text-xl text-slate-200/95 font-light max-w-2xl mb-2 sm:mb-3 leading-snug sm:leading-relaxed"
        >
          {data.subheadline}
        </p>

        {/* Elegant Tagline / Quote */}
        <p
          ref={quoteRef}
          className="text-xs sm:text-sm md:text-base text-gold-300 italic font-serif max-w-xl mb-4 sm:mb-6 opacity-95 px-2"
        >
          {data.quoteLine}
        </p>

        {/* Quick Micro Feature Badges for Instant Trust on Mobile */}
        <div
          ref={featuresRef}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-8 text-[11px] sm:text-xs font-medium text-white/90"
        >
          <span className="px-3 py-1 rounded-lg bg-navy-950/60 backdrop-blur-md border border-white/15">
            2 &amp; 3 BHK Residences
          </span>
          <span className="px-3 py-1 rounded-lg bg-navy-950/60 backdrop-blur-md border border-white/15">
            G + 4 Modern Structure
          </span>
          <span className="px-3 py-1 rounded-lg bg-navy-950/60 backdrop-blur-md border border-white/15">
            100% Vastu Compliant
          </span>
        </div>

        {/* Call to Action Group */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-maroon hover:bg-maroon-800 text-white font-semibold text-sm sm:text-base shadow-xl shadow-maroon/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4 text-gold-300" />
            <span>{data.ctaLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/project"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Explore Floor Plans</span>
          </Link>
        </div>
      </div>

      {/* Floating Subtle Scroll Indicator to guide user to Highlights Strip */}
      <div
        ref={scrollPromptRef}
        className="relative z-10 flex flex-col items-center text-slate-300/80 hover:text-white transition-colors cursor-pointer mt-2"
        onClick={() => {
          window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' })
        }}
      >
        <span className="text-[11px] uppercase tracking-widest font-semibold text-gold-300/90 mb-1">
          Scroll To Explore
        </span>
        <div className="w-5 h-5 flex items-center justify-center animate-bounce">
          <ChevronDown className="w-4 h-4 text-gold" />
        </div>
      </div>
    </section>
  )
}

