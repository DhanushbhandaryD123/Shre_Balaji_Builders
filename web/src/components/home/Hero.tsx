import React from 'react'
import { Link } from 'react-router-dom'
import { HeroSection } from '../../types'
import { ArrowRight, Phone, ShieldCheck, MapPin } from 'lucide-react'

interface HeroProps {
  data: HeroSection
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-navy">
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
            className="w-full h-full object-cover object-center brightness-[0.70] animate-ken-burns will-change-transform"
          />
        )}

        {/* Sophisticated Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/30" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-navy/30 to-navy/70 pointer-events-none" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center flex flex-col items-center">
        {/* Project Location & Category Badge */}
        

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-md">
          {data.headline}
        </h1>

        {/* Subheadline with Unit Types */}
        <p className="text-lg sm:text-2xl text-slate-200 font-light max-w-3xl mb-4 leading-relaxed">
          {data.subheadline}
        </p>

        {/* Elegant Tagline / Quote */}
        <p className="text-sm sm:text-base text-gold-200 italic font-serif max-w-2xl mb-10 opacity-95">
          {data.quoteLine}
        </p>

        {/* Call to Action Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-maroon hover:bg-maroon-800 text-white font-semibold text-base shadow-xl shadow-maroon/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>{data.ctaLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/project"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 font-semibold text-base transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Explore Floor Plans</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
