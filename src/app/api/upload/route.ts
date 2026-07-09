import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'
import { verifyAuth } from '@/lib/auth'

export async function POST(request: Request): Promise<NextResponse> {
  const auth = await verifyAuth()
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const filename = searchParams.get('filename')

  if (!filename) {
    return NextResponse.json({ error: 'Filename is required' }, { status: 400 })
  }

  try {
    const blob = await put(filename, request.body as any, {
      access: 'public',
    })

    return NextResponse.json(blob)
  } catch (error) {
    console.error('Error uploading to Vercel Blob:', error)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
