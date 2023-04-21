import React, { useContext, useState } from 'react'

type Props = {
  user: any
}

const AccountEdit = ({ user }: Props) => {
  const [characterCount, setCharacterCount] = useState(0)

  const [userData, setUserData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    bio: user.bio,
  })

  return (
    <div className='relative ml-14 h-full'>
      <div className='absolute bottom-2 right-24'>
        <button
          type='button'
          className='border p-1 rounded-lg text-xs bg-gray-200 hover:bg-gray-400'
          onClick={() => {}}
        >
          Confirm
        </button>
      </div>
      <div className='mt-2'>
        <h1 className='text-xs font-semibold'>Username</h1>
        <input
          className='flex w-[220px] h-[40px] outline-none border-gray-100 border bg-gray-100 rounded-lg text-xs placeholder:font-semibold pl-2'
          value={userData.userName}
        />
      </div>
      <div className='mt-4'>
        <h1 className='text-xs font-semibold'>First Name</h1>
        <input
          className='flex w-[220px] h-[40px] outline-none border-gray-100 border bg-gray-100 rounded-lg text-xs placeholder:font-semibold pl-2'
          value={userData.firstName}
        />
      </div>
      <div className='mt-4'>
        <h1 className='text-xs font-semibold'>Last Name</h1>
        <input
          className='flex w-[220px] h-[40px] outline-none border-gray-100 border bg-gray-100 rounded-lg text-xs placeholder:font-semibold pl-2'
          value={userData.lastName}
        />
      </div>
      <div className='mt-2'>
        <h1 className='text-xs font-semibold'>Bio</h1>
        <textarea
          className='flex w-[220px] h-[100px] outline-none border-gray-100 border bg-gray-100 rounded-lg text-xs placeholder:font-semibold pl-2 pt-1'
          value={userData.bio}
        />
        <h1 className='text-xs ml-48 mt-1'>{}/150</h1>
      </div>
    </div>
  )
}

export default AccountEdit
