import React from 'react'
import { SEO } from '../components/shared/SEO'
import { SEO_DATA } from '../lib/seo'
import { UnitMixTable } from '../components/project/UnitMixTable'
import { FloorPlanViewer } from '../components/project/FloorPlanViewer'
import { SpecsList } from '../components/project/SpecsList'
import { AmenitiesGrid } from '../components/project/AmenitiesGrid'
import { SectionReveal } from '../components/shared/SectionReveal'
import { Badge } from '../components/shared/Badge'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight, ShieldCheck, MapPin } from 'lucide-react'

export const Project: React.FC = () => {
  return (
    <main className="min-h-screen pt-24 bg-white">
      <SEO meta={SEO_DATA.project} />

      {/* Project Hero Banner */}
      <section className="bg-navy py-16 sm:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-maroon/30 via-navy to-navy pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionReveal yOffset={20}>
            <Badge variant="gold" className="mb-4 text-gold-300 border-gold/40">
              Project Showcase
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight mb-4">
              Balaji Bentota
            </h1>
            <p className="text-sm sm:text-base font-semibold text-gold tracking-widest uppercase mb-4">
              Premium 2 &amp; 3 BHK Residential Apartments
            </p>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Located on Indrali Railway Station Road, Kunjibettu, Udupi – 576102. An exclusive community of corner residences crafted for lifetime serenity.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gold" />
                Indrali, Kunjibettu, Udupi
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold" />
                Consultant: A.G. Associates (ISO 9001:2015)
              </span>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 1. Area Statements & Unit Mix Table */}
      <UnitMixTable />

      {/* 2. Interactive Floor Plan Viewer */}
      <FloorPlanViewer />

      {/* 3. Specifications List (8 Categories) */}
      <SpecsList />

      {/* 4. Full Amenities Grid */}
      <AmenitiesGrid />

      {/* 5. Confidentiality-Compliant Pricing CTA */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy to-navy-950 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal yOffset={20}>
            <Badge variant="gold" className="mb-4 text-gold-300 border-gold/40">
              Private Guidance &amp; Pricing
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Enquire for Unit Pricing &amp; Custom Payment Schedules
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Per client policy, unit prices are shared on direct enquiry to provide customized payment slabs, bank loan approvals, and stage-wise construction plans.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-maroon hover:bg-maroon-800 text-white font-semibold text-sm shadow-xl transition-all hover:scale-[1.02]"
              >
                <span>Request Price Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+919740763625"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Booking Desk: 9740763625</span>
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  )
}
