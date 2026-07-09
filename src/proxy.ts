import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const secret = process.env.JWT_SECRET || 'fallback_secret'

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isAuthRoute = path === '/admin/login'
  const isAdminRoute = path.startsWith('/admin')

  // Not an admin route, continue
  if (!isAdminRoute) return NextResponse.next()

  const token = request.cookies.get('admin-token')?.value

  let isAuthenticated = false
  if (token) {
    try {
      await jwtVerify(token, new TextEncoder().encode(secret))
      isAuthenticated = true
    } catch (err) {
      // Invalid token
    }
  }

  if (isAuthRoute) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
    return NextResponse.next()
  }

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
