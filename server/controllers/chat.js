import Chat from '../models/chat'

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
