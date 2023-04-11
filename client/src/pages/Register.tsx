import React, { useState } from 'react'
import { registerNewUser } from '../axios/userRoutes'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  return (
    <div className='bg-svg-pattern h-screen relative'>
      <div className='absolute m-1/2 w-full'>
        <div className='text-3xl mt-32 font-bold text-blue-700'>
          <h1 className='text-center'>Zoom Clone</h1>
        </div>
        <div className='bg-gray-100 mt-12 w-[450px] h-[550px] mx-auto rounded-xl relative'>
          <div className='text-lg pt-4 font-bold text-black-700'>
            <h1 className='text-center uppercase'>Register</h1>
          </div>
          <form>
            <div className='pt-8 pb-4'>
              <input
                name='firstName'
                placeholder='First name'
                type='text'
                value={firstName}
                className='flex mx-auto w-3/4 h-[50px] outline-none border rounded-lg text-sm pl-6 mb-4'
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                name='lastName'
                placeholder='Last name'
                type='text'
                value={lastName}
                className='flex mx-auto w-3/4 h-[50px] outline-none border rounded-lg text-sm pl-6 mb-4'
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                name='email'
                placeholder='Email'
                type='text'
                value={email}
                className='flex mx-auto w-3/4 h-[50px] outline-none border rounded-lg text-sm pl-6 mb-4'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                name='userName'
                placeholder='Username'
                type='text'
                value={userName}
                className='flex mx-auto w-3/4 h-[50px] outline-none border rounded-lg text-sm pl-6 mb-4'
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                name='password'
                placeholder='Password'
                type='password'
                className='flex mx-auto w-3/4 h-[50px] outline-none border rounded-lg text-sm pl-6 mb-4'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type='button'
              className='font-bold py-1 bg-blue-700 hover:bg-blue-800 mx-auto rounded-lg text-white w-1/2 ml-28 border text-center'
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
          <h1 className='text-xs pt-10 text-center font-semibold'>
            Have an account?{' '}
            <span
              className='text-blue-700 hover:text-blue-800 hover:cursor-pointer'
              onClick={() => {
                navigate('/login')
              }}
            >
              Login here
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Register
