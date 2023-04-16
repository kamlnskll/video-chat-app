import axios from 'axios'

// @ts-ignore
const token = JSON.parse(localStorage.getItem('token'))

axios.defaults.headers.common = { Authorization: `Bearer ${token}` }

export const getChats = async () => {
  try {
    const chats = await axios.get(`http://localhost:8000/api/chat/getchats`)
    return chats.data
  } catch (err) {
    console.log(err)
  }
}

export const createNewChat = async (sender: any, receiver: any) => {
  const chatData = {
    senderId: sender,
    receiverId: receiver,
  }

  try {
    const newChat = await axios.post(
      `http://localhost:8000/api/chat/newchat`,
      chatData
    )
    return newChat
  } catch (err) {
    console.log(err)
  }
}