import Chat from '../models/chat.js'
import Message from '../models/message.js'
import mongoose from 'mongoose'
const { ObjectId } = mongoose.Types

export const createNewChat = async (req, res) => {
  const newChat = new Chat({
    members: [req.body.senderId, req.body.receiverId],
  })

  try {
    const saveChat = await newChat.save()
    res.status(200).json(saveChat)
  } catch (err) {
    res.status(500).json(err)
  }
}

export const fetchExistingChats = async (req, res) => {
  try {
    const chats = await Chat.find({
      members: { $in: [req.user] },
    }).populate('members')
    res.status(200).json(chats)
  } catch (err) {
    res.status(500).json(err)
  }
}

export const fetchMessagesInChat = async (req, res) => {
  try {
    const messages = await Message.find({
      toChatWithId: req.params.chatId,
    }).populate('sender')
    res.status(200).json(messages)
  } catch (err) {
    console.log(err)
  }
}

export const createNewMessage = async (req, res) => {
  const newMessage = new Message({
    message: req.body.message,
    sender: req.user,
    toChatWithId: req.body.toChatWithId,
  })
  try {
    const saveMessage = await newMessage.save()
    await saveMessage.populate('sender')
    res.status(200).json(saveMessage)
  } catch (err) {
    console.log(err)
  }
}
