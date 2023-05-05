import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { UserContextProvider } from './context/auth'
import { RoomProvider } from './context/RoomContext'
import { BrowserRouter } from 'react-router-dom'
import { DarkModeProvider } from './context/DarkModeContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <DarkModeProvider>
          <RoomProvider>
            <App />
          </RoomProvider>
        </DarkModeProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
