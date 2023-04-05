import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Call from './pages/Call'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Chat from './pages/Chat'
import Contacts from './pages/Contacts'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import { useUserContext } from './hooks/useUserContext'

function App() {
  // const { user } = useUserContext()

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/call/:callId' element={<Call />} />
          <Route path='*' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
