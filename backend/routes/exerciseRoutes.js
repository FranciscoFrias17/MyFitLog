const express = require('express')
const router = express.Router()
const { getExercise } = require('../controller/exerciseController')

router.get('/', getExercise)

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Set exercise' })
})

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update exercise ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete exercise ${req.params.id}` })
})

module.exports = router
