'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from 'lucide-react'
import { SectionLabel } from '../ui/SectionLabel'

const faqs = [
  {
    q: 'What is the best place to have a transit near Seeduwa?',
    a: 'The Bamboo Tree Transit Hotel is widely considered the best transit hotel near Seeduwa. We offer quiet, comfortable rooms, a 24/7 airport shuttle, and flexible hourly rates perfect for layovers.',
  },
  {
    q: 'How far is the hotel from Colombo International Airport?',
    a: 'We are located extremely close to the airport—just a 5-minute drive away. We provide a complimentary shuttle service that runs on a 30-minute loop to ensure you never miss a flight.',
  },
  {
    q: 'Can I book a layover hotel room by the hour?',
    a: 'Yes! We understand travel schedules can be unpredictable. You can book our Transit Pods or standard rooms for short blocks (starting at 3 hours) or for a full night.',
  },
  {
    q: 'Is this the best hotel in Seeduwa for families?',
    a: 'Absolutely. We offer spacious Family Cabins that feature connected rooms and kid-friendly amenities, making it a stress-free environment for traveling families.',
  },
  {
    q: 'Do you offer food and drinks 24/7?',
    a: 'Yes, our on-site café operates 24 hours a day. Whether you arrive at 2 PM or 2 AM, you can enjoy hot meals, fresh coffee, and tea.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="w-full bg-[#f4f4f1] py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <SectionLabel>Common Questions</SectionLabel>
          <h2 className="mt-5 font-serif-display text-3xl font-light leading-tight tracking-editorial text-[#17201b] sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-14 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-[#e6e6e1] bg-white transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
              >
                <span className="font-serif-display text-lg text-[#17201b]">{faq.q}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-[#2e4a3f] transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-[#7b827b]">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
