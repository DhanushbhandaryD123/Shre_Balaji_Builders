import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'

export const Preloader: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('balaji_preloader_seen')
    }
    return false
  })

  const overlayRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mounted) return

    const overlay = overlayRef.current
    const logo = logoRef.current
    const text = textRef.current

    if (!overlay || !logo) {
      setMounted(false)
      return
    }

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('balaji_preloader_seen', 'true')
        setMounted(false)
      },
    })

    // Animation timeline: fade & scale logo -> reveal text -> wipe overlay up
    tl.fromTo(
      logo,
      { opacity: 0, scale: 0.85, y: 15 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    )
      .fromTo(
        text,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
        '-=0.2'
      )
      .to([logo, text], {
        opacity: 0,
        y: -15,
        duration: 0.4,
        delay: 0.4,
        ease: 'power2.in',
      })
      .to(overlay, {
        yPercent: -100,
        duration: 0.7,
        ease: 'power3.inOut',
      })

    return () => {
      tl.kill()
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy text-white pointer-events-auto"
      style={{ willChange: 'transform' }}
    >
      <div ref={logoRef} className="flex flex-col items-center gap-4">
        {/* Official Brand Logo */}
        <div className="bg-white p-4 px-6 rounded-2xl border-2 border-gold/70 shadow-2xl">
          <img
            src="/assets/shri_balaji_logo_transparent.png"
            alt="Shri Balaji Builders & Developers"
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </div>
      </div>


      <div ref={textRef} className="mt-5 text-center px-4">
        <p className="text-xl font-serif tracking-wide text-white font-semibold">
          BALAJI BENTOTA
        </p>
        <p className="text-xs uppercase tracking-[0.25em] text-gold-300 mt-1">
          A Landmark For Your Legacy
        </p>
      </div>
    </div>
  )
}
