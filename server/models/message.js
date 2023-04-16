import mongoose from 'mongoose'

const { ObjectId } = mongoose.SchemaTypes

const messageSchema = new mongoose.Schema({
  sender: {
    type: ObjectId,
    ref: 'User',
  },

  toChatWithId: {
    type: ObjectId,
    ref: 'Chat',
  },

  message: {
    type: String,
    required: true,
  },
})

export default mongoose.model('Message', messageSchema)
