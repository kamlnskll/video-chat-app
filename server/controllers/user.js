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
  const user = await User.findById(req.user)
  if (user) {
    res.status(200).json(user)
  } else {
    res.status(400)
    throw new Error('Could not fetch user')
  }
}
