import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X, ArrowRight } from 'lucide-react'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      // Switch class after 80px or 80vh on home page
      const threshold = isHomePage ? window.innerHeight * 0.75 : 50
      if (window.scrollY > threshold) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Project', path: '/project' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  // Decide visual styling:
  // If not scrolled and on home page -> dark frosted glass for maximum contrast over hero
  // Else -> crisp white background with navy text
  const isTransparent = isHomePage && !isScrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isTransparent
          ? 'bg-navy-950/80 backdrop-blur-md text-white border-b border-white/10 shadow-lg py-4'
          : 'bg-white/95 backdrop-blur-md text-navy shadow-md border-b border-navy/10 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Transparent Large Brand Logo */}
        <Link
          to="/"
          className="flex items-center group py-0.5"
          aria-label="Shri Balaji Builders & Developers Home"
        >
          <img
            src="/assets/shri_balaji_logo_transparent.png"
            alt="Shri Balaji Builders & Developers"
            className={`h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
              isTransparent
                ? 'drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)]'
                : 'drop-shadow-sm'
            }`}
          />
        </Link>

        {/* Desktop Navigation Links — High Contrast & Clear Typography */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-all hover-draw-underline ${
                  isActive
                    ? isTransparent
                      ? 'text-gold drop-shadow-sm font-bold'
                      : 'text-maroon font-bold'
                    : isTransparent
                    ? 'text-white hover:text-gold-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                    : 'text-navy/85 hover:text-maroon'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Action Area: Book Now CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-xl bg-maroon hover:bg-maroon-800 text-white shadow-md transition-all hover:scale-[1.02]"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>


        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isTransparent ? 'text-white hover:bg-white/10' : 'text-navy hover:bg-navy-50'
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-navy border-b border-navy/10 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3 py-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-medium py-2 px-3 rounded-md transition-colors ${
                    isActive
                      ? 'bg-maroon-50 text-maroon font-semibold'
                      : 'text-navy/80 hover:bg-navy-50'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          <div className="pt-4 border-t border-navy/10 flex flex-col gap-2.5">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+919740763625"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-navy-50 text-navy font-semibold text-xs border border-navy-100"
              >
                <Phone className="w-4 h-4 text-maroon" />
                <span>Call Us</span>
              </a>

              <a
                href="https://wa.me/919740763625?text=Hello%20Shri%20Balaji%20Builders%2C%20I%20am%20interested%20in%20Balaji%20Bentota%20Apartments."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-50 text-emerald-800 font-semibold text-xs border border-emerald-200"
              >
                <svg className="w-4 h-4 fill-emerald-600" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8 2.53 1.09 2.53.73 2.99.69.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-maroon text-white font-semibold text-sm shadow-sm"
            >
              <span>Schedule Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

