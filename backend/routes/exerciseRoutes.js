import express from 'express'
import { getExercise, setExercise, updateExercise, deleteExercise } from '../controller/exerciseController.js'

const router = express.Router()

router.route('/').get(getExercise).post(setExercise)

router.route('/:id').put(updateExercise).delete(deleteExercise)

export default router
