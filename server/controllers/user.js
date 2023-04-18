import User from '../models/user.js'
import bcrypt from 'bcrypt'
import { generateJWTAccessToken } from '../utils/auth.js'

// Register a new user
// Make sure all fields are full from req.body, then check to see if existing user is in DB. If not, create the new user.

export const registerNewUser = async (req, res) => {
  const { firstName, lastName, userName, email, password } = req.body
  // const checkIfUserEmailIsTaken = await User.find({ email })
  // const checkIfUserNameIsTaken = await User.find({ userName })

  if (!email || !firstName || !lastName || !userName || !password) {
    res.status(400)
    throw new Error('Please fill out all registration fields')
  }

  // if (checkIfUserEmailIsTaken) {
  //   res.status(400)
  //   throw new Error('Email address already in use.')
  // }

  // if (checkIfUserNameIsTaken) {
  //   res.status(400)
  //   throw new Error('Username already in use.')
  // }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const newUser = await User.create({
    firstName,
    lastName,
    userName,
    email,
    password: hashedPassword,
  })

  if (newUser) {
    const token = generateJWTAccessToken(newUser._id)
    res.status(201).json({
      id: newUser._id,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      userName: newUser.userName,
      token,
    })
  } else {
    res.status(400)
    throw new Error('Could not create user')
  }

  res.json({ message: 'New user successfully registered' })
}

// Login existing user

export const loginUser = async (req, res) => {
  const { userName, password } = req.body
  if (!userName || !password) {
    res.status(400)
    throw new Error('Please fill out all fields to login')
  }
  const findUser = await User.findOne({ userName })
  if (findUser && (await bcrypt.compare(password, findUser.password))) {
    const token = generateJWTAccessToken(findUser._id)
    res.json({
      _id: findUser._id,
      fullName: findUser.firstName + ' ' + findUser.lastName,
      username: findUser.userName,
      token,
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
}

export const fetchUserData = async (req, res) => {
  // const userId = req.user
  const user = await User.findById(req.user).populate('contacts')
  if (user) {
    res.status(200).json(user)
  } else {
    res.status(400)
    throw new Error('Could not fetch user')
  }
}

export const fetchProfile = async (req, res) => {
  const user = await User.findOne({ userName: req.params.userName }).populate(
    'contacts'
  )
  if (user) {
    res.status(200).json(user)
  } else {
    res.status(400)
    throw new Error('Could not fetch user')
  }
}

export const searchUsers = async (req, res) => {
  try {
    const searchTerm = req.body.searchTerm

    // Search collection for a match

    if (req.body.searchTerm !== '' || null) {
      const searchResults = await User.find({
        $or: [{ userName: { $regex: searchTerm, $options: 'i' } }],
      }).exec()

      res.send(searchResults)
    }
  } catch (err) {
    console.log(err)
  }
}

export const AddContact = async (req, res) => {
  const myId = req.user
  const contact = await User.find({ userName: req.body.username }).select(
    '_id userName contacts'
  )
  const contactId = contact._id

  if (contactId && myId && contactId == myId) {
    console.log('Cannot add yourself')
  }
  if (contactId && myId && contact.contacts.includes(req.user)) {
    console.log('You are already following this person')
  } else {
    try {
      await User.findOneAndUpdate(
        { _id: contactId },
        { $push: { contacts: req.user } },
        { new: true }
      )
      await User.findOneAndUpdate(
        { _id: req.user },
        { $push: { contacts: contactId } },
        { new: true }.then((res) => console.log(res))
      )
      return res
    } catch (err) {
      console.log(err)
    }
  }
}

export const RemoveContact = async (req, res) => {
  const myId = req.user
  const contact = await User.find({ userName: req.body.username }).select(
    '_id userName contacts'
  )
  const contactId = contact._id

  if (contactId == req.user) {
    console.log('You cannot unfollow yourself')
  }

  if (!contact.contacts.includes(req.user)) {
    console.log('You are already not following this account')
  } else {
    try {
      await User.findByIdAndUpdate(
        contactId,
        { $pull: { contacts: req.user } },
        { new: true }
      )
      await User.findByIdAndUpdate(
        req.user,
        { $pull: { following: contactId } },
        { new: true }
      ).then(console.log('User unfollowed'))
      return res
    } catch (err) {
      console.log(err)
    }
  }
}
