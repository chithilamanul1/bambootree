'use client'

import React from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { motion } from 'framer-motion'

const catalog = [
  {
    name: 'The Welcome Bouquet',
    price: '$45',
    desc: 'A bright mix of local tropicals, perfect for greeting someone at arrivals.',
    img: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Serenity Arrangement',
    price: '$65',
    desc: 'Calm whites and greens in a low vase. Ideal for a hotel room or small event.',
    img: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Anniversary Roses',
    price: '$85',
    desc: 'Classic deep red roses intertwined with eucalyptus and baby\'s breath.',
    img: 'https://images.unsplash.com/photo-1548842183-f22292f76db3?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Event Centerpiece',
    price: 'Custom',
    desc: 'Bespoke floral styling for corporate events or small weddings.',
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
  },
]

export default function FlowerShop() {
  return (
    <div className="w-full bg-white pb-24">
      <PageHeader
        label="Our Atelier"
        title="Blooms by Bamboo Tree"
        description="Freshly cut, beautifully arranged. For arrivals, apologies, and everything in between."
        image="https://images.unsplash.com/photo-1463043254199-7a3efd782ad1?auto=format&fit=crop&w=2000&q=80"
      />
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-serif-display text-3xl text-[#17201b]">Floral Catalog</h2>
          <p className="mt-2 text-[#7b827b]">Order online or visit our lobby shop.</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {catalog.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex justify-between gap-4">
                <h3 className="font-serif-display text-xl text-[#17201b]">{item.name}</h3>
                <span className="font-medium text-[#2e4a3f]">{item.price}</span>
              </div>
              <p className="mt-2 text-sm text-[#7b827b]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
