import React, { useState } from 'react'
import { loginUser } from '../axios/userRoutes'
import { useUserContext } from '../hooks/useUserContext'

const Login = () => {
  const { dispatch } = useUserContext()
  const token = localStorage.getItem('token')

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='w-full h-screen'>
      <div className='border bg-gray-50 w-1/2 mx-auto h-1/2'>
        <div className='pt-8 pb-4'>
          <input
            name='username'
            placeholder='Username'
            type='text'
            className='flex mx-auto w-3/4 h-[50px] outline-none text-sm pl-6 mb-4'
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            name='password'
            placeholder='Password'
            type='password'
            className='flex mx-auto w-3/4 h-[50px] outline-none text-sm pl-6'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type='button'
          className='font-bold py-1 bg-blue-300 mx-auto w-3/4'
          onClick={() => {
            loginUser(userName, password).then((res?: any) => console.log(res))
            dispatch({ type: 'LOGIN', payload: token })
          }}
        >
          Login Button
        </button>
      </div>
    </div>
  )
}

export default Login
