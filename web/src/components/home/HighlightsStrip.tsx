import React from 'react'
import { Home, Compass, KeyRound, Building2 } from 'lucide-react'
import { SectionReveal } from '../shared/SectionReveal'

export const HighlightsStrip: React.FC = () => {
  const highlights = [
    {
      icon: Home,
      title: '2 & 3 BHK Residences',
      subtitle: '1304 to 1595 sq.ft',
      description: 'Corner apartments with cross ventilation & private balconies',
    },
    {
      icon: Building2,
      title: 'G + 4 Modern Structure',
      subtitle: '17,565 sq.ft Total Area',
      description: 'Ground floor covered car parking & 4 upper residential floors',
    },
    {
      icon: Compass,
      title: 'Vastu Compliant',
      subtitle: 'Planned by A.G. Associates',
      description: 'ISO 9001:2015 certified architectural excellence',
    },
    {
      icon: KeyRound,
      title: 'Indrali Station Road',
      subtitle: 'Kunjibettu, Udupi',
      description: 'Immediate connectivity to railway, colleges, and temples',
    },
  ]

  return (
    <section className="relative z-20 mt-3 sm:-mt-8 lg:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionReveal yOffset={25}>
        <div className="bg-white rounded-2xl shadow-xl border border-navy/5 p-5 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-navy/5">
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className={`flex items-start gap-3.5 sm:gap-4 ${idx > 0 ? 'pt-4 sm:pt-0 lg:pl-6' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-maroon-50 text-maroon flex items-center justify-center shrink-0 border border-maroon-100 shadow-sm">
                  <Icon className="w-6 h-6 text-maroon" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-base text-navy leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold-700 tracking-wide uppercase mt-0.5 font-numeral">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

            )
          })}
        </div>
      </SectionReveal>
    </section>
  )
}
