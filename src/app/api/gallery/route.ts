import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/db'
import { Gallery } from '@/models/Gallery'
import { verifyAuth } from '@/lib/auth'

export async function GET() {
  try {
    await connectToDatabase()
    const items = await Gallery.find({}).sort({ createdAt: -1 })
    return NextResponse.json(items)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const auth = await verifyAuth()
    if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    await connectToDatabase()
    const data = await req.json()
    const item = await Gallery.create(data)
    return NextResponse.json(item, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create gallery item' }, { status: 500 })
  }
}
