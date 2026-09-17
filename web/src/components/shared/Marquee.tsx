import React from 'react'

interface MarqueeProps {
  text?: string
  items?: string[]
  className?: string
  speedSeconds?: number
}

export const Marquee: React.FC<MarqueeProps> = ({
  text = 'BALAJI BENTOTA · 2 & 3 BHK RESIDENCES · KUNJIBETTU UDUPI · A LANDMARK FOR YOUR LEGACY · ',
  items,
  className = '',
  speedSeconds = 35,
}) => {
  const content = items ? items.join(' · ') + ' · ' : text

  return (
    <div
      className={`overflow-hidden select-none pointer-events-none py-3 relative w-full ${className}`}
      aria-hidden="true"
    >
      <div
        className="marquee-track flex whitespace-nowrap text-navy/10 dark:text-navy/5 font-serif font-bold uppercase tracking-widest text-4xl sm:text-6xl md:text-8xl"
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        <span>{content}</span>
        <span>{content}</span>
        <span>{content}</span>
        <span>{content}</span>
      </div>
    </div>
  )
}
