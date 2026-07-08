'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FlowerIcon, ArrowRightIcon } from 'lucide-react'
import { Button } from '../ui/Button'

export function BloomsFeature() {
  return (
    <section className="w-full bg-[#f4f4f1] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-1"
        >
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1400&q=80"
              alt="Fresh flower plant from Blooms by Bamboo Tree"
              className="h-[460px] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-white px-6 py-4 shadow-lg sm:block">
            <p className="font-serif-display text-2xl italic text-[#2e4a3f]">Blooms</p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#7b827b]">by Bamboo Tree</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-[#2e4a3f]">
            <FlowerIcon className="h-4 w-4" /> Our plant shop
          </span>
          <h2 className="mt-5 font-serif-display text-3xl font-light leading-tight tracking-editorial text-[#17201b] sm:text-4xl">
            Beautiful flower plants for your home and garden.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-[#7b827b]">
            Blooms by Bamboo Tree is our in-house plant shop. From beautiful 
            blooming orchids to lush green foliage, we bring the same care for 
            nature into every plant we offer.
          </p>
          <div className="mt-8">
            <Button href="/flowers" variant="primary">
              Explore Blooms <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
