import React from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  yOffset?: number
  delay?: number
  stagger?: number
  selector?: string
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  className = '',
  yOffset = 35,
  delay = 0,
  stagger = 0,
  selector,
}) => {
  const containerRef = useScrollReveal<HTMLDivElement>({
    yOffset,
    delay,
    stagger,
    selector,
  })

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
