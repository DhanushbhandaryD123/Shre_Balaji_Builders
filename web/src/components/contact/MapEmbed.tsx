import React from 'react'
import { MapPin, Navigation } from 'lucide-react'

interface MapEmbedProps {
  embedUrl?: string
}

export const MapEmbed: React.FC<MapEmbedProps> = ({
  embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.203875560965!2d74.76189537508383!3d13.337637887012588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4bb21a719ab%3A0xe7c4ec2646c2efaa!2sIndrali%20Railway%20Station!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-navy/10 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-maroon uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>Interactive Location</span>
          </div>
          <h4 className="font-serif font-bold text-xl text-navy mt-0.5">
            Balaji Bentota at Indrali, Udupi
          </h4>
        </div>

        <a
          href="https://maps.google.com/?q=Indrali+Railway+Station+Road+Kunjibettu+Udupi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy hover:bg-navy-800 text-white text-xs font-semibold shadow-sm transition-all"
        >
          <Navigation className="w-3.5 h-3.5 text-gold" />
          <span>Get Driving Directions</span>
        </a>
      </div>

      {/* Responsive iframe */}
      <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-navy/10 shadow-inner relative">
        <iframe
          src={embedUrl}
          title="Balaji Bentota Location Map"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Proximity Highlights */}
      <div className="mt-6 pt-6 border-t border-navy/5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-600">
        <div>
          <strong className="text-navy block">Railway Station</strong>
          <span className="text-[11px] text-slate-500">Under 2 mins walk</span>
        </div>
        <div>
          <strong className="text-navy block">Kunjibettu Junction</strong>
          <span className="text-[11px] text-slate-500">approx. 1.2 km</span>
        </div>
        <div>
          <strong className="text-navy block">Manipal University</strong>
          <span className="text-[11px] text-slate-500">approx. 3.5 km</span>
        </div>
        <div>
          <strong className="text-navy block">Krishna Temple Udupi</strong>
          <span className="text-[11px] text-slate-500">approx. 2.8 km</span>
        </div>
      </div>
    </div>
  )
}
