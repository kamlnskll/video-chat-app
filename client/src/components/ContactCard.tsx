import React from 'react'
import { useNavigate } from 'react-router-dom'
import { removeContact } from '../axios/userRoutes'

type Props = {
  contact: any | undefined
}
const ContactCard = ({ contact }: Props) => {
  const navigate = useNavigate()

  return (
    <div
      className='flex p-2 mx-6 hover:bg-gray-100 cursor-pointer rounded-xl relative'
      onClick={() => navigate(`/profile/${contact.userName}`)}
    >
      <div className='absolute right-3 top-1/3 z-50'>
        <h1
          className='text-xs opacity-50 text-red-700 hover:opacity-100'
          onClick={() => {
            removeContact(contact.userName).then((res) => console.log(res))
          }}
        >
          X
        </h1>
      </div>
      <div>
        <img
          alt='profile pic tag'
          src={contact?.profilePic}
          className='w-[50px] h-[50px]'
        />
      </div>
      <div>
        <h1>{contact?.userName}</h1>
      </div>
    </div>
  )
}

export default ContactCard
