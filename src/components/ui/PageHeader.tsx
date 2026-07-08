'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from './SectionLabel'

interface PageHeaderProps {
  label: string
  title: React.ReactNode
  description?: string
  image: string
}

export function PageHeader({ label, title, description, image }: PageHeaderProps) {
  return (
    <section className="w-full px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem]">
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/45" />
        </div>
        <div className="relative px-6 pb-14 pt-40 sm:px-12 lg:pt-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <SectionLabel tone="light">{label}</SectionLabel>
            <h1 className="mt-5 font-serif-display text-5xl font-light leading-[0.98] tracking-editorial text-white sm:text-6xl">
              {title}
            </h1>
            {description && (
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
