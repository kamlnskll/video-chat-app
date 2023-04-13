import React from 'react'

type Props = {
  contact: any | undefined
}

const ContactCard = ({ contact }: Props) => {
  return (
    <div className='border flex'>
      <div>
        <img src={contact?.profilePic} className='w-[50px] h-[50px]' />
      </div>
      <div>
        <h1>{contact?.userName}</h1>
      </div>
    </div>
  )
}

export default ContactCard
