import React from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

const posts = [
  {
    title: 'Why Bamboo Tree is the Best Transit Hotel Near Seeduwa',
    slug: 'best-transit-hotel-seeduwa',
    date: 'July 8, 2026',
    excerpt: 'Discover why travelers rate us as the absolute best place to have a transit near Seeduwa and the Colombo International Airport.',
    image: 'https://images.unsplash.com/photo-1542314831-c6a4d1429d6d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'The Ultimate Colombo Airport Layover Guide',
    slug: 'colombo-airport-layover-guide',
    date: 'July 5, 2026',
    excerpt: 'Make the most of your layover. Find out how to travel from the airport to the hotel, and where to find the best transit accommodation.',
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1000&q=80',
  },
]

export default function BlogIndex() {
  return (
    <div className="w-full bg-[#f4f4f1] pb-24">
      <PageHeader
        label="Travel Guide"
        title="Our Blog"
        description="Tips, guides, and insights for travelers looking for the best hotels in Negombo and Seeduwa."
        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80"
      />
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <p className="text-sm font-medium tracking-wide text-[#7b827b]">
                  {post.date}
                </p>
                <h2 className="mt-3 font-serif-display text-2xl text-[#17201b] transition-colors group-hover:text-[#2e4a3f]">
                  {post.title}
                </h2>
                <p className="mt-4 flex-1 text-[#7b827b] leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#2e4a3f]">
                  Read Article <ArrowRightIcon className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
