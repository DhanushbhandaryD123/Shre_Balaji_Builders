import React, { useState } from 'react'
import { Phone, Mail, MapPin, CheckCircle, Send } from 'lucide-react'
import { SectionReveal } from '../shared/SectionReveal'
import { Badge } from '../shared/Badge'
import { submitEnquiry } from '../../lib/submitEnquiry'

export const QuickContactBand: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    unitInterest: '3BHK',
    message: '',
    siteVisitRequested: true,
  })
  const [submitting, setSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string; waUrl?: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setStatusMessage(null)

    const result = await submitEnquiry(formData)
    setSubmitting(false)

    if (result.success) {
      setStatusMessage({ type: 'success', text: result.message, waUrl: result.whatsappUrl })
      setFormData({
        name: '',
        phone: '',
        email: '',
        unitInterest: '3BHK',
        message: '',
        siteVisitRequested: false,
      })
    } else {
      setStatusMessage({ type: 'error', text: result.message })
    }
  }

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-3xl overflow-hidden shadow-2xl border border-navy/10 grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Direct Call & Location Details */}
          <div className="lg:col-span-5 p-8 sm:p-12 text-white flex flex-col justify-between bg-gradient-to-br from-navy via-navy to-navy-950 border-b lg:border-b-0 lg:border-r border-white/10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-4">
                Secure Your Home at Balaji Bentota
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Connect directly with the builders for detailed floor plan walkthroughs, availability, and exclusive booking offers.
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase text-gold-300 font-semibold tracking-wider">
                      Hotlines (Click to Call)
                    </p>
                    <div className="flex flex-col gap-1 mt-1 text-base font-semibold">
                      <a href="tel:+919740763625" className="hover:text-gold transition-colors font-numeral">
                        +91 9740763625
                      </a>
                      <a href="tel:+918660576288" className="hover:text-gold transition-colors font-numeral">
                        +91 8660576288
                      </a>
                      <a href="tel:+917795716581" className="hover:text-gold transition-colors font-numeral">
                        +91 7795716581
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <MapPin className="w-5 h-5 text-maroon-300 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase text-gold-300 font-semibold tracking-wider">
                      Project Site
                    </p>
                    <p className="text-slate-300 text-xs leading-relaxed mt-0.5">
                      Balaji Bentota, Indrali Railway Station Road, Kunjibettu, Udupi – <span className="font-numeral">576102</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="pt-8 mt-8 border-t border-white/10 text-xs text-slate-300">
              <p className="font-semibold text-white">Shri Balaji Builders &amp; Developers</p>
              <p className="text-[11px] text-slate-300 mt-0.5">Registered Office: “Shri Balaji”, Udyavara, Udupi</p>
            </div>
          </div>

          {/* Right Column: Compact Fast Enquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white text-navy flex flex-col justify-center">
            <SectionReveal yOffset={20}>
              <h3 className="text-2xl font-serif font-bold text-navy mb-2">
                Send Direct Enquiry
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill in your contact details below and our team will get back to you within 24 hours.
              </p>

              {statusMessage && (
                <div
                  className={`p-4 rounded-xl mb-6 text-xs flex flex-col gap-2 ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  <p className="font-medium">{statusMessage.text}</p>
                  {statusMessage.waUrl && (
                    <a
                      href={statusMessage.waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold underline text-emerald-900"
                    >
                      <span>Click here to open WhatsApp confirmation</span>
                    </a>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy/80 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Shetty"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-navy/15 focus:border-maroon focus:ring-1 focus:ring-maroon text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy/80 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-navy/15 focus:border-maroon focus:ring-1 focus:ring-maroon text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy/80 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-navy/15 focus:border-maroon focus:ring-1 focus:ring-maroon text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy/80 mb-1">
                      Interested In
                    </label>
                    <select
                      value={formData.unitInterest}
                      onChange={(e) => setFormData({ ...formData, unitInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-navy/15 focus:border-maroon focus:ring-1 focus:ring-maroon text-sm outline-none transition-all bg-white"
                    >
                      <option value="3BHK">3 BHK (1540 – 1595 sq.ft)</option>
                      <option value="2BHK">2 BHK (1304 – 1340 sq.ft)</option>
                      <option value="Both">Both 2 &amp; 3 BHK</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy/80 mb-1">
                    Message or Specific Questions
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ask about floor availability, pricing, or loan assistance..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-navy/15 focus:border-maroon focus:ring-1 focus:ring-maroon text-sm outline-none transition-all"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="siteVisit"
                    checked={formData.siteVisitRequested}
                    onChange={(e) => setFormData({ ...formData, siteVisitRequested: e.target.checked })}
                    className="rounded border-navy/30 text-maroon focus:ring-maroon h-4 w-4"
                  />
                  <label htmlFor="siteVisit" className="text-xs text-slate-700 select-none cursor-pointer">
                    I would like to schedule an in-person site visit at Indrali, Udupi
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-maroon hover:bg-maroon-800 text-white font-semibold text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting Enquiry...' : 'Submit Enquiry & Receive Details'}</span>
                </button>
              </form>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
