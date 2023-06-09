import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'

type Props = {
  isOpen: boolean
  toggleFunction: any
}

const JoinCall = ({ isOpen, toggleFunction }: Props) => {
  const { socket, me } = useContext(RoomContext)

  const [callId, setCallId] = useState('')
  const navigate = useNavigate()

  const joinRoom = (id: any, peerId: any) => {
    try {
      socket.emit('join-room', id, peerId._id)
      navigate(`/call/${id}`)
      // console.log('joined room', 'id:', id, 'peerid:', peerId._id)
    } catch (err) {
      console.log('Error joining room', err)
    }
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
                  joinRoom(callId, me)
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
