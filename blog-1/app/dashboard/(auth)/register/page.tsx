'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as typeof e.target & HTMLInputElement[]
    const email = target[0].value
    const password = target[1].value

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    if (res.ok) {
      router.push('/dashboard/login?success=Account has been created')
    } else setError(data.error)
  }

  return (
    <>
      <div className='flex flex-col gap-5 justify-center items-center'>
        <form className='flex flex-col gap-8 w-[400px]' onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='email'
            className='p-3 border rounded-md'
          />
          <input
            type='password'
            placeholder='password'
            className='w-full p-3 border rounded-md'
          />
          <button className='p-3 bg-green-200'>Register</button>
        </form>
        <Link href={'/dashboard/login'}>Login with an existing account</Link>
      </div>
    </>
  )
}
