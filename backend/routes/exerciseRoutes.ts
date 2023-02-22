import { Router } from 'express'
import { getExercise, setExercise, updateExercise, deleteExercise } from '../controller/exerciseController'

const router = Router()

router.route('/').get(getExercise).post(setExercise)

router.route('/:id').put(updateExercise).delete(deleteExercise)

export default router
