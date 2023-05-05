import React, { useEffect, useState, useContext } from 'react'
import { userContext } from '../context/auth'
import { Add } from '../static/icons/Add'
import { createNewChat } from '../axios/chatRoutes'

type ModalProps = {
  isOpen: boolean
  toggleModal: any
}

const ChatModal = ({ isOpen, toggleModal }: ModalProps) => {
  const { userData } = useContext(userContext)
  const [contacts, setContacts] = useState([])

  // Want to create a useEffect that takes the userData id and the contact id after mapping contacts array and if there is no convo with both ids present, you can create it.

  useEffect(() => {
    console.log(userData)
    setContacts(userData.contacts)
  }, [])

  return isOpen ? (
    <div className='w-[300px] h-[300px] bg-gray-100 rounded-xl relative'>
      <h1 className='text-center pt-2 text-sm font-semibold'>Start a chat</h1>
      <h1
        className='absolute font-bold top-1 right-3 cursor-pointer text-red-600'
        onClick={() => toggleModal(!isOpen)}
      >
        x
      </h1>
      <div className='mx-6 text-xs mt-4'>
        <h1>Start a new chat with one of your contacts.</h1>
        <div className='mt-4'>
          {contacts.map((contact: any) => (
            <>
              <div className='w-[150px] h-[30px] rounded-lg flex justify-between'>
                <div className='flex ml-4'>
                  <img
                    src={contact.profilePic}
                    className='w-[25px] h-[25px]'
                    alt={`${contact.userName}'s profile pic`}
                  />
                  <h1 className='my-1 ml-2'>{contact.userName}</h1>
                </div>
                <div
                  className='scale-75 cursor-pointer text-emerald-600 hover:text-emerald-700'
                  onClick={() => createNewChat(userData._id, contact._id)}
                >
                  <Add />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className='hidden'></div>
  )
}

export default ChatModal
