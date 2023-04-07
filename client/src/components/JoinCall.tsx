import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'

type Props = {
  isOpen: boolean
  toggleFunction: any
}

const JoinCall = ({ isOpen, toggleFunction }: Props) => {
  const { socket } = useContext(RoomContext)

  const [callId, setCallId] = useState('')
  const navigate = useNavigate()
  const joinRoom = (id: string) => {
    socket.emit('join-room', id)
  }

  useEffect(() => {
    setCallId('')
  }, [isOpen])

  return (
    <>
      {isOpen ? (
        <div className='bg-white border rounded-xl w-[400px] h-[150px]'>
          <h1 className='text-center mt-4'>Please enter the call ID</h1>
          <div className='w-5/6 mx-auto'>
            <input
              placeholder='Call Id'
              className='border w-full pl-2 mt-4'
              value={callId}
              onChange={(e) => setCallId(e.target.value)}
            />
            <div className='w-1/2 mx-auto flex justify-around mt-4 gap-4'>
              <button
                type='button'
                className='bg-orange-300'
                onClick={() => {
                  toggleFunction(false)
                }}
              >
                Cancel
              </button>
              <button
                type='button'
                className='bg-blue-600'
                onClick={() => {
                  joinRoom(callId)
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default JoinCall
