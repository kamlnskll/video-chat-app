import { io } from 'socket.io-client'
import { createContext } from 'react'

const socket = io('http://localhost:8000')
const RoomContext = createContext<null | any>(null)

export const RoomProvider: React.FunctionComponent = ({ children }: any) => {
  return (
    <RoomContext.Provider value={{ socket }}> {children} </RoomContext.Provider>
  )
}
