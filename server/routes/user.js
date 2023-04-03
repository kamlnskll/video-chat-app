import express from 'express'
import cors from 'cors'
import { loginUser, registerNewUser } from '../controllers/user.js'

const router = express.Router()
router.use(cors())

router.post('/register', registerNewUser)
router.post('/login', loginUser)

export default router
