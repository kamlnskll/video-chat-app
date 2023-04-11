import React, { useState } from 'react'
import { loginUser } from '../axios/userRoutes'
import { useUserContext } from '../hooks/useUserContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { dispatch } = useUserContext()
  const token = localStorage.getItem('token')

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  return (
    <div className='bg-svg-pattern h-screen relative'>
      <div className='absolute left-1/4'>
        <div className='text-3xl mt-32 font-bold text-blue-700'>
          <h1 className='text-center'>Zoom Clone</h1>
        </div>
        <div className='bg-gray-100 w-[450px] h-[350px] mx-auto rounded-xl relative mt-12'>
          <div className='text-lg pt-4 font-bold text-black-700'>
            <h1 className='text-center uppercase'>Login</h1>
          </div>
          <form>
            <div className='mt-4'>
              <input
                name='username'
                placeholder='Username'
                type='text'
                className='flex mx-auto w-3/4 h-[50px] outline-none border rounded-lg text-sm pl-6 mb-4'
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                name='password'
                placeholder='Password'
                type='password'
                className='flex mx-auto w-3/4 h-[50px] outline-none text-sm pl-6 border rounded-lg'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='mt-8'>
              <button
                type='button'
                className='font-bold py-1 bg-blue-700 hover:bg-blue-800 mx-auto rounded-lg text-white w-1/2 ml-28 border text-center'
                onClick={() => {
                  loginUser(userName, password)
                  dispatch({ type: 'LOGIN', payload: token })
                }}
              >
                Login
              </button>
            </div>
          </form>
          <h1 className='text-xs pt-10 text-center font-semibold'>
            Need an account?{' '}
            <span
              className='text-blue-700 hover:text-blue-800 hover:cursor-pointer'
              onClick={() => {
                navigate('/register')
              }}
            >
              Register here
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Login
