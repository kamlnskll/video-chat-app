import React from 'react'
import { io } from 'socket.io-client'

const Call = () => {
  const socket = io('http://localhost:8000')

  return (
    <div>
      <div>
        <h1>Video Chat Section Here</h1>
      </div>
      <div>
        <h1>Video Settings Bar</h1>
      </div>
    </div>
  )
}

export default Call
