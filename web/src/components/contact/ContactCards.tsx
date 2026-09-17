import React from 'react'
import { Phone, MapPin, Mail, Building, Clock } from 'lucide-react'

export const ContactCards: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Booking Hotlines Card */}
      <div className="bg-navy text-white rounded-3xl p-8 border border-white/10 shadow-xl relative overflow-hidden">
        <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/40 flex items-center justify-center text-gold mb-6">
          <Phone className="w-6 h-6" />
        </div>
        <h4 className="font-serif font-bold text-xl text-white mb-2">
          Direct Booking Hotlines
        </h4>
        <p className="text-xs text-slate-300 mb-6 font-light">
          Call our sales desk directly for immediate answers regarding apartment availability, floor preference, and pricing.
        </p>

        <div className="space-y-3">
          <a
            href="tel:+919740763625"
            className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10 group"
          >
            <span className="text-sm font-semibold text-white font-numeral">+91 9740763625</span>
            <span className="text-xs text-gold group-hover:underline">Call Now &rarr;</span>
          </a>

          <a
            href="tel:+918660576288"
            className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10 group"
          >
            <span className="text-sm font-semibold text-white font-numeral">+91 8660576288</span>
            <span className="text-xs text-gold group-hover:underline">Call Now &rarr;</span>
          </a>

          <a
            href="tel:+917795716581"
            className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10 group"
          >
            <span className="text-sm font-semibold text-white font-numeral">+91 7795716581</span>
            <span className="text-xs text-gold group-hover:underline">Call Now &rarr;</span>
          </a>
        </div>
      </div>

      {/* Addresses Card */}
      <div className="bg-white rounded-3xl p-8 border border-navy/10 shadow-lg space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-maroon-50 text-maroon flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h5 className="font-serif font-bold text-sm text-navy">
              Project Site Address
            </h5>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              <strong>Balaji Bentota</strong>
              <br />
              Indrali Railway Station Road,
              <br />
              Kunjibettu, Udupi – <span className="font-numeral">576102</span>, Karnataka
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 pt-4 border-t border-navy/5">
          <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy flex items-center justify-center shrink-0">
            <Building className="w-5 h-5" />
          </div>
          <div>
            <h5 className="font-serif font-bold text-sm text-navy">
              Registered Office
            </h5>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              <strong>Shri Balaji Builders &amp; Developers</strong>
              <br />
              “Shri Balaji”, Udyavara,
              <br />
              Udupi Dist., Karnataka, India
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 pt-4 border-t border-navy/5">
          <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h5 className="font-serif font-bold text-sm text-navy">
              Office &amp; Site Timings
            </h5>
            <p className="text-xs text-slate-600 mt-1">
              Monday to Sunday: <span className="font-numeral">9:00 AM – 7:30 PM</span> (Site visits on request)
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
