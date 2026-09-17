import React from 'react'
import { SEO } from '../components/shared/SEO'
import { SEO_DATA } from '../lib/seo'
import { BuilderStory } from '../components/about/BuilderStory'
import { ConsultantCredit } from '../components/about/ConsultantCredit'
import { VisionMission } from '../components/about/VisionMission'
import { SectionReveal } from '../components/shared/SectionReveal'
import { Badge } from '../components/shared/Badge'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Quote } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <main className="min-h-screen pt-24 bg-white">
      <SEO meta={SEO_DATA.about} />

      {/* Page Header Banner */}
      <section className="bg-navy py-16 sm:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-maroon/20 via-navy to-navy pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionReveal yOffset={20}>
            <Badge variant="gold" className="mb-4 text-gold-300 border-gold/40">
              Shri Balaji Builders &amp; Developers
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight mb-4">
              A Legacy Built on Trust, Quality &amp; Precision
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Transforming Ideas into Landmark. Meet the team and engineering leadership bringing Balaji Bentota to life at Indrali, Udupi.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Builder Story Section */}
      <BuilderStory />

      {/* Consultant Credit Section (A.G. Associates) */}
      <ConsultantCredit />

      {/* Vision & Mission Cards */}
      <VisionMission />

      {/* Client Testimonials Quote Strip */}
      <section className="py-20 bg-bg-alt border-y border-navy/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal yOffset={25}>
            <Quote className="w-10 h-10 text-gold mx-auto mb-4 opacity-70" />
            <blockquote className="font-serif text-xl sm:text-2xl text-navy italic leading-relaxed mb-6">
              “Shri Balaji Builders has maintained an impeccable track record in coastal Karnataka. With A.G. Associates on board as architectural consultants, Balaji Bentota offers unmatched peace of mind for both end-users and investors.”
            </blockquote>
            <p className="font-bold text-navy text-sm">K. Ramesh Rao</p>
            <p className="text-xs text-slate-500">Property Consultant &amp; Longtime Udupi Resident</p>
          </SectionReveal>
        </div>
      </section>

      {/* Bottom Action CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal yOffset={20}>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy mb-4">
              Explore Our Floor Plans &amp; Unit Availability
            </h3>
            <p className="text-sm text-slate-600 mb-8 max-w-xl mx-auto">
              Check out our spacious 2 &amp; 3 BHK layouts, detailed area statements, and technical specifications.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/project"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-maroon hover:bg-maroon-800 text-white font-semibold text-sm shadow-md transition-all hover:scale-[1.02]"
              >
                <span>View Floor Plans &amp; Unit Mix</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-navy-50 hover:bg-navy-100 text-navy font-semibold text-sm border border-navy-100 transition-all"
              >
                <span>Contact Our Booking Team</span>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  )
}
