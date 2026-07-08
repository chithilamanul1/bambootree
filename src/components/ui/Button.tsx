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
}

interface ButtonAsLink extends BaseProps {
  href: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2e4a3f] focus-visible:ring-offset-2'

const variants: Record<Variant, string> = {
  primary:
    'bg-[#2e4a3f] text-white hover:bg-[#22382f] hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(46,74,63,0.6)]',
  outline:
    'border border-[#d6ddce] text-[#17201b] hover:border-[#2e4a3f] hover:bg-[#eef1ea]',
  ghost: 'text-[#2e4a3f] hover:text-[#22382f]',
  light:
    'bg-white text-[#17201b] hover:bg-[#f4f4f1] hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.4)]',
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', className = '', children } = props
  const classes = `${base} ${variants[variant]} ${className}`

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    )
  }

  const { onClick, type = 'button' } = props as ButtonAsButton
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
