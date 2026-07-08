import React from 'react'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  tone?: 'dark' | 'light'
}

export function SectionLabel({
  children,
  className = '',
  tone = 'dark',
}: SectionLabelProps) {
  const color = tone === 'light' ? 'text-white/80' : 'text-[#7b827b]'
  const dot = tone === 'light' ? 'bg-white/70' : 'bg-[#2e4a3f]'
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] ${color} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} aria-hidden="true" />
      {children}
    </span>
  )
}
