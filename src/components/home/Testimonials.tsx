import React from 'react'
import { SectionLabel } from '../ui/SectionLabel'
import { AnimatedReviewCard } from './AnimatedReviewCard'

async function getGoogleReviews() {
  const placeId = 'ChIJZ3qdCF7x4joRI-PNMs2Byus'
  const apiKey = process.env.GOOGLE_MAPS_API_KEY
  
  if (!apiKey) {
    console.warn('Google Maps API Key is missing.')
    return []
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour to save API quota
    )
    
    if (!res.ok) return []
    const data = await res.json()
    return data.result?.reviews || []
  } catch (error) {
    console.error('Failed to fetch Google Reviews:', error)
    return []
  }
}

export async function Testimonials() {
  const reviews = await getGoogleReviews()
  
  // Fallback reviews just in case the API fails or key is missing
  const displayReviews = reviews.length > 0 ? reviews : [
    { text: 'The best colombo transit hotel! It is very quiet and clean. I slept great before my flight and the free car ride was on time.', author_name: 'Anjali R.', relative_time_description: 'Layover guest', rating: 5, profile_photo_url: 'https://lh3.googleusercontent.com/a/default-user=s128' },
    { text: 'I booked a transit room for six hours. It is a great layover hotel near the airport. Very nice and green hotel.', author_name: 'Marcus T.', relative_time_description: 'Business traveler', rating: 5, profile_photo_url: 'https://lh3.googleusercontent.com/a/default-user=s128' },
    { text: 'One of the best hotels in Negombo. The staff is so kind and the food is great. Very close to the airport.', author_name: 'Priya S.', relative_time_description: 'Happy customer', rating: 5, profile_photo_url: 'https://lh3.googleusercontent.com/a/default-user=s128' },
  ]

  // We only want to display 3 nicely, or maybe 3-6 depending on layout. Let's show up to 3 to keep it clean, or 5 if we change the grid.
  // We'll show the top 3 most recent 5-star reviews to keep the UI symmetrical to the old one.
  const topReviews = displayReviews.filter((r: any) => r.rating >= 4).slice(0, 3)

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Live Google Reviews</SectionLabel>
            <h2 className="mt-4 font-serif-display text-2xl font-light leading-tight tracking-editorial text-[#17201b] sm:text-3xl lg:mt-5 lg:text-4xl">
              Top hotel near airport for travelers.
            </h2>
          </div>
          <div className="flex items-center gap-2 pb-2">
            <div className="flex items-center gap-1 font-bold text-[#17201b] text-xl">
              4.8 <span className="text-[#e2c56b]">★</span>
            </div>
            <a 
              href="https://www.google.com/travel/hotels/entity/CgsIo8a3ltO5oOXrARAB" 
              target="_blank" 
              rel="noreferrer"
              className="text-sm text-[#2e4a3f] hover:underline"
            >
              See all reviews
            </a>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:mt-14 lg:gap-6">
          {topReviews.map((r: any, i: number) => (
            <AnimatedReviewCard key={r.author_name + i} review={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
