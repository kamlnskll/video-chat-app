import React, { useState } from 'react'
import { registerNewUser } from '../axios/userRoutes'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='w-full h-screen'>
      <div className='border bg-gray-50 w-1/2 mx-auto h-1/2'>
        <form>
          <div className='pt-8 pb-4'>
            <input
              name='firstName'
              placeholder='First name'
              type='text'
              value={firstName}
              className='flex mx-auto w-3/4 h-[50px] outline-none text-sm pl-6 mb-4'
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              name='lastName'
              placeholder='Last name'
              type='text'
              value={lastName}
              className='flex mx-auto w-3/4 h-[50px] outline-none text-sm pl-6 mb-4'
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              name='email'
              placeholder='Email'
              type='text'
              value={email}
              className='flex mx-auto w-3/4 h-[50px] outline-none text-sm pl-6 mb-4'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              name='userName'
              placeholder='Username'
              type='text'
              value={userName}
              className='flex mx-auto w-3/4 h-[50px] outline-none text-sm pl-6 mb-4'
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              name='password'
              placeholder='Password'
              type='password'
              className='flex mx-auto w-3/4 h-[50px] outline-none text-sm pl-6'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type='button'
            className='font-bold py-1 bg-blue-300 mx-auto w-3/4'
            onClick={() => {
              console.log(firstName, lastName, userName, email, password)
              registerNewUser(firstName, lastName, userName, email, password)
              setFirstName('')
              setLastName('')
              setUserName('')
              setEmail('')
              setPassword('')
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
