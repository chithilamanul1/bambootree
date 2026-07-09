import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/db'
import { Room } from '@/models/Room'
import { verifyAuth } from '@/lib/auth'

export async function GET() {
  try {
    await connectToDatabase()
    const rooms = await Room.find({}).sort({ createdAt: -1 })
    return NextResponse.json(rooms)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch rooms' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const auth = await verifyAuth()
    if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    await connectToDatabase()
    const data = await req.json()
    const room = await Room.create(data)
    return NextResponse.json(room, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create room' }, { status: 500 })
  }
}
