const express = require('express')
const router = express.Router()
const { getExercise, setExercise, updateExercise, deleteExercise } = require('../controller/exerciseController')

router.route('/').get(getExercise).post(setExercise)

router.route('/:id').put(updateExercise).delete(deleteExercise)

module.exports = router
