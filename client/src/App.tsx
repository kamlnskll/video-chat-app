import React, { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Chat from './pages/Chat'
import Contacts from './pages/Contacts'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import { useUserContext } from './hooks/useUserContext'
import Room from './pages/Room'
import { fetchUserData } from './axios/userRoutes'

function App() {
  const { user } = useUserContext()

  return (
    <div>
      <Routes>
        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate to={'/'} />}
        />
        <Route
          path='/register'
          element={!user ? <Register /> : <Navigate to={'/'} />}
        />
        <Route
          path='/'
          element={user ? <Dashboard /> : <Navigate to={'/login'} />}
        />
        <Route
          path='/chat'
          element={user ? <Chat /> : <Navigate to={'/login'} />}
        />
        <Route
          path='/contacts'
          element={user ? <Contacts /> : <Navigate to={'/login'} />}
        />
        <Route
          path='/profile/:userName'
          element={user ? <Profile isMe={false} /> : <Navigate to={'/login'} />}
        />
        <Route
          path='/settings'
          element={user ? <Settings /> : <Navigate to={'/login'} />}
        />
        <Route
          path='/call/:callId'
          element={user ? <Room /> : <Navigate to={'/login'} />}
        />
        <Route path='*' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
