import { Router } from 'express'
import { getSet, setSet, updateSet, deleteSet } from '../controller/setController'

const router = Router()

router.route('/').get(getSet).post(setSet)

router.route('/:id').put(updateSet).delete(deleteSet)

export default router
