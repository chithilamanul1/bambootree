import { jwtVerify, SignJWT } from 'jose'
import { cookies } from 'next/headers'

const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET
  if (!secret || secret.length === 0) {
    throw new Error('The environment variable JWT_SECRET is not set.')
  }
  return secret
}

export async function signToken(payload: { user: string }) {
  const secret = new TextEncoder().encode(getJwtSecretKey())
  const alg = 'HS256'

  return new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secret)
}

export async function verifyAuth() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin-token')?.value

  if (!token) return null

  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()))
    return verified.payload
  } catch (err) {
    return null
  }
}
