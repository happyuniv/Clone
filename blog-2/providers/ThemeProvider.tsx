'use client'

import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    return (
      <div
        className={`${
          theme === 'light'
            ? 'text-black bg-transparent'
            : 'text-white bg-black'
        }`}
      >
        {children}
      </div>
    )
  }
}

export default ThemeProvider
