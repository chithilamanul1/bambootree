'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StarIcon, XIcon } from 'lucide-react'
import { Button } from './Button'

interface ReviewPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function ReviewPopup({ isOpen, onClose }: ReviewPopupProps) {
  const [hoveredStar, setHoveredStar] = useState<number>(0)
  const [selectedStar, setSelectedStar] = useState<number>(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSelect = (rating: number) => {
    setSelectedStar(rating)
    setSubmitted(true)
    
    setTimeout(() => {
      if (rating === 5) {
        window.open('https://search.google.com/local/writereview?placeid=ChIJZ3qdCF7x4joRI-PNMs2Byus', '_blank')
        onClose()
      } else {
        setTimeout(() => onClose(), 2000)
      }
    }, 1000)
  }

  // Reset state when closed
  React.useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setHoveredStar(0)
        setSelectedStar(0)
        setSubmitted(false)
      }, 300)
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-md rounded-2xl bg-[var(--paper)] p-6 shadow-2xl pointer-events-auto border border-[var(--line)]"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-serif-display text-2xl text-[var(--ink)]">How was your stay?</h3>
                <button onClick={onClose} className="text-[var(--muted)] hover:text-[var(--ink)]">
                  <XIcon className="h-5 w-5" />
                </button>
              </div>

              {!submitted ? (
                <div className="mt-6 flex flex-col items-center">
                  <p className="text-[var(--muted)] mb-6 text-center">
                    Please rate your experience at The Bamboo Tree Transit Hotel.
                  </p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        onClick={() => handleSelect(star)}
                        className="transition-transform hover:scale-110 focus:outline-none"
                      >
                        <StarIcon
                          className={`h-12 w-12 transition-colors ${
                            star <= (hoveredStar || selectedStar)
                              ? 'fill-[#f59e0b] text-[#f59e0b]'
                              : 'fill-transparent text-[var(--muted)]'
                          }`}
                          strokeWidth={1.5}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex flex-col items-center py-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--sage)] mb-4">
                    <StarIcon className="h-8 w-8 text-[var(--forest)] fill-[var(--forest)]" />
                  </div>
                  <p className="font-serif-display text-xl text-[var(--ink)] text-center">
                    Thank you for your review!
                  </p>
                  <p className="text-center text-sm text-[var(--muted)] mt-2">
                    {selectedStar === 5 
                      ? "Redirecting you to Google to share your experience..." 
                      : "We appreciate your feedback and will use it to improve."}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
