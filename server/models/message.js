import mongoose from 'mongoose'

const { ObjectId } = mongoose.SchemaTypes

const messageSchema = new mongoose.Schema({
  sender: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },

  toChatWithId: {
    type: ObjectId,
    ref: 'Chat',
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
})

export default mongoose.model('Message', messageSchema)
