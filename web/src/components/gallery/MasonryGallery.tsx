import React, { useState } from 'react'
import { GalleryImage } from '../../types'
import { SectionReveal } from '../shared/SectionReveal'
import { Badge } from '../shared/Badge'
import { Lightbox } from './Lightbox'
import { Marquee } from '../shared/Marquee'
import { Eye, Layers } from 'lucide-react'

interface MasonryGalleryProps {
  images: GalleryImage[]
}

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const categories = [
    { label: 'All Showcase', value: 'all' },
    { label: 'Elevation & Exterior', value: 'exterior' },
    { label: 'Blueprints & Floor Plans', value: 'floorplan' },
    { label: 'Interior Concept', value: 'interior' },
    { label: 'Site Construction', value: 'construction' },
  ]

  const filteredImages =
    selectedCategory === 'all'
      ? images
      : images.filter((img) => img.category === selectedCategory)

  return (
    <div className="relative py-12">
      {/* Decorative Watermark Marquee running behind gallery */}
      <div className="absolute top-20 left-0 right-0 z-0 opacity-10 overflow-hidden pointer-events-none">
        <Marquee
          text="BALAJI BENTOTA · 2 & 3 BHK · ARCHITECTURAL EXCELLENCE · A.G. ASSOCIATES · UDUPI · "
          speedSeconds={32}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.value
                  ? 'bg-maroon text-white shadow-md scale-105'
                  : 'bg-white text-navy/80 hover:text-navy border border-navy/10 hover:bg-navy-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <SectionReveal key={img._id || idx} yOffset={25} delay={(idx % 6) * 0.06}>
              <div
                onClick={() => setLightboxIndex(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md border border-navy/10 aspect-[4/3] flex flex-col justify-end"
              >
                <img
                  src={img.imageUrl}
                  alt={img.title || 'Balaji Bentota Gallery Item'}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="relative z-10 p-5 text-white flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300">
                      {img.category}
                    </span>
                    <h4 className="font-serif font-bold text-base sm:text-lg leading-tight mt-0.5">
                      {img.title}
                    </h4>
                    {img.caption && (
                      <p className="text-xs text-slate-300 line-clamp-1 mt-1 font-light">
                        {img.caption}
                      </p>
                    )}
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            <Layers className="w-12 h-12 text-navy/20 mx-auto mb-3" />
            <p>No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() =>
            setLightboxIndex((prev) =>
              prev === null ? 0 : (prev + 1) % filteredImages.length
            )
          }
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev === null
                ? 0
                : (prev - 1 + filteredImages.length) % filteredImages.length
            )
          }
        />
      )}
    </div>
  )
}
