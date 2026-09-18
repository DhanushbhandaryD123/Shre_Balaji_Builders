import React from 'react'
import { SectionReveal } from '../shared/SectionReveal'
import { ImageReveal } from '../shared/ImageReveal'
import { Badge } from '../shared/Badge'
import { Building2, Compass, ShieldCheck, HeartHandshake } from 'lucide-react'

export const BuilderStory: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Structural Durability',
      description: 'A-Class waterproof RCC framed engineering made to endure harsh coastal monsoons.',
    },
    {
      icon: Compass,
      title: 'Vastu Compliant Planning',
      description: 'Meticulously balanced orientations bringing prosperity, daylight, and sea breezes.',
    },
    {
      icon: Building2,
      title: 'Prime Connectivity',
      description: 'Directly on Indrali Railway Station Road, Kunjibettu, with immediate access to Manipal and Udupi.',
    },
    {
      icon: HeartHandshake,
      title: 'Transparent Ethics',
      description: 'Clean clear freehold titles, approvals, and genuine customer care at every step.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Reveal */}
          <div className="lg:col-span-5 relative">
            <ImageReveal
              src="/assets/elevator-lobby-luxury.jpg"
              alt="Shri Balaji Builders & Developers Balaji Bentota Entrance Lobby"
              aspectRatio="aspect-[4/5]"
              className="shadow-2xl object-cover"
            />
            <div className="absolute -bottom-6 -left-4 sm:bottom-6 sm:-left-6 bg-navy text-white p-5 rounded-2xl shadow-xl border border-gold/40 max-w-xs z-10 hidden sm:block">
              <p className="text-xs uppercase text-gold font-bold tracking-widest">
                Our Hallmark
              </p>
              <p className="font-serif text-sm font-semibold mt-1">
                “Transforming Ideas Into Landmark”
              </p>
            </div>
          </div>

          {/* Right Column: Story Copy */}
          <div className="lg:col-span-7">
            <SectionReveal yOffset={25}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy tracking-tight leading-tight mb-6">
                Building Landmarks That Stand The Test Of Time
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-light">
                Founded with a resolute vision to elevate residential living in Udupi, <strong className="text-navy font-semibold">Shri Balaji Builders &amp; Developers</strong> combines regional cultural values with contemporary structural engineering.
              </p>

              <p className="text-slate-600 text-base leading-relaxed mb-8 font-light">
                Every residential apartment we construct is envisioned as a sanctuary for generations. In <strong>Balaji Bentota</strong>, we have translated our core commitment into reality: uncompromised A-Class waterproof construction, three-sided ventilated layouts, and a prime neighborhood nestled between Udupi city center and the Manipal university corridor.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-navy/10">
                {pillars.map((pillar, i) => {
                  const Icon = pillar.icon
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center shrink-0 border border-gold-200/60">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-sm text-navy">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
