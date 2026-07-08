import React from 'react'
import { Hero } from '@/components/home/Hero'
import { Convenience } from '@/components/home/Convenience'
import { RoomPreview } from '@/components/home/RoomPreview'
import { BloomsFeature } from '@/components/home/BloomsFeature'
import { Testimonials } from '@/components/home/Testimonials'
import { Faq } from '@/components/home/Faq'
import { CtaBanner } from '@/components/home/CtaBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <Convenience />
      <RoomPreview />
      <BloomsFeature />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  )
}
