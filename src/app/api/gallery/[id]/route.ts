import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/db'
import { Gallery } from '@/models/Gallery'
import { verifyAuth } from '@/lib/auth'

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = await verifyAuth()
    if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    await connectToDatabase()
    const { id } = await params
    const item = await Gallery.findByIdAndDelete(id)
    if (!item) return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete gallery item' }, { status: 500 })
  }
}
