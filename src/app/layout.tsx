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
  title: 'The Bamboo Tree | Transit Hotel',
  description: 'A calm, green transit hotel minutes from the airport — restful rooms for travelers between journeys.',
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
