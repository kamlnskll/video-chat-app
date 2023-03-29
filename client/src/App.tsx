import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Call from './pages/Call'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
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
