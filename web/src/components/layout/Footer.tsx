import React from 'react'
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, Clock, Building } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1628] text-slate-200 relative overflow-hidden border-t-2 border-gold/40">
      {/* Top Gold Accent Glow */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-maroon/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        {/* Main 4-Column Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Developer & Brand */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 px-4 rounded-2xl border border-gold/40 shadow-lg inline-block">
              <img
                src="/assets/shri_balaji_logo_transparent.png"
                alt="Shri Balaji Builders & Developers"
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-slate-300 italic font-serif leading-relaxed border-l-2 border-gold/50 pl-3 py-0.5">
              “Transforming Ideas into Landmark — A Landmark For Your Legacy.”
            </p>


            <div className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-1 text-xs">
              <div className="flex items-center gap-1.5 text-gold font-semibold uppercase tracking-wider text-[10px]">
                <Building className="w-3 h-3 text-gold" />
                <span>Registered Office</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                “Shri Balaji”, Udyavara, Udupi Dist., Karnataka, India
              </p>
            </div>
          </div>

          {/* Column 2: Landmark Project & Configurations */}
          <div className="space-y-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold block mb-1">
                Project Overview
              </span>
              <h4 className="font-serif font-bold text-base text-white">
                Balaji Bentota
              </h4>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Indrali Railway Station Road,
                  <br />
                  Kunjibettu, Udupi – 576102
                </p>
              </div>

              {/* Apartment Configurations */}
              <div className="bg-navy-950/80 p-3 rounded-xl border border-white/5 space-y-2 text-[11px]">
                <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
                  <span className="text-slate-400">2 BHK Residences</span>
                  <span className="font-numeral text-white font-semibold">1304 &amp; 1340 sq.ft</span>
                </div>
                <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
                  <span className="text-slate-400">3 BHK Residences</span>
                  <span className="font-numeral text-white font-semibold">1540 – 1595 sq.ft</span>
                </div>
                <div className="flex justify-between items-center text-[10px] text-gold">
                  <span>Structure: Ground + <span className="font-numeral">4</span> Floors</span>
                  <span>Covered Stilt Parking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Booking Hotlines */}
          <div className="space-y-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold block mb-1">
                Direct Inquiries
              </span>
              <h4 className="font-serif font-bold text-base text-white">
                Booking Hotlines
              </h4>
            </div>

            <div className="space-y-2">
              <a
                href="tel:+919740763625"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-maroon hover:border-maroon-600 text-white border border-white/10 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-gold group-hover:text-white transition-colors" />
                  <span className="text-xs font-semibold tracking-wide font-numeral">+91 9740763625</span>
                </div>
                <span className="text-[10px] uppercase font-semibold text-gold group-hover:text-white transition-colors">
                  Primary &rarr;
                </span>
              </a>

              <a
                href="tel:+918660576288"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-maroon hover:border-maroon-600 text-white border border-white/10 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-gold group-hover:text-white transition-colors" />
                  <span className="text-xs font-semibold tracking-wide font-numeral">+91 8660576288</span>
                </div>
                <span className="text-[10px] uppercase font-semibold text-gold group-hover:text-white transition-colors">
                  Sales &rarr;
                </span>
              </a>

              <a
                href="tel:+917795716581"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-maroon hover:border-maroon-600 text-white border border-white/10 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-gold group-hover:text-white transition-colors" />
                  <span className="text-xs font-semibold tracking-wide font-numeral">+91 7795716581</span>
                </div>
                <span className="text-[10px] uppercase font-semibold text-gold group-hover:text-white transition-colors">
                  Desk &rarr;
                </span>
              </a>


              <a
                href="mailto:info@balajibentota.com"
                className="flex items-center gap-2 px-2.5 py-1.5 text-[11px] text-slate-300 hover:text-gold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-gold" />
                <span>info@balajibentota.com</span>
              </a>
            </div>
          </div>

          {/* Column 4: Architectural Consultant Card */}
          <div className="space-y-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold block mb-1">
                Design &amp; Engineering
              </span>
              <h4 className="font-serif font-bold text-base text-white">
                Consultant
              </h4>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10 shadow-lg space-y-2.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span className="font-semibold text-white text-xs">
                  A.G. Associates
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Architects, Engineers, Town Planners &amp; Approved Valuers
              </p>
              
              <div className="pt-2 border-t border-white/10 space-y-1.5 text-[10px]">
                <div className="inline-block px-2 py-0.5 rounded bg-gold/10 text-gold font-medium border border-gold/20">
                  ISO 9001:2015 Certified
                </div>
                <p className="text-slate-400 text-[10px]">AGA Kantilever, Udupi</p>
                <a
                  href="http://agaudupi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold hover:text-white hover:underline pt-1 text-[11px] font-medium"
                >
                  <span>Visit agaudupi.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Balanced Copyright & Professional Real Estate Legal Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} <strong className="text-slate-200">Shri Balaji Builders &amp; Developers</strong>. All rights reserved.
          </p>
          <p className="text-center md:text-right text-[11px] max-w-xl text-slate-400 leading-normal">
            Disclaimer: The images, architectural plans, specifications, and dimensions shown are based on approved municipal plans and marketing documents, and are subject to minor modifications as per site conditions and local guidelines.
          </p>
        </div>
      </div>
    </footer>
  )
}

