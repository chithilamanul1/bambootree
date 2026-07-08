'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PlaneIcon, ClockIcon, WifiIcon, ShowerHeadIcon, LuggageIcon, CoffeeIcon } from 'lucide-react'
import { SectionLabel } from '../ui/SectionLabel'

const features = [
  { icon: PlaneIcon, title: 'Airport shuttle', desc: 'Complimentary transfers on a 30-minute loop, day and night.' },
  { icon: ClockIcon, title: 'Flexible stays', desc: 'Book by the hour for a layover or by the night for a full reset.' },
  { icon: ShowerHeadIcon, title: 'Fresh & ready', desc: 'Hot showers, fresh linen and blackout blinds in every room.' },
  { icon: WifiIcon, title: 'Fast Wi-Fi', desc: 'Reliable high-speed connection to work, stream or check in online.' },
  { icon: LuggageIcon, title: 'Luggage hold', desc: 'Secure storage so you can explore hands-free before your flight.' },
  { icon: CoffeeIcon, title: 'Round-the-clock café', desc: 'Warm meals, coffee and tea available whenever your body clock needs it.' },
]

export function Convenience() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Built for travelers</SectionLabel>
          <h2 className="mt-5 font-serif-display text-3xl font-light leading-tight tracking-editorial text-[#17201b] sm:text-4xl">
            Everything you need for the space between flights.
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[#e6e6e1] bg-[#e6e6e1] sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-white p-8 transition-colors hover:bg-[#f4f4f1]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef1ea] text-[#2e4a3f] transition-colors group-hover:bg-[#2e4a3f] group-hover:text-white">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-serif-display text-xl text-[#17201b]">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#7b827b]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
