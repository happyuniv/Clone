'use client'

import Link from 'next/link'
import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'

const AuthLinks = () => {
  const [open, setOpen] = useState(false)

  const { status } = useSession()

  return (
    <>
      {status === 'unauthenticated' ? (
        <Link href='/login' className=''>
          Login
        </Link>
      ) : (
        <>
          <Link href='/write' className=''>
            Write
          </Link>
          <span className='' onClick={() => signOut()}>
            Logout
          </span>
        </>
      )}
      <div
        className='flex flex-col justify-between w-[20px] h-[16px] sm:hidden '
        onClick={() => setOpen(!open)}
      >
        <div className='h-[2px]'></div>
        <div className='h-[2px]'></div>
        <div className='h-[2px]'></div>
      </div>
      {open && (
        <div className='flex flex-col justify-center items-center gap-[50px] absolute top-[100px] left-0'>
          <Link href='/'>Homepage</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          {status === 'unauthenticated' ? (
            <Link href='/login'>Login</Link>
          ) : (
            <>
              <Link href='/write'>Write</Link>
              <span className=''>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks
