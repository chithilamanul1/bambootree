'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircleIcon } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/94767269361"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
    >
      <MessageCircleIcon className="h-7 w-7" fill="white" strokeWidth={0} />
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
    </motion.a>
  )
}
