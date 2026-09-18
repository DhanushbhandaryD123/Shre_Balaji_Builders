import React, { useState } from 'react'
import { SectionReveal } from '../shared/SectionReveal'
import { Badge } from '../shared/Badge'
import { Building, Layers, CheckCircle2, PhoneCall } from 'lucide-react'
import { Link } from 'react-router-dom'

export const UnitMixTable: React.FC = () => {
  const [activeFloor, setActiveFloor] = useState<'typical' | 'first'>('typical')

  const typicalUnits = [
    {
      flat: 'Flat 001',
      bhk: '3 BHK',
      sba: '1565.00',
      facing: 'North-East Corner',
      features: '3 Bed · 3 Bath · Living · Dining · Kitchen + Utility · 2 Balconies',
      status: 'Fast Selling',
    },
    {
      flat: 'Flat 002',
      bhk: '2 BHK',
      sba: '1340.00',
      facing: 'East Facing',
      features: '2 Bed · 2 Bath · Living & Dining (21\'0"×11\'3") · Kitchen + Utility · 2 Balconies',
      status: 'Available',
    },
    {
      flat: 'Flat 003',
      bhk: '3 BHK',
      sba: '1595.00',
      facing: 'South-East Corner',
      features: '3 Bed · 3 Bath · Living (22\'9"×12\'3") · Dining · Kitchen · 3 Balconies',
      status: 'Fast Selling',
    },
  ]

  const firstFloorUnits = [
    {
      flat: 'Flat 001',
      bhk: '3 BHK',
      sba: '1540.00',
      facing: 'North-East Corner',
      features: '3 Bed · 3 Bath · Living · Dining · Kitchen + Utility · Private Balconies',
      status: 'Available',
    },
    {
      flat: 'Flat 002',
      bhk: '2 BHK',
      sba: '1305.00',
      facing: 'East Facing',
      features: '2 Bed · 2 Bath · Living & Dining · Kitchen + Utility · Balconies',
      status: 'Available',
    },
    {
      flat: 'Flat 003',
      bhk: '3 BHK',
      sba: '1560.00',
      facing: 'South-East Corner',
      features: '3 Bed · 3 Bath · Grand Living Room · Dining · Kitchen + Utility',
      status: 'Available',
    },
  ]

  const activeData = activeFloor === 'typical' ? typicalUnits : firstFloorUnits
  const totalSBA = activeFloor === 'typical' ? '4500.00' : '4405.00'

  return (
    <section className="py-20 bg-white" id="unit-mix">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionReveal yOffset={20}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy tracking-tight leading-tight">
              Apartment Dimensions &amp; Specifications
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Official super built-up area (SBA) statements as documented in the architectural blueprints by consultant A.G. Associates.
            </p>

            {/* Floor Tabs */}
            <div className="inline-flex p-1.5 rounded-xl bg-navy-50 border border-navy-100 mt-6">
              <button
                onClick={() => setActiveFloor('typical')}
                className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeFloor === 'typical'
                    ? 'bg-maroon text-white shadow'
                    : 'text-navy/70 hover:text-navy'
                }`}
              >
                Typical Floor (2nd, 3rd, 4th)
              </button>
              <button
                onClick={() => setActiveFloor('first')}
                className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeFloor === 'first'
                    ? 'bg-maroon text-white shadow'
                    : 'text-navy/70 hover:text-navy'
                }`}
              >
                First Floor Plan
              </button>
            </div>
          </SectionReveal>
        </div>

        {/* Table Card */}
        <SectionReveal yOffset={30}>
          <div className="bg-white rounded-2xl shadow-xl border border-navy/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navy text-white text-xs uppercase tracking-wider font-semibold">
                    <th className="py-4 px-6">Flat No.</th>
                    <th className="py-4 px-6">Type</th>
                    <th className="py-4 px-6">SBA (Sq.ft)</th>
                    <th className="py-4 px-6">Configuration &amp; Rooms</th>
                    <th className="py-4 px-6 text-center">Status</th>
                    <th className="py-4 px-6 text-right">Pricing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy/5 text-sm">
                  {activeData.map((unit, index) => (
                    <tr
                      key={index}
                      className="hover:bg-bg-alt/70 transition-colors group"
                    >
                      <td className="py-4 px-6 font-bold text-navy whitespace-nowrap">
                        <span className="font-numeral">{unit.flat}</span>
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-md text-xs font-bold ${
                            unit.bhk === '3 BHK'
                              ? 'bg-maroon-50 text-maroon border border-maroon-200'
                              : 'bg-navy-50 text-navy border border-navy-200'
                          }`}
                        >
                          <span className="font-numeral">{unit.bhk}</span>
                        </span>
                      </td>
                      <td className="py-4 px-6 font-numeral font-bold text-navy whitespace-nowrap text-base">
                        {unit.sba}{' '}
                        <span className="text-xs font-normal text-slate-500 font-sans">sq.ft</span>
                      </td>
                      <td className="py-4 px-6 text-slate-600 text-xs sm:text-sm">
                        {unit.features}
                      </td>
                      <td className="py-4 px-6 text-center whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{unit.status}</span>
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1 text-xs font-bold text-maroon hover:underline"
                        >
                          <PhoneCall className="w-3 h-3" />
                          <span>Enquire Price</span>
                        </Link>
                      </td>
                    </tr>
                  ))}

                  {/* Total Row */}
                  <tr className="bg-gold-50/60 font-semibold text-navy">
                    <td className="py-4 px-6 uppercase tracking-wider font-bold">
                      Floor Total
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-600">
                      <span className="font-numeral font-bold">3</span> Residences
                    </td>
                    <td className="py-4 px-6 font-numeral font-bold text-maroon text-lg">
                      {totalSBA} <span className="text-xs font-normal font-sans">sq.ft</span>
                    </td>
                    <td colSpan={3} className="py-4 px-6 text-right text-xs text-slate-500">
                      Plus Ground Floor Covered Car Parking Bays
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Building Statement Footer Strip */}
            <div className="bg-navy-900 text-white p-5 px-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <p className="text-gold-300 font-semibold uppercase tracking-wider text-[10px]">
                  Total Floor Area
                </p>
                <p className="font-numeral font-bold text-lg mt-0.5 text-white">17,565 <span className="text-xs font-normal text-slate-300 font-sans">sq.ft</span></p>
              </div>
              <div>
                <p className="text-gold-300 font-semibold uppercase tracking-wider text-[10px]">
                  Structure
                </p>
                <p className="font-bold text-base mt-0.5">Ground + <span className="font-numeral">4</span> Floors</p>
              </div>
              <div>
                <p className="text-gold-300 font-semibold uppercase tracking-wider text-[10px]">
                  Ground Floor
                </p>
                <p className="font-bold text-base mt-0.5">Covered Parking</p>
              </div>
              <div>
                <p className="text-gold-300 font-semibold uppercase tracking-wider text-[10px]">
                  Architectural File
                </p>
                <p className="font-numeral text-slate-300 mt-0.5">DWG: 04 · Scale: NTS</p>
              </div>
            </div>

          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
