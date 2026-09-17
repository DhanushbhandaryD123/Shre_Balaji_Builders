import React, { useState, useEffect } from 'react'
import { SEO } from '../components/shared/SEO'
import { SEO_DATA } from '../lib/seo'
import { MasonryGallery } from '../components/gallery/MasonryGallery'
import { SectionReveal } from '../components/shared/SectionReveal'
import { Badge } from '../components/shared/Badge'
import { getGalleryImages, DEFAULT_GALLERY_IMAGES } from '../lib/sanityClient'
import { GalleryImage } from '../types'

export const Gallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>(DEFAULT_GALLERY_IMAGES)

  useEffect(() => {
    getGalleryImages().then(setImages)
  }, [])

  return (
    <main className="min-h-screen pt-24 bg-white">
      <SEO meta={SEO_DATA.gallery} />

      {/* Gallery Header */}
      <section className="bg-navy py-16 sm:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-maroon/20 via-navy to-navy pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionReveal yOffset={20}>
            <Badge variant="gold" className="mb-4 text-gold-300 border-gold/40">
              Visual Tour
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight mb-4">
              Project Gallery &amp; Blueprints
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Explore the architectural front elevation, floor plan blueprints, brochure documentation, and conceptual interior visualizations of Balaji Bentota.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Masonry Gallery with Filters & Lightbox */}
      <MasonryGallery images={images} />
    </main>
  )
}
