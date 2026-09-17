import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ANIMATION } from '../../lib/animationConfig'

gsap.registerPlugin(ScrollTrigger)

interface ImageRevealProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string
  aspectRatio?: string
  alt: string
  src: string
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  containerClassName = '',
  aspectRatio = 'aspect-[4/3]',
  alt,
  src,
  className = '',
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const img = imageRef.current
    if (!container || !img) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      gsap.set(container, { clipPath: 'inset(0% 0% 0% 0%)' })
      gsap.set(img, { scale: 1 })
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: ANIMATION.scrollTrigger.toggleActions,
        },
      })

      tl.fromTo(
        container,
        { clipPath: 'inset(6% 6% 6% 6% round 1rem)' },
        { clipPath: 'inset(0% 0% 0% 0% round 1rem)', duration: 0.85, ease: ANIMATION.ease.smooth }
      )

      tl.fromTo(
        img,
        { scale: 1.14 },
        { scale: 1, duration: 0.9, ease: ANIMATION.ease.smooth },
        '<0.05'
      )
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden rounded-2xl relative bg-navy-100 ${aspectRatio} ${containerClassName}`}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover will-change-transform ${className}`}
        {...props}
      />
    </div>
  )
}
