import mongoose from 'mongoose'
const { ObjectId } = mongoose.SchemaTypes

const chatSchema = new mongoose.Schema(
  {
    members: [
      {
        type: ObjectId,
        ref: 'User',
        minLength: 2,
        required: true,
      },
    ],
  },
  { timestamps: true }
)

export default mongoose.model('Chat', chatSchema)
