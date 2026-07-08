'use client'

import React from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { motion } from 'framer-motion'
import { LeafIcon, MapPinIcon, HeartIcon } from 'lucide-react'

export default function About() {
  return (
    <div className="w-full bg-white pb-24">
      <PageHeader
        label="Our Story"
        title="A Green Respite"
        description="Founded on the belief that transit doesn't have to be tiring."
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
            <h2 className="font-serif-display text-4xl font-light leading-tight tracking-editorial text-[#17201b]">
              Changing the way you wait.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#7b827b]">
              <p>
                The idea for The Bamboo Tree was born out of countless exhausting layovers. We realized that travelers don't just need a place to sit—they need a place to breathe, rest, and reset their clocks.
              </p>
              <p>
                Located just 5 minutes from the airport, we created a space that feels worlds away from the terminal. By integrating natural elements, soundproofing, and intuitive service, we provide an oasis of calm before your next journey.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div>
                <LeafIcon className="h-8 w-8 text-[#2e4a3f]" />
                <h3 className="mt-4 font-serif-display text-xl text-[#17201b]">Eco-conscious</h3>
                <p className="mt-2 text-sm text-[#7b827b]">Sustainable practices in every room.</p>
              </div>
              <div>
                <MapPinIcon className="h-8 w-8 text-[#2e4a3f]" />
                <h3 className="mt-4 font-serif-display text-xl text-[#17201b]">Ultra-close</h3>
                <p className="mt-2 text-sm text-[#7b827b]">Literally minutes from arrivals.</p>
              </div>
              <div>
                <HeartIcon className="h-8 w-8 text-[#2e4a3f]" />
                <h3 className="mt-4 font-serif-display text-xl text-[#17201b]">Care-driven</h3>
                <p className="mt-2 text-sm text-[#7b827b]">Hospitality that anticipates needs.</p>
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
            <div className="absolute -bottom-8 -left-8 hidden rounded-2xl bg-[#eef1ea] p-8 lg:block">
              <p className="font-serif-display text-4xl text-[#2e4a3f]">2018</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-[#7b827b]">Year Founded</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
