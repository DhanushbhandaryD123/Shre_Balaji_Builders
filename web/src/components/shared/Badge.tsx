import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'maroon' | 'navy' | 'outline'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  className = '',
}) => {
  const variantStyles = {
    gold: 'bg-gold-50 text-gold-800 border-gold-200/80',
    maroon: 'bg-maroon-50 text-maroon-700 border-maroon-200/70',
    navy: 'bg-navy-50 text-navy-800 border-navy-200',
    outline: 'bg-transparent text-navy-700 border-navy-200',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
