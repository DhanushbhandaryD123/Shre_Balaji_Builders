import React, { useState } from 'react'
import { SectionReveal } from '../shared/SectionReveal'
import { Badge } from '../shared/Badge'
import { Maximize2, Compass, Layers, Check, Download } from 'lucide-react'

export const FloorPlanViewer: React.FC = () => {
  const [selectedFloor, setSelectedFloor] = useState<'typical' | 'first'>('typical')
  const [filterBHK, setFilterBHK] = useState<'all' | '2BHK' | '3BHK'>('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const floorImages = {
    typical: '/assets/typical-floor-plan.png',
    first: '/assets/brochure-spread.png',
  }

  const currentImage = floorImages[selectedFloor]

  return (
    <section className="py-20 bg-bg-alt" id="floor-plans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <SectionReveal yOffset={20}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy tracking-tight leading-tight">
              Architectural Floor Plan Viewer
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Inspect the exact layout schematics approved by A.G. Associates. Toggle between floors and filter by unit configuration.
            </p>
          </SectionReveal>

          {/* Controls: Floor Selector & BHK Filter */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex p-1 rounded-xl bg-white border border-navy/10 shadow-sm">
              <button
                onClick={() => setSelectedFloor('typical')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  selectedFloor === 'typical'
                    ? 'bg-navy text-white shadow'
                    : 'text-navy/70 hover:text-navy'
                }`}
              >
                Typical Floor (4,500 sq.ft)
              </button>
              <button
                onClick={() => setSelectedFloor('first')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  selectedFloor === 'first'
                    ? 'bg-navy text-white shadow'
                    : 'text-navy/70 hover:text-navy'
                }`}
              >
                First Floor Plan (4,405 sq.ft)
              </button>
            </div>

            <div className="inline-flex p-1 rounded-xl bg-white border border-navy/10 shadow-sm">
              <button
                onClick={() => setFilterBHK('all')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                  filterBHK === 'all'
                    ? 'bg-maroon text-white'
                    : 'text-navy/70 hover:text-navy'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterBHK('2BHK')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                  filterBHK === '2BHK'
                    ? 'bg-maroon text-white'
                    : 'text-navy/70 hover:text-navy'
                }`}
              >
                2 BHK
              </button>
              <button
                onClick={() => setFilterBHK('3BHK')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                  filterBHK === '3BHK'
                    ? 'bg-maroon text-white'
                    : 'text-navy/70 hover:text-navy'
                }`}
              >
                3 BHK
              </button>
            </div>
          </div>
        </div>

        {/* Viewer Canvas Card */}
        <SectionReveal yOffset={30}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-navy/10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image Canvas with Zoom Modal Trigger */}
              <div
                className="lg:col-span-8 bg-slate-50 p-4 sm:p-8 rounded-2xl border border-navy/10 relative group cursor-pointer overflow-hidden flex items-center justify-center min-h-[460px]"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={currentImage}
                  alt={`Balaji Bentota ${selectedFloor === 'typical' ? 'Typical' : 'First'} Floor Plan Blueprint`}
                  className="max-h-[580px] w-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Zoom CTA Badge */}
                <div className="absolute top-4 right-4 bg-navy/90 backdrop-blur-md text-white px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg group-hover:bg-maroon transition-colors">
                  <Maximize2 className="w-4 h-4 text-gold" />
                  <span>Click to Enlarge Drawing</span>
                </div>

                {/* Compass Marker */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-navy/10 text-[11px] font-semibold text-navy flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-maroon" />
                  <span>North Oriented Blueprint</span>
                </div>
              </div>

              {/* Blueprint Legend & Room Schedule */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-700">
                    <Layers className="w-4 h-4" />
                    <span>
                      {selectedFloor === 'typical' ? 'Typical Floor (2nd, 3rd, 4th)' : 'First Floor Level'}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-navy mt-1">
                    Floor Plan Key Specifications
                  </h3>

                  <div className="mt-6 space-y-4 text-xs text-slate-600">
                    {/* Unit 001 */}
                    {(filterBHK === 'all' || filterBHK === '3BHK') && (
                      <div className="p-3.5 rounded-xl bg-bg-alt border border-navy/5">
                        <div className="flex items-center justify-between font-bold text-navy text-sm mb-1">
                          <span>Flat <span className="font-numeral">001</span> (<span className="font-numeral">3</span> BHK)</span>
                          <span className="text-maroon font-numeral font-bold text-sm">
                            {selectedFloor === 'typical' ? '1565.00' : '1540.00'} <span className="text-xs font-normal text-slate-500 font-sans">sq.ft</span>
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          Living (<span className="font-numeral">13&apos;6&quot;×14&apos;6&quot;</span>), Dining (<span className="font-numeral">9&apos;6&quot;×10&apos;6&quot;</span>), Kitchen (<span className="font-numeral">13&apos;6&quot;×9&apos;0&quot;</span>), 3 Balconies, 3 Toilets.
                        </p>
                      </div>
                    )}

                    {/* Unit 002 */}
                    {(filterBHK === 'all' || filterBHK === '2BHK') && (
                      <div className="p-3.5 rounded-xl bg-bg-alt border border-navy/5">
                        <div className="flex items-center justify-between font-bold text-navy text-sm mb-1">
                          <span>Flat <span className="font-numeral">002</span> (<span className="font-numeral">2</span> BHK)</span>
                          <span className="text-maroon font-numeral font-bold text-sm">
                            {selectedFloor === 'typical' ? '1340.00' : '1305.00'} <span className="text-xs font-normal text-slate-500 font-sans">sq.ft</span>
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          Grand Living &amp; Dining (<span className="font-numeral">21&apos;0&quot;×11&apos;3&quot;</span>), Kitchen (<span className="font-numeral">9&apos;6&quot;×8&apos;0&quot;</span>), Utility (<span className="font-numeral">4&apos;6&quot;</span>), 2 Balconies.
                        </p>
                      </div>
                    )}

                    {/* Unit 003 */}
                    {(filterBHK === 'all' || filterBHK === '3BHK') && (
                      <div className="p-3.5 rounded-xl bg-bg-alt border border-navy/5">
                        <div className="flex items-center justify-between font-bold text-navy text-sm mb-1">
                          <span>Flat <span className="font-numeral">003</span> (<span className="font-numeral">3</span> BHK)</span>
                          <span className="text-maroon font-numeral font-bold text-sm">
                            {selectedFloor === 'typical' ? '1595.00' : '1560.00'} <span className="text-xs font-normal text-slate-500 font-sans">sq.ft</span>
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          Living (<span className="font-numeral">22&apos;9&quot;×12&apos;3&quot;</span>), Dining (<span className="font-numeral">12&apos;0&quot;×10&apos;0&quot;</span>), Kitchen (<span className="font-numeral">10&apos;3&quot;×8&apos;3&quot;</span>), <span className="font-numeral">7&apos;0&quot;</span> wide balcony.
                        </p>
                      </div>
                    )}

                  </div>

                  <div className="mt-6 pt-4 border-t border-navy/10 space-y-2 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Wide 6&apos;0&quot; to 10&apos;3&quot; central circulation corridor</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Automatic 8-passenger elevator lobby (6&apos;6&quot; × 6&apos;6&quot;)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Individual utility service balconies attached to every kitchen</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={currentImage}
                    download="balaji-bentota-floor-plan.png"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy hover:bg-navy-800 text-white font-semibold text-xs transition-all shadow-md"
                  >
                    <Download className="w-4 h-4 text-gold" />
                    <span>Download Blueprint Drawing</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gold text-sm font-semibold flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg"
            >
              <span>Close (Esc)</span>
            </button>
            <img
              src={currentImage}
              alt="Balaji Bentota Detailed Floor Plan"
              className="max-h-[85vh] w-auto object-contain rounded-xl shadow-2xl bg-white p-2"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  )
}
