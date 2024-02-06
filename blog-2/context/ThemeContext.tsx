'use client'

import { createContext, useEffect, useState } from 'react'

type ThemeContextType = {
  theme: string | undefined
  toggle: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: '',
  toggle: () => {},
})

const getFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem('theme')
    return value || 'light'
  }
}

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage()
  })

  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    localStorage.setItem('theme', theme!)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
