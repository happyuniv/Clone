'use client'

import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('dark')) setIsDark(true)
  }, [])

  const handleToggle = () => {
    if (localStorage.getItem('dark')) localStorage.removeItem('dark')
    else localStorage.setItem('dark', 'true')
    document.body.classList.toggle('dark')
    setIsDark(!isDark)
  }

  return (
    <>
      <label className='flex items-center p-2 w-16 h-8 border rounded-xl cursor-pointer'>
        <input
          type='checkbox'
          onChange={handleToggle}
          checked={isDark}
          className={`flex justify-center text-black appearance-none w-6 h-6 rounded-xl bg-green-200 transition checked:translate-x-6 checked:bg-white cursor-pointer ${
            isDark ? 'checked before:content-["🌝"]' : 'before:content-["🌞"]'
          }`}
        />
      </label>
    </>
  )
}
