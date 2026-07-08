'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { StarIcon } from 'lucide-react'
import { SectionLabel } from '../ui/SectionLabel'

const testimonials = [
  { quote: 'Perfect for a long layover. Quiet, spotless, and I actually slept before my morning flight. The shuttle was right on time.', name: 'Anjali R.', detail: 'Layover guest · Colombo' },
  { quote: 'Booked a pod for six hours and it felt like a proper hotel. The green, calm vibe is such a relief after a busy terminal.', name: 'Marcus T.', detail: 'Business traveler · Singapore' },
  { quote: 'Ordered a bouquet from Blooms for a friend arriving on the same flight — beautiful work and delivered to arrivals. Lovely touch.', name: 'Priya S.', detail: 'Blooms customer' },
]

export function Testimonials() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Guest stories</SectionLabel>
          <h2 className="mt-5 font-serif-display text-3xl font-light leading-tight tracking-editorial text-[#17201b] sm:text-4xl">
            Travelers rest easy here.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-3xl border border-[#e6e6e1] bg-[#f4f4f1] p-8"
            >
              <div className="flex gap-1 text-[#e2c56b]">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-[#3a423c]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-[#e6e6e1] pt-5">
                <p className="font-serif-display text-lg text-[#17201b]">{t.name}</p>
                <p className="text-xs text-[#7b827b]">{t.detail}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
