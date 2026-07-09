'use client'

import React, { useState, ComponentType } from 'react'
import { motion } from 'framer-motion'
import { StarIcon, UsersIcon, CalendarIcon, ArrowRightIcon, ArrowUpRightIcon, PhoneIcon } from 'lucide-react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export function Hero() {
  const [dates, setDates] = useState('')
  const [adults, setAdults] = useState('1')
  const [children, setChildren] = useState('0')
  const [rooms, setRooms] = useState('1')
  const [phone, setPhone] = useState<string | undefined>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // 1. Send Email in Background
    try {
      await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dates, guests: `${adults} Adults, ${children} Children`, rooms, phone }), 
      })
    } catch (error) {
      console.error('Failed to send email:', error)
    } finally {
      setIsLoading(false)
    }

    // 2. Open WhatsApp (No Email redirect per user request)
    const text = `Hello Bamboo Tree! I would like to book.%0A%0A*Dates:* ${dates || 'Not selected'}%0A*Guests:* ${adults} Adults, ${children} Children%0A*Rooms:* ${rooms}%0A*My WhatsApp:* ${phone || 'Not provided'}`
    window.open(`https://wa.me/94767269361?text=${text}`, '_blank')
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
            className="w-full lg:w-[360px]"
          >
            <form
              onSubmit={handleSearch}
              className="w-full rounded-[1.5rem] border border-white/10 bg-[#0f241d]/80 p-6 shadow-2xl backdrop-blur-xl lg:p-7"
            >
              <div className="mb-6 flex items-center justify-between">
                <p className="font-serif-display text-xl text-white font-medium">
                  Book Your Room Today
                </p>
                <ArrowUpRightIcon className="h-5 w-5 text-white/70" />
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <WidgetField icon={UsersIcon}>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      className="w-full bg-transparent text-sm font-medium text-white focus:outline-none cursor-pointer [&>option]:text-black"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                    </select>
                  </WidgetField>
                  
                  <WidgetField icon={UsersIcon}>
                    <select
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                      className="w-full bg-transparent text-sm font-medium text-white focus:outline-none cursor-pointer [&>option]:text-black"
                    >
                      <option value="0">0 Children</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                      <option value="3">3 Children</option>
                    </select>
                  </WidgetField>
                </div>

                <WidgetField icon={UsersIcon}>
                  <select
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    className="w-full bg-transparent text-sm font-medium text-white focus:outline-none cursor-pointer [&>option]:text-black"
                  >
                    <option value="1">1 Room</option>
                    <option value="2">2 Rooms</option>
                    <option value="3">3 Rooms</option>
                    <option value="4">4 Rooms</option>
                  </select>
                </WidgetField>

                <WidgetField icon={CalendarIcon}>
                  <input
                    type="text"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => { if (!e.target.value) e.target.type = 'text' }}
                    placeholder="Add dates"
                    className="w-full bg-transparent text-sm font-medium text-white placeholder-white/60 focus:outline-none"
                  />
                </WidgetField>

                <WidgetField icon={PhoneIcon}>
                  <div className="w-full phone-input-glass">
                    <PhoneInput
                      placeholder="WhatsApp Number"
                      value={phone}
                      onChange={setPhone}
                      defaultCountry="LK"
                      international
                      className="w-full"
                    />
                  </div>
                </WidgetField>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-4 text-base font-semibold text-black transition-transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isLoading ? 'Sending...' : 'Book Now'} <ArrowRightIcon className="h-4 w-4" />
              </button>
            </form>
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
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 backdrop-blur-md focus-within:border-white/30 transition-colors">
      <Icon className="h-5 w-5 shrink-0 text-white/60" />
      {children}
    </div>
  )
}
