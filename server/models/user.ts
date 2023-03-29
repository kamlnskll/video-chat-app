import mongoose from 'mongoose'

const { ObjectId } = mongoose.SchemaTypes

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  userName: {
    type: String,
    required: true,
  },

  profilePic: {
    type: String,
    default:
      'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg',
  },

  bio: {
    type: String,
    maxLength: 150,
  },

  password: {
    type: String,
    required: true,
  },

  contacts: [
    {
      type: ObjectId,
      ref: 'User',
    },
  ],
})

export default mongoose.model('User', userSchema)
