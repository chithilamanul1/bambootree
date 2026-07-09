'use client'

import React from 'react'
import Link from 'next/link'

type Variant = 'primary' | 'outline' | 'ghost' | 'light'

interface BaseProps {
  variant?: Variant
  className?: string
  children: React.ReactNode
}

interface ButtonAsButton extends BaseProps {
  href?: undefined
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

interface ButtonAsLink extends BaseProps {
  href: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--forest)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-auto'

const variants: Record<Variant, string> = {
  primary:
    'bg-[#003b95] text-white hover:bg-[#00224f] shadow-md border border-[#003b95]', // Booking.com style sharp blue CTA
  outline:
    'border-2 border-[var(--forest)] text-[var(--ink)] hover:bg-[var(--forest)] hover:text-[var(--paper)]',
  ghost: 'text-[var(--forest)] hover:bg-[var(--paper-alt)]',
  light:
    'bg-[var(--paper)] text-[var(--ink)] hover:bg-[var(--paper-alt)] shadow-sm border border-[var(--line)]',
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', className = '', children } = props
  const classes = `${base} ${variants[variant]} ${className}`

  if ('href' in props && props.href) {
    if (props.href.startsWith('http')) {
      return (
        <a href={props.href} target="_blank" rel="noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    )
  }

  const { onClick, type = 'button', disabled } = props as ButtonAsButton
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
