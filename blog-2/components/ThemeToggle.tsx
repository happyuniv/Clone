'use client'

import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext)

  return (
    <div
      className='flex justify-between items-center relative w-[40px] h-[20px] rounded-[50px]'
      onClick={toggle}
      style={
        theme === 'dark'
          ? { backgroundColor: 'white' }
          : { backgroundColor: '#0f172a' }
      }
    >
      <Image src='/moon.png' alt='' width={14} height={14} />
      <div
        className='absolute w-[14px] h-[14px] rounded-[50%]'
        style={
          theme === 'dark'
            ? { left: 1, background: '#0f172a' }
            : { right: 1, background: 'white' }
        }
      ></div>
      <Image src='/sun.png' alt='' width={14} height={14} />
    </div>
  )
}

export default ThemeToggle
