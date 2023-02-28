import { Router } from 'express'
import { registerUser, loginUser, getMe } from '../controller/userController'

const router = Router()

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)

export default router
