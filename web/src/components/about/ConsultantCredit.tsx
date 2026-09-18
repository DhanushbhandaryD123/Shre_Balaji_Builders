import React from 'react'
import { SectionReveal } from '../shared/SectionReveal'
import { Badge } from '../shared/Badge'
import { ShieldCheck, ExternalLink, Award, CheckCircle } from 'lucide-react'

export const ConsultantCredit: React.FC = () => {
  return (
    <section className="py-20 bg-bg-alt relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal yOffset={30}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-navy/10 relative overflow-hidden">
            {/* Decorative Gold Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-maroon via-gold to-navy" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-navy/10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy">
                  Consultant: A.G. Associates
                </h3>
                <p className="text-sm font-medium text-maroon mt-1">
                  Architects, Engineers, Town Planners &amp; Valuers
                </p>
              </div>

              <div className="flex items-center gap-3 bg-navy-50 px-4 py-2.5 rounded-xl border border-navy/10">
                <Award className="w-6 h-6 text-gold-600 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-navy uppercase tracking-wider">
                    ISO 9001:2015 Certified
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Quality Management Standard
                  </p>
                </div>
              </div>
            </div>

            <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-600 leading-relaxed">
              <p>
                The architectural blueprints and structural planning of <strong className="text-navy">Balaji Bentota</strong> were entrusted to <strong className="text-navy">A.G. Associates</strong>, one of coastal Karnataka’s most distinguished architectural practices. Their rigorous technical vetting ensures optimal load distribution, intelligent space utilization, and superior longevity.
              </p>
              <p>
                Every typical floor provides wide 6&apos;0&quot; corridors, independent privacy for each apartment, and corner balcony orientations that take advantage of natural winds from the Arabian Sea, minimizing artificial climate control requirements.
              </p>
            </div>

            <div className="pt-6 border-t border-navy/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>AGA Kantilever, Near Brahamagiri Circle, Udupi</span>
              </div>

              <a
                href="http://agaudupi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-maroon hover:text-maroon-800 hover:underline"
              >
                <span>Visit Consultant Website (agaudupi.com)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
