import React from 'react'
import { SEO } from '../components/shared/SEO'
import { SEO_DATA } from '../lib/seo'
import { EnquiryForm } from '../components/contact/EnquiryForm'
import { ContactCards } from '../components/contact/ContactCards'
import { MapEmbed } from '../components/contact/MapEmbed'
import { SectionReveal } from '../components/shared/SectionReveal'
import { Badge } from '../components/shared/Badge'
import { Phone, Mail, MapPin } from 'lucide-react'

export const Contact: React.FC = () => {
  return (
    <main className="min-h-screen pt-24 bg-bg-alt">
      <SEO meta={SEO_DATA.contact} />

      {/* Header Banner */}
      <section className="bg-navy py-16 sm:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-maroon/20 via-navy to-navy pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionReveal yOffset={20}>
            <Badge variant="gold" className="mb-4 text-gold-300 border-gold/40">
              Get In Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight mb-4">
              Contact &amp; Booking Desk
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Have questions about unit availability, pricing, or want to arrange a site visit at Indrali, Udupi? Our direct builder team is here to assist you.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Main Form & Contacts Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Contact Hotlines & Addresses */}
            <div className="lg:col-span-5">
              <SectionReveal yOffset={25}>
                <ContactCards />
              </SectionReveal>
            </div>

            {/* Right: Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <SectionReveal yOffset={25} delay={0.1}>
                <EnquiryForm />
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal yOffset={25}>
            <MapEmbed />
          </SectionReveal>
        </div>
      </section>
    </main>
  )
}
