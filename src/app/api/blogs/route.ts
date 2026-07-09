import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/db'
import { Blog } from '@/models/Blog'
import { verifyAuth } from '@/lib/auth'

export async function GET() {
  try {
    await connectToDatabase()
    const blogs = await Blog.find({}).sort({ createdAt: -1 })
    return NextResponse.json(blogs)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const auth = await verifyAuth()
    if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    await connectToDatabase()
    const data = await req.json()
    const blog = await Blog.create(data)
    return NextResponse.json(blog, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 })
  }
}
