'use client'

import React, { useState } from 'react'
import { Button } from './Button'
import { ReviewPopup } from './ReviewPopup'

export function ReviewAction() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="primary" className="mt-4 sm:mt-0">
        Add a Review
      </Button>
      <ReviewPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
