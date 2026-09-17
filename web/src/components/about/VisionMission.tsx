import React from 'react'
import { SectionReveal } from '../shared/SectionReveal'
import { Eye, Target, Sparkles } from 'lucide-react'

export const VisionMission: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <SectionReveal yOffset={25}>
            <div className="h-full bg-navy text-white p-8 sm:p-10 rounded-3xl border border-gold/30 shadow-xl relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/40 flex items-center justify-center text-gold mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                To sculpt timeless residential addresses across coastal Karnataka that harmonize structural excellence, Vastu harmony, and enduring community pride — creating generational landmarks that our clients proudly call home.
              </p>
            </div>
          </SectionReveal>

          {/* Mission Card */}
          <SectionReveal yOffset={25} delay={0.1}>
            <div className="h-full bg-maroon text-white p-8 sm:p-10 rounded-3xl border border-white/20 shadow-xl relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/30 flex items-center justify-center text-white mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light">
                To execute construction with rigorous engineering integrity, adhere strictly to statutory approvals, deliver on schedule, and foster lasting client relationships through transparent communication and after-sales support.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
