'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const { status } = useSession()

  const router = useRouter()

  if (status === 'loading') {
    return <div className=''>Loading...</div>
  }

  if (status === 'authenticated') {
    router.push('/')
  }

  return (
    <div className='flex justify-center items-center mt-[60px]'>
      <div className='flex flex-col gap-[100px] px-[200px] py-[100px] rounded-lg text-white'>
        <button
          className='p-[20px] border-none rounded font-bold bg-[#ff5555]'
          onClick={() => signIn('google')}
        >
          Sign in with Google
        </button>
        <button className='p-[20px] border-none rounded font-bold bg-black'>
          Sign in with Github
        </button>
        <button className='p-[20px] border-none rounded font-bold bg-[#087BEA]'>
          Sign in with Facebook
        </button>
      </div>
    </div>
  )
}

export default LoginPage
