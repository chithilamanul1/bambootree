import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bambootree.lk'),
  title: {
    template: '%s | Bamboo Tree Transit Hotel',
    default: 'The Bamboo Tree | Airport Transit Hotel Near Colombo',
  },
  description: 'The best airport transit hotel near Seeduwa and Negombo. A relaxing layover hotel just minutes from the Colombo International Airport with comfortable rooms.',
  keywords: [
    'bamboo tree transit hotel', 'the bamboo tree', 'bamboo tree hotel', 'bamboo tree seeduwa',
    'hotels near seeduwa', 'airport transit hotels', 'transit hotels', 'airport hotels',
    'hotels seeduwa', 'hotels negombo', 'seeduwa', 'hotel airport', 'hotel in airport',
    'hotel at the airport', 'hotel near airport', 'hotel close to airport', 'colombo transit hotel',
    'serenediva colombo transit hotel', 'international airport hotel', 'airport accommodation',
    'serenediva hotel', 'the airport hotel', 'serenediva colombo transit', 'airport motel',
    'airport to hotel', 'hotel airport international', 'airport in hotel', 'hotel to airport',
    'airport transfer hotel', 'hotel rooms airport', 'hotel room near airport', 'airport and hotel',
    'hotel airport city', 'airport lodge', 'the transit hotel', 'airport city hotel',
    'hotel on airport', 'hotel with airport', 'airport hotel room', 'hotel transit airport',
    'airside transit hotel', 'hotel on transit', 'hotel transit room', 'hotel at international airport',
    'negombo beach hotels', 'book airport hotel', 'airport room', 'the hotel airport',
    'hotel inside the airport', 'transit room hotel', 'srilankan airlines transit hotel',
    'rooms on airport', 'layover hotel', 'hotels in negombo sri lanka', 'negombo beach',
    'negombo hotel offers', 'airport hotel near airport', 'airport suite', 'airport area hotel',
    'hotel in airport area', 'from the airport to the hotel', 'from airport to hotel',
    'airport hotel international', 'best hotels in negombo', 'srilankan airlines free transit hotel',
    'negombo hotels room price', 'hotels negombo beach sri lanka', 'transit hotel srilankan airlines',
    'hotels near negombo', 'airport transit lodge', 'airport layover hotel', 'best hotels in negombo sri lanka',
    'airside hotel location', 'airside hotels', 'hostel transit', 'hotels on transit',
    'transit accommodation', 'transit hotel is', 'transit stay', 'hotel offers negombo',
    'airport layover rooms', 'hotels around negombo', 'hotels near negombo beach', 'airport hourly hotel',
    'seeduwa hotels', 'negombo beach hotels prices', 'negombo hotels low price', 'beach near negombo',
    'best beach hotels in negombo', 'best beach in negombo', 'best beach near negombo', 'best beach negombo',
    'best hotel in negombo beach', 'best place to stay in negombo', 'good hotels in negombo',
    'hotel price in negombo', 'hotell negombo sri lanka', 'hotels in negombo area', 'hotels in negombo offers',
    'hotels in seeduwa sri lanka', 'lanka beach hotel negombo', 'low price hotel in negombo',
    'low price hotels in negombo', 'negombo beach hotels room price', 'negombo beach negombo',
    'negombo hotel prices', 'negombo hotels near beach', 'negombo hotels room', 'negombo low price hotel',
    'negombo places to stay', 'negombo room', 'negombo room price', 'places to stay in negombo',
    'rooms in seeduwa', 'rooms seeduwa', 'seeduwa hotel rooms', 'seeduwa hotels sri lanka',
    'seeduwa new hotel', 'seeduwa sri lanka', 'top hotels in negombo'
  ],
  openGraph: {
    title: 'The Bamboo Tree | Airport Transit Hotel',
    description: 'A calm, green transit hotel minutes from the airport — restful rooms for travelers between journeys.',
    url: 'https://bambootree.lk',
    siteName: 'Bamboo Tree Hotel',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen w-full flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}
