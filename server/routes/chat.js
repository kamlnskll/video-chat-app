import express from 'express'
import cors from 'cors'
import { createNewChat, fetchExistingChats } from '../controllers/chat.js'
import { requireLogin } from '../utils/auth.js'

const router = express.Router()
router.use(cors())

// router.use(requireLogin)
router.post('/createchat', createNewChat)
router.get('/getchats', fetchExistingChats)

export default router
