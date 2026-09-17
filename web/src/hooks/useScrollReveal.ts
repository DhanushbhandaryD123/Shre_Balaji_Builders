import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ANIMATION } from '../lib/animationConfig'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealOptions {
  yOffset?: number
  duration?: number
  delay?: number
  stagger?: number
  selector?: string // For animating children items
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      if (options.selector) {
        gsap.set(el.querySelectorAll(options.selector), { opacity: 1, y: 0 })
      } else {
        gsap.set(el, { opacity: 1, y: 0 })
      }
      return
    }

    const {
      yOffset = 35,
      duration = ANIMATION.duration.normal,
      delay = 0,
      stagger = 0,
      selector,
    } = options

    let ctx = gsap.context(() => {
      const targets = selector ? el.querySelectorAll(selector) : el

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: yOffset,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger: stagger || undefined,
          ease: ANIMATION.ease.smooth,
          scrollTrigger: {
            trigger: el,
            start: ANIMATION.scrollTrigger.start,
            toggleActions: ANIMATION.scrollTrigger.toggleActions,
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [options.yOffset, options.duration, options.delay, options.stagger, options.selector])

  return ref
}
