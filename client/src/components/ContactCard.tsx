import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addContact, removeContact } from '../axios/userRoutes'
import { Delete } from '../static/icons/Delete'
import { Add } from '../static/icons/Add'
import { Profile } from '../static/icons/Profile'

type Props = {
  contact: any | undefined
}
const ContactCard = ({ contact }: Props) => {
  const navigate = useNavigate()

  return (
    <div
      className='flex p-2 mx-6 bg-gray-100 cursor-pointer rounded-xl relative'
      //
    >
      <div className='absolute right-3 bottom-[15px] z-50 flex gap-4 mr-2'>
        <div
          className='opacity-80 hover:bg-gray-200 rounded-lg p-1 text-slate-800 hover:opacity-100'
          onClick={() => navigate(`/profile/${contact.userName}`)}
        >
          <Profile />
        </div>
        <div
          className='opacity-80 hover:bg-gray-200 rounded-lg p-1 text-red-700 hover:opacity-100'
          onClick={() => {
            removeContact(contact.userName).then((res) => console.log(res))
          }}
        >
          <Delete />
        </div>
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
