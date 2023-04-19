import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { fetchUserData } from '../axios/userRoutes'
import Chatroom from '../components/Chatroom'
import { getChats } from '../axios/chatRoutes'
import ChatModal from '../components/ChatModal'
import { Add } from '../static/icons/Add'
import { userContext } from '../context/auth'

const Chat = () => {
  const { userData } = useContext(userContext)

  const [chat, setChat] = useState([])
  const [chatId, setChatId] = useState('')
  const [toggleNewChatModal, setToggleNewChatModal] = useState(false)

  const modalHandler = (e: any) => {
    setToggleNewChatModal(e)
  }

  useEffect(() => {
    getChats().then((res) => {
      setChat(res)
    })
  }, [])

  return (
    <div className='relative'>
      <div className='absolute top-1/3 left-1/3 z-20'>
        <ChatModal isOpen={toggleNewChatModal} toggleModal={modalHandler} />
      </div>
      <div>
        <Navbar />
      </div>
      <div className='mx-auto border-gray-50 shadow-sm border bg-white w-[700px] h-[500px] mt-12 relative rounded-xl grid grid-cols-8 grid-rows-8'>
        <div className='col-span-2 row-span-8 relative'>
          <h1
            className='text-center border-r border-gray-50 text-xs font-bold mt-4 mb-6'
            //@ts-ignore
            onClick={() => console.log(chat)}
          >
            {`Current Chats`}
          </h1>
          <div>
            {chat?.map((chatData: any) => {
              return (
                <div
                  className='rounded-lg mx-2 bg-gray-100 hover:bg-gray-200 mt-2 py-2 cursor-pointer'
                  onClick={() => {
                    console.log(chatData)
                    setChatId(chatData._id)
                  }}
                >
                  <div className='flex ml-2'>
                    <img
                      className='w-[25px] h-[25px]'
                      alt='PFP of other member'
                      src={
                        chatData.members.filter(
                          (user: any) => user._id !== userData._id
                        )[0].profilePic
                      }
                    />
                    <h1 className='ml-4 text-sm font-semibold'>
                      {
                        chatData.members.filter(
                          (user: any) => user._id !== userData._id
                        )[0].userName
                      }
                    </h1>
                  </div>
                </div>
              )
            })}
          </div>
          <h1
            className={
              !toggleNewChatModal
                ? `absolute rounded-full text-blue-500 top-2 right-2 hover:cursor-pointer hover:text-blue-600`
                : 'hidden'
            }
            onClick={() => {
              setToggleNewChatModal(!toggleNewChatModal)
            }}
          >
            <Add />
          </h1>
        </div>
        <div className='border-l border-gray-100 col-span-6 row-span-8'>
          <Chatroom chatId={chatId} />
        </div>
      </div>
    </div>
  )
}

export default Chat
