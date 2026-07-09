'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { StarIcon } from 'lucide-react'

interface ReviewProps {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  index: number;
}

export function AnimatedReviewCard({ review, index }: { review: ReviewProps, index: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col rounded-2xl border border-[#e6e6e1] bg-[#f4f4f1] p-6 lg:rounded-3xl lg:p-8"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={review.profile_photo_url} 
            alt={review.author_name} 
            className="h-10 w-10 rounded-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <div>
            <p className="font-serif-display text-lg text-[#17201b] leading-none">{review.author_name}</p>
            <p className="text-xs text-[#7b827b] mt-1">{review.relative_time_description}</p>
          </div>
        </div>
      </div>
      
      <div className="flex gap-1 text-[#e2c56b] mt-4">
        {Array.from({ length: 5 }).map((_, s) => (
          <StarIcon key={s} className={`h-4 w-4 ${s < review.rating ? 'fill-current' : 'text-gray-300'}`} strokeWidth={0} />
        ))}
      </div>
      
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[#3a423c]">
        {review.text.length > 200 ? review.text.substring(0, 200) + '...' : review.text}
      </blockquote>
    </motion.figure>
  )
}
