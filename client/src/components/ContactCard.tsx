import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  contact: any | undefined
}
const ContactCard = ({ contact }: Props) => {
  const navigate = useNavigate()

  return (
    <div
      className='flex p-2 mx-6 hover:bg-gray-100 cursor-pointer rounded-xl'
      onClick={() => navigate(`/profile/${contact.userName}`)}
    >
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
