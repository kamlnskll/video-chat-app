import React from 'react'

type ChatProps = {
  chat: Array<string> | any
  isMe: boolean
}

const ChatBubble = ({ chat, isMe }: ChatProps) => {
  return (
    <>
      {isMe ? (
        <div>
          <h1>Michael</h1>
          <h1>{chat}</h1>
        </div>
      ) : (
        <div>
          <h1> OtherChat.Name</h1>
          <h1> OtherChat.Message</h1>
        </div>
      )}
    </>
  )
}

export default ChatBubble
