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
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--forest)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-auto hover:shadow-lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-[var(--forest)] text-[var(--paper)] hover:bg-[var(--forest-deep)] border border-[var(--forest-deep)] shadow-md shadow-[var(--forest)]/20',
  outline:
    'border border-[var(--line)] bg-[var(--paper)]/40 backdrop-blur-md text-[var(--ink)] hover:bg-[var(--paper)] shadow-sm',
  ghost: 'text-[var(--forest)] hover:bg-[var(--paper-alt)]/50 backdrop-blur-sm',
  light:
    'bg-white/90 backdrop-blur-lg text-[#17201b] hover:bg-white border border-white/40 shadow-md',
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
