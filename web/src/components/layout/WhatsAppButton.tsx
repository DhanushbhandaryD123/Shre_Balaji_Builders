import React, { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'

interface WhatsAppButtonProps {
  phoneNumber?: string
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '919740763625',
}) => {
  const [shouldPulse, setShouldPulse] = useState(true)

  useEffect(() => {
    // Pulse animation runs for 2 cycles (approx 5 seconds) then stops to stay non-intrusive
    const timer = setTimeout(() => {
      setShouldPulse(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const defaultMessage = encodeURIComponent(
    'Hello Shri Balaji Builders, I am interested in Balaji Bentota (2 & 3 BHK Apartments in Indrali, Udupi). Please share floor plans and pricing details.'
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`

  return (
    <aside
      aria-label="Quick Contact Actions"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 flex flex-col gap-2.5 sm:gap-3.5 items-start pointer-events-auto"
    >
      {/* 1. Real Phone Call Icon Floating Button (Left Side) */}
      <div className="relative flex items-center group">
        <a
          href="tel:+919740763625"
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-navy via-navy to-navy-950 text-gold hover:text-white border-2 border-gold/60 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-maroon hover:border-white/50"
          aria-label="Direct Call to Shri Balaji Builders Desk"
          title="Direct Call to Booking Desk"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-12" />
        </a>

        {/* Hover Tooltip (appears to the right) */}
        <span className="hidden sm:inline-block ml-3 px-3 py-1.5 text-xs font-semibold text-white bg-navy-950/90 backdrop-blur-md shadow-xl border border-gold/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap transform translate-x-1 group-hover:translate-x-0">
          Direct Call to Desk
        </span>
      </div>

      {/* 2. Real Official WhatsApp Icon Floating Button (Left Side) */}
      <div className="relative flex items-center group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/40 ${
            shouldPulse ? 'animate-pulse-subtle' : ''
          }`}
          aria-label="Chat with Shri Balaji Builders on WhatsApp"
          title="Chat on WhatsApp"
        >
          {/* Authentic Official WhatsApp Vector Icon */}
          <svg className="w-5 h-5 sm:w-7 sm:h-7 fill-white" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8 2.53 1.09 2.53.73 2.99.69.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
          </svg>
        </a>

        {/* Hover Tooltip (appears to the right) */}
        <span className="hidden sm:inline-block ml-3 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-950/90 backdrop-blur-md shadow-xl border border-emerald-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap transform translate-x-1 group-hover:translate-x-0">
          Chat on WhatsApp
        </span>
      </div>
    </aside>
  )
}

