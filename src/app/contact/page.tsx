'use client'

import React, { useState } from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    setTimeout(() => {
      setFormState('success')
    }, 1000)
  }

  return (
    <div className="w-full bg-[var(--paper-alt)] pb-24">
      <PageHeader
        label="Contact Bamboo Tree Hotel"
        title="Contact Our Airport Area Hotel"
        description="Need to know how to get from airport to hotel? We are an airside hotel location nearby. Call us anytime!"
        image="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?auto=format&fit=crop&w=2000&q=80"
      />
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-serif-display text-3xl text-[var(--ink)]">Contact Information</h2>
            <p className="mt-4 text-[var(--muted)]">Contact us using the details below. We answer emails very quickly.</p>
            
            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--paper)] text-[var(--forest)] shadow-sm border border-[var(--line)]">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl text-[var(--ink)]">Address</h3>
                  <p className="mt-1 text-[var(--muted)]">190, Colombo Road .Seeduwa</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--paper)] text-[var(--forest)] shadow-sm border border-[var(--line)]">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl text-[var(--ink)]">Phone & WhatsApp</h3>
                  <p className="mt-1 text-[var(--muted)]">+94 76 726 9361<br />+94 72 171 9490</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--paper)] text-[var(--forest)] shadow-sm border border-[var(--line)]">
                  <MailIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl text-[var(--ink)]">Email</h3>
                  <p className="mt-1 text-[var(--muted)]">info@bambootree.lk</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--paper)] text-[var(--forest)] shadow-sm border border-[var(--line)]">
                  <ClockIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl text-[var(--ink)]">Reception Hours</h3>
                  <p className="mt-1 text-[var(--muted)]">Open 24 hours, 7 days a week</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-[var(--paper)] p-8 shadow-sm lg:p-12 border border-[var(--line)]">
            <h2 className="font-serif-display text-3xl text-[var(--ink)]">Send a Message</h2>
            {formState === 'success' ? (
              <div className="mt-8 rounded-xl bg-[var(--sage)] p-6 text-center text-[var(--forest)]">
                <p className="font-medium">Thank you for your message!</p>
                <p className="mt-2 text-sm">We'll get back to you shortly.</p>
                <Button variant="outline" className="mt-6" onClick={() => setFormState('idle')}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[var(--ink-soft)]">Full Name</label>
                    <input required type="text" id="name" className="w-full rounded-xl border border-[var(--line)] bg-[var(--paper-alt)] px-4 py-3 text-sm text-[var(--ink)] focus:border-[var(--forest)] focus:bg-[var(--paper)] focus:outline-none" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[var(--ink-soft)]">Email Address</label>
                    <input required type="email" id="email" className="w-full rounded-xl border border-[var(--line)] bg-[var(--paper-alt)] px-4 py-3 text-sm text-[var(--ink)] focus:border-[var(--forest)] focus:bg-[var(--paper)] focus:outline-none" placeholder="jane@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-[var(--ink-soft)]">Subject</label>
                  <input required type="text" id="subject" className="w-full rounded-xl border border-[var(--line)] bg-[var(--paper-alt)] px-4 py-3 text-sm text-[var(--ink)] focus:border-[var(--forest)] focus:bg-[var(--paper)] focus:outline-none" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-[var(--ink-soft)]">Message</label>
                  <textarea required id="message" rows={5} className="w-full resize-none rounded-xl border border-[var(--line)] bg-[var(--paper-alt)] px-4 py-3 text-sm text-[var(--ink)] focus:border-[var(--forest)] focus:bg-[var(--paper)] focus:outline-none" placeholder="Write your message here..."></textarea>
                </div>
                <Button type="submit" variant="primary" className="w-full" disabled={formState === 'submitting'}>
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
