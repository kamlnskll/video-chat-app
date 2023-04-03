import React, {useState} from 'react'
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
      <div className='pt-8 pb-4'>
      <input name="firstName" placeholder="First name" type="text" className='flex mx-auto w-3/4 h-[50px] outline-none text-sm pl-6 mb-4' onChange={(e) => setFirstName(e.target.value)} />
      <input name="username" placeholder="Last name" type="text" className='flex mx-auto w-3/4 h-[50px] outline-none text-sm pl-6 mb-4' onChange={(e) => setLastName(e.target.value)} />
      <input name="email" placeholder="Email" type="text" className='flex mx-auto w-3/4 h-[50px] outline-none text-sm pl-6 mb-4' onChange={(e) => setEmail(e.target.value)} />
      <input name="username" placeholder="Username" type="text" className='flex mx-auto w-3/4 h-[50px] outline-none text-sm pl-6 mb-4' onChange={(e) => setUserName(e.target.value)} />
      <input name="password" placeholder="Password" type="password" className='flex mx-auto w-3/4 h-[50px] outline-none text-sm pl-6' onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button type='button' className='font-bold py-1 bg-blue-300 mx-auto w-3/4' onClick={() => registerNewUser(firstName, lastName, email, userName, password).then((res) => console.log(res))}>
        Register
      </button>
      </div>
      
    </div>
  )
}

export default Register