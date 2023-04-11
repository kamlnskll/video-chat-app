import express from 'express'
import cors from 'cors'
import {
  fetchUserData,
  loginUser,
  registerNewUser,
} from '../controllers/user.js'
import { requireLogin } from '../utils/auth.js'

const router = express.Router()
router.use(cors())

router.post('/register', registerNewUser)
router.post('/login', loginUser)
router.use(requireLogin)
router.get('/fetchuserdata', fetchUserData)

export default router
