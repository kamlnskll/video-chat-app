import React, { createContext, useState } from 'react'

// @ts-ignore
export const DarkModeContext = createContext()

export const DarkModeProvider = (props: any) => {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  )
}
