'use client'

import React from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { motion } from 'framer-motion'

const catalog = [
  {
    name: 'Blooming Orchid',
    price: '$45',
    desc: 'A beautiful blooming orchid plant, perfect for your indoor space.',
    img: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Peace Lily Plant',
    price: '$65',
    desc: 'A beautiful Peace Lily with calm whites and greens. Ideal for a bedroom or living room.',
    img: 'https://images.unsplash.com/photo-1593696954577-16d80d19bd08?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Potted Rose Plant',
    price: '$85',
    desc: 'Classic deep red rose plant, ready to bloom beautifully in your garden.',
    img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Tropical Hibiscus',
    price: '$35',
    desc: 'A vibrant tropical hibiscus plant to bring color to your outdoor space.',
    img: 'https://images.unsplash.com/photo-1590409386377-6d601b4c3df7?auto=format&fit=crop&w=800&q=80',
  },
]

export default function FlowerShop() {
  return (
    <div className="w-full bg-white pb-24">
      <PageHeader
        label="Our Atelier"
        title="Blooms by Bamboo Tree"
        description="Beautifully potted and cared for. Perfect for your home, garden, or as a gift."
        image="https://images.unsplash.com/photo-1463043254199-7a3efd782ad1?auto=format&fit=crop&w=2000&q=80"
      />
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-serif-display text-3xl text-[#17201b]">Plant Catalog</h2>
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
