import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/db'
import { Room } from '@/models/Room'
import { verifyAuth } from '@/lib/auth'

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await verifyAuth()
    if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    await connectToDatabase()
    const data = await req.json()
    const { id } = await params
    const room = await Room.findByIdAndUpdate(id, data, { new: true })
    if (!room) return NextResponse.json({ error: 'Room not found' }, { status: 404 })
    return NextResponse.json(room)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update room' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await verifyAuth()
    if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    await connectToDatabase()
    const { id } = await params
    const room = await Room.findByIdAndDelete(id)
    if (!room) return NextResponse.json({ error: 'Room not found' }, { status: 404 })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete room' }, { status: 500 })
  }
}
