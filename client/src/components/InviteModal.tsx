import React, { useState } from 'react'

type Props = { 

isOpen: boolean,
callId: string | undefined
inviteModalHandler: Function | any

}



const InviteModal = ({isOpen, callId, inviteModalHandler}: Props ) =>
{
const [timer, setTimer] = useState(false)
   
const copyToClipboard = (value: string | any) => {
        setTimer(true)
        navigator.clipboard.writeText(value)
        setTimeout(() => {setTimer(false)}, 1200)
        }


  return (
    <>
    {isOpen ? (
        <div className='w-[400px] h-[150px] bg-white relative'>
        <h1 className='absolute text-sm right-2 top-1 hover:text-red-600 cursor-pointer' onClick={() => {inviteModalHandler(false)}}>X</h1>
        <h1 className='text-center pt-2 font-semibold text-lg'>Invite to call</h1>
        <div className='pl-5'><h1 className='underline'>Call ID:</h1>
        <h1>{callId}</h1>
        <button className='bg-blue-400 px-2 py-2 text-sm text-white rounded-md mt-2' type='button' onClick={() => copyToClipboard(callId)}>{timer ? <h1>Copied!</h1> : <h1>Copy to clipboard</h1>}</button>
        </div>

    </div>
  ) : (
    <div className='hidden'>
    </div>
  )
}
</>
  )}

export default InviteModal