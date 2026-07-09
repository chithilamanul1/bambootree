'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuIcon, XIcon, LeafIcon, PhoneIcon } from 'lucide-react'
import { Button } from '../ui/Button'
import { ThemeToggle } from '../ui/ThemeToggle'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Rooms', href: '/rooms' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Blooms', href: '/flowers' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const overlay = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const textColor = overlay ? 'text-white' : 'text-[var(--ink)]'
  const subColor = overlay ? 'text-white/70' : 'text-[var(--muted)]'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        overlay
          ? 'bg-transparent'
          : 'border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur-md'
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="The Bamboo Tree home"
        >
          <img 
            src="/logo.svg" 
            alt="The Bamboo Tree Logo" 
            className="h-9 w-9 shrink-0 rounded-full" 
          />
          <span className="flex flex-col leading-none mt-0.5">
            <span 
              className={`text-3xl pr-1 ${textColor}`} 
              style={{ fontFamily: 'var(--font-great-vibes), cursive' }}
            >
              The Bamboo Tree
            </span>
            <span className={`text-[10px] uppercase tracking-[0.3em] ${subColor}`}>
              Transit Hotel
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {links.map((l) => {
            const isActive = pathname === l.href
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm tracking-wide transition-colors ${
                    overlay
                      ? isActive
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                      : isActive
                        ? 'text-[var(--forest)]'
                        : 'text-[var(--muted)] hover:text-[var(--ink)]'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+94767269361"
            className={`flex items-center gap-2 text-sm ${
              overlay ? 'text-white/80' : 'text-[var(--muted)]'
            }`}
          >
            <PhoneIcon className="h-4 w-4" /> +94 76 726 9361
          </a>
          <ThemeToggle overlay={overlay} />
          <Button href="https://www.booking.com/hotel/lk/the-bamboo-tree-transit.html" variant={overlay ? 'light' : 'primary'}>
            Book your stay
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle overlay={overlay} />
          <button
            className={`${textColor}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[var(--line)] bg-[var(--paper)] lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => {
                const isActive = pathname === l.href
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`block rounded-lg px-3 py-3 text-base transition-colors ${
                        isActive
                          ? 'bg-[var(--sage)] text-[var(--forest)]'
                          : 'text-[var(--ink-soft)] hover:bg-[var(--paper-alt)]'
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                )
              })}
              <li className="pt-2">
                <Button href="https://www.booking.com/hotel/lk/the-bamboo-tree-transit.html" variant="primary" className="w-full">
                  Book your stay
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
