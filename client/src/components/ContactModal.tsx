import React from 'react'
import UserSearch from './UserSearch'

type ModalProps = {
  isOpen: boolean
  modalHandler: any
}

const ContactModal = ({ isOpen, modalHandler }: ModalProps) => {
  return (
    <>
      {isOpen ? (
        <div className='bg-white w-[500px] h-[300px] rounded-xl shadow-xl border border-gray-100 relative'>
          <h1
            className='absolute top-2 right-3 font-bold text-red-600 hover:text-red-700 cursor-pointer hover:bg-gray-200 hover:rounded-full px-2'
            onClick={() => modalHandler()}
          >
            X
          </h1>
          <div>
            <h1 className='text-center pt-4 font-semibold text-lg'>
              ADD NEW CONTACT
            </h1>
          </div>
          <UserSearch />
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default ContactModal
