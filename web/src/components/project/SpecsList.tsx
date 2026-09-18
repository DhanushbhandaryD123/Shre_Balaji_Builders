import React from 'react'
import { SectionReveal } from '../shared/SectionReveal'
import { Badge } from '../shared/Badge'
import {
  ShieldCheck,
  LayoutGrid,
  DoorClosed,
  Utensils,
  Bath,
  Zap,
  ArrowUpDown,
  Wind,
} from 'lucide-react'

export const SpecsList: React.FC = () => {
  const specs = [
    {
      icon: ShieldCheck,
      category: 'Structure & Finish',
      details: 'A-Class waterproof reinforced concrete structure designed strictly per seismic and coastal resistance codes.',
    },
    {
      icon: LayoutGrid,
      category: 'Flooring & Tiling',
      details: 'Premium vitrified flooring in drawing, dining, and bedrooms. Non-skid ceramic tiling in bathrooms, utility, and balconies.',
    },
    {
      icon: DoorClosed,
      category: 'Doors & Windows',
      details: 'Attractive decorative teak-finish entrance door. High-quality flush internal doors and powder-coated aluminium/UPVC sliding windows.',
    },
    {
      icon: Utensils,
      category: 'Kitchen & Utility',
      details: 'Durable polished black granite kitchen platform with stainless steel sink, ceramic glazed tile dado, and water purifier conduit.',
    },
    {
      icon: Bath,
      category: 'Bathrooms & Plumbing',
      details: 'Designer wall tiles up to 7\'0" ceiling level, concealed CPVC piping, branded white sanitaryware, and premium chrome-plated fittings.',
    },
    {
      icon: Zap,
      category: 'Electrical & AC Provision',
      details: 'Concealed fire-resistant copper wiring with modular switches. Dedicated split AC electrical provisions in master and secondary bedrooms.',
    },
    {
      icon: ArrowUpDown,
      category: 'Elevator (Lift)',
      details: '8-passenger high-speed automatic elevator with stainless steel cabin, overload sensor, and automatic rescue device (ARD).',
    },
    {
      icon: Wind,
      category: 'Ventilation & Lighting',
      details: 'Three-sided open corner planning ensuring abundant natural daylight and healthy cross-ventilation in every single room.',
    },
  ]

  return (
    <section className="py-20 bg-white" id="specifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionReveal yOffset={20}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy tracking-tight leading-tight">
              Premium Project Specifications
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Every fixture and finish has been specified to provide enduring longevity, low maintenance, and true luxury living.
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, idx) => {
            const Icon = spec.icon
            return (
              <SectionReveal key={idx} yOffset={25} delay={idx * 0.05}>
                <div className="bg-bg-alt p-6 rounded-2xl border border-navy/5 shadow-sm hover:shadow-md hover:border-gold/50 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white text-maroon shadow-sm border border-navy/5 flex items-center justify-center mb-4 group-hover:bg-maroon group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-navy mb-2 group-hover:text-maroon transition-colors">
                      {spec.category}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {spec.details}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-navy/5 flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-gold-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span>Brochure Standard</span>
                  </div>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
