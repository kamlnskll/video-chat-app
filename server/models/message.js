import mongoose from 'mongoose'
import dayjs from 'dayjs'

const { ObjectId } = mongoose.SchemaTypes

const messageSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
)

export default mongoose.model('Message', messageSchema)
