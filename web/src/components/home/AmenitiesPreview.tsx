import React from 'react'
import { Link } from 'react-router-dom'
import {
  Zap,
  Flame,
  Layers,
  Droplet,
  Database,
  Cctv,
  SunMedium,
  ArrowUpDown,
  ArrowRight,
} from 'lucide-react'
import { SectionReveal } from '../shared/SectionReveal'
import { Badge } from '../shared/Badge'

export const AmenitiesPreview: React.FC = () => {
  const amenitiesList = [
    {
      icon: Zap,
      title: 'Generator Backup',
      description: 'Continuous power backup for lift, common lighting, and pump operations.',
    },
    {
      icon: Flame,
      title: 'Gas Pipeline',
      description: 'Reticulated centralized cooking gas pipeline direct to modular kitchens.',
    },
    {
      icon: Layers,
      title: 'Interlock Paving',
      description: 'High-grade durable interlock compound paving for smooth vehicular drive.',
    },
    {
      icon: Droplet,
      title: (
        <span>
          <span className="font-numeral">24×7</span> Water Supply
        </span>
      ),
      description: 'Dual sources from municipal city lines and continuous deep borewell.',
    },
    {
      icon: Database,
      title: 'Sump & Overhead Tanks',
      description: 'Spacious underground RCC sump and overhead tanks preventing dry taps.',
    },
    {
      icon: Cctv,
      title: 'CCTV Security Surveillance',
      description: '24×7 comprehensive camera surveillance across entrance, parking & lobby.',
    },
    {
      icon: SunMedium,
      title: 'Covered Terrace Lounge',
      description: 'All-weather expansive rooftop terrace for residents leisure and events.',
    },
    {
      icon: ArrowUpDown,
      title: (
        <span>
          <span className="font-numeral">8</span>-Passenger Automatic Lift
        </span>
      ),
      description: 'Automatic stainless-steel elevator with ARD safety battery rescue.',
    },
  ]


  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-maroon/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionReveal yOffset={20}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Curated Amenities &amp; Facilities
            </h2>
            <p className="text-slate-300 text-base max-w-xl mt-3 font-light">
              Essential conveniences engineered for effortless daily comfort and lifelong peace of mind at Balaji Bentota.
            </p>
          </SectionReveal>

          <Link
            to="/project"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-200 transition-colors shrink-0"
          >
            <span>Explore Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4x2 Grid of Amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenitiesList.map((item, idx) => {
            const Icon = item.icon
            return (
              <SectionReveal key={idx} yOffset={25} delay={idx * 0.05}>
                <div className="bg-navy-950/80 p-6 rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-maroon group-hover:text-white transition-colors duration-300 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white group-hover:text-gold-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
