import React from 'react'
import { SectionReveal } from '../shared/SectionReveal'
import { Badge } from '../shared/Badge'
import {
  Zap,
  Flame,
  Layers,
  Droplet,
  Database,
  Cctv,
  SunMedium,
  ArrowUpDown,
  Car,
  FileCheck,
} from 'lucide-react'

export const AmenitiesGrid: React.FC = () => {
  const fullAmenities = [
    {
      icon: Zap,
      name: 'Generator Backup',
      desc: 'Dedicated automatic generator providing seamless electrical backup for elevators, water supply pumps, and common area lighting.',
    },
    {
      icon: Flame,
      name: 'Reticulated Gas Pipeline',
      desc: 'Safe, centralized LPG gas piping supplied directly to every kitchen platform, removing the hassle of cylinder handling.',
    },
    {
      icon: Layers,
      name: 'Interlock Paving',
      desc: 'Extensive heavy-duty concrete paver blocks around building perimeter, driveway, and visitor parking zones.',
    },
    {
      icon: Droplet,
      name: (
        <span>
          <span className="font-numeral">24×7</span> Ample Water Supply
        </span>
      ),
      desc: 'Reliable round-the-clock water sourced from municipal supply and a deep yielding on-site borewell.',
    },
    {
      icon: Database,
      name: 'Sump & Overhead Tanks',
      desc: 'Engineered high-capacity reinforced concrete underground sump paired with dual overhead distribution tanks.',
    },
    {
      icon: Cctv,
      name: 'CCTV Security Surveillance',
      desc: 'High-definition digital security cameras installed across main gate, parking basements, lobby, and staircase areas.',
    },
    {
      icon: SunMedium,
      name: 'Covered Terrace Lounge',
      desc: 'Weather-protected multi-purpose rooftop terrace designed for social gatherings, morning fitness, and panoramic coastal views.',
    },
    {
      icon: ArrowUpDown,
      name: (
        <span>
          <span className="font-numeral">8</span>-Passenger Automatic Lift
        </span>
      ),
      desc: 'Silent automatic passenger elevator with contemporary stainless-steel interiors and Automatic Rescue Device (ARD).',
    },
    {
      icon: Car,
      name: 'Covered Car Parking',
      desc: 'Generous ground floor covered car and two-wheeler parking slots with smooth driveway ingress and egress.',
    },
    {
      icon: FileCheck,
      name: 'Clear Statutory Approvals',
      desc: 'Fully sanctioned municipal plans, certified town planning clearance by A.G. Associates, and clear marketable title.',
    },
  ]


  return (
    <section className="py-20 bg-bg-alt" id="amenities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionReveal yOffset={20}>
            <Badge variant="maroon" className="mb-3">
              Lifestyle &amp; Facilities
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy tracking-tight leading-tight">
              Amenities &amp; Building Features
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Engineered with modern infrastructure for hassle-free living at Indrali Railway Station Road, Udupi.
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fullAmenities.map((item, idx) => {
            const Icon = item.icon
            return (
              <SectionReveal key={idx} yOffset={25} delay={idx * 0.04}>
                <div className="bg-white p-6 rounded-2xl border border-navy/5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-navy">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      {item.desc}
                    </p>
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
