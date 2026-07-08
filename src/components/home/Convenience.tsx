'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PlaneIcon, ClockIcon, WifiIcon, ShowerHeadIcon, LuggageIcon, CoffeeIcon } from 'lucide-react'
import { SectionLabel } from '../ui/SectionLabel'

const features = [
  { icon: PlaneIcon, title: 'Free Airport Shuttle', desc: 'Free rides to and from the airport day and night.' },
  { icon: ClockIcon, title: 'Flexible Stays', desc: 'Book by the hour for a short layover or a full night.' },
  { icon: ShowerHeadIcon, title: 'Clean & Fresh', desc: 'Hot showers, clean beds, and dark rooms for good sleep.' },
  { icon: WifiIcon, title: 'Fast Free Wi-Fi', desc: 'Fast internet to work, watch movies, or check your flight.' },
  { icon: LuggageIcon, title: 'Luggage Storage', desc: 'Keep your bags safe with us while you go outside.' },
  { icon: CoffeeIcon, title: '24/7 Food & Drink', desc: 'Hot food, coffee, and tea ready any time you need it.' },
]

export function Convenience() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Made for travelers</SectionLabel>
          <h2 className="mt-4 font-serif-display text-2xl font-light leading-tight tracking-editorial text-[#17201b] sm:text-3xl lg:mt-5 lg:text-4xl">
            Everything you need for your airport layover and transit stay.
          </h2>
        </div>
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-[#e6e6e1] bg-[#e6e6e1] sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:rounded-3xl">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-white p-6 transition-colors hover:bg-[#f4f4f1] lg:p-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef1ea] text-[#2e4a3f] transition-colors group-hover:bg-[#2e4a3f] group-hover:text-white lg:h-11 lg:w-11">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-serif-display text-lg text-[#17201b] lg:mt-5 lg:text-xl">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#7b827b]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
