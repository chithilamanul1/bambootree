'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { StarIcon, UsersIcon, CalendarIcon, HomeIcon } from 'lucide-react'

export function Hero() {
  const [dates, setDates] = useState('')
  const [guests, setGuests] = useState('1')
  const [rooms, setRooms] = useState(1)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hello Bamboo Tree! I would like to book.%0A%0A*Dates:* ${dates || 'Not selected'}%0A*Guests:* ${guests} Adults/Children%0A*Rooms:* ${rooms}`
    window.open(`https://wa.me/94767269361?text=${text}`, '_blank')
    window.location.href = `mailto:info@thebambootree.lk?subject=Room Booking Inquiry&body=${decodeURIComponent(text)}`
  }

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

        <div className="relative flex w-full flex-col justify-end gap-10 px-5 pb-12 pt-24 lg:px-12 lg:pb-16 lg:pt-0 lg:flex-1">
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
            className="w-full max-w-5xl"
          >
            <p className="mb-3 text-sm font-medium text-white drop-shadow-md">
              Reserve your room by just few clicks !
            </p>
            <form
              onSubmit={handleSearch}
              className="flex w-full flex-col items-stretch overflow-hidden rounded-xl bg-white shadow-2xl md:flex-row md:items-center"
            >
              {/* Date / Time */}
              <div className="flex flex-1 items-center gap-3 border-b border-gray-200 px-4 py-3 md:border-b-0 md:border-r">
                <CalendarIcon className="h-6 w-6 text-gray-300 shrink-0" />
                <input
                  type="text"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => { if (!e.target.value) e.target.type = 'text' }}
                  placeholder="Date / Time"
                  className="w-full bg-transparent text-sm font-medium text-[#006085] placeholder-[#006085] focus:outline-none"
                />
              </div>

              {/* Adults / Children */}
              <div className="flex flex-1 items-center gap-3 border-b border-gray-200 px-4 py-3 md:border-b-0 md:border-r">
                <UsersIcon className="h-6 w-6 text-gray-300 shrink-0" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-[#006085] focus:outline-none cursor-pointer appearance-none"
                >
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">2 Adults, 1 Child</option>
                  <option value="4">2 Adults, 2 Children</option>
                </select>
              </div>

              {/* Rooms */}
              <div className="flex w-full md:w-auto min-w-[140px] items-center justify-between border-b border-gray-200 px-4 py-3 md:border-b-0 md:border-r">
                <div className="flex items-center gap-3">
                  <HomeIcon className="h-6 w-6 text-gray-300 shrink-0" />
                  <span className="text-sm font-medium text-[#006085]">Rooms</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={rooms}
                    onChange={(e) => setRooms(parseInt(e.target.value) || 1)}
                    className="w-12 rounded border border-gray-300 px-2 py-1 text-center text-sm font-medium text-[#006085] focus:border-[#0082a9] focus:outline-none ml-2"
                  />
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="flex w-full md:w-auto md:min-w-[160px] items-center justify-center bg-[#008ba8] px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-[#00748d]"
              >
                Search
              </button>
            </form>

            <div className="mt-5 flex items-center gap-4 text-sm font-medium text-white shadow-black drop-shadow-md">
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
