'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon, BedDoubleIcon } from 'lucide-react'
import { Button } from '../ui/Button'

const rooms = [
  { name: 'Transit Pod', available: '12 available', img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Bamboo Nightly', available: '9 available', img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Grove Suite', available: '4 available', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Family Cabin', available: '3 available', img: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?auto=format&fit=crop&w=1000&q=80' },
]

export function RoomPreview() {
  return (
    <section className="w-full bg-white pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end lg:gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif-display text-2xl font-light tracking-editorial text-[#17201b] sm:text-3xl lg:text-4xl">
              Best Hotel Rooms Near Airport
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#7b827b]">
              From quick transit rooms to nightly stays, we have the best airport accommodation for you.
            </p>
          </div>
          <Button href="/rooms" variant="outline" className="w-full sm:w-auto">
            See all <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Button>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:gap-5 lg:grid-cols-4">
          {rooms.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="group overflow-hidden rounded-2xl">
                <img src={r.img} alt={r.name} className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <p className="flex items-center gap-1.5 text-xs text-[#7b827b]">
                    <BedDoubleIcon className="h-3.5 w-3.5" /> {r.available}
                  </p>
                  <h3 className="mt-1 font-serif-display text-xl text-[#17201b]">{r.name}</h3>
                </div>
                <Button href="/rooms" variant="outline" className="!p-0 h-10 w-10 shrink-0 rounded-full">
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
