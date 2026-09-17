import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Maximize2, Check } from 'lucide-react'
import { SectionReveal } from '../shared/SectionReveal'
import { Badge } from '../shared/Badge'

export const FloorPlanTeaser: React.FC = () => {
  const [selectedBHK, setSelectedBHK] = useState<'2BHK' | '3BHK'>('3BHK')

  const plans = {
    '2BHK': {
      flat: 'Flat 002',
      type: '2 BHK Luxury Residence',
      sba: '1340.00 sq.ft (Typical) & 1305.00 sq.ft (First)',
      description:
        'Features an expansive living and dining hall (21\'0" × 11\'3"), contemporary kitchen with attached utility (4\'6" wide), separate master bedroom with attached designer bath, guest bedroom, common bath, and two private balconies.',
      features: ['2 Bedrooms', '2 Toilets', '2 Private Balconies', 'Kitchen + Utility'],
    },
    '3BHK': {
      flat: 'Flat 001 & Flat 003',
      type: '3 BHK Premium Corner Residences',
      sba: '1565.00 sq.ft & 1595.00 sq.ft (Typical)',
      description:
        'Sprawling grand corner residences boasting an enormous living room, distinct dining room, wide modern kitchen with utility balcony, three restful bedrooms with cross-ventilation, three designer bathrooms, and dual panoramic balconies.',
      features: ['3 Corner Bedrooms', '3 Bathrooms', 'Utility + Dual Balconies', 'Dining Hall'],
    },
  }

  const currentPlan = plans[selectedBHK]

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionReveal yOffset={20}>
            <Badge variant="gold" className="mb-3">
              Architectural Blueprints
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy tracking-tight leading-tight mb-4">
              Thoughtfully Designed Unit Layouts
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Every residence at Balaji Bentota is a corner home designed by A.G. Associates to optimize usable carpet area, private vistas, and natural sea-breezes.
            </p>

            {/* BHK Filter Toggle Buttons */}
            <div className="inline-flex p-1.5 rounded-xl bg-navy-50 border border-navy-100 mt-8 gap-2">
              <button
                onClick={() => setSelectedBHK('3BHK')}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  selectedBHK === '3BHK'
                    ? 'bg-maroon text-white shadow-md'
                    : 'text-navy/70 hover:text-navy hover:bg-white/60'
                }`}
              >
                3 BHK Units (1540 – 1595 sq.ft)
              </button>
              <button
                onClick={() => setSelectedBHK('2BHK')}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  selectedBHK === '2BHK'
                    ? 'bg-maroon text-white shadow-md'
                    : 'text-navy/70 hover:text-navy hover:bg-white/60'
                }`}
              >
                2 BHK Units (1304 – 1340 sq.ft)
              </button>
            </div>
          </SectionReveal>
        </div>

        {/* Floor Plan Display Card */}
        <SectionReveal yOffset={30}>
          <div className="bg-bg-alt rounded-3xl p-6 sm:p-10 border border-navy/5 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Blueprint Schematic Image */}
            <div className="lg:col-span-7 bg-white p-4 sm:p-6 rounded-2xl border border-navy/10 shadow-sm relative group overflow-hidden">
              <img
                src="/assets/typical-floor-plan.png"
                alt="Balaji Bentota Typical Floor Plan Drawing"
                className="w-full h-auto max-h-[480px] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute top-4 right-4 bg-navy/80 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 pointer-events-none">
                <Maximize2 className="w-3.5 h-3.5 text-gold" />
                <span>Typical Floor Blueprint</span>
              </div>
            </div>

            {/* Details Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-maroon">
                  {currentPlan.flat}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy mt-1">
                  {currentPlan.type}
                </h3>
                <p className="text-sm font-semibold text-gold-700 mt-2">
                  Super Built-up Area: {currentPlan.sba}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mt-4">
                  {currentPlan.description}
                </p>

                {/* Feature Chips */}
                <div className="grid grid-cols-2 gap-2.5 mt-6">
                  {currentPlan.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-navy/5 text-xs font-medium text-navy"
                    >
                      <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-navy/10 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/project"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy hover:bg-navy-800 text-white font-semibold text-sm shadow-md transition-all hover:scale-[1.02]"
                >
                  <span>View Full Floor Plans &amp; Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-navy-50 text-maroon border border-maroon/20 font-semibold text-sm transition-all"
                >
                  <span>Enquire For Availability</span>
                </Link>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
