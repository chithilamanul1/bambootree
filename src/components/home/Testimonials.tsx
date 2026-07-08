'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { StarIcon } from 'lucide-react'
import { SectionLabel } from '../ui/SectionLabel'

const testimonials = [
  { quote: 'The best colombo transit hotel! It is very quiet and clean. I slept great before my flight and the free car ride was on time.', name: 'Anjali R.', detail: 'Layover guest · Colombo' },
  { quote: 'I booked a transit room for six hours. It is a great layover hotel near the airport. Very nice and green hotel.', name: 'Marcus T.', detail: 'Business traveler · Singapore' },
  { quote: 'One of the best hotels in Negombo. The staff is so kind and the food is great. Very close to the airport.', name: 'Priya S.', detail: 'Happy customer' },
]

export function Testimonials() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Happy Guests</SectionLabel>
          <h2 className="mt-4 font-serif-display text-2xl font-light leading-tight tracking-editorial text-[#17201b] sm:text-3xl lg:mt-5 lg:text-4xl">
            Top hotel near airport for travelers.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:mt-14 lg:gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-[#e6e6e1] bg-[#f4f4f1] p-6 lg:rounded-3xl lg:p-8"
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
