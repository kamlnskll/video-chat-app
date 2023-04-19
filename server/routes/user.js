import express from 'express'
import cors from 'cors'
import {
  AddContact,
  RemoveContact,
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
router.post('/addcontact', AddContact)
router.post('/removecontact', RemoveContact)

export default router
