import React, { useState } from 'react'
import { Send, CheckCircle2, MessageSquare, Calendar } from 'lucide-react'
import { submitEnquiry } from '../../lib/submitEnquiry'

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    unitInterest: '3BHK',
    message: '',
    siteVisitRequested: false,
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{
    type: 'success' | 'error'
    text: string
    waUrl?: string
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const result = await submitEnquiry(formData)
    setLoading(false)

    if (result.success) {
      setStatus({
        type: 'success',
        text: result.message,
        waUrl: result.whatsappUrl,
      })
      setFormData({
        name: '',
        phone: '',
        email: '',
        unitInterest: '3BHK',
        message: '',
        siteVisitRequested: false,
      })
    } else {
      setStatus({
        type: 'error',
        text: result.message,
      })
    }
  }

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-navy/10">
      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy mb-2">
        Request Pricing &amp; Brochure
      </h3>
      <p className="text-sm text-slate-500 mb-8">
        Leave your details below. Our sales manager will contact you with current availability, customized payment schedule, and loan guidance.
      </p>

      {status && (
        <div
          className={`p-4 rounded-2xl mb-8 text-sm flex flex-col gap-2 ${
            status.type === 'success'
              ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
              : 'bg-rose-50 text-rose-900 border border-rose-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="font-semibold">{status.text}</span>
          </div>
          {status.waUrl && (
            <a
              href={status.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-xs font-bold inline-flex items-center gap-1.5 text-emerald-800 underline decoration-emerald-500 hover:text-emerald-950"
            >
              <span>Click to notify our team on WhatsApp immediately &rarr;</span>
            </a>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ramesh Shetty"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-navy/15 focus:border-maroon focus:ring-2 focus:ring-maroon/20 text-sm outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-navy/15 focus:border-maroon focus:ring-2 focus:ring-maroon/20 text-sm outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
              Email Address (Optional)
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-navy/15 focus:border-maroon focus:ring-2 focus:ring-maroon/20 text-sm outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
              Unit Configuration *
            </label>
            <select
              value={formData.unitInterest}
              onChange={(e) => setFormData({ ...formData, unitInterest: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-navy/15 focus:border-maroon focus:ring-2 focus:ring-maroon/20 text-sm outline-none transition-all bg-white"
            >
              <option value="3BHK">3 BHK (1540 to 1595 sq.ft)</option>
              <option value="2BHK">2 BHK (1304 to 1340 sq.ft)</option>
              <option value="Both">Both 2 &amp; 3 BHK Options</option>
              <option value="General">General Enquiry / Investment</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
            Your Message or Specific Requirements
          </label>
          <textarea
            rows={4}
            placeholder="Mention your preferred floor, budget range, or questions regarding home loans..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-navy/15 focus:border-maroon focus:ring-2 focus:ring-maroon/20 text-sm outline-none transition-all"
          />
        </div>

        <div className="p-4 rounded-xl bg-bg-alt border border-navy/10 flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            id="visitReq"
            checked={formData.siteVisitRequested}
            onChange={(e) =>
              setFormData({ ...formData, siteVisitRequested: e.target.checked })
            }
            className="mt-0.5 rounded border-navy/30 text-maroon focus:ring-maroon h-4 w-4"
          />
          <label htmlFor="visitReq" className="text-xs text-navy font-medium select-none cursor-pointer">
            <span className="font-bold text-maroon block mb-0.5">
              Request On-Site Inspection / Meeting
            </span>
            I would like the builder to arrange a site visit at Indrali Railway Station Road, Kunjibettu, Udupi.
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-maroon hover:bg-maroon-800 text-white font-semibold text-base shadow-xl shadow-maroon/20 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
        >
          <Send className="w-4 h-4" />
          <span>{loading ? 'Submitting...' : 'Submit Booking Enquiry'}</span>
        </button>
      </form>
    </div>
  )
}
