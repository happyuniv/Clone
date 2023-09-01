'use client'

import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
]

export default function Navbar() {
  const session = useSession()
  return (
    <>
      <div className='flex justify-between items-center py-5'>
        <Link href={'/'} className='text-green-500 text-2xl font-extrabold'>
          lamamia
        </Link>
        <div className='flex justify-between items-center gap-5'>
          <DarkModeToggle />
          {links.map((link) => (
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          ))}
          {session.status === 'authenticated' && (
            <button className='p-1 bg-green-200' onClick={() => signOut()}>
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  )
}
