'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LockIcon } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      if (res.ok) {
        window.location.href = '/admin' // Force full reload to update middleware cookies
      } else {
        setError('Invalid username or password')
      }
    } catch (err) {
      setError('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3f4f6]">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8 flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#003b95]/10">
            <LockIcon className="h-8 w-8 text-[#003b95]" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">Admin Login</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {error && <p className="text-sm font-medium text-red-600 text-center">{error}</p>}
          
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#003b95] focus:outline-none focus:ring-1 focus:ring-[#003b95]"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#003b95] focus:outline-none focus:ring-1 focus:ring-[#003b95]"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-[#003b95] py-3 text-base font-semibold text-white transition-colors hover:bg-[#00224f] disabled:opacity-70"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
