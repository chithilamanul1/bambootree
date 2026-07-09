'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPinIcon, ClockIcon, WifiIcon, ShowerHeadIcon, LuggageIcon, CoffeeIcon } from 'lucide-react'
import { SectionLabel } from '../ui/SectionLabel'

const features = [
  { icon: MapPinIcon, title: 'Prime Location', desc: 'Located just minutes away from the airport to save your travel time.' },
  { icon: ClockIcon, title: 'Flexible Stays', desc: 'Book by the hour for a short layover or a full night.' },
  { icon: ShowerHeadIcon, title: 'Clean & Fresh', desc: 'Hot showers, clean beds, and dark rooms for good sleep.' },
  { icon: WifiIcon, title: 'Fast Free Wi-Fi', desc: 'Fast internet to work, watch movies, or check your flight.' },
  { icon: LuggageIcon, title: 'Luggage Storage', desc: 'Keep your bags safe with us while you go outside.' },
  { icon: CoffeeIcon, title: '24/7 Food & Drink', desc: 'Hot food, coffee, and tea ready any time you need it.' },
]

export function Convenience() {
  return (
    <section className="w-full bg-[var(--paper)] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Made for travelers</SectionLabel>
          <h2 className="mt-4 font-serif-display text-2xl font-light leading-tight tracking-editorial text-[var(--ink)] sm:text-3xl lg:mt-5 lg:text-4xl">
            Everything you need for your airport layover and transit stay.
          </h2>
        </div>
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:rounded-3xl">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-[var(--paper)] p-6 transition-colors hover:bg-[var(--paper-alt)] lg:p-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--sage)] text-[var(--forest)] transition-colors group-hover:bg-[#a9c4b3] group-hover:text-[#0a0f0c] lg:h-11 lg:w-11">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-serif-display text-lg text-[var(--ink)] lg:mt-5 lg:text-xl">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
