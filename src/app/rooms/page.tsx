'use client'

import React from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { motion } from 'framer-motion'
import { BedDoubleIcon, UsersIcon, CheckIcon, ArrowRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const rooms = [
  {
    name: 'Transit Room Hotel',
    type: 'By the hour',
    price: 'From $25 / 3hrs',
    desc: 'A small, quiet room perfect for a short sleep between flights. It is the best airport accommodation for a quick rest.',
    guests: '1',
    bed: '1 Single',
    features: ['Quiet room', 'Reading light', 'USB charging', 'Shared clean showers'],
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Bamboo Hotel Room',
    type: 'Full night',
    price: 'From $80 / night',
    desc: 'Our normal private room with a bathroom. This is a great choice if you want hotels near Seeduwa Sri Lanka or Negombo hotels room price that is affordable.',
    guests: '2',
    bed: '1 Queen',
    features: ['Private bathroom', 'Hot shower', 'Smart TV', 'Work desk'],
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Airport Suite',
    type: 'Full night',
    price: 'From $120 / night',
    desc: 'A large airport suite for your layover hotel stay. It has more space to relax and premium bath items.',
    guests: '2',
    bed: '1 King',
    features: ['Seating area', 'Premium soap', 'Minibar', 'Coffee machine'],
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Family Cabin',
    type: 'Full night',
    price: 'From $150 / night',
    desc: 'Traveling with the whole crew? The Family Cabin offers connected sleeping areas and a larger bathroom to accommodate everyone comfortably.',
    guests: '4',
    bed: '2 Queens',
    features: ['Connected rooms', 'Large bathroom', 'Kid-friendly amenities', 'Extra luggage space'],
    img: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?auto=format&fit=crop&w=1000&q=80',
  },
]

export default function Rooms() {
  return (
    <div className="w-full bg-[var(--paper-alt)] pb-24">
      <PageHeader
        label="Hotel Rooms Airport"
        title="Rooms & Prices"
        description="Find the best hotel rooms near airport for your transit stay or layover. We offer great low price hotels in Negombo."
        image="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2000&q=80"
      />
      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12">
          {rooms.map((room, idx) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col overflow-hidden rounded-3xl bg-[var(--paper)] border border-[var(--line)] shadow-sm lg:flex-row"
            >
              <div className="relative h-64 w-full lg:h-auto lg:w-[45%]">
                <img
                  src={room.img}
                  alt={room.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-8 lg:p-12">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                      {room.type}
                    </span>
                    <h2 className="mt-2 font-serif-display text-3xl text-[var(--ink)]">
                      {room.name}
                    </h2>
                  </div>
                  <div className="text-right">
                    <p className="font-serif-display text-2xl text-[var(--forest)]">{room.price}</p>
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                  {room.desc}
                </p>
                <div className="mt-8 flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-sm text-[var(--ink-soft)]">
                    <UsersIcon className="h-5 w-5 text-[var(--forest-deep)]" /> Up to {room.guests} Guests
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--ink-soft)]">
                    <BedDoubleIcon className="h-5 w-5 text-[var(--forest-deep)]" /> {room.bed}
                  </div>
                </div>
                <hr className="my-8 border-[var(--line)]" />
                <div className="grid gap-3 sm:grid-cols-2">
                  {room.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-sm text-[var(--ink-soft)]">
                      <CheckIcon className="h-4 w-4 text-[var(--forest)]" /> {feat}
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Button variant="outline">
                    Check Availability <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
