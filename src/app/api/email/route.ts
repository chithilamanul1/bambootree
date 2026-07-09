import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { dates, guests, rooms, phone } = await req.json()

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Resend trial requires this from address unless domain is verified
      to: ['info@bambootree.lk'],
      subject: 'New Room Booking Inquiry - Bamboo Tree',
      html: `
        <h2>New Booking Inquiry</h2>
        <p><strong>Customer WhatsApp:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Dates:</strong> ${dates || 'Not selected'}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Rooms:</strong> ${rooms || 1}</p>
      `,
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
