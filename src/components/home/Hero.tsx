'use client'

import React, { useState, ComponentType } from 'react'
import { motion } from 'framer-motion'
import { StarIcon, MapPinIcon, UsersIcon, CalendarIcon, ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react'

export function Hero() {
  const [location, setLocation] = useState('')
  const [guests, setGuests] = useState('1 Guest, 1 Room')
  const [dates, setDates] = useState('')

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden px-0 pt-0 lg:min-h-screen lg:px-6 lg:pt-6">
      <div className="relative mx-auto flex min-h-[90vh] max-w-[1400px] flex-col overflow-hidden rounded-none lg:min-h-[calc(100vh-2rem)] lg:rounded-[2rem]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2000&q=80"
            alt="Cabin glowing among misty bamboo forest at dusk"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/70" />
        </div>

        <div className="relative hidden flex-1 flex-col items-center justify-center pt-28 lg:flex">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="pointer-events-none select-none text-center font-serif-display text-[13rem] font-light leading-[0.9] tracking-editorial text-white/95"
          >
            Bamboo Tree
          </motion.div>
        </div>

        <div className="relative grid gap-5 px-5 pb-6 pt-24 lg:grid-cols-[1fr_auto] lg:gap-8 lg:items-end lg:px-12 lg:pb-12 lg:pt-0 lg:flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <span className="mb-3 hidden rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md sm:inline-flex lg:hidden">
              Bamboo Tree Transit Hotel
            </span>
            <h1 className="text-left font-serif-display text-4xl font-light leading-[1.05] tracking-editorial text-white sm:text-5xl lg:text-7xl">
              The Best Airport
              <br /> Transit Hotel
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-white/90">
              <span className="flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1 backdrop-blur-md">
                <StarIcon className="h-3.5 w-3.5 text-[#e2c56b]" fill="currentColor" strokeWidth={0} />
                <span className="text-sm font-medium">4.9</span>
              </span>
              <span className="text-sm font-medium tracking-wide">500+ Happy Travelers</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="w-full lg:w-[380px]"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const text = `Hello Bamboo Tree! I would like to book a room.%0A%0A*Guests:* ${guests}%0A*Dates:* ${dates || 'Not selected'}`
                window.open(`https://wa.me/94767269361?text=${text}`, '_blank')
                window.location.href = `mailto:info@thebambootree.lk?subject=Room Booking Inquiry&body=${decodeURIComponent(text)}`
              }}
              className="w-full rounded-md border-[4px] border-[#febb02] bg-[var(--paper)] p-4 shadow-2xl lg:p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="font-serif-display text-lg text-[var(--ink)] lg:text-xl font-bold">
                  Book Your Room Today
                </p>
                <ArrowUpRightIcon className="h-5 w-5 text-[var(--forest)]" />
              </div>

              <div className="space-y-3">
                <WidgetField icon={UsersIcon}>
                  <select
                    aria-label="Guests and rooms"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-transparent text-base font-medium text-[var(--ink)] focus:outline-none cursor-pointer"
                  >
                    <option>1 Guest, 1 Room</option>
                    <option>2 Guests, 1 Room</option>
                    <option>2 Guests, 2 Rooms</option>
                    <option>4 Guests, 2 Rooms</option>
                  </select>
                </WidgetField>

                <WidgetField icon={CalendarIcon}>
                  <input
                    aria-label="Check-in and check-out dates"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => { if (!e.target.value) e.target.type = 'text' }}
                    placeholder="Check-in - Check-out"
                    className="w-full bg-transparent text-base font-medium text-[var(--ink)] placeholder-[var(--muted)] focus:outline-none"
                  />
                </WidgetField>
              </div>

              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#003b95] py-3.5 text-lg font-bold text-white transition-colors hover:bg-[#00224f]"
              >
                Book Now <ArrowRightIcon className="h-5 w-5" />
              </button>
            </form>

            <div className="mt-5 flex items-center justify-center gap-4 text-sm font-medium text-white shadow-black drop-shadow-md">
              <span>Or book on:</span>
              <a
                href="https://www.booking.com/hotel/lk/the-bamboo-tree-transit.html"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:underline transition-colors"
              >
                Booking.com
              </a>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <a
                href="https://www.google.com/travel/hotels/entity/CgsIo8a3ltO5oOXrARAB?hl=en-LK&gl=lk"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:underline transition-colors"
              >
                Google
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WidgetField({
  icon: Icon,
  children,
}: {
  icon: ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-3 rounded-[4px] border-2 border-[var(--line)] bg-[var(--paper)] px-4 py-3 focus-within:border-[#003b95]">
      <Icon className="h-5 w-5 shrink-0 text-[var(--ink)]" />
      {children}
    </div>
  )
}
