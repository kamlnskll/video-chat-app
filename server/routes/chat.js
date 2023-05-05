import express from 'express'
import cors from 'cors'
import {
  createNewChat,
  createNewMessage,
  fetchExistingChats,
  fetchMessagesInChat,
} from '../controllers/chat.js'
import { requireLogin } from '../utils/auth.js'

const router = express.Router()
router.use(cors())

router.use(requireLogin)
router.post('/newchat', createNewChat)
router.get('/getchats', fetchExistingChats)
router.get('/getmessages/:chatId', fetchMessagesInChat)
router.post('/sendmessage', createNewMessage)

export default router
