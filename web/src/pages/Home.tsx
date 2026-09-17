import React, { useEffect, useState } from 'react'
import { SEO } from '../components/shared/SEO'
import { SEO_DATA } from '../lib/seo'
import { Hero } from '../components/home/Hero'
import { HighlightsStrip } from '../components/home/HighlightsStrip'
import { AboutTeaser } from '../components/home/AboutTeaser'
import { FloorPlanTeaser } from '../components/home/FloorPlanTeaser'
import { AmenitiesPreview } from '../components/home/AmenitiesPreview'
import { GalleryPreview } from '../components/home/GalleryPreview'
import { QuickContactBand } from '../components/home/QuickContactBand'
import { MapEmbed } from '../components/contact/MapEmbed'
import {
  getHeroSection,
  DEFAULT_HERO_SECTION,
} from '../lib/sanityClient'
import { HeroSection } from '../types'

export const Home: React.FC = () => {
  const [heroData, setHeroData] = useState<HeroSection>(DEFAULT_HERO_SECTION)

  useEffect(() => {
    getHeroSection().then(setHeroData)
  }, [])

  return (
    <main className="min-h-screen">
      <SEO meta={SEO_DATA.home} />

      {/* 1. Hero Section with Ken-Burns / Video & Headline */}
      <Hero data={heroData} />

      {/* 2. Floating Highlights Strip with 2/3 BHK specs */}
      <HighlightsStrip />

      {/* 3. About Teaser with authentic brochure graphics */}
      <AboutTeaser />

      {/* 4. Amenities & Facilities Grid */}
      <AmenitiesPreview />

      {/* 5. Floor Plan Blueprint Teaser with 2BHK/3BHK toggle */}
      <FloorPlanTeaser />

      {/* 6. Gallery Teaser */}
      <GalleryPreview />

      {/* 7. Quick Location Map Snapshot */}
      <section className="py-16 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MapEmbed />
        </div>
      </section>

      {/* 8. Final Call to Action Enquiry & Hotline Band */}
      <QuickContactBand />
    </main>
  )
}
