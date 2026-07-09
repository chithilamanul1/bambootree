'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from 'lucide-react'
import { Button } from '../ui/Button'

export function CtaBanner() {
  return (
    <section className="w-full bg-[var(--paper)] px-6 pb-16 lg:pb-24 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem]"
      >
        <img
          src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2000&q=80"
          alt="Misty bamboo forest"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative px-6 py-16 text-center sm:px-16 lg:py-20">
          <h2 className="mx-auto max-w-2xl font-serif-display text-3xl font-light leading-tight tracking-editorial text-white sm:text-5xl">
            Your next flight can wait. Rest first.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            Reserve a room in under a minute, or ask us anything on WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="https://www.booking.com/hotel/lk/the-bamboo-tree-transit.html" variant="light">
              Book your stay <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 hover:border-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
