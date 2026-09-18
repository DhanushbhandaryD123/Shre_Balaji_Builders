import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Award } from 'lucide-react'
import { SectionReveal } from '../shared/SectionReveal'
import { ImageReveal } from '../shared/ImageReveal'
import { Badge } from '../shared/Badge'

export const AboutTeaser: React.FC = () => {
  return (
    <section className="py-24 bg-bg-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Reveal with Authentic Brochure Graphic */}
          <div className="lg:col-span-6 relative">
            <ImageReveal
              src="/assets/elevation-luxury.jpg"
              alt="Balaji Bentota Architecture Elevation"
              aspectRatio="aspect-[4/3]"
              className="shadow-2xl object-cover"
            />
            
          </div>

          {/* Right Column: Copy & Details */}
          <div className="lg:col-span-6">
            <SectionReveal yOffset={30}>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy tracking-tight leading-tight mb-6">
                Transforming Ideas Into Landmark Addresses
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-light">
                <strong className="text-navy font-semibold">Shri Balaji Builders &amp; Developers</strong> presents 
                <span className="text-maroon font-semibold"> Balaji Bentota</span>, a boutique residential sanctuary designed for discerning homeowners who seek uncompromising quality, serene privacy, and central city convenience.
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong className="text-navy">A-Class Waterproof Construction:</strong> Reinforced structure engineered specifically to withstand coastal climatic conditions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong className="text-navy">Strategic Indrali Location:</strong> Minutes from Indrali Railway Station, Kunjibettu junction, schools, and healthcare institutions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong className="text-navy">Vastu &amp; Ventilation Harmonized:</strong> Three-sided open architecture offering continuous sea-breeze airflow and sunlight.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-5">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-navy hover:bg-navy-800 px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.02]"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+919740763625"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-maroon hover-draw-underline"
                >
                  <span>Speak to Builder: 9740763625</span>
                </a>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
