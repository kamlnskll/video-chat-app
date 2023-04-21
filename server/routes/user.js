import express from 'express'
import cors from 'cors'
import {
  AddContact,
  RemoveContact,
  editAccount,
  fetchProfile,
  fetchUserData,
  loginUser,
  registerNewUser,
  searchUsers,
} from '../controllers/user.js'
import { requireLogin } from '../utils/auth.js'

const router = express.Router()
router.use(cors())

router.post('/register', registerNewUser)
router.post('/login', loginUser)
router.use(requireLogin)
router.get('/fetchprofile/:userName', fetchProfile)
router.get('/fetchuserdata', fetchUserData)
router.post('/search', searchUsers)
router.post('/addcontact/:username', AddContact)
router.post('/removecontact/:username', RemoveContact)
router.put('/editaccount', editAccount)

export default router
