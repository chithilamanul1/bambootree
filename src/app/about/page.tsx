'use client'

import React from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { motion } from 'framer-motion'
import { LeafIcon, MapPinIcon, HeartIcon } from 'lucide-react'

export default function About() {
  return (
    <div className="w-full bg-[var(--paper)] pb-24">
      <PageHeader
        label="Our Story"
        title="The Bamboo Tree Hotel"
        description="We are the best place to stay in Negombo, a great hotel close to airport for your rest."
        image="https://images.unsplash.com/photo-1542314831-c6a4d1429d6d?auto=format&fit=crop&w=2000&q=80"
      />
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif-display text-4xl font-light leading-tight tracking-editorial text-[var(--ink)]">
              A better way to wait for your flight.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[var(--muted)]">
              <p>
                We built The Bamboo Tree Transit Hotel because layovers can be very tiring. You need a good hotel near airport to sleep and relax. We wanted to make a place where you can easily rest before your next flight.
              </p>
              <p>
                We are located just 5 minutes from the airport. We are a great hotel in airport area, near Negombo beach hotels and Seeduwa hotels. If you need an airport hotel international, we are here for you with clean rooms and nature.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div>
                <LeafIcon className="h-8 w-8 text-[var(--forest)]" />
                <h3 className="mt-4 font-serif-display text-xl text-[var(--ink)]">Eco-conscious</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">Sustainable practices in every room.</p>
              </div>
              <div>
                <MapPinIcon className="h-8 w-8 text-[var(--forest)]" />
                <h3 className="mt-4 font-serif-display text-xl text-[var(--ink)]">Ultra-close</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">Literally minutes from arrivals.</p>
              </div>
              <div>
                <HeartIcon className="h-8 w-8 text-[var(--forest)]" />
                <h3 className="mt-4 font-serif-display text-xl text-[var(--ink)]">Care-driven</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">Hospitality that anticipates needs.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1200&q=80"
              alt="Lobby of Bamboo Tree"
              className="rounded-3xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-8 -left-8 hidden rounded-2xl bg-[var(--sage)] p-8 lg:block">
              <p className="font-serif-display text-4xl text-[var(--forest)]">2018</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-[var(--muted)]">Year Founded</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
