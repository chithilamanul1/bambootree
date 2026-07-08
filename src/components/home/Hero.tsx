'use client'

import React, { useState, ComponentType } from 'react'
import { motion } from 'framer-motion'
import { StarIcon, MapPinIcon, UsersIcon, CalendarIcon, ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react'

export function Hero() {
  const [location, setLocation] = useState('')
  const [guests, setGuests] = useState('1 Guest, 1 Room')
  const [dates, setDates] = useState('')

  return (
    <section className="relative min-h-screen w-full overflow-hidden px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="relative mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1400px] flex-col overflow-hidden rounded-[2rem]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2000&q=80"
            alt="Cabin glowing among misty bamboo forest at dusk"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/70" />
        </div>

        <div className="relative flex flex-1 items-center justify-center px-4 pt-28">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="pointer-events-none select-none text-center font-serif-display text-[16vw] font-light leading-none tracking-editorial text-white/95 lg:text-[13rem]"
          >
            Bamboo&nbsp;Tree
          </motion.h1>
        </div>

        <div className="relative grid gap-6 px-6 pb-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 lg:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-serif-display text-4xl font-light leading-[1.05] tracking-editorial text-white sm:text-5xl">
              Where Nature
              <br />
              Meets Comfort
            </h2>
            <div className="mt-5 flex items-center gap-3 text-white/85">
              <span className="flex items-center gap-1.5">
                <StarIcon className="h-4 w-4 text-[#e2c56b]" fill="currentColor" strokeWidth={0} />
                <span className="font-medium">4.9</span>
              </span>
              <span className="h-4 w-px bg-white/30" />
              <span className="text-sm">500+ Happy Travelers</span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            onSubmit={(e) => e.preventDefault()}
            className="w-full rounded-2xl border border-white/15 bg-black/40 p-4 backdrop-blur-xl lg:w-[380px]"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="font-serif-display text-lg text-white">
                Comfort, Inspired by Nature
              </p>
              <ArrowUpRightIcon className="h-4 w-4 text-white/60" />
            </div>

            <div className="space-y-2.5">
              <WidgetField icon={MapPinIcon}>
                <input
                  aria-label="Find location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Find location"
                  className="w-full bg-transparent text-sm text-white placeholder-white/50 focus:outline-none"
                />
              </WidgetField>

              <WidgetField icon={UsersIcon}>
                <select
                  aria-label="Guests and rooms"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent text-sm text-white focus:outline-none [&>option]:text-[#17201b]"
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
                  placeholder="Add dates"
                  className="w-full bg-transparent text-sm text-white placeholder-white/50 focus:outline-none"
                />
              </WidgetField>
            </div>

            <button
              type="submit"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-medium text-[#17201b] transition-transform hover:-translate-y-0.5"
            >
              Search <ArrowRightIcon className="h-4 w-4" />
            </button>
          </motion.form>
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
    <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5">
      <Icon className="h-4 w-4 shrink-0 text-white/60" />
      {children}
    </div>
  )
}
