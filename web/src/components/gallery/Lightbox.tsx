import React, { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { GalleryImage } from '../../types'

interface LightboxProps {
  images: GalleryImage[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const current = images[currentIndex]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [onClose, onNext, onPrev])

  if (!current) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar: Counter & Close */}
      <div className="flex items-center justify-between text-white w-full max-w-6xl mx-auto z-10">
        <div className="text-xs sm:text-sm font-medium text-slate-300">
          <span className="font-bold text-gold">{currentIndex + 1}</span> of{' '}
          <span>{images.length}</span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage & Prev/Next Controls */}
      <div
        className="relative flex items-center justify-center max-w-6xl w-full mx-auto my-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-navy-900/80 hover:bg-maroon text-white border border-white/20 shadow-xl transition-all hover:scale-110 active:scale-95"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Current Image */}
        <div className="max-h-[75vh] max-w-full flex items-center justify-center">
          <img
            src={current.imageUrl}
            alt={current.title || 'Balaji Bentota Gallery Image'}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-250 bg-white/5"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-navy-900/80 hover:bg-maroon text-white border border-white/20 shadow-xl transition-all hover:scale-110 active:scale-95"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Info Bar: Title & Caption */}
      <div
        className="text-center max-w-2xl mx-auto text-white z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {current.title && (
          <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
            {current.title}
          </h4>
        )}
        {current.caption && (
          <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light">
            {current.caption}
          </p>
        )}
      </div>
    </div>
  )
}
