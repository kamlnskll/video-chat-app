import React from 'react'

type ModalProps = {
  isOpen: boolean
  toggleModal: any
}

const ChatModal = ({ isOpen, toggleModal }: ModalProps) => {
  return isOpen ? (
    <div className='w-[300px] h-[300px] bg-gray-100 rounded-xl relative'>
      <h1 className='text-center pt-2 font-semibold'>Start a chat</h1>
      <h1
        className='absolute font-bold top-1 right-3 cursor-pointer text-red-600'
        onClick={() => toggleModal(!isOpen)}
      >
        x
      </h1>
    </div>
  ) : (
    <div className='hidden'></div>
  )
}

export default ChatModal
