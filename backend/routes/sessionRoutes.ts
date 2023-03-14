import { Router } from 'express'
import { getSession, setSession, updateSession, deleteSession } from '../controller/sessionController'

const router = Router()

router.route('/').get(getSession).post(setSession)

router.route('/:id').put(updateSession).delete(deleteSession)

export default router
