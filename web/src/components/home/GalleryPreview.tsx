import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye } from 'lucide-react'
import { SectionReveal } from '../shared/SectionReveal'
import { Badge } from '../shared/Badge'

export const GalleryPreview: React.FC = () => {
  const previewImages = [
    {
      src: '/assets/elevation-luxury.jpg',
      title: 'Architectural Elevation',
      category: 'Front Exterior View',
      span: 'sm:col-span-2 lg:col-span-2',
    },
    {
      src: '/assets/living-dining-luxury.jpg',
      title: 'Luxury Living & Balcony',
      category: 'Interior Residence',
      span: 'sm:col-span-1 lg:col-span-1',
    },
    {
      src: '/assets/typical-floor-plan.png',
      title: 'Typical Floor Blueprint',
      category: 'Approved Floor Plan',
      span: 'sm:col-span-1 lg:col-span-1',
    },
    {
      src: '/assets/elevator-lobby-luxury.jpg',
      title: 'Grand Entrance & Automatic Lift',
      category: 'Building Amenities',
      span: 'sm:col-span-2 lg:col-span-2',
    },
  ]

  return (
    <section className="py-24 bg-bg-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionReveal yOffset={20}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy tracking-tight leading-tight">
              A Glimpse of Balaji Bentota
            </h2>
            <p className="text-slate-600 text-base max-w-xl mt-3">
              Browse the authentic architectural elevation, floor plan drawings, and project presentations.
            </p>
          </SectionReveal>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-maroon transition-colors shrink-0 group"
          >
            <span>View Complete Gallery (Filter &amp; Lightbox)</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {previewImages.map((img, idx) => (
            <SectionReveal key={idx} yOffset={25} delay={idx * 0.08} className={img.span}>
              <Link
                to="/gallery"
                className="group relative block overflow-hidden rounded-2xl bg-white shadow-md border border-navy/5 aspect-[16/10] sm:aspect-auto sm:h-72"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-80 sm:opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300">
                      {img.category}
                    </span>
                    <h3 className="font-serif font-bold text-lg leading-tight mt-0.5">
                      {img.title}
                    </h3>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
