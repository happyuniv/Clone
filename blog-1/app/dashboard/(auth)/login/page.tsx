'use client'

import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Page() {
  const session = useSession()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as typeof e.target & HTMLInputElement[]
    const email = target[0].value
    const password = target[1].value

    signIn('credentials', { email, password })
  }

  if (session.status === 'loading') return <p>Loading</p>
  if (session.status === 'authenticated') {
    router.push('/dashboard')
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
            className='p-3 border rounded-md'
          />
          <button className='p-3 bg-green-200'>Login</button>
        </form>
        <Link href={'/dashboard/register'}>Register Account</Link>
      </div>
    </>
  )
}
