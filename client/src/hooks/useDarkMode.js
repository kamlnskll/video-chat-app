import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.theme)
  const themeColor = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(themeColor)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, themeColor])

  return [setTheme, themeColor]
}
